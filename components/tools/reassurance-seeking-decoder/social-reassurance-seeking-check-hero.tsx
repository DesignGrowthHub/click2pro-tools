import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import {
  heroPreviewResult,
  reassuranceSeekingMetadata,
} from "@/data/social-reassurance-seeking-check";
import styles from "./reassurance-seeking-decoder.module.css";
import { LiveReassurancePreview } from "./live-reassurance-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{reassuranceSeekingMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{reassuranceSeekingMetadata.title}</h1>
          <p className={styles.heroDescription}>{reassuranceSeekingMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {reassuranceSeekingMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-reassurance-decoder">
              Start Decoder
            </Link>
            <Link className={styles.secondaryButton} href="#sample-reassurance-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-reassurance-preview">
            <LiveReassurancePreview label="Live cycle preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
