"use client";

import { useEffect, useRef, useState } from "react";
import {
  burnoutAuditSteps,
  calculateBurnoutAudit,
  getInitialBurnoutAnswers,
  isBurnoutStepComplete,
  type BurnoutAnswers,
  type BurnoutAuditStep,
  type DrainAreaValue,
} from "@/data/burnout-risk-audit";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./burnout-risk-audit.module.css";
import { LiveSignalPreview } from "./live-signal-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { RecoveryGapChart } from "./recovery-gap-chart";
import { ResultReveal } from "./result-reveal";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { SourceSplitChart } from "./source-split-chart";
import { StepCard } from "./step-card";
import { MetricDial } from "./metric-dial";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: BurnoutAnswers) {
  return burnoutAuditSteps.filter((step) => isBurnoutStepComplete(step, answers)).length;
}

export function BurnoutAuditExperience() {
  const [answers, setAnswers] = useState<BurnoutAnswers>(getInitialBurnoutAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = burnoutAuditSteps[currentStepIndex];
  const result = calculateBurnoutAudit(answers);
  const canAdvance = isBurnoutStepComplete(currentStep, answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / burnoutAuditSteps.length) * 100;

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

  function updateAnswer<Key extends keyof BurnoutAnswers>(field: Key, value: BurnoutAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleDrainSource(value: string) {
    const typedValue = value as DrainAreaValue;

    setAnswers((current) => {
      const selected = current.drainSources.includes(typedValue);

      if (selected) {
        return {
          ...current,
          drainSources: current.drainSources.filter((item) => item !== typedValue),
        };
      }

      if (current.drainSources.length >= 3) {
        return current;
      }

      return {
        ...current,
        drainSources: [...current.drainSources, typedValue],
      };
    });
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentStepIndex === burnoutAuditSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, burnoutAuditSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialBurnoutAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: BurnoutAuditStep) {
    if (step.kind === "single-choice") {
      const value = answers[step.field];

      return (
        <SegmentedChoice
          name={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as BurnoutAnswers[typeof step.field])}
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
          label="Evening energy left"
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
          onToggle={toggleDrainSource}
          options={step.options}
          values={answers.drainSources}
        />
      );
    }

    return (
      <div className={styles.dualSliderGrid}>
        {step.fields.map((field) => (
          <SliderInput
            id={field.key}
            key={field.key}
            label={field.label}
            maxLabel={field.maxLabel}
            minLabel={field.minLabel}
            onChange={(value) => updateAnswer(field.key, value)}
            value={typeof answers[field.key] === "number" ? answers[field.key] ?? 45 : 45}
          />
        ))}
      </div>
    );
  }

  const sidebar = (
    <div className={styles.toolSidebarStack}>
      <LiveSignalPreview compact label="Live burnout load" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Scanner status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {burnoutAuditSteps.length} audit checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview sharpens as more answers arrive. Final results unlock after the last self-read step.
        </p>
        <div className={styles.sideCardMeta}>
          <span className={styles.metaChip}>Deterministic scoring</span>
          <span className={styles.metaChip}>Private by design</span>
          <span className={styles.metaChip}>No sign-in required</span>
        </div>
      </div>

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging pattern</p>
        <h3 className={styles.sideCardTitle}>{result.dominantDimensions[0]?.label ?? "Load preview"}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Primary source: {result.dominantSources[0]?.label ?? "Balanced load"}.
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
            <h2 className={styles.sectionTitle}>A premium burnout scanner built to feel like a guided signal audit</h2>
            <p className={styles.sectionDescription}>
              One signal at a time. Large controls, smooth transitions, a live burnout-load preview, and a deterministic scoring model underneath the glass.
            </p>
          </div>

          <ToolShell accentGlow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={burnoutAuditSteps.length}
            />

            <div className={styles.toolContentArea}>
              <div className={styles.toolStepTransition} key={currentStep.id} ref={activeStepRef}>
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
                      ? "Result unlocked. You can still adjust any answer and the visuals will update."
                      : "Select an answer to continue. Your live preview updates after each step."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === burnoutAuditSteps.length - 1 ? "Reveal Result" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four ways to read the pattern behind your score</h2>
                <p className={styles.sectionDescription}>
                  The score is useful, but the deeper signal lives in where recovery is lagging and what source clusters are feeding the load.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <div className={`${styles.visualCard} ${styles.visualCardDial}`}>
                  <div className={styles.visualCardHeader}>
                    <p className={styles.visualEyebrow}>Burnout load dial</p>
                    <h3 className={styles.visualTitle}>Overall load signal</h3>
                    <p className={styles.visualCopy}>
                      A quick read of how intense the current load pattern looks once all weighted signals are combined.
                    </p>
                  </div>
                  <MetricDial band={result.band} caption={result.band.title} label="Burnout load" value={result.score} />
                </div>

                <SignalBars result={result} />
                <RecoveryGapChart result={result} />
                <SourceSplitChart result={result} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
