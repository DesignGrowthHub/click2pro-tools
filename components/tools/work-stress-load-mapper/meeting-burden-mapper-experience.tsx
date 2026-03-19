"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateWorkStressResult,
  getInitialWorkStressAnswers,
  isWorkStressStepComplete,
  workStressSteps,
  type PressureSourceValue,
  type RankedStressKey,
  type SequenceKey,
  type WorkStressAnswers,
  type WorkStressStep,
} from "@/data/meeting-burden-mapper";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./work-stress-load-mapper.module.css";
import { ControlDemandPanel } from "./control-demand-panel";
import { DragRankList } from "./drag-rank-list";
import { HiddenCostPanel } from "./hidden-cost-panel";
import { LiveWorkStressPreview } from "./live-work-stress-preview";
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
import { WorkLoadDistributionChart } from "./work-load-distribution-chart";

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

function getAnsweredStepCount(answers: WorkStressAnswers) {
  return workStressSteps.filter((step) => isWorkStressStepComplete(step, answers)).length;
}

export function WorkStressLoadExperience() {
  const [answers, setAnswers] = useState<WorkStressAnswers>(getInitialWorkStressAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = workStressSteps[currentStepIndex];
  const result = calculateWorkStressResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / workStressSteps.length) * 100;
  const canAdvance = isWorkStressStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof WorkStressAnswers>(
    field: Key,
    value: WorkStressAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function togglePressureSource(value: string, limit: number) {
    setAnswers((current) => {
      const typedValue = value as PressureSourceValue;
      const selectedValues = current.pressureSources;
      const selected = selectedValues.includes(typedValue);

      if (selected) {
        return {
          ...current,
          pressureSources: selectedValues.filter((item) => item !== typedValue),
        };
      }

      if (selectedValues.length >= limit) {
        return current;
      }

      return {
        ...current,
        pressureSources: [...selectedValues, typedValue],
      };
    });
  }

  function updateRanking(nextOrder: RankedStressKey[]) {
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

    if (currentStepIndex === workStressSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, workStressSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialWorkStressAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: WorkStressStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as WorkStressAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as WorkStressAnswers[typeof step.field])}
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
          onToggle={(value) => togglePressureSource(value, step.limit)}
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
        onChange={(nextValue) => updateAnswer(step.field, nextValue as WorkStressAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveWorkStressPreview compact label="Live work-stress preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Load mapper status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {workStressSteps.length} work-pressure checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch workload density, ambiguity, switching, control, invisible burden, and people pressure redraw before the full map appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Load distribution</span>
          <span className={styles.metaChip}>Demand vs control</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging load read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.loadLabel}</p>
        <p className={styles.sideCardFootnote}>
          Driver: {result.primaryStressDriver.label.toLowerCase()} · zone:{" "}
          {result.heaviestConcentrationZone.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section
        className={styles.section}
        id="interactive-work-stress-load-mapper"
        ref={toolSectionRef}
      >
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium work-pressure mapper built to show what the load is made of, where control drops, and why recovery keeps getting expensive</h2>
            <p className={styles.sectionDescription}>
              One work-structure checkpoint at a time. Large controls, calm motion, a live stress-map preview, and deterministic scoring underneath the experience so the result feels operational instead of generic.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={workStressSteps.length}
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
                      ? "Result unlocked. You can still adjust any answer and the work-stress map will redraw."
                      : "Answer for how the work is actually structured when pressure rises, not only for how the role looks on a calmer week."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === workStressSteps.length - 1 ? "Reveal Map" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual reads of work stress composition, control deficit, and hidden cost</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show how the pressure is distributed, which dimensions are steepest, how demand compares with control, and what the load is costing after hours.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <WorkLoadDistributionChart result={result} />
                <SignalBars result={result} />
                <ControlDemandPanel result={result} />
                <HiddenCostPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
