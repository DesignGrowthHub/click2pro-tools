import type { CSSProperties } from "react";
import styles from "./people-pleasing-signal-check.module.css";

type SliderInputProps = {
  compact?: boolean;
  id: string;
  label: string;
  maxLabel: string;
  minLabel: string;
  onChange: (value: number) => void;
  value: number;
};

export function SliderInput({ compact = false, id, label, maxLabel, minLabel, onChange, value }: SliderInputProps) {
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
      <div className={styles.sliderScale}>
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
