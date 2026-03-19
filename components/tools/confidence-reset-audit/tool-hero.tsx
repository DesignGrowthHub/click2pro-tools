import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { confidenceResetMetadata, heroPreviewResult } from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";
import { LiveConfidencePreview } from "./live-confidence-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{confidenceResetMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{confidenceResetMetadata.title}</h1>
          <p className={styles.heroDescription}>{confidenceResetMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {confidenceResetMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-confidence-audit">
              Start Audit
            </Link>
            <Link className={styles.secondaryButton} href="#sample-confidence-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-confidence-preview">
            <LiveConfidencePreview label="Live confidence preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
