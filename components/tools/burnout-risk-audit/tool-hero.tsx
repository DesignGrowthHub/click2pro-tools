import Link from "next/link";
import {
  burnoutToolMetadata,
  calculateBurnoutAudit,
  getInitialBurnoutAnswers,
} from "@/data/burnout-risk-audit";
import { ArrowUpRightIcon, renderIcon } from "@/components/tools/icons";
import { LiveSignalPreview } from "./live-signal-preview";
import styles from "./burnout-risk-audit.module.css";

const heroPreview = calculateBurnoutAudit({
  ...getInitialBurnoutAnswers(),
  emotionalDrain: "often",
  eveningEnergy: 28,
  switchOff: "difficult",
  sleepRestoration: "inconsistent",
  taskHeaviness: "often",
  drainSources: ["workload", "overthinking", "lack-of-rest"],
  emotionalDetachment: "sometimes",
  recoverySpeed: "slowly",
  concentrationDrop: 62,
  motivationDrop: 46,
  currentState: "increasingly-tired",
});

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{burnoutToolMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{burnoutToolMetadata.title}</h1>
          <p className={styles.heroDescription}>{burnoutToolMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {burnoutToolMetadata.metadata.map((item) => (
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
            <Link className={styles.secondaryButton} href="#what-burnout-load-means">
              See How It Works
              <ArrowUpRightIcon className={styles.inlineIcon} />
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroVisualBackdrop} />
          <LiveSignalPreview label="Live signal preview" result={heroPreview} />
          <div className={styles.heroVisualNotes}>
            <div className={styles.heroVisualNote}>
              <span className={styles.heroVisualNoteLabel}>Burnout load dial</span>
              <span className={styles.heroVisualNoteValue}>{heroPreview.score}/100</span>
            </div>
            <div className={styles.heroVisualNote}>
              <span className={styles.heroVisualNoteLabel}>Recovery gap</span>
              <span className={styles.heroVisualNoteValue}>{heroPreview.recoveryGap} point gap</span>
            </div>
            <div className={styles.heroVisualNote}>
              <span className={styles.heroVisualNoteLabel}>Primary source</span>
              <span className={styles.heroVisualNoteValue}>{heroPreview.dominantSources[0]?.label ?? "Balanced load"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
