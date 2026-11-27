import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/page-metadata";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Hammer,
  Layers,
  LayoutTemplate,
  Megaphone,
  Monitor,
  PenTool,
  RefreshCw,
  Server,
  Settings,
  Smartphone,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const metadata = createPageMetadata(
  "Services",
  "Strategy, experience, engineering and growth — integrated to design, build and scale digital ecosystems that perform."
);

// ─── Colour accents (one per card, cycled) ───────────────────────────────────
type Accent = { tile: string; text: string; check: string; bar: string };
const A: Record<string, Accent> = {
  blue: { tile: "bg-blue-50 text-blue-600", text: "text-blue-600", check: "text-blue-600", bar: "bg-blue-500" },
  violet: { tile: "bg-violet-50 text-violet-600", text: "text-violet-600", check: "text-violet-600", bar: "bg-violet-500" },
  emerald: { tile: "bg-emerald-50 text-emerald-600", text: "text-emerald-600", check: "text-emerald-600", bar: "bg-emerald-500" },
  orange: { tile: "bg-orange-50 text-orange-500", text: "text-orange-500", check: "text-orange-500", bar: "bg-orange-400" },
  sky: { tile: "bg-sky-50 text-sky-600", text: "text-sky-600", check: "text-sky-600", bar: "bg-sky-500" },
  indigo: { tile: "bg-indigo-50 text-indigo-600", text: "text-indigo-600", check: "text-indigo-600", bar: "bg-indigo-500" },
  rose: { tile: "bg-rose-50 text-rose-500", text: "text-rose-500", check: "text-rose-500", bar: "bg-rose-500" },
  purple: { tile: "bg-purple-50 text-purple-600", text: "text-purple-600", check: "text-purple-600", bar: "bg-purple-500" },
};

// ─── Content ─────────────────────────────────────────────────────────────────
const services: { title: string; desc: string; points: string[]; icon: LucideIcon; accent: Accent }[] = [
  {
    title: "Digital Strategy & Consulting",
    desc: "Define the right digital roadmap to unlock business growth.",
    points: ["Business & user research", "Digital roadmap & use cases", "Product & platform strategy", "Technology & execution planning"],
    icon: Target,
    accent: A.blue,
  },
  {
    title: "Experience Design & UI/UX",
    desc: "Create intuitive, engaging and accessible user experiences.",
    points: ["User research & journey mapping", "UX strategy & information architecture", "UI design & design systems", "Usability & accessibility design"],
    icon: PenTool,
    accent: A.violet,
  },
  {
    title: "Web & Commerce Engineering",
    desc: "Build high-performance, scalable web and commerce solutions.",
    points: ["Custom web application development", "E-commerce & D2C platforms", "CMS-based solutions", "Integrations & performance optimization"],
    icon: Monitor,
    accent: A.emerald,
  },
  {
    title: "Mobile App Development",
    desc: "Design and build secure, high-quality mobile applications for growth.",
    points: ["iOS and Android development", "Cross-platform (React Native / Flutter)", "App modernization & enhancements", "Deployment & app store release"],
    icon: Smartphone,
    accent: A.orange,
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    desc: "Build a reliable, secure and scalable technology foundation.",
    points: ["Cloud architecture & migration", "DevOps, CI/CD & automation", "Infrastructure management", "Security, monitoring & cost optimization"],
    icon: Cloud,
    accent: A.sky,
  },
  {
    title: "Data, Analytics & AI",
    desc: "Turn data into insights and business impact with modern AI.",
    points: ["Data strategy & architecture", "Analytics & business intelligence", "AI/ML solutions & integration", "Reporting, dashboards & insights"],
    icon: Database,
    accent: A.indigo,
  },
  {
    title: "Digital Marketing & Growth",
    desc: "Build visibility, engagement and measurable business growth.",
    points: ["Growth strategy & campaign planning", "SEO, content & performance marketing", "Social media & engagement", "Marketing analytics & optimization"],
    icon: Megaphone,
    accent: A.rose,
  },
  {
    title: "Emerging Technology Solutions",
    desc: "Explore and apply new technologies to solve real business challenges.",
    points: ["IoT & connected solutions", "AI-powered applications", "Automation & intelligent workflows", "PoC, prototyping & pilot deployments"],
    icon: Cpu,
    accent: A.purple,
  },
];

const journey: { label: string; icon: LucideIcon; accent: Accent }[] = [
  { label: "Strategy", icon: Target, accent: A.blue },
  { label: "Design", icon: PenTool, accent: A.violet },
  { label: "Engineering", icon: Code2, accent: A.emerald },
  { label: "Infrastructure", icon: Cloud, accent: A.sky },
  { label: "Growth", icon: TrendingUp, accent: A.orange },
];

const techStack: { title: string; icon: LucideIcon; accent: Accent; items: string[] }[] = [
  { title: "Frontend", icon: Monitor, accent: A.blue, items: ["Next.js", "React", "Angular", "TypeScript"] },
  { title: "Backend", icon: Server, accent: A.emerald, items: ["Laravel", "Node.js", "Python", "PHP"] },
  { title: "Mobile", icon: Smartphone, accent: A.orange, items: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"] },
  { title: "Cloud & DevOps", icon: Cloud, accent: A.sky, items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes"] },
  { title: "Data & Database", icon: Database, accent: A.indigo, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "AI & Emerging Tech", icon: Brain, accent: A.purple, items: ["OpenAI", "TensorFlow", "PyTorch", "IoT (Connected Devices)"] },
  { title: "CMS & Platforms", icon: LayoutTemplate, accent: A.rose, items: ["WordPress", "Shopify", "Adobe Experience Manager", "Headless CMS"] },
];

const engagements: { title: string; desc: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "Advisory", desc: "Get expert guidance, validation and a clear plan before you build.", icon: Compass, accent: A.blue },
  { title: "Build", desc: "Design and develop digital products and platforms from the ground up.", icon: Hammer, accent: A.violet },
  { title: "Transform", desc: "Modernize, scale and enhance your existing digital ecosystem.", icon: RefreshCw, accent: A.emerald },
  { title: "Operate", desc: "Keep your platforms secure, reliable and performing at their best.", icon: Settings, accent: A.orange },
];

// Add `logo` once the file exists in /public; brands without one render as text.
const brands: { name: string; logo?: string }[] = [
  { name: "Tefal", logo: "/logos/tefal.png" },
  { name: "Del Monte", logo: "/logos/delmonte.png" },
  { name: "Maharaja Whiteline", logo: "/logos/maharaja.png" },
  { name: "LMHI", logo: "/logos/lmhi.webp" },
  { name: "Berger" },
];

const heroTags: { label: string; icon: LucideIcon; pos: string; delay: string }[] = [
  { label: "Strategy", icon: Layers, pos: "left-[2%] top-[14%]", delay: "" },
  { label: "Experience", icon: Monitor, pos: "right-[0%] top-[18%]", delay: "contact-float-d2" },
  { label: "Engineering", icon: Code2, pos: "left-[6%] bottom-[22%]", delay: "contact-float-d3" },
  { label: "Growth", icon: BarChart3, pos: "right-[6%] bottom-[16%]", delay: "contact-float-d2" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title?: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-8 md:mb-10">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <h2 className="mt-3 text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>}
      {sub && <p className="mt-2 text-sm text-slate-500">{sub}</p>}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#F7F9FC]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,0.14),transparent_55%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-10 md:pb-14">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={12} />
            <span className="text-slate-800 font-medium">Services</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-slate-900">
                Digital Capabilities Built Around <span className="text-blue-600">Your Business.</span>
              </h1>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed max-w-md">
                Strategy, experience, engineering and growth — integrated to design, build and scale digital
                ecosystems that perform.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  Discuss Your Project <ArrowRight size={16} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border border-blue-200 bg-white hover:border-blue-400 text-blue-700 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  View Our Work <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[480px] aspect-square" aria-hidden="true">
              <div className="absolute inset-[12%] rounded-full bg-blue-400/30 blur-3xl" />
              <Image
                src="/earth.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="globe-spin object-contain p-[12%] drop-shadow-[0_30px_50px_rgba(37,99,235,0.35)]"
              />
              {heroTags.map((t) => (
                <div
                  key={t.label}
                  className={`contact-float ${t.delay} absolute ${t.pos} flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur border border-white shadow-[0_12px_30px_rgba(37,99,235,0.2)] px-3 py-2 sm:px-4 sm:py-2.5`}
                >
                  <t.icon size={16} className="text-blue-600" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <SectionHead eyebrow="Our Core Service Areas" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/5"
            >
              <div className="flex items-start gap-3">
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${s.accent.tile}`}>
                  <s.icon size={20} />
                </span>
                <div>
                  <div className={`text-xs font-bold ${s.accent.text}`}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-bold text-slate-900 text-[15px] leading-snug">{s.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check size={14} strokeWidth={2.5} className={`mt-0.5 flex-shrink-0 ${s.accent.check}`} />
                    {p}
                  </li>
                ))}
              </ul>
              <span className={`absolute left-0 bottom-0 h-1 w-full ${s.accent.bar}`} />
            </article>
          ))}
        </div>
      </section>

      {/* ONE PARTNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <SectionHead
          title={
            <>
              One Partner. <span className="text-blue-600">Multiple Capabilities.</span>
            </>
          }
          sub="A connected approach that takes you from strategy to sustained growth."
        />
        <ol className="flex flex-wrap justify-center items-start gap-y-8">
          {journey.map((j, i) => (
            <li key={j.label} className="flex items-start">
              <div className="flex w-28 sm:w-32 flex-col items-center gap-3">
                <span
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-100 shadow-[0_10px_24px_rgba(37,99,235,0.12)] flex items-center justify-center ${j.accent.text}`}
                >
                  <j.icon size={28} />
                </span>
                <span className="font-bold text-slate-900 text-sm">{j.label}</span>
              </div>
              {i < journey.length - 1 && (
                <div className="hidden md:flex items-center h-20 text-blue-400">
                  <span className="w-12 lg:w-16 border-t-2 border-dashed border-blue-300" />
                  <ArrowRight size={16} className="-ml-1.5" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <SectionHead eyebrow="Our Technology Expertise" />
        <div className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden bg-slate-100 grid gap-px grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
          {techStack.map((col, i) => (
            <div
              key={col.title}
              className={`bg-white p-5 ${i === techStack.length - 1 ? "col-span-2 sm:col-span-3 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${col.accent.tile}`}>
                  <col.icon size={14} />
                </span>
                <h3 className="font-bold text-slate-900 text-[13px]">{col.title}</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-500">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <SectionHead
          title="Flexible Engagement Models"
          sub="Work with us in the way that best fits your goals, timeline and team structure."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {engagements.map((e) => (
            <div
              key={e.title}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-4 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/5"
            >
              <span className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${e.accent.tile}`}>
                <e.icon size={20} />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-[15px]">{e.title}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 md:pb-20">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-7 text-center">
          <Eyebrow>Trusted by Ambitious Brands</Eyebrow>
          <div className="mt-6 flex flex-wrap justify-center sm:justify-between items-center gap-x-10 gap-y-6">
            {brands.map((b) =>
              b.logo ? (
                <Image
                  key={b.name}
                  src={b.logo}
                  alt={b.name}
                  title={b.name}
                  width={180}
                  height={64}
                  className="h-12 md:h-16 w-auto max-w-[160px] object-contain"
                />
              ) : (
                <span key={b.name} className="text-2xl md:text-3xl font-black tracking-tight text-slate-700 uppercase">
                  {b.name}
                </span>
              )
            )}
          </div>
          <Link
            href="/case-studies"
            className="mt-6 inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all"
          >
            View All Case Studies <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
