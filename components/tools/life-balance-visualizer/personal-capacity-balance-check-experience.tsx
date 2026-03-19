"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  balanceDomains,
  calculateLifeBalance,
  getInitialBalanceAnswers,
  isBalanceDomainComplete,
  type BalanceAnswers,
  type BalanceDomain,
} from "@/data/personal-capacity-balance-check";
import { ChevronRightIcon } from "@/components/tools/icons";
import styles from "./life-balance-visualizer.module.css";
import { BalanceWheel } from "./balance-wheel";
import { ComparisonBars } from "./comparison-bars";
import { DomainSliderCard } from "./domain-slider-card";
import { PriorityLadder } from "./priority-ladder";
import { ProgressHeader } from "./progress-header";
import { RecoveryCapacityPanel } from "./recovery-capacity-panel";
import { ResultReveal } from "./result-reveal";
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

function getAnsweredDomainCount(answers: BalanceAnswers) {
  return balanceDomains.filter((domain) => isBalanceDomainComplete(domain, answers)).length;
}

export function LifeBalanceExperience() {
  const [answers, setAnswers] = useState<BalanceAnswers>(getInitialBalanceAnswers);
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const toolSectionRef = useRef<HTMLElement | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const currentDomain = balanceDomains[currentDomainIndex];
  const answeredDomains = getAnsweredDomainCount(answers);
  const progress = ((currentDomainIndex + 1) / balanceDomains.length) * 100;
  const canAdvance = isBalanceDomainComplete(currentDomain, answers);
  const result = calculateLifeBalance(answers);

  useEffect(() => {
    if (showResult) {
      scrollNodeIntoView(resultSectionRef.current);
    }
  }, [showResult]);

  function updateDomain(domain: BalanceDomain, patch: Partial<BalanceAnswers[typeof domain.key]>) {
    setAnswers((current) => ({
      ...current,
      [domain.key]: {
        ...current[domain.key],
        ...patch,
      },
    }));
  }

  function handleNext() {
    if (!canAdvance) {
      return;
    }

    if (currentDomainIndex === balanceDomains.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentDomainIndex((index) => Math.min(index + 1, balanceDomains.length - 1));
  }

  function handleBack() {
    setCurrentDomainIndex((index) => Math.max(index - 1, 0));
  }

  function handleRetake() {
    setAnswers(getInitialBalanceAnswers());
    setCurrentDomainIndex(0);
    setShowResult(false);
    scrollNodeIntoView(toolSectionRef.current);
  }

  const sidebar = (
    <div className={styles.sidebarStack}>
      <BalanceWheel compact highlightKey={currentDomain.key} label="Live balance map" result={result} showLegend={false} />

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Visualizer status</p>
        <h3 className={styles.sideCardTitle}>
          {answeredDomains} of {balanceDomains.length} life domains mapped
        </h3>
        <p className={styles.sideCardCopy}>
          The wheel redraws as you place each domain. Current support, ideal overlay, weakest zones, and balance index all update live.
        </p>
        <div className={styles.sideChipRow}>
          <span className={styles.metaChip}>Current vs ideal overlay</span>
          <span className={styles.metaChip}>Balance index</span>
          <span className={styles.metaChip}>Private by design</span>
        </div>
      </div>

      <div aria-live="polite" className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Emerging support signal</p>
        <h3 className={styles.sideCardTitle}>{result.band.title}</h3>
        <p className={styles.sideCardCopy}>{result.signalLabel}</p>
        <p className={styles.sideCardFootnote}>
          Rebalance priority: {result.recoveryPriorityArea.label.toLowerCase()}.
        </p>
      </div>

      <div className={styles.sideCard}>
        <p className={styles.sideCardEyebrow}>Mapped domains</p>
        <div className={styles.miniDomainList}>
          {balanceDomains.map((domain) => {
            const answer = answers[domain.key];
            const value = typeof answer.current === "number" ? answer.current : undefined;
            const isCurrent = domain.key === currentDomain.key;

            return (
              <div className={`${styles.miniDomainItem} ${isCurrent ? styles.miniDomainItemActive : ""}`} key={domain.key}>
                <div className={styles.miniDomainTop}>
                  <span>{domain.label}</span>
                  <span>{typeof value === "number" ? value : "--"}</span>
                </div>
                <div className={styles.miniDomainTrack}>
                  <span
                    className={styles.miniDomainFill}
                    style={{ width: `${value ?? 0}%`, background: domain.accent }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.section} id="interactive-visualizer" ref={toolSectionRef}>
        <div className={styles.pageContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Interactive visualizer section</p>
            <h2 className={styles.sectionTitle}>Build a live support map of how life currently feels to carry</h2>
            <p className={styles.sectionDescription}>
              One domain at a time. Place the current state, adjust the ideal overlay if you want it, and watch the wheel redraw into a clearer picture of where support is steady, thin, or asking to be rebuilt.
            </p>
          </div>

          <ToolShell glow={result.band.glow} sidebar={sidebar}>
            <ProgressHeader
              currentLabel={currentDomain.label}
              currentStep={currentDomainIndex + 1}
              progress={progress}
              totalSteps={balanceDomains.length}
            />

            <div className={styles.toolContentArea}>
              <div className={styles.stepTransition} key={currentDomain.key}>
                <DomainSliderCard
                  answer={answers[currentDomain.key]}
                  domain={currentDomain}
                  onCurrentChange={(value) => updateDomain(currentDomain, { current: value })}
                  onIdealChange={(value) => updateDomain(currentDomain, { ideal: value })}
                  onUseIdealChange={(checked) => updateDomain(currentDomain, { useIdeal: checked })}
                  stepIndex={currentDomainIndex}
                  totalSteps={balanceDomains.length}
                />
              </div>

              <div className={styles.toolFooterRow}>
                <button
                  className={styles.backButton}
                  disabled={currentDomainIndex === 0}
                  onClick={handleBack}
                  type="button"
                >
                  Back
                </button>

                <div className={styles.toolFooterMeta}>
                  <span className={styles.toolFooterHint}>
                    {showResult
                      ? "Result unlocked. You can still change any domain and redraw the full map."
                      : "The goal is not to rate yourself well. It is to place each domain honestly enough that the life shape becomes useful to read."}
                  </span>
                </div>

                <button
                  className={styles.nextButton}
                  disabled={!canAdvance}
                  onClick={handleNext}
                  type="button"
                >
                  {currentDomainIndex === balanceDomains.length - 1 ? "Reveal Balance Map" : "Next Domain"}
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
                <h2 className={styles.sectionTitle}>Four visual views into the shape of your current balance</h2>
                <p className={styles.sectionDescription}>
                  The wheel is the centerpiece, but the supporting views make the result practical by showing domain priorities, current-vs-ideal gaps, and the support layers underneath the visible shape.
                </p>
              </div>

              <div className={styles.insightsGrid}>
                <article className={styles.visualCard}>
                  <div className={styles.visualHeader}>
                    <p className={styles.visualEyebrow}>Life balance wheel</p>
                    <h3 className={styles.visualTitle}>Current shape, ideal overlay, weakest points, and strongest anchors</h3>
                    <p className={styles.visualCopy}>
                      This is the signature visualizer view: one calm, readable map of how supported the whole system currently feels.
                    </p>
                  </div>
                  <BalanceWheel highlightKey={result.primaryImbalanceDriver.key} result={result} />
                </article>

                <PriorityLadder result={result} />
                <ComparisonBars result={result} />
                <RecoveryCapacityPanel result={result} />
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
