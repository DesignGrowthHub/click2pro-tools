import {
  dimensionEditorial,
  interruptionBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  relatedSelfSabotageTools,
  selfSabotageBands,
  selfSabotageDimensions,
  selfSabotageFaqItems,
  selfSabotageStoryBlock,
  triggerBlocks,
} from "@/data/success-discomfort-pattern-finder";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./self-sabotage-pattern-finder.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function SelfSabotageEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the result bands below to read the pattern as a progress interruption system rather than a generic problem with discipline or worth."
        eyebrow="Reading the interruption pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {selfSabotageBands.map((band) => (
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
        description="These four dimensions show whether the pattern is joining progress early, breaking momentum easily, converting pressure into avoidance, or disrupting follow-through after the break."
        eyebrow="Self-sabotage dimensions"
        id="self-sabotage-dimensions"
        title="The 4 dimensions of self-sabotage"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = selfSabotageDimensions.find((item) => item.key === block.key);

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
        description="Self-sabotage usually strengthens through identifiable trigger conditions rather than appearing out of nowhere."
        eyebrow="What tends to trigger the break"
        id="what-tends-to-trigger-the-break"
        title="What tends to trigger the break"
      >
        <div className={styles.infoCardGrid}>
          {triggerBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Interrupting the pattern usually works best at the exact transition where progress turns into emotional pressure."
        eyebrow="What helps interrupt the pattern"
        id="what-helps-interrupt-the-pattern"
        title="What helps interrupt the pattern"
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
        description="Self-sabotage often looks quieter than people imagine, which is why it can keep repeating without being named clearly."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={selfSabotageStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The goal is not to become perfect at follow-through. It is to build better support around the exact stretch where momentum usually used to break."
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
        description="Stay inside the same premium tools ecosystem and move into adjacent tools for confidence repair, friction, inner pressure, and mental loops."
        eyebrow="Related tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedSelfSabotageTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once self-sabotage starts looking like a readable interruption process instead of a mysterious flaw."
        eyebrow="Questions after the finder"
        id="faq"
        title="Self-sabotage pattern finder FAQ"
      >
        <PremiumFaqList
          accent="#FB7185"
          intro="These answers help you read the result with more precision: what self-sabotage is, what it is not, and how to work with the exact point where progress keeps breaking."
          items={selfSabotageFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
