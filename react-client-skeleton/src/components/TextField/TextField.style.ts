import { createStyles } from "../../create-styles";
import { theme } from "../../constants/theme.constants";

interface IStylesParams {
  disabled: boolean;
  helperTextColor: string;
}

export const useStyles = ({ disabled, helperTextColor }: IStylesParams) =>
  createStyles({
    textField: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "17px",
        backgroundColor: disabled ? "#C3C3C3" : "#fff",
        padding: "0px 12px",
        border: "1px solid #E2E8F0",
        transition: "border-color 0.18s ease, box-shadow 0.18s ease",
        "&.Mui-focused": {
          borderColor: "#1668BD",
          boxShadow: "0 0 0 3px rgba(22, 104, 189, 0.16)",
        },

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },

        "& input": {
          color: disabled
            ? theme.text.textfield.disabled
            : theme.text.textfield.default,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        },

        "& input::placeholder": {
          color: "#73737C",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          opacity: 1,
        },
      },
      "& .MuiFormHelperText-root": {
        color: helperTextColor,
        fontSize: 13,
        fontWeight: 600,
        fontStyle: "normal",
        lineHeight: "normal",
      },
    },
    fieldContainer: {
      width: "100%",
      direction: "rtl",
    },
    title: {
      color: "#262E3A",
      fontSize: 15,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      marginBottom: "8px",
    },
  });
