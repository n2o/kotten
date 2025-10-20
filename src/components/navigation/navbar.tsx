"use client"
import { Logo } from "@/components/logo"
import { links } from "@/components/navigation/links"
import { MobileDrawer } from "@/components/navigation/mobile-drawer"
import { Box, Button, Container, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export function Navbar() {
  return (
    <Box as="section">
      <Box
        borderBottomWidth="1px"
        bg="bg.surface"
        position="relative"
        zIndex="tooltip"
      >
        <Container py="1">
          <HStack justify="space-between" gap="8">
            <HStack gap="10">
              <HStack gap="3">
                <MobileDrawer />
                <Link asChild>
                  <NextLink href="/">
                    <Logo height="64px" width="64px" />
                  </NextLink>
                </Link>
              </HStack>
              <HStack
                gap="8"
                display={{ base: "none", md: "flex" }}
              >
                {links.map((link) => (
                  <Link asChild key={link.href}>
                    <NextLink href={link.href}>
                      <Button size="lg" variant="ghost">
                        {link.label}
                      </Button>
                    </NextLink>
                  </Link>
                ))}
              </HStack>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
