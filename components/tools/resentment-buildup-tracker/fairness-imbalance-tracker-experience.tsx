"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateResentmentResult,
  getInitialResentmentAnswers,
  isResentmentStepComplete,
  resentmentSteps,
  type PatternTruthKey,
  type ResentmentAnswers,
  type ResentmentSourceValue,
  type ResentmentStep,
  type SequenceKey,
  type SilenceDriverKey,
} from "@/data/fairness-imbalance-tracker";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./resentment-buildup-tracker.module.css";
import { BuildupContextMap } from "./buildup-context-map";
import { DragRankList } from "./drag-rank-list";
import { LiveResentmentPreview } from "./live-resentment-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { ResentmentBuildCurve } from "./resentment-build-curve";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SequenceOrderer } from "./sequence-orderer";
import { SignalBars } from "./signal-bars";
import { SilentCostPanel } from "./silent-cost-panel";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: ResentmentAnswers) {
  return resentmentSteps.filter((step) => isResentmentStepComplete(step, answers)).length;
}

export function ResentmentBuildupExperience() {
  const [answers, setAnswers] = useState<ResentmentAnswers>(getInitialResentmentAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = resentmentSteps[currentStepIndex];
  const result = calculateResentmentResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / resentmentSteps.length) * 100;
  const canAdvance = isResentmentStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof ResentmentAnswers>(
    field: Key,
    value: ResentmentAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSources(value: string, limit: number) {
    setAnswers((current) => {
      const typedValue = value as ResentmentSourceValue;
      const selectedValues = current.resentmentSources;
      const selected = selectedValues.includes(typedValue);

      if (selected) {
        return {
          ...current,
          resentmentSources: selectedValues.filter((item) => item !== typedValue),
        };
      }

      if (selectedValues.length >= limit) {
        return current;
      }

      return {
        ...current,
        resentmentSources: [...selectedValues, typedValue],
      };
    });
  }

  function updateRanking(
    field: "silenceDriverRanking" | "patternTruthRanking",
    nextOrder: string[],
  ) {
    setAnswers((current) =>
      field === "silenceDriverRanking"
        ? {
            ...current,
            silenceDriverRanking: nextOrder as SilenceDriverKey[],
            silenceDriverRankingConfirmed: true,
          }
        : {
            ...current,
            patternTruthRanking: nextOrder as PatternTruthKey[],
            patternTruthRankingConfirmed: true,
          },
    );
  }

  function confirmRanking(field: "silenceDriverRanking" | "patternTruthRanking") {
    setAnswers((current) =>
      field === "silenceDriverRanking"
        ? { ...current, silenceDriverRankingConfirmed: true }
        : { ...current, patternTruthRankingConfirmed: true },
    );
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

    if (currentStepIndex === resentmentSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, resentmentSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialResentmentAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: ResentmentStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as ResentmentAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as ResentmentAnswers[typeof step.field])}
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
          onToggle={(value) => toggleSources(value, step.limit)}
          options={step.options}
          values={answers[step.field]}
        />
      );
    }

    if (step.kind === "drag-rank") {
      return (
        <DragRankList
          confirmed={
            step.field === "silenceDriverRanking"
              ? answers.silenceDriverRankingConfirmed
              : answers.patternTruthRankingConfirmed
          }
          items={step.items}
          onChange={(nextOrder) => updateRanking(step.field, nextOrder)}
          onConfirm={() => confirmRanking(step.field)}
          value={answers[step.field]}
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
        onChange={(nextValue) => updateAnswer(step.field, nextValue as ResentmentAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveResentmentPreview compact label="Live buildup preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Tracker status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {resentmentSteps.length} stored-pressure signals mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch the accumulation curve, fairness imbalance,
          silent carrying, and withdrawal risk redraw before the full report appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Buildup curve</span>
          <span className={styles.metaChip}>Silent-cost read</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging buildup read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.resentmentLabel}</p>
        <p className={styles.sideCardFootnote}>
          Strongest context: {result.mainResentmentContext.label.toLowerCase()} · main driver:{" "}
          {result.primaryBuildupDriver.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-resentment-tracker" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium emotional accumulation tracker built to show where silence, imbalance, and over-carrying turn into stored pressure</h2>
            <p className={styles.sectionDescription}>
              One buildup signal at a time. Large controls, calm motion, a live accumulation preview, and
              deterministic logic underneath the experience so the final report feels grounded rather than vague.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={resentmentSteps.length}
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
                      ? "Result unlocked. You can still adjust any answer and the buildup report will redraw."
                      : "Answer for how the pressure really builds, not only how the situation looks from the outside."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === resentmentSteps.length - 1 ? "Reveal Buildup Report" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual reads of where stored pressure is gathering, where imbalance is strongest, and how the hidden cost is starting to show</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show the build curve, the four resentment dimensions,
                  the strongest contexts, and the hidden cost that makes the result practical.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <ResentmentBuildCurve result={result} />
                <SignalBars result={result} />
                <BuildupContextMap result={result} />
                <SilentCostPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
