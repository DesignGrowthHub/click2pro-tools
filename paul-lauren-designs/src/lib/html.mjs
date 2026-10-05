export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Tagged template: arrays are joined, null/undefined/false render as "".
export const html = (strings, ...values) =>
  strings.reduce((out, str, i) => {
    if (i >= values.length) return out + str;
    const v = values[i];
    const rendered = Array.isArray(v) ? v.flat(Infinity).filter((x) => x != null && x !== false).join("") : v == null || v === false ? "" : String(v);
    return out + str + rendered;
  }, "");

export const slugify = (s) =>
  String(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const pad2 = (n) => String(n).padStart(2, "0");

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export const wordCount = (text) => String(text).split(/\s+/).filter(Boolean).length;
