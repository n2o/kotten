import { ContentCard } from "@/components/content-card"
import { Gallery, GalleryImage } from "@/components/gallery"
import image01 from "@/images/2024-10-26/bauphase01.webp"
import image02 from "@/images/2024-10-26/bauphase02.webp"
import image03 from "@/images/2024-10-26/bauphase03.webp"
import image04 from "@/images/2024-10-26/bauphase04.webp"
import image05 from "@/images/2024-10-26/bauphase05.webp"
import image06 from "@/images/2024-10-26/bauphase06.webp"
import image07 from "@/images/2024-10-26/bauphase07.webp"
import image08 from "@/images/2024-10-26/bauphase08.webp"
import image09 from "@/images/2024-10-26/bauphase09.webp"
import image10 from "@/images/2024-10-26/bauphase10.webp"
import image13 from "@/images/2024-10-26/bauphase13.webp"
import image15 from "@/images/2024-10-26/bauphase15.webp"
import image16 from "@/images/2024-10-26/bauphase16.webp"
import image18 from "@/images/2024-10-26/bauphase18.webp"
import { CardProps, Text } from "@chakra-ui/react"

const images: GalleryImage[] = [
  { data: image18, alt: "Wand zum Tor hin" },
  { data: image15, alt: "Wand zum Tor hin" },
  { data: image16, alt: "Wand zum Tor hin" },
  { data: image04, alt: "Wand zum Tor hin." },
  { data: image03, alt: "Wand zum Eingang" },
  { data: image08, alt: "Wand zum Tor hin" },
  { data: image02, alt: "Wand zum Häuschen hin" },
  { data: image13, alt: "Außenansicht" },
  { data: image05, alt: "Wand zum Häuschen hin" },
  { data: image06, alt: "Wand zum Tor hin" },
  { data: image07, alt: "Wand zum Tor hin" },
  { data: image10, alt: "Außenwand der Küche" },
  { data: image09, alt: "Außenwand der Küche" },
  { data: image01, alt: "Küchenfenster" },
]

export function OktoberBauphase(props: CardProps) {
  return (
    <>
      <ContentCard heading="Arbeitssamstag im Oktober 2024" mt={4} {...props}>
        <Text>
          An diesem Tag wurden die ersten Arbeiten an den Gefachen durchgeführt.
          Wir konnten zusammen mit Interessierten und Mitgliedern des Vereins
          einige Gefache neu verfüllen.
        </Text>
        <Gallery images={images} />
      </ContentCard>
    </>
  )
}
