import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dynamicToolFamilySlugs } from "@/data/tool-family-registry";
import { getToolFamilyRuntime } from "@/data/tool-family-runtime";

type ToolVariantPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function buildPageUrl(slug: string) {
  return `https://click2pro.com/tools/${slug}`;
}

export async function generateMetadata({
  params,
}: ToolVariantPageProps): Promise<Metadata> {
  const { slug } = await params;
  const familyRuntime = getToolFamilyRuntime(slug);

  if (!familyRuntime) {
    return {};
  }

  return familyRuntime.runtime.buildMetadata(
    familyRuntime.tool,
    buildPageUrl(slug),
  );
}

export function generateStaticParams() {
  return dynamicToolFamilySlugs.map((slug) => ({ slug }));
}

export default async function ToolVariantPage({
  params,
}: ToolVariantPageProps) {
  const { slug } = await params;
  const familyRuntime = getToolFamilyRuntime(slug);

  if (!familyRuntime) {
    notFound();
  }

  return familyRuntime.runtime.renderPage(
    familyRuntime.tool,
    buildPageUrl(slug),
  );
}
