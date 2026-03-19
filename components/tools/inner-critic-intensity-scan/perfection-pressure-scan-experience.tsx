"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateInnerCriticResult,
  getInitialInnerCriticAnswers,
  innerCriticSteps,
  isInnerCriticStepComplete,
  type ActivationContextValue,
  type InnerCriticAnswers,
  type InnerCriticStep,
  type RankedTruthKey,
} from "@/data/perfection-pressure-scan";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./inner-critic-intensity-scan.module.css";
import { CriticPatternMap } from "./critic-pattern-map";
import { DragRankList } from "./drag-rank-list";
import { InnerVoiceIntensityMeter } from "./inner-voice-intensity-meter";
import { LiveInnerCriticPreview } from "./live-inner-critic-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";
import { VoiceCostPanel } from "./voice-cost-panel";

function scrollNodeIntoView(node: HTMLElement | null) {
  if (!node) {
    return;
  }

  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  node.scrollIntoView({
    behavior: shouldReduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

function getAnsweredStepCount(answers: InnerCriticAnswers) {
  return innerCriticSteps.filter((step) => isInnerCriticStepComplete(step, answers)).length;
}

export function InnerCriticExperience() {
  const [answers, setAnswers] = useState<InnerCriticAnswers>(getInitialInnerCriticAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = innerCriticSteps[currentStepIndex];
  const result = calculateInnerCriticResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / innerCriticSteps.length) * 100;
  const canAdvance = isInnerCriticStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof InnerCriticAnswers>(
    field: Key,
    value: InnerCriticAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleMultiSelect(field: "activationContexts", value: string, limit: number) {
    setAnswers((current) => {
      const typedValue = value as ActivationContextValue;
      const selectedValues = current[field];
      const selected = selectedValues.includes(typedValue);

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

    if (currentStepIndex === innerCriticSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, innerCriticSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialInnerCriticAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: InnerCriticStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as InnerCriticAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as InnerCriticAnswers[typeof step.field])}
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
        onChange={(nextValue) => updateAnswer(step.field, nextValue as InnerCriticAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveInnerCriticPreview compact label="Live inner critic preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Inner-voice scan status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {innerCriticSteps.length} inner-voice checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch critic force, repetition, perfection pressure, and self-trust erosion redraw before the full report appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Voice waveform</span>
          <span className={styles.metaChip}>Intensity meter</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging inner-voice read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.criticLabel}</p>
        <p className={styles.sideCardFootnote}>
          Primary style: {result.primaryCriticStyle.label.toLowerCase()} · softening direction:{" "}
          {result.mostUsefulSofteningDirection.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-inner-critic-scan" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium inner-voice scan built to show how harshness, repetition, and perfection pressure are shaping your internal climate</h2>
            <p className={styles.sectionDescription}>
              One inner-voice checkpoint at a time. Large controls, calm motion, a live critic preview, and deterministic scoring underneath the experience so the result feels grounded rather than generic.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader currentStep={currentStepIndex + 1} progress={progress} totalSteps={innerCriticSteps.length} />

            <div className={styles.toolContentArea}>
              <div className={styles.stepTransition} key={currentStep.id}>
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
                      ? "Result unlocked. You can still adjust any answer and the inner-voice report will redraw."
                      : "Answer for how the voice actually feels from the inside lately, not only how it might sound on a better day."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === innerCriticSteps.length - 1 ? "Reveal Report" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual reads of how the inner voice is shaping tone, repetition, perfection demand, and internal cost</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show the intensity meter, the four critic dimensions, the dominant critic forms, and the real cost of the voice in practice.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <InnerVoiceIntensityMeter result={result} />
                <SignalBars result={result} />
                <CriticPatternMap result={result} />
                <VoiceCostPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
