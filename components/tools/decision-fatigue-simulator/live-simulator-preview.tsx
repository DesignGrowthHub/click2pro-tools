import type { DecisionSimulatorResult } from "@/data/decision-fatigue-simulator";
import styles from "./decision-fatigue-simulator.module.css";

type LiveSimulatorPreviewProps = {
  result: DecisionSimulatorResult;
  label: string;
  totalScenarios: number;
  compact?: boolean;
};

function buildCurvePoints(values: number[]) {
  if (!values.length) {
    return "10,64 40,62 70,60";
  }

  return values
    .map((value, index) => {
      const x = 10 + index * (80 / Math.max(values.length - 1, 1));
      const y = 76 - value * 0.58;
      return `${x},${y}`;
    })
    .join(" ");
}

export function LiveSimulatorPreview({
  result,
  label,
  totalScenarios,
  compact = false,
}: LiveSimulatorPreviewProps) {
  const curveValues = [86, ...result.snapshots.map((snapshot) => snapshot.clarity)];
  const points = buildCurvePoints(curveValues);

  return (
    <div className={`${styles.previewCard} ${compact ? styles.previewCardCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewEyebrow}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewStatePill}>{result.patternLabel.title}</span>
      </div>

      <div className={styles.previewMeterShell}>
        <div className={styles.previewMeterMeta}>
          <span className={styles.previewMeterLabel}>Clarity</span>
          <span className={styles.previewMeterValue}>{result.currentState.clarity}</span>
        </div>
        <div className={styles.previewMeterTrack}>
          <span className={styles.previewMeterFill} style={{ width: `${result.currentState.clarity}%` }} />
        </div>
      </div>

      <div className={styles.previewStatsGrid}>
        <div className={styles.previewStatCard}>
          <span className={styles.previewStatLabel}>Confidence</span>
          <span className={styles.previewStatValue}>{result.currentState.confidence}</span>
        </div>
        <div className={styles.previewStatCard}>
          <span className={styles.previewStatLabel}>Cognitive load</span>
          <span className={styles.previewStatValue}>{result.currentState.cognitiveLoad}</span>
        </div>
        <div className={styles.previewStatCard}>
          <span className={styles.previewStatLabel}>Choice friction</span>
          <span className={styles.previewStatValue}>{result.currentState.choiceFriction}</span>
        </div>
      </div>

      <div className={styles.previewSection}>
        <div className={styles.previewSectionHead}>
          <span>Decision path</span>
          <span>
            {result.snapshots.length} / {totalScenarios}
          </span>
        </div>

        <div className={styles.previewPathRail}>
          {Array.from({ length: totalScenarios }, (_, index) => {
            const snapshot = result.snapshots[index];

            return (
              <div className={styles.previewPathNodeWrap} key={index}>
                <span
                  className={styles.previewPathNode}
                  data-active={snapshot ? "true" : "false"}
                  data-tone={snapshot?.tone ?? "steady"}
                />
                <span className={styles.previewPathLabel}>{index + 1}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.previewSection}>
        <div className={styles.previewSectionHead}>
          <span>Clarity curve</span>
          <span>Live trajectory</span>
        </div>

        <svg aria-hidden="true" className={styles.previewCurve} viewBox="0 0 100 80">
          <polyline className={styles.previewCurveTrack} points="10,66 90,18" />
          <polyline className={styles.previewCurveLine} points={points} />
        </svg>
      </div>

      <p className={styles.previewSummary}>{result.signalLabel}</p>
    </div>
  );
}
