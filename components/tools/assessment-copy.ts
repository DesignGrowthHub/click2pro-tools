function normalizeSpacing(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function applySharedQuestionTone(text: string) {
  return normalizeSpacing(
    text
      .replace(/\bcurrently\b/g, "right now")
      .replace(/\bCurrently\b/g, "Right now")
      .replace(/How much genuine /g, "How much real "),
  );
}

function applySharedHintTone(text: string) {
  return normalizeSpacing(
    text
      .replace(/\bTreat this as\b/g, "Use this as")
      .replace(/\bThis final read\b/g, "This last step")
      .replace(/\bThis helps the tool distinguish\b/g, "This helps the tool separate")
      .replace(/\bThis captures\b/g, "This shows")
      .replace(/\blived experience\b/g, "real experience")
      .replace(/\bnot only\b/g, "not just")
      .replace(
        /Drag on desktop or use move buttons anywhere\./g,
        "Drag on desktop or use the move buttons on any device.",
      ),
  );
}

export function refineAssessmentQuestion(text: string) {
  return applySharedQuestionTone(text);
}

export function refineAssessmentHint(text: string) {
  return applySharedHintTone(text);
}

export function refineFaqQuestion(text: string) {
  return normalizeSpacing(
    text
      .replace(/\bcurrently\b/g, "right now")
      .replace(/\bCurrently\b/g, "Right now"),
  );
}

export function refineFaqAnswer(text: string) {
  return normalizeSpacing(
    text
      .replace(/\bnot only\b/g, "not just")
      .replace(/\blived experience\b/g, "real experience")
      .replace(/\bTreat this as\b/g, "Use this as"),
  );
}
