import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { focusToolMetadata, heroPreviewResult } from "@/data/discipline-friction-check";
import styles from "./focus-friction-audit.module.css";
import { FrictionProfilePreview } from "./friction-profile-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{focusToolMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{focusToolMetadata.title}</h1>
          <p className={styles.heroDescription}>{focusToolMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {focusToolMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-tool">
              Start Audit
            </Link>
            <Link className={styles.secondaryButton} href="#what-this-result-usually-means">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <FrictionProfilePreview label="Live audit preview" result={heroPreviewResult} />
        </div>
      </div>
    </section>
  );
}
