import type { Metadata } from "next";
import {
  buildLifeBalanceFamilyMetadata,
  LifeBalanceFamilyPage,
} from "@/components/tools/life-balance-family/life-balance-family-page";
import { lifeBalanceFamilyToolRegistry } from "@/data/life-balance-family";

const pageUrl = "https://click2pro.com/tools/life-balance-visualizer";
const tool = lifeBalanceFamilyToolRegistry["life-balance-visualizer"];

export const metadata: Metadata = buildLifeBalanceFamilyMetadata(tool, pageUrl);

export default function LifeBalanceVisualizerPage() {
  return <LifeBalanceFamilyPage pageUrl={pageUrl} tool={tool} />;
}
