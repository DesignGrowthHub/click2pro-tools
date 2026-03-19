"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  calculateSleepPressure,
  getInitialSleepAnswers,
  isSleepStepComplete,
  sleepPressureSteps,
  type DisruptionSourceValue,
  type SleepAnswers,
  type SleepToolStep,
} from "@/data/evening-shutdown-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./sleep-pressure-check.module.css";
import { DisruptionSourcePanel } from "./disruption-source-panel";
import { LiveRecoveryPreview } from "./live-recovery-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { RecoveryTimelineChart } from "./recovery-timeline-chart";
import { ResultReveal } from "./result-reveal";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { SpilloverImpactChart } from "./spillover-impact-chart";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: SleepAnswers) {
  return sleepPressureSteps.filter((step) => isSleepStepComplete(step, answers)).length;
}

export function SleepPressureExperience() {
  const [answers, setAnswers] = useState<SleepAnswers>(getInitialSleepAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = sleepPressureSteps[currentStepIndex];
  const result = calculateSleepPressure(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / sleepPressureSteps.length) * 100;
  const canAdvance = isSleepStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof SleepAnswers>(field: Key, value: SleepAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleDisruption(value: string) {
    const typedValue = value as DisruptionSourceValue;

    setAnswers((current) => {
      const selected = current.disruptions.includes(typedValue);

      if (selected) {
        return {
          ...current,
          disruptions: current.disruptions.filter((item) => item !== typedValue),
        };
      }

      if (current.disruptions.length >= 4) {
        return current;
      }

      return {
        ...current,
        disruptions: [...current.disruptions, typedValue],
      };
    });
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentStepIndex === sleepPressureSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, sleepPressureSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialSleepAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: SleepToolStep) {
    if (step.kind === "segmented") {
      const value = answers[step.field];

      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as SleepAnswers[typeof step.field])}
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

    if (step.kind === "multi-select") {
      return (
        <MultiSelectChips
          limit={step.limit}
          onToggle={toggleDisruption}
          options={step.options}
          values={answers.disruptions}
        />
      );
    }

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

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveRecoveryPreview compact label="Live recovery state" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Monitor status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {sleepPressureSteps.length} recovery checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can see recovery debt, carryover, disruption load, and restoration quality moving in real time.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Timeline-based output</span>
          <span className={styles.metaChip}>Recovery carryover</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging pressure pattern</p>
        <h3 className={styles.sideCardTitle}>{result.primaryDriver.label}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Daytime spillover is currently strongest in {result.spilloverArea.label.toLowerCase()}.
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
            <h2 className={styles.sectionTitle}>A premium recovery-pressure check built around carryover, timing, and real restoration</h2>
            <p className={styles.sectionDescription}>
              One step at a time. Large controls, a live recovery panel, and a deterministic model underneath the interface so the result feels more like a refined system status read than a basic sleep quiz.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={sleepPressureSteps.length}
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
                      ? "Result unlocked. You can still adjust any answer and the recovery timeline will redraw."
                      : "Each answer updates the live recovery preview, so you can watch sleep pressure and carryover shift before the final reveal."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === sleepPressureSteps.length - 1 ? "Reveal Result" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four views into how recovery pressure is building and where it is landing</h2>
                <p className={styles.sectionDescription}>
                  The main score is only the summary. The visuals below show whether debt is stacking, what is driving it, and how visibly the night is still shaping the next day.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <article className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Recovery debt timeline</p>
                    <h3 className={styles.visualTitle}>How recovery debt has likely been building or stabilizing across recent days</h3>
                    <p className={styles.visualCopy}>
                      This is the signature view: a cool-toned timeline showing how debt, restoration, and next-day carryover are interacting over time.
                    </p>
                  </div>

                  <RecoveryTimelineChart result={result} />
                </article>

                <SignalBars result={result} />
                <DisruptionSourcePanel result={result} />
                <SpilloverImpactChart result={result} />
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
