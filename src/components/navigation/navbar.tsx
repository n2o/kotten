"use client"
import { Logo } from "@/components/logo"
import { links } from "@/components/navigation/links"
import { MobileDrawer } from "@/components/navigation/mobile-drawer"
import { Box, Container, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  return (
    <Box as="section">
      <Box
        borderBottomWidth="1px"
        bg="bg.surface"
        position="relative"
        zIndex="tooltip"
      >
        <Container py="3">
          <HStack justify="space-between" gap="8">
            <HStack gap="10">
              <HStack gap="3">
                <MobileDrawer />
                <Link asChild>
                  <NextLink href="/">
                    <Logo height="48px" width="48px" />
                  </NextLink>
                </Link>
              </HStack>
              <HStack gap="6" display={{ base: "none", md: "flex" }}>
                {links.map((link) => (
                  <Link
                    asChild
                    key={link.href}
                    fontSize="md"
                    fontWeight={pathname === link.href ? "semibold" : "normal"}
                    color={pathname === link.href ? "fg.default" : "fg.muted"}
                    _hover={{
                      color: "fg.default",
                      textDecoration: "none",
                    }}
                    transition="all 0.2s"
                  >
                    <NextLink href={link.href}>{link.label}</NextLink>
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
