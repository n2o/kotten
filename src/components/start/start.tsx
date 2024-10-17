import { ModalImage } from "@/components/modal-image"
import { Hero } from "@/components/start/hero"
import aussenbereichKueche1 from "@/images/2024/aussenbereich-kueche01.webp"
import aussenbereichKueche2 from "@/images/2024/aussenbereich-kueche02.webp"
import dachbodenNeueBalken from "@/images/2024/dachboden-neue-balken.webp"
import dachbodenSchlafbereich from "@/images/2024/dachboden-schlafbereich.webp"
import kottenAussenSpanplatte from "@/images/2024/kotten-aussen-spanplatte.webp"
import paypalQrCode from "@/images/paypal-code.svg"
import { paypalDonationLink } from "@/lib"
import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import { FaPaypal } from "react-icons/fa6"
import ChakraImage from "../chakra-image"
import { ContentCard } from "../content-card"
import { Wohnhaus } from "../content-cards"

const images = [
  { data: kottenAussenSpanplatte, alt: "Außenwand des Kottens" },
  {
    data: dachbodenSchlafbereich,
    alt: "Blick in den alten Schlafbereich, wo nun ein neuer Boden benötigt wird",
  },
  { data: dachbodenNeueBalken, alt: "Neue Balken auf dem Dachboden" },
  { data: aussenbereichKueche1, alt: "Außenwand der Küche" },
  { data: aussenbereichKueche2, alt: "Außenwand der Küche" },
]

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
        <Greeting mt={-32} />
        <Wohnhaus mt={4} />
      </Container>
    </>
  )
}
