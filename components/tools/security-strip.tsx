import { type SecurityCard } from "@/data/tools-home";
import { renderIcon } from "./icons";
import { MediaFrame } from "./media-frame";
import styles from "./tools-home.module.css";

type SecurityStripProps = {
  cards: SecurityCard[];
};

export function SecurityStrip({ cards }: SecurityStripProps) {
  return (
    <section className={styles.securitySection} aria-label="Security and privacy">
      <div className={styles.container}>
        <div className={styles.securityShell}>
          <div className={styles.securityHeaderCompact}>
            <p className={styles.securityEyebrowCompact}>Security and privacy</p>
            <h2 className={styles.securityTitleCompact}>A compact trust strip for privacy, access, and proof.</h2>
            <p className={styles.securityDescriptionCompact}>
              Compact by design so privacy, access, and verification assets can live here later without making the page heavy.
            </p>
          </div>

          <div className={styles.securityGrid}>
            {cards.map((card) => (
              <article className={styles.securityCard} key={card.title}>
                <div className={styles.securityCardTop}>
                  <div className={styles.securityCardIcon}>{renderIcon(card.icon, styles.securityCardIconSvg)}</div>
                </div>
                <MediaFrame
                  alt={card.media.alt}
                  className={styles.securityMediaFrame}
                  fit={card.media.fit}
                  innerClassName={styles.securityMediaInner}
                  label={card.media.label}
                  ratio={card.media.ratio}
                  src={card.media.src}
                />
                <h3 className={styles.securityCardTitle}>{card.title}</h3>
                <p className={styles.securityCardCopy}>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
