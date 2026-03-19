import type { Metadata } from "next";
import { LegalTemplate } from "@/components/tools/legal-template";

export const metadata: Metadata = {
  title: "Terms of Use | Click2Pro Tools",
  description: "Read the terms for using Click2Pro Tools, including acceptable use, content limits, report interpretation, and platform responsibilities.",
};

export default function TermsPage() {
  return (
    <LegalTemplate
      eyebrow="Terms"
      intro="These terms explain how the public Click2Pro Tools website and its self-guided tools are meant to be used. They are written in plain English so the rules are clear before the platform grows further."
      sections={[
        {
          title: "Using the site",
          body: [
            "By using Click2Pro Tools, you agree to use the site lawfully, respectfully, and only for personal reflection, learning, or other reasonable platform use.",
            "You should stop using the site if you do not agree with these terms or if the tools are not suitable for your situation.",
          ],
        },
        {
          title: "What the tools are for",
          body: [
            "Click2Pro Tools offers self-guided reflection tools, psychoeducational content, and structured report-style outputs for patterns people commonly search for.",
            "The tools are designed to support understanding, not to replace professional judgment, diagnosis, psychotherapy, or emergency care.",
          ],
        },
        {
          title: "No diagnosis or treatment promise",
          body: [
            "Nothing on this site should be treated as a medical diagnosis, a clinical opinion, or a guarantee of improvement.",
            "Tool scores, labels, and guidance are meant to be interpreted as directional reflection support, not as final answers about your mental health.",
          ],
        },
        {
          title: "Acceptable use",
          body: [
            "You may not use the platform to break the law, interfere with the service, scrape the site in a harmful way, abuse the public experience, or misrepresent Click2Pro content as your own.",
            "Reasonable browsing, sharing, and personal use are allowed. Automated or commercial misuse is not.",
          ],
          bullets: [
            "Do not attempt to bypass site protections or report gating",
            "Do not misuse the tools to harass, exploit, or mislead other people",
            "Do not copy large portions of the platform and republish them as your own product",
          ],
        },
        {
          title: "Accounts, payments, and future paid reports",
          body: [
            "If account, checkout, or paid-report features are added later, those flows will be governed by the live product behavior and any additional terms shown during purchase or registration.",
            "Until those features are actively in use, this page mainly governs the public tools library and its educational content.",
          ],
        },
        {
          title: "Intellectual property",
          body: [
            "Unless stated otherwise, the site design, tool copy, report presentation, graphics, and product structure belong to Click2Pro Tools.",
            "You may not copy, sell, or republish substantial parts of the content without permission.",
          ],
        },
        {
          title: "Availability and updates",
          body: [
            "Click2Pro Tools may update, remove, improve, or reorganize features at any time as the platform evolves.",
            "The team does not promise uninterrupted availability or that every tool will remain unchanged forever.",
          ],
        },
        {
          title: "Limitation of responsibility",
          body: [
            "Click2Pro Tools provides the site on an 'as available' basis. The team does not accept responsibility for losses caused by relying on the tools as a substitute for professional, legal, financial, or emergency support.",
            "You remain responsible for how you use the information on the site and for deciding when outside support is needed.",
          ],
        },
        {
          title: "Contact",
          body: [
            "If you have a question about these terms, the public tools experience, or a platform issue, contact help@click2pro.com.",
          ],
        },
      ]}
      title="Terms for Click2Pro Tools"
    />
  );
}
