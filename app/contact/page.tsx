import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Headset,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  MoveRight,
  Phone,
  Rocket,
  Search,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | SM Solutions",
  description:
    "Discuss your digital product, website, platform or growth challenge with SM Solutions. Book a strategy call, email or call our team.",
};

// ─── Contact details (edit here) ─────────────────────────────────────────────
const EMAIL = "contact@smsolutions.in";
const PHONE_DISPLAY = "+91 86301 80711";
const PHONE_TEL = "+918630180711";
const STRATEGY_CALL_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Strategy Call Request")}`;

const channels: {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: string;
  href: string;
  tint: string;
  accent: string;
  bar: string;
}[] = [
  {
    icon: CalendarDays,
    title: "Book a Strategy Call",
    desc: "A focused conversation to discuss your goals, explore ideas and outline possible next steps.",
    cta: "Book a Strategy Call",
    href: STRATEGY_CALL_HREF,
    tint: "bg-blue-50 text-blue-600",
    accent: "text-blue-600",
    bar: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Our Team",
    desc: "Share a brief note about what you're looking to build or improve, and our team will get back to you.",
    cta: "Email Our Team",
    href: `mailto:${EMAIL}`,
    tint: "bg-violet-50 text-violet-600",
    accent: "text-violet-600",
    bar: "bg-violet-500",
  },
  {
    icon: Phone,
    title: "Call Our Team",
    desc: "Speak with our team directly for a quick discussion about your requirements and how we can help.",
    cta: "Call Our Team",
    href: `tel:${PHONE_TEL}`,
    tint: "bg-emerald-50 text-emerald-600",
    accent: "text-emerald-600",
    bar: "bg-emerald-500",
  },
];

const startingPoints: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Rocket, title: "Build something new", desc: "A digital product, platform or business website from the ground up." },
  { icon: Layers, title: "Improve an existing product", desc: "Enhance performance, user experience, features or scalability." },
  { icon: Users, title: "Explore a partnership", desc: "Collaborate on an idea, initiative or long-term opportunity." },
  { icon: Headset, title: "Get ongoing support", desc: "Keep your existing platforms secure, stable and performing at their best." },
];

const nextSteps: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MessageCircle, title: "You reach out", desc: "Book a call, email us or give us a call." },
  { icon: Search, title: "We understand the requirement", desc: "A quick discussion to understand your goals, context and priorities." },
  { icon: Target, title: "We discuss the right next step", desc: "A practical way forward tailored to your needs and timeline." },
];

// ─── Hero illustration: glassy chat bubble on a podium ──────────────────────
function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] aspect-[5/4]" aria-hidden="true">
      {/* glow */}
      <div className="absolute inset-[10%] rounded-full bg-blue-400/25 blur-3xl" />
      {/* orbit rings */}
      <div className="absolute left-[4%] right-[4%] top-[30%] h-[42%] rounded-[50%] border border-blue-300/50 -rotate-6" />
      <div className="absolute left-[12%] right-[12%] top-[38%] h-[30%] rounded-[50%] border border-blue-200/60 rotate-3" />

      {/* podium */}
      <div className="absolute left-[22%] right-[22%] bottom-[10%] h-[16%] rounded-[50%] bg-gradient-to-b from-blue-200 to-blue-400 shadow-[0_20px_40px_rgba(37,99,235,0.35)]" />
      <div className="absolute left-[24%] right-[24%] bottom-[16%] h-[12%] rounded-[50%] bg-gradient-to-b from-white to-blue-100 ring-2 ring-blue-300/70 shadow-[0_0_30px_rgba(96,165,250,0.8)]" />

      {/* bubble */}
      <div className="contact-float absolute left-[28%] right-[26%] top-[14%] h-[44%]">
        <div className="relative w-full h-full rounded-[38%] bg-gradient-to-br from-white/90 via-blue-200/80 to-blue-500/80 border border-white/80 shadow-[inset_0_-14px_30px_rgba(37,99,235,0.45),inset_0_10px_24px_rgba(255,255,255,0.9),0_24px_50px_rgba(37,99,235,0.35)] backdrop-blur flex items-center justify-center gap-[7%]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-[11%] aspect-square rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
          ))}
          <span className="absolute -bottom-[14%] left-[16%] w-[22%] aspect-square rotate-45 rounded-sm bg-gradient-to-br from-blue-300/90 to-blue-500/90 -z-10" />
        </div>
      </div>

      {/* floating tiles */}
      {[
        { Icon: CalendarDays, pos: "left-[8%] top-[4%]", delay: "" },
        { Icon: Mail, pos: "right-[4%] top-[16%]", delay: "contact-float-d2" },
        { Icon: Phone, pos: "right-[10%] bottom-[26%]", delay: "contact-float-d3" },
      ].map(({ Icon, pos, delay }, i) => (
        <div
          key={i}
          className={`contact-float ${delay} absolute ${pos} w-[15%] aspect-square rounded-2xl bg-white/80 border border-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] backdrop-blur flex items-center justify-center text-blue-600`}
        >
          <Icon className="w-1/2 h-1/2" strokeWidth={1.8} />
        </div>
      ))}

      {/* sparkles */}
      {["left-[20%] top-[40%]", "right-[28%] top-[6%]", "left-[40%] bottom-[6%]", "right-[2%] top-[52%]"].map((p) => (
        <span key={p} className={`absolute ${p} w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_3px_rgba(147,197,253,0.9)]`} />
      ))}
    </div>
  );
}

// ─── Location illustration: isometric-ish city map with a pin ───────────────
function MapArt() {
  return (
    <div className="relative w-full h-full min-h-[180px]" aria-hidden="true">
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="map-fade" x1="0" x2="1">
            <stop offset="0%" stopColor="#EEF4FF" stopOpacity="1" />
            <stop offset="35%" stopColor="#EEF4FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="skewX(-20) translate(60 0)">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={c * 46}
                y={r * 36}
                width={38}
                height={28}
                rx={3}
                fill={(r + c) % 4 === 0 ? "#C7D7FE" : "#DCE6FF"}
                opacity={0.9}
              />
            ))
          )}
          <path d="M-20 120 C 80 100, 180 140, 420 90" stroke="#fff" strokeWidth="8" fill="none" />
          <path d="M200 -10 L 230 210" stroke="#fff" strokeWidth="6" fill="none" />
        </g>
        <rect width="400" height="200" fill="url(#map-fade)" />
      </svg>

      {/* pin with pulse */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]">
        <div className="absolute left-1/2 top-[85%] -translate-x-1/2 w-24 h-8 rounded-[50%] bg-blue-500/20 animate-ping" />
        <div className="absolute left-1/2 top-[85%] -translate-x-1/2 w-16 h-5 rounded-[50%] bg-blue-500/30" />
        <MapPin size={64} className="relative text-blue-600 fill-blue-500 drop-shadow-[0_10px_16px_rgba(37,99,235,0.45)]" stroke="white" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#F7F9FC]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(37,99,235,0.12),transparent_55%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12 md:pb-16">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={12} />
            <span className="text-slate-800 font-medium">Contact</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full">
                Let&apos;s Connect
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-slate-900">
                Let&apos;s talk about
                <br />
                what you&apos;re <span className="text-blue-600">building.</span>
              </h1>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed max-w-md">
                Discuss your digital product, website, platform or growth challenge with SM Solutions.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={STRATEGY_CALL_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  Book a Strategy Call <ArrowRight size={16} />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 border border-blue-200 bg-white hover:border-blue-400 text-blue-700 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  Email Our Team <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <HeroArt />
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Choose how you&apos;d like to connect</h2>
          <p className="text-sm text-slate-500 mt-2">Three simple ways to start a conversation with our team.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {channels.map((ch) => (
            <a
              key={ch.title}
              href={ch.href}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/5"
            >
              <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${ch.tint}`}>
                <ch.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{ch.title}</h3>
              <p className="mt-2 text-[13px] text-slate-500 leading-relaxed flex-1">{ch.desc}</p>
              <span className={`mt-5 inline-flex items-center gap-1 text-[13px] font-semibold ${ch.accent} group-hover:gap-2 transition-all`}>
                {ch.cta} <ArrowRight size={14} />
              </span>
              <span className={`absolute left-0 bottom-0 h-1 w-full ${ch.bar}`} />
            </a>
          ))}
        </div>
      </section>

      {/* START + NEXT STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-6">
          <div className="lg:pr-6 lg:border-r border-slate-200">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">A good place to start</h2>
            <p className="text-sm text-slate-500 mt-2">Reach out to us if you are looking to:</p>
            <ul className="mt-6 space-y-5">
              {startingPoints.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <p.icon size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{p.title}</div>
                    <div className="text-[13px] text-slate-500 leading-relaxed">{p.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/60 to-white border border-blue-100 p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What happens next?</h2>
            <p className="text-sm text-slate-500 mt-2">A simple and straightforward process to get things moving.</p>
            <ol className="mt-8 grid sm:grid-cols-3 gap-8 sm:gap-4">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="relative text-center">
                  {i < nextSteps.length - 1 && (
                    <MoveRight
                      size={28}
                      className="hidden sm:block absolute top-6 -right-5 text-blue-400"
                      strokeWidth={1.5}
                    />
                  )}
                  <span className="mx-auto w-14 h-14 rounded-full bg-white border border-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.15)] text-blue-600 flex items-center justify-center">
                    <s.icon size={22} />
                  </span>
                  <div className="mt-4 text-lg font-bold text-blue-600">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-sm font-semibold text-slate-900 leading-snug">{s.title}</div>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl bg-[#EEF4FF] border border-blue-100 overflow-hidden grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="self-start inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white text-slate-700 border border-blue-100 px-3 py-1 rounded-full">
              <MapPin size={12} className="text-blue-600" /> Our Location
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Kolkata, India</h2>
            <p className="mt-2 text-[13px] sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Our team is based in Kolkata, and we work with businesses across India and globally.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-x-6 gap-y-2 text-[13px]">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600">
                <Mail size={14} className="text-blue-600" /> {EMAIL}
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600">
                <Phone size={14} className="text-blue-600" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <MapArt />
        </div>
      </section>
    </div>
  );
}
