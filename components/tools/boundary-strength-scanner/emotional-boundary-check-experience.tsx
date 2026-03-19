"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateBoundaryStrengthResult,
  getInitialBoundaryStrengthAnswers,
  isBoundaryStrengthStepComplete,
  boundaryStrengthSteps,
  type AccommodationSituationValue,
  type BoundaryStrengthAnswers,
  type BoundaryStrengthStep,
  type PleasingDriverKey,
} from "@/data/emotional-boundary-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./boundary-strength-scanner.module.css";
import { DragRankList } from "./drag-rank-list";
import { HiddenCostPanel } from "./hidden-cost-panel";
import { LiveSignalPreview } from "./live-signal-preview";
import { ProgressHeader } from "./progress-header";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SelfSignalDriftLine } from "./self-signal-drift-line";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";
import { WeakZoneMap } from "./weak-zone-map";
import { MultiSelectChips } from "./multi-select-chips";

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

function getAnsweredStepCount(answers: BoundaryStrengthAnswers) {
  return boundaryStrengthSteps.filter((step) => isBoundaryStrengthStepComplete(step, answers)).length;
}

export function BoundaryStrengthExperience() {
  const [answers, setAnswers] = useState<BoundaryStrengthAnswers>(getInitialBoundaryStrengthAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = boundaryStrengthSteps[currentStepIndex];
  const result = calculateBoundaryStrengthResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / boundaryStrengthSteps.length) * 100;
  const canAdvance = isBoundaryStrengthStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof BoundaryStrengthAnswers>(field: Key, value: BoundaryStrengthAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSituation(value: string) {
    const typedValue = value as AccommodationSituationValue;

    setAnswers((current) => {
      const selected = current.accommodationSituations.includes(typedValue);

      if (selected) {
        return {
          ...current,
          accommodationSituations: current.accommodationSituations.filter((item) => item !== typedValue),
        };
      }

      if (current.accommodationSituations.length >= 4) {
        return current;
      }

      return {
        ...current,
        accommodationSituations: [...current.accommodationSituations, typedValue],
      };
    });
  }

  function updateRanking(nextOrder: PleasingDriverKey[]) {
    setAnswers((current) => ({
      ...current,
      driverRanking: nextOrder,
      driverRankingConfirmed: true,
    }));
  }

  function confirmRanking() {
    setAnswers((current) => ({
      ...current,
      driverRankingConfirmed: true,
    }));
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentStepIndex === boundaryStrengthSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, boundaryStrengthSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialBoundaryStrengthAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: BoundaryStrengthStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as BoundaryStrengthAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as BoundaryStrengthAnswers[typeof step.field])}
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
          onToggle={toggleSituation}
          options={step.options}
          values={answers.accommodationSituations}
        />
      );
    }

    if (step.kind === "drag-rank") {
      return (
        <DragRankList
          confirmed={answers.driverRankingConfirmed}
          items={step.items}
          onChange={updateRanking}
          onConfirm={confirmRanking}
          value={answers.driverRanking}
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
              value={typeof answers[field.key] === "number" ? answers[field.key] ?? 45 : 45}
            />
          ))}
        </div>
      );
    }

    return (
      <ScenarioChoiceGrid
        ariaLabel={step.question}
        columns={step.columns}
        onChange={(nextValue) => updateAnswer(step.field, nextValue as BoundaryStrengthAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveSignalPreview compact label="Live boundary preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Signal status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {boundaryStrengthSteps.length} boundary checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch boundary pressure, limit clarity, override strain, and hidden cost shift in real time.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Boundary drift logic</span>
          <span className={styles.metaChip}>Pressure-weighted scoring</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging pattern</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Main driver: {result.primaryDriver.label.toLowerCase()} · weak-zone:{" "}
          {result.mainWeakZone.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-signal-check" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium boundary scanner built to catch limit softening before it only shows up as later resentment or exhaustion</h2>
            <p className={styles.sectionDescription}>
              One pressure signal at a time. Large touch targets, calmer motion, a live boundary preview, and deterministic scoring underneath the experience so the output feels validating instead of generic.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={boundaryStrengthSteps.length}
            />

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
                      ? "Result unlocked. You can still adjust any answer and the boundary reading will redraw."
                      : "Choose the response that feels most familiar from the inside. The tool is built to detect boundary strain, not to reward hardness."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === boundaryStrengthSteps.length - 1 ? "Reveal Reading" : "Next Signal"}
                  <ChevronRightIcon className={styles.inlineIcon} />
                </button>
              </div>
            </div>
          </ToolShell>
        </div>
      </section>

      {showResult ? (
        <div ref={resultSectionRef}>
          <ResultReveal onRetake={handleRetake} result={result} />

          <section className={styles.section} id="visual-insights">
            <div className={styles.pageContainer}>
              <div className={styles.sectionHeading}>
                <p className={styles.sectionEyebrow}>Visual insights section</p>
                <h2 className={styles.sectionTitle}>Four visual views into where pressure enters, where the limit softens, and where the after-cost lands later</h2>
                <p className={styles.sectionDescription}>
                  The result is more than a boundary score. These views show the actual movement of the pattern, the contexts where it happens most, the dimension breakdown underneath it, and the hidden emotional cost that follows.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <SelfSignalDriftLine result={result} />
                <SignalBars result={result} />
                <WeakZoneMap result={result} />
                <HiddenCostPanel result={result} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
