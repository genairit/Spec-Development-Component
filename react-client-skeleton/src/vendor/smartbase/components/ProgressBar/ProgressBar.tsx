import type { FC } from "react";
import { useMediaQuery } from "@mui/material";
import { useStyles } from "./ProgressBar.style";
import {
  getProgress,
  getProgressStepLabel,
} from "../../utilities/progress.utility";
import {
  PROGRESS_BAR_SIZES,
  type ProgressBarSizeType,
} from "./constants/progress-bar.constant";

export interface IProgressBarProps {
  value: number;
  total: number;
  showFraction?: boolean;
  size?: ProgressBarSizeType;
}

const ProgressBar: FC<IProgressBarProps> = ({
  value,
  total,
  showFraction = true,
  size = PROGRESS_BAR_SIZES.MEDIUM,
}) => {
  const styles = useStyles();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const progress = getProgress({ value, total });
  const stepLabel = getProgressStepLabel(progress);

  return (
    <div
      aria-valuemin={0}
      role="progressbar"
      aria-label={stepLabel}
      style={styles.root(size)}
      aria-valuenow={progress.step}
      aria-valuemax={progress.total}
    >
      {showFraction && (
        <span style={styles.fraction(size)}>
          {progress.step}/{progress.total}
        </span>
      )}
      <div style={styles.track(size)}>
        <div style={styles.fill(progress.percentage, reducedMotion)} />
      </div>
    </div>
  );
};

export default ProgressBar;
