import type { CSSProperties, ReactNode } from "react";
import styles from "./life-balance-visualizer.module.css";

type ToolShellProps = {
  children: ReactNode;
  sidebar: ReactNode;
  glow: string;
};

export function ToolShell({ children, sidebar, glow }: ToolShellProps) {
  return (
    <div className={styles.toolShell} style={{ "--balance-shell-glow": glow } as CSSProperties}>
      <div className={styles.toolShellGlow} />
      <div className={styles.toolShellInner}>
        <div className={styles.toolMain}>{children}</div>
        <aside className={styles.toolSidebar}>{sidebar}</aside>
      </div>
    </div>
  );
}
