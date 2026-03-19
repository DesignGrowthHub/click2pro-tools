import styles from "./tools-home.module.css";

type MediaFrameProps = {
  src?: string;
  alt: string;
  label: string;
  ratio?: string;
  fit?: "contain" | "cover";
  className?: string;
  innerClassName?: string;
  placeholderClassName?: string;
};

export function MediaFrame({
  src,
  alt,
  label,
  ratio = "16 / 10",
  fit = "contain",
  className,
  innerClassName,
  placeholderClassName,
}: MediaFrameProps) {
  return (
    <div className={`${styles.mediaFrame} ${className ?? ""}`} style={{ aspectRatio: ratio }}>
      <div className={`${styles.mediaFrameInner} ${innerClassName ?? ""}`}>
        {src ? (
          <img
            alt={alt}
            className={`${styles.mediaImage} ${fit === "cover" ? styles.mediaCover : styles.mediaContain}`}
            src={src}
          />
        ) : (
          <div className={`${styles.mediaPlaceholder} ${placeholderClassName ?? ""}`} aria-label={alt} role="img">
            <span className={styles.mediaPlaceholderLabel}>{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
