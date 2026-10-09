"use client"
import { links } from "@/components/navigation/links"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

// Nur die Teile, die den Pfad oder Zustand brauchen, laufen im Browser.
function useCurrent() {
  const pathname = usePathname()
  return (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
      ? ("page" as const)
      : undefined
}

export function DesktopNav() {
  const current = useCurrent()
  return (
    <nav aria-label="Hauptnavigation" className="hidden md:block">
      <ul className="flex gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={current(link.href)}
              className="block border-b-4 border-transparent px-3 py-2 font-semibold text-kalk/85 transition-colors hover:text-kalk aria-[current=page]:border-lade aria-[current=page]:text-kalk"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MobileMenu() {
  const current = useCurrent()
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="inverse"
          size="icon"
          className="md:hidden"
          aria-label="Menü öffnen"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-schiefer text-kalk">
        <SheetTitle className="px-6 pt-6 text-kalk">Menü</SheetTitle>
        <nav aria-label="Hauptnavigation mobil">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={current(link.href)}
                  className="block px-6 py-3 text-lg font-semibold underline-offset-8 hover:bg-schiefer-hell aria-[current=page]:underline aria-[current=page]:decoration-lade aria-[current=page]:decoration-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
