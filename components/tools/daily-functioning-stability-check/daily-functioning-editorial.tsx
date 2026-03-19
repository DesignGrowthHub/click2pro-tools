import {
  dailyFunctioningFaqItems,
  dailyFunctioningStoryBlock,
  dailyStabilityBands,
  dailyStabilityDimensions,
  dimensionEditorial,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  relatedDailyTools,
  restorationBlocks,
  disruptionBlocks,
} from "@/data/daily-functioning-stability-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./daily-functioning-stability-check.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function DailyFunctioningEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the result bands below to read the pattern as a daily-functioning map rather than a verdict about motivation, discipline, or personal strength."
        eyebrow="Reading the stability report"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {dailyStabilityBands.map((band) => (
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
          {meaningBlocks.map((block) => (
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
        description="These four dimensions show whether your daily system is mainly being destabilized through energy, follow-through, emotional steadiness, or weak recovery margin."
        eyebrow="Daily functioning dimensions"
        id="daily-functioning-stability-dimensions"
        title="The 4 dimensions of daily functioning stability"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = dailyStabilityDimensions.find((item) => item.key === block.key);

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
        description="Daily steadiness usually erodes through repeated low-margin conditions rather than one dramatic event."
        eyebrow="What tends to disrupt daily steadiness"
        id="what-tends-to-disrupt-daily-steadiness"
        title="What tends to disrupt daily steadiness"
      >
        <div className={styles.infoCardGrid}>
          {disruptionBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The strongest stability gains usually come from supporting the daily operating system, not only from demanding more output from it."
        eyebrow="What helps restore stability"
        id="what-helps-restore-stability"
        title="What helps restore stability"
      >
        <div className={styles.infoCardGrid}>
          {restorationBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Daily instability often looks like a discipline problem from the inside until the operating pattern becomes visible."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={dailyFunctioningStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The goal is not to force a fragile day harder. It is to make the daily system more stable, more buffered, and easier to recover."
        eyebrow="What to do next"
        id="what-to-do-next"
        title="What to do next if this pattern feels familiar"
      >
        <div className={styles.nextStepLayout}>
          <div className={styles.editorialBlock}>
            {nextStepParagraphs.map((paragraph) => (
              <p className={styles.editorialParagraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className={styles.nextStepPanel}>
            <p className={styles.nextStepEyebrow}>{nextStepPanel.eyebrow}</p>
            <h3 className={styles.nextStepTitle}>{nextStepPanel.title}</h3>
            <p className={styles.nextStepDescription}>{nextStepPanel.description}</p>
            <button className={styles.nextStepButton} type="button">
              {nextStepPanel.buttonLabel}
            </button>
          </aside>
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Stay in the same premium tools ecosystem and move into adjacent tools for life balance, sleep carryover, burnout risk, and emotional recovery."
        eyebrow="Related tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedDailyTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once they realize a shaky day is often structural, not simply a motivation problem."
        eyebrow="Questions after the check"
        id="faq"
        title="Daily functioning stability check FAQ"
      >
        <PremiumFaqList
          accent="#67E8F9"
          intro="These answers help you read the dashboard with more precision: what daily functioning means, why small instability spreads, and how to support steadiness before the whole day starts compensating for it."
          items={dailyFunctioningFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
