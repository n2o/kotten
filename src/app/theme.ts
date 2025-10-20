import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#E8F5E9" }, // lightest shade
          100: { value: "#C8E6C9" },
          200: { value: "#A5D6A7" },
          300: { value: "#81C784" },
          400: { value: "#66BB6A" },
          500: { value: "#1B5E20" }, // your brand color
          600: { value: "#2E7D32" },
          700: { value: "#388E3C" },
          800: { value: "#43A047" },
          900: { value: "#004D40" }, // darkest shade
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: "{colors.brand.500}",
        },
      },
    },
  },
  globalCss: {
    html: {
      lineHeight: "tall",
    },
    body: {
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
    "body p": {
      marginBottom: "0.5rem",
    },
    "*::selection": {
      bg: "brand.100",
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
