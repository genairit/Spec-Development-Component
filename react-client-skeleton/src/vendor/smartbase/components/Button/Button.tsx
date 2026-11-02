import {
  type TButtonVariant,
  MUI_VARIANT_BY_BUTTON_VARIANT,
  IS_RIPPLE_DISABLED_BY_BUTTON_VARIANT,
} from "./constants/button.constant";

import { useStyles } from "./Button.style";
import {
  lazy,
  Suspense,
  type CSSProperties,
  type FC,
  type MouseEvent,
} from "react";
import { Button as MuiButton, CircularProgress } from "@mui/material";

const Loader = lazy(() => import("../Loader/Loader"));

interface IButtonProps {
  text: string;
  sx?: CSSProperties;
  disabled?: boolean;
  isLoading?: boolean;
  loaderSx?: CSSProperties;
  variant?: TButtonVariant;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

const Button: FC<IButtonProps> = ({
  sx,
  text,
  onClick,
  disabled,
  loaderSx,
  isLoading = false,
  variant = "primary",
}) => {
  const styles = useStyles();
  const showOverlay = disabled || isLoading;

  return (
    <MuiButton
      onClick={onClick}
      aria-label={text}
      aria-busy={isLoading}
      disabled={disabled || isLoading}
      variant={MUI_VARIANT_BY_BUTTON_VARIANT[variant]}
      disableRipple={IS_RIPPLE_DISABLED_BY_BUTTON_VARIANT[variant]}
      sx={{ ...styles.button({ isLoading, showOverlay, variant }), ...sx }}
    >
      {isLoading ? (
        <>
          <span style={styles.text}>{text}</span>
          <div style={styles.loadingAnimation}>
            <Suspense fallback={<CircularProgress size={20} color="inherit" />}>
              <Loader sx={loaderSx} />
            </Suspense>
          </div>
        </>
      ) : (
        text
      )}
    </MuiButton>
  );
};

export default Button;
