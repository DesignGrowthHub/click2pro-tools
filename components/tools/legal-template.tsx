import Link from "next/link";
import styles from "./legal-template.module.css";

type LegalSection = {
  title: string;
  body: string | string[];
  bullets?: string[];
};

type LegalTemplateProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalTemplate({ eyebrow, title, intro, sections }: LegalTemplateProps) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link className={styles.backLink} href="/tools">
          Back to Click2Pro Tools
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>{intro}</p>
        </header>

        <div className={styles.sectionList}>
          {sections.map((section) => (
            <section className={styles.section} key={section.title}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.sectionBody}>
                {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
                  <p className={styles.sectionParagraph} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className={styles.bulletList}>
                    {section.bullets.map((item) => (
                      <li className={styles.bulletItem} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
