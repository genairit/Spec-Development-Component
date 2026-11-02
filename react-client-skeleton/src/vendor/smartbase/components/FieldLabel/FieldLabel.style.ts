import { theme } from "../../theme";
import { createStyles } from "../../create-styles";

export const useStyles = () =>
  createStyles({
    label: {
      fontSize: 15,
      fontWeight: 600,
      textAlign: "start",
      fontStyle: "normal",
      marginBottom: "8px",
      lineHeight: "normal",
      color: theme.text.textfield.default,
    },
    requiredMark: {
      color: theme.colors.error,
    },
  });
