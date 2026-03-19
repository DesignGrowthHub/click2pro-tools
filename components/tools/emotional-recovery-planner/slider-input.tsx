import type { CSSProperties } from "react";
import styles from "./emotional-recovery-planner.module.css";

type SliderInputProps = {
  compact?: boolean;
  id: string;
  label: string;
  markers?: string[];
  maxLabel: string;
  minLabel: string;
  onChange: (value: number) => void;
  value: number;
};

export function SliderInput({
  compact = false,
  id,
  label,
  markers,
  maxLabel,
  minLabel,
  onChange,
  value,
}: SliderInputProps) {
  return (
    <div className={`${styles.sliderField} ${compact ? styles.sliderFieldCompact : ""}`}>
      <div className={styles.sliderLabelRow}>
        <label className={styles.sliderLabel} htmlFor={id}>
          {label}
        </label>
        <span className={styles.sliderValue}>{value}</span>
      </div>
      <input
        aria-label={label}
        className={styles.sliderInput}
        id={id}
        max={100}
        min={0}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ "--range-fill": `${value}%` } as CSSProperties}
        type="range"
        value={value}
      />
      {markers?.length ? (
        <div aria-hidden="true" className={styles.sliderMarkers}>
          {markers.map((marker) => (
            <span className={styles.sliderMarker} key={marker}>
              {marker}
            </span>
          ))}
        </div>
      ) : null}
      <div className={styles.sliderScale}>
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
