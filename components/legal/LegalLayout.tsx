import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import LegalToc from "./LegalToc";

export type LegalSection = { id: string; title: string; content: ReactNode };

type TabKey = "terms" | "privacy" | "refund";

const tabs: { key: TabKey; label: string; href: string; icon: LucideIcon }[] = [
  { key: "terms", label: "Terms of Service", href: "/terms", icon: FileText },
  { key: "privacy", label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
  { key: "refund", label: "Cancellation & Refund Policy", href: "/refund-policy", icon: RefreshCw },
];

// ─── Small building blocks for legal copy ───────────────────────────────────
export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm text-slate-600 leading-relaxed">{children}</p>;
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
          <Check size={16} className="mt-0.5 flex-shrink-0 text-blue-600" strokeWidth={2.5} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Hero illustration: document + shield ───────────────────────────────────
function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] aspect-[4/3]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-blue-400/25 blur-3xl" />
      <div className="absolute left-[10%] right-[10%] bottom-[4%] h-[18%] rounded-[50%] border border-blue-300/60" />
      <div className="absolute left-[18%] right-[18%] bottom-[8%] h-[10%] rounded-[50%] bg-blue-300/30 blur-md" />

      {/* document */}
      <div className="contact-float absolute left-[20%] top-[6%] w-[48%] h-[78%] -rotate-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-[0_24px_50px_rgba(37,99,235,0.28)] p-[7%]">
        <div className="h-[7%] w-[55%] rounded-full bg-blue-500/80" />
        <div className="mt-[10%] space-y-[9%]">
          {[90, 75, 85, 60].map((w, i) => (
            <div key={i} className="flex items-center gap-[6%]">
              <span className="w-[12%] aspect-square rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="w-3/4 h-3/4 text-blue-600" strokeWidth={3} />
              </span>
              <span className="h-1.5 rounded-full bg-slate-200" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>

      {/* shield */}
      <div className="contact-float contact-float-d2 absolute right-[12%] bottom-[10%] w-[36%] aspect-square">
        <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-[0_18px_30px_rgba(37,99,235,0.45)]">
          <defs>
            <linearGradient id="legal-shield" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          <path d="M50 4 L92 18 V52 C92 80 72 98 50 106 C28 98 8 80 8 52 V18 Z" fill="url(#legal-shield)" stroke="#fff" strokeWidth="3" />
          <path d="M50 16 L80 26 V52 C80 72 66 86 50 92 C34 86 20 72 20 52 V26 Z" fill="#fff" fillOpacity="0.18" />
          <path d="M33 55 L45 67 L69 42" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {["left-[6%] top-[30%]", "right-[6%] top-[10%]", "left-[70%] top-[2%]"].map((p) => (
        <span key={p} className={`absolute ${p} w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_3px_rgba(147,197,253,0.9)]`} />
      ))}
    </div>
  );
}

export default function LegalLayout({
  active,
  titleStart,
  titleHighlight,
  description,
  sections,
  lastUpdated,
}: {
  active: TabKey;
  titleStart: string;
  titleHighlight: string;
  description: string;
  sections: LegalSection[];
  lastUpdated: string;
}) {
  const current = tabs.find((t) => t.key === active)!;
  const others = tabs.filter((t) => t.key !== active);
  const toc = sections.map(({ id, title }) => ({ id, title }));

  return (
    <div className="bg-[#F7F9FC]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(37,99,235,0.12),transparent_55%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-6">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={12} />
            <span>Legal &amp; Policies</span>
            <ChevronRight size={12} />
            <span className="text-blue-600 font-medium">{current.label}</span>
          </nav>

          <div className="mt-6 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 items-center">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full">
                Legal &amp; Policies
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-slate-900">
                {titleStart} <span className="text-blue-600">{titleHighlight}</span>
              </h1>
              <p className="mt-4 text-[15px] text-slate-500 leading-relaxed max-w-md">{description}</p>
            </div>
            <div className="hidden md:block">
              <HeroArt />
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-1.5 flex gap-1.5 overflow-x-auto [scrollbar-width:none]">
          {tabs.map((t) => {
            const on = t.key === active;
            return (
              <Link
                key={t.key}
                href={t.href}
                aria-current={on ? "page" : undefined}
                className={`flex-1 min-w-max flex items-center justify-center gap-2 rounded-xl px-4 sm:px-6 py-3 text-[13px] sm:text-sm font-semibold transition-colors ${
                  on ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <t.icon size={17} className={on ? "" : "text-blue-600"} />
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* BODY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 pb-14 md:pb-20">
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-6 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-4">
            {/* Mobile: collapsible */}
            <details className="lg:hidden bg-white rounded-2xl border border-slate-100 shadow-sm group">
              <summary className="flex items-center justify-between px-5 py-4 font-bold text-slate-900 cursor-pointer list-none">
                On this page
                <ChevronDown size={18} className="text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-2 pb-3">
                <LegalToc items={toc} />
              </div>
            </details>

            {/* Desktop */}
            <div className="hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-sm p-3">
              <h2 className="px-3 pt-2 pb-3 font-bold text-slate-900">On this page</h2>
              <LegalToc items={toc} />
            </div>

            <div className="hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h2 className="flex items-center gap-2 font-bold text-slate-900">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText size={14} />
                </span>
                Other Policies
              </h2>
              <ul className="mt-3 space-y-2">
                {others.map((t) => (
                  <li key={t.key}>
                    <Link href={t.href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 hover:gap-2.5 transition-all">
                      {t.label} <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 md:p-10">
            <div className="space-y-9">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28 space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {i + 1}. {s.title}
                  </h2>
                  {s.content}
                </section>
              ))}
            </div>

            <div className="mt-10 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <CalendarDays size={14} className="text-blue-600" />
              Last updated: {lastUpdated}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
