import type { CommunicationChoiceOption } from "@/data/communication-style-mirror";
import styles from "./communication-style-mirror.module.css";

type MultiSelectChipsProps = {
  limit: number;
  onToggle: (value: string) => void;
  options: CommunicationChoiceOption[];
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
