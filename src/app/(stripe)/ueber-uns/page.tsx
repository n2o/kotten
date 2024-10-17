import {
  Grundstueck,
  Uebernahme,
  Verein,
  Verwendung,
  Wohnhaus,
} from "@/components/content-cards"
import { HeroSmallImage } from "@/components/start/hero"
import { Container, SimpleGrid } from "@chakra-ui/react"

export default function Page() {
  return (
    <>
      <HeroSmallImage title="Über uns" />
      <Container>
        <SimpleGrid mt={4} columns={{ base: 1, md: 2 }} gap={4}>
          <Uebernahme />
          <Verein />
          <Verwendung />
          <Grundstueck />
          <Wohnhaus />
        </SimpleGrid>
      </Container>
    </>
  )
}
