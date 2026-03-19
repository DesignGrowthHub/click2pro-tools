import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import {
  dailyFunctioningMetadata,
  heroPreviewResult,
} from "@/data/emotional-steadiness-check";
import styles from "./daily-functioning-stability-check.module.css";
import { LiveFunctioningPreview } from "./live-functioning-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{dailyFunctioningMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{dailyFunctioningMetadata.title}</h1>
          <p className={styles.heroDescription}>{dailyFunctioningMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {dailyFunctioningMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-daily-functioning-stability-check">
              Start Check
            </Link>
            <Link className={styles.secondaryButton} href="#sample-daily-functioning-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-daily-functioning-preview">
            <LiveFunctioningPreview label="Live stability preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
