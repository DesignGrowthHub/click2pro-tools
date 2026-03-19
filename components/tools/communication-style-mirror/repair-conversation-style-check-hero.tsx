import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { communicationStyleMetadata, heroPreviewResult } from "@/data/repair-conversation-style-check";
import styles from "./communication-style-mirror.module.css";
import { LiveCommunicationPreview } from "./live-communication-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{communicationStyleMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{communicationStyleMetadata.title}</h1>
          <p className={styles.heroDescription}>{communicationStyleMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {communicationStyleMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-communication-style-mirror">
              Start Mirror
            </Link>
            <Link className={styles.secondaryButton} href="#sample-communication-style-preview">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <div className={styles.heroPreviewPanel} id="sample-communication-style-preview">
            <LiveCommunicationPreview label="Live communication preview" result={heroPreviewResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
