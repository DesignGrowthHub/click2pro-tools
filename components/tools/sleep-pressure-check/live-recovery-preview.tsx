import type { CSSProperties } from "react";
import type { SleepResult, TimelinePoint } from "@/data/sleep-pressure-check";
import styles from "./sleep-pressure-check.module.css";

function getPoint(index: number, total: number, value: number, width: number, height: number, padding: number) {
  const x = padding + (index / Math.max(1, total - 1)) * (width - padding * 2);
  const y = height - padding - (value / 100) * (height - padding * 2);

  return { x, y };
}

function buildPath(points: Array<{ x: number; y: number }>) {
  if (!points.length) {
    return "";
  }

  return points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    const previous = points[index - 1];
    const controlX = (previous.x + point.x) / 2;

    return `${path} Q ${controlX} ${previous.y} ${point.x} ${point.y}`;
  }, "");
}

function getSeriesPath(
  timeline: TimelinePoint[],
  selector: (point: TimelinePoint) => number,
  width: number,
  height: number,
  padding: number,
) {
  const points = timeline.map((point, index) => getPoint(index, timeline.length, selector(point), width, height, padding));

  return {
    d: buildPath(points),
    points,
  };
}

type LiveRecoveryPreviewProps = {
  compact?: boolean;
  label: string;
  result: SleepResult;
};

export function LiveRecoveryPreview({ compact = false, label, result }: LiveRecoveryPreviewProps) {
  const timeline = compact ? result.timeline.slice(-5) : result.timeline;
  const width = 340;
  const height = compact ? 184 : 216;
  const padding = compact ? 18 : 22;
  const debt = getSeriesPath(timeline, (point) => point.debt, width, height, padding);
  const carryover = getSeriesPath(timeline, (point) => point.carryover, width, height, padding);
  const restoration = getSeriesPath(timeline, (point) => point.restoration, width, height, padding);

  const metrics = [
    { label: "Recovery debt", value: result.dimensions.recoveryDebt, accent: "#93C5FD" },
    { label: "Carryover", value: result.dimensions.daytimeCarryover, accent: "#FCA5A5" },
    { label: "Restoration", value: result.dimensions.restorationQuality, accent: "#5EEAD4" },
  ];

  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewScore}>Score {result.score}</span>
      </div>

      <div className={styles.previewChartWrap}>
        <svg
          aria-label="Recovery preview timeline"
          className={styles.previewChart}
          role="img"
          viewBox={`0 0 ${width} ${height}`}
        >
          {[20, 40, 60, 80].map((level) => (
            <line
              className={styles.previewGrid}
              key={level}
              x1={padding}
              x2={width - padding}
              y1={height - padding - (level / 100) * (height - padding * 2)}
              y2={height - padding - (level / 100) * (height - padding * 2)}
            />
          ))}

          <path className={styles.previewLineDebt} d={debt.d} />
          <path className={styles.previewLineCarryover} d={carryover.d} />
          <path className={styles.previewLineRestoration} d={restoration.d} />

          {debt.points.map((point, index) => (
            <g key={`${timeline[index].day}-${index}`}>
              <circle className={styles.previewDotDebt} cx={point.x} cy={point.y} r={compact ? 3 : 4} />
              <circle
                className={styles.previewDotRestoration}
                cx={restoration.points[index].x}
                cy={restoration.points[index].y}
                r={compact ? 2.8 : 3.6}
              />
            </g>
          ))}
        </svg>

        <div className={styles.previewLegend}>
          <span className={styles.previewLegendItem}>
            <span className={`${styles.previewLegendDot} ${styles.previewLegendDotDebt}`} />
            Recovery debt
          </span>
          <span className={styles.previewLegendItem}>
            <span className={`${styles.previewLegendDot} ${styles.previewLegendDotCarryover}`} />
            Carryover
          </span>
          <span className={styles.previewLegendItem}>
            <span className={`${styles.previewLegendDot} ${styles.previewLegendDotRestoration}`} />
            Restoration
          </span>
        </div>

        <div className={styles.previewDayRow}>
          {timeline.map((point) => (
            <span className={styles.previewDayLabel} key={point.day}>
              {point.day}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.previewMetricGrid}>
        {metrics.map((metric) => (
          <div className={styles.previewMetric} key={metric.label}>
            <span className={styles.previewMetricLabel}>{metric.label}</span>
            <span className={styles.previewMetricValue} style={{ "--metric-accent": metric.accent } as CSSProperties}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      <p className={styles.previewFootnote}>{result.recoveryResilienceLabel}.</p>
    </div>
  );
}
