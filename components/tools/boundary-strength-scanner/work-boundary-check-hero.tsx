import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { boundaryStrengthMetadata, heroPreviewResult } from "@/data/work-boundary-check";
import styles from "./boundary-strength-scanner.module.css";
import { LiveSignalPreview } from "./live-signal-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{boundaryStrengthMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{boundaryStrengthMetadata.title}</h1>
          <p className={styles.heroDescription}>{boundaryStrengthMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {boundaryStrengthMetadata.metadata.map((item) => (
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
            <LiveSignalPreview label="Live boundary preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
