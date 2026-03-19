import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { emotionalRecoveryMetadata, heroPreviewResult } from "@/data/burnout-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";
import { LivePlannerPreview } from "./live-planner-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{emotionalRecoveryMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{emotionalRecoveryMetadata.title}</h1>
          <p className={styles.heroDescription}>{emotionalRecoveryMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {emotionalRecoveryMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-planner">
              Build My Plan
            </Link>
            <Link className={styles.secondaryButton} href="#sample-planner-preview">
              See Sample Path
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-planner-preview">
            <LivePlannerPreview label="Live planner preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
