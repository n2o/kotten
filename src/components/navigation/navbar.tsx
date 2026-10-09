import { Logo } from "@/components/logo"
import { DesktopNav, MobileMenu } from "@/components/navigation/nav-client"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="bg-schiefer text-kalk">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-sm"
          aria-label="Diederichskotten, zur Startseite"
        >
          <span className="grid size-12 place-items-center bg-kalk p-1">
            <Logo width={40} height={40} alt="" />
          </span>
          <span className="display text-xl">Diederichskotten</span>
        </Link>
        <DesktopNav />
        <MobileMenu />
      </div>
    </div>
  )
}
