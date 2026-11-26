import type { Metadata } from "next";
import LegalLayout, { CheckList, P, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | SM Solutions",
  description:
    "Payment, cancellation, refund and late-fee terms for SM Solutions projects and services.",
};

const Term = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <>
    <span className="font-semibold text-slate-900">{label}:</span> {children}
  </>
);

const sections: LegalSection[] = [
  {
    id: "payments",
    title: "Payments",
    content: (
      <CheckList
        items={[
          "All prices are quoted in Indian Rupees inclusive of GST unless specified.",
          "All invoices are to be processed as per the schedule via your preferred method of payment.",
          "There is a surcharge charged for payments made via Xero Accounting Software. This is charged by Stripe for the credit card payments.",
          "Milestone payments must be made within 10 working days of each milestone/schedule, unless mutually agreed otherwise. Final payment must be made prior to website/application/project going live.",
          "Receipt of payment is deemed as acceptance of the quote, milestone, delivery, project and terms & conditions.",
        ]}
      />
    ),
  },
  {
    id: "cancellations-refunds",
    title: "Cancellations & Refunds",
    content: (
      <>
        <P>
          SM Solutions reserves the right to negotiate and refund appropriate portion of the amount paid by
          customer towards the requested service.
        </P>
        <CheckList
          items={[
            "If you cancel your order after making the payment, but the work has not commenced, we will refund 75% of the payment that you have already made.",
            "If the order is cancelled after the commencement of work, the maximum refund or charge will be 50% of the invoice.",
            "There will be no refund or adjustments if cancellation is called when more than 50% of the work has been completed.",
            "All cancellations must be received in writing and can be sent via regular mail, email or fax. Telephone requests on cancellations will not be accepted.",
          ]}
        />
        <P>
          For minor or once-off works, payments need to be made either in advance or as per the terms mentioned
          in the invoice/proposal. If you require any changes to the terms, you must inform us in writing
          (emails accepted) within two working days of the receipt of the same.
        </P>
      </>
    ),
  },
  {
    id: "late-fees",
    title: "Late Fees & Charges",
    content: (
      <>
        <P>
          All outstanding invoices will incur a late payment fee of 10% of the pending amount and an
          administration fee of INR 600 per month, from the due date.
        </P>
        <CheckList
          items={[
            <Term key="due" label="Due date">
              Is the date on which the payment is due as per the terms on the invoice/proposal.
            </Term>,
            <Term key="outstanding" label="Outstanding Invoice">
              An invoice is deemed to be outstanding if the payment is still due after 14 days of the expiry of
              the due date.
            </Term>,
            <Term key="debt" label="Debt Collection">
              Client is provided a further 7 days after late payment fee is applied to pay the invoice. Failure to
              pay will result in the outstanding amount referred to a debt collector. SM Solutions will not be
              liable for any costs or charges associated with the recovery of the outstanding amount. Any charges
              associated with the recovery of the outstanding amount (debt collectors, administration charges,
              legal fees) will be referred to the client for processing.
            </Term>,
          ]}
        />
      </>
    ),
  },
  {
    id: "invoice-queries",
    title: "Invoice Queries & Communication",
    content: (
      <CheckList
        items={[
          "If you are late with a payment or have any queries regarding the Invoice, please contact Accounts Manager immediately on receiving the invoice or reminder emails.",
          "All communications/correspondences are generally done via emails. It is client’s responsibility to keep us updated with their relevant email addresses.",
        ]}
      />
    ),
  },
  {
    id: "third-party-renewals",
    title: "Domains, Hosting & Third-Party Services",
    content: (
      <P>
        Any payment relating to the domain name registration renewal or hosting or any 3rd party products or
        service purchased on behalf of the client will have to be paid in full and is non-refundable. In case of
        all renewal cancellations, we must be notified at least 30 days before the renewal date.
      </P>
    ),
  },
  {
    id: "website-transfer",
    title: "Website Transfer",
    content: (
      <P>
        SM Solutions generally builds and tests the websites/applications on our own servers or hosted domains.
        The website/application will be transferred-off to the nominated 3rd party server upon full payment of
        all invoices and dues.
      </P>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      active="refund"
      titleStart="Cancellation &"
      titleHighlight="Refund Policy"
      description="Our payment, cancellation and refund terms for projects and services."
      sections={sections}
      lastUpdated="November 26, 2026"
    />
  );
}
