import Link from "next/link";
import { ToolAssessmentLinks } from "@/components/tools/tool-assessment-links";
import { ToolSupportLinks } from "@/components/tools/tool-support-links";
import type { RelatedToolCard } from "@/data/burnout-risk-audit";
import { ArrowUpRightIcon, renderIcon } from "@/components/tools/icons";
import styles from "./burnout-risk-audit.module.css";

type RelatedToolsPanelProps = {
  tools: RelatedToolCard[];
};

export function RelatedToolsPanel({ tools }: RelatedToolsPanelProps) {
  return (
    <>
      <ToolAssessmentLinks />
      <ToolSupportLinks />

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
