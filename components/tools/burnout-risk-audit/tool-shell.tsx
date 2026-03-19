import type { CSSProperties, ReactNode } from "react";
import styles from "./burnout-risk-audit.module.css";

type ToolShellProps = {
  children: ReactNode;
  sidebar: ReactNode;
  accentGlow: string;
};

export function ToolShell({ children, sidebar, accentGlow }: ToolShellProps) {
  return (
    <div
      className={styles.toolShell}
      style={
        {
          "--tool-shell-glow": accentGlow,
        } as CSSProperties
      }
    >
      <div className={styles.toolShellMain}>{children}</div>
      <aside className={styles.toolShellAside}>{sidebar}</aside>
    </div>
  );
}
