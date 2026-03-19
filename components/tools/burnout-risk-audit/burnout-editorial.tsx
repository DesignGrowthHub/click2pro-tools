import {
  burnoutBands,
  burnoutDimensions,
  burnoutFaqItems,
  burnoutStoryBlock,
  dimensionEditorial,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  reductionBlocks,
  relatedBurnoutTools,
  riskBlocks,
} from "@/data/burnout-risk-audit";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./burnout-risk-audit.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function BurnoutEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the score bands and the editorial context below together: one tells you where the signal landed, the other explains how to work with it."
        eyebrow="Reading the load"
        id="what-burnout-load-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {burnoutBands.map((band) => (
            <article className={styles.bandCard} key={band.key}>
              <div
                className={styles.bandSwatch}
                style={{ background: `linear-gradient(90deg, ${band.gradientFrom}, ${band.gradientTo})` }}
              />
              <p className={styles.bandRange}>
                {band.min}-{band.max}
              </p>
              <h3 className={styles.bandTitle}>{band.title}</h3>
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

        <EditorialStoryCard story={burnoutStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="These four dimensions make the score more usable because they show which part of the system is carrying the most strain."
        eyebrow="Dimension breakdown"
        id="burnout-dimensions"
        title="The 4 dimensions of burnout load"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = burnoutDimensions.find((item) => item.key === block.key);

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
        description="Burnout risk usually rises through accumulation. These are the patterns that most often keep the load climbing."
        eyebrow="What intensifies it"
        id="what-increases-burnout-risk"
        title="What increases burnout risk"
      >
        <div className={styles.infoCardGrid}>
          {riskBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The most useful interventions reduce strain while restoring margin. These tend to help because they work on the system, not just the mood."
        eyebrow="What eases the pressure"
        id="what-helps-reduce-burnout-load"
        title="What helps reduce burnout load"
      >
        <div className={styles.infoCardGrid}>
          {reductionBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="A high score is most useful when it leads to one calmer, more strategic next move."
        eyebrow="Calmer next steps"
        id="what-to-do-next"
        title="What to do next"
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
        description="Keep the next move nearby. These tools extend the burnout audit into adjacent pressure patterns."
        eyebrow="Keep exploring"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedBurnoutTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Clearer answers for the questions people usually ask once the burnout-load result becomes personal."
        eyebrow="Questions that usually come next"
        id="faq"
        title="Burnout audit FAQ"
      >
        <PremiumFaqList
          accent="#6FD3FF"
          intro="Use the questions below to translate the score into a more practical read on recovery, workload, and what to protect next."
          items={burnoutFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
