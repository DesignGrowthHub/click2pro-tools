type ScrollMode = "section" | "step";

function getHeaderOffset() {
  if (typeof window === "undefined") {
    return 0;
  }

  const header = document.querySelector("header");
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
  return headerHeight > 0 ? headerHeight : window.innerWidth < 720 ? 76 : 88;
}

export function scrollToolViewportNodeIntoView(node: HTMLElement | null, mode: ScrollMode = "section") {
  if (!node || typeof window === "undefined") {
    return;
  }

  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const baseOffset = getHeaderOffset() + 14;
  const stepOffset = window.innerWidth < 720 ? 74 : 88;
  const targetTop =
    node.getBoundingClientRect().top + window.scrollY - baseOffset - (mode === "step" ? stepOffset : 0);

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: shouldReduceMotion ? "auto" : "smooth",
  });
}
