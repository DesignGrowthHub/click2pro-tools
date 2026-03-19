import type { Metadata } from "next";
import { LegalTemplate } from "@/components/tools/legal-template";

export const metadata: Metadata = {
  title: "Privacy Policy | Click2Pro Tools",
  description: "Read how Click2Pro Tools handles privacy, tool usage data, contact requests, and the limits of personal information collected on the platform.",
};

export default function PrivacyPage() {
  return (
    <LegalTemplate
      eyebrow="Privacy"
      intro="This page explains what Click2Pro Tools collects, what it does not collect, how tool data is handled, and how to contact the team if you have a privacy concern."
      sections={[
        {
          title: "What Click2Pro Tools does",
          body: [
            "Click2Pro Tools is a self-guided library of reflection tools for patterns like burnout, overthinking, confidence strain, relationship confusion, work stress, recovery pressure, and emotional overload.",
            "The site is designed for psychoeducation and personal reflection. It is not a therapy service, medical platform, emergency support system, or diagnostic product.",
          ],
        },
        {
          title: "Information you may provide directly",
          body: [
            "If you contact Click2Pro Tools by email, the platform may receive your name, email address, and the message you send.",
            "If future account or checkout flows are added, additional information may be collected only to support those features and only as described at that time.",
          ],
          bullets: [
            "Email messages sent to help@click2pro.com",
            "Basic information you choose to include in a support request",
            "Future account or purchase details only if those features are actively in use",
          ],
        },
        {
          title: "Tool answers and reflection data",
          body: [
            "The tools are meant to feel private by design. If a tool simply calculates a result in the browser, your answers may never leave your device.",
            "If a future feature saves tool history, report unlocks, or account-linked progress, this page should be read together with the live product behavior and any in-product notices shown at that time.",
          ],
        },
        {
          title: "Usage data and analytics",
          body: [
            "Like most public websites, Click2Pro Tools may use limited analytics, device information, referral information, or performance logs to understand site usage, reliability, and product improvement.",
            "That kind of information is used to improve the product experience, search relevance, page performance, and issue detection. It is not meant to turn private reflection into a public profile.",
          ],
        },
        {
          title: "How information may be used",
          body: [
            "Information may be used to operate the site, respond to support requests, improve tool quality, understand broken journeys, reduce misuse, and maintain security.",
            "Click2Pro Tools should not sell private personal reflections as advertising data. If future integrations materially change how data is used, this page should be updated before those changes go live.",
          ],
        },
        {
          title: "Cookies and similar technologies",
          body: [
            "The site may use cookies or similar local technologies for basic website function, remembering preferences, and lightweight analytics.",
            "If stronger tracking, advertising tools, or region-specific consent flows are added later, those should be disclosed clearly here and in the product itself.",
          ],
        },
        {
          title: "Sharing and third parties",
          body: [
            "Click2Pro Tools may rely on standard infrastructure providers such as hosting, analytics, email, or payment partners if those services are used to run the product safely.",
            "Information should only be shared with service providers that are necessary to operate the platform, comply with law, prevent abuse, or complete an action you request.",
          ],
        },
        {
          title: "Your choices",
          body: [
            "You can choose not to use the tools, not to send support messages, or to stop using the site at any time.",
            "If you need help with a privacy question, a support request, or a future deletion request tied to a saved account, contact help@click2pro.com.",
          ],
        },
        {
          title: "Children and sensitive situations",
          body: [
            "Click2Pro Tools is not intended for unsupervised use by children and is not designed to manage emergencies, crisis situations, or acute mental health risk.",
            "If you or someone else is in immediate danger or needs urgent support, use local emergency or crisis resources instead of relying on this website.",
          ],
        },
        {
          title: "Updates to this policy",
          body: [
            "As the product grows, this privacy page may be updated to reflect real data flows, saved report features, or payment-related changes.",
            "The latest version on this page should be treated as the current privacy explanation for the public Click2Pro Tools experience.",
          ],
        },
      ]}
      title="Privacy for Click2Pro Tools"
    />
  );
}
