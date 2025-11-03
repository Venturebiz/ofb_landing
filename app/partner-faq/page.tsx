import type { Metadata } from "next"
import Link from "next/link"
import sanitizeHtml from "sanitize-html"

export const metadata: Metadata = {
  title: "Partner FAQ | OfferBeez",
  description:
    "Frequently Asked Questions for OfferBeez partners. Find answers about partnership programs, commission structures, onboarding, and more.",
  robots: "index, follow",
  alternates: { canonical: "/partner-faq" },
  openGraph: {
    title: "Partner FAQ | OfferBeez",
    description:
      "Frequently Asked Questions for OfferBeez partners. Find answers about partnership programs, commission structures, onboarding, and more.",
    url: "https://offerbeez.com/partner-faq",
    siteName: "OfferBeez",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Partner FAQ | OfferBeez",
    description:
      "Frequently Asked Questions for OfferBeez partners. Find answers about partnership programs, commission structures, onboarding, and more.",
  },
}

const DOC_ID = "1_M75PtKk1iQ3ANrUqvGwCVv3A0Ck5hSAV1A5MppJaiE"
const DOC_EXPORT_HTML = `https://docs.google.com/document/d/${DOC_ID}/export?format=html`

function extractBody(html: string) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  return match ? match[1] : html
}

function sanitize(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "ul", "ol", "li", 
      "strong", "em", "u", "blockquote", "code", "pre", "table", "thead", 
      "tbody", "tr", "th", "td", "hr", "br", "span", "div", "img",
    ],
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt"],
      th: ["colspan", "rowspan"],
      td: ["colspan", "rowspan"],
      span: ["style"],
      div: ["style"],
      p: ["style"],
    },
    allowedStyles: {
      "*": {
        "text-align": [/^left$|^right$|^center$|^justify$/],
        "font-weight": [/^\d+$/],
        "font-style": [/^italic$|^normal$/],
        "text-decoration": [/^underline$|^line-through$|^none$/],
      },
    },
    transformTags: {
      a: (tagName, attribs) => {
        const attrs = { ...attribs }
        if (attrs.href && !attrs.href.startsWith("/")) {
          attrs.target = "_blank"
          attrs.rel = "noopener noreferrer"
        }
        return { tagName, attribs: attrs }
      },
    },
  })
}

function slugify(text: string) {
  return text
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

function addAnchorsAndCollectTOC(cleanHtml: string): {
  html: string
  toc: { level: number; id: string; title: string }[]
} {
  const headingRegex = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi
  const toc: { level: number; id: string; title: string }[] = []
  let html = cleanHtml
  const matches = [...cleanHtml.matchAll(headingRegex)]

  matches.forEach((m) => {
    const level = Number(m[1])
    const inner = m[2]
    const titleText = inner.replace(/<[^>]*>/g, "").trim()
    if (!titleText) return
    const id = slugify(titleText)
    toc.push({ level, id, title: titleText })

    const original = m[0]
    const withId = original.replace(/<h([1-6])\b([^>]*)>/i, `<h$1 id="${id}"$2>`)
    html = html.replace(original, withId)
  })

  const filteredToc = toc.filter((t) => t.level === 2 || t.level === 3)
  return { html, toc: filteredToc }
}

async function getDocHtml(): Promise<{ html: string; toc: { level: number; id: string; title: string }[] }> {
  const res = await fetch(DOC_EXPORT_HTML, { cache: "no-store" })
  if (!res.ok) throw new Error(`Failed to load Partner FAQ (status ${res.status})`)
  const raw = await res.text()
  const body = extractBody(raw)
  const clean = sanitize(body)
  const { html, toc } = addAnchorsAndCollectTOC(clean)
  return { html, toc }
}

export default async function PartnerFAQ() {
  let content = ""
  let toc: { level: number; id: string; title: string }[] = []

  try {
    const data = await getDocHtml()
    content = data.html
    toc = data.toc
  } catch (error) {
    content = "<p>We couldn't display the Partner FAQ content at this moment. Please try reloading the page.</p>"
    toc = []
  }

  return (
    <main className="bg-white">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Partner FAQ</h1>
            <p className="text-sm text-gray-500">
              Frequently Asked Questions for OfferBeez partners. Find answers about partnership programs, commissions, and onboarding.
            </p>
          </div>
          <div className="hidden sm:flex">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="sticky top-6 rounded-xl border border-gray-200 p-4 bg-white/70 backdrop-blur">
              <p className="text-sm font-semibold text-gray-700 mb-3">On this page</p>
              {toc.length > 0 ? (
                <ul className="space-y-2 text-sm">
                  {toc.map((item, idx) => (
                    <li key={`${item.id}-${idx}`} className={item.level === 3 ? "ml-3" : ""}>
                      <a href={`#${item.id}`} className="text-gray-600 hover:text-pink-600 transition-colors">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-gray-500">Partner FAQ</p>
              )}
            </div>
          </aside>

          <article className="lg:col-span-9">
            <div 
              className="prose prose-lg max-w-none" 
              dangerouslySetInnerHTML={{ __html: content }} 
            />
            <hr className="my-10 border-gray-200" />
            <div className="text-xs text-gray-500">
              Still have questions? Contact us at{" "}
              <a href="mailto:support@offerbeez.com" className="text-pink-600 hover:underline">
                support@offerbeez.in
              </a>
              .
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}