"use client"
import { AspectRatio, Box, Dialog } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

export type ModalImageProps = {
  image: StaticImageData
  alt: string
}

export function ModalImage({ image, alt }: ModalImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box
        borderRadius="lg"
        cursor="pointer"
        boxShadow="lg"
        p="6"
        onClick={() => setIsOpen(true)}
        position="relative"
        overflow="hidden"
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Dialog.Root
        open={isOpen}
        onOpenChange={(e) => setIsOpen(e.open)}
        size="xl"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{alt}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <AspectRatio ratio={image.width / image.height}>
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="90vw"
                  style={{ objectFit: "contain" }}
                />
              </AspectRatio>
            </Dialog.Body>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  )
}
