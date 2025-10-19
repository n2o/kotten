import { ContentCard } from "@/components/content-card"
import {
  Post20250214,
  Post20250701,
  Wohnhaus,
} from "@/components/content-cards"
import { Logo } from "@/components/logo"
import { OktoberBauphase } from "@/components/oktober-bauphase"
import { Articles } from "@/components/rga"
import { Hero } from "@/components/start/hero"
import { CardProps, Container, HStack, Text, VStack } from "@chakra-ui/react"

function Greeting(props: CardProps) {
  return (
    <ContentCard heading="Willkommen" hierarchy="h1" fontSize="3xl" {...props}>
      <HStack>
        <Text>
          Der Diederichskotten ist ein denkmalgeschütztes Gebäude im Hammertal,
          das seit den 1980er Jahren von den Remscheider Pfadfindern genutzt
          wird. Im Jahr 1990 wurde ein Verein gegründet, um das Gebäude zu
          erhalten und als Ort für bündische Veranstaltungen zu nutzen und so
          den Gruppen des Deutschen Pfadfinderbundes in Remscheid eine Heimat
          bietet.
        </Text>
        <Logo height="150px" width="150px" />
      </HStack>
      <Articles />
    </ContentCard>
  )
}

export function Start() {
  return (
    <>
      <Hero mb={1} />
      <Container>
        <VStack spacing={8}>
          <Greeting bgColor="white" mt={{ base: 0, md: -32 }} />
          <Post20250701 />
          <Post20250214 />
          <OktoberBauphase />
          <Wohnhaus />
        </VStack>
      </Container>
    </>
  )
}
