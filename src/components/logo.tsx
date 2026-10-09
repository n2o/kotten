import logo from "@/images/logo.svg"
import Image from "next/image"
import { ComponentProps } from "react"

export function Logo({
  alt = "Logo des Diederichskotten e.V.",
  ...props
}: Omit<ComponentProps<typeof Image>, "src" | "alt"> & { alt?: string }) {
  return <Image src={logo} alt={alt} {...props} />
}
