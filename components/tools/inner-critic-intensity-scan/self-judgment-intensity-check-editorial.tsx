import {
  dimensionEditorial,
  innerCriticBands,
  innerCriticDimensions,
  innerCriticFaqItems,
  innerCriticStoryBlock,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  relatedInnerCriticTools,
  softenBlocks,
  strengthenBlocks,
} from "@/data/self-judgment-intensity-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./inner-critic-intensity-scan.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function InnerCriticEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the result bands and the inner-voice context below so the score becomes a readable pattern of pressure, not another verdict about your worth."
        eyebrow="Reading the inner-voice pattern"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {innerCriticBands.map((band) => (
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
        description="These four dimensions show whether the critic is mainly harsh, repetitive, perfectionistic, or especially costly to self-trust."
        eyebrow="Inner critic dimensions"
        id="inner-critic-intensity-dimensions"
        title="The 4 dimensions of inner critic intensity"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = innerCriticDimensions.find((item) => item.key === block.key);

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
        description="The inner critic usually strengthens through repeated pressure, exposure, comparison, and weak recovery rather than one dramatic event."
        eyebrow="What strengthens the critic"
        id="what-tends-to-strengthen-the-inner-critic"
        title="What tends to strengthen the inner critic"
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
        description="Softening the critic usually works better when it becomes specific: tone, repetition, perfection rules, and recovery after mistakes."
        eyebrow="What helps soften the voice"
        id="what-helps-soften-or-reframe-the-inner-voice"
        title="What helps soften or reframe the inner voice"
      >
        <div className={styles.infoCardGrid}>
          {softenBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Inner criticism often hides behind capability, which is why people can look steady outside while carrying far more internal pressure than others can see."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={innerCriticStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The point is not to become instantly positive. It is to build a steadier internal response that interrupts punishment sooner and protects trust more reliably."
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
        description="Stay inside the same premium tools ecosystem and move into adjacent tools for confidence repair, overthinking loops, self-sabotage patterns, and trigger activation."
        eyebrow="Related inner-voice tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedInnerCriticTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once harsh self-talk starts looking like a readable pattern instead of a fixed identity."
        eyebrow="Questions after the scan"
        id="faq"
        title="Inner critic intensity scan FAQ"
      >
        <PremiumFaqList
          accent="#FB7185"
          intro="These answers help you read the result with more nuance: what the critic is doing, what it is not, and how to soften the pattern without turning it into another inner performance rule."
          items={innerCriticFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
