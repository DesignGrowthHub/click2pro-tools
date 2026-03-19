import {
  dimensionEditorial,
  loadReductionBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  pressureIncreaseBlocks,
  relatedWorkStressTools,
  workStressBands,
  workStressDimensions,
  workStressFaqItems,
  workStressStoryBlock,
} from "@/data/meeting-burden-mapper";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./work-stress-load-mapper.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function WorkStressLoadEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the result bands below to read the pattern as a work-pressure map rather than a verdict about how well you should be coping."
        eyebrow="Reading the work-stress map"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {workStressBands.map((band) => (
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
        description="These four dimensions show whether work stress is being driven mainly by dense demand, low control, fragmentation, or hidden burden."
        eyebrow="Work stress load dimensions"
        id="work-stress-load-dimensions"
        title="The 4 dimensions of work stress load"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = workStressDimensions.find((item) => item.key === block.key);

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
        description="Work pressure usually becomes expensive through specific structural conditions rather than through busyness alone."
        eyebrow="What tends to increase work pressure"
        id="what-tends-to-increase-work-pressure"
        title="What tends to increase work pressure"
      >
        <div className={styles.infoCardGrid}>
          {pressureIncreaseBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The strongest work-stress improvements usually come from reshaping the structure of the load, not only from trying to endure it better."
        eyebrow="What helps reduce the load"
        id="what-helps-reduce-the-load"
        title="What helps reduce the load"
      >
        <div className={styles.infoCardGrid}>
          {loadReductionBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Work stress often looks like a personal weakness from the inside until the underlying load structure becomes visible."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={workStressStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The goal is not to become infinitely efficient. It is to make the load more visible, more bounded, and more recoverable."
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
        description="Stay in the same premium tools ecosystem and move into adjacent tools for burnout, focus friction, decision fatigue, and recovery."
        eyebrow="Related tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedWorkStressTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once they realize work stress is often structural, not just personal."
        eyebrow="Questions after the map"
        id="faq"
        title="Work stress load mapper FAQ"
      >
        <PremiumFaqList
          accent="#67E8F9"
          intro="These answers help you read the map with more precision: what work stress is, how structure amplifies pressure, and what to change when the issue is not only volume."
          items={workStressFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
