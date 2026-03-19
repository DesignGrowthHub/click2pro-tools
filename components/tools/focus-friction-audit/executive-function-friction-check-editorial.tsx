import {
  dimensionEditorial,
  focusStoryBlock,
  focusBands,
  focusDimensions,
  focusFaqItems,
  increaseBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  reductionBlocks,
  relatedFocusTools,
} from "@/data/executive-function-friction-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./focus-friction-audit.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function FocusEditorial() {
  return (
    <>
      <SeoContentSection
        description="Read the result states alongside the editorial context below so the audit becomes a practical explanation, not just a score."
        eyebrow="Reading the drag"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {focusBands.map((band) => (
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

        <EditorialStoryCard story={focusStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The four dimensions below explain why focus can fail in different ways even when the total friction score is similar."
        eyebrow="Friction dimensions"
        id="focus-friction-dimensions"
        title="The 4 dimensions of focus friction"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = focusDimensions.find((item) => item.key === block.key);

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
        description="Focus drag is usually created by a handful of repeatable conditions, not by one vague lack of discipline."
        eyebrow="What adds drag"
        id="what-increases-focus-drag"
        title="What tends to increase focus drag"
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
        description="Reducing friction is usually more effective than trying to manufacture more willpower inside a high-drag system."
        eyebrow="What reduces friction"
        id="what-reduces-focus-friction"
        title="What tends to reduce focus friction"
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
        description="Use the result to choose the first operational repair, not to produce another vague promise that you will focus better tomorrow."
        eyebrow="What to change first"
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
        description="Stay inside the same product ecosystem and move into adjacent tools that diagnose the load around your attention system."
        eyebrow="Related focus tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedFocusTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Straight answers to the questions people usually have after seeing where their focus system is breaking down."
        eyebrow="Questions that clarify the score"
        id="faq"
        title="Focus friction FAQ"
      >
        <PremiumFaqList
          accent="#60A5FA"
          intro="Use these answers to turn the friction score into something operational: what is actually slowing attention down, and what is most worth fixing first."
          items={focusFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
