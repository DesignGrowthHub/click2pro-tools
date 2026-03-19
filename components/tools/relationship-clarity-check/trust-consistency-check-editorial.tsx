import {
  dimensionEditorial,
  increaseBlocks,
  increaseClarityBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  relationshipClarityBands,
  relationshipClarityDimensions,
  relationshipClarityFaqItems,
  relationshipClarityStoryBlock,
  relatedRelationshipClarityTools,
} from "@/data/trust-consistency-check";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./relationship-clarity-check.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function RelationshipClarityEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the clarity bands and the relational context below so the result becomes a read of the connection itself, not just a read of your reaction to it."
        eyebrow="Reading the signal"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {relationshipClarityBands.map((band) => (
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
        description="These four dimensions help separate strong feeling from strong signal."
        eyebrow="Clarity dimensions"
        id="relationship-clarity-dimensions"
        title="The 4 dimensions of relationship clarity"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = relationshipClarityDimensions.find((item) => item.key === block.key);

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
        description="Confusion usually expands through repeated weak signal, not only through one dramatic moment."
        eyebrow="What creates confusion"
        id="what-tends-to-create-confusion"
        title="What tends to create confusion"
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
        description="Clarity usually grows when the relationship stops asking you to do so much interpretive labor on your own."
        eyebrow="What increases clarity"
        id="what-tends-to-increase-clarity"
        title="What tends to increase clarity"
      >
        <div className={styles.infoCardGrid}>
          {increaseClarityBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="The most difficult relationships to read are often the ones that have warmth, hope, and ambiguity all at once."
        eyebrow="How this often feels in real life"
        id="how-this-often-feels-in-real-life"
        title="How this often feels in real life"
      >
        <EditorialStoryCard story={relationshipClarityStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="The goal is not to force a dramatic conclusion. It is to read the signal more honestly so the next move comes from clearer ground."
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
        description="Stay inside the same premium tools ecosystem and move into adjacent tools for attachment patterns, boundary pressure, people-pleasing drift, and reassurance loops."
        eyebrow="Related relational tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedRelationshipClarityTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Useful answers for the questions people usually ask once they can finally separate emotional meaning from actual relationship signal."
        eyebrow="Questions after the reading"
        id="faq"
        title="Relationship clarity check FAQ"
      >
        <PremiumFaqList
          accent="#67E8F9"
          intro="These answers help you read the result with more nuance: what mixed signals are, what they are not, and how to reduce confusion without turning the whole relationship into a mental investigation."
          items={relationshipClarityFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
