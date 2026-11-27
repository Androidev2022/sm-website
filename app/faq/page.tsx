import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "FAQs",
  "Find answers to common questions about SM Solutions' digital strategy, design, development and growth services."
);

const faqs = [
  {
    question: "What services does SM Solutions provide?",
    answer:
      "We help businesses with digital strategy, UI/UX design, web and commerce development, mobile apps, cloud and DevOps, analytics, and digital marketing. The right mix depends on your goals and project needs.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with businesses across sectors including e-commerce, consumer goods, real estate, manufacturing, healthcare, education and technology. We tailor our approach to each business and its audience.",
  },
  {
    question: "How do I get started on a project?",
    answer:
      "Reach out through our contact page with a short description of your goals. Our team will learn about your requirements and discuss possible next steps.",
  },
  {
    question: "What does your project process look like?",
    answer:
      "Projects typically begin with discovery and planning, followed by design and development, review and testing, and then launch. The exact stages depend on the scope and type of engagement.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines vary depending on the project scope, requirements and feedback cycles. After understanding your needs, we can outline a suitable timeline and milestones.",
  },
  {
    question: "Can you improve or maintain an existing website or product?",
    answer:
      "Yes. We can assess an existing digital product and discuss improvements such as user experience, performance, features, integrations, ongoing support or growth optimization.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Ongoing support and maintenance can be discussed as part of the engagement. We’ll confirm the available support scope and terms based on your requirements.",
  },
  {
    question: "How do you measure project success?",
    answer:
      "Success measures are agreed based on your goals. They may include usability, performance, lead generation, engagement, conversions or other relevant business outcomes.",
  },
  {
    question: "How can I request a proposal or estimate?",
    answer:
      "Contact our team with your goals, desired deliverables and any important timing or technical details. We’ll review the information and follow up to discuss scope and an estimate.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-[#F7F9FC]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,0.12),transparent_55%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-10 md:pb-12">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="font-medium text-slate-800" aria-current="page">FAQs</span>
          </nav>

          <div className="mt-8 text-center">
            <span className="inline-block text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              How can we <span className="text-blue-600">help?</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-500">
              Answers to common questions about working with SM Solutions and our digital services.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14 md:pb-20" aria-label="Frequently asked questions">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:px-6 font-semibold text-slate-900 marker:hidden">
                <span>{faq.question}</span>
                <ChevronDown size={18} className="shrink-0 text-blue-600 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 sm:px-6 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Still have questions?</h2>
          <p className="mt-2 text-sm text-slate-500">Tell us what you’re looking to achieve and we’ll point you in the right direction.</p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
