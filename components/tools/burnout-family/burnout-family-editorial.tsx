import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import { RelatedToolsPanel } from "@/components/tools/burnout-risk-audit/related-tools-panel";
import { SeoContentSection } from "@/components/tools/burnout-risk-audit/seo-content-section";
import type { BurnoutFamilyTool } from "@/data/burnout-family";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";

type BurnoutFamilyEditorialProps = {
  tool: BurnoutFamilyTool;
};

export function BurnoutFamilyEditorial({ tool }: BurnoutFamilyEditorialProps) {
  return (
    <>
      <SeoContentSection
        description={tool.editorialCopy.meaningDescription}
        eyebrow={tool.editorialCopy.meaningEyebrow}
        id="what-this-result-usually-means"
        title={tool.editorialCopy.meaningTitle}
      >
        <div className={styles.bandGrid}>
          {tool.bands.map((band) => (
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
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.storyDescription}
        eyebrow={tool.editorialCopy.storyEyebrow}
        id="how-this-often-feels"
        title={tool.editorialCopy.storyTitle}
      >
        <EditorialStoryCard story={tool.storyBlock} />
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.dimensionsDescription}
        eyebrow={tool.editorialCopy.dimensionsEyebrow}
        id="dimensions"
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
        description={tool.editorialCopy.riskDescription}
        eyebrow={tool.editorialCopy.riskEyebrow}
        id="what-increases-risk"
        title={tool.editorialCopy.riskTitle}
      >
        <div className={styles.infoCardGrid}>
          {tool.riskBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description={tool.editorialCopy.reductionDescription}
        eyebrow={tool.editorialCopy.reductionEyebrow}
        id="what-helps-reduce-load"
        title={tool.editorialCopy.reductionTitle}
      >
        <div className={styles.infoCardGrid}>
          {tool.reductionBlocks.map((block) => (
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
        <PremiumFaqList accent="#6FD3FF" intro={tool.editorialCopy.faqIntro} items={tool.faqItems} />
      </SeoContentSection>
    </>
  );
}
