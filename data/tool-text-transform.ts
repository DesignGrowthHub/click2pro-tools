type Primitive = string | number | boolean | null | undefined;

export type TextReplacementRule =
  | [string | RegExp, string]
  | {
      pattern: string | RegExp;
      replacement: string;
    };

function applyReplacement(input: string, rule: TextReplacementRule) {
  if (Array.isArray(rule)) {
    const [pattern, replacement] = rule;
    return input.replace(pattern, replacement);
  }

  return input.replace(rule.pattern, rule.replacement);
}

export function replaceText(input: string, rules: TextReplacementRule[]) {
  return rules.reduce((current, rule) => applyReplacement(current, rule), input);
}

type DeepStringTransformOptions = {
  skipKeys?: string[];
};

export function mapDeepStrings<T>(
  value: T,
  rules: TextReplacementRule[],
  options: DeepStringTransformOptions = {},
): T {
  const skipKeySet = new Set(options.skipKeys ?? []);

  if (typeof value === "string") {
    return replaceText(value, rules) as T;
  }

  if (
    value === null ||
    value === undefined ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => mapDeepStrings(item, rules, options)) as T;
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, Primitive | object>);

    return Object.fromEntries(
      entries.map(([key, entryValue]) => [
        key,
        skipKeySet.has(key) ? entryValue : mapDeepStrings(entryValue, rules, options),
      ]),
    ) as T;
  }

  return value;
}
