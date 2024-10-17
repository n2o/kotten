import { Uebernahme, Verein } from "@/components/content-cards"
import { HeroSmallImage } from "@/components/start/hero"
import { Container } from "@chakra-ui/react"

export default function Page() {
  return (
    <>
      <HeroSmallImage title="Über uns" />
      <Container>
        <Uebernahme mt={4} />
        <Verein mt={4} />
      </Container>
    </>
  )
}
