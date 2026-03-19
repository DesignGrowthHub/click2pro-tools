import type { CSSProperties, ReactNode } from "react";
import styles from "./work-stress-load-mapper.module.css";

type ToolShellProps = {
  children: ReactNode;
  glow: string;
  sidebar: ReactNode;
};

export function ToolShell({ children, glow, sidebar }: ToolShellProps) {
  return (
    <div className={styles.toolShell} style={{ "--decoder-shell-glow": glow } as CSSProperties}>
      <div className={styles.toolShellGlow} />
      <div className={styles.toolShellInner}>
        <div className={styles.toolMain}>{children}</div>
        <aside className={styles.toolSidebar}>{sidebar}</aside>
      </div>
    </div>
  );
}
