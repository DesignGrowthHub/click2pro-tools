import type { FocusAuditResult } from "@/data/focus-friction-audit";
import styles from "./focus-friction-audit.module.css";

type FrictionStackChartProps = {
  result: FocusAuditResult;
  compact?: boolean;
};

export function FrictionStackChart({ result, compact = false }: FrictionStackChartProps) {
  return (
    <div className={`${styles.stackChart} ${compact ? styles.stackChartCompact : ""}`}>
      {result.topBlockers.map((blocker, index) => (
        <div className={styles.stackCard} key={blocker.key}>
          <div className={styles.stackCardTop}>
            <span className={styles.stackRank}>{index + 1}</span>
            <span className={styles.stackValue}>{blocker.value}</span>
          </div>
          <p className={styles.stackLabel}>{blocker.label}</p>
          <div className={styles.stackTrack}>
            <span
              className={styles.stackFill}
              style={{
                width: `${blocker.value}%`,
                background: `linear-gradient(90deg, ${blocker.accent}, rgba(255,255,255,0.26))`,
              }}
            />
          </div>
          <p className={styles.stackNote}>
            {index === 0
              ? "Primary friction driver"
              : index === 1
                ? "Secondary drag factor"
                : "Supporting friction layer"}
          </p>
        </div>
      ))}
    </div>
  );
}
