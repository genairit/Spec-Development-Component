import type { FC } from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./FieldLabel.style";
import type { SystemStyleObject } from "@mui/system";

const REQUIRED_MARK = "*";

interface IFieldLabelProps {
  title?: string;
  required?: boolean;
  sx?: SystemStyleObject;
}

const FieldLabel: FC<IFieldLabelProps> = ({ sx, title, required = false }) => {
  const styles = useStyles();
  const labelStyle = { ...styles.label, ...sx };

  if (!title) {
    return null;
  }

  return (
    <Typography sx={labelStyle}>
      {title}
      {required && (
        <span aria-hidden style={styles.requiredMark}>
          {REQUIRED_MARK}
        </span>
      )}
    </Typography>
  );
};

export default FieldLabel;
