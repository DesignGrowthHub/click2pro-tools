import type { BurnoutChoiceOption, SingleChoiceStep } from "@/data/burnout-risk-audit";
import styles from "./burnout-risk-audit.module.css";

type SegmentedChoiceProps = {
  options: BurnoutChoiceOption[];
  value?: string;
  onChange: (value: string) => void;
  variant: SingleChoiceStep["variant"];
  name: string;
};

export function SegmentedChoice({ options, value, onChange, variant, name }: SegmentedChoiceProps) {
  return (
    <div
      aria-label={name}
      className={`${styles.choiceGrid} ${
        variant === "segments"
          ? styles.choiceGridSegments
          : variant === "statement"
            ? styles.choiceGridStatement
            : styles.choiceGridCards
      }`}
      role="group"
    >
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            aria-pressed={selected}
            className={`${styles.choiceButton} ${
              variant === "visual"
                ? styles.choiceButtonVisual
                : variant === "statement"
                  ? styles.choiceButtonStatement
                  : variant === "segments"
                    ? styles.choiceButtonSegment
                    : styles.choiceButtonCard
            } ${selected ? styles.choiceButtonSelected : ""}`}
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {variant === "statement" ? <span className={styles.choicePrefix}>{option.label}</span> : null}
            <span className={styles.choiceTitle}>{variant === "statement" ? option.description : option.label}</span>
            {option.description && variant !== "statement" ? (
              <span className={styles.choiceDescription}>{option.description}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
