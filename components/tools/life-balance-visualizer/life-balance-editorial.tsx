import {
  balanceBands,
  balanceDimensions,
  balanceFaqItems,
  dimensionEditorial,
  increaseBlocks,
  lifeBalanceStoryBlock,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  reductionBlocks,
  relatedBalanceTools,
} from "@/data/life-balance-visualizer";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./life-balance-visualizer.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function LifeBalanceEditorial() {
  return (
    <>
      <SeoContentSection
        description="Read the balance bands alongside the long-form editorial context below so the map becomes a practical explanation, not only a visual snapshot."
        eyebrow="Reading the shape"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {balanceBands.map((band) => (
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

        <EditorialStoryCard story={lifeBalanceStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="These four dimensions explain why life can look functional while still feeling structurally thin, stretched, or under-supported."
        eyebrow="Balance dimensions"
        id="life-balance-dimensions"
        title="The 4 dimensions of life balance"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = balanceDimensions.find((item) => item.key === block.key);

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
        description="Imbalance usually forms through accumulating conditions, not from one bad week or one obviously broken area."
        eyebrow="What distorts the shape"
        id="what-creates-imbalance"
        title="What tends to create imbalance"
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
        description="Restoring balance is usually less about optimizing everything and more about rebuilding support in the places carrying the most distortion."
        eyebrow="What restores support"
        id="what-restores-balance"
        title="What tends to restore balance"
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
        description="Use the map to guide calmer structural changes, not to judge yourself for not carrying more than the current system can comfortably hold."
        eyebrow="Rebalancing next steps"
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
        description="Continue inside the same tools ecosystem with related tools that help explain recovery, focus drag, and emotional support around the shape you are seeing."
        eyebrow="Related balance tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedBalanceTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Practical answers for the questions people usually have once the map shows where life feels thinner than it looks."
        eyebrow="Questions after the map"
        id="faq"
        title="Life balance FAQ"
      >
        <PremiumFaqList
          accent="#7DD3FC"
          intro="Use these answers to read the wheel more calmly: what the imbalance means, what usually causes it, and where to strengthen the shape first."
          items={balanceFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
