import type { CSSProperties } from "react";
import type { DailyFunctioningResult } from "@/data/daily-functioning-stability-check";
import styles from "./daily-functioning-stability-check.module.css";

type DailyStabilityDashboardProps = {
  result: DailyFunctioningResult;
};

export function DailyStabilityDashboard({ result }: DailyStabilityDashboardProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Daily stability dashboard</p>
        <h3 className={styles.visualTitle}>How steady the day stays, where rhythm thins, and how much recovery margin is still available once load rises</h3>
        <p className={styles.visualCopy}>
          This is the signature visual of the report. It turns a vague sense of wobble into a cleaner dashboard: overall steadiness, rhythm consistency, slip-point strength, and recovery margin all visible in one place.
        </p>
      </div>

      <div className={styles.pathMapShell}>
        <div className={styles.pathMapFlow}>
          {result.dashboardMetrics.map((metric) => (
            <div className={styles.pathMapStep} key={metric.label}>
              <span
                className={`${styles.pathMapNode} ${
                  metric.label.toLowerCase().includes("slip") ? styles.pathMapNodeBreak : ""
                }`}
                style={
                  {
                    "--node-height": `${Math.max(54, Math.round(metric.value * 1.9))}px`,
                    "--node-accent": metric.accent,
                  } as CSSProperties
                }
              />
              <div className={styles.pathMapMeta}>
                <span className={styles.pathMapLabel}>{metric.label}</span>
                <span className={styles.pathMapValue}>{metric.value}</span>
              </div>
              <p className={styles.signalBarDescription}>{metric.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.pathMapInsight}>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Primary instability driver</span>
            <strong className={styles.pathMapInsightValue}>{result.primaryInstabilityDriver.label}</strong>
            <p className={styles.signalBarDescription}>{result.primaryInstabilityDriver.description}</p>
          </div>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Most useful reset direction</span>
            <strong className={styles.pathMapInsightValue}>{result.mostUsefulDailyResetDirection.label}</strong>
            <p className={styles.signalBarDescription}>{result.mostUsefulDailyResetDirection.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
