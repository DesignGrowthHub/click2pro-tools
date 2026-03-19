import Link from "next/link";
import { MediaFrame } from "./media-frame";
import styles from "./tools-home.module.css";

type BrandLockupProps = {
  href?: string;
  variant?: "header" | "footer";
  logoSrc?: string;
};

function BrandLockupInner({ variant = "header", logoSrc }: Omit<BrandLockupProps, "href">) {
  const isFooter = variant === "footer";
  const resolvedLogoSrc = logoSrc ?? "/click2pro-logo.png";

  return (
    <>
      <div className={`${styles.brandMark} ${isFooter ? styles.brandMarkFooter : styles.brandMarkHeader}`}>
        <MediaFrame
          alt="Click2Pro Tools logo"
          className={styles.brandMediaFrame}
          fit="contain"
          innerClassName={styles.brandMediaFrameInner}
          label="C2"
          placeholderClassName={styles.brandMediaPlaceholder}
          ratio="1 / 1"
          src={resolvedLogoSrc}
        />
      </div>

      <span className={`${styles.brandText} ${isFooter ? styles.brandTextFooter : ""}`}>
        <span className={styles.brandKicker}>Click2Pro</span>
        <span className={styles.brandName}>Tools</span>
        {isFooter ? <span className={styles.brandSubline}>Psychology tool library</span> : null}
      </span>
    </>
  );
}

export function BrandLockup({ href, variant = "header", logoSrc }: BrandLockupProps) {
  const className = `${styles.brand} ${variant === "footer" ? styles.brandFooter : styles.brandHeader}`;

  if (href) {
    return (
      <Link className={className} href={href}>
        <BrandLockupInner logoSrc={logoSrc} variant={variant} />
      </Link>
    );
  }

  return (
    <div className={className}>
      <BrandLockupInner logoSrc={logoSrc} variant={variant} />
    </div>
  );
}
