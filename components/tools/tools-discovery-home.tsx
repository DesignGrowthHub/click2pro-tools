"use client";

import { type ReactNode, startTransition, useDeferredValue, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ToolClusterSlug } from "@/data/tool-clusters";
import {
  ArrowUpRightIcon,
  ChevronRightIcon,
  PatternIcon,
  SearchIcon,
  StructureIcon,
  TimeIcon,
  TrendIcon,
} from "./icons";
import {
  bestForRightNowToolSlugs,
  buildToolHref,
  buildToolsHref,
  categoryMap,
  defaultToolSort,
  featuredToolSlugs,
  getClusterForTool,
  getClusterToolCount,
  getToolSearchKeywords,
  inferToolFormat,
  liveToolMap,
  liveTools,
  newlyAddedToolSlugs,
  popularToolSlugs,
  startHereToolSlugs,
  topSearchSuggestions,
  topicClusters,
  topicClusterMap,
  type LiveToolSlug,
  type ToolFormat,
  type ToolItem,
  type ToolSort,
} from "@/data/tools-home";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type DiscoveryView = "all" | "popular" | "recommended" | "new";

const INITIAL_BROWSE_BATCH = 12;

type ToolsDiscoveryHomeProps = {
  afterSearchContent?: ReactNode;
  initialCluster: ToolClusterSlug | null;
  initialFocusToolSlug: string | null;
  initialFormat: string | null;
  initialQuery: string;
  initialSort: ToolSort;
  initialView: DiscoveryView;
};

const viewOptions: Array<{ value: DiscoveryView; label: string }> = [
  { value: "all", label: "All tools" },
  { value: "popular", label: "Popular" },
  { value: "recommended", label: "Recommended" },
  { value: "new", label: "New" },
];

function renderToolMeta(tool: ToolItem) {
  const cluster = getClusterForTool(tool);
  const format = inferToolFormat(tool);

  return {
    cluster,
    format,
    category: categoryMap[tool.categorySlug],
  };
}

function matchesQuery(tool: ToolItem, query: string) {
  if (!query.trim()) {
    return true;
  }

  const { cluster, category, format } = renderToolMeta(tool);
  const haystack = [
    tool.title,
    tool.slug.replaceAll("-", " "),
    tool.description,
    tool.type,
    format,
    cluster.title,
    cluster.description,
    cluster.searchTerms.join(" "),
    category?.title ?? "",
    category?.description ?? "",
    getToolSearchKeywords(tool).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.trim().toLowerCase());
}

function applyView(tools: ToolItem[], view: DiscoveryView) {
  if (view === "popular") {
    const popularSet = new Set<string>(popularToolSlugs);
    return tools.filter((tool) => popularSet.has(tool.slug));
  }

  if (view === "recommended") {
    const recommendedSet = new Set<string>(startHereToolSlugs);
    return tools.filter((tool) => recommendedSet.has(tool.slug));
  }

  if (view === "new") {
    const newSet = new Set<string>(newlyAddedToolSlugs);
    return tools.filter((tool) => newSet.has(tool.slug));
  }

  return tools;
}

function sortTools(tools: ToolItem[], sort: ToolSort) {
  return [...tools].sort((left, right) => {
    if (sort === "quickest") {
      return left.minutes - right.minutes || right.popularity - left.popularity;
    }

    if (sort === "alphabetical") {
      return left.title.localeCompare(right.title);
    }

    return right.popularity - left.popularity || left.minutes - right.minutes;
  });
}

function ToolCard({
  tool,
  focused = false,
}: {
  tool: ToolItem;
  focused?: boolean;
}) {
  const { cluster, format } = renderToolMeta(tool);

  return (
    <article className={`${styles.browseCard} ${focused ? styles.browseCardFocused : ""}`}>
      <div className={styles.browseCardMeta}>
        <span className={styles.toolCategoryTag}>
          <PatternIcon className={styles.inlineChipIcon} />
          {cluster.title}
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
          {format}
        </span>
        <Link
          className={styles.toolLink}
          href={buildToolHref({ categorySlug: tool.categorySlug, slug: tool.slug })}
        >
          Open tool
          <ArrowUpRightIcon className={styles.inlineIcon} />
        </Link>
      </div>
    </article>
  );
}

export function ToolsDiscoveryHome({
  afterSearchContent,
  initialCluster,
  initialFocusToolSlug,
  initialFormat,
  initialQuery,
  initialSort,
  initialView,
}: ToolsDiscoveryHomeProps) {
  const router = useRouter();
  const didHydrate = useRef(false);
  const [query, setQuery] = useState(initialQuery);
  const [activeCluster, setActiveCluster] = useState(initialCluster);
  const [activeFormat, setActiveFormat] = useState(initialFormat);
  const [activeSort, setActiveSort] = useState<ToolSort>(initialSort);
  const [activeView, setActiveView] = useState<DiscoveryView>(initialView);
  const [heroReady, setHeroReady] = useState(false);
  const [visibleBrowseCount, setVisibleBrowseCount] = useState(INITIAL_BROWSE_BATCH);
  const deferredQuery = useDeferredValue(query);

  const formatOptions = Array.from(new Set(liveTools.map((tool) => inferToolFormat(tool)))).sort();

  const filteredTools = sortTools(
    applyView(
      liveTools.filter((tool) => {
        const cluster = getClusterForTool(tool);
        const format = inferToolFormat(tool);

        if (activeCluster && cluster.slug !== activeCluster) {
          return false;
        }

        if (activeFormat && format !== activeFormat) {
          return false;
        }

        return matchesQuery(tool, deferredQuery);
      }),
      activeView,
    ),
    activeSort,
  );

  const quickStartTools = startHereToolSlugs
    .map((slug) => liveToolMap[slug])
    .filter(Boolean);
  const featuredTools = featuredToolSlugs
    .map((slug) => liveToolMap[slug as LiveToolSlug])
    .filter(Boolean);
  const newlyAddedTools = newlyAddedToolSlugs
    .map((slug) => liveToolMap[slug])
    .filter(Boolean);
  const bestForRightNow = bestForRightNowToolSlugs
    .map((slug) => liveToolMap[slug])
    .filter(Boolean);
  const popularTools = popularToolSlugs
    .map((slug) => liveToolMap[slug as LiveToolSlug])
    .filter(Boolean);
  const focusedToolIndex = initialFocusToolSlug
    ? filteredTools.findIndex((tool) => tool.slug === initialFocusToolSlug)
    : -1;
  const visibleTools = filteredTools.slice(0, visibleBrowseCount);
  const canRevealMoreTools = filteredTools.length > visibleBrowseCount;

  useEffect(() => {
    if (!didHydrate.current) {
      didHydrate.current = true;
      return;
    }

    const nextHref = buildToolsHref({
      cluster: activeCluster,
      format: activeFormat,
      query: deferredQuery || null,
      sort: activeSort,
      view: activeView === "all" ? null : activeView,
      hash: "browse-all-tools",
    });

    startTransition(() => {
      router.replace(nextHref);
    });
  }, [activeCluster, activeFormat, activeSort, activeView, deferredQuery, router]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroReady(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    setVisibleBrowseCount(
      focusedToolIndex >= 0
        ? Math.max(INITIAL_BROWSE_BATCH, focusedToolIndex + 1)
        : INITIAL_BROWSE_BATCH,
    );
  }, [activeCluster, activeFormat, activeSort, activeView, deferredQuery, focusedToolIndex]);

  function scrollToSection(id: string) {
    const node = document.getElementById(id);

    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToBrowse() {
    scrollToSection("browse-all-tools");
  }

  function applySuggestion(value: string) {
    setQuery(value);
    setActiveView("all");
    scrollToBrowse();
  }

  function resetFilters() {
    setQuery("");
    setActiveCluster(null);
    setActiveFormat(null);
    setActiveSort(defaultToolSort);
    setActiveView("all");
  }

  return (
    <>
      <section className={styles.heroSection}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Premium psychology tool library</p>
            <h1 className={styles.heroTitle}>
              Find the right psychology tool quickly, inside one calm premium library.
            </h1>
            <p className={styles.heroDescription}>
              Search by pattern, browse topic clusters, and move through burnout, confidence, relationship,
              recovery, work-stress, and everyday-functioning tools without getting lost.
            </p>

            <div className={styles.heroActionRow}>
              <button
                className={styles.heroPrimaryAction}
                onClick={() => scrollToSection("search")}
                type="button"
              >
                Search tools
              </button>
              <button
                className={styles.heroSecondaryAction}
                onClick={() => scrollToSection("topic-clusters")}
                type="button"
              >
                Browse clusters
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div
              aria-hidden="true"
              className={`${styles.heroVisualFrame} ${heroReady ? styles.heroVisualFrameReady : ""}`}
            >
              <div className={styles.heroVisualGlow} />
              <div className={styles.heroVisualGrid} />
              <div className={styles.heroVisualNoise} />

              <svg className={styles.heroVisualChart} viewBox="0 0 520 320">
                <path
                  className={styles.heroVisualTrack}
                  d="M28 246 C96 208 128 118 198 136 C262 152 292 258 360 210 C410 174 446 122 492 82"
                  fill="none"
                  pathLength="100"
                />
                <path
                  className={styles.heroVisualPath}
                  d="M28 246 C96 208 128 118 198 136 C262 152 292 258 360 210 C410 174 446 122 492 82"
                  fill="none"
                  pathLength="100"
                />
                <circle className={styles.heroVisualPoint} cx="198" cy="136" r="7" />
                <circle className={styles.heroVisualPoint} cx="360" cy="210" r="6" />
                <circle className={styles.heroVisualPointStrong} cx="492" cy="82" r="8" />
              </svg>

              <svg className={styles.heroVisualChartSecondary} viewBox="0 0 520 320">
                <path
                  className={styles.heroVisualTrackSecondary}
                  d="M40 220 C108 210 132 174 192 178 C260 184 290 118 354 126 C418 134 448 116 486 92"
                  fill="none"
                  pathLength="100"
                />
                <path
                  className={styles.heroVisualPathSecondary}
                  d="M40 220 C108 210 132 174 192 178 C260 184 290 118 354 126 C418 134 448 116 486 92"
                  fill="none"
                  pathLength="100"
                />
              </svg>

              <div className={styles.heroCardPrimary}>
                <p className={styles.panelEyebrow}>Library signal</p>
                <div className={styles.panelScoreRow}>
                  <div>
                    <p className={styles.panelScoreValue}>{liveTools.length}</p>
                    <p className={styles.panelScoreLabel}>live tools ready now</p>
                  </div>
                  <span className={styles.panelTrend}>
                    {activeCluster ? topicClusterMap[activeCluster]?.title ?? "Focused" : `${topicClusters.length} clusters`}
                  </span>
                </div>
                <div className={styles.panelWave}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.heroCardSecondary}>
                <div className={styles.panelMiniLabel}>Live filters</div>
                <div className={styles.panelMiniRow}>
                  <span className={styles.panelMiniTag}>{activeView === "all" ? "All tools" : activeView}</span>
                  <span className={styles.panelMiniTag}>{activeFormat ?? "All formats"}</span>
                </div>
                <div className={styles.signalBars}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.heroCardChips}>
                <span className={styles.panelMiniTag}>Burnout</span>
                <span className={styles.panelMiniTag}>Attachment</span>
                <span className={styles.panelMiniTag}>Confidence</span>
              </div>

              <div className={styles.heroMetricDock}>
                <div className={styles.heroMetricCard}>
                  <span className={styles.heroMetricLabel}>Live search</span>
                  <strong className={styles.heroMetricValue}>{filteredTools.length}</strong>
                </div>
                <div className={styles.heroMetricCard}>
                  <span className={styles.heroMetricLabel}>Fastest route</span>
                  <strong className={styles.heroMetricValue}>2-4 min</strong>
                </div>
              </div>

              <div className={styles.heroConnectionPath} />
              <div className={styles.heroOrbitChip}>Guided entry points</div>

              <div className={styles.heroTraceDotOne} />
              <div className={styles.heroTraceDotTwo} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.searchSection} id="search">
        <div className={styles.container}>
          <div className={styles.searchShell}>
            <div className={styles.searchLead}>
              <SectionHeading
                description="Search matches tool names, plain-language descriptions, and topic clusters so you can enter through the pattern instead of guessing the exact tool name."
                eyebrow="Search the library"
                title="Start from the exact pattern you want to understand."
              />

              <div className={styles.searchInputRow}>
                <div className={styles.heroSearchField}>
                  <SearchIcon className={styles.heroSearchIcon} />
                  <input
                    className={styles.heroSearchInput}
                    id="hero-tools-search"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search burnout, work stress, attachment, confidence..."
                    type="search"
                    value={query}
                  />
                  {query ? (
                    <button
                      aria-label="Clear search"
                      className={styles.searchClearButton}
                      onClick={() => setQuery("")}
                      type="button"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>

                <button className={styles.heroSearchButton} onClick={scrollToBrowse} type="button">
                  See results
                </button>
              </div>

              <div className={styles.featuredChips}>
                <span className={styles.featuredLabel}>Top searches</span>
                <div className={styles.featuredChipRow}>
                  {topSearchSuggestions.map((suggestion) => (
                    <button
                      className={styles.featuredChip}
                      key={suggestion}
                      onClick={() => applySuggestion(suggestion)}
                      type="button"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.searchMicroStats}>
                <div className={styles.searchMicroStat}>
                  <p className={styles.searchMicroValue}>{filteredTools.length}</p>
                  <p className={styles.searchMicroLabel}>matching tools right now</p>
                </div>
                <div className={styles.searchMicroStat}>
                  <p className={styles.searchMicroValue}>{topicClusters.length}</p>
                  <p className={styles.searchMicroLabel}>topic clusters</p>
                </div>
                <div className={styles.searchMicroStat}>
                  <p className={styles.searchMicroValue}>Instant</p>
                  <p className={styles.searchMicroLabel}>search and filter response</p>
                </div>
              </div>
            </div>

            <div className={styles.searchPreviewPanel}>
              <div className={styles.searchPreviewTop}>
                <p className={styles.panelEyebrow}>Live results preview</p>
                <span className={styles.panelTrend}>{activeCluster ? topicClusterMap[activeCluster]?.title ?? "Focused" : "Whole library"}</span>
              </div>

              <div className={styles.searchPreviewList}>
                {(filteredTools.length ? filteredTools : quickStartTools).slice(0, 3).map((tool) => (
                  <article className={styles.searchPreviewItem} key={`preview-${tool.slug}`}>
                    <div>
                      <p className={styles.searchPreviewCluster}>{getClusterForTool(tool).title}</p>
                      <h3 className={styles.searchPreviewTitle}>{tool.title}</h3>
                    </div>
                    <span className={styles.searchPreviewMeta}>{tool.minutes} min</span>
                  </article>
                ))}
              </div>

              <div className={styles.searchPreviewFooter}>
                <p className={styles.searchPreviewFootnote}>
                  Live matches pull from tool titles, plain-language descriptions, related patterns, and topic clusters.
                </p>
                <span className={styles.panelMiniTag}>Private by design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {afterSearchContent}

      <section className={styles.section} id="start-here-tools">
        <div className={styles.container}>
          <SectionHeading
            description="These are the tools most likely to orient someone quickly when the pattern is still fuzzy."
            eyebrow="Start here"
            title="The strongest entry points when you want fast clarity."
          />

          <div className={styles.toolGrid}>
            {quickStartTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="featured-tools">
        <div className={styles.container}>
          <SectionHeading
            description="Use these to enter through the question that feels most urgent instead of browsing the whole library cold."
            eyebrow="Featured and trending"
            title="High-signal tools people reach for most."
          />

          <div className={styles.discoveryRailGrid}>
            <div className={styles.discoveryRailCard}>
              <div className={styles.discoveryRailHeader}>
                <div>
                  <p className={styles.discoveryRailEyebrow}>Featured</p>
                  <h3 className={styles.discoveryRailTitle}>Best-known entry points</h3>
                </div>
                <TrendIcon className={styles.discoveryRailIcon} />
              </div>
              <div className={styles.discoveryRailList}>
                {featuredTools.slice(0, 4).map((tool) => (
                  <Link
                    className={styles.discoveryRailLink}
                    href={buildToolHref({ categorySlug: tool.categorySlug, slug: tool.slug })}
                    key={tool.slug}
                  >
                    <span>{tool.title}</span>
                    <ChevronRightIcon className={styles.inlineIcon} />
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.discoveryRailCard}>
              <div className={styles.discoveryRailHeader}>
                <div>
                  <p className={styles.discoveryRailEyebrow}>Newly added</p>
                  <h3 className={styles.discoveryRailTitle}>Fresh tools from the latest family build</h3>
                </div>
                <ArrowUpRightIcon className={styles.discoveryRailIcon} />
              </div>
              <div className={styles.discoveryRailList}>
                {newlyAddedTools.map((tool) => (
                  <Link
                    className={styles.discoveryRailLink}
                    href={buildToolHref({ categorySlug: tool.categorySlug, slug: tool.slug })}
                    key={tool.slug}
                  >
                    <span>{tool.title}</span>
                    <ChevronRightIcon className={styles.inlineIcon} />
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.discoveryRailCard}>
              <div className={styles.discoveryRailHeader}>
                <div>
                  <p className={styles.discoveryRailEyebrow}>Best for right now</p>
                  <h3 className={styles.discoveryRailTitle}>Useful when the system feels loaded today</h3>
                </div>
                <PatternIcon className={styles.discoveryRailIcon} />
              </div>
              <div className={styles.discoveryRailList}>
                {bestForRightNow.map((tool) => (
                  <Link
                    className={styles.discoveryRailLink}
                    href={buildToolHref({ categorySlug: tool.categorySlug, slug: tool.slug })}
                    key={tool.slug}
                  >
                    <span>{tool.title}</span>
                    <ChevronRightIcon className={styles.inlineIcon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="topic-clusters">
        <div className={styles.container}>
          <SectionHeading
            description="Each cluster groups related tools so it is easier to start from the pattern you feel first and narrow from there."
            eyebrow="Topic clusters"
            title="Browse the library by the pattern, not just the tool name."
          />

          <div className={styles.categoryGrid}>
            {topicClusters.map((cluster) => (
              <article
                className={`${styles.categoryCard} ${activeCluster === cluster.slug ? styles.clusterCardActive : ""}`}
                key={cluster.slug}
              >
                <div className={styles.categoryCardTop}>
                  <p className={styles.categoryCount}>{getClusterToolCount(cluster.slug)} live tools</p>
                  <h3 className={styles.categoryTitle}>{cluster.title}</h3>
                  <p className={styles.categoryDescription}>{cluster.description}</p>
                </div>

                <div className={styles.categorySampleBlock}>
                  <p className={styles.categorySampleLabel}>Featured tools</p>
                  <div className={styles.categorySampleList}>
                    {cluster.featuredToolSlugs.map((slug) => {
                      const tool = liveToolMap[slug as LiveToolSlug];

                      if (!tool) {
                        return null;
                      }

                      return (
                        <Link
                          className={styles.categorySampleLink}
                          href={buildToolHref({ categorySlug: tool.categorySlug, slug: tool.slug })}
                          key={tool.slug}
                        >
                          <span>{tool.title}</span>
                          <ArrowUpRightIcon className={styles.inlineIcon} />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <button
                  className={styles.categoryBrowseLink}
                  onClick={() => {
                    setActiveCluster(cluster.slug);
                    setActiveView("all");
                    scrollToBrowse();
                  }}
                  type="button"
                >
                  Filter to {cluster.title}
                  <ArrowUpRightIcon className={styles.inlineIcon} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="popular-tools">
        <div className={styles.container}>
          <SectionHeading
            description="Popular does not mean generic here. It means these tools repeatedly help people get to a useful next question fast."
            eyebrow="Popular tools"
            title="The tools people use most when they want a quick read that still feels premium."
          />

          <div className={styles.toolGrid}>
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="browse-all-tools">
        <div className={styles.container}>
          <SectionHeading
            description="Search works across tool names, descriptions, and topic clusters. Filters update instantly so the library stays easy to narrow."
            eyebrow="Browse all tools"
            title="Search, filter, and move through the live library without losing the structure."
          />

          <div className={styles.browseShell}>
            <aside className={styles.browseAside}>
              <div className={styles.filterCopyBlock}>
                <p className={styles.filterEyebrow}>Live filters</p>
                <h3 className={styles.filterTitle}>Narrow the library quickly without losing the bigger picture.</h3>
                <p className={styles.filterDescription}>
                  Use clusters, formats, search, and quick views to reach the right tool with less guesswork and less scanning.
                </p>
              </div>

              <div className={styles.toolbarPillStack}>
                <p className={styles.categorySampleLabel}>Quick views</p>
                <div className={styles.filterChips}>
                  {viewOptions.map((option) => (
                    <button
                      className={`${styles.filterChip} ${activeView === option.value ? styles.filterChipActive : ""}`}
                      key={option.value}
                      onClick={() => setActiveView(option.value)}
                      type="button"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.toolbarPillStack}>
                <p className={styles.categorySampleLabel}>Topic clusters</p>
                <div className={styles.filterChips}>
                  <button
                    className={`${styles.filterChip} ${!activeCluster ? styles.filterChipActive : ""}`}
                    onClick={() => setActiveCluster(null)}
                    type="button"
                  >
                    All clusters
                  </button>
                  {topicClusters.map((cluster) => (
                    <button
                      className={`${styles.filterChip} ${activeCluster === cluster.slug ? styles.filterChipActive : ""}`}
                      key={cluster.slug}
                      onClick={() => setActiveCluster(cluster.slug)}
                      type="button"
                    >
                      {cluster.title}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className={styles.browseMain}>
              <div className={styles.toolbar}>
                <div className={styles.toolbarSearch}>
                  <label className="srOnly" htmlFor="browse-tools-search">
                    Search all live tools
                  </label>
                  <SearchIcon className={styles.toolbarSearchIcon} />
                  <input
                    className={styles.toolbarInput}
                    id="browse-tools-search"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by pattern, topic, or what you want help with..."
                    type="search"
                    value={query}
                  />
                  {query ? (
                    <button
                      aria-label="Clear library search"
                      className={styles.searchClearButton}
                      onClick={() => setQuery("")}
                      type="button"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>

                <label className={styles.toolbarSelectWrap}>
                  <span className="srOnly">Filter by tool format</span>
                  <select
                    className={styles.toolbarSelect}
                    onChange={(event) => setActiveFormat(event.target.value || null)}
                    value={activeFormat ?? ""}
                  >
                    <option value="">All formats</option>
                    {formatOptions.map((format) => (
                      <option key={format} value={format}>
                        {format}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.toolbarSelectWrap}>
                  <span className="srOnly">Sort tools</span>
                  <select
                    className={styles.toolbarSelect}
                    onChange={(event) => setActiveSort(event.target.value as ToolSort)}
                    value={activeSort}
                  >
                    <option value="popular">Most popular</option>
                    <option value="quickest">Quickest first</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </label>
              </div>

              <div className={styles.resultsBar}>
                <div>
                  <p className={styles.resultsCount}>
                    Showing {filteredTools.length} of {liveTools.length} live tools
                  </p>
                  <p className={styles.resultsLabel}>
                    {activeCluster ? `${topicClusterMap[activeCluster]?.title} selected` : "All clusters"}
                    {activeFormat ? ` · ${activeFormat}` : ""}
                    {deferredQuery ? ` · query: "${deferredQuery}"` : ""}
                    {activeView !== "all" ? ` · ${activeView}` : ""}
                  </p>
                </div>

                {(query || activeCluster || activeFormat || activeView !== "all" || activeSort !== defaultToolSort) ? (
                  <button className={styles.resetLinkButton} onClick={resetFilters} type="button">
                    Reset filters
                  </button>
                ) : null}
              </div>

              <div className={styles.featuredChipRow}>
                {topSearchSuggestions.map((suggestion) => (
                  <button
                    className={styles.featuredChip}
                    key={`browse-${suggestion}`}
                    onClick={() => setQuery(suggestion)}
                    type="button"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {filteredTools.length ? (
                <>
                  <div className={styles.browseGrid}>
                    {visibleTools.map((tool) => (
                      <ToolCard
                        focused={initialFocusToolSlug === tool.slug}
                        key={tool.slug}
                        tool={tool}
                      />
                    ))}
                  </div>

                  {canRevealMoreTools ? (
                    <div className={styles.browseRevealRow}>
                      <p className={styles.browseRevealHint}>
                        Showing the first {visibleTools.length} matching tools so the library stays easier to scan.
                      </p>

                      <button
                        className={styles.browseRevealButton}
                        onClick={() => setVisibleBrowseCount((count) => count + INITIAL_BROWSE_BATCH)}
                        type="button"
                      >
                        Show {Math.min(INITIAL_BROWSE_BATCH, filteredTools.length - visibleBrowseCount)} more tools
                      </button>
                    </div>
                  ) : null}
                </>
              ) : (
                <div className={styles.emptyState}>
                  <h3 className={styles.emptyStateTitle}>No live tools matched that combination.</h3>
                  <p className={styles.emptyStateCopy}>
                    Try a broader term like burnout, confidence, attachment, or work stress, or clear one of the active filters.
                  </p>
                  <div className={styles.emptyStateActionRow}>
                    {topSearchSuggestions.slice(0, 4).map((suggestion) => (
                      <button
                        className={styles.featuredChip}
                        key={`empty-${suggestion}`}
                        onClick={() => applySuggestion(suggestion)}
                        type="button"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
