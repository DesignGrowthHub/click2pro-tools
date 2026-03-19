import type { DecisionSimulatorResult } from "@/data/decision-fatigue-simulator";
import styles from "./decision-fatigue-simulator.module.css";

type ClarityCurveChartProps = {
  result: DecisionSimulatorResult;
  compact?: boolean;
};

function buildPath(values: number[]) {
  if (!values.length) {
    return "10,66 90,20";
  }

  return values
    .map((value, index) => {
      const x = 10 + index * (80 / Math.max(values.length - 1, 1));
      const y = 78 - value * 0.56;
      return `${x},${y}`;
    })
    .join(" ");
}

export function ClarityCurveChart({ result, compact = false }: ClarityCurveChartProps) {
  const values = [86, ...result.snapshots.map((snapshot) => snapshot.clarity)];
  const path = buildPath(values);

  return (
    <div className={`${styles.curveShell} ${compact ? styles.curveShellCompact : ""}`}>
      <svg aria-hidden="true" className={styles.curveSvg} viewBox="0 0 100 80">
        <defs>
          <linearGradient id="decision-curve-line" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="55%" stopColor="#22C7D6" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
          <linearGradient id="decision-curve-area" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.28)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
          </linearGradient>
        </defs>
        <path className={styles.curveBase} d="M10 12 V78 H90" />
        <polyline className={styles.curveTrack} points="10,30 90,30" />
        <polyline className={styles.curveLine} points={path} />
      </svg>

      <div className={styles.curveLegend}>
        <span className={styles.curveLegendItem}>
          <span className={styles.curveLegendDot} />
          Clarity depletion curve
        </span>
        <span className={styles.curveLegendValue}>{result.currentState.clarity} ending clarity</span>
      </div>
    </div>
  );
}
