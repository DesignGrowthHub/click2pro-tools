import {
  dimensionEditorial,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  reassuranceBands,
  reassuranceDimensions,
  reassuranceFaqItems,
  reassuranceStoryBlock,
  relatedReassuranceTools,
  strengthenBlocks,
  weakenBlocks,
} from "@/data/health-reassurance-loop-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./reassurance-seeking-decoder.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function ReassuranceSeekingEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the loop bands below to read this as a mechanism report: where uncertainty becomes active, how reassurance behaves, and what keeps the return of doubt alive."
        eyebrow="Reading the reassurance pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {reassuranceBands.map((band) => (
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
        description="These four dimensions separate the discomfort of uncertainty from the habits that keep reactivating it."
        eyebrow="Reassurance dimensions"
        id="reassurance-seeking-dimensions"
        title="The 4 dimensions of reassurance seeking"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = reassuranceDimensions.find((item) => item.key === block.key);

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
        description="Reassurance loops grow through repeated reinforcement, not because the person is weak or irrational."
        eyebrow="What tends to strengthen the loop"
        id="what-tends-to-strengthen-the-loop"
        title="What tends to strengthen the loop"
      >
        <div className={styles.infoCardGrid}>
          {strengthenBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The point is not to shame reassurance seeking. It is to reduce the reinforcement that teaches the cycle to keep repeating."
        eyebrow="What helps weaken the cycle"
        id="what-helps-weaken-the-cycle"
        title="What helps weaken the cycle"
      >
        <div className={styles.infoCardGrid}>
          {weakenBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The cycle often looks small from the outside because the actions are ordinary, but the internal repetition is what makes it draining."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={reassuranceStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The most helpful next move is usually a small shift at the right part of the cycle, not trying to become perfectly okay with uncertainty all at once."
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
        description="Stay in the same premium tools ecosystem and trace the uncertainty loop into overthinking, relationship ambiguity, attachment activation, and emotional triggers."
        eyebrow="Related reassurance tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedReassuranceTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once reassurance seeking starts looking less like random anxiety and more like a readable uncertainty cycle."
        eyebrow="Questions after the decoder"
        id="faq"
        title="Reassurance seeking decoder FAQ"
      >
        <PremiumFaqList
          accent="#67E8F9"
          intro="These answers help you read the cycle with more nuance: what reassurance is doing, why the relief fades, and how to weaken the loop without turning the process into self-judgment."
          items={reassuranceFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
