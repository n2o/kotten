import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
} from "@chakra-ui/react"

export function ContentCard({
  heading,
  children,
  ...props
}: CardProps & { heading: string }) {
  return (
    <Card {...props} bgColor="white">
      <CardHeader pb={0}>
        <Heading fontSize="2xl" lineHeight="2rem">
          {heading}
        </Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  )
}
