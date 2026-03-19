import type { RelationshipClarityResult } from "@/data/relationship-clarity-check";
import styles from "./relationship-clarity-check.module.css";

type RelationshipClarityMatrixProps = {
  compact?: boolean;
  result: RelationshipClarityResult;
};

export function RelationshipClarityMatrix({
  compact = false,
  result,
}: RelationshipClarityMatrixProps) {
  return (
    <article className={`${styles.visualCard} ${compact ? styles.visualCardCompact : ""}`}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Relationship clarity matrix</p>
        <h3 className={styles.visualTitle}>Where the connection currently sits across structure and emotional steadiness</h3>
        <p className={styles.visualCopy}>
          The matrix combines consistency with communication on one axis and emotional safety with trust on the other. It is designed to show whether the confusion is local or spread across the relationship field.
        </p>
      </div>

      <div className={styles.matrixShell}>
        <div className={styles.matrixAxisY}>
          <span>High steadiness</span>
          <span>Low steadiness</span>
        </div>

        <div className={styles.matrixFrame}>
          <div className={styles.matrixGrid}>
            <div className={styles.matrixCell}>
              <p className={styles.matrixCellTitle}>Coherent signal</p>
              <p className={styles.matrixCellCopy}>Stable trust and readable structure reinforce each other.</p>
            </div>
            <div className={styles.matrixCell}>
              <p className={styles.matrixCellTitle}>Readable but soft</p>
              <p className={styles.matrixCellCopy}>Some clarity exists, though directness or consistency still needs strengthening.</p>
            </div>
            <div className={styles.matrixCell}>
              <p className={styles.matrixCellTitle}>Warm but unstable</p>
              <p className={styles.matrixCellCopy}>Emotion may be present, but the structure does not stay consistent enough.</p>
            </div>
            <div className={styles.matrixCell}>
              <p className={styles.matrixCellTitle}>Diffuse signal field</p>
              <p className={styles.matrixCellCopy}>Clarity is thinning across trust, safety, and directness at once.</p>
            </div>
          </div>

          <div
            className={styles.matrixPoint}
            style={{
              left: `${Math.max(8, Math.min(92, result.matrixPlacement.x))}%`,
              top: `${100 - Math.max(8, Math.min(92, result.matrixPlacement.y))}%`,
            }}
          >
            <span className={styles.matrixPointPulse} />
            <span className={styles.matrixPointCore} />
          </div>

          <div className={styles.matrixCenterCard}>
            <span className={styles.matrixCenterValue}>{result.matrixPlacement.label}</span>
            <span className={styles.matrixCenterLabel}>Current signal position</span>
          </div>
        </div>

        <div className={styles.matrixAxisX}>
          <span>Low structure</span>
          <span>High structure</span>
        </div>
      </div>

      <div className={styles.matrixLegend}>
        {result.matrixInsights.map((metric) => (
          <div className={styles.matrixLegendItem} key={metric.label}>
            <span className={styles.matrixLegendSwatch} style={{ background: metric.accent }} />
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
