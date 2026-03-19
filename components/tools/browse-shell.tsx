import Link from "next/link";
import {
  buildToolHref,
  buildToolsHref,
  defaultToolSort,
  type HowItWorksStep,
  type ToolCategory,
  type ToolItem,
  type ToolSort,
} from "@/data/tools-home";
import { ArrowUpRightIcon, PatternIcon, SearchIcon, StructureIcon, TimeIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type BrowseShellProps = {
  categories: ToolCategory[];
  tools: ToolItem[];
  totalToolCount: number;
  activeCategory: ToolCategory | null;
  currentQuery: string;
  currentSort: ToolSort;
  focusToolSlug: string | null;
  howItWorksSteps: HowItWorksStep[];
  categoryMap: Record<string, ToolCategory>;
};

export function BrowseShell({
  categories,
  tools,
  totalToolCount,
  activeCategory,
  currentQuery,
  currentSort,
  focusToolSlug,
  howItWorksSteps,
  categoryMap,
}: BrowseShellProps) {
  const hasFilters = Boolean(activeCategory || currentQuery || currentSort !== defaultToolSort);

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="browse-all-tools">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Browse all tools"
          title="A search and filter shell designed to grow with the library"
          description="The homepage already behaves like a real discovery surface: searchable, filterable, internally linkable, and flexible enough for a much larger tool catalog later."
        />

        <div className={styles.howItWorksBlock} id="how-it-works">
          {howItWorksSteps.map((step) => (
            <article className={styles.howItWorksCard} key={step.step}>
              <p className={styles.howItWorksStep}>{step.step}</p>
              <h3 className={styles.howItWorksTitle}>{step.title}</h3>
              <p className={styles.howItWorksDescription}>{step.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.browseShell}>
          <aside className={styles.browseAside}>
            <div className={styles.filterCopyBlock}>
              <p className={styles.filterEyebrow}>Category index</p>
              <h3 className={styles.filterTitle}>Filter the library without shrinking the structure</h3>
              <p className={styles.filterDescription}>
                The layout supports a handful of tools now and a much larger library later without a homepage redesign.
              </p>
            </div>

            <div className={styles.filterChips}>
              <Link
                className={`${styles.filterChip} ${!activeCategory ? styles.filterChipActive : ""}`}
                href={buildToolsHref({
                  query: currentQuery || null,
                  sort: currentSort !== defaultToolSort ? currentSort : null,
                })}
              >
                All categories
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  className={`${styles.filterChip} ${activeCategory?.slug === category.slug ? styles.filterChipActive : ""}`}
                  href={buildToolsHref({
                    category: category.slug,
                    query: currentQuery || null,
                    sort: currentSort !== defaultToolSort ? currentSort : null,
                  })}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </aside>

          <div className={styles.browseMain}>
            <form action="/tools#browse-all-tools" className={styles.toolbar}>
              <div className={styles.toolbarSearch}>
                <label className="srOnly" htmlFor="browse-tools-search">
                  Search all tools
                </label>
                <SearchIcon className={styles.toolbarSearchIcon} />
                <input
                  className={styles.toolbarInput}
                  defaultValue={currentQuery}
                  id="browse-tools-search"
                  name="query"
                  placeholder="Search by tool name, pattern, or category"
                  type="search"
                />
              </div>

              {activeCategory ? <input name="category" type="hidden" value={activeCategory.slug} /> : null}

              <label className={styles.toolbarSelectWrap}>
                <span className="srOnly">Sort tools</span>
                <select className={styles.toolbarSelect} defaultValue={currentSort} name="sort">
                  <option value="popular">Most popular</option>
                  <option value="quickest">Quickest first</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </label>

              <button className={styles.toolbarButton} type="submit">
                Update view
              </button>
            </form>

            <div className={styles.resultsBar}>
              <div>
                <p className={styles.resultsCount}>
                  Showing {tools.length} of {totalToolCount} tools
                </p>
                <p className={styles.resultsLabel}>
                  {activeCategory ? `${activeCategory.title} selected` : "All categories"}
                  {currentQuery ? ` · query: "${currentQuery}"` : ""}
                </p>
              </div>

              {hasFilters ? (
                <Link className={styles.resetLink} href="/tools#browse-all-tools">
                  Reset filters
                </Link>
              ) : null}
            </div>

            {tools.length ? (
              <div className={styles.browseGrid}>
                {tools.map((tool) => (
                  <article
                    className={`${styles.browseCard} ${focusToolSlug === tool.slug ? styles.browseCardFocused : ""}`}
                    key={tool.slug}
                  >
                    <div className={styles.browseCardMeta}>
                      <span className={styles.toolCategoryTag}>
                        <PatternIcon className={styles.inlineChipIcon} />
                        {categoryMap[tool.categorySlug]?.title}
                      </span>
                      <span className={styles.toolTime}>
                        <TimeIcon className={styles.inlineChipIcon} />
                        {tool.minutes} min
                      </span>
                    </div>
                    <h3 className={styles.browseCardTitle}>{tool.title}</h3>
                    <p className={styles.browseCardDescription}>{tool.description}</p>
                    <div className={styles.browseCardFooter}>
                      <span className={styles.toolType}>
                        <StructureIcon className={styles.inlineChipIcon} />
                        {tool.type}
                      </span>
                      <Link
                        className={styles.toolLink}
                        href={buildToolHref({
                          categorySlug: tool.categorySlug,
                          query: currentQuery || null,
                          slug: tool.slug,
                          sort: currentSort,
                        })}
                      >
                        Open tool
                        <ArrowUpRightIcon className={styles.inlineIcon} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <h3 className={styles.emptyStateTitle}>No tools matched this combination yet</h3>
                <p className={styles.emptyStateCopy}>
                  Try a broader search term, switch categories, or reset the current filters to return to the full library.
                </p>
                <Link className={styles.resetLink} href="/tools#browse-all-tools">
                  Back to the full library
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
