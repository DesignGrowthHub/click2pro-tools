import type { InnerCriticChoiceOption } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type MultiSelectChipsProps = {
  limit: number;
  onToggle: (value: string) => void;
  options: InnerCriticChoiceOption[];
  values: string[];
};

export function MultiSelectChips({ limit, onToggle, options, values }: MultiSelectChipsProps) {
  return (
    <div className={styles.chipWrap}>
      {options.map((option) => {
        const selected = values.includes(option.value);
        const disabled = !selected && values.length >= limit;

        return (
          <button
            aria-pressed={selected}
            className={`${styles.chipButton} ${selected ? styles.chipButtonSelected : ""}`}
            disabled={disabled}
            key={option.value}
            onClick={() => onToggle(option.value)}
            type="button"
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
