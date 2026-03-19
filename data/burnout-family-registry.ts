import { compassionFatigueCheckTool } from "./compassion-fatigue-check";
import { emotionalExhaustionAuditTool } from "./emotional-exhaustion-audit";
import { mentalFatigueCheckTool } from "./mental-fatigue-check";
import { stressLoadMeterTool } from "./stress-load-meter";

export const burnoutFamilyToolRegistry = {
  "stress-load-meter": stressLoadMeterTool,
  "mental-fatigue-check": mentalFatigueCheckTool,
  "emotional-exhaustion-audit": emotionalExhaustionAuditTool,
  "compassion-fatigue-check": compassionFatigueCheckTool,
};

export type BurnoutFamilyToolSlug = keyof typeof burnoutFamilyToolRegistry;
