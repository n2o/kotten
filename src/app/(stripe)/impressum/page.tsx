import { HeroSmallImage } from "@/components/start/hero"
import { Container, Heading, Link, Text } from "@chakra-ui/react"

export default function Page() {
  return (
    <>
      <HeroSmallImage title="Impressum" />
      <Container>
        <Text mt={8}>
          Förderverein der Pfadfinder im Hammertal e.V.
          <br />
          Wilhelmstraße 64
          <br />
          42855 Remscheid
          <br />
          E-Mail: info@diederichskotten.de
        </Text>
        <Text>
          <strong>Vertreten durch:</strong>
          <br />
          Hanna Fetsch
        </Text>

        <Heading fontSize="xl">
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </Heading>
        <Text>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </Text>
        <Text>
          Quelle:{" "}
          <Link href="https://www.e-recht24.de">https://www.e-recht24.de</Link>
        </Text>
      </Container>
    </>
  )
}
