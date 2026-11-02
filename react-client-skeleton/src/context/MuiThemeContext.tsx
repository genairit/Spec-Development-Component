import { type FC } from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CssBaseline, GlobalStyles, createTheme } from "@mui/material";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { type IProviderProps } from "../interfaces/provider-props";

const MUI_OVERRIDES = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Assistant, sans-serif",
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const MuiThemeProvider: FC<IProviderProps> = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={MUI_OVERRIDES}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "@keyframes smartbase-menu-enter": {
              from: { opacity: 0, transform: "translateY(-4px) scale(0.985)" },
              to: { opacity: 1, transform: "translateY(0) scale(1)" },
            },
          }}
        />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MuiThemeProvider;
