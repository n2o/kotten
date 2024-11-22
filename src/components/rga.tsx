import ChakraImage from "@/components/chakra-image"
import rga from "@/images/logos/rga.webp"
import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export function RGALogo({ width = 50 }) {
  return (
    <AspectRatio maxW={width} ratio={16 / 9}>
      <ChakraImage
        src={rga}
        alt="RGA Bericht über den Diederichskotten"
        maxW="100%"
        mt={4}
      />
    </AspectRatio>
  )
}

const posts = [
  {
    title:
      "Sanierung des Diederichskotten: „Wer kann von sich sagen, dass er mal selbst ein Haus wiederaufgebaut hat?“",
    url: "https://www.rga.de/lokales/remscheid/remscheid-pfadfinder-sanieren-den-denkmalgeschuetzten-diederichskotten-TB6OGUENYNG2TEVTRLPZDEX5SU.html",
    teaser:
      "Dem uralten Fachwerkgebäude mit spannender Historie droht der Verfall. Seine Besitzer sorgen mit Spenden, Fördermitteln und viel Eigenleistung für dessen Erhalt. In einem verwunschenen Winkel mitten im Wald sorgt ein Herzensprojekt für eine lange Baustelle.",
    publishedAt: "31.10.2024",
  },
  {
    title:
      "Maurer aufgepasst! Wer möchte beim Ausbau des Diederichskotten helfen?",
    url: "https://www.rga.de/lokales/remscheid/maurer-aufgepasst-wer-moechte-beim-ausbau-des-diederichskotten-helfen-AK4HTNAIG5ERLMKZDS55VL5RKQ.html",
    teaser:
      "In den uralten Schleifkotten kehrt nach jahrelangem Sanierungsstau wieder Leben ein. Viele helfende Hände sorgen dafür, dass die Vorarbeit des Zimmermanns nun vollendet wird.",
    publishedAt: "22.10.2024",
  },
]

export function Articles() {
  return (
    <SimpleGrid spacing={10} columns={{ base: 1, md: 2 }}>
      {posts.map((post, idx) => (
        <Link
          key={idx}
          href={post.url}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <Card
            fontSize="sm"
            _hover={{
              shadow: "lg",
              transition: "all 0.2s",
            }}
          >
            <CardHeader pb={0}>
              <Flex align="center">
                <Text fontWeight="medium" color="fg.emphasized">
                  {post.title}
                </Text>
                <Center ml={3} w={15}>
                  <Image
                    src={rga}
                    alt="RGA Bericht über den Diederichskotten"
                    width={40}
                    height={22}
                  />
                </Center>
              </Flex>
            </CardHeader>
            <CardBody py={0}>
              <Text color="fg.muted" noOfLines={2}>
                {post.teaser}
              </Text>
            </CardBody>
            <CardFooter py={0}>
              <Text color="fg.subtle">{post.publishedAt}</Text>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  )
}
