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

// In v3, chakra() takes only the component argument
const ChakraImage = chakra(Image)

export default ChakraImage
