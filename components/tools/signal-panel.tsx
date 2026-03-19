import styles from "./tools-home.module.css";

export function SignalPanel() {
  return (
    <div className={styles.signalPanel} aria-hidden="true">
      <div className={styles.signalOrb} />
      <div className={styles.signalGrid} />
      <div className={styles.signalPrimaryCard}>
        <p className={styles.panelEyebrow}>Signal panel</p>
        <div className={styles.panelScoreRow}>
          <div>
            <p className={styles.panelScoreValue}>86</p>
            <p className={styles.panelScoreLabel}>Pattern clarity</p>
          </div>
          <span className={styles.panelTrend}>+12% calmer</span>
        </div>
        <div className={styles.panelWave}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={styles.signalSecondaryCard}>
        <div className={styles.panelMiniLabel}>Library signal</div>
        <div className={styles.panelMiniRow}>
          <span className={styles.panelMiniTag}>Focused tools</span>
          <span className={styles.panelMiniTag}>Fast readouts</span>
        </div>
        <div className={styles.signalBars}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={styles.signalNodeRow}>
        <div className={styles.signalNode}>
          <span className={styles.signalNodeDot} />
          <div>
            <p className={styles.signalNodeTitle}>Cognitive load</p>
            <p className={styles.signalNodeCopy}>Mapped</p>
          </div>
        </div>
        <div className={styles.signalNode}>
          <span className={styles.signalNodeDot} />
          <div>
            <p className={styles.signalNodeTitle}>Recovery cues</p>
            <p className={styles.signalNodeCopy}>Visible</p>
          </div>
        </div>
      </div>
    </div>
  );
}
