"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon } from "./icons";
import {
  buildToolHref,
  getClusterForTool,
  getRecommendedLiveTools,
  inferToolFormat,
  liveToolMap,
  type LiveToolSlug,
  type ToolItem,
} from "@/data/tools-home";
import ecosystemStyles from "./tool-page-ecosystem.module.css";

type ContextCard = {
  label: string;
  title: string;
  body: string;
};

type ContextSection = {
  eyebrow: string;
  title: string;
  description: string;
  cards: ContextCard[];
};

function getToolSlugFromPath(pathname: string | null) {
  if (!pathname || !pathname.startsWith("/tools/")) {
    return null;
  }

  const slug = pathname.replace("/tools/", "").split("/")[0];

  if (!slug || !(slug in liveToolMap)) {
    return null;
  }

  return slug as LiveToolSlug;
}

function buildContextSection(tool: ToolItem): ContextSection {
  const cluster = getClusterForTool(tool);
  const sections: Record<string, ContextSection> = {
    "burnout-mental-fatigue": {
      eyebrow: "What people often miss first",
      title: `How ${tool.title.toLowerCase()} usually shows up before it becomes obvious`,
      description:
        "Most burnout-style patterns start quietly. These are the earlier signs people often explain away as a busy week or a temporary dip.",
      cards: [
        {
          label: "Early sign",
          title: "You still perform, but it costs more",
          body: "Work still gets done, but focus takes longer to gather, small tasks feel heavier, and recovery no longer fully resets you by the next day.",
        },
        {
          label: "What gets misread",
          title: "Tired is not the full story",
          body: `${tool.title} matters because the burden is often cognitive and emotional too, not only physical tiredness.`,
        },
        {
          label: "Why it grows",
          title: "The system keeps carrying yesterday",
          body: "Once the evening no longer clears the day, strain starts stacking quietly under normal responsibilities.",
        },
      ],
    },
    "overthinking-anxiety": {
      eyebrow: "Why this keeps repeating",
      title: `What often keeps ${tool.title.toLowerCase()} running longer than expected`,
      description:
        "These loops usually stay alive because the mind keeps trying to get certainty, relief, or perfect closure from the same thought path.",
      cards: [
        {
          label: "Loop fuel",
          title: "The brain mistakes more thinking for more control",
          body: "The thought loop can feel useful in the moment, even when it is only increasing pressure and replay.",
        },
        {
          label: "Hidden cost",
          title: "Relief keeps getting pushed one step away",
          body: `${tool.title} tends to grow when every new check, replay, or reassurance move creates only a few seconds of calm.`,
        },
        {
          label: "What changes first",
          title: "Mental space shrinks before mood crashes",
          body: "People often notice less focus, less patience, and less room inside normal moments before they call it anxiety.",
        },
      ],
    },
    "focus-productivity": {
      eyebrow: "How this shows up in daily life",
      title: `What ${tool.title.toLowerCase()} can quietly affect next`,
      description:
        "Focus and follow-through patterns often spread into planning, self-trust, and emotional energy long before people name the real friction.",
      cards: [
        {
          label: "Daily impact",
          title: "Simple tasks start feeling strangely expensive",
          body: "The task may be small, but getting started, keeping direction, or returning after interruption begins to cost more than expected.",
        },
        {
          label: "Common confusion",
          title: "It gets called laziness too quickly",
          body: `${tool.title} is often a structure problem, an energy problem, or an overload problem before it is a motivation problem.`,
        },
        {
          label: "What tends to follow",
          title: "Avoidance grows after repeated friction",
          body: "Once enough false starts pile up, dread begins showing up before the work itself even begins.",
        },
      ],
    },
    "confidence-self-perception": {
      eyebrow: "What people usually get wrong",
      title: `What ${tool.title.toLowerCase()} is often confused with`,
      description:
        "Confidence patterns are easy to flatten into one label. In practice, the issue is often more specific and more workable than that.",
      cards: [
        {
          label: "Common confusion",
          title: "Low confidence is not always low ability",
          body: "Many people know what to do. The strain sits in hesitation, self-pressure, or how hard it is to recover after being seen or judged.",
        },
        {
          label: "What makes it quieter",
          title: "Competence can hide the pattern",
          body: `${tool.title} often matters most when the person still looks capable from the outside.`,
        },
        {
          label: "Where it spreads",
          title: "Decision quality changes next",
          body: "Once self-trust thins, decisions become slower, more defensive, or more dependent on outside reassurance.",
        },
      ],
    },
    "relationships-attachment": {
      eyebrow: "A common real-life drift",
      title: `What people often notice around ${tool.title.toLowerCase()} before they have words for it`,
      description:
        "Relationship patterns usually become visible through everyday interpretation load, not only through one big conflict or one dramatic moment.",
      cards: [
        {
          label: "Often first",
          title: "You start reading between lines more than you want to",
          body: "A simple message, delay, or change in tone begins carrying more emotional weight than it should.",
        },
        {
          label: "What gets harder",
          title: "The relationship becomes mentally expensive",
          body: `${tool.title} often matters when the bond asks for too much decoding, guarding, or uncertainty management.`,
        },
        {
          label: "Why it lingers",
          title: "Hope and confusion can coexist",
          body: "That combination is what makes many attachment and relationship patterns so hard to call clearly at first.",
        },
      ],
    },
    "boundaries-people-pleasing": {
      eyebrow: "What makes this harder to notice",
      title: `Why ${tool.title.toLowerCase()} can look "normal" for too long`,
      description:
        "Boundary strain often hides inside helpfulness, loyalty, politeness, or being the person who keeps things smooth.",
      cards: [
        {
          label: "Common mask",
          title: "It can look like being nice",
          body: "The issue is not kindness. The issue is when self-protection keeps getting traded away to keep tension low.",
        },
        {
          label: "What builds quietly",
          title: "Resentment usually comes later",
          body: `${tool.title} often starts as over-accommodation and only becomes obvious when exhaustion or frustration has already built up.`,
        },
        {
          label: "Why it repeats",
          title: "Old roles can make the limit feel negotiable",
          body: "History, obligation, or approval pressure can make even simple boundaries feel emotionally expensive to hold.",
        },
      ],
    },
    "emotional-triggers-reactions": {
      eyebrow: "What makes the pattern feel bigger",
      title: `What usually expands the impact of ${tool.title.toLowerCase()}`,
      description:
        "The first emotional spike is often only part of the story. The larger cost usually shows up in what keeps running afterward.",
      cards: [
        {
          label: "After-effect",
          title: "Recovery can cost more than the trigger itself",
          body: "The moment may pass quickly, but tension, replay, irritability, or shutdown can keep carrying the activation forward.",
        },
        {
          label: "Common confusion",
          title: "Quiet activation still counts",
          body: `${tool.title} does not need an outward explosion to be real. Internal strain can be just as disruptive.`,
        },
        {
          label: "Why it lingers",
          title: "Ambiguity leaves the system unfinished",
          body: "Unclear meaning, weak repair, or shame after the moment can keep the reaction alive longer than expected.",
        },
      ],
    },
    "recovery-reset": {
      eyebrow: "What helps most early",
      title: `What ${tool.title.toLowerCase()} is usually trying to tell you first`,
      description:
        "Recovery patterns become easier to work with when you catch the early signals instead of waiting for a hard stop.",
      cards: [
        {
          label: "First clue",
          title: "You stop coming back fully",
          body: "Sleep, time off, or quiet moments happen, but they do not restore the same steadiness they used to.",
        },
        {
          label: "Common mistake",
          title: "People treat recovery like reward instead of upkeep",
          body: `${tool.title} becomes useful when recovery is viewed as part of functioning, not something you earn after collapse.`,
        },
        {
          label: "What follows next",
          title: "Small pressure hits feel bigger",
          body: "When capacity is low, even ordinary demands begin landing harder and taking longer to clear.",
        },
      ],
    },
    "daily-functioning-stability": {
      eyebrow: "How instability usually appears",
      title: `What people notice around ${tool.title.toLowerCase()} before they call it a pattern`,
      description:
        "Daily-functioning strain usually shows up as inconsistency, not total failure. The issue is the unpredictability and effort cost.",
      cards: [
        {
          label: "Early clue",
          title: "Some days feel normal, some days fall apart fast",
          body: "That unevenness makes the pattern easy to dismiss, even when it is already affecting work, home life, or self-trust.",
        },
        {
          label: "What gets misread",
          title: "Inconsistency is not indifference",
          body: `${tool.title} often sits closer to energy variability, emotional load, or structural friction than to not caring.`,
        },
        {
          label: "Why it matters",
          title: "Planning gets harder when the baseline keeps moving",
          body: "Once stability drops, even good intentions become harder to turn into repeatable follow-through.",
        },
      ],
    },
    "decision-making-clarity": {
      eyebrow: "What people often confuse this with",
      title: `Why ${tool.title.toLowerCase()} is not just about "being indecisive"`,
      description:
        "Decision strain is often about overload, emotional cost, unclear trade-offs, or pressure, not a character flaw.",
      cards: [
        {
          label: "Common confusion",
          title: "More options does not always mean more freedom",
          body: "Too many variables can quickly turn a simple choice into a draining mental loop.",
        },
        {
          label: "Under pressure",
          title: "The body joins the decision",
          body: `${tool.title} often picks up tension, urgency, and regret-avoidance, not only thought patterns.`,
        },
        {
          label: "What helps",
          title: "Clarity grows when the real decision is named",
          body: "Many people are stuck because they are trying to solve three hidden decisions at once.",
        },
      ],
    },
    "communication-conflict": {
      eyebrow: "What changes under pressure",
      title: `How ${tool.title.toLowerCase()} usually shifts once a conversation gets loaded`,
      description:
        "Communication patterns are easiest to misread when emotion, urgency, or old relational history changes the way the message comes out.",
      cards: [
        {
          label: "First shift",
          title: "Tone changes before the message does",
          body: "People often notice the conversation feels off before they can explain exactly what got distorted.",
        },
        {
          label: "What gets missed",
          title: "Repair matters as much as the original sentence",
          body: `${tool.title} is often most useful when you want to understand what happens after the first awkward or tense exchange.`,
        },
        {
          label: "Why it repeats",
          title: "Pressure makes old patterns faster",
          body: "The same softening, sharpness, over-explaining, or shutdown can return before you fully notice it.",
        },
      ],
    },
    "work-stress-performance": {
      eyebrow: "What work pressure often hides behind",
      title: `What makes ${tool.title.toLowerCase()} harder to name at work`,
      description:
        "Work strain often looks like a personal problem when the real issue is how demands, ambiguity, interruptions, and low control are combining.",
      cards: [
        {
          label: "Common confusion",
          title: "Volume is not the only pressure source",
          body: "A person can be carrying role ambiguity, invisible work, or context-switching load even when the calendar does not look extreme.",
        },
        {
          label: "What usually lands next",
          title: "Recovery stays expensive after work ends",
          body: `${tool.title} often matters when the load keeps following the person into the evening.`,
        },
        {
          label: "Why it matters",
          title: "The system starts spending energy on coordination",
          body: "Once work becomes structurally noisy, even capable people begin burning effort just to keep track of the moving parts.",
        },
      ],
    },
  };

  return sections[cluster.slug] ?? {
    eyebrow: "A useful extra read",
    title: `What people usually notice around ${tool.title.toLowerCase()}`,
    description:
      "This section gives a quick practical read of how the pattern usually behaves outside the score so the page stays useful after the main report.",
    cards: [
      {
        label: "Often first",
        title: "The pattern becomes noticeable through effort cost",
        body: "Something that used to feel ordinary starts taking more explanation, more emotional energy, or more recovery than it should.",
      },
      {
        label: "Common confusion",
        title: "People often blame themselves too quickly",
        body: `${tool.title} is usually easier to work with once the pattern is named clearly instead of being treated like a personal flaw.`,
      },
      {
        label: "What helps next",
        title: "A clear next tool is often better than more guessing",
        body: "That is why the page also keeps the most relevant adjacent tools close by instead of asking people to restart the search from zero.",
      },
    ],
  };
}

function ToolPageEcosystem({ slug }: { slug: LiveToolSlug }) {
  const tool = liveToolMap[slug];
  const recommendations = getRecommendedLiveTools(slug, 4);
  const contextSection = buildContextSection(tool);

  return (
    <div className={ecosystemStyles.suite}>
      <section className={ecosystemStyles.section} aria-label={`${tool.title} deeper context`}>
        <div className={ecosystemStyles.heading}>
          <p className={ecosystemStyles.eyebrow}>{contextSection.eyebrow}</p>
          <h2 className={ecosystemStyles.title}>{contextSection.title}</h2>
          <p className={ecosystemStyles.description}>
            {contextSection.description}
          </p>
        </div>

        <div className={ecosystemStyles.recommendationGrid}>
          {contextSection.cards.map((card) => (
            <article className={ecosystemStyles.recommendationCard} key={card.title}>
              <p className={ecosystemStyles.recommendationMeta}>{card.label}</p>
              <h3 className={ecosystemStyles.recommendationTitle}>{card.title}</h3>
              <p className={ecosystemStyles.recommendationDescription}>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={ecosystemStyles.section} aria-label={`${tool.title} related exploration`}>
        <div className={ecosystemStyles.heading}>
          <p className={ecosystemStyles.eyebrow}>Continue exploring this pattern</p>
          <h2 className={ecosystemStyles.title}>The next most relevant tools after {tool.title.toLowerCase()}.</h2>
          <p className={ecosystemStyles.description}>
            These links stay close to the same topic thread, so the next click helps explain the surrounding pattern instead of dropping you into an unrelated page.
          </p>
        </div>

        <div className={ecosystemStyles.recommendationGrid}>
          {recommendations.map((recommendedTool) => (
            <article className={ecosystemStyles.recommendationCard} key={recommendedTool.slug}>
              <p className={ecosystemStyles.recommendationMeta}>{getClusterForTool(recommendedTool).title}</p>
              <h3 className={ecosystemStyles.recommendationTitle}>{recommendedTool.title}</h3>
              <p className={ecosystemStyles.recommendationDescription}>{recommendedTool.description}</p>
              <div className={ecosystemStyles.recommendationFooter}>
                <span className={ecosystemStyles.recommendationTag}>{inferToolFormat(recommendedTool)}</span>
                <Link
                  className={ecosystemStyles.recommendationLink}
                  href={buildToolHref({
                    categorySlug: recommendedTool.categorySlug,
                    slug: recommendedTool.slug,
                  })}
                >
                  Try this next
                  <ArrowUpRightIcon className={ecosystemStyles.inlineIcon} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function FooterRouteEnhancements() {
  const pathname = usePathname();
  const slug = getToolSlugFromPath(pathname);

  if (!slug) {
    return null;
  }

  return <ToolPageEcosystem slug={slug} />;
}
