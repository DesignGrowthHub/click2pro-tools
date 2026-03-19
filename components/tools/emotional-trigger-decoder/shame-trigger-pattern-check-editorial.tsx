import {
  dimensionEditorial,
  emotionalTriggerStoryBlock,
  emotionalTriggerFaqItems,
  increaseBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  reductionBlocks,
  relatedDecoderTools,
  triggerBands,
  triggerDimensions,
} from "@/data/shame-trigger-pattern-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./emotional-trigger-decoder.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function EmotionalTriggerEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the reactivity bands and the deeper editorial context below so the decoder becomes an explanation of your trigger sequence, not just a number."
        eyebrow="Reading the sequence"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {triggerBands.map((band) => (
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

        <EditorialStoryCard story={emotionalTriggerStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="These four dimensions help separate fast activation from stronger spikes, wider spillover, and slower recovery."
        eyebrow="Reactivity dimensions"
        id="trigger-reactivity-dimensions"
        title="The 4 dimensions of trigger reactivity"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = triggerDimensions.find((item) => item.key === block.key);

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
        description="Emotional activation usually intensifies through repeated conditions rather than one isolated incident alone."
        eyebrow="What intensifies activation"
        id="what-increases-emotional-activation"
        title="What tends to increase emotional activation"
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
        description="Reducing reactivity is often less about forcing yourself to stop feeling and more about changing what happens after activation begins."
        eyebrow="What shortens the sequence"
        id="what-reduces-reactivity-and-recovery-time"
        title="What helps reduce reactivity and recovery time"
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
        description="Use the result as a map for sequence change, not as a reason to shame yourself for reacting at all."
        eyebrow="How to work with it next"
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
        description="Stay inside the same premium tools ecosystem and move into adjacent tools for loops, attachment themes, recovery pressure, and emotional repair."
        eyebrow="Related emotional tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedDecoderTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually have once the decoder puts language around trigger intensity, spillover, and recovery time."
        eyebrow="Questions after the decode"
        id="faq"
        title="Trigger decoder FAQ"
      >
        <PremiumFaqList
          accent="#67E8F9"
          intro="These answers help you read the trigger pattern with more precision: what activates first, what keeps the sequence alive, and what recovery is really being asked to carry."
          items={emotionalTriggerFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
