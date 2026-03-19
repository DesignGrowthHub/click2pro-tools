import type { BurnoutAuditResult } from "@/data/burnout-risk-audit";
import styles from "./burnout-risk-audit.module.css";

type RecoveryGapChartProps = {
  result: BurnoutAuditResult;
};

export function RecoveryGapChart({ result }: RecoveryGapChartProps) {
  const bars = [
    {
      label: "Current load",
      value: result.score,
      accent: `linear-gradient(180deg, ${result.band.gradientFrom}, ${result.band.gradientTo})`,
    },
    {
      label: "Current recovery",
      value: result.recoveryCapacity,
      accent: "linear-gradient(180deg, #6FD3FF, #3DDC97)",
    },
    {
      label: "Recovery gap",
      value: result.recoveryGap,
      accent: "linear-gradient(180deg, #F6C177, #FF7B72)",
    },
  ];

  return (
    <div className={styles.visualCard}>
      <div className={styles.visualCardHeader}>
        <p className={styles.visualEyebrow}>Recovery gap chart</p>
        <h3 className={styles.visualTitle}>Is recovery keeping up?</h3>
        <p className={styles.visualCopy}>
          When current load stays above recovery capacity, the gap becomes the part people usually feel as ongoing depletion.
        </p>
      </div>

      <div className={styles.recoveryChart}>
        {bars.map((bar) => (
          <div className={styles.recoveryBarGroup} key={bar.label}>
            <div className={styles.recoveryBarTrack}>
              <span className={styles.recoveryBarFill} style={{ height: `${bar.value}%`, background: bar.accent }} />
            </div>
            <span className={styles.recoveryBarValue}>{bar.value}</span>
            <span className={styles.recoveryBarLabel}>{bar.label}</span>
          </div>
        ))}
      </div>

      <p className={styles.visualInsight}>
        {result.recoveryGap > 0
          ? `Your current gap sits at ${result.recoveryGap} points, which suggests demand is outpacing repair.`
          : "Load and recovery appear closely matched right now, which usually means your system still has usable margin."}
      </p>
    </div>
  );
}
