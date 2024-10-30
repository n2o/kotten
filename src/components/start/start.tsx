import { Hero } from "@/components/start/hero"
import { CardProps, Container, Text } from "@chakra-ui/react"
import { ContentCard } from "../content-card"
import { Wohnhaus } from "../content-cards"
import { OktoberBauphase } from "../oktober-bauphase"

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
    </ContentCard>
  )
}

export function Start() {
  return (
    <>
      <Hero />
      <Container>
        <Greeting bgColor="white" mt={-32} />
        <Wohnhaus mt={4} />
        <OktoberBauphase />
      </Container>
    </>
  )
}
