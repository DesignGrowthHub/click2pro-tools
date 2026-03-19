"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateReassuranceResult,
  getInitialReassuranceAnswers,
  isReassuranceStepComplete,
  reassuranceSteps,
  type ReassuranceAnswers,
  type ReassuranceContextValue,
  type ReassuranceFormKey,
  type ReassuranceStep,
  type SequenceKey,
} from "@/data/reassurance-seeking-decoder";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./reassurance-seeking-decoder.module.css";
import { DragRankList } from "./drag-rank-list";
import { LiveReassurancePreview } from "./live-reassurance-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { ReassuranceContextMap } from "./reassurance-context-map";
import { ReassuranceCycleLoop } from "./reassurance-cycle-loop";
import { ReliefReturnPanel } from "./relief-return-panel";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SequenceOrderer } from "./sequence-orderer";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: ReassuranceAnswers) {
  return reassuranceSteps.filter((step) => isReassuranceStepComplete(step, answers)).length;
}

export function ReassuranceSeekingExperience() {
  const [answers, setAnswers] = useState<ReassuranceAnswers>(getInitialReassuranceAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = reassuranceSteps[currentStepIndex];
  const result = calculateReassuranceResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / reassuranceSteps.length) * 100;
  const canAdvance = isReassuranceStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof ReassuranceAnswers>(
    field: Key,
    value: ReassuranceAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleContexts(value: string, limit: number) {
    setAnswers((current) => {
      const typedValue = value as ReassuranceContextValue;
      const selectedValues = current.reassuranceContexts;
      const selected = selectedValues.includes(typedValue);

      if (selected) {
        return {
          ...current,
          reassuranceContexts: selectedValues.filter((item) => item !== typedValue),
        };
      }

      if (selectedValues.length >= limit) {
        return current;
      }

      return {
        ...current,
        reassuranceContexts: [...selectedValues, typedValue],
      };
    });
  }

  function updateRanking(nextOrder: ReassuranceFormKey[]) {
    setAnswers((current) => ({
      ...current,
      reassuranceFormOrder: nextOrder,
      reassuranceFormConfirmed: true,
    }));
  }

  function confirmRanking() {
    setAnswers((current) => ({
      ...current,
      reassuranceFormConfirmed: true,
    }));
  }

  function updateSequence(nextOrder: SequenceKey[]) {
    setAnswers((current) => ({
      ...current,
      sequenceOrder: nextOrder,
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

    if (currentStepIndex === reassuranceSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, reassuranceSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialReassuranceAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: ReassuranceStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as ReassuranceAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as ReassuranceAnswers[typeof step.field])}
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
          onToggle={(value) => toggleContexts(value, step.limit)}
          options={step.options}
          values={answers[step.field]}
        />
      );
    }

    if (step.kind === "drag-rank") {
      return (
        <DragRankList
          confirmed={answers.reassuranceFormConfirmed}
          items={step.items}
          onChange={updateRanking}
          onConfirm={confirmRanking}
          value={answers.reassuranceFormOrder}
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
        onChange={(nextValue) => updateAnswer(step.field, nextValue as ReassuranceAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveReassurancePreview compact label="Live reassurance cycle preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Decoder status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {reassuranceSteps.length} uncertainty signals mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch uncertainty intensity, reassurance pull, relief fragility, and relapse speed redraw before the final report appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Loop visual</span>
          <span className={styles.metaChip}>Context mapping</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging cycle read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.reassuranceLabel}</p>
        <p className={styles.sideCardFootnote}>
          Strongest context: {result.primaryReassuranceContext.label.toLowerCase()} · main driver:{" "}
          {result.dominantLoopDriver.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-reassurance-decoder" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium uncertainty-cycle decoder built to show where reassurance calms briefly and where doubt gets reactivated</h2>
            <p className={styles.sectionDescription}>
              One loop checkpoint at a time. Large controls, calm motion, a live cycle preview, and deterministic logic underneath the experience so the final read feels grounded rather than vague.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={reassuranceSteps.length}
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
                      ? "Result unlocked. You can still adjust any answer and the cycle report will redraw."
                      : "Answer for how the uncertainty loop really behaves, not only how you wish it worked."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === reassuranceSteps.length - 1 ? "Reveal Report" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual reads of where uncertainty spikes, where reassurance lands, and where the return of doubt keeps the cycle alive</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show the core loop, the four reassurance dimensions, the strongest reassurance contexts, and the relief-versus-return pattern that makes the result practical.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <ReassuranceCycleLoop result={result} />
                <SignalBars result={result} />
                <ReassuranceContextMap result={result} />
                <ReliefReturnPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
