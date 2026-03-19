"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateSelfSabotageResult,
  getInitialSelfSabotageAnswers,
  isSelfSabotageStepComplete,
  selfSabotageSteps,
  type DerailmentContextValue,
  type RankedTruthKey,
  type SelfSabotageAnswers,
  type SelfSabotageStep,
  type SequenceKey,
} from "@/data/visibility-sabotage-pattern-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./self-sabotage-pattern-finder.module.css";
import { DragRankList } from "./drag-rank-list";
import { DerailmentTriggerCluster } from "./derailment-trigger-cluster";
import { HiddenCostPanel } from "./hidden-cost-panel";
import { LiveProgressPreview } from "./live-progress-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { ProgressInterruptionMap } from "./progress-interruption-map";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SequenceOrderer } from "./sequence-orderer";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

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

function getAnsweredStepCount(answers: SelfSabotageAnswers) {
  return selfSabotageSteps.filter((step) => isSelfSabotageStepComplete(step, answers)).length;
}

export function SelfSabotageExperience() {
  const [answers, setAnswers] = useState<SelfSabotageAnswers>(getInitialSelfSabotageAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = selfSabotageSteps[currentStepIndex];
  const result = calculateSelfSabotageResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / selfSabotageSteps.length) * 100;
  const canAdvance = isSelfSabotageStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof SelfSabotageAnswers>(
    field: Key,
    value: SelfSabotageAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleContexts(value: string, limit: number) {
    setAnswers((current) => {
      const typedValue = value as DerailmentContextValue;
      const selectedValues = current.derailmentContexts;
      const selected = selectedValues.includes(typedValue);

      if (selected) {
        return {
          ...current,
          derailmentContexts: selectedValues.filter((item) => item !== typedValue),
        };
      }

      if (selectedValues.length >= limit) {
        return current;
      }

      return {
        ...current,
        derailmentContexts: [...selectedValues, typedValue],
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

    if (currentStepIndex === selfSabotageSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, selfSabotageSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialSelfSabotageAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: SelfSabotageStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as SelfSabotageAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as SelfSabotageAnswers[typeof step.field])}
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
        onChange={(nextValue) => updateAnswer(step.field, nextValue as SelfSabotageAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveProgressPreview compact label="Live interruption preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Progress finder status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {selfSabotageSteps.length} interruption checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch momentum, trigger pressure, interruption timing, and follow-through redraw before the full report appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Path-break preview</span>
          <span className={styles.metaChip}>Trigger mapping</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging progress read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.sabotageLabel}</p>
        <p className={styles.sideCardFootnote}>
          Primary trigger: {result.primaryDerailmentTrigger.label.toLowerCase()} · interruption point:{" "}
          {result.mostCommonInterruptionPoint.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-self-sabotage-finder" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium progress-interruption finder built to show where momentum breaks and what quietly takes over</h2>
            <p className={styles.sectionDescription}>
              One sabotage checkpoint at a time. Large controls, calm motion, a live progress preview, and deterministic logic underneath the experience so the result feels precise instead of vague.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader currentStep={currentStepIndex + 1} progress={progress} totalSteps={selfSabotageSteps.length} />

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
                      ? "Result unlocked. You can still adjust any answer and the interruption report will redraw."
                      : "Answer for how the break actually happens when progress matters, not only for how you wish the process looked."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === selfSabotageSteps.length - 1 ? "Reveal Report" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual reads of where the path breaks, what drives it, and what the interruption costs once it begins</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show the interruption map, the four dimensions, the strongest derailment triggers, and the hidden cost that makes the pattern matter in practice.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <ProgressInterruptionMap result={result} />
                <SignalBars result={result} />
                <DerailmentTriggerCluster result={result} />
                <HiddenCostPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
