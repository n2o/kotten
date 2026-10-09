import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border-2 border-transparent font-semibold transition-colors duration-150 outline-none select-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lade disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-lade text-white hover:bg-lade-tief",
        outline:
          "border-schiefer bg-transparent text-schiefer hover:bg-schiefer hover:text-kalk",
        inverse:
          "border-kalk bg-transparent text-kalk hover:bg-kalk hover:text-schiefer",
        ghost: "hover:bg-kalk-tief",
        link: "text-lade underline underline-offset-4 hover:text-lade-tief",
      },
      size: {
        default: "min-h-11 px-5 py-2 text-base",
        lg: "min-h-13 px-6 py-2 text-lg",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
