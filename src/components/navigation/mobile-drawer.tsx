"use client"
import { links } from "@/components/navigation/links"
import { ToggleButton } from "@/components/navigation/toggle-button"
import { Button, Drawer, Link, Stack } from "@chakra-ui/react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(!isOpen)
  const onClose = () => setIsOpen(false)
  const pathname = usePathname()

  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: "inline-flex", md: "none" }}
      />
      <Drawer.Root
        placement="top"
        open={isOpen}
        onOpenChange={(e) => setIsOpen(e.open)}
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content mt="72px">
            <Drawer.Body p="4">
              <Stack gap="1">
                {links.map((link) => (
                  <Link asChild key={link.href} onClick={onClose}>
                    <NextLink href={link.href}>
                      <Button
                        variant="ghost"
                        size="lg"
                        aria-current={pathname === link.href ? "page" : undefined}
                        _currentPage={{
                          bg: "bg.muted",
                          outline: "none",
                        }}
                        outline="none"
                        _focus={{
                          outline: "none",
                          boxShadow: "none",
                        }}
                        _focusVisible={{
                          outline: "none",
                          boxShadow: "none",
                        }}
                      >
                        {link.label}
                      </Button>
                    </NextLink>
                  </Link>
                ))}
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  )
}
