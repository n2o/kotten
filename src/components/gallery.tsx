"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { useRef, useState } from "react"

export type GalleryImage = {
  data: StaticImageData
  /** Beschreibung des Bildinhalts für Screenreader */
  alt: string
  /** Kurze sichtbare Bildunterschrift; ohne sie wird alt angezeigt */
  caption?: string
}

/* Feste Breiten pro Reihe; die letzte Reihe wächst und füllt ihr Gefach */
const lgBasis = [
  "",
  "lg:basis-full",
  "lg:basis-[calc(50%-var(--balken))]",
  "lg:basis-[calc(33.333%-var(--balken))]",
  "lg:basis-[calc(25%-var(--balken))]",
]

const tileSizes = [
  "",
  "(min-width: 1024px) 1024px, 100vw",
  "(min-width: 1024px) 512px, 50vw",
  "(min-width: 1024px) 340px, 50vw",
  "(min-width: 1024px) 256px, 50vw",
]

export function Gallery({
  images,
  className,
}: {
  images: GalleryImage[]
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const opener = useRef<HTMLButtonElement | null>(null)
  // Index bleibt beim Schließen erhalten, damit die Ausblend-Animation läuft
  const [index, setIndex] = useState(0)
  const current = images[index]
  const step = (delta: number) =>
    setIndex((i) => (i + delta + images.length) % images.length)

  return (
    <>
      <ul className={cn("fachwerk my-6 flex flex-wrap", className)}>
        {images.map((image, idx) => (
          <li
            key={image.data.src}
            className={cn(
              "grow",
              images.length > 1 && "basis-[calc(50%-var(--balken))]",
              lgBasis[Math.min(images.length, 4)],
            )}
          >
            <figure className="flex h-full flex-col">
              <button
                type="button"
                onClick={(e) => {
                  opener.current = e.currentTarget
                  setIndex(idx)
                  setOpen(true)
                }}
                className={cn(
                  "group relative block w-full cursor-zoom-in overflow-hidden bg-kalk-tief focus-visible:outline-offset-[-3px]",
                  images.length === 1 ? "aspect-[4/3]" : "h-44 sm:h-60 lg:h-52",
                )}
              >
                <Image
                  src={image.data}
                  alt={image.alt}
                  fill
                  sizes={tileSizes[Math.min(images.length, 4)]}
                  className="object-cover transition-transform duration-500 ease-riegel motion-safe:group-hover:scale-[1.03]"
                />
                <span className="sr-only"> (vergrößern)</span>
              </button>
              <figcaption
                aria-hidden={!image.caption}
                className="px-3 py-2 text-sm leading-snug text-stein"
              >
                {image.caption ?? image.alt}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-[calc(100%-1rem)] gap-3 bg-kalk p-3 sm:max-w-5xl"
          onCloseAutoFocus={(e) => {
            // Fokus zurück auf das geöffnete Bild (kein DialogTrigger vorhanden)
            e.preventDefault()
            opener.current?.focus()
          }}
          onKeyDown={(e) => {
            if (images.length < 2) return
            if (e.key === "ArrowRight") step(1)
            if (e.key === "ArrowLeft") step(-1)
          }}
        >
          <DialogTitle className="pr-12 text-lg">
            {current.caption ?? current.alt}
          </DialogTitle>
          <DialogDescription className={current.caption ? "" : "sr-only"}>
            {current.caption
              ? current.alt
              : `Bild ${index + 1} von ${images.length}`}
          </DialogDescription>
          <div className="relative h-[70dvh] w-full bg-schiefer">
            <Image
              src={current.data}
              alt=""
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-contain"
            />
          </div>
          {images.length > 1 && (
            <div className="flex items-center justify-between gap-3">
              <Button variant="outline" onClick={() => step(-1)}>
                <ChevronLeftIcon />
                Zurück
              </Button>
              <span
                className="text-sm text-stein tabular-nums"
                aria-live="polite"
              >
                {index + 1} / {images.length}
              </span>
              <Button variant="outline" onClick={() => step(1)}>
                Weiter
                <ChevronRightIcon />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
