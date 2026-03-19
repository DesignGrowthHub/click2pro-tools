import Link from "next/link";
import { renderIcon } from "@/components/tools/icons";
import { heroPreviewResult, lifeBalanceMetadata } from "@/data/recovery-balance-visualizer";
import styles from "./life-balance-visualizer.module.css";
import { BalanceWheel } from "./balance-wheel";

export function ToolHero() {
  const previewStats = [
    { label: "Weakest zone", value: heroPreviewResult.weakestZone.label },
    { label: "Balance gap", value: heroPreviewResult.balanceGap.toString() },
    { label: "Recovery pressure", value: heroPreviewResult.recoveryPressure.toString() },
  ];

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.pageContainer} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>{lifeBalanceMetadata.eyebrow}</p>
          <h1 className={styles.heroTitle}>{lifeBalanceMetadata.title}</h1>
          <p className={styles.heroDescription}>{lifeBalanceMetadata.description}</p>

          <div className={styles.heroMetaRow}>
            {lifeBalanceMetadata.metadata.map((item) => (
              <div className={styles.heroMetaItem} key={item.label}>
                <span className={styles.heroMetaIcon}>{renderIcon(item.icon, styles.inlineIcon)}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#interactive-visualizer">
              Start Visualizer
            </Link>
            <Link className={styles.secondaryButton} href="#sample-map-preview">
              See Sample Map
            </Link>
          </div>
        </div>

        <div className={styles.heroVisualShell}>
          <div className={styles.heroGlowA} />
          <div className={styles.heroGlowB} />

          <div className={styles.heroPreviewPanel} id="sample-map-preview">
            <div className={styles.heroPreviewHeader}>
              <div>
                <p className={styles.heroPreviewEyebrow}>Live map preview</p>
                <h2 className={styles.heroPreviewTitle}>Current shape vs ideal support overlay</h2>
              </div>
              <span className={styles.previewBadge}>Balance index {heroPreviewResult.balanceIndex}</span>
            </div>

            <BalanceWheel compact label="Preview wheel" result={heroPreviewResult} showLegend={false} />

            <div className={styles.heroPreviewGrid}>
              {previewStats.map((item) => (
                <div className={styles.heroPreviewStat} key={item.label}>
                  <span className={styles.heroPreviewStatLabel}>{item.label}</span>
                  <span className={styles.heroPreviewStatValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
