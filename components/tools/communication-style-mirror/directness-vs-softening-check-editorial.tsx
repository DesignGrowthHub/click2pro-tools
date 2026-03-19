import {
  clarityRepairBlocks,
  communicationBands,
  communicationDimensions,
  communicationStoryBlock,
  communicationStyleFaqItems,
  dimensionEditorial,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  pressureShiftBlocks,
  relatedCommunicationTools,
} from "@/data/directness-vs-softening-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./communication-style-mirror.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function CommunicationStyleEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the result bands below to read the pattern as a conversation mirror rather than a judgment about who you are."
        eyebrow="Reading the communication mirror"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {communicationBands.map((band) => (
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
        description="These four dimensions show what stays steady, what distorts fastest, and how much repair still remains available once the conversation gets tense."
        eyebrow="Communication style dimensions"
        id="communication-style-dimensions"
        title="The 4 dimensions of communication style"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = communicationDimensions.find((item) => item.key === block.key);

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
        description="Communication usually changes through identifiable pressure conditions rather than out of nowhere."
        eyebrow="What tends to shift communication under pressure"
        id="what-tends-to-shift-communication-under-pressure"
        title="What tends to shift communication under pressure"
      >
        <div className={styles.infoCardGrid}>
          {pressureShiftBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The strongest communication improvements usually come from keeping the message cleaner, the tone steadier, and repair more available."
        eyebrow="What helps improve clarity and repair"
        id="what-helps-improve-clarity-and-repair"
        title="What helps improve clarity and repair"
      >
        <div className={styles.infoCardGrid}>
          {clarityRepairBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Communication distortion often looks smaller from the outside than it feels from the inside, especially when care is high."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={communicationStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The goal is not flawless wording. It is building a more dependable path from intention to expression to repair when the conversation becomes difficult."
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
        description="Stay in the same premium tools ecosystem and move into related tools for clarity, attachment, boundaries, and self-signal protection."
        eyebrow="Related tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedCommunicationTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once they realize pressure, not personality alone, is changing how their communication lands."
        eyebrow="Questions after the mirror"
        id="faq"
        title="Communication style mirror FAQ"
      >
        <PremiumFaqList
          accent="#67E8F9"
          intro="These answers help you read the mirror with more precision: what communication style is, what pressure distortion looks like, and how to strengthen repair without becoming less honest."
          items={communicationStyleFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
