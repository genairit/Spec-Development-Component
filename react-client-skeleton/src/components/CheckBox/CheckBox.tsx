import SmartbaseCheckBox from "../../vendor/smartbase/components/CheckBox/CheckBox";
import { theme } from "../../constants/theme.constants";
import type { FC, JSX } from "react";

interface ICheckBoxProps {
  value: boolean;
  disabled?: boolean;
  textColor?: string;
  text: string | JSX.Element;
  onChange: (value: boolean) => void;
}

const CheckBox: FC<ICheckBoxProps> = ({
  text,
  onChange,
  value = false,
  disabled = false,
  textColor = theme.colors.black,
}) => {
  return (
    <SmartbaseCheckBox
      text={text}
      value={value}
      disabled={disabled}
      textColor={textColor}
      onChange={onChange}
    />
  );
};

export default CheckBox;
