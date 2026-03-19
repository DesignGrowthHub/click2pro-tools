import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, sleepPressureMetadata } from "@/data/evening-shutdown-check";
import styles from "./sleep-pressure-check.module.css";
import { LiveRecoveryPreview } from "./live-recovery-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{sleepPressureMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{sleepPressureMetadata.title}</h1>
          <p className={styles.heroDescription}>{sleepPressureMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {sleepPressureMetadata.metadata.map((item) => (
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
            <Link className={styles.secondaryButton} href="#sample-sleep-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-sleep-preview">
            <LiveRecoveryPreview label="Live recovery preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
