import { buildToolHref } from "./tools-home";
import type { BurnoutFamilyTool } from "./burnout-family";

export const emotionalExhaustionAuditTool: BurnoutFamilyTool = {
  slug: "emotional-exhaustion-audit",
  categorySlug: "stress-burnout",
  pageMetadata: {
    title: "Emotional Exhaustion Audit: Why Do I Feel Emotionally Drained?",
    description:
      "Use the Emotional Exhaustion Audit to see whether you feel drained by emotional labor, relational pressure, carryover tension, weak replenishment, or the cost of staying available too long.",
    keywords: [
      "emotional exhaustion audit",
      "why do i feel emotionally drained",
      "emotionally exhausted test",
      "emotional depletion tool",
      "emotional labor burnout",
      "why do i feel numb and tired",
    ],
    openGraphTitle: "Emotional Exhaustion Audit",
    openGraphDescription:
      "A premium interactive tool for mapping emotional depletion, relational pressure, recovery softness, and carryover load.",
    twitterTitle: "Emotional Exhaustion Audit",
    twitterDescription:
      "Check whether emotional exhaustion is coming from over-caring, weak replenishment, emotional carryover, or too much invisible holding.",
  },
  toolMetadata: {
    eyebrow: "EMOTIONAL DEPLETION TOOL",
    title: "Emotional Exhaustion Audit",
    description:
      "See whether emotional exhaustion is being driven by constant emotional labor, relational overexposure, hidden carrying, weak replenishment, or the slow cost of staying available too long. This tool reads emotional depletion as a system pattern, not a personality flaw.",
    metadata: [
      { icon: "time", label: "2-4 minutes" },
      { icon: "signal", label: "Free tool" },
      { icon: "privacy", label: "Private by design" },
    ],
    primaryCta: "Start Audit",
    secondaryCta: "See Emotional Signals",
  },
  experienceCopy: {
    sectionTitle:
      "A premium emotional-depletion audit built to show whether your system is thinning from too much feeling, too much carrying, or too little true replenishment",
    sectionDescription:
      "One emotional signal at a time. Calm interaction, live depletion mapping, and deterministic scoring underneath the experience so the result feels grounded and usable.",
    progressEyebrow: "Emotional exhaustion audit",
    sidebarStatusEyebrow: "Audit status",
    sidebarStatusTitle: "emotional markers mapped",
    sidebarStatusDescription:
      "As you answer, the live read separates emotional capacity from carryover, protective withdrawal, and thin restoration.",
    sidebarEmergingEyebrow: "Emerging depletion read",
    sidebarEmergingDescription:
      "Watch whether the pattern looks more like emotional thinning, relational overexposure, weak recovery, or accumulated internal carrying.",
    footerPending:
      "Answer for your recent emotional baseline, not only for the single day when you felt especially shut down or especially tender.",
    footerComplete:
      "Result unlocked. You can revise any answer and the emotional-exhaustion report will redraw immediately.",
    revealLabel: "Reveal Audit",
    metaChips: ["Emotional capacity", "Carryover load", "Private by design"],
  },
  resultCopy: {
    sectionTitle:
      "An emotional-capacity report that shows where warmth is thinning, what is staying with you too long, and why recovery may not be softening the system enough",
    sectionDescription:
      "The score matters, but the sharper read comes from the top depletion dimension, the kind of pressure feeding it, and the gap between what the day costs and what replenishment is returning.",
    reportLabel: "Emotional exhaustion report",
    scoreLabel: "Emotional exhaustion score",
    standoutLabel: "What stands out",
    nextStepLabel: "What to restore first",
    retakeLabel: "Retake Audit",
  },
  visualCopy: {
    sectionTitle:
      "Four visual reads of emotional depletion, recovery softness, protective withdrawal, and the source pattern behind the heaviness",
    sectionDescription:
      "These views help separate ordinary tiredness from emotional exhaustion by showing whether the main issue is reduced capacity, emotional carryover, weak replenishment, or the way the system is protecting itself.",
    dial: {
      eyebrow: "Emotional exhaustion dial",
      title: "Overall depletion concentration",
      copy:
        "A quick visual read of how emotionally taxed the system currently looks once capacity loss, carryover, recovery softness, and protective withdrawal are weighted together.",
      label: "Emotional exhaustion",
      caption: "Live depletion load",
    },
    signalBars: {
      eyebrow: "4-dimension signal bars",
      title: "Where emotional exhaustion is concentrating",
      copy:
        "These bars separate raw emotional depletion from carryover load, protective withdrawal, and the ability of rest to return softness.",
    },
    recovery: {
      eyebrow: "Restoration gap chart",
      title: "Is emotional recovery actually reaching you?",
      copy:
        "Emotional exhaustion gets sticky when time off pauses the demands but does not fully return warmth, openness, or usable internal room.",
      loadLabel: "Current depletion",
      recoveryLabel: "Replenishment capacity",
      gapLabel: "Restoration gap",
      gapInsight: (result) =>
        result.recoveryGap > 0
          ? `Your current restoration gap is ${result.recoveryGap} points, which suggests the emotional system is staying taxed longer than the visible demands alone would explain.`
          : "Depletion and replenishment look relatively balanced right now, which usually means the emotional system still has some softness left to work with.",
    },
    sourceSplit: {
      eyebrow: "Emotional source split",
      title: "What is draining the system most",
      copy:
        "This source map shows whether the emotional cost is coming more from constant demand, relational overexposure, thin replenishment, emotional residue, or internal overprocessing.",
      insight: (result) =>
        `The strongest depletion source currently leans toward ${result.dominantSources[0]?.label.toLowerCase() ?? "balanced pressure"}, which helps explain why you may feel more emotionally tired than the outside picture suggests.`,
    },
  },
  editorialCopy: {
    meaningEyebrow: "Reading the audit",
    meaningTitle: "What this result usually means",
    meaningDescription:
      "Use these score bands as a map of emotional depletion, not as proof that you are weak, uncaring, or failing to cope well enough.",
    dimensionsEyebrow: "Emotional exhaustion dimensions",
    dimensionsTitle: "The 4 dimensions of emotional exhaustion",
    dimensionsDescription:
      "These dimensions separate reduced emotional capacity from protective withdrawal, recovery softness, and the internal carryover that keeps depletion alive.",
    riskEyebrow: "What feeds emotional depletion",
    riskTitle: "What increases emotional exhaustion",
    riskDescription:
      "Emotional exhaustion usually grows through repeated small extractions of energy and care, especially when they are not followed by repair, softness, or enough room to come back to yourself.",
    reductionEyebrow: "What helps restore softness",
    reductionTitle: "What helps reduce emotional exhaustion",
    reductionDescription:
      "The most useful moves reduce emotional overexposure and improve replenishment at the same time. Relief rarely comes from force alone.",
    storyEyebrow: "How this often feels",
    storyTitle: "When warmth starts costing too much",
    storyDescription:
      "Emotional exhaustion often hides behind responsibility. The person still shows up, still responds, still cares. The missing piece is how expensive that caring has become.",
    nextEyebrow: "What to do next",
    nextTitle: "What to do next",
    nextDescription:
      "If the score feels true, the next step is not to become colder or tougher. It is to identify what keeps drawing emotional energy out faster than the system can honestly replace it.",
    relatedEyebrow: "Related tools",
    relatedTitle: "Related tools",
    relatedDescription:
      "Use nearby tools if this audit points toward burnout drift, emotional recovery gaps, resentment accumulation, or daily functioning that looks steadier than it feels.",
    faqEyebrow: "Questions that usually come next",
    faqTitle: "Emotional Exhaustion Audit FAQ",
    faqDescription:
      "Useful answers for the questions people ask when emotional tiredness starts feeling deeper than a bad day or a temporary mood.",
    faqIntro:
      "Use these questions to make sense of emotional exhaustion with more nuance: what it is, why it builds quietly, and how to respond without turning yourself into a machine.",
  },
  bands: [
    {
      key: "emotionally-steady-base",
      min: 0,
      max: 24,
      title: "Emotionally Steady Base",
      summary:
        "Your current pattern suggests that emotional demand is present, but it is not strongly flattening warmth, patience, or recovery.",
      interpretation:
        "This usually means you still have enough replenishment and internal room to stay connected to yourself while handling ordinary pressure.",
      standoutLead: "The main signal is preserved softness.",
      nextStepLead:
        "Protect the conditions that are helping your emotional system stay open before the load gets normalized and more expensive to carry.",
      signalTone: "steady",
      gradientFrom: "#6FD3FF",
      gradientTo: "#3DDC97",
      glow: "rgba(111, 211, 255, 0.32)",
    },
    {
      key: "early-emotional-drain",
      min: 25,
      max: 44,
      title: "Early Emotional Drain",
      summary:
        "The system looks somewhat emotionally taxed, even if you are still outwardly coping and functioning.",
      interpretation:
        "This often feels like lower patience, less buffer for other people, and a softer version of depletion that is easy to downplay because you can still perform.",
      standoutLead: "The signal suggests emotional wear, not collapse.",
      nextStepLead:
        "Reduce one repeat drain on your emotional energy before the current tiredness quietly becomes your new normal.",
      signalTone: "thinning",
      gradientFrom: "#6FD3FF",
      gradientTo: "#F6C177",
      glow: "rgba(246, 193, 119, 0.28)",
    },
    {
      key: "accumulating-emotional-depletion",
      min: 45,
      max: 64,
      title: "Accumulating Emotional Depletion",
      summary:
        "Your answers suggest a real exhaustion pattern in the emotional system, not just a hard week or a simple need for one night off.",
      interpretation:
        "At this level, people often remain responsible and responsive, but they do so from a thinner internal place. Warmth is still there. It just costs more to access.",
      standoutLead: "The clearest signal is accumulated depletion.",
      nextStepLead:
        "Lower emotional extraction and improve replenishment together, because either move on its own usually feels partial here.",
      signalTone: "accumulating",
      gradientFrom: "#F6C177",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.26)",
    },
    {
      key: "high-emotional-exhaustion",
      min: 65,
      max: 84,
      title: "High Emotional Exhaustion",
      summary:
        "The pattern points to a system that is emotionally overused across multiple lanes at once: capacity, patience, carryover, and recovery.",
      interpretation:
        "This level often shows up as caring with strain, going flat after demand, or feeling more guarded because your emotional margin has become too small.",
      standoutLead: "The strongest signal is low emotional margin.",
      nextStepLead:
        "Reduce exposure to what keeps pulling on your emotional reserves, because continuing to perform from a thin place often deepens the exhaustion quietly.",
      signalTone: "depleted",
      gradientFrom: "#FF9B73",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.34)",
    },
    {
      key: "deep-emotional-thinning",
      min: 85,
      max: 100,
      title: "Deep Emotional Thinning",
      summary:
        "The current signal suggests a system carrying too much emotional demand and too little true replenishment for too long.",
      interpretation:
        "This does not mean you are uncaring. It means emotional capacity has been taxed hard enough that numbness, irritability, or distance may be functioning like protection.",
      standoutLead: "The clearest signal is sustained emotional overdraw.",
      nextStepLead:
        "Treat this as a cue to protect capacity honestly, simplify where possible, and create more believable emotional recovery instead of asking yourself for one more push.",
      signalTone: "overdrawn",
      gradientFrom: "#FF7B72",
      gradientTo: "#A78BFA",
      glow: "rgba(167, 139, 250, 0.28)",
    },
  ],
  dimensions: [
    {
      key: "emotionalCapacity",
      label: "Emotional Capacity",
      description: "How much usable warmth, patience, and internal room you still have available day to day.",
      icon: "signal",
      accent: "#6FD3FF",
    },
    {
      key: "protectiveWithdrawal",
      label: "Protective Withdrawal",
      description: "How much the system is going flatter, quieter, or more guarded in order to cope with emotional strain.",
      icon: "shield",
      accent: "#A78BFA",
    },
    {
      key: "restorativeReturn",
      label: "Restorative Return",
      description: "Whether alone time, quiet time, and lighter periods actually restore emotional softness.",
      icon: "trend",
      accent: "#3DDC97",
    },
    {
      key: "carryoverLoad",
      label: "Carryover Load",
      description: "How much emotional residue continues running after the conversation, demand, or hard moment ends.",
      icon: "insight",
      accent: "#FF7B72",
    },
  ],
  sourceBuckets: [
    { key: "demand", label: "Constant demand", accent: "#6FD3FF" },
    { key: "emotional", label: "Emotional residue", accent: "#A78BFA" },
    { key: "rest", label: "Thin replenishment", accent: "#3DDC97" },
    { key: "relational", label: "Relational overexposure", accent: "#FF7B72" },
    { key: "cognitive", label: "Internal overprocessing", accent: "#F6C177" },
  ],
  steps: [
    {
      id: "step-1",
      step: 1,
      kind: "single-choice",
      field: "loadFrequency",
      eyebrow: "Signal 01 · emotional load frequency",
      question: "How often does your emotional system feel overdrawn before the day is actually over?",
      hint: "Answer for your recent baseline rather than for the single day that hit especially hard.",
      variant: "cards",
      options: [
        { value: "occasional", label: "Occasional", description: "It happens, but only in clearly intense stretches." },
        { value: "noticeable", label: "Noticeable", description: "You feel emotionally taxed often enough to recognize the pattern." },
        { value: "frequent", label: "Frequent", description: "Emotional drain is showing up across many ordinary weeks." },
        { value: "near-constant", label: "Near constant", description: "It often feels like your emotional system is carrying more than it can comfortably hold." },
      ],
    },
    {
      id: "step-2",
      step: 2,
      kind: "slider",
      field: "endReserve",
      eyebrow: "Signal 02 · evening reserve",
      question: "How much emotional reserve do you usually have left by evening?",
      hint: "Think about your actual internal room at the end of a typical day, not whether you can still keep functioning.",
      label: "Emotional reserve",
      minLabel: "Nothing left",
      maxLabel: "Still open",
      scaleHint: "Low reserve often means the emotional system is spending more than it is recovering.",
    },
    {
      id: "step-3",
      step: 3,
      kind: "single-choice",
      field: "switchOff",
      eyebrow: "Signal 03 · emotional stand-down",
      question: "How easy is it to emotionally come down after a demanding day, tense interaction, or long stretch of holding it together?",
      hint: "This is about whether your system can actually soften after demand ends.",
      variant: "segments",
      options: [
        { value: "very-easy", label: "Very easy" },
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
      eyebrow: "Signal 04 · replenishment quality",
      question: "When you finally get time to yourself, how emotionally replenishing does it actually feel?",
      hint: "A break only counts as replenishing if your inner state actually changes.",
      variant: "visual",
      options: [
        { value: "returns-me", label: "It returns me", description: "Quiet time usually brings real softness back." },
        { value: "helps-some", label: "It helps some", description: "You feel better, but not fully reset." },
        { value: "inconsistent", label: "It is inconsistent", description: "Sometimes it helps. Sometimes the depletion stays." },
        { value: "barely-softens", label: "It barely softens", description: "Rest creates space, but not much emotional return." },
        { value: "still-flat", label: "I still feel flat", description: "Even recovery time does not do much to restore you." },
      ],
    },
    {
      id: "step-5",
      step: 5,
      kind: "single-choice",
      field: "dailyHeaviness",
      eyebrow: "Signal 05 · heaviness of normal asks",
      question: "How often do ordinary requests, messages, or emotional asks feel heavier than their actual size?",
      hint: "This is often one of the earliest signs that emotional margin is thinning.",
      variant: "cards",
      options: [
        { value: "rarely-heavy", label: "Rarely", description: "Most normal asks still feel proportionate." },
        { value: "sometimes-heavy", label: "Sometimes", description: "You notice extra emotional drag on ordinary things." },
        { value: "often-heavy", label: "Often", description: "Normal asks now carry more weight than they used to." },
        { value: "almost-always-heavy", label: "Almost always", description: "Even small emotional demands can feel like one ask too many." },
      ],
    },
    {
      id: "step-6",
      step: 6,
      kind: "multi-select",
      field: "sources",
      eyebrow: "Signal 06 · source mapping",
      question: "Which emotional drains are most active for you right now?",
      hint: "Choose up to four. The audit uses these to map what kind of depletion is building.",
      limit: 4,
      options: [
        { value: "constant-emotional-labor", label: "Constant emotional labor" },
        { value: "being-the-steady-one", label: "Being the steady one for others" },
        { value: "conflict-carryover", label: "Conflict or tension that lingers" },
        { value: "not-enough-replenishment", label: "Not enough real replenishment" },
        { value: "absorbing-others-moods", label: "Absorbing other people's moods" },
        { value: "little-acknowledgment", label: "Giving a lot with little acknowledgment" },
        { value: "hard-conversations", label: "Repeated hard conversations" },
        { value: "being-needed-too-often", label: "Being needed too often" },
      ],
    },
    {
      id: "step-7",
      step: 7,
      kind: "single-choice",
      field: "earlySignal",
      eyebrow: "Signal 07 · first internal sign",
      question: "What tends to show up first when emotional exhaustion starts building?",
      hint: "Choose the earliest signal, not the most dramatic one.",
      variant: "cards",
      options: [
        { value: "numbness", label: "A little numbness", description: "You feel flatter or less responsive than usual." },
        { value: "irritability", label: "Irritability", description: "Your emotional buffer gets shorter and thinner." },
        { value: "going-quiet", label: "Going quiet", description: "You withdraw because there is less room to stay engaged." },
        { value: "compassion-thins", label: "Compassion thins", description: "You still care, but with much less internal ease." },
        { value: "one-more-thing-is-too-much", label: "\"One more thing\" feels like too much", description: "The system reacts as though capacity has already been spent." },
      ],
    },
    {
      id: "step-8",
      step: 8,
      kind: "single-choice",
      field: "recoverySpeed",
      eyebrow: "Signal 08 · softness return speed",
      question: "After protected quiet or a lighter day, how quickly does warmth or emotional room come back?",
      hint: "This is about the pace of real return, not whether you can look calmer for an hour.",
      variant: "cards",
      options: [
        { value: "quickly", label: "Quickly", description: "A little protected time usually helps noticeably." },
        { value: "partly", label: "Partly", description: "Recovery helps, but not as fully as you would hope." },
        { value: "slowly", label: "Slowly", description: "It takes longer than it used to feel like yourself again." },
        { value: "barely", label: "Barely at all", description: "Even good pauses do not shift much emotionally." },
      ],
    },
    {
      id: "step-9",
      step: 9,
      kind: "slider",
      field: "clarityDrop",
      eyebrow: "Signal 09 · emotional clarity drift",
      question: "How much has emotional exhaustion been affecting patience, perspective, or your ability to respond cleanly?",
      hint: "Use the slider for the size of the internal drop, not for how important the situation is.",
      label: "Emotional clarity drop",
      minLabel: "Almost none",
      maxLabel: "A major drop",
      scaleHint: "Emotional exhaustion often becomes costly once perspective and patience start shrinking.",
    },
    {
      id: "step-10",
      step: 10,
      kind: "slider",
      field: "capacityDrop",
      eyebrow: "Signal 10 · availability change",
      question: "How much has your emotional availability dropped compared with your usual baseline?",
      hint: "This is about accessible emotional room, not whether you are still forcing yourself to show up.",
      label: "Availability drop",
      minLabel: "Still available",
      maxLabel: "Much thinner",
      scaleHint: "Many people stay responsible long after emotional availability has started dropping.",
    },
    {
      id: "step-11",
      step: 11,
      kind: "single-choice",
      field: "pressureResponse",
      eyebrow: "Signal 11 · pressure response",
      question: "When emotional demand peaks, which response feels most familiar?",
      hint: "Choose the response your system defaults to, not the one that sounds most admirable.",
      variant: "cards",
      options: [
        { value: "show-up-but-tired", label: "I still show up, but tired", description: "I stay caring, though it costs more than it should." },
        { value: "go-flat-to-cope", label: "I go a little flat", description: "The system dampens feeling to get through." },
        { value: "get-sharper", label: "I get sharper than I want", description: "I become more brittle or impatient." },
        { value: "feel-hollow-while-functioning", label: "I function, but feel hollow", description: "I keep doing what is needed without much emotional room behind it." },
        { value: "want-everyone-to-need-less", label: "I want everyone to need less", description: "More demand feels hard to tolerate." },
      ],
    },
    {
      id: "step-12",
      step: 12,
      kind: "slider",
      field: "hiddenLoad",
      eyebrow: "Signal 12 · invisible carrying",
      question: "How much of the emotional load you carry would other people around you actually recognize?",
      hint: "Think about what remains unseen because you still look composed, reliable, or functional.",
      label: "Hidden carrying",
      minLabel: "Very visible",
      maxLabel: "Mostly unseen",
      scaleHint: "Emotional depletion often compounds faster when the carrying stays invisible and unshared.",
    },
    {
      id: "step-13",
      step: 13,
      kind: "single-choice",
      field: "selfRead",
      eyebrow: "Signal 13 · current pattern read",
      question: "Which statement feels most accurate about your current emotional state?",
      hint: "Choose the line that matches the pattern, not the image you want to project.",
      variant: "statement",
      options: [
        { value: "tired-but-open", label: "A", description: "I am tired, but still emotionally open." },
        { value: "more-taxed-than-i-look", label: "B", description: "I am more emotionally taxed than I probably look." },
        { value: "caring-from-a-thinner-place", label: "C", description: "I am still caring, but from a much thinner place." },
        { value: "depletion-is-changing-how-i-relate", label: "D", description: "The depletion is starting to change how I show up with people." },
        { value: "functioning-with-less-warmth", label: "E", description: "I am functioning, but with a lot less warmth left." },
      ],
    },
    {
      id: "step-14",
      step: 14,
      kind: "single-choice",
      field: "hardestPart",
      eyebrow: "Signal 14 · hardest part",
      question: "What feels hardest in the current emotional exhaustion pattern?",
      hint: "Pick the part that makes the depletion feel most discouraging or most sticky.",
      variant: "cards",
      options: [
        { value: "caring-when-empty", label: "Caring when empty", description: "I can still care, but it feels expensive." },
        { value: "bouncing-back", label: "Bouncing back", description: "Emotional recovery takes too long." },
        { value: "staying-warm-under-strain", label: "Staying warm under strain", description: "I become flatter or shorter more easily." },
        { value: "not-carrying-people-home", label: "Not carrying people home", description: "The emotional residue keeps following me." },
        { value: "admitting-how-drained-i-am", label: "Admitting how drained I am", description: "It is hard to be honest about how little margin I have left." },
      ],
    },
    {
      id: "step-15",
      step: 15,
      kind: "single-choice",
      field: "currentState",
      eyebrow: "Signal 15 · final self-read",
      question: "Which statement feels closest to your current state?",
      hint: "This final read helps compare your lived experience with the structural emotional signal picture.",
      variant: "statement",
      options: [
        { value: "still-present-to-life", label: "A", description: "I still feel basically present to life and to people." },
        { value: "stretched-too-long", label: "B", description: "I feel emotionally stretched for too long and too often." },
        { value: "running-low-on-softness", label: "C", description: "I am running low on real softness and reserve." },
        { value: "need-replenishment-more-than-push", label: "D", description: "What I need most is replenishment, not another push." },
      ],
    },
  ],
  choiceScores: {
    loadFrequency: {
      occasional: 18,
      noticeable: 42,
      frequent: 74,
      "near-constant": 94,
    },
    switchOff: {
      "very-easy": 10,
      "mostly-easy": 24,
      mixed: 52,
      difficult: 78,
      "very-difficult": 96,
    },
    restoration: {
      "returns-me": 8,
      "helps-some": 28,
      inconsistent: 56,
      "barely-softens": 82,
      "still-flat": 96,
    },
    dailyHeaviness: {
      "rarely-heavy": 12,
      "sometimes-heavy": 40,
      "often-heavy": 72,
      "almost-always-heavy": 92,
    },
    earlySignal: {
      numbness: 70,
      irritability: 74,
      "going-quiet": 76,
      "compassion-thins": 82,
      "one-more-thing-is-too-much": 92,
    },
    recoverySpeed: {
      quickly: 12,
      partly: 36,
      slowly: 74,
      barely: 96,
    },
    pressureResponse: {
      "show-up-but-tired": 48,
      "go-flat-to-cope": 78,
      "get-sharper": 80,
      "feel-hollow-while-functioning": 88,
      "want-everyone-to-need-less": 86,
    },
    selfRead: {
      "tired-but-open": 28,
      "more-taxed-than-i-look": 50,
      "caring-from-a-thinner-place": 68,
      "depletion-is-changing-how-i-relate": 84,
      "functioning-with-less-warmth": 92,
    },
    hardestPart: {
      "caring-when-empty": 74,
      "bouncing-back": 78,
      "staying-warm-under-strain": 80,
      "not-carrying-people-home": 84,
      "admitting-how-drained-i-am": 72,
    },
    currentState: {
      "still-present-to-life": 28,
      "stretched-too-long": 56,
      "running-low-on-softness": 82,
      "need-replenishment-more-than-push": 94,
    },
  },
  sourceOptionScores: {
    "constant-emotional-labor": 82,
    "being-the-steady-one": 76,
    "conflict-carryover": 74,
    "not-enough-replenishment": 88,
    "absorbing-others-moods": 80,
    "little-acknowledgment": 68,
    "hard-conversations": 72,
    "being-needed-too-often": 84,
  },
  sourceBucketMap: {
    "constant-emotional-labor": "demand",
    "being-the-steady-one": "relational",
    "conflict-carryover": "emotional",
    "not-enough-replenishment": "rest",
    "absorbing-others-moods": "relational",
    "little-acknowledgment": "emotional",
    "hard-conversations": "cognitive",
    "being-needed-too-often": "demand",
  },
  scoringWeights: {
    loadFrequency: 8,
    endReserve: 8,
    switchOff: 6,
    restoration: 8,
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
    emotionalCapacity: [
      { kind: "choice", field: "loadFrequency", weight: 0.2 },
      { kind: "slider", field: "capacityDrop", weight: 0.24 },
      { kind: "choice", field: "dailyHeaviness", weight: 0.16 },
      { kind: "choice", field: "selfRead", weight: 0.16 },
      { kind: "source", bucket: "demand", weight: 0.12 },
      { kind: "source", bucket: "relational", weight: 0.12 },
    ],
    protectiveWithdrawal: [
      { kind: "choice", field: "switchOff", weight: 0.14 },
      { kind: "choice", field: "earlySignal", weight: 0.22 },
      { kind: "choice", field: "pressureResponse", weight: 0.22 },
      { kind: "slider", field: "hiddenLoad", weight: 0.14 },
      { kind: "choice", field: "currentState", weight: 0.14 },
      { kind: "source", bucket: "emotional", weight: 0.14 },
    ],
    restorativeReturn: [
      { kind: "slider", field: "endReserve", weight: 0.22, invert: true },
      { kind: "choice", field: "restoration", weight: 0.28 },
      { kind: "choice", field: "recoverySpeed", weight: 0.24 },
      { kind: "choice", field: "hardestPart", weight: 0.08 },
      { kind: "source", bucket: "rest", weight: 0.18 },
    ],
    carryoverLoad: [
      { kind: "choice", field: "switchOff", weight: 0.14 },
      { kind: "slider", field: "clarityDrop", weight: 0.22 },
      { kind: "choice", field: "pressureResponse", weight: 0.18 },
      { kind: "slider", field: "hiddenLoad", weight: 0.12 },
      { kind: "choice", field: "hardestPart", weight: 0.12 },
      { kind: "source", bucket: "emotional", weight: 0.12 },
      { kind: "source", bucket: "cognitive", weight: 0.1 },
    ],
  },
  meaningBlocks: [
    {
      title: "What emotional exhaustion actually is",
      paragraphs: [
        "Emotional exhaustion is not simply feeling sad, tired, or in a bad mood. It is the condition of having less usable inner room than your day keeps asking for. A person can still be responsible, helpful, thoughtful, and productive while emotionally exhausted. That is one reason it gets missed. The outside picture may still look competent, but inside, warmth is taking more effort, patience is thinner, and ordinary relational moments are starting to feel heavier than they once did.",
        "This matters because people often interpret emotional exhaustion in ways that make the problem harder to see clearly. They call themselves too sensitive, too irritable, too distant, or not grateful enough. In reality, the system may be overdrawn. When emotional labor, relationship pressure, invisible carrying, and incomplete replenishment keep stacking, the emotional system adapts by narrowing. That narrowing can look like numbness, flatness, shorter patience, or the desire to avoid one more need.",
        "The audit is meant to make that structure visible. Instead of asking only whether you feel bad, it separates the picture into emotional capacity, protective withdrawal, restorative return, and carryover load. That creates a more useful answer than 'I am just drained.' It shows how the draining is happening.",
      ],
    },
    {
      title: "Why emotional exhaustion often stays hidden until it is advanced",
      paragraphs: [
        "Emotional exhaustion often develops quietly because it does not always begin with dramatic symptoms. More often, it begins with subtle changes in the cost of ordinary life. A text from someone you care about feels harder to answer. A conversation you could normally hold with patience now feels like a demand. You need more silence after social contact. You are still kind, but kindness has become more effortful than it used to be.",
        "Because those shifts are gradual, many people normalize them. They assume life is simply full, other people need a lot right now, or they themselves should be stronger. Some even use outward functioning as evidence that nothing serious is happening. But emotional exhaustion can deepen while a person is still doing almost everything expected of them. The giveaway is not always failure. Sometimes it is the rising cost of staying emotionally available.",
        "That is also why emotional exhaustion can look inconsistent from the outside. A person may still show warmth in the moments that matter most, then feel disproportionately empty afterward. They may still care deeply and yet crave distance. They may still be present, but only by paying an internal price that no one else can see.",
      ],
    },
    {
      title: "How depletion turns into distance, numbness, or irritability",
      paragraphs: [
        "When emotional reserves run low, the system rarely announces it politely. Instead, it protects itself. For some people, that protection shows up as going flatter. Feelings become less vivid because vividness has become too costly. For others, it shows up as irritability. Small asks feel intrusive because the system is already overfull. For others, it looks like more quiet, less responsiveness, or the wish to disappear for a while without having to explain why.",
        "None of those responses automatically mean you care less. Often they mean your emotional system is doing what overtaxed systems do: narrowing exposure so they can survive the load. The problem is that protective narrowing can confuse both you and the people around you. You may worry that you are becoming cold. Other people may think you are disengaging on purpose. What is often happening is that depletion is shaping behavior before there is enough room to name it clearly.",
        "Understanding that mechanism changes the response. Instead of shaming the distance or forcing yourself into more availability, you can start asking better questions. What is pulling emotional energy out repeatedly? What is failing to restore it? What part of the system is trying to protect itself by going flat, quiet, or sharper?",
      ],
    },
  ],
  dimensionEditorial: [
    {
      key: "emotionalCapacity",
      paragraphs: [
        "Emotional Capacity measures how much usable warmth, patience, and internal room are still available inside ordinary life. It is not about how much you care in principle. It is about how much accessible emotional presence you can actually bring to the day without paying an outsized internal cost.",
        "When this dimension is high, people often say they still care deeply but feel like their emotional battery is too small for the amount of contact, demand, or adaptation required. The caring is still there. The space to express it easily is not.",
      ],
    },
    {
      key: "protectiveWithdrawal",
      paragraphs: [
        "Protective Withdrawal captures how much the system is flattening, guarding, or stepping back in order to cope. This is not always obvious withdrawal. Sometimes it looks like delayed replies, less warmth, more blankness, or becoming harder to reach emotionally.",
        "A high score here often means the system is using distance as protection. That can be helpful in the short term, but it also tells you the emotional load has likely outrun the available softness.",
      ],
    },
    {
      key: "restorativeReturn",
      paragraphs: [
        "Restorative Return measures whether quiet time, rest, and lower-demand periods are actually bringing you back to yourself. Emotional exhaustion gets more serious when recovery exists on paper but does not land in the body or emotional system.",
        "When this score runs high, it usually explains why people keep saying they already rested and still do not feel restored. The issue is not only a lack of breaks. It is the declining power of those breaks to truly replenish what has been spent.",
      ],
    },
    {
      key: "carryoverLoad",
      paragraphs: [
        "Carryover Load measures the emotional residue that lingers after the visible event ends. A difficult conversation, someone else's need, a tense atmosphere, or a long day can keep running internally long after the demand itself is over.",
        "When this dimension is high, emotional exhaustion feels sticky. The person is not only handling the moment. They are still holding it afterward, which is one reason the system can feel drained even during technically quieter time.",
      ],
    },
  ],
  riskBlocks: [
    {
      title: "Being emotionally available more often than the system can honestly sustain",
      body:
        "Emotional exhaustion grows when the role you keep playing for others asks for steadiness, responsiveness, or softness that is not being regularly restored.",
    },
    {
      title: "Quiet time that does not truly replenish",
      body:
        "A break helps less when the emotional system stays half-engaged, keeps replaying conversations, or never fully stops carrying the day.",
    },
    {
      title: "Invisible carrying that no one else is counting",
      body:
        "Depletion compounds faster when you are holding moods, tensions, and responsibilities that remain unseen because you still look composed.",
    },
    {
      title: "Treating numbness or irritability like a character flaw",
      body:
        "Shame tends to deepen exhaustion because it turns a load problem into a self-judgment problem and makes honest adjustment less likely.",
    },
  ],
  reductionBlocks: [
    {
      title: "Reduce emotional overexposure, not only visible busyness",
      body:
        "Relief often starts when you lower how often the system must absorb, soothe, or adapt for other people without enough space in between.",
    },
    {
      title: "Protect replenishment that actually changes your state",
      body:
        "The goal is not more time off on paper. It is more recovery that genuinely returns warmth, softness, and emotional room.",
    },
    {
      title: "Name the hidden carrying sooner",
      body:
        "What is named can be shared, bounded, or redesigned. What stays unnamed usually keeps draining you silently.",
    },
    {
      title: "Respond to distance as a signal, not a failure",
      body:
        "When the system starts going flat or quiet, ask what it is protecting rather than forcing yourself into more emotional exposure immediately.",
    },
  ],
  storyBlock: {
    eyebrow: "Emotionally real story",
    title: "She kept showing up, but less of her was actually there",
    quote:
      "This can look like someone who still answers kindly, still remembers birthdays, and still handles tense moments with the calm face other people trust. What often stays hidden is how expensive that calm has become. By evening, another message feels heavier than it should. Another conversation feels like something to brace for. The person may worry they are becoming cold or distant. But the truer story is usually simpler: too much emotional energy has been going outward for too long, and too little of it has been coming back.",
    takeaway:
      "That is how emotional exhaustion often arrives in real life: not as a dramatic breakdown, but as a slow thinning of warmth, patience, and honest reserve.",
    toneLabel: "Lived depletion pattern",
    accent: "#A78BFA",
  },
  nextStepParagraphs: [
    "If this result feels accurate, start by naming the kind of depletion you are in rather than criticizing yourself for not having more patience. If emotional capacity is lowest, ask what keeps drawing energy out. If protective withdrawal is highest, ask what the system is trying to shield. If restorative return is weak, ask why quiet time is not actually reaching you. If carryover load is strongest, pay attention to what continues running after the day should be over.",
    "Then make one subtraction and one restoration change. A subtraction change lowers emotional extraction: one less emotionally expensive commitment, one clearer limit around being the steady one, one less repeated hard conversation without repair. A restoration change helps emotional softness come back: protected alone time, lower stimulation, more honest decompression, or contact that feels nourishing rather than demanding.",
    "Most importantly, stop using outward competence as the only measure of whether you are fine. Many people can still respond, care, and perform while emotional exhaustion is quietly rising. The better question is whether the system still has enough real reserve to stay warm without paying such a steep private cost.",
  ],
  nextStepPanel: {
    eyebrow: "Recommended next step",
    title: "Emotional Capacity Reset",
    description:
      "A structured guide for reducing emotional overexposure, rebuilding replenishment, and restoring warmth without forcing yourself through depletion.",
    buttonLabel: "View Next Step",
  },
  relatedTools: [
    {
      title: "Burnout Risk Audit",
      description: "Check whether emotional exhaustion is now broadening into fuller burnout load and weaker overall recovery.",
      category: "Stress & Burnout",
      minutes: "4 min",
      icon: "trend",
      href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
    },
    {
      title: "Resentment Buildup Tracker",
      description: "See whether unspoken effort, over-accommodation, or unfairness are turning emotional depletion into stored pressure.",
      category: "Emotional Regulation",
      minutes: "5 min",
      icon: "signal",
      href: buildToolHref({ slug: "resentment-buildup-tracker", categorySlug: "emotional-regulation" }),
    },
    {
      title: "Emotional Recovery Planner",
      description: "Turn emotional depletion into a more specific reset path for replenishment, steadiness, and recovery.",
      category: "Emotional Regulation",
      minutes: "4 min",
      icon: "insight",
      href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
    },
    {
      title: "Daily Functioning Stability Check",
      description: "Map where emotional depletion is beginning to affect steadiness, follow-through, and daily recovery.",
      category: "Life Balance & Habits",
      minutes: "5 min",
      icon: "graph",
      href: buildToolHref({ slug: "daily-functioning-stability-check", categorySlug: "life-balance-habits" }),
    },
  ],
  faqItems: [
    {
      question: "What does an emotional exhaustion score actually mean?",
      answer:
        "It is a directional read of how taxed your emotional system currently looks once capacity loss, recovery softness, carryover, and protective withdrawal are weighed together. A higher score means the system appears more overdrawn and less replenished, not that you are failing emotionally.",
    },
    {
      question: "Is emotional exhaustion the same as burnout?",
      answer:
        "Not exactly. Emotional exhaustion can be one major part of burnout, but it can also exist on its own. Burnout usually describes a broader pattern of sustained depletion, lower capacity, and reduced recovery. Emotional exhaustion is more specifically about the emotional system becoming overused and under-restored.",
    },
    {
      question: "Why can I still function if I am emotionally exhausted?",
      answer:
        "Because functioning and reserve are not the same thing. Many people stay highly responsible while their emotional room gets smaller and smaller. The hidden cost shows up later as flatness, irritability, distance, or a stronger need to withdraw.",
    },
    {
      question: "What is the difference between emotional exhaustion and just being introverted?",
      answer:
        "Introversion usually describes how you naturally restore and where you get drained. Emotional exhaustion is a strain pattern. It feels more like reduced capacity, lower softness, weaker patience, and slower recovery than your normal temperament alone would explain.",
    },
    {
      question: "Why do I feel guilty for needing space when I care about people?",
      answer:
        "Because many caring people interpret the need for space as proof they are becoming cold. Often the need for space is not a moral problem. It is information that the emotional system is trying to recover from too much demand or too little replenishment.",
    },
    {
      question: "Can emotional exhaustion make me feel numb?",
      answer:
        "Yes. Numbness can be one way an overtaxed system reduces input. It is not always a lack of caring. Sometimes it is a protective reduction in emotional intensity because the system cannot comfortably keep absorbing more.",
    },
    {
      question: "Why does time off not always fix emotional exhaustion?",
      answer:
        "Because time off only helps if it creates real replenishment. If the mind keeps replaying, the body stays activated, or the emotional demands resume before recovery lands, the system may remain thin even after technically resting.",
    },
    {
      question: "How do I know whether my main issue is depletion or hidden resentment?",
      answer:
        "Depletion tends to feel like low reserve, flatness, or overdraw. Resentment tends to feel more like stored unfairness, hardness, or distance linked to repeated self-override. The two can overlap, but they do not always come from the same core pattern.",
    },
    {
      question: "How often should I retake the Emotional Exhaustion Audit?",
      answer:
        "Retaking it every one to two weeks is usually enough if conditions are shifting. It is especially helpful after changing a demand pattern, reducing emotional labor, or trying a more serious recovery adjustment.",
    },
    {
      question: "What should I do first if my score is high?",
      answer:
        "Start with the top depletion dimension and the main source cluster. Lower one repeat drain on the emotional system, then create one form of recovery that actually changes your internal state. Broad advice works poorly when exhaustion is structurally specific.",
    },
  ],
  heroPreviewAnswers: {
    loadFrequency: "frequent",
    endReserve: 28,
    switchOff: "difficult",
    restoration: "inconsistent",
    dailyHeaviness: "often-heavy",
    sources: ["constant-emotional-labor", "not-enough-replenishment", "absorbing-others-moods", "being-needed-too-often"],
    earlySignal: "compassion-thins",
    recoverySpeed: "slowly",
    clarityDrop: 62,
    capacityDrop: 66,
    pressureResponse: "feel-hollow-while-functioning",
    hiddenLoad: 78,
    selfRead: "caring-from-a-thinner-place",
    hardestPart: "staying-warm-under-strain",
    currentState: "running-low-on-softness",
  },
  resultText: {
    signalLabel: ({ band, topDimension, secondDimension }) =>
      `Emotional exhaustion looks ${band.signalTone} across ${topDimension.label.toLowerCase()} and ${secondDimension.label.toLowerCase()}.`,
    standout: ({ band, topDimension, sourcePhrase }) =>
      `${band.standoutLead} ${topDimension.label} is the clearest pressure point right now, with ${sourcePhrase} feeding the depletion most visibly.`,
    nextStep: ({ band, topDimension, sourcePhrase }) =>
      `${band.nextStepLead} Start by reducing exposure around ${sourcePhrase} while creating more honest support underneath ${topDimension.label.toLowerCase()}.`,
    alignmentNote: ({ difference }) => {
      if (difference === null) {
        return "Use the score as a map of emotional load, not as a verdict on your caring or your character.";
      }

      if (difference >= 16) {
        return "Your self-read sounds more depleted than the averaged score, which often happens when the emotional cost of the pattern lands especially loudly from the inside.";
      }

      if (difference <= -16) {
        return "The structural markers are running higher than your self-read, which can happen when responsibility and outward functioning hide how thin the emotional margin has become.";
      }

      return "Your self-read and the structural audit are broadly aligned, which adds confidence that this emotional exhaustion pattern is real and worth responding to directly.";
    },
  },
};
