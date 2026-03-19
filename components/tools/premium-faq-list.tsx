import { refineFaqAnswer, refineFaqQuestion } from "@/components/tools/assessment-copy";
import styles from "./premium-faq-list.module.css";

export type PremiumFaqItem = {
  question: string;
  answer: string;
};

type PremiumFaqListProps = {
  items: PremiumFaqItem[];
  accent?: string;
  intro?: string;
};

export function PremiumFaqList({ items, accent, intro }: PremiumFaqListProps) {
  return (
    <div className={styles.faqShell} style={{ ["--faq-accent" as string]: accent ?? "#93c5fd" }}>
      <div className={styles.faqIntro}>
        <div className={styles.faqMeta}>
          <p className={styles.faqEyebrow}>Quick answers</p>
          <p className={styles.faqLead}>
            {intro ?? "Use these answers to understand the result, what may be feeding it, and what to try next."}
          </p>
        </div>
        <span className={styles.faqCount}>{items.length} FAQs</span>
      </div>

      <div className={styles.faqList}>
        {items.map((item, index) => (
          <details className={styles.faqItem} key={item.question} open={index === 0}>
            <summary className={styles.faqQuestion} data-index={`${index + 1}`.padStart(2, "0")}>
              {refineFaqQuestion(item.question)}
            </summary>
            <p className={styles.faqAnswer}>{refineFaqAnswer(item.answer)}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
