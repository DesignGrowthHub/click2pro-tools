import Link from "next/link";
import { buildToolHref, type ToolCategory, type ToolItem } from "@/data/tools-home";
import { ArrowUpRightIcon, PatternIcon, StructureIcon, TimeIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type PopularToolsProps = {
  tools: ToolItem[];
  categoryMap: Record<string, ToolCategory>;
};

export function PopularTools({ tools, categoryMap }: PopularToolsProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="popular-tools">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Popular tools"
          title="High-signal entry points people start with most"
          description="A premium mix of tools across categories so users can enter through the question that feels most urgent, not through a one-track funnel."
        />

        <div className={styles.toolGrid}>
          {tools.map((tool) => (
            <article className={styles.toolCard} key={tool.slug}>
              <div className={styles.toolMetaRow}>
                <span className={styles.toolCategoryTag}>
                  <PatternIcon className={styles.inlineChipIcon} />
                  {categoryMap[tool.categorySlug]?.title}
                </span>
                <span className={styles.toolTime}>
                  <TimeIcon className={styles.inlineChipIcon} />
                  {tool.minutes} min
                </span>
              </div>
              <h3 className={styles.toolTitle}>{tool.title}</h3>
              <p className={styles.toolDescription}>{tool.description}</p>
              <div className={styles.toolFooter}>
                <span className={styles.toolType}>
                  <StructureIcon className={styles.inlineChipIcon} />
                  {tool.type}
                </span>
                <Link className={styles.toolLink} href={buildToolHref({ categorySlug: tool.categorySlug, slug: tool.slug })}>
                  Open tool
                  <ArrowUpRightIcon className={styles.inlineIcon} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
