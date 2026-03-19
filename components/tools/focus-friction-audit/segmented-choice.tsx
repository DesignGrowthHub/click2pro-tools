import type { FocusChoiceOption } from "@/data/focus-friction-audit";
import styles from "./focus-friction-audit.module.css";

type SegmentedChoiceProps = {
  options: FocusChoiceOption[];
  value?: string;
  onChange: (value: string) => void;
  ariaLabel: string;
};

export function SegmentedChoice({ options, value, onChange, ariaLabel }: SegmentedChoiceProps) {
  return (
    <div aria-label={ariaLabel} className={styles.segmentedGrid} role="group">
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            aria-pressed={selected}
            className={`${styles.segmentButton} ${selected ? styles.segmentButtonSelected : ""}`}
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
