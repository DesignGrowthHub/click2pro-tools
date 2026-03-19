import type { SimulatorChoice } from "@/data/decision-fatigue-simulator";
import styles from "./decision-fatigue-simulator.module.css";

type ChoiceGridProps = {
  options: SimulatorChoice[];
  value?: string;
  onChange: (next: string) => void;
  ariaLabel: string;
};

export function ChoiceGrid({ options, value, onChange, ariaLabel }: ChoiceGridProps) {
  return (
    <div aria-label={ariaLabel} className={styles.choiceGrid} role="group">
      {options.map((option) => {
        const selected = value === option.id;

        return (
          <button
            aria-pressed={selected}
            className={`${styles.choiceCard} ${selected ? styles.choiceCardSelected : ""}`}
            key={option.id}
            onClick={() => onChange(option.id)}
            type="button"
          >
            <span className={styles.choiceMarker}>{option.marker}</span>
            <span className={styles.choiceLabel}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
