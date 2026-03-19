import { type UsageStat } from "@/data/tools-home";
import { renderIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type ValueMetricsProps = {
  stats: UsageStat[];
};

export function ValueMetrics({ stats }: ValueMetricsProps) {
  return (
    <section className={styles.section} id="momentum">
      <div className={styles.container}>
        <SectionHeading
          description="A few proof points that show wide use, repeat trust, and how quickly people reach a useful read inside the library."
          eyebrow="Momentum"
          title="A library built for repeat usefulness."
        />

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <article className={styles.statCard} key={stat.label}>
              <div className={styles.statTopRow}>
                <div className={styles.statIconWrap}>{renderIcon(stat.icon, styles.statIcon)}</div>
              </div>
              <p className={styles.statValue}>{stat.value}</p>
              <h3 className={styles.statLabel}>{stat.label}</h3>
              <p className={styles.statNote}>{stat.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
