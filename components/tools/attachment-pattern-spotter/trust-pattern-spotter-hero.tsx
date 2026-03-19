import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { attachmentPatternMetadata, heroPreviewResult } from "@/data/trust-pattern-spotter";
import styles from "./attachment-pattern-spotter.module.css";
import { LiveProfilePreview } from "./live-profile-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{attachmentPatternMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{attachmentPatternMetadata.title}</h1>
          <p className={styles.heroDescription}>{attachmentPatternMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {attachmentPatternMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-profiler">
              Start Spotting
            </Link>
            <Link className={styles.secondaryButton} href="#sample-profile-preview">
              See Sample Profile
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-profile-preview">
            <LiveProfilePreview label="Live profile preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
