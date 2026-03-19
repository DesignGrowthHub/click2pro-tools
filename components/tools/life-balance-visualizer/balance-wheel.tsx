import { useId } from "react";
import type { CSSProperties } from "react";
import {
  getBalanceDescriptor,
  type BalanceDomainKey,
  type BalanceResult,
} from "@/data/life-balance-visualizer";
import styles from "./life-balance-visualizer.module.css";

const shortLabels: Record<BalanceDomainKey, string> = {
  energy: "Energy",
  "work-load": "Work",
  "sleep-recovery": "Sleep",
  "emotional-stability": "Emotion",
  "relationships-support": "Support",
  "focus-mental-space": "Focus",
  "personal-time-space": "Space",
  "physical-care-routine": "Care",
  "daily-structure": "Rhythm",
  "boundaries-room": "Limits",
  "home-environment": "Home",
  "financial-stability": "Finance",
  "play-joy": "Joy",
  "community-belonging": "Belong",
  "purpose-direction": "Purpose",
};

function getPoint(index: number, total: number, value: number, radius: number, center: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  const scaledRadius = radius * (value / 100);

  return {
    x: center + Math.cos(angle) * scaledRadius,
    y: center + Math.sin(angle) * scaledRadius,
  };
}

function getOuterPoint(index: number, total: number, radius: number, center: number) {
  return getPoint(index, total, 100, radius, center);
}

function toPointString(points: Array<{ x: number; y: number }>) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

type BalanceWheelProps = {
  compact?: boolean;
  highlightKey?: BalanceDomainKey;
  label?: string;
  result: BalanceResult;
  showLegend?: boolean;
};

export function BalanceWheel({
  compact = false,
  highlightKey,
  label,
  result,
  showLegend = true,
}: BalanceWheelProps) {
  const gradientId = useId().replace(/:/g, "");
  const outerRadius = compact ? 118 : 126;
  const center = 180;
  const labelRadius = compact ? 146 : 156;
  const domains = result.domains;
  const total = domains.length;
  const currentPoints = domains.map((domain, index) => getPoint(index, total, domain.current, outerRadius, center));
  const idealPoints = domains.map((domain, index) =>
    getPoint(index, total, domain.useIdeal ? domain.ideal : domain.current, outerRadius, center),
  );
  const showIdeal = domains.some((domain) => domain.useIdeal);
  const priorityOrder = [...domains].sort((left, right) => right.priority - left.priority).slice(0, 3);

  return (
    <div className={`${styles.wheelPanel} ${compact ? styles.wheelPanelCompact : ""}`}>
      {label ? <p className={styles.wheelPanelLabel}>{label}</p> : null}

      <div className={`${styles.wheelFrame} ${compact ? styles.wheelFrameCompact : ""}`}>
        <div className={styles.wheelGlow} />

        <svg
          aria-label="Life balance wheel showing current and ideal support across your life domains"
          className={styles.wheelSvg}
          role="img"
          viewBox="0 0 360 360"
        >
          <defs>
            <linearGradient id={`wheel-area-${gradientId}`} x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={result.band.gradientFrom} stopOpacity="0.66" />
              <stop offset="100%" stopColor={result.band.gradientTo} stopOpacity="0.22" />
            </linearGradient>
          </defs>

          {[20, 40, 60, 80, 100].map((value) => (
            <circle
              className={styles.wheelGrid}
              cx={center}
              cy={center}
              key={value}
              r={(outerRadius * value) / 100}
            />
          ))}

          {domains.map((_, index) => {
            const point = getOuterPoint(index, total, outerRadius, center);

            return (
              <line
                className={styles.wheelAxis}
                key={domains[index].key}
                x1={center}
                x2={point.x}
                y1={center}
                y2={point.y}
              />
            );
          })}

          {showIdeal ? (
            <polygon className={styles.wheelIdealLine} points={toPointString(idealPoints)} />
          ) : null}
          <polygon
            className={styles.wheelCurrentArea}
            points={toPointString(currentPoints)}
            style={{ fill: `url(#wheel-area-${gradientId})` }}
          />
          <polygon className={styles.wheelCurrentOutline} points={toPointString(currentPoints)} />

          {domains.map((domain, index) => {
            const currentPoint = currentPoints[index];
            const idealPoint = idealPoints[index];
            const isActive =
              domain.key === highlightKey ||
              domain.key === result.primaryImbalanceDriver.key ||
              domain.key === result.weakestZone.key;

            return (
              <g key={domain.key}>
                {showIdeal ? (
                  <circle
                    className={styles.wheelIdealMarker}
                    cx={idealPoint.x}
                    cy={idealPoint.y}
                    r={compact ? 2.5 : 3}
                    style={{ stroke: domain.accent } as CSSProperties}
                  />
                ) : null}
                <circle
                  className={`${styles.wheelMarker} ${isActive ? styles.wheelMarkerActive : ""}`}
                  cx={currentPoint.x}
                  cy={currentPoint.y}
                  r={isActive ? (compact ? 4.5 : 5.5) : compact ? 3.5 : 4.5}
                  style={{ fill: domain.accent, boxShadow: `0 0 0 8px ${domain.accent}22` } as CSSProperties}
                />
              </g>
            );
          })}
        </svg>

        <div className={styles.wheelCenterBadge}>
          <span className={styles.wheelCenterValue}>{result.balanceIndex}</span>
          <span className={styles.wheelCenterLabel}>Balance index</span>
        </div>

        {domains.map((domain, index) => {
          const point = getOuterPoint(index, total, labelRadius, center);
          const isActive =
            domain.key === highlightKey ||
            domain.key === result.primaryImbalanceDriver.key ||
            domain.key === result.weakestZone.key;

          return (
            <div
              className={`${styles.wheelLabel} ${isActive ? styles.wheelLabelActive : ""}`}
              key={domain.key}
              style={{
                left: `${(point.x / 360) * 100}%`,
                top: `${(point.y / 360) * 100}%`,
                "--domain-accent": domain.accent,
              } as CSSProperties}
            >
              <span className={styles.wheelLabelDot} />
              <span className={styles.wheelLabelShort}>{shortLabels[domain.key]}</span>
            </div>
          );
        })}
      </div>

      {showLegend ? (
        <>
          <div className={styles.wheelLegend}>
            {domains.map((domain) => (
              <div className={styles.wheelLegendItem} key={domain.key}>
                <div className={styles.wheelLegendMeta}>
                  <span
                    className={styles.legendDot}
                    style={{ backgroundColor: domain.accent } as CSSProperties}
                  />
                  <span className={styles.wheelLegendLabel}>{domain.label}</span>
                </div>
                <div className={styles.wheelLegendValues}>
                  <span className={styles.wheelLegendValue}>{domain.current}</span>
                  {domain.useIdeal ? <span className={styles.wheelLegendIdeal}>Ideal {domain.ideal}</span> : null}
                </div>
                <p className={styles.wheelLegendDescriptor}>{getBalanceDescriptor(domain.current)}</p>
              </div>
            ))}
          </div>

          <div className={styles.wheelFooterRow}>
            <span className={styles.wheelMetricPill}>Imbalance score {result.imbalanceScore}</span>
            <span className={styles.wheelMetricPill}>Spread {result.spreadLevel}</span>
            <span className={styles.wheelMetricPill}>Gap {result.balanceGap}</span>
          </div>

          <p className={styles.wheelGapNote}>
            Highest rebalance priority right now:{" "}
            {priorityOrder.map((domain) => domain.label).join(", ")}.
          </p>
        </>
      ) : null}
    </div>
  );
}
