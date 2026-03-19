import type { ReactNode } from "react";
import { refineAssessmentHint, refineAssessmentQuestion } from "@/components/tools/assessment-copy";
import styles from "./focus-friction-audit.module.css";

type StepCardProps = {
  eyebrow: string;
  question: string;
  hint: string;
  children: ReactNode;
};

export function StepCard({ eyebrow, question, hint, children }: StepCardProps) {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepHeader}>
        <p className={styles.stepEyebrow}>{eyebrow}</p>
        <h2 className={styles.stepQuestion}>{refineAssessmentQuestion(question)}</h2>
        <p className={styles.stepHint}>{refineAssessmentHint(hint)}</p>
      </div>
      <div className={styles.stepBody}>{children}</div>
    </div>
  );
}
