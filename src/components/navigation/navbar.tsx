"use client"
import { Logo } from "@/components/logo"
import { links } from "@/components/navigation/links"
import { MobileDrawer } from "@/components/navigation/mobile-drawer"
import { Link } from "@chakra-ui/next-js"
import { Box, Button, ButtonGroup, Container, HStack } from "@chakra-ui/react"

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
          <HStack justify="space-between" spacing="8">
            <HStack spacing="10">
              <HStack spacing="3">
                <MobileDrawer />
                <Logo height="64px" width="64px" />
              </HStack>
              <ButtonGroup
                size="lg"
                variant="text"
                colorScheme="gray"
                spacing="8"
                display={{ base: "none", md: "flex" }}
              >
                {links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <Button>{link.label}</Button>
                  </Link>
                ))}
              </ButtonGroup>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
