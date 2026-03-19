import type { ReactNode } from "react";
import { refineAssessmentHint, refineAssessmentQuestion } from "@/components/tools/assessment-copy";
import styles from "./relationship-clarity-check.module.css";

type StepCardProps = {
  eyebrow: string;
  hint: string;
  question: string;
  children: ReactNode;
};

export function StepCard({ eyebrow, hint, question, children }: StepCardProps) {
  return (
    <article className={styles.stepCard}>
      <p className={styles.stepEyebrow}>{eyebrow}</p>
      <h3 className={styles.stepQuestion}>{refineAssessmentQuestion(question)}</h3>
      <p className={styles.stepHint}>{refineAssessmentHint(hint)}</p>
      <div className={styles.stepContent}>{children}</div>
    </article>
  );
}
