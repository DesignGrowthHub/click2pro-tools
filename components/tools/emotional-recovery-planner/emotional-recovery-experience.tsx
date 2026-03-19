"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  calculateEmotionalRecoveryResult,
  getInitialRecoveryAnswers,
  isRecoveryStepComplete,
  recoveryPlannerSteps,
  type RecoveryAnswers,
  type RecoveryPlannerStep,
  type RecoveryPreferenceValue,
  type StrainAreaValue,
} from "@/data/emotional-recovery-planner";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./emotional-recovery-planner.module.css";
import { CapacityLoadPanel } from "./capacity-load-panel";
import { LivePlannerPreview } from "./live-planner-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { RecoveryPriorityLadder } from "./recovery-priority-ladder";
import { ResetPathPreview } from "./reset-path-preview";
import { ResultReveal } from "./result-reveal";
import { SegmentedChoice } from "./segmented-choice";
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

function getAnsweredStepCount(answers: RecoveryAnswers) {
  return recoveryPlannerSteps.filter((step) => isRecoveryStepComplete(step, answers)).length;
}

export function EmotionalRecoveryExperience() {
  const [answers, setAnswers] = useState<RecoveryAnswers>(getInitialRecoveryAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = recoveryPlannerSteps[currentStepIndex];
  const result = calculateEmotionalRecoveryResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / recoveryPlannerSteps.length) * 100;
  const canAdvance = isRecoveryStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof RecoveryAnswers>(field: Key, value: RecoveryAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSelection(field: "strainAreas" | "recoveryPreferences", value: string) {
    const typedValue = value as StrainAreaValue & RecoveryPreferenceValue;
    const limit = field === "strainAreas" ? 4 : 3;

    setAnswers((current) => {
      const selected = current[field].includes(typedValue);

      if (selected) {
        return {
          ...current,
          [field]: current[field].filter((item) => item !== typedValue),
        };
      }

      if (current[field].length >= limit) {
        return current;
      }

      return {
        ...current,
        [field]: [...current[field], typedValue],
      };
    });
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentStepIndex === recoveryPlannerSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, recoveryPlannerSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialRecoveryAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: RecoveryPlannerStep) {
    if (step.kind === "segmented") {
      const value = answers[step.field];

      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as RecoveryAnswers[typeof step.field])}
          options={step.options}
          value={typeof value === "string" ? value : undefined}
          variant={step.variant}
        />
      );
    }

    if (step.kind === "slider") {
      return (
        <SliderInput
          id={step.field}
          label={step.label}
          markers={step.markers}
          maxLabel={step.maxLabel}
          minLabel={step.minLabel}
          onChange={(value) => updateAnswer(step.field, value)}
          value={typeof answers[step.field] === "number" ? answers[step.field] ?? 50 : 50}
        />
      );
    }

    return (
      <MultiSelectChips
        limit={step.limit}
        onToggle={(value) => toggleSelection(step.field, value)}
        options={step.options}
        values={answers[step.field]}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LivePlannerPreview compact label="Live recovery planner" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Planner status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {recoveryPlannerSteps.length} planning checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The planner updates after every answer so you can watch the stage, urgency, top priorities, and 7-day reset shape change before the final reveal.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Capacity vs load</span>
          <span className={styles.metaChip}>Priority ladder</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging recovery stage</p>
        <h3 className={styles.sideCardTitle}>{result.primaryStage.label}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Best support lever right now: {result.mostUsefulSupportType.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-planner" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive planner section</p>
            <h2 className={styles.sectionTitle}>A premium recovery planning system built to create a believable next step, not just describe the strain</h2>
            <p className={styles.sectionDescription}>
              One step at a time. Large controls, a live planner preview, and deterministic logic underneath the interface so the output becomes a usable recovery direction instead of another overwhelming readout.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={recoveryPlannerSteps.length}
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
                      ? "Path unlocked. You can still adjust any answer and the stage, priorities, and 7-day plan will redraw."
                      : "Choose the answer that reflects what is realistically true right now. The best plan is the one your current state can actually follow."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === recoveryPlannerSteps.length - 1 ? "Build Recovery Path" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual views into where recovery is getting squeezed and what would create the most immediate relief</h2>
                <p className={styles.sectionDescription}>
                  The planner is designed to turn overwhelm into readable structure. These views show the gap itself, the supporting dimensions, the ordered priorities, and the short path the system is most likely to follow.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <article className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Capacity vs load panel</p>
                    <h3 className={styles.visualTitle}>The signature visual for how much the system is carrying compared with what it currently has room to restore</h3>
                    <p className={styles.visualCopy}>
                      This view is the fastest way to understand why recovery may feel easy, mixed, or structurally difficult right now.
                    </p>
                  </div>
                  <CapacityLoadPanel result={result} />
                </article>

                <SignalBars result={result} />
                <RecoveryPriorityLadder result={result} />
                <ResetPathPreview result={result} />
              </div>

              <div className={styles.returnLibraryRow}>
                <Link className={styles.secondaryButton} href="/tools">
                  Browse the full tool library
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
