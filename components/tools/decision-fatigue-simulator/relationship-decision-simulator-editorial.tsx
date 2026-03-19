import {
  decisionBands,
  decisionDimensions,
  decisionFaqItems,
  decisionStoryBlock,
  dimensionEditorial,
  increaseBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  reductionBlocks,
  relatedDecisionTools,
} from "@/data/relationship-decision-simulator";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./decision-fatigue-simulator.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function DecisionEditorial() {
  return (
    <>
      <SeoContentSection
        description="Read the result states alongside the editorial context below so the simulator becomes a practical explanation, not just a score."
        eyebrow="Reading the simulation"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {decisionBands.map((band) => (
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

        <EditorialStoryCard story={decisionStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The four dimensions below explain why decision quality can feel different even when the visible choices look similar from the outside."
        eyebrow="Decision strain dimensions"
        id="decision-strain-dimensions"
        title="The 4 dimensions of decision strain"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = decisionDimensions.find((item) => item.key === block.key);

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
        description="Decision fatigue usually grows from repeated conditions, not from one moment of weak judgment."
        eyebrow="What raises the cost"
        id="what-increases-decision-fatigue"
        title="What tends to increase decision fatigue"
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
        description="Reducing decision load is usually more effective than demanding better judgment from an already saturated system."
        eyebrow="What protects clarity"
        id="what-reduces-decision-load"
        title="What tends to reduce decision load"
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
        description="Use the result to change the conditions around judgment, not to make another vague promise to just think harder tomorrow."
        eyebrow="What to do next"
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
        description="Stay inside the same premium tool ecosystem and move into adjacent tools that explain the load around your decisions."
        eyebrow="Related decision tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedDecisionTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Short, useful answers for the questions that usually appear once the simulator shows how clarity is being spent."
        eyebrow="Questions after the simulation"
        id="faq"
        title="Decision fatigue FAQ"
      >
        <PremiumFaqList
          accent="#F6C177"
          intro="These answers help you read the score as a decision-environment problem, not a personality flaw."
          items={decisionFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
