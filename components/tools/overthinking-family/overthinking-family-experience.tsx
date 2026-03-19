"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateOverthinkingFamilyResult,
  getInitialOverthinkingFamilyAnswers,
  isOverthinkingStepComplete,
  overthinkingFamilyToolRegistry,
  type OverthinkingAnswers,
  type OverthinkingFamilyToolSlug,
  type OverthinkingStep,
  type RankItemKey,
  type LoopTriggerValue,
} from "@/data/overthinking-family";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "@/components/tools/overthinking-loop-check/overthinking-loop-check.module.css";
import { DragRankList } from "@/components/tools/overthinking-loop-check/drag-rank-list";
import { MiniPatternPreview } from "@/components/tools/overthinking-loop-check/mini-pattern-preview";
import { MultiSelectChips } from "@/components/tools/overthinking-loop-check/multi-select-chips";
import { PatternMap } from "@/components/tools/overthinking-loop-check/pattern-map";
import { ProgressHeader } from "@/components/tools/overthinking-loop-check/progress-header";
import { ResultReveal } from "@/components/tools/overthinking-loop-check/result-reveal";
import { ScenarioChoiceGrid } from "@/components/tools/overthinking-loop-check/scenario-choice-grid";
import { SegmentedChoice } from "@/components/tools/overthinking-loop-check/segmented-choice";
import { SpilloverImpactChart } from "@/components/tools/overthinking-loop-check/spillover-impact-chart";
import { StepCard } from "@/components/tools/overthinking-loop-check/step-card";
import { ToolShell } from "@/components/tools/overthinking-loop-check/tool-shell";
import { TriggerClusterMap } from "@/components/tools/overthinking-loop-check/trigger-cluster-map";
import { SliderInput } from "@/components/tools/overthinking-loop-check/slider-input";
import { OverthinkingFamilySignalBars } from "./overthinking-family-signal-bars";

type OverthinkingFamilyExperienceProps = {
  toolSlug: OverthinkingFamilyToolSlug;
};

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

function getAnsweredStepCount(steps: OverthinkingStep[], answers: OverthinkingAnswers) {
  return steps.filter((step) => isOverthinkingStepComplete(step, answers)).length;
}

export function OverthinkingFamilyExperience({
  toolSlug,
}: OverthinkingFamilyExperienceProps) {
  const tool = overthinkingFamilyToolRegistry[toolSlug];
  const [answers, setAnswers] = useState<OverthinkingAnswers>(getInitialOverthinkingFamilyAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = tool.steps[currentStepIndex];
  const result = calculateOverthinkingFamilyResult(toolSlug, answers);
  const answeredSteps = getAnsweredStepCount(tool.steps, answers);
  const progress = ((currentStepIndex + 1) / tool.steps.length) * 100;
  const canAdvance = isOverthinkingStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof OverthinkingAnswers>(
    field: Key,
    value: OverthinkingAnswers[Key],
  ) {
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

    if (currentStepIndex === tool.steps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, tool.steps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialOverthinkingFamilyAnswers());
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
        <p className={styles.sideCardEyebrow}>{tool.experienceCopy.sidebarStatusEyebrow}</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {tool.steps.length} pattern checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>{tool.experienceCopy.sidebarStatusDescription}</p>
        <div className={styles.sideChipRow}>
          {tool.experienceCopy.metaChips.map((chip) => (
            <span className={styles.metaChip} key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>{tool.experienceCopy.sidebarEmergingEyebrow}</p>
        <h3 className={styles.sideCardTitle}>{result.zone.label}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          {tool.experienceCopy.sidebarEmergingFootnoteLabel}: {result.dominantTriggers[0]?.label ?? "Open uncertainty"}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-tool" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>{tool.experienceCopy.interactiveEyebrow}</p>
            <h2 className={styles.sectionTitle}>{tool.experienceCopy.interactiveTitle}</h2>
            <p className={styles.sectionDescription}>{tool.experienceCopy.interactiveDescription}</p>
          </div>

          <ToolShell glow={result.zone.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={tool.steps.length}
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
                    {showResult ? tool.experienceCopy.footerComplete : tool.experienceCopy.footerPending}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === tool.steps.length - 1
                    ? tool.experienceCopy.revealLabel
                    : tool.experienceCopy.nextLabel}
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
                <p className={styles.sectionEyebrow}>{tool.experienceCopy.visualEyebrow}</p>
                <h2 className={styles.sectionTitle}>{tool.experienceCopy.visualTitle}</h2>
                <p className={styles.sectionDescription}>{tool.experienceCopy.visualDescription}</p>
              </div>

              <div className={styles.insightsGrid}>
                <div className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Pattern map</p>
                    <h3 className={styles.visualTitle}>Your current pattern zone</h3>
                    <p className={styles.visualCopy}>
                      This is the signature map for the tool. It places your pattern using thought intensity, uncertainty pull, and action drag.
                    </p>
                  </div>
                  <PatternMap ariaLabel={`${tool.toolMetadata.title} pattern map`} result={result} />
                </div>

                <OverthinkingFamilySignalBars result={result} tool={tool} />
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
