import { type Testimonial } from "@/data/tools-home";
import { SectionHeading } from "./section-heading";
import styles from "./tools-home.module.css";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={styles.testimonialSection} id="testimonials">
      <div className={styles.container}>
        <SectionHeading
          description="A quick read from people who use the tools for clarity, steadier language, and practical next steps when a pattern feels hard to name."
          eyebrow="From the people using them"
          title="Useful enough to revisit. Calm enough to trust."
        />

        <div className={styles.testimonialShell}>
          <div className={styles.testimonialMarquee}>
            <div className={styles.testimonialTrack}>
              {loopedTestimonials.map((testimonial, index) => (
                <article className={styles.testimonialCard} key={`${testimonial.name}-${testimonial.topic}-${index}`}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialIdentity}>
                      <div className={styles.testimonialAvatar}>{testimonial.initials}</div>
                      <div className={styles.testimonialIdentityText}>
                        <p className={styles.testimonialName}>{testimonial.name}</p>
                        <p className={styles.testimonialLocation}>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>

                  <p className={styles.testimonialCategory}>{testimonial.label}</p>
                  <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className={styles.testimonialTopic}>{testimonial.topic}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
