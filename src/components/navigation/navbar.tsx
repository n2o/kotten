"use client"
import { Logo } from "@/components/logo"
import { MobileDrawer } from "@/components/navigation/mobile-drawer"
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
        <Container py="4">
          <HStack justify="space-between" spacing="8">
            <HStack spacing="10">
              <HStack spacing="3">
                <MobileDrawer />
                <Logo height={"64px"} width={"64px"} />
              </HStack>
              <ButtonGroup
                size="lg"
                variant="text"
                colorScheme="gray"
                spacing="8"
                display={{ base: "none", lg: "flex" }}
              >
                <Button>Dashboard</Button>
                <Button>Analysis</Button>
              </ButtonGroup>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
