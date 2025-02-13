import { theme } from "@chakra-ui/pro-theme"
import { extendTheme, StyleConfig, ThemeConfig } from "@chakra-ui/react"

const proTheme = extendTheme(theme)

const brand = {
  50: "#E8F5E9", // lightest shade
  100: "#C8E6C9",
  200: "#A5D6A7",
  300: "#81C784",
  400: "#66BB6A",
  500: "#1B5E20", // your brand color
  600: "#2E7D32",
  700: "#388E3C",
  800: "#43A047",
  900: "#004D40", // darkest shade
}

const colors = {
  ...proTheme.colors,
  brand,
  primary: brand,
}

const components: Record<string, StyleConfig> = {
  ...proTheme.components,
  Card: {
    baseStyle: {
      container: {
        borderRadius: "lg",
      },
    },
  },
  Button: {
    variants: {
      primary: () => ({
        color: "black",
      }),
      brandOutline: () => ({
        color: "black",
        bgColor: "white",
        borderColor: "brand.500",
        borderWidth: "1.5px",
        px: 2,
        py: 0,
        height: "2rem",
        fontSize: "xs",
        _hover: {
          bg: "brand.500",
          textDecoration: "underline",
        },
      }),
    },
  },
  Link: {
    variants: {
      brandOutline: () => ({
        color: "black",
        bgColor: "white",
        borderColor: "brand.500",
        borderWidth: "1.5px",
        borderRadius: "md",
        fontWeight: "semibold",
        fontSize: "xs",
        height: "2rem",
        px: 2,
        py: 1,
        _hover: {
          bg: "brand.500",
          textDecoration: "underline",
        },
      }),
    },
  },
}

const styles = {
  global: () => ({
    "html, body": {
      lineHeight: "tall",
    },
    h1: {
      margin: "0.5rem 0",
    },
    h2: {
      margin: "0.5rem 0",
    },
    h3: {
      margin: "0.5rem 0",
    },
    a: {
      textDecoration: "underline",
    },
    p: {
      margin: "0 0 0.5rem 0",
    },
  }),
}

export const appTheme: ThemeConfig = extendTheme(
  {
    colors,
    styles,
    components,
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  proTheme,
)
