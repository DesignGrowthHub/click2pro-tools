"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLockup } from "./brand-lockup";
import styles from "./tools-home.module.css";

const navigation = [
  { label: "Tools", href: "#browse-all-tools" },
  { label: "Categories", href: "#topic-clusters" },
  { label: "Popular", href: "#popular-tools" },
  { label: "How It Works", href: "#how-it-works" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeDrawer() {
    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <div className={styles.headerDesktopRow}>
          <BrandLockup href="#top" variant="header" />

          <nav aria-label="Primary" className={styles.nav}>
            {navigation.map((item) => (
              <Link key={item.label} className={styles.navLink} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className={styles.headerCta} href="#browse-all-tools">
            Explore Tools
          </Link>
        </div>

        <div className={styles.headerMobileRow}>
          <BrandLockup href="#top" variant="header" />
          <button
            aria-controls="tools-mobile-drawer"
            aria-expanded={open}
            aria-label={open ? "Close tools menu" : "Open tools menu"}
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

      <div className={`${styles.container} ${styles.headerDrawerWrap}`}>
        <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} id="tools-mobile-drawer">
          <p className={styles.drawerLabel}>Library menu</p>
          <nav aria-label="Primary mobile" className={styles.drawerNav}>
            {navigation.map((item) => (
              <Link className={styles.drawerLink} href={item.href} key={item.label} onClick={closeDrawer}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.drawerActions}>
            <Link className={styles.drawerCta} href="#browse-all-tools" onClick={closeDrawer}>
              Explore Tools
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
