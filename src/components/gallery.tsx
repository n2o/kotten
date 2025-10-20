import { ModalImage } from "@/components/modal-image"
import { AspectRatio, Box, SimpleGrid, Text } from "@chakra-ui/react"
import { StaticImageData } from "next/image"

export type GalleryImage = {
  data: StaticImageData
  alt: string
}

export type GalleryProps = {
  images: GalleryImage[]
  ratio?: number
}

export function Gallery({ images, ratio }: GalleryProps) {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap={5}>
      {images.map((image, idx) => {
        const dynamicRatio =
          image.data.height > image.data.width ? 3 / 4 : 4 / 3
        return (
          <Box key={idx}>
            {image.data && (
              <AspectRatio ratio={ratio || dynamicRatio}>
                <ModalImage image={image.data} alt={image.alt} />
              </AspectRatio>
            )}
            <Text mt={1} fontStyle="italic" textAlign="center">
              {image.alt}
            </Text>
          </Box>
        )
      })}
    </SimpleGrid>
  )
}
