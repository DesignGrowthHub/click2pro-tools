"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateCommunicationStyleResult,
  communicationStyleSteps,
  getInitialCommunicationStyleAnswers,
  isCommunicationStyleStepComplete,
  type CommunicationStyleAnswers,
  type CommunicationStyleStep,
  type PressureSituationValue,
  type RankedTruthKey,
  type SequenceKey,
} from "@/data/conflict-style-mirror";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./communication-style-mirror.module.css";
import { CommunicationDistortionMap } from "./communication-distortion-map";
import { DialogueStyleMirror } from "./dialogue-style-mirror";
import { DragRankList } from "./drag-rank-list";
import { LiveCommunicationPreview } from "./live-communication-preview";
import { MultiSelectChips } from "./multi-select-chips";
import { ProgressHeader } from "./progress-header";
import { RepairImpactPanel } from "./repair-impact-panel";
import { ResultReveal } from "./result-reveal";
import { ScenarioChoiceGrid } from "./scenario-choice-grid";
import { SegmentedChoice } from "./segmented-choice";
import { SequenceOrderer } from "./sequence-orderer";
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

function getAnsweredStepCount(answers: CommunicationStyleAnswers) {
  return communicationStyleSteps.filter((step) => isCommunicationStyleStepComplete(step, answers)).length;
}

export function CommunicationStyleExperience() {
  const [answers, setAnswers] = useState<CommunicationStyleAnswers>(getInitialCommunicationStyleAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = communicationStyleSteps[currentStepIndex];
  const result = calculateCommunicationStyleResult(answers);
  const answeredSteps = getAnsweredStepCount(answers);
  const progress = ((currentStepIndex + 1) / communicationStyleSteps.length) * 100;
  const canAdvance = isCommunicationStyleStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof CommunicationStyleAnswers>(
    field: Key,
    value: CommunicationStyleAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function togglePressureSituation(value: string, limit: number) {
    setAnswers((current) => {
      const typedValue = value as PressureSituationValue;
      const selectedValues = current.pressureSituations;
      const selected = selectedValues.includes(typedValue);

      if (selected) {
        return {
          ...current,
          pressureSituations: selectedValues.filter((item) => item !== typedValue),
        };
      }

      if (selectedValues.length >= limit) {
        return current;
      }

      return {
        ...current,
        pressureSituations: [...selectedValues, typedValue],
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

    if (currentStepIndex === communicationStyleSteps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStepIndex((index) => Math.min(index + 1, communicationStyleSteps.length - 1));
  }

  function handleBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialCommunicationStyleAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: CommunicationStyleStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) =>
            updateAnswer(step.field, nextValue as CommunicationStyleAnswers[typeof step.field])
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
            updateAnswer(step.field, nextValue as CommunicationStyleAnswers[typeof step.field])
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
          onToggle={(value) => togglePressureSituation(value, step.limit)}
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
        onChange={(nextValue) =>
          updateAnswer(step.field, nextValue as CommunicationStyleAnswers[typeof step.field])
        }
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveCommunicationPreview compact label="Live communication preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Conversation mirror status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {communicationStyleSteps.length} communication checkpoints mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every answer so you can watch directness, clarity, warmth, defensiveness, and repair redraw before the full mirror appears.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Dialogue flow</span>
          <span className={styles.metaChip}>Pressure shift logic</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging communication read</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.mirrorLabel}</p>
        <p className={styles.sideCardFootnote}>
          Distortion: {result.primaryCommunicationDistortion.label.toLowerCase()} · pressure zone:{" "}
          {result.mainPressureZone.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section
        className={styles.section}
        id="interactive-communication-style-mirror"
        ref={toolSectionRef}
      >
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive tool section</p>
            <h2 className={styles.sectionTitle}>A premium communication mirror built to show how expression changes once pressure enters the conversation</h2>
            <p className={styles.sectionDescription}>
              One conversation checkpoint at a time. Large controls, calm motion, a live communication preview, and deterministic scoring underneath the experience so the result feels readable instead of vague.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentStepIndex + 1}
              progress={progress}
              totalSteps={communicationStyleSteps.length}
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
                      ? "Result unlocked. You can still adjust any answer and the communication mirror will redraw."
                      : "Answer for how your communication actually changes under pressure, not only for the style you prefer when you have plenty of room."}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === communicationStyleSteps.length - 1 ? "Reveal Mirror" : "Next Signal"}
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
                <h2 className={styles.sectionTitle}>Four visual reads of your dialogue pattern, pressure distortion, and repair picture</h2>
                <p className={styles.sectionDescription}>
                  The report is more than a score. These views show the conversation sequence, the four dimensions, the strongest communication distortions, and the impact those shifts leave behind.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <DialogueStyleMirror result={result} />
                <SignalBars result={result} />
                <CommunicationDistortionMap result={result} />
                <RepairImpactPanel result={result} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
