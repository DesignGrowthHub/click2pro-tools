"use client";

import { usePathname } from "next/navigation";
import { getGeneratedToolInfographicBundle } from "@/data/tool-infographics/generated";
import type { ToolInfographicBundle, ToolInfographicSection } from "@/data/tool-infographics/schema";
import { ToolInfographicReveal } from "./tool-infographic-reveal";
import { ToolInfographicSvg } from "./tool-infographic-svg";
import styles from "./tool-infographics.module.css";

function getSlugFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? "";
}

function fallbackSectionTitle(section: ToolInfographicSection, slug: string) {
  const readableSlug = slug
    .split("-")
    .filter(Boolean)
    .map((chunk) => `${chunk.charAt(0).toUpperCase()}${chunk.slice(1)}`)
    .join(" ");

  return {
    eyebrow: section.family === "pressure-stack" ? "Pressure build" : "Pattern map",
    title: `${readableSlug} topic map`,
    summary: `A stable visual fallback for ${readableSlug.toLowerCase()}.`,
  };
}

function createFallbackBundle(slug: string): ToolInfographicBundle {
  const readableSlug = slug
    .split("-")
    .filter(Boolean)
    .map((chunk) => `${chunk.charAt(0).toUpperCase()}${chunk.slice(1)}`)
    .join(" ");
  const readableLower = readableSlug.toLowerCase();

  return {
    slug,
    title: readableSlug,
    cluster: "fallback",
    assetVersion: "fallback",
    assetKey: `fallback:${slug}`,
    sections: [
      {
        id: "infographic-one",
        family: "pathway-sequence",
        mode: "trigger-response-sequence",
        purpose: "mechanism-map",
        eyebrow: "Pattern sequence",
        title: `How ${readableLower} usually unfolds`,
        summary: `A stable fallback sequence for ${readableLower} until a saved infographic bundle is rebuilt.`,
        payload: {
          steps: [
            {
              label: "First cue",
              caption: `${readableSlug} usually starts with one earlier signal becoming active.`,
            },
            {
              label: "Stronger pull",
              caption: `The next shift makes ${readableLower} easier to notice in the moment.`,
            },
            {
              label: "Visible cost",
              caption: `Then the pattern starts showing up more clearly in daily life.`,
            },
            {
              label: "Next effect",
              caption: `If it keeps going, the pattern becomes harder to steady without a reset.`,
            },
          ],
        },
      },
      {
        id: "infographic-two",
        family: "signal-cluster",
        mode: "signal-distribution",
        purpose: "signal-cluster",
        eyebrow: "Signal cluster",
        title: `${readableSlug} leaves a cluster of visible signs`,
        summary: `A stable fallback signal map for ${readableLower} until the generated asset bundle is refreshed.`,
        payload: {
          centerLabel: readableSlug,
          signals: [
            { label: "Early shift", caption: `One of the first signs people notice around ${readableLower}.` },
            { label: "More effort", caption: `The pattern starts costing more energy or attention than it should.` },
            { label: "Spillover", caption: `The topic begins affecting the rest of the day more visibly.` },
            { label: "Harder reset", caption: `By this point, it usually takes more to feel steady again.` },
          ],
        },
      },
    ],
  };
}

export function ToolTopicInfographics() {
  const pathname = usePathname();
  const slug = getSlugFromPathname(pathname);
  const bundle = getGeneratedToolInfographicBundle(slug) ?? createFallbackBundle(slug);

  return (
    <div className={styles.stack} aria-label="Topic infographics">
      {bundle.sections.map((section: ToolInfographicSection) => {
        const fallback = fallbackSectionTitle(section, slug);

        return (
          <ToolInfographicReveal className={styles.reveal} key={`${bundle.assetKey}-${section.id}`}>
            {({ isVisible, replayKey }) => (
              <section className={styles.sectionCard} key={`${bundle.assetKey}-${section.id}-${replayKey}`}>
                <div className={styles.header}>
                  <p className={styles.eyebrow}>{section.eyebrow || fallback.eyebrow}</p>
                  <h3 className={styles.title}>{section.title || fallback.title}</h3>
                  <p className={styles.summary}>{section.summary || fallback.summary}</p>
                </div>

                <ToolInfographicSvg isVisible={isVisible} section={section} />
              </section>
            )}
          </ToolInfographicReveal>
        );
      })}
    </div>
  );
}
