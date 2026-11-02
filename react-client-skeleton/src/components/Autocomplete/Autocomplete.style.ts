import type { Theme } from "@mui/material";
import { createStyles } from "../../create-styles";
import { theme } from "../../vendor/smartbase/theme";

export const useStyles = () =>
  createStyles({
    textfield: ({ disabled = false, isAutocomplete = true }) => ({
      width: "100%",
      "& .MuiOutlinedInput-root": {
        minHeight: 54,
        borderRadius: "17px",
        paddingInline: "17px 48px",
        border: `1px solid ${theme.border.subtle}`,
        backgroundColor: disabled ? "#F6F8FB" : theme.colors.white,
        boxShadow: theme.shadow.default,
        transition: "border-color 0.18s ease, box-shadow 0.18s ease",
        "&.Mui-focused": {
          borderColor: theme.colors.lightPurple,
          boxShadow: "0 0 0 3px rgba(22, 104, 189, 0.16)",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiOutlinedInput-input": {
        fontWeight: 600,
        fontSize: "16px",
        ...(isAutocomplete === false && {
          caretColor: "transparent",
          cursor: "pointer",
        }),
      },
      "& input::placeholder": {
        opacity: 1,
        fontWeight: 600,
        fontSize: "16px",
      },
    }),
    iconContainer: ({ disabled = false }) => ({
      top: "50%",
      right: "8px",
      display: "flex",
      alignItems: "center",
      position: "absolute",
      transform: "translateY(-50%)",
      pointerEvents: disabled ? "none" : "auto",
    }),
    icon: ({ disabled = false }) => ({
      fontSize: "30px",
      cursor: "pointer",
      transition: "transform 0.2s ease",
      color: disabled ? "#aaa" : undefined,
    }),
    spotlightTextfield: {
      top: 30,
      width: "90%",
      position: "absolute",
    },
    menuContainer: {
      marginTop: "12px",
      boxShadow: theme.shadow.default,
      borderRadius: "22px",
      overflow: "hidden",
      border: `1px solid ${theme.border.subtle}`,
      backgroundColor: theme.colors.white,
      animation: "smartbase-menu-enter 180ms ease-out",
      "@media (prefers-reduced-motion: reduce)": { animation: "none" },
    },
    menuItem: {
      padding: 0,
      color: "black",
      "& .MuiAutocomplete-option": {
        padding: "8px 16px",
        borderBottom: "1.5px solid #efefefff",
        "&:last-child": {
          borderBottom: "none",
        },
        "&:hover": {
          backgroundColor: "#E1EDFA",
        },
      },
    },
    backdrop: (theme: Theme) => ({
      color: "#fff",
      zIndex: theme.zIndex.modal + 1,
    }),
  });
