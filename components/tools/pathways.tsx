import Link from "next/link";
import { buildToolHref, type Pathway } from "@/data/tools-home";
import { ChevronRightIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type PathwaysProps = {
  pathways: Pathway[];
};

export function Pathways({ pathways }: PathwaysProps) {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="How it works"
          title="Enter through the problem you feel, not the taxonomy you remember."
          description="Use a guided pathway when you know the feeling or friction, but not the exact tool name yet."
        />

        <div className={styles.pathwayGrid}>
          {pathways.map((pathway, index) => (
            <article className={styles.pathwayCard} key={pathway.title}>
              <p className={styles.pathwayIndex}>Pathway {String(index + 1).padStart(2, "0")}</p>
              <h3 className={styles.pathwayTitle}>{pathway.title}</h3>
              <p className={styles.pathwayDescription}>{pathway.description}</p>
              <Link
                className={styles.pathwayLink}
                href={buildToolHref({ categorySlug: pathway.categorySlug, slug: pathway.focusToolSlug })}
              >
                {pathway.cta}
                <ChevronRightIcon className={styles.inlineIcon} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
