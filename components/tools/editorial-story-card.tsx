import styles from "./editorial-story-card.module.css";

export type EditorialStory = {
  eyebrow: string;
  title: string;
  quote: string;
  takeaway: string;
  toneLabel?: string;
  accent?: string;
};

type EditorialStoryCardProps = {
  story: EditorialStory;
};

export function EditorialStoryCard({ story }: EditorialStoryCardProps) {
  const toneLabel = story.toneLabel ?? "Real-life pattern";

  return (
    <aside
      aria-label={`${story.title} real-life pattern`}
      className={styles.storyCard}
      data-story-section="true"
      style={{ ["--story-accent" as string]: story.accent ?? "#93c5fd" }}
    >
      <div className={styles.topRow}>
        <p className={styles.eyebrow}>{story.eyebrow}</p>
        <span className={styles.toneChip}>{toneLabel}</span>
      </div>
      <h3 className={styles.title}>{story.title}</h3>
      <p className={styles.quote}>{story.quote}</p>
      <div className={styles.footer}>
        <p className={styles.footerLabel}>Why it matters</p>
        <p className={styles.footerText}>{story.takeaway}</p>
      </div>
    </aside>
  );
}
