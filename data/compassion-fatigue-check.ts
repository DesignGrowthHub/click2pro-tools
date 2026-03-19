import { buildToolHref } from "./tools-home";
import type { BurnoutFamilyTool } from "./burnout-family";

export const compassionFatigueCheckTool: BurnoutFamilyTool = {
  slug: "compassion-fatigue-check",
  categorySlug: "stress-burnout",
  pageMetadata: {
    title: "Compassion Fatigue Check: Am I Carrying Too Much for Other People?",
    description:
      "Use the Compassion Fatigue Check to see whether empathy strain is coming from repeated caregiving, absorbing distress, weak decompression, guilt about stepping back, or being emotionally on for too long.",
    keywords: [
      "compassion fatigue check",
      "am i carrying too much for other people",
      "compassion fatigue test",
      "caregiver emotional exhaustion tool",
      "empathy burnout check",
      "secondary stress assessment",
    ],
    openGraphTitle: "Compassion Fatigue Check",
    openGraphDescription:
      "A premium interactive tool for mapping empathy strain, emotional carryover, boundary leakage, and recovery protection.",
    twitterTitle: "Compassion Fatigue Check",
    twitterDescription:
      "Check whether caregiving, helping, or emotional holding is turning into empathy strain and low recovery margin.",
  },
  toolMetadata: {
    eyebrow: "CAREGIVING STRAIN TOOL",
    title: "Compassion Fatigue Check",
    description:
      "See whether you are carrying too much of other people's pain, need, stress, or urgency. This tool maps compassion fatigue through empathy strain, emotional carryover, weak decompression, and the cost of staying available too long.",
    metadata: [
      { icon: "time", label: "2-4 minutes" },
      { icon: "signal", label: "Free tool" },
      { icon: "privacy", label: "Private by design" },
    ],
    primaryCta: "Start Check",
    secondaryCta: "See Care Signals",
  },
  experienceCopy: {
    sectionTitle:
      "A premium compassion-fatigue scanner built to show whether caregiving, support, and emotional holding are quietly draining empathy from the inside",
    sectionDescription:
      "One signal at a time. Calm pacing, live compassion-load mapping, and deterministic scoring beneath the experience so the result feels specific instead of vague.",
    progressEyebrow: "Compassion fatigue check",
    sidebarStatusEyebrow: "Check status",
    sidebarStatusTitle: "care-strain markers mapped",
    sidebarStatusDescription:
      "The preview updates with each answer so you can see whether the strongest issue is care exposure, empathy depletion, boundary leakage, or weak decompression.",
    sidebarEmergingEyebrow: "Emerging compassion read",
    sidebarEmergingDescription:
      "Notice whether the strain is being driven mainly by repeated helping, absorbing distress, feeling responsible, or not having enough emotional space to reset.",
    footerPending:
      "Answer for the way the pattern has felt recently across your real helping or caregiving life, not for the single hardest moment you can remember.",
    footerComplete:
      "Result unlocked. You can still adjust any answer and the compassion-fatigue visuals will refresh right away.",
    revealLabel: "Reveal Check",
    metaChips: ["Care exposure", "Empathy strain", "Private by design"],
  },
  resultCopy: {
    sectionTitle:
      "A compassion-strain report that shows where helping is becoming costly, what is following you home, and why care may feel harder to access than it used to",
    sectionDescription:
      "The score matters, but the more useful read comes from the top strain dimension, the source cluster feeding it, and the decompression gap sitting underneath the visible helping role.",
    reportLabel: "Compassion fatigue report",
    scoreLabel: "Compassion fatigue score",
    standoutLabel: "What stands out",
    nextStepLabel: "What to protect first",
    retakeLabel: "Retake Check",
  },
  visualCopy: {
    sectionTitle:
      "Four visual reads of empathy strain, care exposure, decompression protection, and the sources that are quietly wearing compassion down",
    sectionDescription:
      "These views separate normal caring effort from the pattern where supporting others begins to thin warmth, lower tolerance, and reduce the system's ability to reset.",
    dial: {
      eyebrow: "Compassion strain dial",
      title: "Overall empathy load",
      copy:
        "A quick read of how overused the helping system currently looks once care exposure, empathic drain, emotional carryover, and decompression protection are weighted together.",
      label: "Compassion fatigue",
      caption: "Live care load",
    },
    signalBars: {
      eyebrow: "4-dimension signal bars",
      title: "Where compassion fatigue is concentrating",
      copy:
        "These bars separate raw care exposure from empathy depletion, boundary leakage, and whether recovery is protected enough to return steadiness.",
    },
    recovery: {
      eyebrow: "Decompression protection chart",
      title: "Is there enough space between caring and carrying?",
      copy:
        "Compassion fatigue deepens when support roles end on paper but the emotional system keeps holding other people's pain well after the interaction is over.",
      loadLabel: "Current care strain",
      recoveryLabel: "Decompression capacity",
      gapLabel: "Decompression gap",
      gapInsight: (result) =>
        result.recoveryGap > 0
          ? `Your current decompression gap is ${result.recoveryGap} points, which suggests empathy strain is staying active longer than your system can comfortably clear.`
          : "Care strain and decompression look relatively balanced right now, which usually means the helping system still has some protective room.",
    },
    sourceSplit: {
      eyebrow: "Care source split",
      title: "What is draining compassion most",
      copy:
        "This source map highlights whether the strain is coming from repeated care demand, absorbed distress, responsibility pull, weak recovery space, or the monitoring that never fully turns off.",
      insight: (result) =>
        `The strongest strain source currently leans toward ${result.dominantSources[0]?.label.toLowerCase() ?? "balanced load"}, which helps explain why support may feel heavier than it looks from the outside.`,
    },
  },
  editorialCopy: {
    meaningEyebrow: "Reading the check",
    meaningTitle: "What this result usually means",
    meaningDescription:
      "Use the score bands below as a read of empathy strain and helping-system load, not as proof that you are selfish, uncaring, or no longer suited to support others.",
    dimensionsEyebrow: "Compassion fatigue dimensions",
    dimensionsTitle: "The 4 dimensions of compassion fatigue",
    dimensionsDescription:
      "These four dimensions separate care exposure from boundary leakage, empathic drain, and whether decompression is strong enough to keep support sustainable.",
    riskEyebrow: "What increases compassion strain",
    riskTitle: "What increases compassion fatigue",
    riskDescription:
      "Compassion fatigue usually grows when caring stays high, protective distance stays low, and the emotional system has nowhere reliable to put down what it has absorbed.",
    reductionEyebrow: "What protects compassion",
    reductionTitle: "What helps reduce compassion fatigue",
    reductionDescription:
      "The strongest relief usually comes from protecting decompression, reducing emotional absorption, and making care more bounded and sustainable instead of simply trying to care harder.",
    storyEyebrow: "How this often feels",
    storyTitle: "When helping starts to feel heavier than your values",
    storyDescription:
      "Compassion fatigue often hurts precisely because the person still cares. The problem is not lack of heart. It is what repeated exposure is costing the system.",
    nextEyebrow: "What to do next",
    nextTitle: "What to do next",
    nextDescription:
      "If this pattern feels familiar, the next step is to protect the part of you that keeps caring by reducing what turns empathy into carrying.",
    relatedEyebrow: "Related tools",
    relatedTitle: "Related tools",
    relatedDescription:
      "Use nearby tools if this result points toward broader exhaustion, emotional recovery gaps, resentment from over-carrying, or a daily system with too little margin left.",
    faqEyebrow: "Questions that usually come next",
    faqTitle: "Compassion Fatigue Check FAQ",
    faqDescription:
      "Clearer answers for the questions people ask when helping, caring, or supporting has started feeling too costly from the inside.",
    faqIntro:
      "Use these questions to understand compassion fatigue more precisely: what it is, why it happens, and how to protect caring without becoming cold or unavailable to everyone.",
  },
  bands: [
    {
      key: "supported-compassion-base",
      min: 0,
      max: 24,
      title: "Supported Compassion Base",
      summary:
        "Your current answers suggest that caring effort is present, but it is not strongly overrunning your empathy reserves or your ability to decompress.",
      interpretation:
        "This usually means you still have enough boundary protection and recovery space to help others without the role heavily thinning your internal steadiness.",
      standoutLead: "The main signal is sustainable care.",
      nextStepLead:
        "Protect the boundaries and decompression habits that are helping compassion remain available without becoming an extraction point.",
      signalTone: "supported",
      gradientFrom: "#6FD3FF",
      gradientTo: "#3DDC97",
      glow: "rgba(111, 211, 255, 0.32)",
    },
    {
      key: "early-caregiver-wear",
      min: 25,
      max: 44,
      title: "Early Caregiver Wear",
      summary:
        "The helping system looks a bit taxed, even if your values, responsiveness, and outward role are still mostly intact.",
      interpretation:
        "This often feels like lower tolerance for one more need, slower emotional recovery after support, or the beginning of guilt about wanting more space.",
      standoutLead: "The signal suggests wear, not failure.",
      nextStepLead:
        "Reduce one repeating compassion drain before the current strain quietly turns into a more persistent caregiving burden.",
      signalTone: "wearing",
      gradientFrom: "#6FD3FF",
      gradientTo: "#F6C177",
      glow: "rgba(246, 193, 119, 0.28)",
    },
    {
      key: "compassion-strain-pattern",
      min: 45,
      max: 64,
      title: "Compassion Strain Pattern",
      summary:
        "Your answers suggest a real empathy-strain pattern in the helping system, not just a temporary low mood or one hard stretch.",
      interpretation:
        "At this level, many people still care deeply but feel that caring now comes with more effort, more after-cost, and less emotional bounce-back.",
      standoutLead: "The clearest signal is accumulated care strain.",
      nextStepLead:
        "Lower the part of the helping role that keeps turning concern into carrying while improving decompression at the same time.",
      signalTone: "strained",
      gradientFrom: "#F6C177",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.26)",
    },
    {
      key: "high-compassion-fatigue",
      min: 65,
      max: 84,
      title: "High Compassion Fatigue",
      summary:
        "The current pattern points to a helping system that is overused across exposure, emotional absorption, recovery, and internal protection.",
      interpretation:
        "This level often shows up as wanting to care but having less internal room to do it well, more guilt about needing distance, or a stronger tendency to go into duty mode rather than warm presence.",
      standoutLead: "The strongest signal is low protected empathy.",
      nextStepLead:
        "Reduce what keeps pulling you into repeated over-carrying, because continuing to help from a depleted state often deepens the strain quietly.",
      signalTone: "overused",
      gradientFrom: "#FF9B73",
      gradientTo: "#FF7B72",
      glow: "rgba(255, 123, 114, 0.34)",
    },
    {
      key: "deep-helping-system-depletion",
      min: 85,
      max: 100,
      title: "Deep Helping-System Depletion",
      summary:
        "The signal suggests a compassion system carrying more distress, need, and responsibility than current recovery and protection can honestly support.",
      interpretation:
        "This does not mean your heart is gone. It means the helping system has likely been overextended long enough that numbness, distance, or guilt around stepping back may be acting like protection.",
      standoutLead: "The clearest signal is overextension without enough protection.",
      nextStepLead:
        "Treat this as a serious cue to rebuild boundaries, decompression, and shared responsibility rather than asking yourself to keep absorbing more.",
      signalTone: "depleted",
      gradientFrom: "#FF7B72",
      gradientTo: "#A78BFA",
      glow: "rgba(167, 139, 250, 0.28)",
    },
  ],
  dimensions: [
    {
      key: "careExposure",
      label: "Care Exposure",
      description: "How much repeated helping, listening, soothing, or emotional holding the system is currently carrying.",
      icon: "signal",
      accent: "#6FD3FF",
    },
    {
      key: "boundaryLeakage",
      label: "Boundary Leakage",
      description: "How much other people's need, urgency, or pain continues getting in after the role should have ended.",
      icon: "shield",
      accent: "#A78BFA",
    },
    {
      key: "empathicDrain",
      label: "Empathic Drain",
      description: "How much compassion itself is starting to feel overused, effortful, or harder to access cleanly.",
      icon: "insight",
      accent: "#FF7B72",
    },
    {
      key: "recoveryProtection",
      label: "Recovery Protection",
      description: "Whether your current routines and limits actually protect enough decompression for caring to stay sustainable.",
      icon: "trend",
      accent: "#3DDC97",
    },
  ],
  sourceBuckets: [
    { key: "demand", label: "Care demand", accent: "#6FD3FF" },
    { key: "emotional", label: "Absorbed distress", accent: "#A78BFA" },
    { key: "rest", label: "Decompression gap", accent: "#3DDC97" },
    { key: "relational", label: "Responsibility pull", accent: "#FF7B72" },
    { key: "cognitive", label: "Ongoing monitoring", accent: "#F6C177" },
  ],
  steps: [
    {
      id: "step-1",
      step: 1,
      kind: "single-choice",
      field: "loadFrequency",
      eyebrow: "Signal 01 · care-strain frequency",
      question: "How often does helping, listening, soothing, or holding space leave you more drained than it seems like it should?",
      hint: "Think about your recent baseline across caregiving, helping, support roles, and emotional availability.",
      variant: "cards",
      options: [
        { value: "occasionally", label: "Occasionally", description: "It happens in intense pockets, but not as a steady pattern." },
        { value: "regularly", label: "Regularly", description: "You notice this enough that it no longer feels rare." },
        { value: "often", label: "Often", description: "Helping is becoming a repeated source of strain." },
        { value: "very-often", label: "Very often", description: "The helping role feels draining more often than not." },
      ],
    },
    {
      id: "step-2",
      step: 2,
      kind: "slider",
      field: "endReserve",
      eyebrow: "Signal 02 · warmth left over",
      question: "After a day of caring or supporting others, how much genuine warmth is usually left for you or anyone else?",
      hint: "Rate what is truly available after the day, not whether you can still perform kindness on command.",
      label: "Warmth remaining",
      minLabel: "Almost none",
      maxLabel: "Plenty left",
      scaleHint: "Low remaining warmth often means the helping system is running below healthy margin.",
    },
    {
      id: "step-3",
      step: 3,
      kind: "single-choice",
      field: "switchOff",
      eyebrow: "Signal 03 · post-care decompression",
      question: "How easy is it to stop carrying other people's distress after the interaction or responsibility ends?",
      hint: "This is about what happens after the role is over. Does your system put it down?",
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
      eyebrow: "Signal 04 · decompression quality",
      question: "When you do get space after a caring or high-support stretch, how restorative does that space actually feel?",
      hint: "A pause only counts if it helps the helping system stand down for real.",
      variant: "visual",
      options: [
        { value: "restores-clearly", label: "Restores clearly", description: "Protected space usually gives real emotional distance and relief." },
        { value: "partly-restores", label: "Partly restores", description: "You feel some relief, but not a full reset." },
        { value: "unreliable", label: "Unreliable", description: "Sometimes it helps. Other times the strain lingers." },
        { value: "barely-helps", label: "Barely helps", description: "Time away changes little in how the system feels." },
        { value: "does-not-land", label: "Does not really land", description: "You get the break, but your system stays on duty." },
      ],
    },
    {
      id: "step-5",
      step: 5,
      kind: "single-choice",
      field: "dailyHeaviness",
      eyebrow: "Signal 05 · heaviness of more need",
      question: "How often does one more person's need feel heavier than its actual size because you are already full?",
      hint: "This often catches compassion fatigue earlier than more obvious shutdown.",
      variant: "cards",
      options: [
        { value: "rarely-heavy", label: "Rarely", description: "You can usually absorb more without much extra strain." },
        { value: "sometimes-heavy", label: "Sometimes", description: "Additional need lands heavier than it used to." },
        { value: "often-heavy", label: "Often", description: "More need regularly feels like more than your system wants to hold." },
        { value: "almost-always-heavy", label: "Almost always", description: "Another emotional ask often feels like too much." },
      ],
    },
    {
      id: "step-6",
      step: 6,
      kind: "multi-select",
      field: "sources",
      eyebrow: "Signal 06 · source mapping",
      question: "Which care-related drains are most active for you right now?",
      hint: "Choose up to four. The check uses these to show what kind of compassion strain is building.",
      limit: 4,
      options: [
        { value: "repeated-crisis-contact", label: "Repeated crisis or high-distress contact" },
        { value: "feeling-responsible-to-soothe", label: "Feeling responsible to soothe or stabilize others" },
        { value: "no-decompression-between-people", label: "No real decompression between people or problems" },
        { value: "guilt-about-stepping-back", label: "Guilt about stepping back" },
        { value: "absorbing-other-peoples-distress", label: "Absorbing other people's distress" },
        { value: "supporting-with-little-support", label: "Supporting others while receiving little support" },
        { value: "constant-availability", label: "Feeling constantly available or reachable" },
        { value: "care-without-reciprocity", label: "Giving care without much reciprocity" },
      ],
    },
    {
      id: "step-7",
      step: 7,
      kind: "single-choice",
      field: "earlySignal",
      eyebrow: "Signal 07 · first strain signal",
      question: "What tends to show up first when compassion fatigue starts building?",
      hint: "Choose the earliest signal, not the one you notice only after you are already empty.",
      variant: "cards",
      options: [
        { value: "going-numb", label: "Going a little numb", description: "The emotional system dampens to cope." },
        { value: "less-patience-for-need", label: "Less patience for need", description: "The buffer around other people's needs gets thinner." },
        { value: "guilt-about-wanting-space", label: "Guilt about wanting space", description: "You want distance, then judge yourself for it." },
        { value: "duty-mode", label: "Sliding into duty mode", description: "You keep helping, but with less warmth behind it." },
        { value: "wanting-to-disappear", label: "Wanting to disappear for a while", description: "The system starts craving distance from people, problems, or requests." },
      ],
    },
    {
      id: "step-8",
      step: 8,
      kind: "single-choice",
      field: "recoverySpeed",
      eyebrow: "Signal 08 · return of clean care",
      question: "After a protected break, how quickly does genuine care feel easy to access again?",
      hint: "This asks how quickly empathy returns without force or guilt.",
      variant: "cards",
      options: [
        { value: "quickly", label: "Quickly", description: "A good pause usually restores clean warmth." },
        { value: "partly", label: "Partly", description: "Recovery helps, but not as fully as you want." },
        { value: "slowly", label: "Slowly", description: "It takes time to feel naturally open again." },
        { value: "barely", label: "Barely at all", description: "The care strain remains even after time off." },
      ],
    },
    {
      id: "step-9",
      step: 9,
      kind: "slider",
      field: "clarityDrop",
      eyebrow: "Signal 09 · compassion clarity drop",
      question: "How much is compassion strain affecting patience, perspective, or your ability to stay present without overload?",
      hint: "Use the slider for the size of the internal cost, not for how much you still care in principle.",
      label: "Presence drop",
      minLabel: "Very little",
      maxLabel: "A great deal",
      scaleHint: "Compassion fatigue often becomes clearer once presence starts costing more than it should.",
    },
    {
      id: "step-10",
      step: 10,
      kind: "slider",
      field: "capacityDrop",
      eyebrow: "Signal 10 · helping capacity change",
      question: "How much has your usable helping capacity dropped compared with your usual self?",
      hint: "This is about accessible inner capacity, not whether you are still meeting expectations.",
      label: "Helping capacity drop",
      minLabel: "Still strong",
      maxLabel: "Much lower",
      scaleHint: "Compassion fatigue often hides behind continued functioning while true capacity shrinks.",
    },
    {
      id: "step-11",
      step: 11,
      kind: "single-choice",
      field: "pressureResponse",
      eyebrow: "Signal 11 · care-pressure response",
      question: "When someone else needs a lot from you, which response feels most familiar?",
      hint: "Choose the response your system reaches for most often, not the one you wish were true.",
      variant: "cards",
      options: [
        { value: "show-up-and-pay-later", label: "I show up and pay later", description: "I help, then feel the cost afterward." },
        { value: "go-into-duty-mode", label: "I go into duty mode", description: "I function well, but with less feeling." },
        { value: "pull-back-inside", label: "I pull back inside", description: "Part of me retreats even while I stay present." },
        { value: "help-with-guilt-and-strain", label: "I help with guilt and strain", description: "I keep caring, but it feels heavy and conflicted." },
        { value: "want-distance-fast", label: "I want distance fast", description: "My system wants relief from more need almost immediately." },
      ],
    },
    {
      id: "step-12",
      step: 12,
      kind: "slider",
      field: "hiddenLoad",
      eyebrow: "Signal 12 · invisible care burden",
      question: "How much of the helping or emotional burden you carry is actually visible to people around you?",
      hint: "Think about the part that stays hidden because you remain capable, responsive, or dependable.",
      label: "Invisible care load",
      minLabel: "Very visible",
      maxLabel: "Mostly unseen",
      scaleHint: "Compassion fatigue often deepens when the burden is larger than what others recognize.",
    },
    {
      id: "step-13",
      step: 13,
      kind: "single-choice",
      field: "selfRead",
      eyebrow: "Signal 13 · current self-read",
      question: "Which statement feels most accurate about your current care pattern?",
      hint: "Choose the statement that best reflects the pattern, not the role you feel obligated to keep performing.",
      variant: "statement",
      options: [
        { value: "care-is-still-sustainable", label: "A", description: "I still care without feeling significantly overrun." },
        { value: "helping-costs-more-than-it-looks", label: "B", description: "Helping is costing me more than it likely appears." },
        { value: "my-empathy-feels-thinner", label: "C", description: "My empathy feels thinner and easier to overuse." },
        { value: "supporting-others-is-following-me-home", label: "D", description: "Supporting others is following me home internally." },
        { value: "i-need-protection-not-more-exposure", label: "E", description: "What I need is more protection, not more exposure." },
      ],
    },
    {
      id: "step-14",
      step: 14,
      kind: "single-choice",
      field: "hardestPart",
      eyebrow: "Signal 14 · hardest part",
      question: "What feels hardest in the current compassion-fatigue pattern?",
      hint: "Choose the part that makes the helping role feel most unsustainable from the inside.",
      variant: "cards",
      options: [
        { value: "staying-tender", label: "Staying tender", description: "Warmth is harder to access cleanly." },
        { value: "putting-it-down", label: "Putting it down after", description: "Other people's pain stays with me too long." },
        { value: "asking-for-space", label: "Asking for space", description: "I feel guilty protecting room for myself." },
        { value: "recovering-enough-to-care-again", label: "Recovering enough to care again", description: "I do not reset fast enough between waves." },
        { value: "admitting-it-is-too-much", label: "Admitting it is too much", description: "It is hard to be honest about how costly this has become." },
      ],
    },
    {
      id: "step-15",
      step: 15,
      kind: "single-choice",
      field: "currentState",
      eyebrow: "Signal 15 · final state read",
      question: "Which statement feels closest to your current state?",
      hint: "This final step helps compare your lived experience with the structural compassion-strain picture.",
      variant: "statement",
      options: [
        { value: "care-is-mostly-intact", label: "A", description: "My care is mostly intact and still feels sustainable." },
        { value: "i-am-more-worn-than-i-admit", label: "B", description: "I am more worn down by helping than I tend to admit." },
        { value: "my-protection-is-too-thin", label: "C", description: "My protection and decompression are too thin for the load." },
        { value: "i-need-a-real-step-back", label: "D", description: "I need a real step back, not just a small break." },
      ],
    },
  ],
  choiceScores: {
    loadFrequency: {
      occasionally: 16,
      regularly: 44,
      often: 76,
      "very-often": 94,
    },
    switchOff: {
      "very-easy": 10,
      "mostly-easy": 24,
      mixed: 52,
      difficult: 78,
      "very-difficult": 96,
    },
    restoration: {
      "restores-clearly": 8,
      "partly-restores": 30,
      unreliable: 56,
      "barely-helps": 82,
      "does-not-land": 96,
    },
    dailyHeaviness: {
      "rarely-heavy": 12,
      "sometimes-heavy": 40,
      "often-heavy": 74,
      "almost-always-heavy": 94,
    },
    earlySignal: {
      "going-numb": 72,
      "less-patience-for-need": 74,
      "guilt-about-wanting-space": 68,
      "duty-mode": 80,
      "wanting-to-disappear": 92,
    },
    recoverySpeed: {
      quickly: 12,
      partly: 36,
      slowly: 74,
      barely: 96,
    },
    pressureResponse: {
      "show-up-and-pay-later": 60,
      "go-into-duty-mode": 76,
      "pull-back-inside": 82,
      "help-with-guilt-and-strain": 86,
      "want-distance-fast": 92,
    },
    selfRead: {
      "care-is-still-sustainable": 28,
      "helping-costs-more-than-it-looks": 52,
      "my-empathy-feels-thinner": 70,
      "supporting-others-is-following-me-home": 84,
      "i-need-protection-not-more-exposure": 94,
    },
    hardestPart: {
      "staying-tender": 78,
      "putting-it-down": 84,
      "asking-for-space": 74,
      "recovering-enough-to-care-again": 82,
      "admitting-it-is-too-much": 72,
    },
    currentState: {
      "care-is-mostly-intact": 28,
      "i-am-more-worn-than-i-admit": 58,
      "my-protection-is-too-thin": 82,
      "i-need-a-real-step-back": 94,
    },
  },
  sourceOptionScores: {
    "repeated-crisis-contact": 82,
    "feeling-responsible-to-soothe": 80,
    "no-decompression-between-people": 88,
    "guilt-about-stepping-back": 72,
    "absorbing-other-peoples-distress": 84,
    "supporting-with-little-support": 76,
    "constant-availability": 78,
    "care-without-reciprocity": 74,
  },
  sourceBucketMap: {
    "repeated-crisis-contact": "demand",
    "feeling-responsible-to-soothe": "relational",
    "no-decompression-between-people": "rest",
    "guilt-about-stepping-back": "cognitive",
    "absorbing-other-peoples-distress": "emotional",
    "supporting-with-little-support": "relational",
    "constant-availability": "demand",
    "care-without-reciprocity": "emotional",
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
    careExposure: [
      { kind: "choice", field: "loadFrequency", weight: 0.24 },
      { kind: "choice", field: "dailyHeaviness", weight: 0.16 },
      { kind: "slider", field: "capacityDrop", weight: 0.18 },
      { kind: "slider", field: "hiddenLoad", weight: 0.12 },
      { kind: "source", bucket: "demand", weight: 0.16 },
      { kind: "source", bucket: "relational", weight: 0.14 },
    ],
    boundaryLeakage: [
      { kind: "choice", field: "switchOff", weight: 0.18 },
      { kind: "choice", field: "pressureResponse", weight: 0.16 },
      { kind: "choice", field: "hardestPart", weight: 0.14 },
      { kind: "slider", field: "hiddenLoad", weight: 0.1 },
      { kind: "source", bucket: "emotional", weight: 0.2 },
      { kind: "source", bucket: "relational", weight: 0.22 },
    ],
    empathicDrain: [
      { kind: "choice", field: "earlySignal", weight: 0.18 },
      { kind: "slider", field: "capacityDrop", weight: 0.2 },
      { kind: "slider", field: "clarityDrop", weight: 0.18 },
      { kind: "choice", field: "selfRead", weight: 0.16 },
      { kind: "choice", field: "currentState", weight: 0.14 },
      { kind: "source", bucket: "emotional", weight: 0.14 },
    ],
    recoveryProtection: [
      { kind: "slider", field: "endReserve", weight: 0.22, invert: true },
      { kind: "choice", field: "restoration", weight: 0.26 },
      { kind: "choice", field: "recoverySpeed", weight: 0.24 },
      { kind: "choice", field: "hardestPart", weight: 0.08 },
      { kind: "source", bucket: "rest", weight: 0.2 },
    ],
  },
  meaningBlocks: [
    {
      title: "What compassion fatigue actually is",
      paragraphs: [
        "Compassion fatigue is what happens when caring effort, repeated exposure to other people's pain, and emotional responsibility begin to cost more than the system can keep recovering. It is not the same as becoming selfish. In many cases, the person still cares deeply. The problem is that the helping system has become overused. Empathy is still there, but it is no longer arriving with the same ease, softness, or reserve.",
        "This is why compassion fatigue can feel confusing. People often expect that if they care enough, they should simply keep showing up. But caring is not an infinite fuel source. When concern keeps turning into carrying, when high-need contact repeats without decompression, and when the person feels responsible for soothing what they cannot control, the cost accumulates. Eventually even genuine warmth can begin to feel expensive.",
        "The check is designed to make that pattern visible. Instead of reducing the whole experience to 'I am tired of people,' it separates care exposure, boundary leakage, empathic drain, and recovery protection. That helps you see whether the issue is volume of need, the way distress keeps getting absorbed, or the lack of protected space between one wave of caring and the next.",
      ],
    },
    {
      title: "Why compassion fatigue often looks like distance or guilt instead of obvious collapse",
      paragraphs: [
        "Most people imagine compassion fatigue as a dramatic breaking point. In real life it often arrives more quietly. A person still takes the call, still listens, still helps, still remains dependable. What changes first is usually the after-cost. They need longer to recover after supporting someone. Another hard story lands heavier than before. They notice less patience for one more emotional ask. Sometimes they feel guilty for wanting relief before they ever allow themselves to say they are depleted.",
        "That guilt matters because it keeps people overexposed. If stepping back feels selfish, they keep leaning in. If needing distance feels like failure, they keep overriding the signal that would otherwise protect them. The helping role continues, but the internal relationship to it changes. Support starts to feel less like a clean expression of values and more like something the system braces for.",
        "Because of that, compassion fatigue can hide inside admirable behavior. Reliability hides a lot. Duty hides a lot. So does the language of service, caregiving, and being there for others. The question is not whether you are still helping. The question is what helping is now costing you privately.",
      ],
    },
    {
      title: "How empathy turns into carrying",
      paragraphs: [
        "Healthy compassion allows you to care about another person's experience while remaining rooted enough to know what is yours and what is not. Compassion fatigue tends to grow when that line gets thin. The nervous system keeps monitoring. You keep replaying the conversation. You feel responsible for the outcome. You absorb emotional tone that was never meant to live in you for the rest of the day.",
        "That is when empathy can start becoming a burden instead of a bridge. You are no longer only responding in the moment. You are continuing to internally hold, anticipate, and manage after the moment has passed. Over time that changes how available compassion feels. It is still morally important to you, but it becomes harder to access naturally because the system has learned that caring is followed by too much carrying.",
        "Seeing that mechanism matters because it points to the real intervention. The answer is not to stop caring altogether. It is to reduce absorption, increase decompression, and protect the boundary between caring about someone and internally becoming their second nervous system.",
      ],
    },
  ],
  dimensionEditorial: [
    {
      key: "careExposure",
      paragraphs: [
        "Care Exposure measures how much repeated helping, listening, soothing, and emotional availability the system is being asked to provide. This includes both visible caregiving and the less visible role of being the steady one, the calm one, or the person who gets leaned on.",
        "When this dimension is high, the issue is often not one dramatic event. It is the total amount of repeated care demand landing without enough space between waves.",
      ],
    },
    {
      key: "boundaryLeakage",
      paragraphs: [
        "Boundary Leakage measures how much other people's need, distress, or urgency keeps getting into the part of you that is supposed to recover. It is the difference between supporting someone and continuing to internally carry them long after the contact ends.",
        "A high score here often explains why decompression feels weak. The care role ends on paper, but the emotional system has not really exited it.",
      ],
    },
    {
      key: "empathicDrain",
      paragraphs: [
        "Empathic Drain measures how overused compassion itself is starting to feel. You may still care deeply, but the emotional ease of caring may be lower. Warmth becomes effortful. Patience gets thinner. Presence comes with more strain behind it.",
        "When this dimension rises, people often worry they are becoming a worse person. More often, the helping system is simply running on too little protected reserve.",
      ],
    },
    {
      key: "recoveryProtection",
      paragraphs: [
        "Recovery Protection measures whether your current routines, boundaries, and downtime actually shield enough decompression for care to stay sustainable. The issue is not merely having time off. It is whether that time truly interrupts overexposure.",
        "When this score is high, it usually means the space between caring and recovering is too thin. The system never quite stops being on call internally.",
      ],
    },
  ],
  riskBlocks: [
    {
      title: "Repeated exposure to pain without enough decompression",
      body:
        "Helping roles become more costly when the system moves from one emotionally loaded moment to the next without believable space to clear what it absorbed.",
    },
    {
      title: "Feeling responsible for stabilizing what is not fully yours",
      body:
        "Compassion fatigue deepens when concern quietly turns into responsibility for outcomes, emotions, or repair that one person cannot realistically carry alone.",
    },
    {
      title: "Guilt that blocks healthy stepping back",
      body:
        "If the need for rest or space feels selfish, people keep overriding protective signals and end up extending exposure long past what is sustainable.",
    },
    {
      title: "Too little reciprocity or support for the one who supports",
      body:
        "It is much easier to deplete when you are repeatedly the container for others and rarely have an equivalent place to put down what you are holding.",
    },
  ],
  reductionBlocks: [
    {
      title: "Differentiate caring from carrying",
      body:
        "You can remain compassionate without becoming the long-term holder of every story, feeling, or outcome that passes through you.",
    },
    {
      title: "Protect decompression between people and problems",
      body:
        "Compassion stays more sustainable when the system gets real intervals to stand down instead of rolling directly from one need into the next.",
    },
    {
      title: "Lower guilt around stepping back",
      body:
        "Space is not betrayal. In many cases it is the condition that lets care remain clean rather than resentful, numb, or forced.",
    },
    {
      title: "Make support for the supporter more real",
      body:
        "Sustainable compassion usually requires reciprocity, consultation, or at least one honest place where your own internal load gets held too.",
    },
  ],
  storyBlock: {
    eyebrow: "Emotionally real story",
    title: "He still cared. He just could not keep carrying everyone home.",
    quote:
      "This often happens to the person other people call when something is falling apart. They stay calm in emergencies, steady in grief, and reliable when other people are overwhelmed. What may go unnoticed at first is how little of that weight leaves afterward. The conversation ends, but the sense of responsibility stays active for hours. Distance starts to feel necessary, and then guilt appears for needing it. It can seem like compassion is disappearing. More often, compassion has simply been stretched into carrying for too long without enough protected space to recover.",
    takeaway:
      "That is how compassion fatigue often works in real life: the heart is still present, but the helping system has been asked to absorb more than it can keep clearing.",
    toneLabel: "Lived care-strain pattern",
    accent: "#6FD3FF",
  },
  nextStepParagraphs: [
    "If this result feels accurate, start by naming what kind of care strain you are in. If care exposure is highest, ask what volume of helping is no longer sustainable. If boundary leakage is strongest, look at what keeps following you home internally. If empathic drain is highest, notice where warmth has become effortful. If recovery protection is weak, ask whether your current routines actually allow decompression or only create the appearance of downtime.",
    "Then choose one protection move and one repair move. A protection move lowers how much gets absorbed: a clearer limit, a smaller response window, a pause between high-need contacts, or more realistic responsibility lines. A repair move helps the helping system come back: quiet recovery, less emotional input, movement out of caretaker vigilance, or support that lets your own nervous system stop being the sole container.",
    "Most importantly, stop interpreting the need for boundaries as proof that you care less. Sustainable compassion depends on protection. When the helping role keeps outrunning decompression, the real risk is not selfishness. The real risk is that your care begins to harden, flatten, or disappear behind exhaustion.",
  ],
  nextStepPanel: {
    eyebrow: "Recommended next step",
    title: "Compassion Recovery Reset",
    description:
      "A structured guide for reducing empathy overload, rebuilding decompression, and keeping care sustainable without over-carrying other people's pain.",
    buttonLabel: "View Next Step",
  },
  relatedTools: [
    {
      title: "Emotional Exhaustion Audit",
      description: "Check whether repeated caring has broadened into deeper emotional depletion and lower everyday reserve.",
      category: "Stress & Burnout",
      minutes: "5 min",
      icon: "signal",
      href: buildToolHref({ slug: "emotional-exhaustion-audit", categorySlug: "stress-burnout" }),
    },
    {
      title: "Burnout Risk Audit",
      description: "See whether compassion strain is now contributing to fuller burnout load and weaker recovery capacity.",
      category: "Stress & Burnout",
      minutes: "4 min",
      icon: "trend",
      href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
    },
    {
      title: "Emotional Recovery Planner",
      description: "Turn empathy overload and emotional residue into a more specific recovery plan.",
      category: "Emotional Regulation",
      minutes: "4 min",
      icon: "insight",
      href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
    },
    {
      title: "Resentment Buildup Tracker",
      description: "See whether over-carrying and unspoken effort are beginning to harden into stored emotional pressure.",
      category: "Emotional Regulation",
      minutes: "5 min",
      icon: "graph",
      href: buildToolHref({ slug: "resentment-buildup-tracker", categorySlug: "emotional-regulation" }),
    },
  ],
  faqItems: [
    {
      question: "What does a compassion fatigue score actually mean?",
      answer:
        "It is a directional read of how taxed the helping system currently looks once care exposure, empathy drain, boundary leakage, and recovery protection are weighed together. A higher score means compassion appears more overused and less protected, not that you no longer care.",
    },
    {
      question: "Is compassion fatigue the same as burnout?",
      answer:
        "Not exactly. Compassion fatigue is more specific to the cost of repeated caregiving, support, emotional holding, or exposure to other people's pain. Burnout is broader and can involve workload, depletion, cynicism, and reduced capacity across more areas of life.",
    },
    {
      question: "Can compassion fatigue happen outside formal caregiving jobs?",
      answer:
        "Yes. It can happen in parenting, friendships, partnerships, family roles, leadership, caretaking, emotional labor, and any situation where you are repeatedly the one holding, soothing, or stabilizing others.",
    },
    {
      question: "Why do I feel guilty for wanting distance?",
      answer:
        "Because many caring people interpret the need for space as a moral problem. Often it is a capacity problem instead. Distance may be the system asking for decompression, not proof that your compassion has disappeared.",
    },
    {
      question: "What is the difference between empathy and over-carrying?",
      answer:
        "Empathy lets you connect with another person's experience while staying rooted in your own system. Over-carrying happens when concern keeps running after the moment ends and you remain internally responsible, activated, or emotionally loaded by what is not fully yours to hold.",
    },
    {
      question: "Why can I still help well and still have compassion fatigue?",
      answer:
        "Because performance and reserve are different. Many people continue helping effectively while privately paying a much higher emotional cost. The strain often shows up later as flatness, guilt, irritability, or a strong craving for distance.",
    },
    {
      question: "Can compassion fatigue make me feel numb or detached?",
      answer:
        "Yes. Numbness and detachment can be protective responses when the helping system has been absorbing more than it can keep clearing. They are not always signs that care is gone. Sometimes they are signs that care has become too expensive to access cleanly.",
    },
    {
      question: "What helps most if my highest dimension is boundary leakage?",
      answer:
        "Focus on reducing what follows you home. That might mean shorter exposure windows, clearer role boundaries, more deliberate transitions out of support mode, or support structures that keep you from being the sole emotional container.",
    },
    {
      question: "How often should I retake the Compassion Fatigue Check?",
      answer:
        "Retaking it every one to two weeks is usually enough if your role, boundaries, or exposure level are actively changing. It is especially useful after a heavy caregiving stretch or after you put stronger decompression practices in place.",
    },
    {
      question: "What should I do first if the score is high?",
      answer:
        "Start with the top strain dimension and the main source cluster. Lower one ongoing extraction point, then protect one genuine decompression block. Broad advice works poorly when compassion fatigue is being driven by a specific care pattern.",
    },
  ],
  heroPreviewAnswers: {
    loadFrequency: "often",
    endReserve: 24,
    switchOff: "difficult",
    restoration: "unreliable",
    dailyHeaviness: "often-heavy",
    sources: ["repeated-crisis-contact", "no-decompression-between-people", "absorbing-other-peoples-distress", "feeling-responsible-to-soothe"],
    earlySignal: "duty-mode",
    recoverySpeed: "slowly",
    clarityDrop: 60,
    capacityDrop: 68,
    pressureResponse: "show-up-and-pay-later",
    hiddenLoad: 76,
    selfRead: "supporting-others-is-following-me-home",
    hardestPart: "putting-it-down",
    currentState: "my-protection-is-too-thin",
  },
  resultText: {
    signalLabel: ({ band, topDimension, secondDimension }) =>
      `Compassion strain looks ${band.signalTone} across ${topDimension.label.toLowerCase()} and ${secondDimension.label.toLowerCase()}.`,
    standout: ({ band, topDimension, sourcePhrase }) =>
      `${band.standoutLead} ${topDimension.label} is the clearest pressure point right now, with ${sourcePhrase} feeding the helping-system load most visibly.`,
    nextStep: ({ band, topDimension, sourcePhrase }) =>
      `${band.nextStepLead} Start by lowering exposure around ${sourcePhrase} while strengthening protection underneath ${topDimension.label.toLowerCase()}.`,
    alignmentNote: ({ difference }) => {
      if (difference === null) {
        return "Use the score as a read of helping-system load, not as a judgment about your heart or your values.";
      }

      if (difference >= 16) {
        return "Your self-read sounds more strained than the averaged score, which often happens when the private after-cost of helping feels especially loud from the inside.";
      }

      if (difference <= -16) {
        return "The structural strain markers are running higher than your self-read, which can happen when reliability and duty hide how expensive the helping role has become.";
      }

      return "Your self-read and the structural check are broadly aligned, which adds confidence that this compassion-fatigue pattern is real and worth protecting against directly.";
    },
  },
};
