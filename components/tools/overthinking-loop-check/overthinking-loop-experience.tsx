"use client";

import { useEffect, useRef, useState } from "react";
import type {
  OverthinkingAnswers,
  OverthinkingStep,
  RankItemKey,
  LoopTriggerValue,
} from "@/data/overthinking-loop-check";
import {
  calculateOverthinkingLoop,
  getInitialOverthinkingAnswers,
  isOverthinkingStepComplete,
  overthinkingSteps,
} from "@/data/overthinking-loop-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./overthinking-loop-check.module.css";
import { DragRankList } from "./drag-rank-list";
import { MiniPatternPreview } from "./mini-pattern-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { PatternMap } from "./pattern-map";
import { ProgressHeader } from "./progress-header";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { SpilloverImpactChart } from "./spillover-impact-chart";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";
import { TriggerClusterMap } from "./trigger-cluster-map";

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

function getAnsweredStepCount(answers: OverthinkingAnswers) {
  return overthinkingSteps.filter((step) => isOverthinkingStepComplete(step, answers)).length;
}

export function OverthinkingLoopExperience() {
  const [answers, setAnswers] = useState<OverthinkingAnswers>(getInitialOverthinkingAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = overthinkingSteps[currentStepIndex];
  const result = calculateOverthinkingLoop(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / overthinkingSteps.length) * 100;
  const canAdvance = isOverthinkingStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof OverthinkingAnswers>(field: Key, value: OverthinkingAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleTrigger(value: string) {
    const typedValue = value as LoopTriggerValue;

    setAnswers((current) => {
      const selected = current.triggerSelections.includes(typedValue);

      if (selected) {
        return {
          ...current,
          triggerSelections: current.triggerSelections.filter((item) => item !== typedValue),
        };
      }

      if (current.triggerSelections.length >= 3) {
        return current;
      }

      return {
        ...current,
        triggerSelections: [...current.triggerSelections, typedValue],
      };
    });
  }

  function updateRankingOrder(nextOrder: RankItemKey[]) {
    setAnswers((current) => ({
      ...current,
      rankingOrder: nextOrder,
      rankingConfirmed: true,
    }));
  }

  function confirmRankingOrder() {
    setAnswers((current) => ({
      ...current,
      rankingConfirmed: true,
    }));
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentStepIndex === overthinkingSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, overthinkingSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialOverthinkingAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: OverthinkingStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          onChange={(nextValue) => updateAnswer(step.field, nextValue as OverthinkingAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as OverthinkingAnswers[typeof step.field])}
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
          onToggle={toggleTrigger}
          options={step.options}
          values={answers.triggerSelections}
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
              value={typeof answers[field.key] === "number" ? answers[field.key] ?? 40 : 40}
            />
          ))}
        </div>
      );
    }

    return (
      <DragRankList
        confirmed={answers.rankingConfirmed}
        items={step.items}
        onChange={updateRankingOrder}
        onConfirm={confirmRankingOrder}
        value={answers.rankingOrder}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <MiniPatternPreview compact label="Live pattern map" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Decoder status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {overthinkingSteps.length} pattern checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          Each answer shifts the loop map. Triggers, action delay, and spillover all change the zone bias in real time.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Pattern map preview</span>
          <span className={styles.metaChip}>Deterministic scoring</span>
          <span className={styles.metaChip}>Accessible ranking</span>
        </div>
      </div>

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging loop profile</p>
        <h3 className={styles.sideCardTitle}>{result.zone.label}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Top trigger cluster: {result.dominantTriggers[0]?.label ?? "Open uncertainty"}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-tool" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A live pattern-map experience for decoding cognitive loops</h2>
            <p className={styles.sectionDescription}>
              One signal at a time. Scenario cards, sliders, trigger nodes, a ranking step, and a live map that shifts across loop zones as you answer.
            </p>
          </div>

          <ToolShell glow={result.zone.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={overthinkingSteps.length}
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
                      ? "Result unlocked. Adjust any answer to see the map and insights update."
                      : "Your live map updates after every answer, so the pattern becomes visible before the final reveal."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === overthinkingSteps.length - 1 ? "Reveal Pattern" : "Next Signal"}
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

          <section className={`${styles.section} ${styles.sectionAlt}`} id="visual-insights">
            <div className={styles.pageContainer}>
              <div className={styles.sectionHeading}>
                <p className={styles.sectionEyebrow}>Visual insights section</p>
                <h2 className={styles.sectionTitle}>Four ways to read the loop beyond the headline score</h2>
                <p className={styles.sectionDescription}>
                  The emotional payoff of this tool lives in pattern placement: where the loop sits, what fuels it, and how much it is spilling into the rest of your day.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <div className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Pattern map</p>
                    <h3 className={styles.visualTitle}>Your current loop zone</h3>
                    <p className={styles.visualCopy}>
                      This is the signature map for the tool. It places your pattern using loop intensity, uncertainty pull, and decision drag.
                    </p>
                  </div>
                  <PatternMap ariaLabel="Overthinking pattern map" result={result} />
                </div>

                <SignalBars result={result} />
                <TriggerClusterMap result={result} />
                <SpilloverImpactChart result={result} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
