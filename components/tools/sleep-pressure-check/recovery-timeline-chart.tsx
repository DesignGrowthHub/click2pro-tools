import type { TimelinePoint, SleepResult } from "@/data/sleep-pressure-check";
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

type RecoveryTimelineChartProps = {
  compact?: boolean;
  result: SleepResult;
};

export function RecoveryTimelineChart({ compact = false, result }: RecoveryTimelineChartProps) {
  const width = 560;
  const height = compact ? 240 : 300;
  const padding = compact ? 24 : 30;
  const debt = getSeriesPath(result.timeline, (point) => point.debt, width, height, padding);
  const carryover = getSeriesPath(result.timeline, (point) => point.carryover, width, height, padding);
  const restoration = getSeriesPath(result.timeline, (point) => point.restoration, width, height, padding);

  return (
    <div className={`${styles.timelineChartWrap} ${compact ? styles.timelineChartWrapCompact : ""}`}>
      <svg
        aria-label="Recovery debt timeline"
        className={styles.timelineChart}
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        {[20, 40, 60, 80].map((level) => (
          <line
            className={styles.timelineGrid}
            key={level}
            x1={padding}
            x2={width - padding}
            y1={height - padding - (level / 100) * (height - padding * 2)}
            y2={height - padding - (level / 100) * (height - padding * 2)}
          />
        ))}

        <path className={styles.timelineLineDebt} d={debt.d} />
        <path className={styles.timelineLineCarryover} d={carryover.d} />
        <path className={styles.timelineLineRestoration} d={restoration.d} />

        {result.timeline.map((point, index) => (
          <g key={`${point.day}-${index}`}>
            <circle className={styles.timelineDotDebt} cx={debt.points[index].x} cy={debt.points[index].y} r={4} />
            <circle
              className={styles.timelineDotCarryover}
              cx={carryover.points[index].x}
              cy={carryover.points[index].y}
              r={3.5}
            />
            <circle
              className={styles.timelineDotRestoration}
              cx={restoration.points[index].x}
              cy={restoration.points[index].y}
              r={3.5}
            />
          </g>
        ))}
      </svg>

      <div className={styles.timelineLegend}>
        <span className={styles.timelineLegendItem}>
          <span className={`${styles.timelineLegendDot} ${styles.timelineLegendDotDebt}`} />
          Recovery debt
        </span>
        <span className={styles.timelineLegendItem}>
          <span className={`${styles.timelineLegendDot} ${styles.timelineLegendDotCarryover}`} />
          Next-day carryover
        </span>
        <span className={styles.timelineLegendItem}>
          <span className={`${styles.timelineLegendDot} ${styles.timelineLegendDotRestoration}`} />
          Restoration quality
        </span>
      </div>

      <div className={styles.timelineDayRow}>
        {result.timeline.map((point) => (
          <span className={styles.timelineDayLabel} key={point.day}>
            {point.day}
          </span>
        ))}
      </div>

      <p className={styles.timelineNote}>
        The debt line reflects how much recovery appears to be stacking. The restoration line shows whether recent nights are actually clearing that pressure or leaving part of it behind.
      </p>
    </div>
  );
}
