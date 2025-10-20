import ChakraImage from "@/components/chakra-image"
import logo from "@/images/logo.svg"
import { ComponentProps } from "react"

export function Logo(props: Omit<ComponentProps<typeof ChakraImage>, "src" | "alt">) {
  return (
    <ChakraImage src={logo} alt="Logo von Diederichskotten e.V." {...props} />
  )
}
