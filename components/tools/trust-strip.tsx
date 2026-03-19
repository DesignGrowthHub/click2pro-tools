import { type TrustCard } from "@/data/tools-home";
import { MediaFrame } from "./media-frame";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type TrustStripProps = {
  cards: TrustCard[];
};

export function TrustStrip({ cards }: TrustStripProps) {
  const loopedCards = [...cards, ...cards];

  return (
    <section className={styles.trustSection} aria-label="Institution and credibility strip">
      <div className={styles.container}>
        <SectionHeading
          description="These tools are shaped around patterns seen in established care systems, so what you see here feels grounded, structured, and easier to trust when it matters."
          eyebrow="Trusted standards"
          title="Inspired by systems used in real clinical and research environments."
        />

        <div className={styles.trustShell}>
          <div className={styles.trustMarquee}>
            <div className={styles.trustTrack}>
              {loopedCards.map((card, index) => (
                <article className={styles.trustCard} key={`${card.title}-${index}`}>
                  <MediaFrame
                    alt={card.media.alt}
                    className={styles.trustMediaFrame}
                    fit={card.media.fit}
                    innerClassName={styles.trustMediaInner}
                    label={card.media.label}
                    ratio={card.media.ratio}
                    src={card.media.src}
                  />

                  <div className={styles.trustCardBottom}>
                    <p className={styles.trustLabel}>{card.title}</p>
                    <p className={styles.trustMeta}>{card.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
