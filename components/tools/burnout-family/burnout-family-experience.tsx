"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import { MetricDial } from "@/components/tools/burnout-risk-audit/metric-dial";
import { MultiSelectChips } from "@/components/tools/burnout-risk-audit/multi-select-chips";
import { SegmentedChoice } from "@/components/tools/burnout-risk-audit/segmented-choice";
import { SliderInput } from "@/components/tools/burnout-risk-audit/slider-input";
import { StepCard } from "@/components/tools/burnout-risk-audit/step-card";
import { ToolShell } from "@/components/tools/burnout-risk-audit/tool-shell";
import type {
  BurnoutFamilyAnswers,
  BurnoutFamilyStep,
  BurnoutFamilyTool,
} from "@/data/burnout-family";
import {
  calculateBurnoutFamilyResult,
  getInitialBurnoutFamilyAnswers,
  isBurnoutFamilyStepComplete,
} from "@/data/burnout-family";
import {
  burnoutFamilyToolRegistry,
  type BurnoutFamilyToolSlug,
} from "@/data/burnout-family-registry";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";
import { BurnoutFamilyLivePreview } from "./burnout-family-live-preview";
import { BurnoutFamilyProgressHeader } from "./burnout-family-progress-header";
import { BurnoutFamilyRecoveryChart } from "./burnout-family-recovery-chart";
import { BurnoutFamilyResultReveal } from "./burnout-family-result-reveal";
import { BurnoutFamilySignalBars } from "./burnout-family-signal-bars";
import { BurnoutFamilySourceSplitChart } from "./burnout-family-source-split-chart";

type BurnoutFamilyExperienceProps = {
  toolSlug: BurnoutFamilyToolSlug;
};

function getAnsweredStepCount(tool: BurnoutFamilyTool, answers: BurnoutFamilyAnswers) {
  return tool.steps.filter((step) => isBurnoutFamilyStepComplete(step, answers)).length;
}

export function BurnoutFamilyExperience({ toolSlug }: BurnoutFamilyExperienceProps) {
  const tool = burnoutFamilyToolRegistry[toolSlug];
  const [answers, setAnswers] = useState<BurnoutFamilyAnswers>(getInitialBurnoutFamilyAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentStep = tool.steps[currentStepIndex];
  const result = calculateBurnoutFamilyResult(tool, answers);
  const canAdvance = isBurnoutFamilyStepComplete(currentStep, answers);
  const answeredSteps = getAnsweredStepCount(tool, answers);
  const progress = ((currentStepIndex + 1) / tool.steps.length) * 100;

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

  function updateAnswer<Key extends keyof BurnoutFamilyAnswers>(
    field: Key,
    value: BurnoutFamilyAnswers[Key],
  ) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSource(value: string, limit: number) {
    setAnswers((current) => {
      const selected = current.sources.includes(value);

      if (selected) {
        return {
          ...current,
          sources: current.sources.filter((item) => item !== value),
        };
      }

      if (current.sources.length >= limit) {
        return current;
      }

      return {
        ...current,
        sources: [...current.sources, value],
      };
    });
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
    setAnswers(getInitialBurnoutFamilyAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: BurnoutFamilyStep) {
    if (step.kind === "single-choice") {
      return (
        <SegmentedChoice
          name={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue)}
          options={step.options}
          value={answers[step.field]}
          variant={step.variant}
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
      <MultiSelectChips
        limit={step.limit}
        onToggle={(value) => toggleSource(value, step.limit)}
        options={step.options}
        values={answers.sources}
      />
    );
  }

  const sidebar = (
    <div className={styles.toolSidebarStack}>
      <BurnoutFamilyLivePreview compact label="Live signal preview" result={result} tool={tool} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>{tool.experienceCopy.sidebarStatusEyebrow}</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {tool.steps.length} {tool.experienceCopy.sidebarStatusTitle}
        </h3>
        <p className={styles.sideCardCopy}>{tool.experienceCopy.sidebarStatusDescription}</p>
        <div className={styles.sideCardMeta}>
          {tool.experienceCopy.metaChips.map((item) => (
            <span className={styles.metaChip} key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>{tool.experienceCopy.sidebarEmergingEyebrow}</p>
        <h3 className={styles.sideCardTitle}>{result.dominantDimensions[0]?.label ?? result.band.title}</h3>
        <p className={styles.sideCardCopy}>{tool.experienceCopy.sidebarEmergingDescription}</p>
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
            <h2 className={styles.sectionTitle}>{tool.experienceCopy.sectionTitle}</h2>
            <p className={styles.sectionDescription}>{tool.experienceCopy.sectionDescription}</p>
          </div>

          <ToolShell accentGlow={result.band.glow} sidebar={sidebar}>
            <BurnoutFamilyProgressHeader
              currentStep={currentStepIndex + 1}
              eyebrow={tool.experienceCopy.progressEyebrow}
              progress={progress}
              totalSteps={tool.steps.length}
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
                    {showResult ? tool.experienceCopy.footerComplete : tool.experienceCopy.footerPending}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === tool.steps.length - 1
                    ? tool.experienceCopy.revealLabel
                    : "Next Signal"}
                  <ChevronRightIcon className={styles.inlineIcon} />
                </button>
              </div>
            </div>
          </ToolShell>
        </div>
      </section>

      {showResult ? (
        <div ref={resultSectionRef}>
          <BurnoutFamilyResultReveal onRetake={handleRetake} result={result} tool={tool} />

          <section className={`${styles.section} ${styles.sectionAlt}`} id="visual-insights">
            <div className={styles.pageContainer}>
              <div className={styles.sectionHeading}>
                <p className={styles.sectionEyebrow}>Visual insights section</p>
                <h2 className={styles.sectionTitle}>{tool.visualCopy.sectionTitle}</h2>
                <p className={styles.sectionDescription}>{tool.visualCopy.sectionDescription}</p>
              </div>

              <div className={styles.insightsGrid}>
                <div className={`${styles.visualCard} ${styles.visualCardDial}`}>
                  <div className={styles.visualCardHeader}>
                    <p className={styles.visualEyebrow}>{tool.visualCopy.dial.eyebrow}</p>
                    <h3 className={styles.visualTitle}>{tool.visualCopy.dial.title}</h3>
                    <p className={styles.visualCopy}>{tool.visualCopy.dial.copy}</p>
                  </div>
                  <MetricDial
                    band={result.band}
                    caption={tool.visualCopy.dial.caption}
                    label={tool.visualCopy.dial.label}
                    value={result.score}
                  />
                </div>

                <BurnoutFamilySignalBars result={result} tool={tool} />
                <BurnoutFamilyRecoveryChart result={result} tool={tool} />
                <BurnoutFamilySourceSplitChart result={result} tool={tool} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
