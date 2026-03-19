import type { OverthinkingResult } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";

type SpilloverImpactChartProps = {
  result: OverthinkingResult;
};

export function SpilloverImpactChart({ result }: SpilloverImpactChartProps) {
  const bars = [
    { label: "Sleep", value: result.spillover.sleep, accent: "#A78BFA" },
    { label: "Focus", value: result.spillover.focus, accent: "#6FD3FF" },
    { label: "Energy", value: result.spillover.energy, accent: "#F472B6" },
  ];

  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Loop effect spillover</p>
        <h3 className={styles.visualTitle}>How the pattern is landing on daily functioning</h3>
        <p className={styles.visualCopy}>
          Overthinking becomes easier to take seriously once you can see where it is quietly draining recovery, attention, and usable energy.
        </p>
      </div>

      <div className={styles.spilloverChart}>
        {bars.map((bar) => (
          <div className={styles.spilloverBarGroup} key={bar.label}>
            <div className={styles.spilloverBarTrack}>
              <span className={styles.spilloverBarFill} style={{ height: `${bar.value}%`, background: bar.accent }} />
            </div>
            <span className={styles.spilloverBarValue}>{bar.value}</span>
            <span className={styles.spilloverBarLabel}>{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
