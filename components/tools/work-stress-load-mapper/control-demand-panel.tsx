import type { WorkStressResult } from "@/data/work-stress-load-mapper";
import styles from "./work-stress-load-mapper.module.css";

type ControlDemandPanelProps = {
  result: WorkStressResult;
};

export function ControlDemandPanel({ result }: ControlDemandPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Control vs demand panel</p>
        <h3 className={styles.visualTitle}>How demand intensity compares with control, fragmentation, and the burden carrying the rest of the load</h3>
        <p className={styles.visualCopy}>
          Work stress gets much heavier when demand is high and control is low. This panel makes that relationship visible alongside the biggest supporting pressure lines.
        </p>
      </div>

      <div className={styles.priorityPanelGrid}>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Demand density</p>
          <h4 className={styles.priorityCardTitle}>{result.dimensions.demandDensity}</h4>
          <p className={styles.signalBarDescription}>How packed the day feels with volume, urgency, and responsibility.</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Control level</p>
          <h4 className={styles.priorityCardTitle}>{result.controlLevel}</h4>
          <p className={styles.signalBarDescription}>How much actual steering room you currently feel inside the work.</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Control deficit</p>
          <h4 className={styles.priorityCardTitle}>{result.dimensions.controlDeficit}</h4>
          <p className={styles.signalBarDescription}>How much the role is asking without giving enough pace or order back.</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Recovery cost</p>
          <h4 className={styles.priorityCardTitle}>{result.recoveryCost}</h4>
          <p className={styles.signalBarDescription}>How much the work pattern is making it harder to come down after hours.</p>
        </div>
      </div>

      <div className={styles.drainMapGrid}>
        {[
          {
            key: "ambiguity",
            label: "Ambiguity pressure",
            value: result.ambiguityPressure,
            description: "How much unclear ownership or unclear success criteria are inflating the load.",
            accent: "#C4B5FD",
          },
          {
            key: "switching",
            label: "Switching load",
            value: result.switchingLoad,
            description: "How much continuity is being broken by interruptions, pivots, or reactive flow.",
            accent: "#FCD34D",
          },
          {
            key: "people",
            label: "People pressure",
            value: result.peoplePressureLevel,
            description: "How much responsiveness, tone management, or other people’s urgency are amplifying the stress.",
            accent: "#93C5FD",
          },
          {
            key: "invisible",
            label: "Invisible burden",
            value: result.invisibleBurdenLevel,
            description: "How much uncounted or underseen carrying is sitting behind the visible role.",
            accent: "#FB7185",
          },
        ].map((item) => (
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
          <p className={styles.insightEyebrow}>Heaviest concentration zone</p>
          <p className={styles.insightCopy}>{result.heaviestConcentrationZone.description}</p>
        </div>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Most useful adjustment</p>
          <p className={styles.insightCopy}>{result.mostUsefulWorkLoadAdjustment.description}</p>
        </div>
      </div>
    </article>
  );
}
