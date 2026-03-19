import type { ReactNode } from "react";
import styles from "./decision-fatigue-simulator.module.css";

type SeoContentSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SeoContentSection({ id, eyebrow, title, description, children }: SeoContentSectionProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>{eyebrow}</p>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {description ? <p className={styles.sectionDescription}>{description}</p> : null}
        </div>

        {children}
      </div>
    </section>
  );
}
