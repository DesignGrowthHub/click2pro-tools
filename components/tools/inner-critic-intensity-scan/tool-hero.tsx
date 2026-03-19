import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, innerCriticMetadata } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";
import { LiveInnerCriticPreview } from "./live-inner-critic-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{innerCriticMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{innerCriticMetadata.title}</h1>
          <p className={styles.heroDescription}>{innerCriticMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {innerCriticMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-inner-critic-scan">
              Start Scan
            </Link>
            <Link className={styles.secondaryButton} href="#sample-inner-critic-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-inner-critic-preview">
            <LiveInnerCriticPreview label="Live inner-voice preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
