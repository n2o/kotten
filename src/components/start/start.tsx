import { ModalImage } from "@/components/modal-image"
import { Hero } from "@/components/start/hero"
import dachbodenNeueBalken from "@/images/2024/dachboden-neue-balken.webp"
import dachbodenSchlafbereich from "@/images/2024/dachboden-schlafbereich.webp"
import kottenAussenSpanplatte from "@/images/2024/kotten-aussen-spanplatte.webp"
import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Container,
  Heading,
  SimpleGrid,
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
          Instandhaltung. So ist es nun notwendig einige Balken auszutauschen,
          die zu marode sind, um das Haus weiterhin sicher zu stützen.
        </Text>
        <SimpleGrid columns={3} gap={5}>
          <AspectRatio ratio={3 / 4}>
            <ModalImage
              src={kottenAussenSpanplatte.src}
              alt="Außenwand des Kottens"
            />
          </AspectRatio>
          <AspectRatio ratio={3 / 4}>
            <ModalImage
              src={dachbodenSchlafbereich.src}
              alt="Blick in den ehemaligen Schlafbereich, wo nun ein neuer Boden benötigt wird"
            />
          </AspectRatio>
          <AspectRatio ratio={3 / 4}>
            <ModalImage
              src={dachbodenNeueBalken.src}
              alt="Neue Balken auf dem Dachboden"
            />
          </AspectRatio>
        </SimpleGrid>
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
