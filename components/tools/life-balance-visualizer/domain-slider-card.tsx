import type { CSSProperties } from "react";
import { renderIcon } from "@/components/tools/icons";
import {
  getBalanceDescriptor,
  type BalanceDomain,
  type DomainAnswer,
} from "@/data/life-balance-visualizer";
import styles from "./life-balance-visualizer.module.css";

type DomainSliderCardProps = {
  answer: DomainAnswer;
  domain: BalanceDomain;
  stepIndex: number;
  totalSteps: number;
  onCurrentChange: (value: number) => void;
  onIdealChange: (value: number) => void;
  onUseIdealChange: (checked: boolean) => void;
};

export function DomainSliderCard({
  answer,
  domain,
  stepIndex,
  totalSteps,
  onCurrentChange,
  onIdealChange,
  onUseIdealChange,
}: DomainSliderCardProps) {
  const currentValue = typeof answer.current === "number" ? answer.current : 50;
  const currentDescriptor =
    typeof answer.current === "number" ? getBalanceDescriptor(answer.current) : "Set your current position";
  const idealDescriptor = getBalanceDescriptor(answer.ideal);

  return (
    <article className={styles.domainCard} style={{ "--domain-accent": domain.accent } as CSSProperties}>
      <div className={styles.domainCardHeader}>
        <p className={styles.domainEyebrow}>
          Domain {stepIndex + 1} of {totalSteps}
        </p>
        <div className={styles.domainTitleRow}>
          <span className={styles.domainIcon}>{renderIcon(domain.icon, styles.inlineIcon)}</span>
          <div>
            <h3 className={styles.domainTitle}>{domain.label}</h3>
            <p className={styles.domainPrompt}>{domain.prompt}</p>
          </div>
        </div>
      </div>

      <div className={styles.sliderBlock}>
        <div className={styles.sliderHeader}>
          <div>
            <p className={styles.sliderLabel}>Current state</p>
            <p className={styles.fieldNote}>Place where this area actually feels today, not where you think it should be.</p>
          </div>
          <div className={styles.sliderValueGroup}>
            <span className={styles.sliderValue}>{typeof answer.current === "number" ? answer.current : "--"}</span>
            <span className={styles.descriptorPill}>{currentDescriptor}</span>
          </div>
        </div>

        <input
          aria-label={`${domain.label} current state`}
          className={styles.rangeInput}
          max={100}
          min={0}
          onChange={(event) => onCurrentChange(Number(event.target.value))}
          style={{ "--range-fill": `${currentValue}%` } as CSSProperties}
          type="range"
          value={currentValue}
        />

        <div className={styles.sliderScale}>
          <span className={styles.sliderScaleLabel}>Stretched / under-supported</span>
          <span className={styles.sliderScaleLabel}>Steady / well supported</span>
        </div>
      </div>

      <div className={styles.toggleRow}>
        <div>
          <p className={styles.sliderLabel}>Ideal overlay</p>
          <p className={styles.fieldNote}>Optional but recommended. This lets the visualizer compare your current shape to the shape you are trying to regain.</p>
        </div>

        <label className={styles.toggleSwitch}>
          <input
            aria-label={`Show ideal overlay for ${domain.label}`}
            checked={answer.useIdeal}
            className={styles.toggleInput}
            onChange={(event) => onUseIdealChange(event.target.checked)}
            type="checkbox"
          />
          <span className={styles.toggleKnob} />
          <span className={styles.toggleText}>{answer.useIdeal ? "On" : "Off"}</span>
        </label>
      </div>

      <div className={`${styles.sliderBlock} ${!answer.useIdeal ? styles.sliderBlockMuted : ""}`}>
        <div className={styles.sliderHeader}>
          <div>
            <p className={styles.sliderLabel}>Desired support level</p>
            <p className={styles.fieldNote}>Set the level where this domain would feel meaningfully more supportive and less effortful.</p>
          </div>
          <div className={styles.sliderValueGroup}>
            <span className={styles.sliderValue}>{answer.ideal}</span>
            <span className={styles.descriptorPill}>{idealDescriptor}</span>
          </div>
        </div>

        <input
          aria-label={`${domain.label} ideal state`}
          className={styles.rangeInput}
          disabled={!answer.useIdeal}
          max={100}
          min={0}
          onChange={(event) => onIdealChange(Number(event.target.value))}
          style={{ "--range-fill": `${answer.ideal}%` } as CSSProperties}
          type="range"
          value={answer.ideal}
        />

        <div className={styles.sliderScale}>
          <span className={styles.sliderScaleLabel}>Smaller change needed</span>
          <span className={styles.sliderScaleLabel}>Much more support desired</span>
        </div>
      </div>
    </article>
  );
}
