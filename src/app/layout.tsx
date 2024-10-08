import { Providers } from "@/app/providers"
import { Navbar } from "@/components/navigation/navbar"
import { Box } from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Diederichskotten",
    template: "%s | Diederichskotten",
  },
  description:
    "Willkommen beim Diederichskotten, einem Stück Bergische Geschichte in Remscheid.",
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
        <Analytics />
        <Providers>
          <header>
            <Navbar />
          </header>
          <main>
            <Box bg="gray.100" pb={4}>
              {children}
            </Box>
          </main>
        </Providers>
      </body>
    </html>
  )
}
