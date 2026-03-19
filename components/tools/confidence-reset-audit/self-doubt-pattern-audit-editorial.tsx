import {
  confidenceResetBands,
  confidenceResetDimensions,
  confidenceResetFaqItems,
  confidenceResetStoryBlock,
  dimensionEditorial,
  erosionBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  relatedConfidenceTools,
  restoreBlocks,
} from "@/data/self-doubt-pattern-audit";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./confidence-reset-audit.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function ConfidenceResetEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the reset bands and the self-trust context below so the result becomes a practical reading of confidence function rather than a verdict about worth."
        eyebrow="Reading the confidence pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {confidenceResetBands.map((band) => (
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
        description="These four dimensions separate strong ability from weak confidence function and show where the self-trust system is holding or thinning."
        eyebrow="Confidence dimensions"
        id="confidence-stability-dimensions"
        title="The 4 dimensions of confidence stability"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = confidenceResetDimensions.find((item) => item.key === block.key);

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
        description="Confidence usually erodes through repeated small leaks rather than one dramatic collapse."
        eyebrow="What erodes self-trust"
        id="what-tends-to-erode-self-trust"
        title="What tends to erode self-trust"
      >
        <div className={styles.infoCardGrid}>
          {erosionBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Confidence usually returns through steadier self-trust conditions, not louder self-belief performance."
        eyebrow="What helps restore confidence"
        id="what-helps-restore-confidence"
        title="What helps restore confidence"
      >
        <div className={styles.infoCardGrid}>
          {restoreBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Confidence strain often hides behind competence, which is why it can take so long to notice the real internal cost."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={confidenceResetStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The point is not to perform confidence better. It is to reset the conditions that let self-trust function more cleanly again."
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
        description="Stay inside the same premium tools ecosystem and move into adjacent tools for approval pressure, inner criticism, overthinking, and boundary strain."
        eyebrow="Related confidence tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedConfidenceTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once confidence stops feeling random and starts looking like a readable self-trust pattern."
        eyebrow="Questions after the audit"
        id="faq"
        title="Confidence reset audit FAQ"
      >
        <PremiumFaqList
          accent="#67E8F9"
          intro="These answers help you read the result with more nuance: what confidence is, what it is not, and how to rebuild it without turning the process into louder pressure."
          items={confidenceResetFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
