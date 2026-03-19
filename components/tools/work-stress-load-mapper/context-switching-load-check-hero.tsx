import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, workStressMetadata } from "@/data/context-switching-load-check";
import styles from "./work-stress-load-mapper.module.css";
import { LiveWorkStressPreview } from "./live-work-stress-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{workStressMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{workStressMetadata.title}</h1>
          <p className={styles.heroDescription}>{workStressMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {workStressMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-work-stress-load-mapper">
              Start Mapping
            </Link>
            <Link className={styles.secondaryButton} href="#sample-work-stress-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-work-stress-preview">
            <LiveWorkStressPreview label="Live work-stress preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
