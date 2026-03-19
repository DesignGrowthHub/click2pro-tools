import type { CSSProperties } from "react";
import type { ReassuranceResult } from "@/data/reassurance-seeking-decoder";
import styles from "./reassurance-seeking-decoder.module.css";

type LiveReassurancePreviewProps = {
  compact?: boolean;
  label: string;
  result: ReassuranceResult;
};

const previewPositions = [
  { left: "16%", top: "50%" },
  { left: "34%", top: "22%" },
  { left: "76%", top: "24%" },
  { left: "76%", top: "76%" },
  { left: "28%", top: "80%" },
];

export function LiveReassurancePreview({
  compact = false,
  label,
  result,
}: LiveReassurancePreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.dominantLoopDriver.label}</span>
      </div>

      <div className={`${styles.clusterMap} ${styles.clusterMapCompact}`}>
        <div className={styles.clusterSurface}>
          <svg className={styles.clusterLines} viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="16" x2="34" y1="50" y2="22" />
            <line x1="34" x2="76" y1="22" y2="24" />
            <line x1="76" x2="76" y1="24" y2="76" />
            <line x1="76" x2="28" y1="76" y2="80" />
            <line x1="28" x2="16" y1="80" y2="50" />
          </svg>

          {result.loopNodes.map((node, index) => (
            <div
              className={styles.clusterNode}
              key={node.label}
              style={
                {
                  "--cluster-left": previewPositions[index]?.left ?? "50%",
                  "--cluster-top": previewPositions[index]?.top ?? "50%",
                  "--cluster-size": `${Math.max(26, Math.min(54, 20 + node.value * 0.28))}px`,
                  "--cluster-accent": node.accent,
                } as CSSProperties
              }
            >
              <span className={styles.clusterPulse} />
              <span className={styles.clusterCore} />
              <span className={styles.clusterLabelWrap}>
                <span className={styles.clusterLabel}>{node.label}</span>
                <span className={styles.clusterValue}>{node.value}</span>
              </span>
            </div>
          ))}

          <div className={styles.clusterCenter}>
            <span className={styles.clusterCenterValue}>{result.loopReinforcement}</span>
            <span className={styles.clusterCenterLabel}>Loop reinforcement</span>
          </div>
        </div>
      </div>

      <div className={styles.previewMetricStack}>
        {result.previewMetrics.map((metric) => (
          <div className={styles.previewMetricRow} key={metric.label}>
            <div className={styles.previewMetricMeta}>
              <span>{metric.label}</span>
              <span>{metric.value}</span>
            </div>
            <div className={styles.previewMetricTrack}>
              <span
                className={styles.previewMetricFill}
                style={{ width: `${metric.value}%`, background: metric.accent }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.previewBalanceRow}>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Relief hold</span>
          <span className={styles.previewBalanceValue}>{result.reliefDurationLevel}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Relapse speed</span>
          <span className={styles.previewBalanceValue}>{result.relapseSpeedLevel}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.primaryReassuranceContext.label}</span>
        <span className={styles.previewChip}>{result.dominantLoopDriver.label}</span>
        <span className={styles.previewChip}>{result.strongestSpilloverArea.label}</span>
      </div>
    </div>
  );
}
