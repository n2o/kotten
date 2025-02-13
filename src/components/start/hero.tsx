"use client"
import ChakraImage from "@/components/chakra-image"
import kotten from "@/images/kotten2.webp"
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import { FaPeopleGroup } from "react-icons/fa6"

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
          px={{ base: "4", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="light">
              Diederichskotten
            </Heading>
            <Text fontSize="2xl" mt="4" maxW="xl">
              Ein Stück Bergische Geschichte und bündische Heimat im Hammertal.
              Unterstütze uns bei den Sanierungen und erhalte den Kotten für die
              Zukunft.
            </Text>
            <Alert
              status="success"
              color={"gray.800"}
              mt={5}
              variant="left-accent"
            >
              <VStack align="left">
                <AlertTitle>Unterstützt uns beim Crowdfunding!</AlertTitle>
                <AlertDescription>
                  <Text>
                    Jugendarbeit braucht Raum: Helft dem Diederichskotten!
                    Unterstützt uns beim Crowdfunding und helft uns, den
                    Diederichskotten zu erhalten und zu sanieren.
                  </Text>
                  <Link
                    href="https://www.viele-schaffen-mehr.de/projekte/diederichskotten-helfen"
                    target="_blank"
                  >
                    <Button
                      leftIcon={<FaPeopleGroup />}
                      colorScheme="green"
                      size="xl"
                    >
                      Jetzt unterstützen
                    </Button>
                  </Link>
                </AlertDescription>
              </VStack>
            </Alert>
            {/* <Button
              bgColor="white"
              size="2xl"
              mt={5}
              leftIcon={<FaPaypal />}
              onClick={() => {
                router.push(paypalDonationLink)
              }}
            >
              Jetzt unterstützen
            </Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
