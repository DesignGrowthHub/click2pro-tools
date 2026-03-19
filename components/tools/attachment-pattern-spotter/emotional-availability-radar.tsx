import { useId } from "react";
import type { AttachmentResult } from "@/data/attachment-pattern-spotter";
import styles from "./attachment-pattern-spotter.module.css";

function getPoint(index: number, total: number, value: number, radius: number, center: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  const scaled = radius * (value / 100);

  return {
    x: center + Math.cos(angle) * scaled,
    y: center + Math.sin(angle) * scaled,
  };
}

function toPointString(points: Array<{ x: number; y: number }>) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

type EmotionalAvailabilityRadarProps = {
  result: AttachmentResult;
};

export function EmotionalAvailabilityRadar({ result }: EmotionalAvailabilityRadarProps) {
  const gradientId = useId().replace(/:/g, "");
  const center = 170;
  const radius = 118;
  const total = result.radarMetrics.length;
  const points = result.radarMetrics.map((metric, index) => getPoint(index, total, metric.value, radius, center));
  const labelPoints = result.radarMetrics.map((_, index) => getPoint(index, total, 100, radius + 28, center));

  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Emotional availability radar</p>
        <h3 className={styles.visualTitle}>Profile shape across openness, steadiness, and need expression</h3>
        <p className={styles.visualCopy}>
          This shape gives a softer relational view of how the pattern behaves across emotional availability, tolerance, and clarity needs.
        </p>
      </div>

      <div className={styles.radarWrap}>
        <svg
          aria-label="Emotional availability radar"
          className={styles.radarChart}
          role="img"
          viewBox="0 0 340 340"
        >
          <defs>
            <linearGradient id={`radar-fill-${gradientId}`} x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={result.profile.gradientFrom} stopOpacity="0.55" />
              <stop offset="100%" stopColor={result.profile.gradientTo} stopOpacity="0.18" />
            </linearGradient>
          </defs>

          {[25, 50, 75, 100].map((value) => {
            const ring = result.radarMetrics.map((_, index) => getPoint(index, total, value, radius, center));

            return <polygon className={styles.radarGrid} key={value} points={toPointString(ring)} />;
          })}

          {result.radarMetrics.map((_, index) => {
            const outer = getPoint(index, total, 100, radius, center);
            return (
              <line
                className={styles.radarAxis}
                key={result.radarMetrics[index].key}
                x1={center}
                x2={outer.x}
                y1={center}
                y2={outer.y}
              />
            );
          })}

          <polygon className={styles.radarArea} points={toPointString(points)} style={{ fill: `url(#radar-fill-${gradientId})` }} />
          <polygon className={styles.radarOutline} points={toPointString(points)} />

          {points.map((point, index) => (
            <circle
              className={styles.radarDot}
              cx={point.x}
              cy={point.y}
              key={result.radarMetrics[index].key}
              r={4}
              style={{ fill: result.radarMetrics[index].accent }}
            />
          ))}
        </svg>

        {labelPoints.map((point, index) => (
          <div
            className={styles.radarLabel}
            key={result.radarMetrics[index].key}
            style={{ left: `${(point.x / 340) * 100}%`, top: `${(point.y / 340) * 100}%` }}
          >
            <span className={styles.radarLabelTitle}>{result.radarMetrics[index].label}</span>
            <span className={styles.radarLabelValue}>{result.radarMetrics[index].value}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
