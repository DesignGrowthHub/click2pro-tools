import type { ReactNode } from "react";
import styles from "./life-balance-visualizer.module.css";

type SeoContentSectionProps = {
  children: ReactNode;
  description?: string;
  eyebrow: string;
  id: string;
  title: string;
};

export function SeoContentSection({ children, description, eyebrow, id, title }: SeoContentSectionProps) {
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
