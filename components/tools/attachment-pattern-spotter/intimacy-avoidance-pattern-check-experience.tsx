"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  attachmentSteps,
  calculateAttachmentProfile,
  getInitialAttachmentAnswers,
  isAttachmentStepComplete,
  rankItems,
  type AttachmentAnswers,
  type AttachmentStep,
  type RankItemKey,
} from "@/data/intimacy-avoidance-pattern-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./attachment-pattern-spotter.module.css";
import { ClosenessWithdrawalMap } from "./closeness-withdrawal-map";
import { DragRankList } from "./drag-rank-list";
import { EmotionalAvailabilityRadar } from "./emotional-availability-radar";
import { LiveProfilePreview } from "./live-profile-preview";
import { PatternTriggerPanel } from "./pattern-trigger-panel";
import { ProgressHeader } from "./progress-header";
import { RelatedToolsPanel } from "./related-tools-panel";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SignalBars } from "./signal-bars";
import { SliderInput } from "./slider-input";
import { StepCard } from "./step-card";
import { ToolShell } from "./tool-shell";

function getAnsweredStepCount(answers: AttachmentAnswers) {
  return attachmentSteps.filter((step) => isAttachmentStepComplete(step, answers)).length;
}

export function AttachmentPatternExperience() {
  const [answers, setAnswers] = useState<AttachmentAnswers>(getInitialAttachmentAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = attachmentSteps[currentStepIndex];
  const result = calculateAttachmentProfile(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / attachmentSteps.length) * 100;
  const canAdvance = isAttachmentStepComplete(currentStep, answers);

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

  function updateAnswer<Key extends keyof AttachmentAnswers>(field: Key, value: AttachmentAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
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

    if (currentStepIndex === attachmentSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, attachmentSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialAttachmentAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: AttachmentStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as AttachmentAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as AttachmentAnswers[typeof step.field])}
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
      <LiveProfilePreview compact label="Live attachment preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Profiler status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {attachmentSteps.length} relational checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch the profile shift across closeness comfort, reassurance pull, withdrawal, and steadiness in real time.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Relational profile engine</span>
          <span className={styles.metaChip}>Calm pattern language</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging relational signal</p>
        <h3 className={styles.sideCardTitle}>{result.profile.title}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Main trigger: {result.relationalPressureTrigger.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-profiler" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive profiler section</p>
            <h2 className={styles.sectionTitle}>A premium relational profile built to feel explanatory, not judgmental</h2>
            <p className={styles.sectionDescription}>
              One relational signal at a time. Large touch targets, smoother transitions, a live profile preview, and deterministic logic underneath the interface so the result feels thoughtful rather than generic.
            </p>
          </div>

          <ToolShell glow={result.profile.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={attachmentSteps.length}
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
                      ? "Profile unlocked. You can still adjust any answer and the relational map will update."
                      : "Choose the answer that feels most familiar rather than most ideal. The profile is designed to map your pattern, not evaluate you."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentStepIndex === attachmentSteps.length - 1 ? "Reveal Profile" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual views into how the relational pattern appears to organize itself</h2>
                <p className={styles.sectionDescription}>
                  The profile label is only the entrance point. The visuals below show where closeness sits relative to protection, how the dimensions distribute, and what relational triggers appear to matter most.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <article className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Closeness vs withdrawal map</p>
                    <h3 className={styles.visualTitle}>Signature placement of your pattern across relational openness and protection</h3>
                    <p className={styles.visualCopy}>
                      This is the core profile visual: a map of how comfortable closeness feels relative to how quickly the system moves toward protection or distance.
                    </p>
                  </div>
                  <ClosenessWithdrawalMap result={result} />
                </article>

                <SignalBars result={result} />
                <EmotionalAvailabilityRadar result={result} />
                <PatternTriggerPanel result={result} />
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
