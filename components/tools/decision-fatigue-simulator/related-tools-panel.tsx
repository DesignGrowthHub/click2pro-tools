import Link from "next/link";
import { ToolLowerPageAdditions } from "@/components/tools/tool-lower-page-additions";
import type { RelatedDecisionTool } from "@/data/decision-fatigue-simulator";
import { ArrowUpRightIcon, renderIcon } from "@/components/tools/icons";
import styles from "./decision-fatigue-simulator.module.css";

type RelatedToolsPanelProps = {
  tools: RelatedDecisionTool[];
};

export function RelatedToolsPanel({ tools }: RelatedToolsPanelProps) {
  return (
    <>
      <ToolLowerPageAdditions />

      <div className={styles.relatedGrid}>
        {tools.map((tool) => (
          <Link className={styles.relatedCard} href={tool.href} key={tool.title}>
            <div className={styles.relatedCardTop}>
              <span className={styles.relatedIcon}>{renderIcon(tool.icon, styles.inlineIcon)}</span>
              <span className={styles.relatedTime}>{tool.minutes}</span>
            </div>
            <p className={styles.relatedCategory}>{tool.category}</p>
            <h3 className={styles.relatedTitle}>{tool.title}</h3>
            <p className={styles.relatedDescription}>{tool.description}</p>
            <span className={styles.relatedLink}>
              Try this next
              <ArrowUpRightIcon className={styles.inlineIcon} />
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
