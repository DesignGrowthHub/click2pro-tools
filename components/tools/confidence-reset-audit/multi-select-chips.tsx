import type { ConfidenceChoiceOption } from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";

type MultiSelectChipsProps = {
  limit: number;
  onToggle: (value: string) => void;
  options: ConfidenceChoiceOption[];
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
