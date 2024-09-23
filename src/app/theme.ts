"use client"
import { createTheme, ThemeOptions } from "@mui/material/styles"

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1b5e20",
    },
    secondary: {
      main: "#f50057",
    },
  },
}

export const theme = createTheme(themeOptions)
