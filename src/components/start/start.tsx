import { ContentCard } from "@/components/content-card"
import { Wohnhaus } from "@/components/content-cards"
import { OktoberBauphase } from "@/components/oktober-bauphase"
import { Articles } from "@/components/rga"
import { Hero } from "@/components/start/hero"
import { CardProps, Container, Text } from "@chakra-ui/react"

function Greeting(props: CardProps) {
  return (
    <ContentCard heading="Willkommen" hierarchy="h1" fontSize="3xl" {...props}>
      <Text>
        Der Diederichskotten ist ein denkmalgeschütztes Gebäude im Hammertal,
        das seit den 1980er Jahren von den Remscheider Pfadfindern genutzt wird.
        Im Jahr 1990 wurde ein Verein gegründet, um das Gebäude zu erhalten und
        als Ort für bündische Veranstaltungen zu nutzen und so den Gruppen des
        Deutschen Pfadfinderbundes in Remscheid eine Heimat bietet.
      </Text>
      <Articles />
    </ContentCard>
  )
}

export function Start() {
  return (
    <>
      <Hero mb={1} />
      <Container>
        <Greeting bgColor="white" mt={-1} />
        <Wohnhaus mt={4} />
        <OktoberBauphase />
      </Container>
    </>
  )
}
