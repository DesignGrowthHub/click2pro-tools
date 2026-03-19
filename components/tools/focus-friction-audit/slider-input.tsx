import styles from "./focus-friction-audit.module.css";

type SliderInputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  minLabel: string;
  maxLabel: string;
  compact?: boolean;
};

export function SliderInput({ id, label, value, onChange, minLabel, maxLabel, compact = false }: SliderInputProps) {
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
