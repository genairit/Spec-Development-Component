export const theme = {
  background: {
    lightGray: "#F8FAFC",
    purpleGradient: "linear-gradient(135deg, #0F5CA8 0%, #1668BD 100%)",
    flippedPurpleGradient: "linear-gradient(135deg, #1668BD 0%, #0F5CA8 100%)",
  },
  colors: {
    info: "#262E3A",
    error: "#DE4040",
    white: "#FFFFFF",
    black: "#000000",
    purple: "#1668BD",
    warning: "#DEA140",
    success: "#5ADE40",
    lightPurple: "#1F7FDB",
  },
  button: {
    primary: "#1668BD",
    secondary: "#E1EDFA",
  },
  border: {
    primary: "#262E3A",
    natural: "#E5E5EA",
  },
  shadow: {
    default: "#e0e0e0",
    card: "0 2px 12px rgba(0,0,0,0.06)",
    secondary:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  },
  severity: {
    info: "#A5AAB0",
    warning: "#DEA140",
    error: "#DE4040",
  },
  text: {
    textfield: {
      default: "#262E3A",
      disabled: "#73737C",
    },
  },
} as const;
