"use client";

import { useState } from "react";
import styles from "./work-stress-load-mapper.module.css";

type SequenceOrdererProps = {
  confirmed: boolean;
  items: Array<{
    key: string;
    label: string;
  }>;
  onChange: (next: string[]) => void;
  onConfirm: () => void;
  value: string[];
};

function reorderList(list: string[], fromIndex: number, toIndex: number) {
  const next = [...list];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

export function SequenceOrderer({
  confirmed,
  items,
  onChange,
  onConfirm,
  value,
}: SequenceOrdererProps) {
  const [draggedKey, setDraggedKey] = useState<string | null>(null);
  const currentOrder = value.length ? value : items.map((item) => item.key);
  const labelMap = Object.fromEntries(items.map((item) => [item.key, item.label])) as Record<string, string>;

  function moveItem(index: number, direction: -1 | 1) {
    const targetIndex = index + direction;

    if (targetIndex < 0 || targetIndex >= currentOrder.length) {
      return;
    }

    onChange(reorderList(currentOrder, index, targetIndex));
    onConfirm();
  }

  function handleDrop(targetKey: string) {
    if (!draggedKey || draggedKey === targetKey) {
      setDraggedKey(null);
      return;
    }

    const fromIndex = currentOrder.indexOf(draggedKey);
    const toIndex = currentOrder.indexOf(targetKey);

    if (fromIndex === -1 || toIndex === -1) {
      setDraggedKey(null);
      return;
    }

    onChange(reorderList(currentOrder, fromIndex, toIndex));
    onConfirm();
    setDraggedKey(null);
  }

  return (
    <div className={styles.rankListWrap}>
      <div className={styles.rankListLabels}>
        <span>First in the pattern</span>
        <span>Last in the pattern</span>
      </div>

      <ul className={styles.rankList} role="list">
        {currentOrder.map((key, index) => (
          <li
            className={`${styles.rankItem} ${draggedKey === key ? styles.rankItemDragging : ""}`}
            draggable
            key={key}
            onDragEnd={() => setDraggedKey(null)}
            onDragOver={(event) => event.preventDefault()}
            onDragStart={() => setDraggedKey(key)}
            onDrop={() => handleDrop(key)}
          >
            <div className={styles.rankItemMain}>
              <span className={styles.rankNumber}>{index + 1}</span>
              <span className={styles.rankLabel}>{labelMap[key]}</span>
            </div>

            <div className={styles.rankActions}>
              <button
                aria-label={`Move ${labelMap[key]} up`}
                className={styles.rankActionButton}
                onClick={() => moveItem(index, -1)}
                type="button"
              >
                Up
              </button>
              <button
                aria-label={`Move ${labelMap[key]} down`}
                className={styles.rankActionButton}
                onClick={() => moveItem(index, 1)}
                type="button"
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.rankFooter}>
        <p className={styles.rankHint}>Drag to reorder on desktop, or use the move buttons anywhere.</p>
        <button className={styles.rankConfirmButton} onClick={onConfirm} type="button">
          {confirmed ? "Sequence saved" : "Use this sequence"}
        </button>
      </div>
    </div>
  );
}
