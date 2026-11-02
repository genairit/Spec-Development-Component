import type { FC } from "react";
import SmartbaseAutocomplete from "../../vendor/smartbase/components/Autocomplete/Autocomplete";

interface IAutocompleteProps {
  options?: string[];
  disabled?: boolean;
  placeholder?: string;
  value?: string | null;
  noOptionsText?: string;
  isAutocomplete?: boolean;
  onChange?: (value: string | null) => void;
}

const Autocomplete: FC<IAutocompleteProps> = ({
  value = null,
  options = [],
  disabled = false,
  onChange = () => {},
  isAutocomplete = true,
  placeholder = "בחר אופציה",
  noOptionsText = "אין אפשרויות",
}) => (
  <SmartbaseAutocomplete
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    emptyText={noOptionsText}
    onChange={onChange}
    isSearchMode={isAutocomplete}
    isInputReadOnly={!isAutocomplete}
    isClearable={isAutocomplete}
    isSearchIconShown={isAutocomplete}
    options={options.map(option => ({ value: option, label: option }))}
  />
);

export default Autocomplete;
