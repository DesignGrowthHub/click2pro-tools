import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, overthinkingToolMetadata } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";
import { MiniPatternPreview } from "./mini-pattern-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{overthinkingToolMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{overthinkingToolMetadata.title}</h1>
          <p className={styles.heroDescription}>{overthinkingToolMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {overthinkingToolMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-tool">
              Start Check
            </Link>
            <Link className={styles.secondaryButton} href="#what-this-result-usually-means">
              See Example Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <MiniPatternPreview label="Live loop map preview" result={heroPreviewResult} />
        </div>
      </div>
    </section>
  );
}
