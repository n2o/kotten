import { ModalImage } from "@/components/modal-image"
import { Hero } from "@/components/start/hero"
import kottenAussenSpanplatte from "@/images/kotten-aussen-spanplatte.webp"
import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react"

function Greeting(props: CardProps) {
  return (
    <Card {...props}>
      <CardHeader pb={0}>
        <Heading fontSize={"3xl"} lineHeight={"2rem"}>
          Willkommen beim Diederichskotten!
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          Der Diederichskotten ist ein denkmalgeschütztes Gebäude im Hammertal,
          das seit den 1980er Jahren von den Remscheider Pfadfindern genutzt
          wird. Im Jahr 1990 wurde ein Verein gegründet, um das Gebäude zu
          erhalten und als Ort für bündische Veranstaltungen zu nutzen und so
          den Gruppen des Deutschen Pfadfinderbundes in Remscheid eine Heimat
          bietet.
        </Text>
      </CardBody>
    </Card>
  )
}

function HelpWanted(props: CardProps) {
  return (
    <Card {...props}>
      <CardHeader pb={0}>
        <Heading fontSize="2xl" lineHeight="2rem">
          Wir brauchen Unterstützung!
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          Der Kotten ist ein altes Gebäude und benötigt ständige Pflege und
          Instandhaltung. So ist es nun notwendig einige Balken auszutauschen, d
          zu marode sind, um das Haus weiterhin sicher zu stützen.
        </Text>
        <AspectRatio ratio={3 / 4} maxW={200}>
          <ModalImage
            src={kottenAussenSpanplatte.src}
            alt="Außenwand des Kottens"
          />
        </AspectRatio>
      </CardBody>
    </Card>
  )
}

export function Start() {
  return (
    <>
      <Hero />
      <Container>
        <Greeting mt={-32} />
        <HelpWanted mt={4} />
      </Container>
    </>
  )
}
