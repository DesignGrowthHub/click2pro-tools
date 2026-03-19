"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/tools/icons";
import { getToolSupportSection } from "@/data/tool-support-links";
import styles from "./tool-support-links.module.css";

function getSlugFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? "";
}

export function ToolSupportLinks() {
  const pathname = usePathname();
  const section = getToolSupportSection(getSlugFromPathname(pathname));

  if (!section) {
    return null;
  }

  return (
    <aside className={styles.supportCard} aria-label="Helpful related support">
      <h3 className={styles.supportHeading}>{section.heading}</h3>
      <p className={styles.supportCopy}>{section.description}</p>

      <div className={styles.supportLinks}>
        <a className={styles.supportLink} href={section.primary.href}>
          {section.primary.label}
          <ArrowUpRightIcon className={styles.linkIcon} />
        </a>

        {section.secondary ? (
          <a
            className={`${styles.supportLink} ${styles.supportLinkSecondary}`}
            href={section.secondary.href}
          >
            {section.secondary.label}
            <ArrowUpRightIcon className={styles.linkIcon} />
          </a>
        ) : null}
      </div>
    </aside>
  );
}
