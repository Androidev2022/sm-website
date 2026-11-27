import Link from "next/link";
import { createPageMetadata } from "@/lib/page-metadata";
import { ArrowRight, ChevronRight, DollarSign, Briefcase, Globe2, Star, Rocket, TrendingUp } from "lucide-react";
import CaseList from "./CaseList";
import Testimonials from "./Testimonials";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata = createPageMetadata(
  "Case Studies",
  "Real results, real impact. Explore how SM Solutions drives measurable growth for e-commerce, SaaS, real estate and more."
);

const heroStats = [
  { label: "Sessions", value: "25.9K", change: "+12.4%" },
  { label: "Conversions", value: "3,254", change: "+8.1%" },
  { label: "Revenue", value: "$40.5K", change: "+15.7%" },
];

const strip = [
  { icon: DollarSign, value: "$75M+", label: "Revenue Generated" },
  { icon: Briefcase, value: "350+", label: "Projects Delivered" },
  { icon: Globe2, value: "50+", label: "Industries Served" },
  { icon: Star, value: "4.9/5", label: "Client Rating" },
];

const traffic = [
  { label: "Organic", pct: 52, color: "#2563EB" },
  { label: "Paid", pct: 28, color: "#60A5FA" },
  { label: "Social", pct: 20, color: "#C7D2FE" },
];

function Donut() {
  const r = 26;
  const c = 2 * Math.PI * r;
  const segs = traffic.map((t, i) => ({
    ...t,
    len: (t.pct / 100) * c,
    offset: traffic.slice(0, i).reduce((sum, p) => sum + (p.pct / 100) * c, 0),
  }));
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
      <circle cx="32" cy="32" r={r} fill="none" stroke="#EEF2FF" strokeWidth="8" />
      {segs.map((s) => (
        <circle
          key={s.label}
          cx="32" cy="32" r={r} fill="none" stroke={s.color} strokeWidth="8"
          strokeDasharray={`${s.len} ${c - s.len}`} strokeDashoffset={-s.offset}
        />
      ))}
    </svg>
  );
}

function LineChart() {
  const pts = [18, 26, 22, 34, 30, 42, 38, 52, 48, 60];
  const w = 160, h = 64;
  const max = 64;
  const coords = pts.map((p, i) => `${(i / (pts.length - 1)) * w},${h - (p / max) * h}`);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lc-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${coords.join(" ")} ${w},${h}`} fill="url(#lc-fill)" />
      <polyline points={coords.join(" ")} fill="none" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#F7F9FC]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-10 md:pb-14">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={12} />
            <span className="text-slate-800 font-medium">Case Studies</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full">
                <TrendingUp size={12} /> Our Case Studies
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                <span className="text-slate-900">Real Results.</span>
                <br />
                <span className="text-blue-600">Real Impact.</span>
              </h1>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed max-w-md">
                Explore how we&apos;ve helped ambitious brands grow traffic, leads and revenue with data-driven
                strategy, design and technology.
              </p>
            </div>

            {/* Performance overview card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-blue-600/5 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">Performance Overview</h2>
                <span className="text-[11px] text-slate-400">Last 30 days</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {heroStats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-slate-50 px-3 py-3">
                    <div className="text-[11px] text-slate-500">{s.label}</div>
                    <div className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{s.value}</div>
                    <div className="text-[11px] font-medium text-emerald-600">{s.change}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-100 p-3">
                  <div className="text-[11px] font-medium text-slate-500 mb-2">Traffic Sources</div>
                  <div className="flex items-center gap-4">
                    <Donut />
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {traffic.map((t) => (
                        <li key={t.label} className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                          {t.label} <span className="text-slate-400">{t.pct}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-100 p-3">
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-medium text-slate-500">Revenue Trend</span>
                    <span className="font-semibold text-emerald-600">+24%</span>
                  </div>
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm grid grid-cols-2 lg:grid-cols-4">
          {strip.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-3 px-5 py-5 ${i % 2 === 1 ? "border-l" : ""} ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""} border-slate-100`}
            >
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <s.icon size={18} />
              </span>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900">{s.value}</div>
                <div className="text-[11px] sm:text-xs text-slate-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER + LIST */}
      <CaseList />

      {/* MORE RESULTS CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-100 px-6 py-12 text-center">
          <span className="mx-auto w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center">
            <Rocket size={20} />
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Want to See More Results?</h2>
          <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
            Let&apos;s talk about your goals and how we can deliver similar growth for your business.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
            Connect With Us <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />
    </div>
  );
}
