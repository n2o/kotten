import { ToggleButton } from "@/components/navigation/toggle-button"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"
import { links } from "./links"

export function MobileDrawer() {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: "inline-flex", md: "none" }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              {links.map((link) => (
                <Link href={link.href} key={link.href}>
                  <Button variant={"tertiary"} size={"lg"} _hover={"none"}>
                    {link.label}
                  </Button>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
