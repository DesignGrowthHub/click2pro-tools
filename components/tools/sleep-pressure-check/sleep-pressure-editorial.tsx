import {
  dimensionEditorial,
  increaseBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  reductionBlocks,
  relatedSleepTools,
  sleepBands,
  sleepDimensions,
  sleepFaqItems,
  sleepStoryBlock,
} from "@/data/sleep-pressure-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./sleep-pressure-check.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function SleepPressureEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the result bands alongside the editorial context below so the score becomes a practical explanation of your recovery pattern, not just a number."
        eyebrow="Reading the recovery pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {sleepBands.map((band) => (
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

        <EditorialStoryCard story={sleepStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="These four dimensions explain why poor sleep can feel so different depending on whether the main issue is debt, disruption, carryover, or low restoration quality."
        eyebrow="Recovery dimensions"
        id="sleep-pressure-dimensions"
        title="The 4 dimensions of sleep pressure"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = sleepDimensions.find((item) => item.key === block.key);

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
        description="Sleep pressure usually rises through repeated conditions rather than one obvious bad night."
        eyebrow="What builds the pressure"
        id="what-increases-recovery-debt"
        title="What tends to increase recovery debt"
      >
        <div className={styles.infoCardGrid}>
          {increaseBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Lowering sleep pressure is usually about improving recovery conditions rather than forcing yourself to function better on top of existing drag."
        eyebrow="What helps it settle"
        id="what-reduces-sleep-pressure"
        title="What tends to reduce sleep pressure"
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
        description="Use the result to protect recovery more deliberately, not to create another pressure-filled promise to simply sleep better."
        eyebrow="Protect the next step"
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
        description="Stay inside the same tools ecosystem and move into adjacent tools that explain the stress, looping, or life-shape patterns around your current recovery pressure."
        eyebrow="Related recovery tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedSleepTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually have once the score explains why sleep and recovery still feel out of sync."
        eyebrow="Questions after the check"
        id="faq"
        title="Sleep pressure FAQ"
      >
        <PremiumFaqList
          accent="#93C5FD"
          intro="These answers help you read the difference between sleeping, restoring, and carrying quiet recovery debt into the next day."
          items={sleepFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
