import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { ToolPageNav } from "@/components/tools/tool-page-nav";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import { renderIcon } from "@/components/tools/icons";
import styles from "@/components/tools/people-pleasing-signal-check/people-pleasing-signal-check.module.css";
import type { PeoplePleasingFamilyTool } from "@/data/people-pleasing-family";
import { LiveSignalPreview } from "@/components/tools/people-pleasing-signal-check/live-signal-preview";
import { RelatedToolsPanel } from "@/components/tools/people-pleasing-signal-check/related-tools-panel";
import { SeoContentSection } from "@/components/tools/people-pleasing-signal-check/seo-content-section";
import { PeoplePleasingFamilyExperience } from "./people-pleasing-family-experience";

type PageProps = {
  pageUrl: string;
  tool: PeoplePleasingFamilyTool;
};

export function buildPeoplePleasingFamilyMetadata(
  tool: PeoplePleasingFamilyTool,
  pageUrl: string,
): Metadata {
  return {
    title: tool.pageMetadata.title,
    description: tool.pageMetadata.description,
    keywords: tool.pageMetadata.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: tool.pageMetadata.openGraphTitle,
      description: tool.pageMetadata.openGraphDescription,
      url: pageUrl,
      siteName: "Click2Pro Tools",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.pageMetadata.twitterTitle,
      description: tool.pageMetadata.twitterDescription,
    },
  };
}

function FamilyPageHeader({ tool }: { tool: PeoplePleasingFamilyTool }) {
  return (
    <ToolPageNav
      ariaLabel={tool.navigation.ariaLabel}
      ctaHref="#interactive-signal-check"
      ctaLabel={tool.navigation.ctaLabel}
      items={tool.navigation.items}
    />
  );
}

function FamilyHero({ tool }: { tool: PeoplePleasingFamilyTool }) {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{tool.toolMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{tool.toolMetadata.title}</h1>
          <p className={styles.heroDescription}>{tool.toolMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {tool.toolMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-signal-check">
              {tool.toolMetadata.primaryCta}
            </Link>
            <Link className={styles.secondaryButton} href="#sample-signal-preview">
              {tool.toolMetadata.secondaryCta}
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-signal-preview">
            <LiveSignalPreview label="Live signal preview" result={tool.heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FamilyEditorial({ tool }: { tool: PeoplePleasingFamilyTool }) {
  return (
    <>
      <SeoContentSection
        description={tool.editorialCopy.meaningDescription}
        eyebrow={tool.editorialCopy.meaningEyebrow}
        id="what-this-result-usually-means"
        title={tool.editorialCopy.meaningTitle}
      >
        <div className={styles.bandGrid}>
          {tool.bands.map((band) => (
            <article className={styles.bandCard} key={band.key}>
              <div
                className={styles.bandSwatch}
                style={{ background: `linear-gradient(90deg, ${band.gradientFrom}, ${band.gradientTo})` }}
              />
              <h3 className={styles.bandTitle}>{band.title}</h3>
              <p className={styles.bandDescriptor}>{band.descriptor}</p>
              <p className={styles.bandCopy}>{band.summary}</p>
            </article>
          ))}
        </div>

        <div className={styles.editorialStack}>
          {tool.meaningBlocks.map((block) => (
            <article className={styles.editorialBlock} key={block.title}>
              <h3 className={styles.editorialTitle}>{block.title}</h3>
              {block.paragraphs.map((paragraph) => (
                <p className={styles.editorialParagraph} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.dimensionsDescription}
        eyebrow={tool.editorialCopy.dimensionsEyebrow}
        id="people-pleasing-dimensions"
        title={tool.editorialCopy.dimensionsTitle}
      >
        <div className={styles.dimensionGrid}>
          {tool.dimensionEditorial.map((block) => {
            const dimension = tool.dimensions.find((item) => item.key === block.key);

            if (!dimension) {
              return null;
            }

            return (
              <article className={styles.dimensionCard} key={block.key}>
                <div className={styles.dimensionCardTop}>
                  <span className={styles.dimensionIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <p className={styles.dimensionKicker}>{dimension.label}</p>
                    <p className={styles.dimensionSummary}>{dimension.description}</p>
                  </div>
                </div>
                {block.paragraphs.map((paragraph) => (
                  <p className={styles.editorialParagraph} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </article>
            );
          })}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.increaseDescription}
        eyebrow={tool.editorialCopy.increaseEyebrow}
        id="what-increases-self-override"
        title={tool.editorialCopy.increaseTitle}
      >
        <div className={styles.infoCardGrid}>
          {tool.increaseBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.reductionDescription}
        eyebrow={tool.editorialCopy.reductionEyebrow}
        id="what-helps-reduce-people-pleasing-pressure"
        title={tool.editorialCopy.reductionTitle}
      >
        <div className={styles.infoCardGrid}>
          {tool.reductionBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.storyDescription}
        eyebrow={tool.editorialCopy.storyEyebrow}
        id="how-this-feels-in-real-life"
        title={tool.editorialCopy.storyTitle}
      >
        <EditorialStoryCard story={tool.storyBlock} />
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.nextDescription}
        eyebrow={tool.editorialCopy.nextEyebrow}
        id="what-to-do-next"
        title={tool.editorialCopy.nextTitle}
      >
        <div className={styles.nextStepLayout}>
          <div className={styles.editorialBlock}>
            {tool.nextStepParagraphs.map((paragraph) => (
              <p className={styles.editorialParagraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className={styles.nextStepPanel}>
            <p className={styles.nextStepEyebrow}>{tool.nextStepPanel.eyebrow}</p>
            <h3 className={styles.nextStepTitle}>{tool.nextStepPanel.title}</h3>
            <p className={styles.nextStepDescription}>{tool.nextStepPanel.description}</p>
            <button className={styles.nextStepButton} type="button">
              {tool.nextStepPanel.buttonLabel}
            </button>
          </aside>
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.relatedDescription}
        eyebrow={tool.editorialCopy.relatedEyebrow}
        id="related-tools"
        title={tool.editorialCopy.relatedTitle}
      >
        <RelatedToolsPanel tools={tool.relatedTools} />
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.faqDescription}
        eyebrow={tool.editorialCopy.faqEyebrow}
        id="faq"
        title={tool.editorialCopy.faqTitle}
      >
        <PremiumFaqList accent="#FDA4AF" intro={tool.editorialCopy.faqIntro} items={tool.faqItems} />
      </SeoContentSection>
    </>
  );
}

export function PeoplePleasingFamilyPage({ pageUrl, tool }: PageProps) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: tool.toolMetadata.title,
      description: tool.toolMetadata.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Click2Pro Tools",
        url: "https://click2pro.com/tools",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tools",
          item: "https://click2pro.com/tools",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tool.toolMetadata.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <div className={styles.page}>
        <FamilyPageHeader tool={tool} />
        <main>
          <FamilyHero tool={tool} />
          <PeoplePleasingFamilyExperience toolSlug={tool.slug} />
          <ToolPageTrustSections />
          <FamilyEditorial tool={tool} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

