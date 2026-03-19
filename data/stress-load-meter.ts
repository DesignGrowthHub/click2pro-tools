import { buildToolHref } from "./tools-home";
import type { BurnoutFamilyTool } from "./burnout-family";

export const stressLoadMeterTool: BurnoutFamilyTool = {
  slug: "stress-load-meter",
  categorySlug: "stress-burnout",
  pageMetadata: {
    title: "Stress Load Meter: Check What’s Driving Your Stress Load Right Now",
    description:
      "Use the Stress Load Meter to see whether your stress is coming from constant demand, recovery drag, mental overload, or emotional spillover instead of treating all stress like one thing.",
    keywords: [
      "stress load meter",
      "what is causing my stress",
      "stress level check tool",
      "stress load assessment",
      "why do i feel stressed all the time",
      "stress source checker",
    ],
    openGraphTitle: "Stress Load Meter",
    openGraphDescription:
      "A premium interactive tool for separating demand pressure, recovery drag, cognitive overload, and emotional spillover inside stress.",
    twitterTitle: "Stress Load Meter",
    twitterDescription:
      "Check what is actually driving your stress load instead of treating all pressure like one problem.",
  },
  toolMetadata: {
    eyebrow: "STRESS PRESSURE TOOL",
    title: "Stress Load Meter",
    description:
      "Check whether your stress is coming from stacked demand, weak recovery, mental overload, emotional spillover, or hidden pressure you keep carrying. This tool measures stress as a load pattern, not just a feeling.",
    metadata: [
      { icon: "time", label: "2-4 minutes" },
      { icon: "signal", label: "Free tool" },
      { icon: "privacy", label: "Private by design" },
    ],
    primaryCta: "Start Meter",
    secondaryCta: "See Stress Signals",
  },
  experienceCopy: {
    sectionTitle: "A premium stress-load scanner built to show where pressure is stacking and why your system keeps feeling tighter than the day itself suggests",
    sectionDescription:
      "One stress signal at a time. Large controls, calm motion, a live load preview, and deterministic scoring underneath the experience so the result feels practical instead of vague.",
    progressEyebrow: "Stress load meter",
    sidebarStatusEyebrow: "Meter status",
    sidebarStatusTitle: "stress markers mapped",
    sidebarStatusDescription:
      "Each answer sharpens the stress picture by showing whether the main issue is demand, recovery drag, mental congestion, or emotional spillover.",
    sidebarEmergingEyebrow: "Emerging stress read",
    sidebarEmergingDescription:
      "The preview redraws after every answer so you can see the structure of the pressure before the full report appears.",
    footerPending:
      "Answer for how the load behaves on a normal pressured week, not only for your single hardest recent day.",
    footerComplete:
      "Result unlocked. You can still adjust any answer and the stress-load visuals will redraw immediately.",
    revealLabel: "Reveal Meter",
    metaChips: ["Demand vs recovery", "Source split", "Private by design"],
  },
  resultCopy: {
    sectionTitle: "A stress-load report that shows what is piling up, what is lagging behind, and which form of pressure is costing you most",
    sectionDescription:
      "The score is useful, but the deeper read comes from the top strain dimension, the source cluster feeding it, and the recovery gap sitting underneath the visible stress.",
    reportLabel: "Stress-load report",
    scoreLabel: "Stress load score",
    standoutLabel: "What stands out",
    nextStepLabel: "What to relieve first",
    retakeLabel: "Retake Meter",
  },
  visualCopy: {
    sectionTitle: "Four visual reads of how your stress is distributed, where recovery lags, and what kind of pressure is driving the strain",
    sectionDescription:
      "The report is more than a score. These views show whether stress is behaving like compressed demand, thin recovery, noisy cognition, or emotional spillover that keeps the system activated.",
    dial: {
      eyebrow: "Stress load dial",
      title: "Overall stress concentration",
      copy:
        "A quick visual read of how saturated the current stress pattern looks once demand, recovery, cognition, and emotional pressure are weighted together.",
      label: "Stress load",
      caption: "Live stress load",
    },
    signalBars: {
      eyebrow: "4-dimension signal bars",
      title: "Where the stress load is concentrating",
      copy:
        "These bars separate the actual strain pattern into demand pressure, recovery drag, cognitive overload, and emotional spillover.",
    },
    recovery: {
      eyebrow: "Recovery lag chart",
      title: "Is recovery keeping pace with the stress?",
      copy:
        "Stress becomes heavier when demand keeps rising but the system never gets fully back underneath it. This chart shows whether that lag is small, growing, or running the experience.",
      loadLabel: "Current stress",
      recoveryLabel: "Recovery capacity",
      gapLabel: "Recovery lag",
      gapInsight: (result) =>
        result.recoveryGap > 0
          ? `Your current recovery lag is ${result.recoveryGap} points, which suggests the pressure is lingering after the main demands end.`
          : "Stress and recovery look relatively matched right now, which usually means the system still has some usable flex left.",
    },
    sourceSplit: {
      eyebrow: "Pressure source split",
      title: "Where the strain is clustering",
      copy:
        "This view translates your selected stress drivers into a cleaner source map, so the result shows what kind of pressure is actually accumulating.",
      insight: (result) =>
        `The strongest source cluster currently leans toward ${result.dominantSources[0]?.label.toLowerCase() ?? "balanced pressure"}, which helps explain why the load may feel the way it does from inside the day.`,
    },
  },
  editorialCopy: {
    meaningEyebrow: "Reading the meter",
    meaningTitle: "What this result usually means",
    meaningDescription:
      "Use the score bands below as a map of stress structure, not as a judgment about whether you should be coping better.",
    dimensionsEyebrow: "Stress load dimensions",
    dimensionsTitle: "The 4 dimensions of stress load",
    dimensionsDescription:
      "These four dimensions separate pressure intensity from recovery drag, cognitive overload, and emotional spillover so the signal is more usable.",
    riskEyebrow: "What makes the load rise",
    riskTitle: "What increases stress load",
    riskDescription:
      "Stress rarely gets heavy through one thing alone. It usually rises when demand, incomplete recovery, and hidden carryover begin stacking together.",
    reductionEyebrow: "What helps lower it",
    reductionTitle: "What helps reduce stress load",
    reductionDescription:
      "The most useful moves lower strain while increasing margin. They work best when they change the system, not only the mindset.",
    storyEyebrow: "How this often feels",
    storyTitle: "When stress becomes the background tone",
    storyDescription:
      "Stress load often becomes obvious only after the system starts treating constant pressure like normal operating weather.",
    nextEyebrow: "What to do next",
    nextTitle: "What to do next",
    nextDescription:
      "A high score becomes most useful when it helps you lower the right part of the load first instead of reacting to stress as one giant blur.",
    relatedEyebrow: "Related tools",
    relatedTitle: "Related tools",
    relatedDescription:
      "Use nearby tools when the stress signal points toward work pressure, depleted daily stability, burnout drift, or emotional recovery gaps.",
    faqEyebrow: "Questions that usually come next",
    faqTitle: "Stress Load Meter FAQ",
    faqDescription:
      "Clearer answers for the questions people usually ask once they realize their stress is being driven by a structure, not just a mood.",
    faqIntro:
      "Use these questions to translate the meter into something practical: what kind of stress you are carrying, why it lingers, and where relief is most likely to begin.",
  },
  bands: [
    {
      key: "grounded-stress-load",
      min: 0,
      max: 24,
      title: "Grounded Stress Load",
      summary: "Pressure is present, but it does not appear to be overrunning recovery or reshaping the whole system.",
      interpretation:
        "This usually means stress is still behaving like a contained response rather than a constant background condition. The goal here is maintenance, not emergency correction.",
      standoutLead: "The main signal is usable stability.",
      nextStepLead: "Protect the routines and recovery habits that are still keeping pressure from spreading further.",
      signalTone: "contained",
      gradientFrom: "#6FD3FF",
      gradientTo: "#3DDC97",
      glow: "rgba(111, 211, 255, 0.32)",
    },
    {
      key: "elevated-pressure-pattern",
      min: 25,
      max: 44,
      title: "Elevated Pressure Pattern",
      summary: "Stress appears to be rising in a clear way, even if life still looks manageable from the outside.",
      interpretation:
        "This is often the stage where people are still functional but notice shorter patience, thinner recovery, and less space between one pressure wave and the next.",
      standoutLead: "The stress signal is present, not hypothetical.",
      nextStepLead: "Aim to reduce one avoidable pressure source before the current pattern becomes your new baseline.",
      signalTone: "elevated",
      gradientFrom: "#6FD3FF",
      gradientTo: "#F6C177",
      glow: "rgba(246, 193, 119, 0.28)",
    },
    {
      key: "stacked-stress-build",
      min: 45,
      max: 64,
      title: "Stacked Stress Build",
      summary: "Your stress pattern looks layered enough that different forms of pressure are starting to reinforce one another.",
      interpretation:
        "At this level, it often stops feeling like 'a lot going on' and starts feeling like there is no clean place inside the day where the system fully comes down.",
      standoutLead: "The meter is picking up accumulation more than isolated spikes.",
      nextStepLead: "Lowering demand helps, but it works best alongside real decompression and less hidden carryover.",
      signalTone: "stacking",
      gradientFrom: "#F6C177",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.26)",
    },
    {
      key: "high-stress-saturation",
      min: 65,
      max: 84,
      title: "High Stress Saturation",
      summary: "Stress appears to be occupying multiple parts of the system at once rather than landing in one isolated lane.",
      interpretation:
        "People in this range are often still doing what they need to do, but with a much smaller margin, more recovery lag, and a body or mind that stays activated longer than it should.",
      standoutLead: "The strongest signal is saturation.",
      nextStepLead: "Reduce intensity quickly where you can, because waiting for a perfect break often leaves the underlying pattern unchanged.",
      signalTone: "high",
      gradientFrom: "#FF9B73",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.34)",
    },
    {
      key: "overflow-low-margin-pattern",
      min: 85,
      max: 100,
      title: "Overflow / Low Margin Pattern",
      summary: "The current stress load suggests a system carrying too much pressure and too little real recovery room at the same time.",
      interpretation:
        "This does not reduce you to a score. It does suggest that the load is no longer acting like an occasional response. It is functioning more like a full-system condition that needs honest relief.",
      standoutLead: "The clearest signal is low remaining margin.",
      nextStepLead: "Treat this as a prompt to simplify, recover, and lower exposure to the stressors that keep the system continuously switched on.",
      signalTone: "overflowing",
      gradientFrom: "#FF7B72",
      gradientTo: "#A78BFA",
      glow: "rgba(167, 139, 250, 0.28)",
    },
  ],
  dimensions: [
    {
      key: "demandPressure",
      label: "Demand Pressure",
      description: "How forcefully the total amount of demand is pressing on the system right now.",
      icon: "signal",
      accent: "#6FD3FF",
    },
    {
      key: "recoveryDrag",
      label: "Recovery Drag",
      description: "Whether rest and slower periods are actually lowering the load or only interrupting it briefly.",
      icon: "shield",
      accent: "#3DDC97",
    },
    {
      key: "cognitiveOverload",
      label: "Cognitive Overload",
      description: "How much mental noise, switching, unfinished loops, or clarity loss are adding stress from the inside.",
      icon: "graph",
      accent: "#F6C177",
    },
    {
      key: "emotionalSpillover",
      label: "Emotional Spillover",
      description: "How much pressure is staying emotionally active after the moment itself should have ended.",
      icon: "insight",
      accent: "#FF7B72",
    },
  ],
  sourceBuckets: [
    { key: "demand", label: "Demand intensity", accent: "#6FD3FF" },
    { key: "rest", label: "Recovery disruption", accent: "#3DDC97" },
    { key: "cognitive", label: "Mental noise", accent: "#F6C177" },
    { key: "emotional", label: "Emotional spillover", accent: "#A78BFA" },
    { key: "relational", label: "Other-people pressure", accent: "#FF7B72" },
  ],
  steps: [
    {
      id: "step-1",
      step: 1,
      kind: "single-choice",
      field: "loadFrequency",
      eyebrow: "Signal 01 · pressure frequency",
      question: "How often does life feel like it is asking more from you than your system cleanly has room for?",
      hint: "Pick the answer that fits your recent baseline rather than a single unusually hard day.",
      variant: "cards",
      options: [
        { value: "contained", label: "Contained", description: "Pressure rises, but it still feels contained to certain moments." },
        { value: "noticeable", label: "Noticeable", description: "Stress is present often enough that you are aware of it most weeks." },
        { value: "persistent", label: "Persistent", description: "Stress is showing up as a repeated background condition." },
        { value: "nearly-constant", label: "Nearly constant", description: "It feels like the system is bracing more often than it is releasing." },
      ],
    },
    {
      id: "step-2",
      step: 2,
      kind: "slider",
      field: "endReserve",
      eyebrow: "Signal 02 · end-of-day reserve",
      question: "How much usable energy do you usually have left by the end of a normal day?",
      hint: "Rate what is left after an ordinary demanding day, not your most restful exception.",
      label: "Evening reserve",
      minLabel: "Nothing left",
      maxLabel: "Still resourced",
      scaleHint: "Low remaining reserve usually means stress is costing more than it looks.",
    },
    {
      id: "step-3",
      step: 3,
      kind: "single-choice",
      field: "switchOff",
      eyebrow: "Signal 03 · switch-off difficulty",
      question: "How difficult has it been to stop carrying the day once the main responsibilities end?",
      hint: "Think about what happens after the tasks stop. Does your system actually stand down?",
      variant: "segments",
      options: [
        { value: "easy", label: "Very easy" },
        { value: "mostly-easy", label: "Mostly easy" },
        { value: "mixed", label: "Mixed" },
        { value: "difficult", label: "Difficult" },
        { value: "very-difficult", label: "Very difficult" },
      ],
    },
    {
      id: "step-4",
      step: 4,
      kind: "single-choice",
      field: "restoration",
      eyebrow: "Signal 04 · recovery quality",
      question: "When you rest, how restorative has that rest actually felt lately?",
      hint: "This is about whether recovery truly lands, not just whether you paused for a little while.",
      variant: "visual",
      options: [
        { value: "restores-well", label: "Restores well", description: "Rest noticeably resets your body and mind most of the time." },
        { value: "partly-restores", label: "Partly restores", description: "Recovery helps, but not as fully as it used to." },
        { value: "inconsistent", label: "Inconsistent", description: "Some rest helps. Some barely changes the pressure." },
        { value: "rarely-restores", label: "Rarely restores", description: "Rest pauses the day, but does not return much capacity." },
        { value: "barely-restores", label: "Barely restores", description: "Even lighter time does very little to lower the load." },
      ],
    },
    {
      id: "step-5",
      step: 5,
      kind: "single-choice",
      field: "dailyHeaviness",
      eyebrow: "Signal 05 · effort heaviness",
      question: "How often do routine tasks, emails, or decisions feel heavier than their actual size?",
      hint: "This often rises before people call themselves overwhelmed.",
      variant: "cards",
      options: [
        { value: "rarely-heavier", label: "Rarely", description: "Most tasks still feel proportional to the effort required." },
        { value: "sometimes-heavier", label: "Sometimes", description: "You notice more drag on normal tasks than you used to." },
        { value: "often-heavier", label: "Often", description: "Simple things now ask for noticeable extra effort." },
        { value: "almost-always-heavier", label: "Almost always", description: "Even ordinary tasks feel larger than they should." },
      ],
    },
    {
      id: "step-6",
      step: 6,
      kind: "multi-select",
      field: "sources",
      eyebrow: "Signal 06 · source mapping",
      question: "Which stress drivers are most active for you right now?",
      hint: "Choose up to four. The meter uses these to show where the pressure is clustering.",
      limit: 4,
      options: [
        { value: "volume-deadlines", label: "Volume and deadlines" },
        { value: "open-loops", label: "Too many open loops" },
        { value: "poor-sleep", label: "Poor sleep or weak recovery" },
        { value: "other-peoples-urgency", label: "Other people's urgency" },
        { value: "emotional-residue", label: "Emotional residue" },
        { value: "constant-uncertainty", label: "Constant uncertainty" },
        { value: "invisible-responsibility", label: "Invisible responsibility" },
        { value: "no-real-off-switch", label: "No real off-switch" },
      ],
    },
    {
      id: "step-7",
      step: 7,
      kind: "single-choice",
      field: "earlySignal",
      eyebrow: "Signal 07 · first internal sign",
      question: "What usually shifts first when your stress load starts running high?",
      hint: "Pick the earliest signal, not the most dramatic downstream consequence.",
      variant: "cards",
      options: [
        { value: "mental-noise", label: "Mental noise increases", description: "Thoughts get louder, faster, and harder to quiet." },
        { value: "body-tension", label: "Body tension rises", description: "Your system feels more braced, activated, or tight." },
        { value: "patience-thins", label: "Patience thins", description: "You feel shorter, less buffered, or more easily pressed." },
        { value: "stress-follows-me-home", label: "Stress follows me home", description: "The load keeps running after the visible day ends." },
        { value: "pressure-without-end", label: "It feels like there is no clean end", description: "The stress becomes more continuous than episodic." },
      ],
    },
    {
      id: "step-8",
      step: 8,
      kind: "single-choice",
      field: "recoverySpeed",
      eyebrow: "Signal 08 · bounce-back speed",
      question: "How quickly do you feel meaningfully less stressed after a lighter day or a real pause?",
      hint: "This asks whether recovery actually changes your baseline, not only whether you can momentarily relax.",
      variant: "cards",
      options: [
        { value: "quickly", label: "Quickly", description: "A lighter period usually changes the way your system feels." },
        { value: "somewhat", label: "Somewhat", description: "Recovery helps, but the shift is incomplete." },
        { value: "slowly", label: "Slowly", description: "Relief comes, but it takes longer than it used to." },
        { value: "barely", label: "Barely at all", description: "Even lighter periods do very little to lower the load." },
      ],
    },
    {
      id: "step-9",
      step: 9,
      kind: "slider",
      field: "clarityDrop",
      eyebrow: "Signal 09 · clarity drift",
      question: "How much has stress been affecting your clarity, prioritizing, or ability to think straight lately?",
      hint: "Use the slider for the size of the drop, not for how important the work is.",
      label: "Clarity drop",
      minLabel: "No real drop",
      maxLabel: "Major drop",
      scaleHint: "Stress often becomes more expensive once clarity starts shrinking under normal demand.",
    },
    {
      id: "step-10",
      step: 10,
      kind: "slider",
      field: "capacityDrop",
      eyebrow: "Signal 10 · throughput change",
      question: "How much has your effective capacity or follow-through dropped compared with your usual self?",
      hint: "This is about how much clean throughput you have access to, not whether you are still forcing yourself through.",
      label: "Capacity drop",
      minLabel: "Still intact",
      maxLabel: "Much lower",
      scaleHint: "Stress load often shows up in how much ordinary output now costs.",
    },
    {
      id: "step-11",
      step: 11,
      kind: "single-choice",
      field: "pressureResponse",
      eyebrow: "Signal 11 · pressure response",
      question: "When pressure peaks, which response feels most familiar?",
      hint: "Choose the response your system defaults to, not the one you wish it used.",
      variant: "cards",
      options: [
        { value: "compress-and-finish", label: "I compress and finish", description: "I push harder and try to get to done quickly." },
        { value: "stay-alert-but-tense", label: "I stay alert but tense", description: "I keep moving, but the body stays braced." },
        { value: "lose-priority-control", label: "I lose priority control", description: "Everything starts feeling equally urgent." },
        { value: "carry-it-home", label: "I carry it home with me", description: "The pressure continues after the actual task ends." },
        { value: "become-reactive-and-thin", label: "I become reactive and thin", description: "My margin gets shorter and my responses get sharper." },
      ],
    },
    {
      id: "step-12",
      step: 12,
      kind: "slider",
      field: "hiddenLoad",
      eyebrow: "Signal 12 · hidden pressure",
      question: "How much of your stress load feels invisible to other people around you?",
      hint: "Think about the pressure that looks small from outside but is still filling your system from inside.",
      label: "Hidden load",
      minLabel: "Fully visible",
      maxLabel: "Mostly unseen",
      scaleHint: "Stress often compounds faster when the true load is under-recognized or unshared.",
    },
    {
      id: "step-13",
      step: 13,
      kind: "single-choice",
      field: "selfRead",
      eyebrow: "Signal 13 · pattern read",
      question: "Which statement feels most accurate about your current stress pattern?",
      hint: "Use the option that best describes the load pattern, not your ideal standard for coping.",
      variant: "statement",
      options: [
        { value: "full-but-manageable", label: "A", description: "My life is full, but the stress still feels manageable." },
        { value: "more-activated-than-usual", label: "B", description: "I feel more activated and compressed than I want to admit." },
        { value: "margin-is-thinning", label: "C", description: "The biggest issue is that my margin keeps thinning." },
        { value: "stress-is-stacking", label: "D", description: "Stress is stacking faster than I am recovering from it." },
        { value: "load-is-shaping-my-baseline", label: "E", description: "The load is starting to shape my baseline state." },
      ],
    },
    {
      id: "step-14",
      step: 14,
      kind: "single-choice",
      field: "hardestPart",
      eyebrow: "Signal 14 · hardest part",
      question: "What feels hardest in the current stress pattern?",
      hint: "Choose the part that makes the load feel most sticky or most expensive to carry.",
      variant: "cards",
      options: [
        { value: "constant-urgency", label: "The constant urgency", description: "It feels like the pace never really softens." },
        { value: "context-switching", label: "The constant switching", description: "My mind keeps reopening too many things." },
        { value: "holding-too-much", label: "Holding too much at once", description: "The invisible carrying is exhausting." },
        { value: "relaxing-afterwards", label: "Relaxing afterwards", description: "The day ends, but the system does not." },
        { value: "not-feeling-done", label: "Never feeling done", description: "There is no clear enough sense of closure." },
      ],
    },
    {
      id: "step-15",
      step: 15,
      kind: "single-choice",
      field: "currentState",
      eyebrow: "Signal 15 · final self-read",
      question: "Which statement feels closest to your current state?",
      hint: "This final step helps the meter compare your lived stress experience with the structural signal picture.",
      variant: "statement",
      options: [
        { value: "stretched-but-still-here", label: "A", description: "I am stretched, but still basically here as myself." },
        { value: "running-hot-too-often", label: "B", description: "I feel like I am running hot too often and for too long." },
        { value: "recovery-is-lagging", label: "C", description: "My recovery is lagging behind what the days are costing." },
        { value: "stress-has-become-a-system", label: "D", description: "Stress has become a full-system pattern, not just a busy phase." },
      ],
    },
  ],
  choiceScores: {
    loadFrequency: {
      contained: 16,
      noticeable: 42,
      persistent: 74,
      "nearly-constant": 94,
    },
    switchOff: {
      easy: 10,
      "mostly-easy": 26,
      mixed: 52,
      difficult: 78,
      "very-difficult": 96,
    },
    restoration: {
      "restores-well": 10,
      "partly-restores": 28,
      inconsistent: 56,
      "rarely-restores": 80,
      "barely-restores": 96,
    },
    dailyHeaviness: {
      "rarely-heavier": 12,
      "sometimes-heavier": 38,
      "often-heavier": 72,
      "almost-always-heavier": 92,
    },
    earlySignal: {
      "mental-noise": 70,
      "body-tension": 64,
      "patience-thins": 74,
      "stress-follows-me-home": 82,
      "pressure-without-end": 92,
    },
    recoverySpeed: {
      quickly: 12,
      somewhat: 36,
      slowly: 74,
      barely: 96,
    },
    pressureResponse: {
      "compress-and-finish": 42,
      "stay-alert-but-tense": 64,
      "lose-priority-control": 78,
      "carry-it-home": 86,
      "become-reactive-and-thin": 82,
    },
    selfRead: {
      "full-but-manageable": 28,
      "more-activated-than-usual": 48,
      "margin-is-thinning": 66,
      "stress-is-stacking": 82,
      "load-is-shaping-my-baseline": 94,
    },
    hardestPart: {
      "constant-urgency": 72,
      "context-switching": 68,
      "holding-too-much": 76,
      "relaxing-afterwards": 82,
      "not-feeling-done": 74,
    },
    currentState: {
      "stretched-but-still-here": 30,
      "running-hot-too-often": 56,
      "recovery-is-lagging": 80,
      "stress-has-become-a-system": 94,
    },
  },
  sourceOptionScores: {
    "volume-deadlines": 78,
    "open-loops": 70,
    "poor-sleep": 86,
    "other-peoples-urgency": 72,
    "emotional-residue": 76,
    "constant-uncertainty": 74,
    "invisible-responsibility": 82,
    "no-real-off-switch": 88,
  },
  sourceBucketMap: {
    "volume-deadlines": "demand",
    "open-loops": "cognitive",
    "poor-sleep": "rest",
    "other-peoples-urgency": "relational",
    "emotional-residue": "emotional",
    "constant-uncertainty": "cognitive",
    "invisible-responsibility": "demand",
    "no-real-off-switch": "rest",
  },
  scoringWeights: {
    loadFrequency: 8,
    endReserve: 8,
    switchOff: 6,
    restoration: 6,
    dailyHeaviness: 6,
    sources: 8,
    earlySignal: 6,
    recoverySpeed: 6,
    clarityDrop: 8,
    capacityDrop: 8,
    pressureResponse: 6,
    hiddenLoad: 6,
    selfRead: 6,
    hardestPart: 6,
    currentState: 6,
  },
  dimensionFormulas: {
    demandPressure: [
      { kind: "choice", field: "loadFrequency", weight: 0.24 },
      { kind: "choice", field: "dailyHeaviness", weight: 0.18 },
      { kind: "slider", field: "capacityDrop", weight: 0.18 },
      { kind: "slider", field: "hiddenLoad", weight: 0.16 },
      { kind: "source", bucket: "demand", weight: 0.14 },
      { kind: "choice", field: "hardestPart", weight: 0.1 },
    ],
    recoveryDrag: [
      { kind: "slider", field: "endReserve", weight: 0.22, invert: true },
      { kind: "choice", field: "restoration", weight: 0.24 },
      { kind: "choice", field: "recoverySpeed", weight: 0.22 },
      { kind: "choice", field: "pressureResponse", weight: 0.12 },
      { kind: "source", bucket: "rest", weight: 0.2 },
    ],
    cognitiveOverload: [
      { kind: "choice", field: "switchOff", weight: 0.16 },
      { kind: "slider", field: "clarityDrop", weight: 0.26 },
      { kind: "slider", field: "capacityDrop", weight: 0.16 },
      { kind: "choice", field: "hardestPart", weight: 0.14 },
      { kind: "choice", field: "earlySignal", weight: 0.1 },
      { kind: "source", bucket: "cognitive", weight: 0.18 },
    ],
    emotionalSpillover: [
      { kind: "choice", field: "earlySignal", weight: 0.2 },
      { kind: "choice", field: "pressureResponse", weight: 0.18 },
      { kind: "choice", field: "selfRead", weight: 0.16 },
      { kind: "choice", field: "currentState", weight: 0.16 },
      { kind: "source", bucket: "emotional", weight: 0.16 },
      { kind: "source", bucket: "relational", weight: 0.14 },
    ],
  },
  meaningBlocks: [
    {
      title: "What stress load actually means",
      paragraphs: [
        "Stress load is not simply the feeling of being stressed. It is the total amount of pressure your system is holding once demand, incomplete recovery, mental reopening, and emotional carryover are all counted together. Two people can describe themselves as stressed while carrying very different load profiles. One may be dealing mostly with short bursts of demand that clear reasonably well. Another may be living with a pattern where pressure never fully comes down, even when the visible task ends. The second pattern is usually what makes stress start feeling structural instead of temporary.",
        "That distinction matters because many people try to solve all stress the same way. They take a break, try to rest more, or push themselves to become more resilient. Those responses can help, but only if they match what is actually driving the load. If the dominant issue is hidden demand, the solution looks different than if the main issue is weak recovery, ongoing mental noise, or emotional spillover that keeps the nervous system half-engaged.",
        "The meter is designed to make that structure visible. Instead of treating stress like one giant category, it separates the load into demand pressure, recovery drag, cognitive overload, and emotional spillover. That gives you something more useful than a vague sense that you are stressed. It gives you a map of how the stress is being carried.",
      ],
    },
    {
      title: "Why stress often feels bigger than the schedule looks",
      paragraphs: [
        "People often compare their stress to the visible calendar and end up confused. They say, 'Nothing looks that extreme, so why does my system still feel tight?' The reason is that schedules only show one layer of load. They do not show how many unfinished decisions are still mentally open, how much emotional residue is tagging along after conversations, how little capacity sleep is returning, or how often the body never quite stops bracing.",
        "This is why one person can have a packed week and still feel fundamentally steady, while another feels overloaded by a more ordinary-looking stretch. The visible amount of work matters, but the hidden after-cost matters just as much. Stress becomes heavier when it continues after effort ends. It becomes more expensive when there is no full release between demands.",
        "When people do not understand that hidden structure, they often blame themselves. They assume the issue is personal weakness, low discipline, or poor coping. In reality, the system may be absorbing more pressure than the outside picture reveals. Naming that difference can be a relief because it shifts the question from 'Why am I handling this so badly?' to 'What kind of load am I actually carrying?'",
      ],
    },
    {
      title: "How stress starts turning into a background condition",
      paragraphs: [
        "Stress becomes a background condition when activation stops feeling like an event and starts feeling like the operating climate. Instead of rising and falling around specific demands, the body and mind remain somewhat engaged even in quieter moments. The person may still be working, parenting, planning, responding, and showing up. What changes is the cost of doing those things. Simple decisions feel less simple. Recovery feels less complete. The mind keeps working after the visible day ends.",
        "That shift is easy to miss because people can remain competent for a long time while stress becomes more continuous. Competence hides a lot. It hides the extra effort required to stay organized. It hides how often patience needs to be rebuilt. It hides the low-grade emotional fatigue that comes from always being partly 'on.'",
        "This is why the meter pays attention to signals like end-of-day reserve, switch-off difficulty, hidden load, and how quickly relief actually lands. Those are often the places where chronic stress shows itself before a person would ever use bigger words like burnout or breakdown.",
      ],
    },
  ],
  dimensionEditorial: [
    {
      key: "demandPressure",
      paragraphs: [
        "Demand Pressure measures how much total force the current obligations are applying to your system. It is not only about busyness. It also includes invisible responsibility, urgency, and the sense that too much is competing for space at once.",
        "When this dimension is highest, stress often feels like compression. The person may still be effective, but the whole day has less room inside it. There is less breathing room, less pacing room, and less time between one demand and the next.",
      ],
    },
    {
      key: "recoveryDrag",
      paragraphs: [
        "Recovery Drag measures whether rest is actually lowering the load or merely interrupting it. Many people technically stop working without truly recovering. Their mind stays active, their body stays tense, and the next day begins without a full reset.",
        "When this score runs high, it often explains why stress feels sticky. The problem is not only what the day is asking. It is that the repair cycle is no longer clearing what the day costs.",
      ],
    },
    {
      key: "cognitiveOverload",
      paragraphs: [
        "Cognitive Overload captures the mental cost of carrying too many open loops, switching too often, and trying to think clearly while attention keeps getting reopened. It is the hidden reason stress can feel exhausting even when the body is mostly sitting still.",
        "High cognitive overload usually makes everything feel more urgent than it is. Priorities blur, decisions take longer, and the mental friction of re-entry becomes part of the stress load itself.",
      ],
    },
    {
      key: "emotionalSpillover",
      paragraphs: [
        "Emotional Spillover measures how much stress keeps running in the emotional system after the visible event ends. The issue is not only feeling emotions. It is that pressure continues to color the rest of the day, the evening, or the body’s background state.",
        "When this dimension is high, people often say they can never quite put the day down. The conversation is over or the task is complete, but the nervous system is still holding it.",
      ],
    },
  ],
  riskBlocks: [
    {
      title: "Constant demand without a true downshift",
      body:
        "Stress load rises quickly when the pace stays high enough that the system never fully resets between one push and the next.",
    },
    {
      title: "Recovery that pauses effort but does not restore you",
      body:
        "Time off helps less when the mind stays active, sleep stays thin, or decompression still contains low-grade pressure.",
    },
    {
      title: "Open loops and mental reopening",
      body:
        "Unfinished decisions, tabs, conversations, and tasks create mental drag that keeps the stress signal running even in quieter moments.",
    },
    {
      title: "Hidden pressure other people do not see",
      body:
        "Stress becomes heavier when the true amount of carrying is undercounted, unsupported, or dismissed because it looks ordinary from the outside.",
    },
  ],
  reductionBlocks: [
    {
      title: "Lower one real source of pressure",
      body:
        "The fastest gains usually come from removing one meaningful stressor, not from trying to out-regulate an unchanged load.",
    },
    {
      title: "Make recovery more active and more believable",
      body:
        "Recovery works better when it actually lowers activation: fewer inputs, fewer reopenings, and clearer separation from the stressor itself.",
    },
    {
      title: "Reduce mental reopening cost",
      body:
        "Smaller choice sets, clearer sequencing, and fewer open loops reduce the amount of stress created by thinking alone.",
    },
    {
      title: "Name the invisible carrying",
      body:
        "Stress often softens once the hidden pressure is made visible enough to share, bound, or adjust instead of silently carrying it all.",
    },
  ],
  storyBlock: {
    eyebrow: "Emotionally real story",
    title: "He kept telling himself it was only a busy phase",
    quote:
      "Aarav kept saying it was just a full stretch. And technically, he was still functioning. Meetings were handled. Messages were answered. Deadlines were mostly met. What he missed was how little his system was actually coming down. He was carrying the day into the evening, waking up only partly reset, and feeling strangely compressed by tasks that never used to bother him. The calendar looked demanding but not disastrous, so he kept assuming he should be coping better. The real issue was that stress had stopped acting like a passing response and started acting like the climate inside his life.",
    takeaway:
      "That is how stress load often hides in real life: not through dramatic collapse, but through a steady loss of margin that becomes easy to normalize.",
    toneLabel: "Lived stress pattern",
    accent: "#6FD3FF",
  },
  nextStepParagraphs: [
    "If this result feels accurate, start by naming the dominant dimension instead of arguing with the whole experience. If the main issue is demand pressure, ask what can be reduced. If it is recovery drag, ask why rest is not landing. If it is cognitive overload, look for what keeps reopening. If it is emotional spillover, pay attention to what the system is still carrying after the event itself is over.",
    "Then choose one removal move and one repair move. A removal move lowers incoming stress: fewer open loops, one clearer boundary, one delayed commitment, one less source of constant urgency. A repair move helps the system come down: quieter evenings, a better transition out of work, less emotional rehashing, or a more honest recovery block that does not double as another obligation.",
    "Most importantly, stop using output alone as the measure of whether stress is manageable. Many people can still perform while stress load is quietly rising. The better question is whether the system is still recovering cleanly enough to keep doing life without becoming tighter, thinner, or more continuously activated.",
  ],
  nextStepPanel: {
    eyebrow: "Recommended next step",
    title: "Stress Recovery Reset",
    description:
      "A structured guide for reducing stress saturation, improving real decompression, and rebuilding a cleaner demand-to-recovery rhythm.",
    buttonLabel: "View Next Step",
  },
  relatedTools: [
    {
      title: "Burnout Risk Audit",
      description: "Check whether sustained stress load is moving into deeper depletion, detachment, or recovery deficit.",
      category: "Stress & Burnout",
      minutes: "4 min",
      icon: "trend",
      href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
    },
    {
      title: "Work Stress Load Mapper",
      description: "See whether the pressure is being driven mainly by work structure, ambiguity, switching, or low control.",
      category: "Work Psychology",
      minutes: "5 min",
      icon: "graph",
      href: buildToolHref({ slug: "work-stress-load-mapper", categorySlug: "work-psychology" }),
    },
    {
      title: "Daily Functioning Stability Check",
      description: "Map where steady functioning slips first once stress starts shaping the rhythm of the day.",
      category: "Life Balance & Habits",
      minutes: "5 min",
      icon: "signal",
      href: buildToolHref({ slug: "daily-functioning-stability-check", categorySlug: "life-balance-habits" }),
    },
    {
      title: "Emotional Recovery Planner",
      description: "Turn emotional spillover and overloaded recovery into a more concrete reset plan.",
      category: "Emotional Regulation",
      minutes: "4 min",
      icon: "insight",
      href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
    },
  ],
  faqItems: [
    {
      question: "What does a stress load score actually mean?",
      answer:
        "It is a directional read of how much pressure your system is currently carrying once demand, recovery, cognition, and emotional spillover are weighted together. A higher score means the load looks more saturating and harder to clear, not that there is something inherently wrong with you.",
    },
    {
      question: "Is stress load the same as burnout?",
      answer:
        "Not exactly. Stress load is broader and often earlier. It describes how much pressure the system is carrying right now. Burnout usually involves a more sustained pattern where recovery stays behind for long enough that deeper depletion and emotional thinning begin to take hold.",
    },
    {
      question: "Why can I feel very stressed even when my schedule does not look extreme?",
      answer:
        "Because visible schedule pressure is only one part of the picture. Hidden carrying, mental reopening, low-quality recovery, emotional residue, and lack of clear endings can all make stress feel heavier than the calendar alone would predict.",
    },
    {
      question: "What is recovery drag?",
      answer:
        "Recovery drag means rest is happening, but it is not reducing the load very efficiently. You stop, but the system does not come down as much as it should. That is often why stress starts feeling sticky instead of cyclical.",
    },
    {
      question: "How do I know whether the main issue is demand or recovery?",
      answer:
        "Look at what changes fastest. If every part of life feels crowded at once, demand pressure may be the leader. If the bigger problem is that you never feel reset even after slower periods, recovery drag is often the stronger signal.",
    },
    {
      question: "Why does mental overload make stress feel so physical?",
      answer:
        "Because cognitive stress is still stress. Too many open loops, too much switching, and constant prioritizing keep the system activated even when the body is not doing obvious heavy work. That mental activation often shows up physically as tension, fatigue, or a feeling of compression.",
    },
    {
      question: "Can stress load stay high even when I am doing everything 'right'?",
      answer:
        "Yes. Good habits help, but they cannot always compensate for a structure that is still too pressurized. A person can sleep better, walk, journal, and still carry a load that needs less demand, more support, or more visible boundaries.",
    },
    {
      question: "What if my highest source is invisible responsibility?",
      answer:
        "That usually means the stress is not only about tasks. It is about holding things mentally, relationally, or operationally without enough recognition, redistribution, or closure. Naming that hidden carrying is often the first real relief move.",
    },
    {
      question: "How often should I retake the Stress Load Meter?",
      answer:
        "Retaking it every one to two weeks is usually enough if conditions are actively shifting. It is especially useful after a workload change, a boundary reset, a recovery improvement, or a stretch of unusually high pressure.",
    },
    {
      question: "What should I do first if my score is high?",
      answer:
        "Start with the top strain dimension and the top source cluster. Lower one real input to the load, then add one form of recovery that actually helps the system come down. Broad advice works poorly when stress is structurally specific.",
    },
  ],
  heroPreviewAnswers: {
    loadFrequency: "persistent",
    endReserve: 32,
    switchOff: "difficult",
    restoration: "inconsistent",
    dailyHeaviness: "often-heavier",
    sources: ["volume-deadlines", "open-loops", "poor-sleep", "invisible-responsibility"],
    earlySignal: "stress-follows-me-home",
    recoverySpeed: "slowly",
    clarityDrop: 64,
    capacityDrop: 58,
    pressureResponse: "carry-it-home",
    hiddenLoad: 74,
    selfRead: "stress-is-stacking",
    hardestPart: "not-feeling-done",
    currentState: "recovery-is-lagging",
  },
  resultText: {
    signalLabel: ({ band, topDimension, secondDimension }) =>
      `Stress load looks ${band.signalTone} across ${topDimension.label.toLowerCase()} and ${secondDimension.label.toLowerCase()}.`,
    standout: ({ band, topDimension, sourcePhrase }) =>
      `${band.standoutLead} ${topDimension.label} is the clearest high point right now, with ${sourcePhrase} feeding the load most visibly.`,
    nextStep: ({ band, topDimension, sourcePhrase }) =>
      `${band.nextStepLead} Start by lowering pressure around ${sourcePhrase} while creating more room underneath ${topDimension.label.toLowerCase()}.`,
    alignmentNote: ({ difference }) => {
      if (difference === null) {
        return "Use the score as a structural read on pressure, not as a verdict about your character or resilience.";
      }

      if (difference >= 16) {
        return "Your self-read sounds more stressed than the averaged score, which often means the lived cost of the pressure is landing especially loudly from the inside.";
      }

      if (difference <= -16) {
        return "The structural stress markers are running higher than your self-read, which can happen when functioning outwardly hides how much pressure is quietly accumulating.";
      }

      return "Your self-read and the structural meter are broadly aligned, which adds confidence that this stress pattern is real and worth responding to directly.";
    },
  },
};
