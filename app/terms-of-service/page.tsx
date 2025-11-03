import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | OfferBeez",
  description:
    "OfferBeez Terms of Service rendered directly on-site. This page mirrors the Google Doc to ensure accuracy while providing a structured, readable layout.",
  robots: "index, follow",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | OfferBeez",
    description:
      "OfferBeez Terms of Service rendered directly on-site. This page mirrors the Google Doc to ensure accuracy while providing a structured, readable layout.",
    url: "https://offerbeez.com/terms-of-service",
    siteName: "OfferBeez",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | OfferBeez",
    description:
      "OfferBeez Terms of Service rendered directly on-site. This page mirrors the Google Doc to ensure accuracy while providing a structured, readable layout.",
  },
}

const DOC_ID = "1NEsmeJOvWmh586kJYRgdRaOxd1GsCjSUWCoDqdH4AF0"
const DOC_EXPORT_HTML = `https://docs.google.com/document/d/${DOC_ID}/export?format=html`

function extractBody(html: string) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  return match ? match[1] : html
}

function basicSanitize(html: string) {
  // Basic sanitization without external library
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/javascript:/gi, "")
}

function slugify(text: string) {
  const noTags = text.replace(/<[^>]*>/g, "")
  return noTags
    .normalize("NFKD")
    .toLowerCase()
    .replace(/&[a-z#0-9]+;/gi, "")
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
  try {
    const res = await fetch(DOC_EXPORT_HTML, {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; OfferBeez/1.0)",
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to load Terms of Service (status ${res.status})`)
    }

    const raw = await res.text()
    const body = extractBody(raw)
    const clean = basicSanitize(body)
    const { html, toc } = addAnchorsAndCollectTOC(clean)
    return { html, toc }
  } catch (error) {
    console.error("Error fetching Terms of Service:", error)
    // Return fallback content
    return {
      html: `
        <div class="text-center py-12">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p class="text-gray-600 mb-8">We're currently updating our Terms of Service. Please check back soon.</p>
          <p class="text-sm text-gray-500">
            For immediate assistance, contact us at 
            <a href="mailto:support@offerbeez.in" class="text-pink-600 hover:underline">support@offerbeez.in</a>
          </p>
        </div>
      `,
      toc: [],
    }
  }
}

export default async function TermsOfServicePage() {
  const { html: content, toc } = await getDocHtml()

  return (
    <main className="bg-white">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-sm text-gray-500">These are the latest official terms maintained by OfferBeez.</p>
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
                <p className="text-xs text-gray-500">Terms of Service</p>
              )}
            </div>
          </aside>

          <article className="lg:col-span-9">
            <div className="policy-content" dangerouslySetInnerHTML={{ __html: content }} suppressHydrationWarning />
            <hr className="my-10 border-gray-200" />
            <div className="text-xs text-gray-500">
              If you have questions about these terms, contact us at{" "}
              <a href="mailto:support@offerbeez.in" className="text-pink-600 hover:underline">
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