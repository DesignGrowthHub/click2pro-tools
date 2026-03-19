import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, relationshipClarityMetadata } from "@/data/mixed-signals-checker";
import styles from "./relationship-clarity-check.module.css";
import { LiveRelationshipPreview } from "./live-relationship-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{relationshipClarityMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{relationshipClarityMetadata.title}</h1>
          <p className={styles.heroDescription}>{relationshipClarityMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {relationshipClarityMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-clarity-check">
              Start Check
            </Link>
            <Link className={styles.secondaryButton} href="#sample-clarity-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-clarity-preview">
            <LiveRelationshipPreview label="Live relationship-signal preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
