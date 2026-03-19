"use client";

import { useState } from "react";
import type { RankedTruthKey } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type DragRankListProps = {
  confirmed: boolean;
  items: Array<{
    key: RankedTruthKey;
    label: string;
  }>;
  onChange: (next: RankedTruthKey[]) => void;
  onConfirm: () => void;
  value: RankedTruthKey[];
};

function reorderList(list: RankedTruthKey[], fromIndex: number, toIndex: number) {
  const next = [...list];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

export function DragRankList({ confirmed, items, onChange, onConfirm, value }: DragRankListProps) {
  const [draggedKey, setDraggedKey] = useState<RankedTruthKey | null>(null);
  const currentOrder = value.length ? value : items.map((item) => item.key);
  const labelMap = Object.fromEntries(items.map((item) => [item.key, item.label])) as Record<
    RankedTruthKey,
    string
  >;

  function moveItem(index: number, direction: -1 | 1) {
    const targetIndex = index + direction;

    if (targetIndex < 0 || targetIndex >= currentOrder.length) {
      return;
    }

    onChange(reorderList(currentOrder, index, targetIndex));
    onConfirm();
  }

  function handleDrop(targetKey: RankedTruthKey) {
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
        <span>Most true</span>
        <span>Least true</span>
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
          {confirmed ? "Order saved" : "Use this order"}
        </button>
      </div>
    </div>
  );
}
