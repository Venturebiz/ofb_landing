import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OfferBeez - One Platform. Endless Promotions. | Launching Soon",
  description:
    "OfferBeez revolutionizes local business promotion through our innovative three-app ecosystem. Connect businesses, consumers, and sales partners. Discover local deals, create offers, and earn commissions. Launching soon!",
  keywords:
    "local offers, business promotion, deals, discounts, sales partners, mobile app, local business, consumer deals, commission earning, hyperlocal marketing, digital promotion platform",
  authors: [{ name: "OfferBeez Team" }],
  creator: "OfferBeez",
  publisher: "OfferBeez",
  robots: "index, follow",
  openGraph: {
    title: "OfferBeez - One Platform. Endless Promotions.",
    description: "Revolutionizing local business promotion through our innovative three-app ecosystem. Launching soon!",
    url: "https://offerbeez.com",
    siteName: "OfferBeez",
    images: [
      {
        url: "/offerbeez-logo.png",
        width: 1200,
        height: 630,
        alt: "OfferBeez - One Platform. Endless Promotions.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OfferBeez - One Platform. Endless Promotions.",
    description: "Revolutionizing local business promotion. Launching soon!",
    images: ["/offerbeez-logo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ec4899",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
