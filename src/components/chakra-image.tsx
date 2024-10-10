"use client"
import { chakra } from "@chakra-ui/react"
import Image from "next/image"

export type ChakraImageProps = {
  width?: number | string
  height?: number | string
  src?: string
  alt?: string
  fill?: string
}

export default chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "fill"].includes(prop),
})
