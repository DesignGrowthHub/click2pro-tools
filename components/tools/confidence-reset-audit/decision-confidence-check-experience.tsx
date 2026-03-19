"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateConfidenceResetResult,
  confidenceResetSteps,
  getInitialConfidenceResetAnswers,
  isConfidenceResetStepComplete,
  type ConfidenceResetAnswers,
  type ConfidenceResetStep,
  type DrainSourceValue,
  type RankedTruthKey,
  type WeakSituationValue,
} from "@/data/decision-confidence-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./confidence-reset-audit.module.css";
import { ConfidenceDrainMap } from "./confidence-drain-map";
import { DragRankList } from "./drag-rank-list";
import { LiveConfidencePreview } from "./live-confidence-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { ResetPriorityPanel } from "./reset-priority-panel";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SelfTrustMeter } from "./self-trust-meter";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: ConfidenceResetAnswers) {
  return confidenceResetSteps.filter((step) => isConfidenceResetStepComplete(step, answers)).length;
}

export function ConfidenceResetExperience() {
  const [answers, setAnswers] = useState<ConfidenceResetAnswers>(getInitialConfidenceResetAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = confidenceResetSteps[currentStepIndex];
  const result = calculateConfidenceResetResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / confidenceResetSteps.length) * 100;
  const canAdvance = isConfidenceResetStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollToolViewportNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  useEffect(() => {
    if (showResult) {
      return;
    }

    if (previousStepIndexRef.current !== currentStepIndex) {
      scrollToolViewportNodeIntoView(activeStepRef.current, "step");
    }

    previousStepIndexRef.current = currentStepIndex;
  }, [currentStepIndex, showResult]);

  function updateAnswer<Key extends keyof ConfidenceResetAnswers>(
    field: Key,
    value: ConfidenceResetAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleMultiSelect(
    field: "weakConfidenceSituations" | "drainSources",
    value: string,
    limit: number,
  ) {
    setAnswers((current) => {
      const typedValue =
        field === "weakConfidenceSituations"
          ? (value as WeakSituationValue)
          : (value as DrainSourceValue);
      const selectedValues = current[field];
      const selected = selectedValues.includes(typedValue as never);

      if (selected) {
        return {
          ...current,
          [field]: selectedValues.filter((item) => item !== typedValue),
        };
      }

      if (selectedValues.length >= limit) {
        return current;
      }

      return {
        ...current,
        [field]: [...selectedValues, typedValue],
      };
    });
  }

  function updateRanking(nextOrder: RankedTruthKey[]) {
    setAnswers((current) => ({
      ...current,
      rankingOrder: nextOrder,
      rankingConfirmed: true,
    }));
  }

  function confirmRanking() {
    setAnswers((current) => ({
      ...current,
      rankingConfirmed: true,
    }));
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentStepIndex === confidenceResetSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, confidenceResetSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialConfidenceResetAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: ConfidenceResetStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as ConfidenceResetAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as ConfidenceResetAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "slider") {
      return (
        <SliderInput
          id={step.field}
          label={step.label}
          maxLabel={step.maxLabel}
          minLabel={step.minLabel}
          onChange={(value) => updateAnswer(step.field, value)}
          value={typeof answers[step.field] === "number" ? answers[step.field] ?? 50 : 50}
        />
      );
    }

    if (step.kind === "multi-select") {
      return (
        <MultiSelectChips
          limit={step.limit}
          onToggle={(value) => toggleMultiSelect(step.field, value, step.limit)}
          options={step.options}
          values={answers[step.field]}
        />
      );
    }

    if (step.kind === "drag-rank") {
      return (
        <DragRankList
          confirmed={answers.rankingConfirmed}
          items={step.items}
          onChange={updateRanking}
          onConfirm={confirmRanking}
          value={answers.rankingOrder}
        />
      );
    }

    if (step.kind === "triple-slider") {
      return (
        <div className={styles.tripleSliderGrid}>
          {step.fields.map((field) => (
            <SliderInput
              compact
              id={field.key}
              key={field.key}
              label={field.label}
              maxLabel={field.maxLabel}
              minLabel={field.minLabel}
              onChange={(value) => updateAnswer(field.key, value)}
              value={typeof answers[field.key] === "number" ? answers[field.key] ?? 42 : 42}
            />
          ))}
        </div>
      );
    }

    return (
      <ScenarioChoiceGrid
        ariaLabel={step.question}
        columns={step.columns}
        onChange={(nextValue) => updateAnswer(step.field, nextValue as ConfidenceResetAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveConfidencePreview compact label="Live confidence state preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Confidence audit status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {confidenceResetSteps.length} self-trust checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch confidence stability, hesitation pressure, comparison drag, and recovery strength redraw before the final report appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Self-trust meter</span>
          <span className={styles.metaChip}>Drain-source mapping</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging confidence read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.confidenceLabel}</p>
        <p className={styles.sideCardFootnote}>
          Main drain: {result.primaryConfidenceDrain.label.toLowerCase()} · reset priority:{" "}
          {result.mostUsefulResetPriority.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-confidence-audit" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium self-trust audit built to show where confidence is leaking and what is keeping it unstable</h2>
            <p className={styles.sectionDescription}>
              One confidence checkpoint at a time. Large controls, calm motion, a live self-trust preview, and deterministic logic underneath the experience so the result feels grounded rather than motivational.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader currentStep={currentStepIndex + 1} progress={progress} totalSteps={confidenceResetSteps.length} />

            <div className={styles.toolContentArea}>
              <div className={styles.stepTransition} key={currentStep.id} ref={activeStepRef}>
                <StepCard eyebrow={currentStep.eyebrow} hint={currentStep.hint} question={currentStep.question}>
                  {renderCurrentStep(currentStep)}
                </StepCard>
              </div>

              <div className={styles.toolFooterRow}>
                <button
                  className={styles.backButton}
                  disabled={currentStepIndex === 0}
                  onClick={handleBack}
                  type="button"
                >
                  Back
                </button>

                <div className={styles.toolFooterMeta}>
                  <span className={styles.toolFooterHint}>
                    {showResult
                      ? "Result unlocked. You can still adjust any answer and the confidence report will redraw."
                      : "Answer for how confidence has actually been functioning lately, not only how capable you know you can be."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === confidenceResetSteps.length - 1 ? "Reveal Report" : "Next Signal"}
                  <ChevronRightIcon className={styles.inlineIcon} />
                </button>
              </div>
            </div>
          </ToolShell>
        </div>
      </section>

      {showResult ? (
        <>
          <div ref={resultSectionRef}>
            <ResultReveal onRetake={handleRetake} result={result} />
          </div>

          <section className={styles.section} id="visual-insights">
            <div className={styles.pageContainer}>
              <div className={styles.sectionHeading}>
                <p className={styles.sectionEyebrow}>Visual insights section</p>
                <h2 className={styles.sectionTitle}>Four visual reads of what is interrupting confidence, what remains strong, and where the reset should start</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show the self-trust meter, the four confidence dimensions, the drain map, and the reset priorities that make the result useful in practice.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <SelfTrustMeter result={result} />
                <SignalBars result={result} />
                <ConfidenceDrainMap result={result} />
                <ResetPriorityPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
