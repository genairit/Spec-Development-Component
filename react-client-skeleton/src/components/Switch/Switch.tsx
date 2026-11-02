import { useId, type FC } from "react";
import { Box } from "@mui/material";
import SmartbaseSwitch from "../../vendor/smartbase/components/Switch/Switch";

interface ISwitchProps {
  label: string;
  value: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}

const Switch: FC<ISwitchProps> = ({
  label,
  value,
  onChange,
  ariaLabel,
  disabled = false,
}) => {
  const id = useId();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        minHeight: 48,
        fontSize: 15,
      }}
    >
      <SmartbaseSwitch
        id={id}
        checked={value}
        disabled={disabled}
        ariaLabel={ariaLabel ?? label}
        onChange={onChange}
      />
      <Box
        component="label"
        htmlFor={id}
        sx={{
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "default" : "pointer",
        }}
      >
        {label}
      </Box>
    </Box>
  );
};

export default Switch;
