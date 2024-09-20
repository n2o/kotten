"use client"
import { theme } from "@/app/theme"
import { ThemeProvider } from "@emotion/react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  )
}
