import { ComponentProps } from "react"

/** Link in neuem Tab, mit Hinweis für Screenreader */
export function ExternalLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a target="_blank" rel="noopener" {...props}>
      {children}
      <span className="sr-only"> (öffnet in neuem Tab)</span>
    </a>
  )
}
