import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import {
  heroPreviewResult,
  resentmentBuildupMetadata,
} from "@/data/unspoken-needs-accumulation-check";
import styles from "./resentment-buildup-tracker.module.css";
import { LiveResentmentPreview } from "./live-resentment-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{resentmentBuildupMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{resentmentBuildupMetadata.title}</h1>
          <p className={styles.heroDescription}>{resentmentBuildupMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {resentmentBuildupMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-resentment-tracker">
              Start Tracking
            </Link>
            <Link className={styles.secondaryButton} href="#sample-resentment-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-resentment-preview">
            <LiveResentmentPreview label="Live buildup preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
