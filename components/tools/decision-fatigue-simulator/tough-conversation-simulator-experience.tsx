"use client";

import { useEffect, useRef, useState } from "react";
import {
  calculateDecisionFatigueSimulation,
  getInitialDecisionAnswers,
  isDecisionScenarioComplete,
  simulatorScenarios,
  type SimulatorAnswers,
  type SimulatorScenario,
} from "@/data/tough-conversation-simulator";
import { ChevronRightIcon } from "@/components/tools/icons";
import { scrollToolViewportNodeIntoView } from "@/components/tools/experience-scroll";
import styles from "./decision-fatigue-simulator.module.css";
import { ChoiceGrid } from "./choice-grid";
import { ClarityCurveChart } from "./clarity-curve-chart";
import { DecisionPathSummary } from "./decision-path-summary";
import { FatigueDriverPanel } from "./fatigue-driver-panel";
import { LiveSimulatorPreview } from "./live-simulator-preview";
import { ProgressHeader } from "./progress-header";
import { ResultReveal } from "./result-reveal";
import { ScenarioCard } from "./scenario-card";
import { SignalBars } from "./signal-bars";
import { ToolShell } from "./tool-shell";

function getAnsweredScenarioCount(answers: SimulatorAnswers) {
  return simulatorScenarios.filter((scenario) => isDecisionScenarioComplete(scenario, answers)).length;
}

export function DecisionFatigueExperience() {
  const [answers, setAnswers] = useState<SimulatorAnswers>(getInitialDecisionAnswers);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef<HTMLDivElement | null>(null);
  const previousStepIndexRef = useRef(0);

  const currentScenario = simulatorScenarios[currentScenarioIndex];
  const result = calculateDecisionFatigueSimulation(answers);
  const answeredScenarios = getAnsweredScenarioCount(answers);
  const progress = ((currentScenarioIndex + 1) / simulatorScenarios.length) * 100;
  const canAdvance = isDecisionScenarioComplete(currentScenario, answers);

  useEffect(() => {
    if (showResult) {
      scrollToolViewportNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  useEffect(() => {
    if (showResult) {
      return;
    }

    if (previousStepIndexRef.current !== currentScenarioIndex) {
      scrollToolViewportNodeIntoView(activeStepRef.current, "step");
    }

    previousStepIndexRef.current = currentScenarioIndex;
  }, [currentScenarioIndex, showResult]);

  function updateAnswer(scenario: SimulatorScenario, choiceId: string) {
    setAnswers((current) => ({
      ...current,
      [scenario.id]: choiceId,
    }));
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentScenarioIndex === simulatorScenarios.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentScenarioIndex((index) => Math.min(index + 1, simulatorScenarios.length - 1));
  }

  function handleBack() {
    setCurrentScenarioIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialDecisionAnswers());
    setCurrentScenarioIndex(0);
    setShowResult(false);
    previousStepIndexRef.current = 0;
    scrollToolViewportNodeIntoView(toolSectionRef.current);
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <LiveSimulatorPreview
        compact
        label="Live decision state"
        result={result}
        totalScenarios={simulatorScenarios.length}
      />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Simulator status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredScenarios} of {simulatorScenarios.length} decision scenarios simulated
        </h3>
        <p className={styles.sideCardCopy}>
          The preview updates after every choice so you can see clarity, load, and confidence changing while the day unfolds.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Branching scenario engine</span>
          <span className={styles.metaChip}>Live clarity state</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging decision pattern</p>
        <h3 className={styles.sideCardTitle}>{result.patternLabel.title}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Primary fatigue driver: {result.primaryDriver.label.toLowerCase()}.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-simulator" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive simulator section</p>
            <h2 className={styles.sectionTitle}>A decision lab that simulates how clarity changes across one day</h2>
            <p className={styles.sectionDescription}>
              Each scenario adds realistic choice pressure. As you respond, the simulator updates clarity, cognitive load,
              confidence, and decision friction in real time.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentStep={currentScenarioIndex + 1}
              progress={progress}
              totalSteps={simulatorScenarios.length}
            />

            <div className={styles.toolContentArea}>
              <div className={styles.stepTransition} key={currentScenario.id} ref={activeStepRef}>
                <ScenarioCard
                  eyebrow={`Scenario ${currentScenario.step.toString().padStart(2, "0")} · ${currentScenario.label}`}
                  hint={currentScenario.hint}
                  prompt={currentScenario.prompt}
                  title={currentScenario.title}
                >
                  <ChoiceGrid
                    ariaLabel={currentScenario.prompt}
                    onChange={(choiceId) => updateAnswer(currentScenario, choiceId)}
                    options={currentScenario.choices}
                    value={answers[currentScenario.id]}
                  />
                </ScenarioCard>
              </div>

              <div className={styles.toolFooterRow}>
                <button
                  className={styles.backButton}
                  disabled={currentScenarioIndex === 0}
                  onClick={handleBack}
                  type="button"
                >
                  Back
                </button>

                <div className={styles.toolFooterMeta}>
                  <span className={styles.toolFooterHint}>
                    {showResult
                      ? "Result unlocked. Change any scenario choice and the decision state will update."
                      : "Each scenario changes the live state panel, so you can feel the cumulative cost of repeated choices before the final reveal."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentScenarioIndex === simulatorScenarios.length - 1 ? "Reveal Simulation" : "Next Scenario"}
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
                <h2 className={styles.sectionTitle}>Four views into how clarity was spent across the simulation</h2>
                <p className={styles.sectionDescription}>
                  The score is only the entry point. The real value is seeing where clarity dropped, which branch pattern emerged,
                  and what conditions created the most strain.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <div className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Clarity depletion curve</p>
                    <h3 className={styles.visualTitle}>
                      How clarity changed across the {simulatorScenarios.length} decision scenarios
                    </h3>
                    <p className={styles.visualCopy}>
                      This is the signature simulator view: a line of usable clarity across the day as repeated decisions add load.
                    </p>
                  </div>

                  <ClarityCurveChart result={result} />
                </div>

                <SignalBars result={result} />
                <DecisionPathSummary result={result} />
                <FatigueDriverPanel result={result} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
