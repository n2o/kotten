"use client"
import kotten from "@/images/kotten2.webp"
import { paypalDonationLink } from "@/lib"
import { Box, BoxProps, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FaPaypal } from "react-icons/fa6"
import ChakraImage from "../chakra-image"

function HeroImage() {
  return (
    <Flex
      position="absolute"
      insetX="0"
      insetY="0"
      w="full"
      h="full"
      overflow="hidden"
      align="center"
    >
      <Box position="relative" w="full" h="full">
        <ChakraImage
          src={kotten.src}
          alt="Bild des Kottens"
          fill={"true"}
          objectFit="cover"
          objectPosition="top bottom"
          position="absolute"
        />
        <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
      </Box>
    </Flex>
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
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <HeroImage />
      <Box py="56" position="relative" {...props}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          maxH="50vh"
          mx="auto"
          px={{ base: "4", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="thiner">
              Diederichskotten
            </Heading>
            <Text fontSize="2xl" mt="4" maxW="xl">
              Ein Stück Bergische Geschichte und bündische Heimat im Hammertal.
              Unterstütze uns bei den Sanierungen und erhalte den Kotten für die
              Zukunft.
            </Text>
            <Link href={paypalDonationLink} target="_blank">
              <Button bgColor="white" size="2xl" leftIcon={<FaPaypal />}>
                Jetzt unterstützen
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
