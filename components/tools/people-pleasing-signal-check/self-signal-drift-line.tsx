import type { CSSProperties } from "react";
import type { PeoplePleasingResult } from "@/data/people-pleasing-signal-check";
import styles from "./people-pleasing-signal-check.module.css";

type SelfSignalDriftLineProps = {
  compact?: boolean;
  result: PeoplePleasingResult;
};

function buildPointOffsets(values: number[]) {
  return values
    .map((value, index) => {
      const x = 12 + index * 25.3;
      const y = 88 - value * 0.68;
      return `${x},${y}`;
    })
    .join(" ");
}

export function SelfSignalDriftLine({ compact = false, result }: SelfSignalDriftLineProps) {
  const values = result.driftStages.map((stage) => stage.value);
  const polylinePoints = buildPointOffsets(values);

  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Self-signal drift line</p>
        <h3 className={styles.visualTitle}>How your internal signal gets displaced as social pressure rises</h3>
        <p className={styles.visualCopy}>
          This is the core movement the tool is detecting: what happens between the first honest signal, the pressure in the room, the override itself, and the cost that shows up later.
        </p>
      </div>

      <div className={`${styles.driftChartShell} ${compact ? styles.driftChartShellCompact : ""}`}>
        <svg
          aria-hidden="true"
          className={styles.driftChartSvg}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="people-pleasing-drift-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="35%" stopColor="#67E8F9" />
              <stop offset="70%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#FDA4AF" />
            </linearGradient>
          </defs>
          <path
            className={styles.driftChartGrid}
            d="M10 88H90M10 68H90M10 48H90M10 28H90"
          />
          <polyline
            className={styles.driftChartLine}
            fill="none"
            points={polylinePoints}
            stroke="url(#people-pleasing-drift-gradient)"
          />
          {result.driftStages.map((stage, index) => {
            const x = 12 + index * 25.3;
            const y = 88 - stage.value * 0.68;

            return (
              <g key={stage.key}>
                <circle className={styles.driftChartHalo} cx={x} cy={y} r="5.6" />
                <circle
                  cx={x}
                  cy={y}
                  r="3.4"
                  style={{ ["--drift-accent" as string]: stage.accent } as CSSProperties}
                  className={styles.driftChartPoint}
                />
              </g>
            );
          })}
        </svg>

        <div className={styles.driftStageCards}>
          {result.driftStages.map((stage) => (
            <div className={styles.driftStageCard} key={stage.key}>
              <div className={styles.driftStageTop}>
                <span
                  className={styles.driftStageDot}
                  style={{ ["--drift-accent" as string]: stage.accent } as CSSProperties}
                />
                <span className={styles.driftStageLabel}>{stage.label}</span>
                <span className={styles.driftStageValue}>{stage.value}</span>
              </div>
              <p className={styles.driftStageNote}>{stage.note}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
