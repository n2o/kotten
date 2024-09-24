"use client"
import { appTheme } from "@/app/theme"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { ParallaxProvider } from "react-scroll-parallax"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={appTheme}>
        <ParallaxProvider>{children}</ParallaxProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
