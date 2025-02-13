import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Text,
} from "@chakra-ui/react"

export function ContentCard({
  heading,
  hierarchy = "h2",
  fontSize = "2xl",
  date,
  children,
  ...props
}: CardProps & {
  heading: string
  date?: string
  hierarchy?: "h1" | "h2" | "h3"
}) {
  return (
    <Card {...props} bgColor="white">
      <CardHeader pb={0}>
        <Heading as={hierarchy} fontSize={fontSize} lineHeight="2rem">
          {heading}
          {date && <Text fontSize="md">{date}</Text>}
        </Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  )
}
