import { buildToolHref } from "./tools-home";
import type { BurnoutFamilyTool } from "./burnout-family";

export const mentalFatigueCheckTool: BurnoutFamilyTool = {
  slug: "mental-fatigue-check",
  categorySlug: "stress-burnout",
  pageMetadata: {
    title: "Mental Fatigue Check: Am I Mentally Fatigued or Just Tired?",
    description:
      "Use the Mental Fatigue Check to see whether your brain feels worn down by decision load, context switching, unfinished loops, weak recovery, or pressure to stay sharp all day.",
    keywords: [
      "mental fatigue check",
      "am i mentally fatigued",
      "brain tired test",
      "cognitive fatigue tool",
      "why does my brain feel heavy",
      "mental overload assessment",
    ],
    openGraphTitle: "Mental Fatigue Check",
    openGraphDescription:
      "A premium interactive tool for checking whether mental fatigue is coming from cognitive overload, weak reset, or ongoing brain-pressure patterns.",
    twitterTitle: "Mental Fatigue Check",
    twitterDescription:
      "Check whether your brain feels taxed by cognitive overload, weak recovery, or a too-many-open-loops pattern.",
  },
  toolMetadata: {
    eyebrow: "COGNITIVE LOAD TOOL",
    title: "Mental Fatigue Check",
    description:
      "See whether your brain feels worn down by decision density, constant switching, unfinished loops, weak recovery, or pressure to stay mentally sharp. This tool measures cognitive fatigue as an operating pattern, not just a sleepy feeling.",
    metadata: [
      { icon: "time", label: "2-4 minutes" },
      { icon: "signal", label: "Free tool" },
      { icon: "privacy", label: "Private by design" },
    ],
    primaryCta: "Start Check",
    secondaryCta: "See Brain Signals",
  },
  experienceCopy: {
    sectionTitle: "A premium cognitive-fatigue scanner built to show whether the brain is overloaded, under-recovered, or burning energy on too much mental reopening",
    sectionDescription:
      "One mental-fatigue signal at a time. Large controls, a live cognitive-load preview, and deterministic scoring underneath the glass so the result feels specific instead of hand-wavy.",
    progressEyebrow: "Mental fatigue check",
    sidebarStatusEyebrow: "Scan status",
    sidebarStatusTitle: "cognitive markers mapped",
    sidebarStatusDescription:
      "The preview updates as you answer, making it easier to see whether the real issue is mental volume, weak reset, attention wear, or reduced momentum.",
    sidebarEmergingEyebrow: "Emerging fatigue read",
    sidebarEmergingDescription:
      "Use the live read to notice whether the brain is losing clarity, losing stamina, or simply not getting enough real off-time to reset.",
    footerPending:
      "Answer for how your brain has been functioning recently, not for the one day you slept badly and felt unusually flat.",
    footerComplete:
      "Result unlocked. You can still change any answer and the cognitive-fatigue visuals will refresh right away.",
    revealLabel: "Reveal Check",
    metaChips: ["Cognitive wear", "Recovery lag", "Private by design"],
  },
  resultCopy: {
    sectionTitle: "A cognitive-load report that shows where mental energy is being spent, where recovery is lagging, and why thinking feels heavier than it used to",
    sectionDescription:
      "The score matters, but the sharper read lives in the top fatigue dimension, the mental source cluster underneath it, and the recovery lag keeping your brain from feeling reset.",
    reportLabel: "Mental fatigue report",
    scoreLabel: "Mental fatigue score",
    standoutLabel: "What stands out",
    nextStepLabel: "What to reduce first",
    retakeLabel: "Retake Check",
  },
  visualCopy: {
    sectionTitle: "Four visual reads of cognitive fatigue, mental recovery lag, attention wear, and the source pattern behind the heaviness",
    sectionDescription:
      "These views help separate general tiredness from cognitive exhaustion by showing where the mental load is concentrated and whether recovery is actually giving your brain capacity back.",
    dial: {
      eyebrow: "Mental fatigue dial",
      title: "Overall cognitive wear",
      copy:
        "A quick read of how taxed the mental system currently looks once clarity loss, decision drag, reduced reset, and ongoing brain pressure are weighted together.",
      label: "Mental fatigue",
      caption: "Live fatigue load",
    },
    signalBars: {
      eyebrow: "4-dimension signal bars",
      title: "Where cognitive fatigue is concentrating",
      copy:
        "These bars separate raw mental load from attention erosion, weak recovery, and motivation drag so the pattern stops feeling random.",
    },
    recovery: {
      eyebrow: "Brain recovery chart",
      title: "Is your brain actually resetting?",
      copy:
        "Mental fatigue gets sticky when pauses reduce input but do not meaningfully restore clarity, pace, or usable thinking room.",
      loadLabel: "Current fatigue",
      recoveryLabel: "Reset capacity",
      gapLabel: "Brain recovery gap",
      gapInsight: (result) =>
        result.recoveryGap > 0
          ? `Your current brain-recovery gap is ${result.recoveryGap} points, which usually means the mind is still paying for prior load even during quieter periods.`
          : "Fatigue and reset capacity look fairly balanced right now, which usually means the brain still has some reserve to work with.",
    },
    sourceSplit: {
      eyebrow: "Cognitive source split",
      title: "What is taxing the brain most",
      copy:
        "This source map helps you see whether the brain is tired from decision density, unfinished mental loops, poor reset, constant input, or pressure to keep performing cleanly.",
      insight: (result) =>
        `The dominant fatigue source currently leans toward ${result.dominantSources[0]?.label.toLowerCase() ?? "balanced load"}, which helps explain why your brain may feel heavy even when the day looked manageable on paper.`,
    },
  },
  editorialCopy: {
    meaningEyebrow: "Reading the pattern",
    meaningTitle: "What this result usually means",
    meaningDescription:
      "Use the score bands below to read mental fatigue as a cognitive-load pattern rather than as proof that you should just push harder.",
    dimensionsEyebrow: "Mental fatigue dimensions",
    dimensionsTitle: "The 4 dimensions of mental fatigue",
    dimensionsDescription:
      "These four dimensions show whether the issue is mental volume, attention wear, weak reset, or motivation drag that follows cognitive overload.",
    riskEyebrow: "What keeps the brain tired",
    riskTitle: "What increases mental fatigue",
    riskDescription:
      "Mental fatigue usually grows through repeated cognitive friction, not through one dramatic task. These are the patterns that keep the brain overused and under-reset.",
    reductionEyebrow: "What restores cognitive room",
    reductionTitle: "What helps reduce mental fatigue",
    reductionDescription:
      "The strongest improvements usually come from lowering reopenings, protecting cleaner off-time, and reducing how much the brain has to hold at once.",
    storyEyebrow: "How this often feels",
    storyTitle: "When the brain starts feeling expensive to use",
    storyDescription:
      "Mental fatigue often looks like low motivation from the outside, even when the real issue is that thinking itself has become unusually costly.",
    nextEyebrow: "What to do next",
    nextTitle: "What to do next",
    nextDescription:
      "The useful next move is usually not more force. It is lowering the part of the mental load that keeps the brain open, noisy, or unrecovered.",
    relatedEyebrow: "Related tools",
    relatedTitle: "Related tools",
    relatedDescription:
      "Use nearby tools if the fatigue pattern points toward decision strain, attention friction, inner pressure, or broader burnout drift.",
    faqEyebrow: "Questions that usually come next",
    faqTitle: "Mental Fatigue Check FAQ",
    faqDescription:
      "Answers for the questions people usually ask when their brain feels overused, under-recovered, or strangely heavy to operate.",
    faqIntro:
      "Use these questions to make sense of mental fatigue with more precision: what it is, what keeps it going, and how to lower it without treating yourself like a broken machine.",
  },
  bands: [
    {
      key: "clear-cognitive-base",
      min: 0,
      max: 24,
      title: "Clear Cognitive Base",
      summary: "Your current answers suggest that the brain is carrying effort, but still has enough reset and continuity to stay broadly clear.",
      interpretation:
        "Mental demand is present, but it is not strongly overwhelming the system. The key here is preserving what is already helping your mind come back to itself.",
      standoutLead: "The signal is more about watchfulness than depletion.",
      nextStepLead: "Protect the rhythms that are keeping cognition clear before unnecessary mental clutter starts accumulating.",
      signalTone: "light",
      gradientFrom: "#6FD3FF",
      gradientTo: "#3DDC97",
      glow: "rgba(111, 211, 255, 0.32)",
    },
    {
      key: "mild-mental-tiredness",
      min: 25,
      max: 44,
      title: "Mild Mental Tiredness",
      summary: "The brain looks somewhat taxed, but the fatigue still seems responsive to cleaner pacing and better reset.",
      interpretation:
        "This often feels like needing more time to think, shorter concentration windows, or lower tolerance for complexity without a full cognitive crash.",
      standoutLead: "The signal suggests growing cognitive drag.",
      nextStepLead: "Reduce one avoidable reopening pattern before it becomes the normal way your brain has to operate.",
      signalTone: "noticeable",
      gradientFrom: "#6FD3FF",
      gradientTo: "#F6C177",
      glow: "rgba(246, 193, 119, 0.28)",
    },
    {
      key: "cognitive-wear-pattern",
      min: 45,
      max: 64,
      title: "Cognitive Wear Pattern",
      summary: "Your answers suggest a real fatigue pattern in the thinking system, not just a little sleepiness or a low-motivation day.",
      interpretation:
        "The brain appears to be using too much energy on holding, reopening, or forcing continuity, which is why even basic thinking can start feeling heavier than it should.",
      standoutLead: "The clearest signal is wear, not laziness.",
      nextStepLead: "Lower mental friction and improve real reset at the same time, because either one alone often feels incomplete at this stage.",
      signalTone: "wearing down",
      gradientFrom: "#F6C177",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.26)",
    },
    {
      key: "high-mental-fatigue",
      min: 65,
      max: 84,
      title: "High Mental Fatigue",
      summary: "The current pattern points to a brain that is taxed across multiple lanes at once: clarity, momentum, recovery, and cognitive tolerance.",
      interpretation:
        "This level often shows up as feeling mentally full before the day is even over, slower thinking under ordinary pressure, and a reduced sense of clean internal space.",
      standoutLead: "The main signal is saturation in the cognitive system.",
      nextStepLead: "Reduce decision density, unfinished loops, and performance pressure quickly, because the brain is already spending too much just to stay organized.",
      signalTone: "high",
      gradientFrom: "#FF9B73",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.34)",
    },
    {
      key: "deep-cognitive-exhaustion",
      min: 85,
      max: 100,
      title: "Deep Cognitive Exhaustion",
      summary: "The mental-fatigue pattern suggests a brain carrying more sustained load than normal pauses are realistically repairing.",
      interpretation:
        "This does not say anything unkind about your ability. It points to a system that has been mentally overused and is not getting enough true cognitive relief to come back cleanly.",
      standoutLead: "The strongest signal is low remaining mental margin.",
      nextStepLead: "Treat this as a serious cue to simplify thinking demands, reduce open loops, and create quieter forms of real mental recovery.",
      signalTone: "depleted",
      gradientFrom: "#FF7B72",
      gradientTo: "#A78BFA",
      glow: "rgba(167, 139, 250, 0.28)",
    },
  ],
  dimensions: [
    {
      key: "mentalLoad",
      label: "Mental Load",
      description: "How much raw thinking demand the brain is currently being asked to hold.",
      icon: "signal",
      accent: "#6FD3FF",
    },
    {
      key: "attentionErosion",
      label: "Attention Erosion",
      description: "How much concentration continuity is getting worn down by pressure, switching, and low cognitive margin.",
      icon: "graph",
      accent: "#F6C177",
    },
    {
      key: "recoveryEfficiency",
      label: "Recovery Efficiency",
      description: "Whether rest is returning clean cognitive room or merely pausing the drain for a while.",
      icon: "shield",
      accent: "#3DDC97",
    },
    {
      key: "motivationDrag",
      label: "Motivation Drag",
      description: "How much mental fatigue is flattening willingness, initiation, and cognitive appetite.",
      icon: "insight",
      accent: "#FF7B72",
    },
  ],
  sourceBuckets: [
    { key: "demand", label: "Decision density", accent: "#6FD3FF" },
    { key: "cognitive", label: "Reopened loops", accent: "#F6C177" },
    { key: "rest", label: "Weak mental reset", accent: "#3DDC97" },
    { key: "emotional", label: "Self-pressure", accent: "#A78BFA" },
    { key: "relational", label: "Interruption load", accent: "#FF7B72" },
  ],
  steps: [
    {
      id: "step-1",
      step: 1,
      kind: "single-choice",
      field: "loadFrequency",
      eyebrow: "Signal 01 · brain-tax frequency",
      question: "How often does your brain feel taxed before the day is even fully over?",
      hint: "Answer for your recent baseline, not for the most exhausting exception.",
      variant: "cards",
      options: [
        { value: "occasional", label: "Occasional", description: "The brain gets tired sometimes, but it does not feel like the default." },
        { value: "regular", label: "Regular", description: "Mental fatigue is showing up often enough to notice most weeks." },
        { value: "frequent", label: "Frequent", description: "The mind feels strained on a repeated basis." },
        { value: "constant", label: "Constant", description: "It feels like the brain is carrying too much most of the time." },
      ],
    },
    {
      id: "step-2",
      step: 2,
      kind: "slider",
      field: "endReserve",
      eyebrow: "Signal 02 · end-of-day brain reserve",
      question: "How much usable mental energy do you typically have left by evening?",
      hint: "Rate what remains after ordinary effort, not after a rare slow day.",
      label: "Evening mental reserve",
      minLabel: "Mentally empty",
      maxLabel: "Still clear",
      scaleHint: "Low mental reserve usually means the cognitive system is spending more than it is regaining.",
    },
    {
      id: "step-3",
      step: 3,
      kind: "single-choice",
      field: "switchOff",
      eyebrow: "Signal 03 · mental off-switch",
      question: "How difficult is it to stop thinking once a mentally demanding block is over?",
      hint: "This is about whether the brain actually releases, not just whether the laptop closes.",
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
      eyebrow: "Signal 04 · morning reset",
      question: "How mentally restored do you usually feel when you start the next day?",
      hint: "Think about cognitive freshness, not only physical tiredness.",
      variant: "visual",
      options: [
        { value: "fresh", label: "Fresh", description: "My mind usually starts the day relatively clear." },
        { value: "decent", label: "Decent", description: "There is enough reset to get going without much struggle." },
        { value: "uneven", label: "Uneven", description: "Some mornings are okay, some feel mentally unfinished." },
        { value: "foggy", label: "Foggy", description: "I often start the day already not fully reset." },
        { value: "still-drained", label: "Still drained", description: "My brain often feels tired before the day has really begun." },
      ],
    },
    {
      id: "step-5",
      step: 5,
      kind: "single-choice",
      field: "dailyHeaviness",
      eyebrow: "Signal 05 · thinking heaviness",
      question: "How often do simple thinking tasks feel harder than their actual complexity?",
      hint: "This includes things like writing emails, organizing thoughts, or choosing what to do first.",
      variant: "cards",
      options: [
        { value: "rare", label: "Rarely", description: "Most ordinary thinking still feels fairly proportionate." },
        { value: "sometimes", label: "Sometimes", description: "I notice more mental drag than usual." },
        { value: "often", label: "Often", description: "Simple thinking regularly feels heavier than it should." },
        { value: "almost-always", label: "Almost always", description: "Even normal cognitive effort can feel expensive." },
      ],
    },
    {
      id: "step-6",
      step: 6,
      kind: "multi-select",
      field: "sources",
      eyebrow: "Signal 06 · fatigue sources",
      question: "Which drivers are taxing your brain most right now?",
      hint: "Choose up to four. The tool uses these to show where mental fatigue is being fed.",
      limit: 4,
      options: [
        { value: "context-switching", label: "Too much context switching" },
        { value: "decision-density", label: "Heavy decision density" },
        { value: "unfinished-tasks", label: "Unfinished mental loops" },
        { value: "screen-saturation", label: "Too much screen and input time" },
        { value: "performance-pressure", label: "Pressure to stay sharp" },
        { value: "interruptions", label: "Frequent interruptions" },
        { value: "weak-sleep", label: "Weak sleep or poor reset" },
        { value: "mental-overpreparation", label: "Constant mental overpreparation" },
      ],
    },
    {
      id: "step-7",
      step: 7,
      kind: "single-choice",
      field: "earlySignal",
      eyebrow: "Signal 07 · first sign",
      question: "What usually shows up first when mental fatigue is building?",
      hint: "Pick the first recognizable sign, not the later full-blown crash.",
      variant: "cards",
      options: [
        { value: "rereading", label: "I reread more", description: "My brain stops holding things cleanly the first time." },
        { value: "mental-blankness", label: "I go mentally blank", description: "Thought continuity drops and I lose the thread." },
        { value: "slower-recall", label: "Recall gets slower", description: "Names, details, or next steps take longer to find." },
        { value: "lower-complexity-tolerance", label: "Complexity tolerance drops", description: "I want smaller, simpler, less mentally demanding tasks." },
        { value: "avoid-thinking", label: "I want to avoid thinking", description: "The brain starts resisting effortful thought itself." },
      ],
    },
    {
      id: "step-8",
      step: 8,
      kind: "single-choice",
      field: "recoverySpeed",
      eyebrow: "Signal 08 · reset speed",
      question: "After a real break, how quickly does your mind start feeling meaningfully clearer again?",
      hint: "This asks whether the reset changes the internal state, not only whether you enjoy the break.",
      variant: "cards",
      options: [
        { value: "quick", label: "Quickly", description: "A break usually gives me real cognitive room back." },
        { value: "partial", label: "Partly", description: "I feel somewhat better, but not fully mentally reset." },
        { value: "slow", label: "Slowly", description: "It takes longer than it should for the brain to clear." },
        { value: "very-slow", label: "Barely at all", description: "Even a solid break does little to restore mental freshness." },
      ],
    },
    {
      id: "step-9",
      step: 9,
      kind: "slider",
      field: "clarityDrop",
      eyebrow: "Signal 09 · focus quality",
      question: "How much has mental fatigue been affecting your focus, clarity, or thought continuity lately?",
      hint: "Rate the size of the drop rather than how much you need to focus for work or life.",
      label: "Focus and clarity drop",
      minLabel: "Hardly affected",
      maxLabel: "Strongly affected",
      scaleHint: "When clarity drops under normal pressure, the brain often starts spending energy just to stay organized.",
    },
    {
      id: "step-10",
      step: 10,
      kind: "slider",
      field: "capacityDrop",
      eyebrow: "Signal 10 · cognitive stamina",
      question: "How much has your mental stamina or willingness to stay with effortful thought dropped?",
      hint: "This is about cognitive stamina, not about whether the task matters to you.",
      label: "Mental stamina drop",
      minLabel: "Still strong",
      maxLabel: "Much lower",
      scaleHint: "Mental fatigue often shows up in how short the brain’s usable runway becomes.",
    },
    {
      id: "step-11",
      step: 11,
      kind: "single-choice",
      field: "pressureResponse",
      eyebrow: "Signal 11 · fatigue response",
      question: "When your brain is tired, what tends to happen next?",
      hint: "Choose the response that feels most automatic when cognitive pressure climbs.",
      variant: "cards",
      options: [
        { value: "overthink-easy-things", label: "I overthink easy things", description: "Simple decisions suddenly require more mental work." },
        { value: "avoid-effortful-thinking", label: "I avoid effortful thinking", description: "I put off the mentally demanding parts first." },
        { value: "keep-going-but-slower", label: "I keep going, but slower", description: "I still function, but with lower cognitive speed." },
        { value: "lose-words-and-thread", label: "I lose words and thread", description: "Language and continuity get noticeably harder to hold." },
        { value: "default-to-autopilot", label: "I default to autopilot", description: "I choose the least effortful path, even when it is not ideal." },
      ],
    },
    {
      id: "step-12",
      step: 12,
      kind: "slider",
      field: "hiddenLoad",
      eyebrow: "Signal 12 · invisible mental load",
      question: "How much mental carrying feels invisible to other people around you?",
      hint: "Think about the planning, anticipating, remembering, or holding that never fully shows on the outside.",
      label: "Invisible mental load",
      minLabel: "Mostly visible",
      maxLabel: "Mostly unseen",
      scaleHint: "Brains tire faster when the true amount of mental carrying is unshared or undercounted.",
    },
    {
      id: "step-13",
      step: 13,
      kind: "single-choice",
      field: "selfRead",
      eyebrow: "Signal 13 · pattern read",
      question: "Which statement feels most accurate about your current mental state?",
      hint: "Pick the option that best describes the pattern, not your preferred standard for functioning.",
      variant: "statement",
      options: [
        { value: "mind-is-basically-clear", label: "A", description: "My mind is basically clear, even if I get tired sometimes." },
        { value: "brain-is-running-hot", label: "B", description: "My brain feels like it has been running hot for too long." },
        { value: "thinking-costs-more-now", label: "C", description: "Thinking itself costs more than it should right now." },
        { value: "mental-reset-is-not-working", label: "D", description: "The bigger issue is that my mind is not fully resetting." },
        { value: "cognitive-room-keeps-shrinking", label: "E", description: "My cognitive room keeps shrinking under normal pressure." },
      ],
    },
    {
      id: "step-14",
      step: 14,
      kind: "single-choice",
      field: "hardestPart",
      eyebrow: "Signal 14 · hardest consequence",
      question: "What feels hardest inside the current mental-fatigue pattern?",
      hint: "Choose the consequence that makes the fatigue feel most disruptive day to day.",
      variant: "cards",
      options: [
        { value: "finishing-thoughts", label: "Finishing thoughts", description: "It is harder to stay with a line of thinking to completion." },
        { value: "holding-details", label: "Holding details", description: "Details slip faster and require more mental grip." },
        { value: "starting-effortful-work", label: "Starting effortful work", description: "The brain resists deep cognitive tasks sooner." },
        { value: "staying-patient", label: "Staying patient with simple things", description: "Low-complexity tasks feel weirdly irritating." },
        { value: "feeling-mentally-on", label: "Feeling mentally on", description: "The mind rarely feels fully online and ready." },
      ],
    },
    {
      id: "step-15",
      step: 15,
      kind: "single-choice",
      field: "currentState",
      eyebrow: "Signal 15 · final self-read",
      question: "Which statement feels closest to your current cognitive state?",
      hint: "This final step helps the check compare your lived experience with the structural fatigue signal.",
      variant: "statement",
      options: [
        { value: "tired-but-still-usable", label: "A", description: "I am tired, but my brain still feels basically usable." },
        { value: "mentally-dragging", label: "B", description: "My brain feels like it is dragging behind what the day requires." },
        { value: "cognitive-recovery-is-lagging", label: "C", description: "My cognitive recovery is not catching up with the load." },
        { value: "brain-is-overused", label: "D", description: "My brain feels overused and under-reset." },
      ],
    },
  ],
  choiceScores: {
    loadFrequency: {
      occasional: 14,
      regular: 40,
      frequent: 74,
      constant: 94,
    },
    switchOff: {
      easy: 8,
      "mostly-easy": 24,
      mixed: 50,
      difficult: 78,
      "very-difficult": 96,
    },
    restoration: {
      fresh: 10,
      decent: 28,
      uneven: 54,
      foggy: 80,
      "still-drained": 96,
    },
    dailyHeaviness: {
      rare: 12,
      sometimes: 40,
      often: 72,
      "almost-always": 92,
    },
    earlySignal: {
      rereading: 62,
      "mental-blankness": 76,
      "slower-recall": 70,
      "lower-complexity-tolerance": 82,
      "avoid-thinking": 88,
    },
    recoverySpeed: {
      quick: 12,
      partial: 38,
      slow: 74,
      "very-slow": 96,
    },
    pressureResponse: {
      "overthink-easy-things": 72,
      "avoid-effortful-thinking": 82,
      "keep-going-but-slower": 60,
      "lose-words-and-thread": 84,
      "default-to-autopilot": 76,
    },
    selfRead: {
      "mind-is-basically-clear": 24,
      "brain-is-running-hot": 52,
      "thinking-costs-more-now": 74,
      "mental-reset-is-not-working": 84,
      "cognitive-room-keeps-shrinking": 92,
    },
    hardestPart: {
      "finishing-thoughts": 72,
      "holding-details": 76,
      "starting-effortful-work": 82,
      "staying-patient": 66,
      "feeling-mentally-on": 86,
    },
    currentState: {
      "tired-but-still-usable": 30,
      "mentally-dragging": 58,
      "cognitive-recovery-is-lagging": 82,
      "brain-is-overused": 94,
    },
  },
  sourceOptionScores: {
    "context-switching": 80,
    "decision-density": 78,
    "unfinished-tasks": 82,
    "screen-saturation": 68,
    "performance-pressure": 74,
    interruptions: 72,
    "weak-sleep": 88,
    "mental-overpreparation": 76,
  },
  sourceBucketMap: {
    "context-switching": "cognitive",
    "decision-density": "demand",
    "unfinished-tasks": "cognitive",
    "screen-saturation": "rest",
    "performance-pressure": "emotional",
    interruptions: "relational",
    "weak-sleep": "rest",
    "mental-overpreparation": "emotional",
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
    mentalLoad: [
      { kind: "choice", field: "loadFrequency", weight: 0.2 },
      { kind: "choice", field: "dailyHeaviness", weight: 0.18 },
      { kind: "slider", field: "hiddenLoad", weight: 0.14 },
      { kind: "choice", field: "selfRead", weight: 0.12 },
      { kind: "source", bucket: "demand", weight: 0.16 },
      { kind: "source", bucket: "cognitive", weight: 0.2 },
    ],
    attentionErosion: [
      { kind: "choice", field: "switchOff", weight: 0.12 },
      { kind: "choice", field: "earlySignal", weight: 0.14 },
      { kind: "slider", field: "clarityDrop", weight: 0.28 },
      { kind: "choice", field: "pressureResponse", weight: 0.12 },
      { kind: "choice", field: "hardestPart", weight: 0.14 },
      { kind: "source", bucket: "cognitive", weight: 0.2 },
    ],
    recoveryEfficiency: [
      { kind: "slider", field: "endReserve", weight: 0.2, invert: true },
      { kind: "choice", field: "restoration", weight: 0.28 },
      { kind: "choice", field: "recoverySpeed", weight: 0.24 },
      { kind: "choice", field: "currentState", weight: 0.1 },
      { kind: "source", bucket: "rest", weight: 0.18 },
    ],
    motivationDrag: [
      { kind: "slider", field: "capacityDrop", weight: 0.28 },
      { kind: "choice", field: "pressureResponse", weight: 0.16 },
      { kind: "choice", field: "selfRead", weight: 0.14 },
      { kind: "choice", field: "hardestPart", weight: 0.16 },
      { kind: "source", bucket: "emotional", weight: 0.12 },
      { kind: "source", bucket: "relational", weight: 0.14 },
    ],
  },
  meaningBlocks: [
    {
      title: "What mental fatigue actually is",
      paragraphs: [
        "Mental fatigue is more specific than being tired. It is what happens when the brain has been spending too much on thinking, choosing, tracking, switching, anticipating, or holding unfinished loops for too long without enough true reset. You can be physically able to keep going and still feel mentally overused. That distinction matters, because many people assume that if their body is still functioning, the issue must be laziness, weak discipline, or a motivation problem. In reality, the cognitive system may simply be taxed.",
        "One reason mental fatigue is confusing is that it does not always look dramatic. Sometimes it looks like rereading the same paragraph, feeling strangely resistant to small decisions, losing tolerance for complexity, or becoming irritated by tasks that are not objectively that hard. Those signals often show up before a person would ever say, 'My brain is exhausted.'",
        "This check is built to map that hidden wear. Instead of asking only whether you are tired, it looks at continuity, recovery, thinking heaviness, mental off-switch difficulty, and the conditions most likely to keep the brain open when it needs to stand down.",
      ],
    },
    {
      title: "Why your brain can feel exhausted even when you are still performing",
      paragraphs: [
        "Performance and cognitive ease are not the same thing. Many people keep working, planning, replying, leading, and solving while their brain is becoming less efficient, less clear, and more effortful to operate. Outward competence can hide a lot of private strain. The person still looks functional, but the mind is taking longer to do simple things, bleeding energy through too many open loops, and recovering more slowly from ordinary thought-demand.",
        "That is why mental fatigue often gets mislabeled. People say they are unmotivated when the real issue is that their brain has too little clean cognitive room. They say they are procrastinating when the true problem is that effortful thinking now costs too much. They say they need to be more disciplined when the system itself has become overused.",
        "The solution changes when you see that difference. You stop treating the brain like a machine that simply needs more force and start asking what is keeping it open, overloaded, or unrecovered.",
      ],
    },
    {
      title: "How cognitive overload quietly compounds",
      paragraphs: [
        "Cognitive overload compounds because the brain pays not only for the task, but for the switching around the task. It pays for the half-finished idea that needs reopening, the decision that stays unresolved, the interruption that breaks thought continuity, and the mental preparation for something that has not happened yet. That means the day can look manageable on the calendar while still being cognitively expensive under the surface.",
        "Once the brain becomes tired, this compounding gets steeper. Re-entry takes longer. Clarity narrows. Tasks that once felt ordinary start asking for more initiation energy. The system becomes less forgiving of interruptions and less willing to stay with demanding work. That is often the point where people assume something is wrong with them, when the more accurate explanation is that the brain is running on too little mental margin.",
        "Making the compounding visible is one of the best reasons to use a tool like this. It turns a vague sense of brain-heaviness into a pattern you can actually respond to.",
      ],
    },
  ],
  dimensionEditorial: [
    {
      key: "mentalLoad",
      paragraphs: [
        "Mental Load measures how much total thinking demand the brain is being asked to hold. It includes explicit tasks, but also decisions, planning, anticipating, and the constant need to keep track.",
        "When this score is highest, the brain often feels full before the day is finished. The issue is not weakness. The issue is that there is too much architecture sitting in working memory.",
      ],
    },
    {
      key: "attentionErosion",
      paragraphs: [
        "Attention Erosion measures how much continuity and focus are being worn down by pressure, interruptions, and repeated reopening. It is the dimension that helps explain why you can still care about the work and still struggle to stay mentally with it.",
        "A high score here usually means the brain is burning energy on staying organized, not only on thinking clearly.",
      ],
    },
    {
      key: "recoveryEfficiency",
      paragraphs: [
        "Recovery Efficiency measures whether downtime is actually returning cognitive room. A person can stop working and still not feel mentally reset. That is often what keeps fatigue from clearing.",
        "When this score is low, the brain stays closer to active mode than it should, which makes the next round of thinking arrive before the previous one has been fully metabolized.",
      ],
    },
    {
      key: "motivationDrag",
      paragraphs: [
        "Motivation Drag is not about character. It measures how much mental fatigue is flattening initiation, willingness, and cognitive appetite. When the brain is tired enough, effortful thought starts to feel less inviting regardless of how much you care.",
        "That drag is often misread as avoidance when it is actually a fatigue signal from an overused cognitive system.",
      ],
    },
  ],
  riskBlocks: [
    {
      title: "Too much context switching",
      body:
        "Every switch forces the brain to re-enter, reload, and rebuild context, which quietly makes thinking more expensive across the whole day.",
    },
    {
      title: "Decision density",
      body:
        "A day full of small choices can tire the brain as much as one visibly difficult task when there is no relief between the decisions.",
    },
    {
      title: "Unfinished mental loops",
      body:
        "The brain keeps paying for what it has not closed. Open loops create hidden background strain even when you are not actively working on them.",
    },
    {
      title: "Weak cognitive reset",
      body:
        "Mental fatigue becomes sticky when off-time still contains too much stimulation, too much planning, or too little true quiet.",
    },
  ],
  reductionBlocks: [
    {
      title: "Reduce reopenings",
      body:
        "Fewer open tabs, cleaner sequencing, and smaller decision sets lower how much the brain has to rebuild again and again.",
    },
    {
      title: "Create real mental closure",
      body:
        "Closure rituals, shorter unfinished lists, and clearer stopping points often restore more cognitive room than people expect.",
    },
    {
      title: "Protect low-noise recovery",
      body:
        "The brain usually resets best when downtime is lower-stimulation, less performative, and less full of incoming demands.",
    },
    {
      title: "Respect cognitive stamina",
      body:
        "Mental fatigue improves when you stop treating thinking capacity like an endless resource and start pacing around the actual runway you have.",
    },
  ],
  storyBlock: {
    eyebrow: "Emotionally real story",
    title: "He was still getting things done, but his brain felt heavy to operate",
    quote:
      "This can look like someone assuming they are just distracted because the work is still getting done. But the brain starts feeling heavy long before the day ends. Things get reread more often. Decisions feel oddly sticky. Starting mentally demanding work takes more effort than it used to. It is easy to blame discipline or motivation. The deeper issue is often that the thinking system has been overused and under-reset, so even normal mental work starts feeling expensive.",
    takeaway:
      "That is how mental fatigue often hides: not as visible collapse, but as a brain that can still function while quietly losing clean internal room.",
    toneLabel: "Lived cognitive pattern",
    accent: "#6FD3FF",
  },
  nextStepParagraphs: [
    "If this result feels accurate, start by identifying what keeps reopening your brain after the main task should be over. That might be too many decisions, unfinished loops, constant context switching, performance pressure, or weak reset at the end of the day. Reducing that reopening cost is often more powerful than generic productivity strategies.",
    "Then protect one form of real cognitive recovery. Many people stop working but do not stop feeding the mind. Better recovery usually means lower stimulation, fewer loose ends, and less quiet self-pressure to keep optimizing every spare minute.",
    "Finally, stop moralizing cognitive fatigue. A tired brain is not a character flaw. If thinking has become expensive, the right question is not 'How do I force more?' It is 'What is costing the brain more than it can cleanly restore right now?'",
  ],
  nextStepPanel: {
    eyebrow: "Recommended next step",
    title: "Mental Reset Sprint",
    description:
      "A structured guide for lowering cognitive overload, reducing open loops, and giving your brain more believable recovery space.",
    buttonLabel: "View Next Step",
  },
  relatedTools: [
    {
      title: "Focus Friction Audit",
      description: "See whether your attention problem is really about friction, overload, or start resistance.",
      category: "Focus & Procrastination",
      minutes: "4 min",
      icon: "graph",
      href: buildToolHref({ slug: "focus-friction-audit", categorySlug: "focus-procrastination" }),
    },
    {
      title: "Decision Fatigue Simulator",
      description: "Map how repeated choices and uncertainty quietly wear down clarity through the day.",
      category: "Anxiety & Overthinking",
      minutes: "4 min",
      icon: "pattern",
      href: buildToolHref({ slug: "decision-fatigue-simulator", categorySlug: "anxiety-overthinking" }),
    },
    {
      title: "Burnout Risk Audit",
      description: "Check whether ongoing mental fatigue is part of a larger depletion and recovery-deficit pattern.",
      category: "Stress & Burnout",
      minutes: "4 min",
      icon: "trend",
      href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
    },
    {
      title: "Inner Critic Intensity Scan",
      description: "See whether harsh self-pressure is making the brain work harder than the task itself requires.",
      category: "Self-Esteem & Confidence",
      minutes: "5 min",
      icon: "insight",
      href: buildToolHref({ slug: "inner-critic-intensity-scan", categorySlug: "self-esteem-confidence" }),
    },
  ],
  faqItems: [
    {
      question: "What does a mental fatigue score actually mean?",
      answer:
        "It is a directional read of how overused and under-reset the thinking system looks right now. A higher score means the brain appears to be carrying more cognitive load, weaker recovery, and more mental drag than it can easily clear.",
    },
    {
      question: "Is mental fatigue the same as physical tiredness?",
      answer:
        "No. They can overlap, but they are not identical. Physical tiredness is about bodily energy. Mental fatigue is more about clarity, mental continuity, decision stamina, and how expensive thinking itself feels.",
    },
    {
      question: "Why can my brain feel exhausted even when I slept okay?",
      answer:
        "Because sleep is only one part of the equation. Too much switching, too many open loops, heavy decisions, performance pressure, or constant mental preparation can still leave the brain overused even after a technically decent night.",
    },
    {
      question: "What is the difference between mental fatigue and procrastination?",
      answer:
        "Procrastination is a behavior. Mental fatigue is a system state. A person may delay because the brain is tired and effortful thought has become unusually costly. The behavior looks similar, but the driver is different.",
    },
    {
      question: "Why do simple decisions feel harder when I am mentally fatigued?",
      answer:
        "Because decision-making still costs cognitive energy. When the brain has less margin, even small choices start competing for resources that are already stretched thinner than usual.",
    },
    {
      question: "Can unfinished tasks really drain my brain that much?",
      answer:
        "Yes. Open loops continue occupying cognitive space even when you are not actively working on them. They create background demand, which is one reason the brain can feel tired without visible progress explaining it.",
    },
    {
      question: "What does a weak mental off-switch mean?",
      answer:
        "It means the brain struggles to stop running after the visible work ends. You may technically pause, but thoughts, planning, or mental replay keep the system engaged longer than it should.",
    },
    {
      question: "How often should I retake the Mental Fatigue Check?",
      answer:
        "Every one to two weeks is usually enough if your schedule, sleep, decision load, or recovery quality is changing. It is especially useful after reducing a major cognitive friction point.",
    },
    {
      question: "What should I do first if my mental fatigue score is high?",
      answer:
        "Start by lowering one meaningful source of mental reopening. That could mean fewer open tabs, fewer decision points, clearer closure, or more believable off-time. Small cognitive reductions can create outsized relief.",
    },
    {
      question: "Can mental fatigue improve without taking a long vacation?",
      answer:
        "Often, yes. Longer breaks can help, but mental fatigue also responds to cleaner daily structure, fewer reopenings, lower decision density, and better quality cognitive reset inside ordinary life.",
    },
  ],
  heroPreviewAnswers: {
    loadFrequency: "frequent",
    endReserve: 28,
    switchOff: "difficult",
    restoration: "foggy",
    dailyHeaviness: "often",
    sources: ["context-switching", "unfinished-tasks", "weak-sleep", "performance-pressure"],
    earlySignal: "rereading",
    recoverySpeed: "slow",
    clarityDrop: 72,
    capacityDrop: 66,
    pressureResponse: "overthink-easy-things",
    hiddenLoad: 68,
    selfRead: "thinking-costs-more-now",
    hardestPart: "starting-effortful-work",
    currentState: "cognitive-recovery-is-lagging",
  },
  resultText: {
    signalLabel: ({ band, topDimension, secondDimension }) =>
      `Mental fatigue looks ${band.signalTone} across ${topDimension.label.toLowerCase()} and ${secondDimension.label.toLowerCase()}.`,
    standout: ({ band, topDimension, sourcePhrase }) =>
      `${band.standoutLead} ${topDimension.label} is the clearest strain point right now, with ${sourcePhrase} doing the most to keep the brain taxed.`,
    nextStep: ({ band, topDimension, sourcePhrase }) =>
      `${band.nextStepLead} Start by reducing ${sourcePhrase} while creating more room underneath ${topDimension.label.toLowerCase()}.`,
    alignmentNote: ({ difference }) => {
      if (difference === null) {
        return "Use the score as a cognitive-load readout, not as a judgment about your intelligence, work ethic, or capability.";
      }

      if (difference >= 16) {
        return "Your self-read sounds heavier than the averaged score, which often happens when mental fatigue is especially visible from inside the brain but less obvious from the outside.";
      }

      if (difference <= -16) {
        return "The structural markers are running higher than your self-read, which can happen when competence and habit are masking how taxed the cognitive system has become.";
      }

      return "Your self-read and the cognitive-fatigue pattern are broadly aligned, which adds confidence that the mental strain showing up here is worth taking seriously.";
    },
  },
};
