import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import type { OverthinkingFamilyTool } from "@/data/overthinking-family";
import styles from "@/components/tools/overthinking-loop-check/overthinking-loop-check.module.css";
import { RelatedToolsPanel } from "@/components/tools/overthinking-loop-check/related-tools-panel";
import { SeoContentSection } from "@/components/tools/overthinking-loop-check/seo-content-section";

type OverthinkingFamilyEditorialProps = {
  tool: OverthinkingFamilyTool;
};

export function OverthinkingFamilyEditorial({
  tool,
}: OverthinkingFamilyEditorialProps) {
  return (
    <>
      <SeoContentSection
        description={tool.editorialCopy.meaningDescription}
        eyebrow={tool.editorialCopy.meaningEyebrow}
        id="what-this-result-usually-means"
        title={tool.editorialCopy.meaningTitle}
      >
        <div className={styles.bandGrid}>
          {Object.values(tool.bandsByKey).map((band) => (
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
          {tool.meaningBlocks.map((block) => (
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

        <EditorialStoryCard story={tool.storyBlock} />
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.dimensionsDescription}
        eyebrow={tool.editorialCopy.dimensionsEyebrow}
        id="overthinking-dimensions"
        title={tool.editorialCopy.dimensionsTitle}
      >
        <div className={styles.dimensionGrid}>
          {tool.dimensionEditorial.map((block) => {
            const dimension = tool.dimensions.find((item) => item.key === block.key);

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
        description={tool.editorialCopy.fuelDescription}
        eyebrow={tool.editorialCopy.fuelEyebrow}
        id="what-feeds-looping"
        title={tool.editorialCopy.fuelTitle}
      >
        <div className={styles.infoCardGrid}>
          {tool.loopFuelBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.interruptDescription}
        eyebrow={tool.editorialCopy.interruptEyebrow}
        id="what-interrupts-the-loop"
        title={tool.editorialCopy.interruptTitle}
      >
        <div className={styles.infoCardGrid}>
          {tool.interruptionBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.nextDescription}
        eyebrow={tool.editorialCopy.nextEyebrow}
        id="what-to-do-next"
        title={tool.editorialCopy.nextTitle}
      >
        <div className={styles.nextStepLayout}>
          <div className={styles.editorialBlock}>
            {tool.nextStepParagraphs.map((paragraph) => (
              <p className={styles.editorialParagraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className={styles.nextStepPanel}>
            <p className={styles.nextStepEyebrow}>{tool.nextStepPanel.eyebrow}</p>
            <h3 className={styles.nextStepTitle}>{tool.nextStepPanel.title}</h3>
            <p className={styles.nextStepDescription}>{tool.nextStepPanel.description}</p>
            <button className={styles.nextStepButton} type="button">
              {tool.nextStepPanel.buttonLabel}
            </button>
          </aside>
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.relatedDescription}
        eyebrow={tool.editorialCopy.relatedEyebrow}
        id="related-tools"
        title={tool.editorialCopy.relatedTitle}
      >
        <RelatedToolsPanel tools={tool.relatedTools} />
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.faqDescription}
        eyebrow={tool.editorialCopy.faqEyebrow}
        id="faq"
        title={tool.editorialCopy.faqTitle}
      >
        <PremiumFaqList
          accent="#A78BFA"
          intro={tool.editorialCopy.faqIntro}
          items={tool.faqItems}
        />
      </SeoContentSection>
    </>
  );
}
