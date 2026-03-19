import { useId } from "react";
import type { CSSProperties } from "react";
import styles from "./burnout-risk-audit.module.css";

type MetricDialBand = {
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

type MetricDialProps = {
  value: number;
  label: string;
  band: MetricDialBand;
  size?: "small" | "large";
  caption?: string;
  className?: string;
};

export function MetricDial({
  value,
  label,
  band,
  size = "large",
  caption,
  className,
}: MetricDialProps) {
  const gradientId = useId().replace(/:/g, "");
  const radius = size === "large" ? 86 : 58;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (circumference * value) / 100;

  return (
    <div
      className={`${styles.metricDial} ${size === "small" ? styles.metricDialSmall : styles.metricDialLarge} ${
        className ?? ""
      }`}
      style={
        {
          "--dial-glow": band.glow,
          "--dial-start": band.gradientFrom,
          "--dial-end": band.gradientTo,
        } as CSSProperties
      }
    >
      <svg
        aria-hidden="true"
        className={styles.metricDialSvg}
        viewBox={size === "large" ? "0 0 220 220" : "0 0 152 152"}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={band.gradientFrom} />
            <stop offset="100%" stopColor={band.gradientTo} />
          </linearGradient>
        </defs>
        <circle
          className={styles.metricDialTrack}
          cx={size === "large" ? 110 : 76}
          cy={size === "large" ? 110 : 76}
          r={radius}
        />
        <circle
          className={styles.metricDialProgress}
          cx={size === "large" ? 110 : 76}
          cy={size === "large" ? 110 : 76}
          r={radius}
          stroke={`url(#${gradientId})`}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeOffset,
          }}
        />
      </svg>

      <div className={styles.metricDialCenter}>
        <p className={styles.metricDialValue}>{value}</p>
        <p className={styles.metricDialLabel}>{label}</p>
        {caption ? <p className={styles.metricDialCaption}>{caption}</p> : null}
      </div>
    </div>
  );
}
