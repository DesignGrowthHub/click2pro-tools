import type { LoopChoiceOption } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";

type ScenarioChoiceGridProps = {
  options: LoopChoiceOption[];
  value?: string;
  onChange: (value: string) => void;
};

export function ScenarioChoiceGrid({ options, value, onChange }: ScenarioChoiceGridProps) {
  return (
    <div className={styles.scenarioGrid} role="group">
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            aria-pressed={selected}
            className={`${styles.scenarioCard} ${selected ? styles.scenarioCardSelected : ""}`}
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.marker ? <span className={styles.scenarioMarker}>{option.marker}</span> : null}
            <span className={styles.scenarioLabel}>{option.label}</span>
            {option.description ? <span className={styles.scenarioDescription}>{option.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
