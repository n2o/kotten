import { ModalImage } from "@/components/modal-image"
import { AspectRatio, SimpleGrid } from "@chakra-ui/react"
import { StaticImageData } from "next/image"

export type GalleryImage = {
  data: StaticImageData
  alt: string
}

export type GalleryProps = {
  images: GalleryImage[]
  ratio?: number
}

export function Gallery({ images, ratio = 3 / 4 }: GalleryProps) {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap={5}>
      {images.map((image, idx) => (
        <AspectRatio ratio={ratio} key={idx}>
          <ModalImage image={image.data} alt={image.alt} />
        </AspectRatio>
      ))}
    </SimpleGrid>
  )
}
