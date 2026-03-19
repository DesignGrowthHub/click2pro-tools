import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { decisionToolMetadata, heroPreviewResult, simulatorScenarios } from "@/data/relationship-decision-simulator";
import styles from "./decision-fatigue-simulator.module.css";
import { LiveSimulatorPreview } from "./live-simulator-preview";

export function ToolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{decisionToolMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{decisionToolMetadata.title}</h1>
          <p className={styles.heroDescription}>{decisionToolMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {decisionToolMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-simulator">
              Start Simulator
            </Link>
            <Link className={styles.secondaryButton} href="#what-this-result-usually-means">
              See Sample Result
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />
          <LiveSimulatorPreview
            compact
            label="Live simulator preview"
            result={heroPreviewResult}
            totalScenarios={simulatorScenarios.length}
          />
        </div>
      </div>
    </section>
  );
}
