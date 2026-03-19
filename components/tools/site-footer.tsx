import Link from "next/link";
import { securityCards } from "@/data/tools-home";
import { buildToolsHref } from "@/data/tools-home";
import { ArrowUpRightIcon, PrivacyIcon } from "./icons";
import { BrandLockup } from "./brand-lockup";
import { FooterRouteEnhancements } from "./footer-route-enhancements";
import { SecurityStrip } from "./security-strip";
import styles from "./tools-home.module.css";

const platformLinks = [
  { label: "All Tools", href: "/tools#browse-all-tools" },
  { label: "Categories", href: "/tools#topic-clusters" },
  { label: "Popular", href: "/tools#popular-tools" },
  { label: "How It Works", href: "/tools#how-it-works" },
];

const exploreLinks = [
  {
    label: "Burnout & Mental Fatigue",
    href: buildToolsHref({ cluster: "burnout-mental-fatigue", hash: "browse-all-tools" }),
  },
  {
    label: "Relationships & Attachment",
    href: buildToolsHref({ cluster: "relationships-attachment", hash: "browse-all-tools" }),
  },
  {
    label: "Focus & Productivity",
    href: buildToolsHref({ cluster: "focus-productivity", hash: "browse-all-tools" }),
  },
  {
    label: "Daily Functioning & Stability",
    href: buildToolsHref({ cluster: "daily-functioning-stability", hash: "browse-all-tools" }),
  },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function SiteFooter() {
  return (
    <>
      <FooterRouteEnhancements />
      <SecurityStrip cards={securityCards} />

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerPanel}>
            <div className={styles.footerTop}>
              <div className={styles.footerBrand}>
                <BrandLockup variant="footer" />
                <p className={styles.footerEyebrow}>Premium psychology tools library</p>
                <h2 className={styles.footerTitle}>A calmer library for burnout, confidence, relationships, recovery, and work stress.</h2>
                <p className={styles.footerDescription}>
                  Structured tools for the patterns people actually search for, inside one quieter premium system.
                </p>
                <Link className={styles.footerContactPill} href="mailto:help@click2pro.com">
                  <PrivacyIcon className={styles.footerContactIcon} />
                  help@click2pro.com
                  <ArrowUpRightIcon className={styles.footerContactArrow} />
                </Link>
              </div>

              <div className={styles.footerGrid}>
                <div className={styles.footerColumn}>
                  <p className={styles.footerColumnTitle}>Platform</p>
                  {platformLinks.map((link) => (
                    <Link className={styles.footerLink} href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className={styles.footerColumn}>
                  <p className={styles.footerColumnTitle}>Topics</p>
                  {exploreLinks.map((link) => (
                    <Link className={styles.footerLink} href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className={styles.footerColumn}>
                  <p className={styles.footerColumnTitle}>Legal</p>
                  {legalLinks.map((link) => (
                    <Link className={styles.footerLink} href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.footerDivider} />

            <div className={styles.footerBottom}>
              <p className={styles.footerNote}>
                These tools support reflection and psychoeducation. They do not replace therapy, diagnosis, crisis care, or emergency services.
              </p>
              <p className={styles.footerClosing}>© 2026 Click2Pro Tools. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
