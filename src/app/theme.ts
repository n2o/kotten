"use client"
import { createTheme } from "@mui/material/styles"
import { Roboto } from "next/font/google"

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
})
