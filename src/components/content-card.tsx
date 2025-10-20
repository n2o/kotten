import { Card, Heading, HTMLChakraProps, Text } from "@chakra-ui/react"

export function ContentCard({
  heading,
  hierarchy = "h2",
  fontSize = "2xl",
  date,
  children,
  ...props
}: HTMLChakraProps<"div"> & {
  heading: string
  date?: string
  hierarchy?: "h1" | "h2" | "h3"
}) {
  return (
    <Card.Root {...props} bg="white">
      <Card.Header pb={0}>
        <Heading as={hierarchy} fontSize={fontSize} lineHeight="2rem">
          {heading}
          {date && <Text fontSize="md">{date}</Text>}
        </Heading>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  )
}
