import type { BurnoutFamilyResult, BurnoutFamilyTool } from "@/data/burnout-family";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";

type BurnoutFamilySourceSplitChartProps = {
  tool: BurnoutFamilyTool;
  result: BurnoutFamilyResult;
};

export function BurnoutFamilySourceSplitChart({
  tool,
  result,
}: BurnoutFamilySourceSplitChartProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualCardHeader}>
        <p className={styles.visualEyebrow}>{tool.visualCopy.sourceSplit.eyebrow}</p>
        <h3 className={styles.visualTitle}>{tool.visualCopy.sourceSplit.title}</h3>
        <p className={styles.visualCopy}>{tool.visualCopy.sourceSplit.copy}</p>
      </div>

      <div aria-hidden="true" className={styles.sourceStack}>
        {result.sourceSplit.map((bucket) => (
          <span
            className={styles.sourceStackSegment}
            key={bucket.key}
            style={{ width: `${bucket.value}%`, background: bucket.accent }}
          />
        ))}
      </div>

      <div className={styles.sourceList}>
        {result.sourceSplit.map((bucket) => (
          <div className={styles.sourceRow} key={bucket.key}>
            <div className={styles.sourceRowMeta}>
              <span className={styles.sourceDot} style={{ background: bucket.accent }} />
              <span className={styles.sourceLabel}>{bucket.label}</span>
            </div>
            <span className={styles.sourceValue}>{bucket.value}%</span>
          </div>
        ))}
      </div>

      <p className={styles.visualInsight}>{tool.visualCopy.sourceSplit.insight(result)}</p>
    </div>
  );
}
