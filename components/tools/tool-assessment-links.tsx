"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/tools/icons";
import { getToolAssessmentLinks } from "@/data/tool-assessment-links";
import styles from "./tool-assessment-links.module.css";

function getSlugFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? "";
}

export function ToolAssessmentLinks() {
  const pathname = usePathname();
  const links = getToolAssessmentLinks(getSlugFromPathname(pathname));

  if (!links) {
    return null;
  }

  return (
    <aside className={styles.section} aria-label="Related assessments">
      <h3 className={styles.heading}>Try a deeper assessment</h3>
      <p className={styles.copy}>
        If you want a more detailed read than a quick tool can give, these assessment pages are the
        closest next step.
      </p>

      <div className={styles.grid}>
        {links.map((assessment) => (
          <a className={styles.card} href={assessment.href} key={assessment.slug}>
            <h4 className={styles.title}>{assessment.title}</h4>
            <p className={styles.description}>{assessment.supportingLine}</p>
            <span className={styles.linkRow}>
              Open assessment
              <ArrowUpRightIcon className={styles.icon} />
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
