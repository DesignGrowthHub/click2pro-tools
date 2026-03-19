import type { BurnoutFamilyResult, BurnoutFamilyTool } from "@/data/burnout-family";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";

type BurnoutFamilyRecoveryChartProps = {
  tool: BurnoutFamilyTool;
  result: BurnoutFamilyResult;
};

export function BurnoutFamilyRecoveryChart({
  tool,
  result,
}: BurnoutFamilyRecoveryChartProps) {
  const bars = [
    {
      label: tool.visualCopy.recovery.loadLabel,
      value: result.score,
      accent: `linear-gradient(180deg, ${result.band.gradientFrom}, ${result.band.gradientTo})`,
    },
    {
      label: tool.visualCopy.recovery.recoveryLabel,
      value: result.recoveryCapacity,
      accent: "linear-gradient(180deg, #6FD3FF, #3DDC97)",
    },
    {
      label: tool.visualCopy.recovery.gapLabel,
      value: result.recoveryGap,
      accent: "linear-gradient(180deg, #F6C177, #FF7B72)",
    },
  ];

  return (
    <div className={styles.visualCard}>
      <div className={styles.visualCardHeader}>
        <p className={styles.visualEyebrow}>{tool.visualCopy.recovery.eyebrow}</p>
        <h3 className={styles.visualTitle}>{tool.visualCopy.recovery.title}</h3>
        <p className={styles.visualCopy}>{tool.visualCopy.recovery.copy}</p>
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

      <p className={styles.visualInsight}>{tool.visualCopy.recovery.gapInsight(result)}</p>
    </div>
  );
}
