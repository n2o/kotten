import { Providers } from "@/app/providers"
import { Navbar } from "@/components/navigation/navbar"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Diederichskotten",
    template: "%s | Diederichskotten",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={GeistSans.className}>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Providers>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
