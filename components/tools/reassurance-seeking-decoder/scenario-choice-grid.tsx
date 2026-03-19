import type { ReassuranceChoiceOption } from "@/data/reassurance-seeking-decoder";
import styles from "./reassurance-seeking-decoder.module.css";

type ScenarioChoiceGridProps = {
  ariaLabel: string;
  columns?: 2 | 3;
  onChange: (value: string) => void;
  options: ReassuranceChoiceOption[];
  value?: string;
};

export function ScenarioChoiceGrid({
  ariaLabel,
  columns,
  onChange,
  options,
  value,
}: ScenarioChoiceGridProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={`${styles.scenarioGrid} ${columns === 3 ? styles.scenarioGridThree : ""}`}
      role="group"
    >
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            aria-pressed={selected}
            className={`${styles.choiceCard} ${selected ? styles.choiceCardSelected : ""}`}
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.marker ? <span className={styles.choiceMarker}>{option.marker}</span> : null}
            <span className={styles.choiceTitle}>{option.label}</span>
            {option.description ? <span className={styles.choiceDescription}>{option.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
