import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navigation/navbar"
import openGraphKotten from "@/images/opengraph.jpg"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata, Viewport } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
})

const title = "Diederichskotten"
const description =
  "Willkommen beim Diederichskotten, einem Stück Bergische Geschichte in Remscheid."
const images = [
  {
    url: openGraphKotten.src,
    width: 1200,
    height: 630,
    alt: "Diederichskotten in Remscheid",
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  title: {
    default: title,
    template: "%s | Diederichskotten",
  },
  description,
  openGraph: { title, description, images },
  twitter: { card: "summary_large_image", title, description, images },
}

export const viewport: Viewport = {
  themeColor: "#22272b",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={archivo.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#inhalt"
          className="sr-only z-50 bg-lade px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Zum Inhalt springen
        </a>
        <header>
          <Navbar />
        </header>
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
