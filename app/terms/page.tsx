import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { CheckList, P, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | SM Solutions",
  description:
    "The terms that govern SM Solutions' professional engagements, services and use of our website.",
};

const EMAIL = "contact@smsolutions.in";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <P>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the SM Solutions website and our
        professional services, including digital consulting, design, development and related technology
        services. By engaging with us or using our website, you agree to be bound by these Terms.
      </P>
    ),
  },
  {
    id: "scope-of-services",
    title: "Scope of Services",
    content: (
      <>
        <P>SM Solutions provides a range of digital services, including but not limited to:</P>
        <CheckList
          items={[
            "Digital strategy and consulting",
            "Experience design and UI/UX",
            "Web and mobile application development",
            "Cloud, DevOps and infrastructure services",
            "Digital marketing and growth support",
          ]}
        />
        <P>
          The specific scope, deliverables and timelines for each engagement will be defined in a separate
          proposal, Statement of Work (SOW) or mutually agreed contract.
        </P>
      </>
    ),
  },
  {
    id: "project-engagements",
    title: "Project Engagements",
    content: (
      <P>
        All projects are initiated based on a written proposal or SOW that outlines the objectives, scope,
        deliverables, timeline, responsibilities and commercial terms. Work will commence upon receipt of a
        formal acceptance and any applicable advance payment.
      </P>
    ),
  },
  {
    id: "payments-billing",
    title: "Payments & Billing",
    content: (
      <P>
        Fees, payment schedules and billing terms will be specified in the relevant proposal or SOW. Unless
        otherwise agreed, invoices are payable within the period stated in the invoice. In case of delayed
        payments, we reserve the right to pause work until the outstanding amount is settled.
      </P>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    content: (
      <>
        <P>To ensure successful delivery, clients agree to:</P>
        <CheckList
          items={[
            "Provide timely access to information, inputs and necessary resources",
            "Share feedback and approvals within agreed timelines",
            "Ensure that all content, data and materials provided are accurate and legally compliant",
            "Designate a point of contact for the duration of the engagement",
          ]}
        />
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <P>
          Upon receipt of full payment, ownership of the final deliverables created specifically for the client
          will transfer to the client, unless otherwise stated in the SOW.
        </P>
        <P>
          SM Solutions retains ownership of its pre-existing tools, frameworks, code libraries, methodologies and
          know-how, and grants the client a non-exclusive licence to use them as part of the deliverables. We may
          showcase non-confidential work in our portfolio unless the client requests otherwise in writing.
        </P>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <P>
        To the maximum extent permitted by law, SM Solutions shall not be liable for any indirect, incidental,
        special or consequential damages, including loss of profits, revenue or data. Our total liability for
        any claim arising out of an engagement shall not exceed the fees paid by the client for the specific
        services giving rise to the claim.
      </P>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <P>
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
        arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the
        courts in Kolkata, West Bengal.
      </P>
    ),
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to These Terms",
    content: (
      <P>
        We may update these Terms from time to time to reflect changes in our services or legal requirements.
        The updated version will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
        Continued use of our website or services after changes are posted constitutes acceptance of the
        revised Terms.
      </P>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <P>
        If you have any questions about these Terms, please contact us at{" "}
        <a href={`mailto:${EMAIL}`} className="font-semibold text-blue-600 hover:underline">
          {EMAIL}
        </a>{" "}
        or visit our{" "}
        <Link href="/contact" className="font-semibold text-blue-600 hover:underline">
          contact page
        </Link>
        .
      </P>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      active="terms"
      titleStart="Terms of"
      titleHighlight="Service"
      description="Understanding the terms that govern our professional engagements, services and use of our website."
      sections={sections}
      lastUpdated="January 15, 2026"
    />
  );
}
