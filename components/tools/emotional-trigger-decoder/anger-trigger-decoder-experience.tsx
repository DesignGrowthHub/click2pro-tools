"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  calculateEmotionalTriggerResult,
  getInitialTriggerAnswers,
  isTriggerStepComplete,
  triggerSteps,
  type FirstReactionValue,
  type ThemeValue,
  type TriggerAnswers,
  type TriggerStep,
  type RankItemKey,
} from "@/data/anger-trigger-decoder";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./emotional-trigger-decoder.module.css";
import { DragRankList } from "./drag-rank-list";
import { LiveDecoderPreview } from "./live-decoder-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { ReactionSequenceDiagram } from "./reaction-sequence-diagram";
import { RecoveryLoadPanel } from "./recovery-load-panel";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";
import { TriggerClusterMap } from "./trigger-cluster-map";

function getAnsweredStepCount(answers: TriggerAnswers) {
  return triggerSteps.filter((step) => isTriggerStepComplete(step, answers)).length;
}

export function EmotionalTriggerExperience() {
  const [answers, setAnswers] = useState<TriggerAnswers>(getInitialTriggerAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = triggerSteps[currentStepIndex];
  const result = calculateEmotionalTriggerResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / triggerSteps.length) * 100;
  const canAdvance = isTriggerStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof TriggerAnswers>(field: Key, value: TriggerAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSelection(field: "firstReactions" | "themes", value: string) {
    const typedValue = value as FirstReactionValue & ThemeValue;
    const limit = field === "firstReactions" ? 3 : 3;

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

  function updateRanking(nextOrder: RankItemKey[]) {
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

    if (currentStepIndex === triggerSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, triggerSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialTriggerAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: TriggerStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as TriggerAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as TriggerAnswers[typeof step.field])}
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
          onToggle={(value) => toggleSelection(step.field, value)}
          options={step.options}
          values={answers[step.field]}
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
      <LiveDecoderPreview compact label="Live trigger preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Decoder status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {triggerSteps.length} trigger checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch the dominant cluster, reaction sequence, spillover load, and recovery drag shift in real time.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Trigger cluster mapping</span>
          <span className={styles.metaChip}>Reaction sequence logic</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging emotional signal</p>
        <h3 className={styles.sideCardTitle}>{result.dominantCluster.label}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Recovery tendency: {result.recoveryLoadEstimate.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-decoder" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive decoder section</p>
            <h2 className={styles.sectionTitle}>A premium emotional sequence decoder built around activation, spillover, and recovery</h2>
            <p className={styles.sectionDescription}>
              One high-signal step at a time. Large controls, a live decoder preview, and deterministic logic underneath the experience so the result feels revealing instead of generic.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={triggerSteps.length}
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
                      ? "Result unlocked. You can still adjust any answer and the decoder visuals will redraw."
                      : "Choose the response that feels most familiar, not most flattering. The decoder is built to explain the sequence, not judge it."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === triggerSteps.length - 1 ? "Reveal Decoder" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual views into what activates you, how the sequence unfolds, and where recovery slows down</h2>
                <p className={styles.sectionDescription}>
                  The decoder is more than a score. These views show the emotional cluster, the sequence pathway, the dimension breakdown, and the specific places where spillover keeps the pattern alive.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <article className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Trigger cluster map</p>
                    <h3 className={styles.visualTitle}>The signature visual for what kinds of moments appear to activate your system most strongly</h3>
                    <p className={styles.visualCopy}>
                      This high-signal map makes the emotional cluster structure visible, so the result reads like a pattern instead of a vague feeling.
                    </p>
                  </div>
                  <TriggerClusterMap result={result} />
                </article>

                <SignalBars result={result} />
                <ReactionSequenceDiagram result={result} />
                <RecoveryLoadPanel result={result} />
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
