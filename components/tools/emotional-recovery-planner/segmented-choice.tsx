import type { RecoveryChoiceOption } from "@/data/emotional-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";

type SegmentedChoiceProps = {
  ariaLabel: string;
  onChange: (value: string) => void;
  options: RecoveryChoiceOption[];
  value?: string;
  variant: "segments" | "cards";
};

export function SegmentedChoice({ ariaLabel, onChange, options, value, variant }: SegmentedChoiceProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={`${styles.choiceGrid} ${variant === "cards" ? styles.choiceGridCards : styles.choiceGridSegments}`}
      role="group"
    >
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            aria-pressed={selected}
            className={`${styles.choiceButton} ${
              variant === "cards" ? styles.choiceButtonCard : styles.choiceButtonSegment
            } ${selected ? styles.choiceButtonSelected : ""}`}
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            <span className={styles.choiceTitle}>{option.label}</span>
            {option.description ? <span className={styles.choiceDescription}>{option.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
