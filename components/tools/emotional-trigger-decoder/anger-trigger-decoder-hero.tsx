import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { emotionalTriggerMetadata, heroPreviewResult } from "@/data/anger-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";
import { LiveDecoderPreview } from "./live-decoder-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{emotionalTriggerMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{emotionalTriggerMetadata.title}</h1>
          <p className={styles.heroDescription}>{emotionalTriggerMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {emotionalTriggerMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-decoder">
              Start Decoding
            </Link>
            <Link className={styles.secondaryButton} href="#sample-decoder-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-decoder-preview">
            <LiveDecoderPreview label="Live decoder preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
