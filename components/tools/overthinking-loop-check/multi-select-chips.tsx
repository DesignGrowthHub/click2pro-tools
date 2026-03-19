import type { LoopChoiceOption } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";

type MultiSelectChipsProps = {
  options: LoopChoiceOption[];
  values: string[];
  limit: number;
  onToggle: (value: string) => void;
};

export function MultiSelectChips({ options, values, limit, onToggle }: MultiSelectChipsProps) {
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
