import {
  dimensionEditorial,
  increaseBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  boundaryStrengthBands,
  boundaryStrengthDimensions,
  boundaryStrengthFaqItems,
  boundaryStrengthStoryBlock,
  reductionBlocks,
  relatedBoundaryTools,
} from "@/data/boundary-strength-scanner";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./boundary-strength-scanner.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function BoundaryStrengthEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the bands and the deeper context below to read the result as a boundary-pattern explanation, not a moral verdict about how caring or difficult you are."
        eyebrow="Reading the pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {boundaryStrengthBands.map((band) => (
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
        description="These four dimensions separate the pressure itself from the clarity of your limit and the later emotional cost."
        eyebrow="Boundary architecture"
        id="boundary-strength-dimensions"
        title="The 4 dimensions of boundary strength"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = boundaryStrengthDimensions.find((item) => item.key === block.key);

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
        description="Boundary drift usually intensifies through predictable forms of pressure rather than random weakness."
        eyebrow="What intensifies the drift"
        id="what-increases-boundary-pressure"
        title="What tends to increase boundary pressure"
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
        description="Reducing boundary strain is often less about becoming harder and more about catching the softening before it finishes its full sequence."
        eyebrow="What reduces the pressure"
        id="what-helps-strengthen-boundaries"
        title="What helps strengthen boundaries"
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
        description="The lived experience is often quieter than the later emotional cost makes it seem."
        eyebrow="How this often feels in real life"
        id="how-this-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={boundaryStrengthStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="Use the tool as a calmer, more precise starting point for protecting care without automatically abandoning yourself."
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
        description="Stay inside the same premium ecosystem and move into adjacent tools for approval pressure, attachment dynamics, resentment buildup, and communication repair."
        eyebrow="Related boundary tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedBoundaryTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually have once the tool puts language around guilt, pressure, weak zones, and hidden boundary cost."
        eyebrow="Questions after the reading"
        id="faq"
        title="Boundary strength scanner FAQ"
      >
        <PremiumFaqList
          accent="#FB7185"
          intro="These answers help you read the pattern with more nuance: what strong boundaries are, what they are not, and how to strengthen them without turning the work into self-criticism."
          items={boundaryStrengthFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
