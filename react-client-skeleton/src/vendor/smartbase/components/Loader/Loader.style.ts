import type { CSSProperties } from "react";

export const useStyles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  } as CSSProperties,

  loadingAnimation: {
    width: "100%",
    height: "100%",
  } as CSSProperties,
});
