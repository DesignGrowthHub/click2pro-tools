import styles from "./tools-home.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  if (centered) {
    return (
      <div className={`${styles.sectionHeading} ${styles.sectionHeadingCentered}`}>
        <div className={styles.sectionHeadingLead}>
          <p className={styles.sectionEyebrow}>{eyebrow}</p>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        <div className={styles.sectionHeadingSupport}>
          <p className={styles.sectionDescription}>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionHeadingLead}>
        <p className={styles.sectionEyebrow}>{eyebrow}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionHeadingSupport}>
        <p className={styles.sectionDescription}>{description}</p>
      </div>
    </div>
  );
}
