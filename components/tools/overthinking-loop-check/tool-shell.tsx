import type { CSSProperties, ReactNode } from "react";
import styles from "./overthinking-loop-check.module.css";

type ToolShellProps = {
  children: ReactNode;
  sidebar: ReactNode;
  glow: string;
};

export function ToolShell({ children, sidebar, glow }: ToolShellProps) {
  return (
    <div
      className={styles.toolShell}
      style={
        {
          "--loop-shell-glow": glow,
        } as CSSProperties
      }
    >
      <div className={styles.toolShellMain}>{children}</div>
      <aside className={styles.toolShellAside}>{sidebar}</aside>
    </div>
  );
}
