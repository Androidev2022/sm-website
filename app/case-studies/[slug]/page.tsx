import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarClock,
  ChevronRight,
  CircleArrowRight,
  Compass,
  Cpu,
  House,
  Lightbulb,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { caseStudies, getCaseStudy, type CaseStudy } from "../data";
import { createPageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return createPageMetadata("Case Study", "Explore a digital growth case study from SM Solutions.");
  return createPageMetadata(cs.heroTitle, cs.heroDescription);
}

type StoryKey = keyof CaseStudy["story"];

const storySteps: {
  key: StoryKey;
  label: string;
  icon: LucideIcon;
  accent: string; // text colour
  bar: string; // bottom bar colour
  iconBg: string;
}[] = [
    { key: "challenge", label: "The Challenge", icon: Target, accent: "text-rose-500", bar: "bg-rose-500", iconBg: "bg-rose-50" },
    { key: "approach", label: "Our Approach", icon: Compass, accent: "text-blue-600", bar: "bg-blue-600", iconBg: "bg-blue-50" },
    { key: "solution", label: "The Solution", icon: Lightbulb, accent: "text-emerald-600", bar: "bg-emerald-500", iconBg: "bg-emerald-50" },
    { key: "technology", label: "Technology", icon: Cpu, accent: "text-violet-600", bar: "bg-violet-500", iconBg: "bg-violet-50" },
    { key: "results", label: "Results", icon: TrendingUp, accent: "text-amber-500", bar: "bg-amber-400", iconBg: "bg-amber-50" },
  ];

const techColors = ["#61DAFB", "#111827", "#3178C6", "#539E43", "#00758F", "#FF9900", "#F38020", "#DC382D", "#E37400", "#362D59"];

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const info: { icon: LucideIcon; label: string; value: string; sub?: string }[] = [
    { icon: Building2, label: "Client", value: cs.client },
    { icon: House, label: "Industry", value: cs.industry },
    { icon: CalendarClock, label: "Engagement", value: cs.duration, sub: cs.engagementType },
  ];

  return (
    <div className="bg-[#F7F9FC]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8 md:pb-12">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={12} />
            <Link href="/case-studies" className="hover:text-blue-600">Case Studies</Link>
            <ChevronRight size={12} />
            <span className="text-slate-800 font-medium">{cs.client}</span>
          </nav>

          <div className="mt-6 md:mt-8 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 items-center">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full">
                Featured Case Study
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                {cs.heroTitle}
              </h1>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed max-w-md">{cs.heroDescription}</p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                  >
                    View Live Site <ArrowUpRight size={16} />
                  </a>
                )}
                <a
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 border border-blue-200 bg-white hover:border-blue-400 text-blue-700 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  Our Methodology <CircleArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={cs.image}
                alt={`${cs.client} website on desktop and mobile`}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFO + METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b lg:border-b-0 lg:border-r border-slate-100">
            {info.map((it) => (
              <div key={it.label} className="flex items-center gap-3 px-5 py-4 sm:py-5">
                <span className="w-9 h-9 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center flex-shrink-0">
                  <it.icon size={17} />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-400">{it.label}</div>
                  <div className="text-sm font-semibold text-slate-900 truncate">{it.value}</div>
                  {it.sub && <div className="text-[11px] text-slate-500 truncate">{it.sub}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {cs.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-4 py-4 sm:py-5 text-center ${i === cs.metrics.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="text-xl sm:text-2xl font-extrabold text-blue-600">{m.value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY CARDS */}
      <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 scroll-mt-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {storySteps.map((s, i) => (
            <article
              key={s.key}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-5 pb-6 flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/5"
            >
              <div className={`flex items-center gap-2 text-[11px] font-bold tracking-wide uppercase ${s.accent}`}>
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.iconBg}`}>
                  <s.icon size={14} />
                </span>
                {String(i + 1).padStart(2, "0")}. {s.label}
              </div>
              <p className="mt-3 text-[13px] text-slate-600 leading-relaxed flex-1">{cs.story[s.key]}</p>
              <span className={`absolute left-0 bottom-0 h-1 w-full ${s.bar}`} />
            </article>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 md:pb-20">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4 flex flex-col md:flex-row md:items-center gap-4">
          <span className="text-[11px] font-bold tracking-wider uppercase text-slate-900 flex-shrink-0">Tech Stack</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 flex-1">
            {cs.techStack.map((t, i) => (
              <li key={t} className="flex items-center gap-2 text-[13px] text-slate-700">
                <span
                  className="w-5 h-5 rounded-md text-[10px] font-bold text-white flex items-center justify-center"
                  style={{ background: techColors[i % techColors.length] }}
                >
                  {t[0]}
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowRight size={15} className="rotate-180" /> Back to all case studies
          </Link>
        </div>
      </section>
    </div>
  );
}