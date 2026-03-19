import type { DecoderChoiceOption } from "@/data/emotional-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";

type ScenarioChoiceGridProps = {
  ariaLabel: string;
  onChange: (value: string) => void;
  options: DecoderChoiceOption[];
  value?: string;
};

export function ScenarioChoiceGrid({ ariaLabel, onChange, options, value }: ScenarioChoiceGridProps) {
  return (
    <div aria-label={ariaLabel} className={styles.scenarioGrid} role="group">
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
            <span className={styles.choiceTitle}>{option.label}</span>
            {option.description ? <span className={styles.choiceDescription}>{option.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
