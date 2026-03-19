import {
  dimensionEditorial,
  interruptionBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  overthinkingBands,
  overthinkingDimensions,
  overthinkingFaqItems,
  overthinkingStoryBlock,
  relatedLoopTools,
  loopFuelBlocks,
} from "@/data/overthinking-loop-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./overthinking-loop-check.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function OverthinkingEditorial() {
  return (
    <>
      <SeoContentSection
        description="Read the result bands alongside the editorial context below so the map does not stop at a score."
        eyebrow="Reading the loop"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {overthinkingBands.map((band) => (
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

        <EditorialStoryCard story={overthinkingStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="These four dimensions explain why two people with the same score can still experience very different kinds of looping."
        eyebrow="Signal breakdown"
        id="overthinking-dimensions"
        title="The 4 dimensions of overthinking loops"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = overthinkingDimensions.find((item) => item.key === block.key);

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
        description="Loops usually persist because something in the pattern keeps making more thinking feel necessary."
        eyebrow="What keeps it active"
        id="what-feeds-looping"
        title="What tends to feed looping"
      >
        <div className={styles.infoCardGrid}>
          {loopFuelBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Interrupting the loop usually requires changing the pattern, not arguing with every thought inside it."
        eyebrow="What interrupts the cycle"
        id="what-interrupts-the-loop"
        title="What tends to interrupt the loop"
      >
        <div className={styles.infoCardGrid}>
          {interruptionBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="A stronger next move usually comes from reducing the loop's fuel, not trying to overpower it."
        eyebrow="Practical next moves"
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
        description="Keep moving through adjacent tools that help decode the fuel around the loop instead of staring at the loop in isolation."
        eyebrow="Related pattern tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedLoopTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually have once the loop map starts sounding uncomfortably familiar."
        eyebrow="Questions people ask after the map"
        id="faq"
        title="Overthinking loop FAQ"
      >
        <PremiumFaqList
          accent="#A78BFA"
          intro="These answers help separate healthy reflection from the kinds of repetitive thinking that quietly drain clarity and momentum."
          items={overthinkingFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
