"use client"
import kotten from "@/images/kotten2.webp"
import { paypalDonationLink } from "@/lib"
import { Box, BoxProps, Button, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaPaypal } from "react-icons/fa6"

function HeroImage() {
  return (
    <Box position="absolute" inset="0" w="full" h="full" overflow="hidden">
      <Image
        src={kotten}
        alt="Bild des Kottens"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "top" }}
        priority
      />
      <Box position="absolute" inset="0" bg="blackAlpha.600" />
    </Box>
  )
}

export type HeroSmallImageProps = BoxProps & {
  title: string
}

export function HeroSmallImage({ title, ...props }: HeroSmallImageProps) {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <HeroImage />
      <Box py="12" position="relative" {...props}>
        <Box mx="auto" textAlign="center" color="white">
          <Heading
            as="h1"
            fontWeight="thiner"
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            {title}
          </Heading>
        </Box>
      </Box>
    </Box>
  )
}

export function Hero(props: BoxProps) {
  const router = useRouter()

  return (
    <Box bg="blackAlpha.800" as="section" minH="140px" position="relative">
      <HeroImage />
      <Box
        pt={{ base: 24, md: 56 }}
        pb={{ base: 40, md: 56 }}
        position="relative"
        {...props}
      >
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          maxH="50vh"
          mx="auto"
          px={{ base: 2, md: 0 }}
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" textStyle="5xl" fontWeight="light">
              Diederichskotten
            </Heading>
            <Text textStyle="2xl" mt="4" maxW="xl">
              Ein Stück Bergische Geschichte und bündische Heimat im Hammertal.
              Unterstütze uns bei den Sanierungen und erhalte den Kotten für die
              Zukunft.
            </Text>
            <Button
              colorPalette="whiteAlpha"
              size="2xl"
              mt={5}
              onClick={() => {
                router.push(paypalDonationLink)
              }}
            >
              <FaPaypal />
              Jetzt unterstützen
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
