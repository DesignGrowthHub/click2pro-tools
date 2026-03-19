import {
  dimensionEditorial,
  increaseBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  peoplePleasingBands,
  peoplePleasingDimensions,
  peoplePleasingFaqItems,
  peoplePleasingStoryBlock,
  reductionBlocks,
  relatedPeoplePleasingTools,
} from "@/data/people-pleasing-signal-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./people-pleasing-signal-check.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function PeoplePleasingEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the signal bands and the deeper context below to read the result as a social-pattern explanation, not a moral verdict about how helpful or caring you are."
        eyebrow="Reading the pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {peoplePleasingBands.map((band) => (
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
        description="These four dimensions separate the social pull itself from the clarity of your own signal and the later emotional cost."
        eyebrow="Signal architecture"
        id="people-pleasing-dimensions"
        title="The 4 dimensions of people-pleasing drift"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = peoplePleasingDimensions.find((item) => item.key === block.key);

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
        description="Self-override usually intensifies through predictable pressures rather than random weakness."
        eyebrow="What intensifies the drift"
        id="what-increases-self-override"
        title="What tends to increase self-override"
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
        description="Reducing people-pleasing pressure is often less about becoming harder and more about catching the override before it finishes its full sequence."
        eyebrow="What reduces the pressure"
        id="what-helps-reduce-people-pleasing-pressure"
        title="What helps reduce people-pleasing pressure"
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
        <EditorialStoryCard story={peoplePleasingStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="Use the tool as a calmer, more precise starting point for protecting care without immediately erasing yourself."
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
        description="Stay inside the same premium ecosystem and move into adjacent tools for boundaries, attachment dynamics, resentment buildup, and confidence repair."
        eyebrow="Related social tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedPeoplePleasingTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually have once the tool puts language around guilt, approval pressure, self-override, and hidden cost."
        eyebrow="Questions after the reading"
        id="faq"
        title="People-pleasing signal check FAQ"
      >
        <PremiumFaqList
          accent="#FDA4AF"
          intro="These answers help you read the pattern with more nuance: what people-pleasing is, what it is not, and how to start changing it without turning the work into self-criticism."
          items={peoplePleasingFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
