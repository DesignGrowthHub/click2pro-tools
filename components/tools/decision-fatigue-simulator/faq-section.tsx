import type { FaqItem } from "@/data/decision-fatigue-simulator";
import styles from "./decision-fatigue-simulator.module.css";

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <div className={styles.faqList}>
      {items.map((item) => (
        <details className={styles.faqItem} key={item.question}>
          <summary className={styles.faqQuestion}>{item.question}</summary>
          <p className={styles.faqAnswer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
