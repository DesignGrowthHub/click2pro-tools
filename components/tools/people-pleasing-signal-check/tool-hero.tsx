import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, peoplePleasingMetadata } from "@/data/people-pleasing-signal-check";
import styles from "./people-pleasing-signal-check.module.css";
import { LiveSignalPreview } from "./live-signal-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{peoplePleasingMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{peoplePleasingMetadata.title}</h1>
          <p className={styles.heroDescription}>{peoplePleasingMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {peoplePleasingMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-signal-check">
              Start Check
            </Link>
            <Link className={styles.secondaryButton} href="#sample-signal-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-signal-preview">
            <LiveSignalPreview label="Live signal preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
