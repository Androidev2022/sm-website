import { createPageMetadata } from "@/lib/page-metadata";
import LegalLayout, { CheckList, P, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "How SM Solutions collects, uses and protects the personal information you share with us."
);

const sections: LegalSection[] = [
  {
    id: "privacy-disclaimer",
    title: "Privacy & Disclaimer",
    content: (
      <P>
        SM Solutions is committed to respecting and protecting your privacy on our website. This privacy policy
        is designed to provide you an outline of, what personal information is collected from you and why.
      </P>
    ),
  },
  {
    id: "information-we-collect",
    title: "What information do we collect?",
    content: (
      <>
        <P>We collect the following information for internal use only:</P>
        <CheckList
          items={[
            "Your name and organization name",
            "Email address",
            "Telephone numbers, mobile number and fax number",
            "Physical address and postal address",
            "IP address",
            "Other contact or project related information",
          ]}
        />
      </>
    ),
  },
  {
    id: "how-information-is-collected",
    title: "How information is collected?",
    content: (
      <CheckList
        items={[
          "The information may be collected via our website by any technology used on our website for example the contact us form or a Quote request form.",
          "We may also collect personal information via telephone, letter, and promotional materials or at any function or event when meeting with an SM Solutions representative.",
        ]}
      />
    ),
  },
  {
    id: "why-collect-information",
    title: "Why collect information?",
    content: (
      <P>
        Our primary goal in collecting your personal information is to provide you with a professional,
        efficient and personalized service.
      </P>
    ),
  },
  {
    id: "using-personal-information",
    title: "Using personal information",
    content: (
      <P>
        We may use your personal information to communicate with you via emails, telephone, newsletters, and
        direct mails. We may also use it to provide important updates, for invitations or for any other
        administrative purpose.
      </P>
    ),
  },
  {
    id: "sharing-your-information",
    title: "Sharing your information",
    content: (
      <CheckList
        items={[
          "We may share your personal information on a need-to-know basis within our company.",
          "We may also share your information with our sub-contractors or our suppliers with whom we have signed a confidentiality agreement.",
          "We will not sell, lease or distribute your personal information to any third-party organization without prior consent.",
          "We reserve the right to reveal your information in extreme or out-of-ordinary circumstances or for health or safety reasons or as required by the legal authorities.",
        ]}
      />
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      active="privacy"
      titleStart="Privacy"
      titleHighlight="Policy"
      description="How we collect, use and protect the personal information you share with us."
      sections={sections}
      lastUpdated="November 26, 2026"
    />
  );
}
