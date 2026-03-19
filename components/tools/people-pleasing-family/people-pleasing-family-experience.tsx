"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { renderIcon, ChevronRightIcon } from "@/components/tools/icons";
import styles from "@/components/tools/people-pleasing-signal-check/people-pleasing-signal-check.module.css";
import {
  calculatePeoplePleasingFamilyResult,
  getInitialPeoplePleasingFamilyAnswers,
  isPeoplePleasingStepComplete,
  peoplePleasingFamilyToolRegistry,
  type PeoplePleasingFamilyTool,
  type PeoplePleasingFamilyToolSlug,
} from "@/data/people-pleasing-family";
import type {
  AccommodationSituationValue,
  PeoplePleasingAnswers,
  PeoplePleasingResult,
  PeoplePleasingStep,
  PleasingDriverKey,
} from "@/data/people-pleasing-signal-check";
import { DragRankList } from "@/components/tools/people-pleasing-signal-check/drag-rank-list";
import { HiddenCostPanel } from "@/components/tools/people-pleasing-signal-check/hidden-cost-panel";
import { LiveSignalPreview } from "@/components/tools/people-pleasing-signal-check/live-signal-preview";
import { MultiSelectChips } from "@/components/tools/people-pleasing-signal-check/multi-select-chips";
import { ScenarioChoiceGrid } from "@/components/tools/people-pleasing-signal-check/scenario-choice-grid";
import { SegmentedChoice } from "@/components/tools/people-pleasing-signal-check/segmented-choice";
import { SelfSignalDriftLine } from "@/components/tools/people-pleasing-signal-check/self-signal-drift-line";
import { SliderInput } from "@/components/tools/people-pleasing-signal-check/slider-input";
import { StepCard } from "@/components/tools/people-pleasing-signal-check/step-card";
import { ToolShell } from "@/components/tools/people-pleasing-signal-check/tool-shell";
import { WeakZoneMap } from "@/components/tools/people-pleasing-signal-check/weak-zone-map";
import { ProgressHeader } from "@/components/tools/people-pleasing-signal-check/progress-header";

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

function getAnsweredStepCount(tool: PeoplePleasingFamilyTool, answers: PeoplePleasingAnswers) {
  return tool.steps.filter((step) => isPeoplePleasingStepComplete(step, answers)).length;
}

function FamilySignalBars({
  result,
  tool,
}: {
  result: PeoplePleasingResult;
  tool: PeoplePleasingFamilyTool;
}) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where the pattern is strongest right now</h3>
        <p className={styles.visualCopy}>
          These four dimensions separate the external pull itself from your internal signal, the override sequence, and the later cost that tends to stay private.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {tool.dimensions.map((dimension) => {
          const value = result.dimensions[dimension.key];

          return (
            <div className={styles.signalBarCard} key={dimension.key}>
              <div className={styles.signalBarMeta}>
                <div className={styles.signalBarTitleWrap}>
                  <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                    <p className={styles.signalBarDescription}>{dimension.description}</p>
                  </div>
                </div>
                <span className={styles.signalBarValue}>{value}</span>
              </div>

              <div className={styles.signalBarTrack}>
                <span className={styles.signalBarFill} style={{ width: `${value}%`, background: dimension.accent }} />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function FamilyResultReveal({
  onRetake,
  result,
  tool,
}: {
  onRetake: () => void;
  result: PeoplePleasingResult;
  tool: PeoplePleasingFamilyTool;
}) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>{tool.resultCopy.sectionEyebrow}</p>
          <h2 className={styles.sectionTitle}>{tool.resultCopy.sectionTitle}</h2>
          <p className={styles.sectionDescription}>{tool.resultCopy.sectionDescription}</p>
        </div>

        <div className={styles.resultCard}>
          <div className={styles.resultGrid}>
            <div className={styles.resultVisual}>
              <div className={styles.resultVisualStack}>
                <div className={styles.resultScoreOrb}>
                  <span className={styles.resultScoreValue}>{result.score}</span>
                  <span className={styles.resultScoreLabel}>{tool.resultCopy.scoreLabel}</span>
                </div>

                <div className={styles.previewBalanceRow}>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Self priority</span>
                    <span className={styles.previewBalanceValue}>{result.selfPriority}</span>
                  </div>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Other priority</span>
                    <span className={styles.previewBalanceValue}>{result.otherPriority}</span>
                  </div>
                </div>

                <div className={styles.resultStageStack}>
                  {result.driftStages.map((stage) => (
                    <div className={styles.resultStageRow} key={stage.key}>
                      <div className={styles.previewMetricMeta}>
                        <span>{stage.label}</span>
                        <span>{stage.value}</span>
                      </div>
                      <div className={styles.triggerTrack}>
                        <span className={styles.triggerFill} style={{ width: `${stage.value}%`, background: stage.accent }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Signal reading</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>{tool.resultCopy.scoreLabel}</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryDriver.label}</span>
                  <span className={styles.scoreLabel}>{tool.resultCopy.primaryLabel}</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.mainWeakZone.label}</span>
                  <span className={styles.scoreLabel}>{tool.resultCopy.weakZoneLabel}</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.hiddenCost.label}</span>
                  <span className={styles.scoreLabel}>{tool.resultCopy.hiddenCostLabel}</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>{tool.resultCopy.standoutLabel}</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>{tool.resultCopy.costLabel}</p>
                  <p className={styles.insightCopy}>{result.hiddenCostInsight}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  {tool.resultCopy.retakeLabel}
                </button>
                <Link className={styles.secondaryButton} href="#related-tools">
                  Explore Related Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PeoplePleasingFamilyExperience({ toolSlug }: { toolSlug: PeoplePleasingFamilyToolSlug }) {
  const tool = peoplePleasingFamilyToolRegistry[toolSlug];
  const [answers, setAnswers] = useState<PeoplePleasingAnswers>(getInitialPeoplePleasingFamilyAnswers);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = tool.steps[currentStepIndex];
  const result = calculatePeoplePleasingFamilyResult(toolSlug, answers);
  const answeredSteps = getAnsweredStepCount(tool, answers);
  const progress = ((currentStepIndex + 1) / tool.steps.length) * 100;
  const canAdvance = isPeoplePleasingStepComplete(currentStep, answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateAnswer<Key extends keyof PeoplePleasingAnswers>(field: Key, value: PeoplePleasingAnswers[Key]) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSituation(value: string) {
    const typedValue = value as AccommodationSituationValue;

    setAnswers((current) => {
      const selected = current.accommodationSituations.includes(typedValue);

      if (selected) {
        return {
          ...current,
          accommodationSituations: current.accommodationSituations.filter((item) => item !== typedValue),
        };
      }

      if (current.accommodationSituations.length >= 4) {
        return current;
      }

      return {
        ...current,
        accommodationSituations: [...current.accommodationSituations, typedValue],
      };
    });
  }

  function updateRanking(nextOrder: PleasingDriverKey[]) {
    setAnswers((current) => ({
      ...current,
      driverRanking: nextOrder,
      driverRankingConfirmed: true,
    }));
  }

  function confirmRanking() {
    setAnswers((current) => ({
      ...current,
      driverRankingConfirmed: true,
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
    setAnswers(getInitialPeoplePleasingFamilyAnswers());
    setCurrentStepIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  function renderCurrentStep(step: PeoplePleasingStep) {
    if (step.kind === "scenario-choice") {
      return (
        <ScenarioChoiceGrid
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as PeoplePleasingAnswers[typeof step.field])}
          options={step.options}
          value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
        />
      );
    }

    if (step.kind === "segmented") {
      return (
        <SegmentedChoice
          ariaLabel={step.question}
          onChange={(nextValue) => updateAnswer(step.field, nextValue as PeoplePleasingAnswers[typeof step.field])}
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
          onToggle={toggleSituation}
          options={step.options}
          values={answers.accommodationSituations}
        />
      );
    }

    if (step.kind === "drag-rank") {
      return (
        <DragRankList
          confirmed={answers.driverRankingConfirmed}
          items={step.items}
          onChange={updateRanking}
          onConfirm={confirmRanking}
          value={answers.driverRanking}
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
              value={typeof answers[field.key] === "number" ? answers[field.key] ?? 45 : 45}
            />
          ))}
        </div>
      );
    }

    return (
      <ScenarioChoiceGrid
        ariaLabel={step.question}
        columns={step.columns}
        onChange={(nextValue) => updateAnswer(step.field, nextValue as PeoplePleasingAnswers[typeof step.field])}
        options={step.options}
        value={typeof answers[step.field] === "string" ? answers[step.field] : undefined}
      />
    );
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveSignalPreview compact label="Live signal preview" result={result} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>{tool.experienceCopy.sidebarStatusEyebrow}</p>
        <h3 className={styles.sideCardTitle}>
          {answeredSteps} of {tool.steps.length} social checkpoints mapped
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

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>{tool.experienceCopy.sidebarEmergingEyebrow}</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          {tool.experienceCopy.sidebarEmergingFootnote}: {result.primaryDriver.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-signal-check" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>{tool.experienceCopy.interactiveEyebrow}</p>
            <h2 className={styles.sectionTitle}>{tool.experienceCopy.interactiveTitle}</h2>
            <p className={styles.sectionDescription}>{tool.experienceCopy.interactiveDescription}</p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader currentStep={currentStepIndex + 1} progress={progress} totalSteps={tool.steps.length} />

            <div className={styles.toolContentArea}>
              <div className={styles.stepTransition} key={currentStep.id}>
                <StepCard eyebrow={currentStep.eyebrow} hint={currentStep.hint} question={currentStep.question}>
                  {renderCurrentStep(currentStep)}
                </StepCard>
              </div>

              <div className={styles.toolFooterRow}>
                <button className={styles.backButton} disabled={currentStepIndex === 0} onClick={handleBack} type="button">
                  Back
                </button>

                <div className={styles.toolFooterMeta}>
                  <span className={styles.toolFooterHint}>
                    {showResult ? tool.experienceCopy.footerComplete : tool.experienceCopy.footerPending}
                  </span>
                </div>

                <button className={styles.nextButton} disabled={!canAdvance} onClick={handleNext} type="button">
                  {currentStepIndex === tool.steps.length - 1 ? tool.experienceCopy.revealLabel : tool.experienceCopy.nextLabel}
                  <ChevronRightIcon className={styles.inlineIcon} />
                </button>
              </div>
            </div>
          </ToolShell>
        </div>
      </section>

      {showResult ? (
        <div ref={resultSectionRef}>
          <FamilyResultReveal onRetake={handleRetake} result={result} tool={tool} />

          <section className={styles.section} id="visual-insights">
            <div className={styles.pageContainer}>
              <div className={styles.sectionHeading}>
                <p className={styles.sectionEyebrow}>{tool.experienceCopy.visualEyebrow}</p>
                <h2 className={styles.sectionTitle}>{tool.experienceCopy.visualTitle}</h2>
                <p className={styles.sectionDescription}>{tool.experienceCopy.visualDescription}</p>
              </div>

              <div className={styles.insightsGrid}>
                <SelfSignalDriftLine result={result} />
                <FamilySignalBars result={result} tool={tool} />
                <WeakZoneMap result={result} />
                <HiddenCostPanel result={result} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
