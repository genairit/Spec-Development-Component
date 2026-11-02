// GenAir blue and white mapping for the Smartbase component source.

export const theme = {
  colors: {
    white: "#FFFFFF",
    ink: "#0F172A",
    error: "#DE4040",
    danger: "#EF4444",
    deepPurple: "#0F5CA8",
    violet: "#1668BD",
    lightPurple: "#1F7FDB",
  },
  border: {
    natural: "#E5E5EA",
    segmented: "#D5E5F5",
    subtle: "#E2E8F0",
  },
  background: {
    purpleGradient: "linear-gradient(135deg, #0F5CA8 0%, #1668BD 100%)",
    brandGradient: "linear-gradient(135deg, #0F5CA8 0%, #1668BD 100%)",
    progressTrack: "rgba(22, 104, 189, 0.25)",
    progressFill: "linear-gradient(90deg, #0F5CA8 0%, #1668BD 100%)",
  },
  shadow: {
    dark: "rgba(15, 23, 42, 0.25)",
    default: "0 4px 14px -6px rgba(15, 23, 42, 0.16)",
  },
  text: {
    segmentedInactive: "#64748B",
    secondary: "#64748B",
    primary: "#0F172A",
    textfield: { default: "#262E3A" },
  },
  status: {
    info: "#1668BD",
    error: "#EF4444",
    warning: "#F59E0B",
    success: "#10B981",
  },
} as const;
