import kotten from "@/images/kotten2.webp"
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react"

export function Hero() {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="56" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          maxH="50vh"
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Diederichskotten
            </Heading>
            <Text fontSize="2xl" mt="4" maxW="lg">
              Ein Stück Bergische Geschichte und bündische Heimat im Hammertal.
            </Text>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={kotten.src}
            alt="Bild des Kottens"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}