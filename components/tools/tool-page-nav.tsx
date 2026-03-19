"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLockup } from "@/components/tools/brand-lockup";
import styles from "./tool-page-nav.module.css";

type NavItem = {
  label: string;
  href: string;
};

type ToolPageNavProps = {
  ariaLabel: string;
  ctaHref: string;
  ctaLabel: string;
  items: NavItem[];
};

export function ToolPageNav({ ariaLabel, ctaHref, ctaLabel, items }: ToolPageNavProps) {
  const [open, setOpen] = useState(false);

  function closeDrawer() {
    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.brandWrap}>
            <BrandLockup href="/tools" variant="header" />
            <Link className={styles.libraryPill} href="/tools">
              All tools
            </Link>
          </div>

          <nav aria-label={ariaLabel} className={styles.desktopNav}>
            {items.map((item) => (
              <Link className={styles.headerLink} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.desktopActions}>
            <Link className={styles.headerCta} href={ctaHref}>
              {ctaLabel}
            </Link>
          </div>

          <div className={styles.mobileRow}>
            <BrandLockup href="/tools" variant="header" />
            <button
              aria-controls="tool-mobile-drawer"
              aria-expanded={open}
              aria-label={open ? "Close tool menu" : "Open tool menu"}
              className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
              onClick={() => setOpen((current) => !current)}
              type="button"
            >
              <span className={styles.menuButtonLines}>
                <span />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
          id="tool-mobile-drawer"
        >
          <p className={styles.drawerLabel}>Tool menu</p>
          <nav aria-label={`${ariaLabel} mobile`} className={styles.drawerNav}>
            {items.map((item) => (
              <Link className={styles.drawerLink} href={item.href} key={item.label} onClick={closeDrawer}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.drawerActions}>
            <Link className={styles.libraryPill} href="/tools" onClick={closeDrawer}>
              All tools
            </Link>
            <Link className={styles.drawerCta} href={ctaHref} onClick={closeDrawer}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
