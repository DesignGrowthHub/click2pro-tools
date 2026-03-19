import type { CSSProperties } from "react";
import type { WorkStressResult } from "@/data/work-stress-load-mapper";
import styles from "./work-stress-load-mapper.module.css";

type WorkLoadDistributionChartProps = {
  result: WorkStressResult;
};

export function WorkLoadDistributionChart({ result }: WorkLoadDistributionChartProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Work load distribution chart</p>
        <h3 className={styles.visualTitle}>How work stress is being distributed across the actual pressure sources underneath the day</h3>
        <p className={styles.visualCopy}>
          This is the signature visual of the report. It separates volume, ambiguity, switching, people pressure, emotional labor, and low control so the load looks structural instead of vague.
        </p>
      </div>

      <div className={styles.pathMapShell}>
        <div className={styles.pathMapFlow}>
          {result.loadSegments.map((segment) => (
            <div className={styles.pathMapStep} key={segment.key}>
              <span
                className={`${styles.pathMapNode} ${
                  segment.key === "low-control" ? styles.pathMapNodeBreak : ""
                }`}
                style={
                  {
                    "--node-height": `${Math.max(54, Math.round(segment.value * 1.9))}px`,
                    "--node-accent": segment.accent,
                  } as CSSProperties
                }
              />
              <div className={styles.pathMapMeta}>
                <span className={styles.pathMapLabel}>{segment.label}</span>
                <span className={styles.pathMapValue}>{segment.value}</span>
              </div>
              <p className={styles.signalBarDescription}>{segment.note}</p>
            </div>
          ))}
        </div>

        <div className={styles.pathMapInsight}>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Primary stress driver</span>
            <strong className={styles.pathMapInsightValue}>{result.primaryStressDriver.label}</strong>
            <p className={styles.signalBarDescription}>{result.primaryStressDriver.description}</p>
          </div>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Most useful adjustment</span>
            <strong className={styles.pathMapInsightValue}>{result.mostUsefulWorkLoadAdjustment.label}</strong>
            <p className={styles.signalBarDescription}>{result.mostUsefulWorkLoadAdjustment.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
