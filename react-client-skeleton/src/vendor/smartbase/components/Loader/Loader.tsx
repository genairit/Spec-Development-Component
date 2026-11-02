import type { FC } from "react";
import { Lottie } from "lottie-react";
import { useMediaQuery } from "@mui/material";
import { useStyles } from "./Loader.style";
import loadingAnimation from "../../Smartbase-Loading.json";

interface ILoaderProps {
  sx?: React.CSSProperties;
}

const Loader: FC<ILoaderProps> = ({ sx }) => {
  const styles = useStyles();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div style={styles.root}>
      <Lottie
        src={loadingAnimation}
        loop={!reducedMotion}
        autoplay={!reducedMotion}
        style={{ ...styles.loadingAnimation, ...sx }}
      />
    </div>
  );
};

export default Loader;
