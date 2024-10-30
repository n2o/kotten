import { Hero } from "@/components/start/hero"
import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react"
import { Wohnhaus } from "../content-cards"

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

export function Start() {
  return (
    <>
      <Hero />
      <Container>
        <Greeting bgColor="white" mt={-32} />
        <Wohnhaus mt={4} />
      </Container>
    </>
  )
}
