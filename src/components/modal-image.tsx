"use client"
import {
  AspectRatio,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { StaticImageData } from "next/image"
import ChakraImage from "./chakra-image"

export type ModalImageProps = {
  image: StaticImageData
  alt: string
}

export function ModalImage({ image, alt }: ModalImageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        borderRadius="lg"
        cursor="pointer"
        boxShadow="lg"
        p="6"
        onClick={onOpen}
      >
        <ChakraImage fill="true" src={image.src} alt={alt} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={image.width / image.height}>
              <ChakraImage src={image.src} alt={alt} fill="true" />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
