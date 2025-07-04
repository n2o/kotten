import ChakraImage, { ChakraImageProps } from "@/components/chakra-image"
import logo from "@/images/logo.svg"

export function Logo(props: ChakraImageProps) {
  return (
    <ChakraImage src={logo} alt="Logo von Diederichskotten e.V." {...props} />
  )
}
