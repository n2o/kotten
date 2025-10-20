import { Navbar } from "@/components/navigation/navbar"
import { Provider } from "@/components/ui/provider"
import openGraphKotten from "@/images/opengraph.jpg"
import { Box } from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
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

  return {
    title: {
      default: title,
      template: "%s | Diederichskotten",
    },
    description,
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Analytics />
        <Provider>
          <header>
            <Navbar />
          </header>
          <main>
            <Box bg="gray.100" pb={4}>
              {children}
            </Box>
          </main>
        </Provider>
      </body>
    </html>
  )
}
