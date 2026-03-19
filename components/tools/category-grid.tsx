import Link from "next/link";
import { buildToolHref, buildToolsHref, type ToolCategory, type ToolItem } from "@/data/tools-home";
import { ArrowUpRightIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type CategoryGridProps = {
  categories: ToolCategory[];
  toolMap: Record<string, ToolItem>;
};

export function CategoryGrid({ categories, toolMap }: CategoryGridProps) {
  return (
    <section className={styles.section} id="topic-clusters">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Topic clusters"
          title="A tool library organized for clarity now, and scale later"
          description="Each category is built as a durable cluster so the homepage can grow from a curated set of tools today into a much larger searchable library later."
        />

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <article className={styles.categoryCard} key={category.slug}>
              <div className={styles.categoryCardTop}>
                <p className={styles.categoryCount}>{category.toolCount} live + queued</p>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryDescription}>{category.description}</p>
              </div>

              <div className={styles.categorySampleBlock}>
                <p className={styles.categorySampleLabel}>Sample tools</p>
                <div className={styles.categorySampleList}>
                  {category.sampleToolSlugs.map((slug) => {
                    const tool = toolMap[slug];

                    if (!tool) {
                      return null;
                    }

                    return (
                      <Link
                        key={tool.slug}
                        className={styles.categorySampleLink}
                        href={buildToolHref({ categorySlug: category.slug, slug: tool.slug })}
                      >
                        <span>{tool.title}</span>
                        <ArrowUpRightIcon className={styles.inlineIcon} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link className={styles.categoryBrowseLink} href={buildToolsHref({ category: category.slug })}>
                Explore {category.title}
                <ArrowUpRightIcon className={styles.inlineIcon} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
