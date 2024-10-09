import { Hero } from "@/components/start/hero"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react"

export function Start() {
  return (
    <>
      {/* <HeaderImage /> */}
      <Hero />
      <Box bg="gray.100">
        <Container>
          <Card mt={-32}>
            <CardHeader pb={0}>
              <Heading fontSize={"3xl"} lineHeight={"2rem"}>
                Willkommen beim Diederichskotten!
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Der Diederichskotten ist ein denkmalgeschütztes Gebäude im
                Hammertal, das seit den 1980er Jahren von den Remscheider
                Pfadfindern genutzt wird. Im Jahr 1990 wurde ein Verein
                gegründet, um das Gebäude zu erhalten und als Ort für bündische
                Veranstaltungen zu nutzen und so den Gruppen des Deutschen
                Pfadfinderbundes in Remscheid eine Heimat bietet.
              </Text>
            </CardBody>
          </Card>
        </Container>
      </Box>
    </>
  )
}
