"use client"
import {
  AspectRatio,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import ChakraImage from "./chakra-image"

export type ModalImageProps = {
  src: string
  alt: string
}

export function ModalImage({ src, alt }: ModalImageProps) {
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
        <ChakraImage fill="true" src={src} alt={alt} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={3 / 4} maxW="full">
              <ChakraImage src={src} alt={alt} fill="true" />
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" onClick={onClose}>
              Schließen
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
