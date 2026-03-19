"use client";

import { useEffect, useRef, useState } from "react";
import type {
  FocusAnswers,
  FocusAuditStep,
  FrictionSourceValue,
  RankBlockerKey,
} from "@/data/procrastination-friction-audit";
import {
  calculateFocusFrictionAudit,
  focusAuditSteps,
  getInitialFocusAnswers,
  isFocusStepComplete,
} from "@/data/procrastination-friction-audit";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./focus-friction-audit.module.css";
import { DragRankList } from "./drag-rank-list";
import { FrictionProfilePreview } from "./friction-profile-preview";
import { FrictionStackChart } from "./friction-stack-chart";
import { InterruptionHeatmap } from "./interruption-heatmap";
import { MultiSelectChips } from "./multi-select-chips";
import { OutputImpactChart } from "./output-impact-chart";
import { ProgressHeader } from "./progress-header";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: FocusAnswers) {
  return focusAuditSteps.filter((step) => isFocusStepComplete(step, answers)).length;
}

export function FocusFrictionExperience() {
  const [answers, setAnswers] = useState<FocusAnswers>(getInitialFocusAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = focusAuditSteps[currentStepIndex];
  const result = calculateFocusFrictionAudit(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / focusAuditSteps.length) * 100;
  const canAdvance = isFocusStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof FocusAnswers>(field: Key, value: FocusAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSource(value: string) {
    const typedValue = value as FrictionSourceValue;

    setAnswers((current) => {
      const selected = current.frictionSources.includes(typedValue);

      if (selected) {
        return {
          ...current,
          frictionSources: current.frictionSources.filter((item) => item !== typedValue),
        };
      }

      if (current.frictionSources.length >= 4) {
        return current;
      }

      return {
        ...current,
        frictionSources: [...current.frictionSources, typedValue],
      };
    });
  }

  function updateRanking(nextOrder: RankBlockerKey[]) {
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

    if (currentStepIndex === focusAuditSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, focusAuditSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialFocusAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: FocusAuditStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          onChange={(nextValue) => updateAnswer(step.field, nextValue as FocusAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as FocusAnswers[typeof step.field])}
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
          onToggle={toggleSource}
          options={step.options}
          values={answers.frictionSources}
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
        onChange={updateRanking}
        onConfirm={confirmRanking}
        value={answers.rankingOrder}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <FrictionProfilePreview compact label="Live friction profile" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Audit status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {focusAuditSteps.length} friction checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview gets sharper as the system fills in. Resistance, interruption load, and clarity gaps update immediately after each answer.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Operational focus model</span>
          <span className={styles.metaChip}>Ranked blockers</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging audit signal</p>
        <h3 className={styles.sideCardTitle}>{result.primaryDriver.label}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Secondary drag factor: {result.secondaryDriver.label.toLowerCase()}.
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
            <h2 className={styles.sectionTitle}>A live friction diagnosis for the work system behind your attention</h2>
            <p className={styles.sectionDescription}>
              One friction signal at a time. Ranked blockers, interruption load, task clarity, and output drag all update into a live audit profile as you answer.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={focusAuditSteps.length}
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
                      ? "Result unlocked. Change any answer and the audit profile will update."
                      : "Each answer updates the live friction profile, so the audit gets more concrete before the final reveal."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === focusAuditSteps.length - 1 ? "Reveal Audit" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four views into where focus is paying the most friction tax</h2>
                <p className={styles.sectionDescription}>
                  The score is only the entry point. The real value is seeing the ranked blockers, the structural attention fractures, and the output cost behind them.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <div className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Friction stack ranking</p>
                    <h3 className={styles.visualTitle}>Your top four focus blockers</h3>
                    <p className={styles.visualCopy}>
                      This is the signature audit view: a ranked operational panel showing what is slowing attention down most right now.
                    </p>
                  </div>
                  <FrictionStackChart result={result} />
                </div>

                <SignalBars result={result} />
                <InterruptionHeatmap result={result} />
                <OutputImpactChart result={result} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
