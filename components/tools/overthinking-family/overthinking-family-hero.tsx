import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import type { OverthinkingFamilyTool } from "@/data/overthinking-family";
import styles from "@/components/tools/overthinking-loop-check/overthinking-loop-check.module.css";
import { MiniPatternPreview } from "@/components/tools/overthinking-loop-check/mini-pattern-preview";

type OverthinkingFamilyHeroProps = {
  tool: OverthinkingFamilyTool;
};

export function OverthinkingFamilyHero({ tool }: OverthinkingFamilyHeroProps) {
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
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <MiniPatternPreview label="Live pattern map preview" result={tool.heroPreviewResult} />
        </div>
      </div>
    </section>
  );
}
