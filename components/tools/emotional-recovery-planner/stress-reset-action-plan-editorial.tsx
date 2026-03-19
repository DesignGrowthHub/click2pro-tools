import {
  dimensionEditorial,
  emotionalRecoveryFaqItems,
  emotionalRecoveryStoryBlock,
  increaseBlocks,
  meaningBlocks,
  nextStepPanel,
  nextStepParagraphs,
  recoveryBands,
  recoveryDimensions,
  relatedRecoveryTools,
  restorationBlocks,
} from "@/data/stress-reset-action-plan";
import { EditorialStoryCard } from "@/components/tools/editorial-story-card";
import { renderIcon } from "@/components/tools/icons";
import { PremiumFaqList } from "@/components/tools/premium-faq-list";
import styles from "./emotional-recovery-planner.module.css";
import { RelatedToolsPanel } from "./related-tools-panel";
import { SeoContentSection } from "./seo-content-section";

export function EmotionalRecoveryEditorial() {
  return (
    <>
      <SeoContentSection
        description="Use the recovery path bands below to read your result as a planning direction, not a label. The point is to make the next step more realistic and more compassionate."
        eyebrow="Reading the path"
        id="what-this-result-usually-means"
        title="What this result usually means"
      >
        <div className={styles.bandGrid}>
          {recoveryBands.map((band) => (
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

        <EditorialStoryCard story={emotionalRecoveryStoryBlock} />
      </SeoContentSection>

      <SeoContentSection
        description="These four dimensions keep the planner from oversimplifying recovery into motivation alone. They show where strain is coming from and how realistic the next step actually is."
        eyebrow="Recovery dimensions"
        id="emotional-recovery-dimensions"
        title="The 4 dimensions of emotional recovery"
      >
        <div className={styles.dimensionGrid}>
          {dimensionEditorial.map((block) => {
            const dimension = recoveryDimensions.find((item) => item.key === block.key);

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
        description="Recovery usually slows through repeated conditions rather than one dramatic moment, which is why practical planning matters more than vague encouragement."
        eyebrow="What slows recovery"
        id="what-slows-recovery"
        title="What tends to slow recovery"
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
        description="Restoring capacity usually works best when recovery becomes easier to follow, less pressured, and more protected than it has been recently."
        eyebrow="What restores capacity"
        id="what-helps-restore-capacity"
        title="What helps restore capacity"
      >
        <div className={styles.infoCardGrid}>
          {restorationBlocks.map((block) => (
            <article className={styles.infoCard} key={block.title}>
              <h3 className={styles.infoCardTitle}>{block.title}</h3>
              <p className={styles.infoCardCopy}>{block.body}</p>
            </article>
          ))}
        </div>
      </SeoContentSection>

      <SeoContentSection
        description="Use the plan as a way to reduce pressure, not as another standard you must perform perfectly. The best next step is usually the one your current state can actually sustain."
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
        description="Move into related tools that explain the depletion, sleep pressure, trigger load, or life-shape patterns sitting around your current recovery need."
        eyebrow="Related recovery tools"
        id="related-tools"
        title="Related tools"
      >
        <RelatedToolsPanel tools={relatedRecoveryTools} />
      </SeoContentSection>

      <SeoContentSection
        description="Short, useful answers for the questions people usually have once the planner turns overwhelm into a specific recovery path."
        eyebrow="Questions after the plan"
        id="faq"
        title="Recovery planner FAQ"
      >
        <PremiumFaqList
          accent="#6EE7B7"
          intro="These answers help you use the path as a realistic planning tool: how to pace recovery, what to prioritize first, and how to read progress more compassionately."
          items={emotionalRecoveryFaqItems}
        />
      </SeoContentSection>
    </>
  );
}
