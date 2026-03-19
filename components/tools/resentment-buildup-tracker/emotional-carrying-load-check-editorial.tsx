import {
  dimensionEditorial,
  feedBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  relatedResentmentTools,
  relieveBlocks,
  resentmentBands,
  resentmentDimensions,
  resentmentFaqItems,
  resentmentStoryBlock,
} from "@/data/emotional-carrying-load-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./resentment-buildup-tracker.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function ResentmentBuildupEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the bands below to read this as a stored-pressure report: how much is being held, where fairness is failing, and how the emotional after-cost is starting to show itself."
        eyebrow="Reading the buildup pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {resentmentBands.map((band) => (
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
        description="These four dimensions separate the private holding, the fairness problem, the carrying burden, and the later hardening risk."
        eyebrow="The 4 dimensions of resentment buildup"
        id="resentment-buildup-dimensions"
        title="The 4 dimensions of resentment buildup"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = resentmentDimensions.find((item) => item.key === block.key);

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
        description="Resentment feeds on repetition more than drama. It grows where cost keeps staying active without enough naming, repair, or reciprocity to clear it."
        eyebrow="What tends to feed resentment"
        id="what-tends-to-feed-resentment"
        title="What tends to feed resentment"
      >
        <div className={styles.infoCardGrid}>
          {feedBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The goal is not to suppress resentment. It is to use it earlier, before distance or coldness becomes the only way the system knows how to protect itself."
        eyebrow="What helps relieve or prevent buildup"
        id="what-helps-relieve-or-prevent-buildup"
        title="What helps relieve or prevent buildup"
      >
        <div className={styles.infoCardGrid}>
          {relieveBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Stored resentment often looks minor from the outside because the buildup phase stays quiet long before the later coldness finally becomes visible."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={resentmentStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The first useful move is usually not becoming instantly warmer again. It is reducing the private carrying and restoring fairness before more of the system has to harden."
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
        description="Stay in the same premium tools ecosystem and trace resentment back into people-pleasing, unclear reciprocity, emotional triggers, and in-the-moment self-protection."
        eyebrow="Related resentment tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedResentmentTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once resentment stops looking random and starts looking like a readable accumulation pattern."
        eyebrow="Questions after the tracker"
        id="faq"
        title="Resentment buildup tracker FAQ"
      >
        <PremiumFaqList
          accent="#FB7185"
          intro="These answers help you read resentment with more precision: how it accumulates, why the coldness often comes later, and how to interrupt the stored-pressure pattern before distance hardens."
          items={resentmentFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
