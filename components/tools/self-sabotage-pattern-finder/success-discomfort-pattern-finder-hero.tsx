import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, selfSabotageMetadata } from "@/data/success-discomfort-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";
import { LiveProgressPreview } from "./live-progress-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{selfSabotageMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{selfSabotageMetadata.title}</h1>
          <p className={styles.heroDescription}>{selfSabotageMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {selfSabotageMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-self-sabotage-finder">
              Start Finder
            </Link>
            <Link className={styles.secondaryButton} href="#sample-self-sabotage-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-self-sabotage-preview">
            <LiveProgressPreview label="Live progress preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
