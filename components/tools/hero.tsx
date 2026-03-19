import Link from "next/link";
import { buildToolHref, type ToolItem } from "@/data/tools-home";
import { SearchIcon } from "./icons";
import { SignalPanel } from "./signal-panel";
import styles from "./tools-home.module.css";

type HeroProps = {
  featuredTools: ToolItem[];
  searchQuery: string;
};

export function Hero({ featuredTools, searchQuery }: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Premium psychology tool library</p>
          <h1 className={styles.heroTitle}>Psychology and self-assessment tools that turn signal into next steps.</h1>
          <p className={styles.heroDescription}>
            Explore a premium library of mental health, reflection, and behavioral tools for burnout,
            focus, relationships, confidence, emotional regulation, and everyday mental load.
          </p>

          <form action="/tools#browse-all-tools" className={styles.heroSearchForm}>
            <label className="srOnly" htmlFor="hero-tools-search">
              Search Click2Pro Tools
            </label>
            <div className={styles.heroSearchField}>
              <SearchIcon className={styles.heroSearchIcon} />
              <input
                className={styles.heroSearchInput}
                defaultValue={searchQuery}
                id="hero-tools-search"
                name="query"
                placeholder="Search burnout, attachment, focus, sleep..."
                type="search"
              />
            </div>
            <button className={styles.heroSearchButton} type="submit">
              Search Library
            </button>
          </form>

          <div className={styles.featuredChips}>
            <span className={styles.featuredLabel}>Featured right now</span>
            <div className={styles.featuredChipRow}>
              {featuredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  className={styles.featuredChip}
                  href={buildToolHref({ categorySlug: tool.categorySlug, slug: tool.slug })}
                >
                  {tool.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <SignalPanel />
        </div>
      </div>
    </section>
  );
}
