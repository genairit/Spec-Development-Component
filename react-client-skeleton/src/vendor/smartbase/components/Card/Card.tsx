import { Box } from "@mui/material";
import { useStyles } from "./Card.style";
import CardHeader from "./components/CardHeader";
import { useState, type CSSProperties, type FC, type ReactNode } from "react";

export interface ICardProps {
  title?: string;
  subtitle?: string;
  sx?: CSSProperties;
  action?: ReactNode;
  children: ReactNode;
  onRemove?: () => void;
}

const Card: FC<ICardProps> = ({
  title,
  subtitle,
  sx,
  action,
  children,
  onRemove,
}) => {
  const styles = useStyles();

  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  if (isRemoved) {
    return null;
  }

  const removeCard = (): void => {
    setIsRemoved(true);
    onRemove?.();
  };

  const handleRemove = onRemove ? removeCard : null;

  return (
    <Box component="section" sx={{ ...styles.card, ...sx }}>
      <CardHeader
        title={title}
        action={action}
        subtitle={subtitle}
        onRemove={handleRemove}
      />
      {children}
    </Box>
  );
};

export default Card;
