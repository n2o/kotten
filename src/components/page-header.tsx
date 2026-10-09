import { ReactNode } from "react"

export function PageHeader({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <div className="border-t border-schiefer-hell bg-schiefer text-kalk">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 md:px-6 md:pt-16 md:pb-16">
        <h1 className="text-4xl md:text-6xl">{title}</h1>
        {children && (
          <div className="mt-4 max-w-[60ch] text-lg text-kalk/85 md:text-xl">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
