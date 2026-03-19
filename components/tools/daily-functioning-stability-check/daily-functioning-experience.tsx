"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateDailyFunctioningResult,
  dailyFunctioningSteps,
  getInitialDailyFunctioningAnswers,
  isDailyFunctioningStepComplete,
  type DailyFunctioningAnswers,
  type DailyFunctioningStep,
  type RankedTruthKey,
  type SequenceKey,
  type WeakAreaValue,
} from "@/data/daily-functioning-stability-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./daily-functioning-stability-check.module.css";
import { DailySlipPointMap } from "./daily-slip-point-map";
import { DailyStabilityDashboard } from "./daily-stability-dashboard";
import { DragRankList } from "./drag-rank-list";
import { FunctioningCostPanel } from "./functioning-cost-panel";
import { LiveFunctioningPreview } from "./live-functioning-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SequenceOrderer } from "./sequence-orderer";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: DailyFunctioningAnswers) {
  return dailyFunctioningSteps.filter((step) => isDailyFunctioningStepComplete(step, answers)).length;
}

export function DailyFunctioningExperience() {
  const [answers, setAnswers] = useState<DailyFunctioningAnswers>(getInitialDailyFunctioningAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = dailyFunctioningSteps[currentStepIndex];
  const result = calculateDailyFunctioningResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / dailyFunctioningSteps.length) * 100;
  const canAdvance = isDailyFunctioningStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof DailyFunctioningAnswers>(
    field: Key,
    value: DailyFunctioningAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleWeakArea(value: string, limit: number) {
    setAnswers((current) => {
      const typedValue = value as WeakAreaValue;
      const selectedValues = current.weakAreas;
      const selected = selectedValues.includes(typedValue);

      if (selected) {
        return {
          ...current,
          weakAreas: selectedValues.filter((item) => item !== typedValue),
        };
      }

      if (selectedValues.length >= limit) {
        return current;
      }

      return {
        ...current,
        weakAreas: [...selectedValues, typedValue],
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

  function updateSequence(nextOrder: string[]) {
    setAnswers((current) => ({
      ...current,
      sequenceOrder: nextOrder as SequenceKey[],
      sequenceConfirmed: true,
    }));
  }

  function confirmSequence() {
    setAnswers((current) => ({
      ...current,
      sequenceConfirmed: true,
    }));
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentStepIndex === dailyFunctioningSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, dailyFunctioningSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialDailyFunctioningAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: DailyFunctioningStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) =>
            updateAnswer(step.field, nextValue as DailyFunctioningAnswers[typeof step.field])
          }
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) =>
            updateAnswer(step.field, nextValue as DailyFunctioningAnswers[typeof step.field])
          }
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
          onToggle={(value) => toggleWeakArea(value, step.limit)}
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

    if (step.kind === "sequence-order") {
      return (
        <SequenceOrderer
          confirmed={answers.sequenceConfirmed}
          items={step.items}
          onChange={updateSequence}
          onConfirm={confirmSequence}
          value={answers.sequenceOrder}
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
        onChange={(nextValue) =>
          updateAnswer(step.field, nextValue as DailyFunctioningAnswers[typeof step.field])
        }
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveFunctioningPreview compact label="Live stability preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Stability status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {dailyFunctioningSteps.length} daily stability checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch steadiness, rhythm, clarity, follow-through, emotional buffering, and recovery margin redraw before the full dashboard appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Daily dashboard</span>
          <span className={styles.metaChip}>Slip-point mapping</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging daily read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.stabilityLabel}</p>
        <p className={styles.sideCardFootnote}>
          Driver: {result.primaryInstabilityDriver.label.toLowerCase()} · slip point:{" "}
          {result.strongestSlipPoint.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section
        className={styles.section}
        id="interactive-daily-functioning-stability-check"
        ref={toolSectionRef}
      >
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium daily-stability dashboard built to show where the day holds, where it slips, and why steadiness gets expensive under normal load</h2>
            <p className={styles.sectionDescription}>
              One day-structure checkpoint at a time. Large controls, calm motion, a live stability preview, and deterministic scoring underneath the experience so the result feels operational instead of generic.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={dailyFunctioningSteps.length}
            />

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
                      ? "Result unlocked. You can still adjust any answer and the daily stability dashboard will redraw."
                      : "Answer for how the day actually behaves when pressure rises, not only for how it looks on a calmer or more productive day."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === dailyFunctioningSteps.length - 1 ? "Reveal Dashboard" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual reads of daily steadiness, slip points, recovery margin, and the hidden cost of compensating through the day</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show how steadiness is distributed, which dimensions are strongest or weakest, where the day first narrows, and what the instability is costing by the end.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <DailyStabilityDashboard result={result} />
                <SignalBars result={result} />
                <DailySlipPointMap result={result} />
                <FunctioningCostPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
