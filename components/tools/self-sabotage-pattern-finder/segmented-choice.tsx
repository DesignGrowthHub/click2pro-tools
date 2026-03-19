import type { SelfSabotageChoiceOption } from "@/data/self-sabotage-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";

type SegmentedChoiceProps = {
  ariaLabel: string;
  onChange: (value: string) => void;
  options: SelfSabotageChoiceOption[];
  value?: string;
};

export function SegmentedChoice({ ariaLabel, onChange, options, value }: SegmentedChoiceProps) {
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
