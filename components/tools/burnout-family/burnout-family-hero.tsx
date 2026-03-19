import Link from "next/link";
import { ArrowUpRightIcon, renderIcon } from "@/components/tools/icons";
import {
  calculateBurnoutFamilyResult,
  getInitialBurnoutFamilyAnswers,
  type BurnoutFamilyTool,
} from "@/data/burnout-family";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";
import { BurnoutFamilyLivePreview } from "./burnout-family-live-preview";

type BurnoutFamilyHeroProps = {
  tool: BurnoutFamilyTool;
};

export function BurnoutFamilyHero({ tool }: BurnoutFamilyHeroProps) {
  const heroPreview = calculateBurnoutFamilyResult(tool, {
    ...getInitialBurnoutFamilyAnswers(),
    ...tool.heroPreviewAnswers,
  });

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{tool.toolMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{tool.toolMetadata.title}</h1>
          <p className={styles.heroDescription}>{tool.toolMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {tool.toolMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-tool">
              {tool.toolMetadata.primaryCta}
            </Link>
            <Link className={styles.secondaryButton} href="#what-this-result-usually-means">
              {tool.toolMetadata.secondaryCta}
              <ArrowUpRightIcon className={styles.inlineIcon} />
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroVisualBackdrop} />
          <BurnoutFamilyLivePreview label="Live signal preview" result={heroPreview} tool={tool} />
          <div className={styles.heroVisualNotes}>
            <div className={styles.heroVisualNote}>
              <span className={styles.heroVisualNoteLabel}>{tool.visualCopy.dial.label}</span>
              <span className={styles.heroVisualNoteValue}>{heroPreview.score}/100</span>
            </div>
            <div className={styles.heroVisualNote}>
              <span className={styles.heroVisualNoteLabel}>{tool.visualCopy.recovery.gapLabel}</span>
              <span className={styles.heroVisualNoteValue}>{heroPreview.recoveryGap} point gap</span>
            </div>
            <div className={styles.heroVisualNote}>
              <span className={styles.heroVisualNoteLabel}>Primary source</span>
              <span className={styles.heroVisualNoteValue}>
                {heroPreview.dominantSources[0]?.label ?? "Balanced load"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
