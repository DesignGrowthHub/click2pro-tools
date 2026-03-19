"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateRelationshipClarityResult,
  getInitialRelationshipClarityAnswers,
  isRelationshipClarityStepComplete,
  relationshipClaritySteps,
  type ConfusionPatternValue,
  type RankedTruthKey,
  type RelationshipClarityAnswers,
  type RelationshipClarityStep,
} from "@/data/trust-consistency-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./relationship-clarity-check.module.css";
import { DragRankList } from "./drag-rank-list";
import { LiveRelationshipPreview } from "./live-relationship-preview";
import { MixedSignalSpread } from "./mixed-signal-spread";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { RelationshipClarityMatrix } from "./relationship-clarity-matrix";
import { RelationshipCostPanel } from "./relationship-cost-panel";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: RelationshipClarityAnswers) {
  return relationshipClaritySteps.filter((step) => isRelationshipClarityStepComplete(step, answers)).length;
}

export function RelationshipClarityExperience() {
  const [answers, setAnswers] = useState<RelationshipClarityAnswers>(getInitialRelationshipClarityAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = relationshipClaritySteps[currentStepIndex];
  const result = calculateRelationshipClarityResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / relationshipClaritySteps.length) * 100;
  const canAdvance = isRelationshipClarityStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof RelationshipClarityAnswers>(
    field: Key,
    value: RelationshipClarityAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function togglePattern(value: string) {
    const typedValue = value as ConfusionPatternValue;

    setAnswers((current) => {
      const selected = current.confusionPatterns.includes(typedValue);

      if (selected) {
        return {
          ...current,
          confusionPatterns: current.confusionPatterns.filter((item) => item !== typedValue),
        };
      }

      if (current.confusionPatterns.length >= 4) {
        return current;
      }

      return {
        ...current,
        confusionPatterns: [...current.confusionPatterns, typedValue],
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

    if (currentStepIndex === relationshipClaritySteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, relationshipClaritySteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialRelationshipClarityAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: RelationshipClarityStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) =>
            updateAnswer(step.field, nextValue as RelationshipClarityAnswers[typeof step.field])
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
            updateAnswer(step.field, nextValue as RelationshipClarityAnswers[typeof step.field])
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
          onToggle={togglePattern}
          options={step.options}
          values={answers.confusionPatterns}
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
        onChange={(nextValue) =>
          updateAnswer(step.field, nextValue as RelationshipClarityAnswers[typeof step.field])
        }
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveRelationshipPreview compact label="Live relationship-signal preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Clarity status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {relationshipClaritySteps.length} relational checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch clarity level, consistency, trust, safety, and mixed-signal density redraw before the final report appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Clarity matrix logic</span>
          <span className={styles.metaChip}>Mixed-signal spread</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging relationship signal</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Main driver: {result.primaryConfusionDriver.label.toLowerCase()} · unresolved zone:{" "}
          {result.heaviestUnresolvedZone.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-clarity-check" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium relationship signal evaluator built to separate uncertainty from actual weak signal</h2>
            <p className={styles.sectionDescription}>
              One clarity checkpoint at a time. Large controls, calmer motion, a live relationship preview, and deterministic logic underneath the experience so the result feels observant rather than dramatic.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={relationshipClaritySteps.length}
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
                      ? "Result unlocked. You can still adjust any answer and the signal report will redraw."
                      : "Choose the answer that best matches the relationship as it is behaving, not only how you hope it will stabilize."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === relationshipClaritySteps.length - 1 ? "Reveal Report" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual views into what is stable, what is mixed, and where the relationship signal is thinning out</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show the signal matrix, the clarity dimensions, the specific mixed-signal spread, and the real-life cost of staying in unresolved ambiguity.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <RelationshipClarityMatrix result={result} />
                <SignalBars result={result} />
                <MixedSignalSpread result={result} />
                <RelationshipCostPanel result={result} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
