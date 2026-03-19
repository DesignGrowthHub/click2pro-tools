import type { DailyFunctioningResult } from "@/data/daily-functioning-stability-check";
import styles from "./daily-functioning-stability-check.module.css";

type DailySlipPointMapProps = {
  result: DailyFunctioningResult;
};

export function DailySlipPointMap({ result }: DailySlipPointMapProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Daily slip-point map</p>
        <h3 className={styles.visualTitle}>Where the day is most likely to lose steadiness and which parts of the operating rhythm need more protection first</h3>
        <p className={styles.visualCopy}>
          Slip points matter because the first wobble often becomes the rest of the day’s hidden cost. This map shows the zones where stability narrows fastest under load.
        </p>
      </div>

      <div className={styles.priorityPanelGrid}>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Strongest slip point</p>
          <h4 className={styles.priorityCardTitle}>{result.strongestSlipPoint.label}</h4>
          <p className={styles.signalBarDescription}>{result.strongestSlipPoint.description}</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Overall steadiness</p>
          <h4 className={styles.priorityCardTitle}>{result.overallSteadinessLevel}</h4>
          <p className={styles.signalBarDescription}>How stable the day feels before the first predictable wobble arrives.</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Rhythm consistency</p>
          <h4 className={styles.priorityCardTitle}>{result.rhythmConsistency}</h4>
          <p className={styles.signalBarDescription}>How consistently the day keeps its shape once the normal pressures of life enter it.</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Recovery margin</p>
          <h4 className={styles.priorityCardTitle}>{result.recoveryLevel}</h4>
          <p className={styles.signalBarDescription}>How much reset capacity is still available once the day has already asked something from you.</p>
        </div>
      </div>

      <div className={styles.drainMapGrid}>
        {result.slipPointScores.map((item) => (
          <div className={styles.drainMapCard} key={item.key}>
            <div className={styles.drainMapTop}>
              <span className={styles.drainMapTitle}>{item.label}</span>
              <span className={styles.drainMapValue}>{item.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${item.value}%`, background: item.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{item.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.visualFooterNote}>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Primary instability driver</p>
          <p className={styles.insightCopy}>{result.primaryInstabilityDriver.description}</p>
        </div>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Most useful reset direction</p>
          <p className={styles.insightCopy}>{result.mostUsefulDailyResetDirection.description}</p>
        </div>
      </div>
    </article>
  );
}
