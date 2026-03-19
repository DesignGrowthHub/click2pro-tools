import type { Metadata } from "next";
import { LegalTemplate } from "@/components/tools/legal-template";

export const metadata: Metadata = {
  title: "Disclaimer | Click2Pro Tools",
  description: "Read the Click2Pro Tools disclaimer, including what the tools are for, what they cannot do, and when to seek urgent professional help instead.",
};

export default function DisclaimerPage() {
  return (
    <LegalTemplate
      eyebrow="Disclaimer"
      intro="Click2Pro Tools is built for reflection, pattern recognition, and psychoeducation. This disclaimer explains the limits of the platform so the tools are used responsibly."
      sections={[
        {
          title: "Educational use only",
          body: [
            "The tools, scores, summaries, visuals, and articles on this site are for learning and self-reflection.",
            "They are not medical advice, legal advice, or a replacement for therapy, diagnosis, or treatment.",
          ],
        },
        {
          title: "No diagnosis or emergency support",
          body: [
            "Click2Pro Tools does not diagnose mental health conditions and is not an emergency service.",
            "If you are in crisis, feel unsafe, may harm yourself or someone else, or need urgent care, contact local emergency services or a crisis line right away instead of relying on this website.",
          ],
        },
        {
          title: "Results are directional, not final",
          body: [
            "A score or result label is meant to help you notice a pattern. It is not proof of a condition, a guarantee of accuracy, or a final explanation for what you are going through.",
            "The most useful way to treat a result is as a structured prompt for reflection, not as a verdict about who you are.",
          ],
        },
        {
          title: "The tools do not know your whole life",
          body: [
            "No self-guided tool can fully understand your history, relationships, health, environment, or risk level.",
            "If a result feels serious, confusing, or emotionally heavy, consider using it as a starting point for a conversation with a qualified professional.",
          ],
        },
        {
          title: "No guarantee of outcomes",
          body: [
            "Click2Pro Tools does not promise that using the site will improve your mental health, solve a relationship issue, restore performance, or prevent burnout.",
            "The platform aims to increase clarity, not to guarantee results.",
          ],
        },
        {
          title: "Examples and stories",
          body: [
            "Short stories or everyday scenarios on the site are illustrative. They are included to make patterns easier to recognize, not to represent named real clients or clinical records.",
          ],
        },
        {
          title: "Use your judgment",
          body: [
            "Please use common sense and your own judgment when reading tool output. If something feels serious, worsening, or unsafe, seek real-world support instead of using the site as your only source of guidance.",
          ],
        },
      ]}
      title="Disclaimer for Click2Pro Tools"
    />
  );
}
