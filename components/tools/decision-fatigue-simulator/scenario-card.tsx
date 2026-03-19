import type { ReactNode } from "react";
import styles from "./decision-fatigue-simulator.module.css";

type ScenarioCardProps = {
  eyebrow: string;
  title: string;
  prompt: string;
  hint: string;
  children: ReactNode;
};

export function ScenarioCard({ eyebrow, title, prompt, hint, children }: ScenarioCardProps) {
  return (
    <div className={styles.scenarioShell}>
      <div className={styles.scenarioHeader}>
        <p className={styles.scenarioEyebrow}>{eyebrow}</p>
        <h2 className={styles.scenarioTitle}>{title}</h2>
        <p className={styles.scenarioPrompt}>{prompt}</p>
        <p className={styles.scenarioHint}>{hint}</p>
      </div>
      <div className={styles.scenarioBody}>{children}</div>
    </div>
  );
}
