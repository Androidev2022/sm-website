"use client";
// app/about/page.tsx  (header & footer come from app/layout.tsx)
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";
import {
  BrainCircuit,
  ChevronRight,
  Eye,
  Target,
  Rocket,
  TrendingUp,
  Crosshair,
  Lightbulb,
  Puzzle,
  Handshake,
  Award,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-heading", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

// ── Design tokens (from the About design) ───────────────────────────────────
const C = {
  heading: "#3D3C55",
  body: "#5B5F78",
  muted: "#7C8199",
  blue: "#3B82F6",
  blueDark: "#2F6FE4",
  starOff: "#C9D8F5",
  red: "#E5484D",
};

// ── Data ─────────────────────────────────────────────────────────────────────
type Stat = { value: number; prefix?: string; suffix: string; decimals?: number; label: string; rating: number };

const HERO_STATS = [
  { value: "10+", label: ["Years of", "Experience"] },
  { value: "475+", label: ["Projects", "Delivered"] },
];

const METRICS: Stat[] = [
  { value: 75, prefix: "$", suffix: "M +", label: "Revenue Generated", rating: 4.5 },
  { value: 350, suffix: " +", label: "Successful Projects", rating: 5 },
  { value: 100, suffix: " +", label: "Clients Worldwide", rating: 3.5 },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Client Satisfaction", rating: 4.5 },
];

const PILLARS = [
  { icon: BrainCircuit, title: "Data-Driven", text: "Lorem ipsum dolor sit amet consectetur. Et." },
  { icon: Eye, title: "Transparent", text: "Lorem ipsum dolor sit amet consectetur." },
  { icon: Target, title: "Result-Focused", text: "Lorem ipsum dolor sit amet consectetur." },
];

const JOURNEY = [
  { year: "2005", icon: Rocket, title: "Founded", text: "Lorem ipsum dolor sit amet consectetur. Fermentum sapien ac bibendum ac semper a. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus." },
  { year: "2010", icon: TrendingUp, title: "Growth Phase", text: "Lorem ipsum dolor sit amet consectetur. Quis nec sapien vestibulum molestie quam ac. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus. Fermentum sapien ac bibendum ac semper a." },
  { year: "2015", icon: Crosshair, title: "Global Reach", text: "Lorem ipsum dolor sit amet consectetur. Quis nec sapien vestibulum molestie quam ac. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus. Fermentum sapien ac bibendum ac semper a." },
  { year: "2026", icon: Lightbulb, title: "Continued Innovation", text: "Lorem ipsum dolor sit amet consectetur. Quis nec sapien vestibulum molestie quam ac. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus. Fermentum sapien ac bibendum ac semper a. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus." },
];

const VALUES = [
  { icon: Lightbulb, title: "Innovation" },
  { icon: Puzzle, title: "Integrity" },
  { icon: Handshake, title: "Collaboration" },
  { icon: Award, title: "Excellence" },
];
const VALUE_TEXT = "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.";

const TEAM = [
  { name: "Zane Sorell", role: "CEO", bio: "Enjoys adventurous travel, seeks new cultures and offbeat destinations", photo: "/about/team/zane-sorell.jpg" },
  { name: "Maya Mathy", role: "Founder", bio: "Pop music lover, seeks joy and exciting pop concerts", photo: "/about/team/maya-mathy.jpg" },
  { name: "Alexis Jensen", role: "CTO", bio: "Bookworm, creative software developer with precision", photo: "/about/team/alexis-jensen.jpg" },
  { name: "Keira Battye", role: "Product Designer", bio: "Creative painter capturing beauty with imaginative artwork", photo: "/about/team/keira-battye.jpg" },
  { name: "Dominic Game", role: "3D Artist", bio: "Football enthusiast, enjoys movie nights with friends", photo: "/about/team/dominic-game.jpg" },
];

const TESTIMONIALS = [
  { name: "Elizabeth", city: "Chicago" },
  { name: "Catherine", city: "New York" },
  { name: "Victoria", city: "Washington, DC" },
  { name: "Olivia", city: "Austin" },
  { name: "Sophia", city: "Seattle" },
  { name: "Amelia", city: "Boston" },
].map((t) => ({ ...t, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" }));

// ── Small pieces ─────────────────────────────────────────────────────────────
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold, rootMargin: "0px 0px -40px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`flex items-center gap-1.5 text-[13px] font-semibold tracking-wide uppercase ${center ? "justify-center" : ""}`} style={{ color: C.blue }}>
      <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: C.blue }} />
      {children}
    </p>
  );
}

function Stars({ rating, color = C.blue, off = C.starOff, size = 15 }: { rating: number; color?: string; off?: string; size?: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i)); // 0, 0.5 or 1
        const id = `s-${color.replace("#", "")}-${i}-${fill}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden>
            <defs>
              <linearGradient id={id}>
                <stop offset={`${fill * 100}%`} stopColor={color} />
                <stop offset={`${fill * 100}%`} stopColor={off} />
              </linearGradient>
            </defs>
            <path fill={`url(#${id})`} d="M12 2.5l2.94 6.1 6.56.9-4.8 4.6 1.2 6.6L12 17.6l-5.9 3.1 1.2-6.6-4.8-4.6 6.56-.9z" />
          </svg>
        );
      })}
    </div>
  );
}

function Counter({ s, start }: { s: Stat; start: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 1600, 1);
      setN(s.value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, s.value]);
  return (
    <>
      {s.prefix}
      {s.decimals ? n.toFixed(s.decimals) : Math.round(n)}
      {s.suffix}
    </>
  );
}

// Brand icons for team socials (lucide no longer ships brand logos)
const SocialIcon = ({ d, label }: { d: string; label: string }) => (
  <a href="#" aria-label={label} className="text-slate-400 hover:text-blue-500 transition-colors">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
  </a>
);
const ICONS = {
  facebook: "M12 2a10 10 0 0 0-1.56 19.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v7A10 10 0 0 0 12 2z",
  github: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z",
  linkedin: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67V9.75h2.67v8.59zM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.76h-2.67v-4.18c0-1 0-2.28-1.39-2.28s-1.6 1.09-1.6 2.21v4.25H10V9.75h2.56v1.17h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.09v4.72z",
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0);
  const metrics = useInView<HTMLDivElement>(0.3);
  const journey = useInView<HTMLDivElement>(0.2);

  // team slider
  const teamRef = useRef<HTMLDivElement>(null);
  const [teamProgress, setTeamProgress] = useState({ left: 0, width: 1 });

  // testimonials
  const pages = Math.ceil(TESTIMONIALS.length / 3);
  const [tPage, setTPage] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = teamRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth / el.scrollWidth;
      const l = el.scrollLeft / el.scrollWidth;
      setTeamProgress({ left: l, width: w });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTPage((p) => (p + 1) % pages), 6000);
    return () => clearInterval(t);
  }, [pages]);

  // magnetic buttons
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".magnetic");
    const move = (e: MouseEvent) => {
      const b = e.currentTarget as HTMLElement;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
    };
    const leave = (e: MouseEvent) => ((e.currentTarget as HTMLElement).style.transform = "translate(0,0)");
    els.forEach((el) => {
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
  }, []);

  const scrollProgress =
    typeof window !== "undefined" ? Math.min(scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1) : 0;

  const card = "bg-white rounded-[20px] shadow-[0_8px_30px_rgba(88,96,160,0.07)]";

  return (
    <div
      className={`${poppins.variable} ${inter.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-body), system-ui, sans-serif",
        color: C.body,
        backgroundColor: "#F3F4FC",
        backgroundImage: "url('/background.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      onClick={(e) => {
        const r = document.createElement("div");
        r.className = "ab-ripple";
        r.style.left = `${e.clientX}px`;
        r.style.top = `${e.clientY}px`;
        document.body.appendChild(r);
        setTimeout(() => r.remove(), 700);
      }}
    >
      <style>{`
        .font-heading{font-family:var(--font-heading),system-ui,sans-serif;}
        #ab-scroll-bar{position:fixed;top:0;left:0;height:3px;z-index:9999;background:linear-gradient(90deg,#3B82F6,#8B7CF6,#60a5fa);transition:width .05s linear;}
        .ab-ripple{position:fixed;border-radius:50%;pointer-events:none;z-index:9996;border:2px solid rgba(59,130,246,.5);animation:ab-rout .6s ease-out forwards;}
        @keyframes ab-rout{0%{width:8px;height:8px;opacity:1;margin:-4px;}100%{width:60px;height:60px;opacity:0;margin:-30px;}}
        @keyframes heroUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:none;}}
        .hero-a{animation:heroUp .8s cubic-bezier(.22,1,.36,1) .05s both;}
        .hero-b{animation:heroUp .8s cubic-bezier(.22,1,.36,1) .2s both;}
        .hero-c{animation:heroUp .8s cubic-bezier(.22,1,.36,1) .35s both;}
        .hero-d{animation:heroUp .8s cubic-bezier(.22,1,.36,1) .5s both;}
        @keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,.5);}50%{box-shadow:0 0 0 5px rgba(59,130,246,0);}}
        .pulse-dot{animation:pulse-dot 1.8s ease-in-out infinite;}
        .magnetic{transition:transform .4s cubic-bezier(.22,1,.36,1);}
        .lift{transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,background .3s;}
        .lift:hover{transform:translateY(-6px);box-shadow:0 18px 36px rgba(88,96,160,.14);}
        .img-zoom{transition:transform .8s cubic-bezier(.22,1,.36,1);}
        .img-zoom:hover{transform:scale(1.04);}
        .tl-line{transition:height 1.4s cubic-bezier(.22,1,.36,1);}
        .tl-item{opacity:0;transform:translateX(-20px);transition:opacity .5s ease,transform .5s cubic-bezier(.22,1,.36,1);}
        .tl-item.on{opacity:1;transform:none;}
        .team-row{scrollbar-width:none;}
        .team-row::-webkit-scrollbar{display:none;}
        .team-photo{transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .5s;}
        .team-card:hover .team-photo{transform:translateY(-6px);box-shadow:0 18px 40px rgba(88,96,160,.22);}
        @keyframes tIn{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:none;}}
        .t-in{animation:tIn .5s cubic-bezier(.22,1,.36,1) both;}
      `}</style>

      <div id="ab-scroll-bar" style={{ width: `${scrollProgress * 100}%` }} />

      {/* ── HERO + METRICS ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/about_header_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#F3F4FC]" />

        <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 pt-6 md:pt-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="font-medium text-slate-800" aria-current="page">About Us</span>
          </nav>

          <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="max-w-[560px]">
              <h1 className="hero-a font-heading font-semibold leading-[1.3] text-[32px] md:text-[44px]" style={{ color: C.heading }}>
                More Than a Team.
                <br />
                We&apos;re Your <span style={{ color: C.blue }}>Growth Partner.</span>
              </h1>
              <p className="hero-b mt-6 text-[15px] md:text-base leading-relaxed max-w-[440px]" style={{ color: "#2E3045" }}>
                We blend strategy creativity and technology to build digital ecosystems that drive measurable growth for global brands
              </p>
              <div className="hero-c mt-8 flex flex-wrap gap-4">
                <a
                  href="/case-studies"
                  className="magnetic inline-flex items-center rounded-md px-6 py-3 text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(59,130,246,0.35)] hover:brightness-110"
                  style={{ background: C.blue }}
                >
                  View Case Studies
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic inline-flex items-center rounded-md px-6 py-3 text-[15px] font-medium bg-white shadow-[0_6px_18px_rgba(88,96,160,0.12)] hover:text-blue-600"
                  style={{ color: C.heading }}
                >
                  Book a Strategy Call
                </a>
              </div>
            </div>

            <div className="hero-d flex md:flex-col gap-10 md:gap-12 md:pt-2 md:pr-0">
              {HERO_STATS.map((s) => (
                <div key={s.value}>
                  <p className="font-heading text-[26px] font-semibold leading-none text-[#1F2033]">{s.value}</p>
                  <p className="mt-1 text-[15px] leading-tight text-[#1F2033]">
                    {s.label[0]}
                    <br />
                    {s.label[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics card */}
        <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 pt-14 md:pt-24 pb-12">
          <div ref={metrics.ref} className={`${card} mx-auto max-w-[900px] px-6 md:px-10 pt-10 pb-8 bg-white/90 backdrop-blur`}>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className={`text-center py-4 md:py-2 ${i < METRICS.length - 1 ? "md:border-r border-slate-200" : ""}`}
                  style={{
                    opacity: metrics.inView ? 1 : 0,
                    transform: metrics.inView ? "none" : "translateY(16px)",
                    transition: `all .6s cubic-bezier(.22,1,.36,1) ${i * 110}ms`,
                  }}
                >
                  <p className="font-heading text-[30px] md:text-[34px] font-semibold leading-none" style={{ color: "#23243A" }}>
                    <Counter s={m} start={metrics.inView} />
                  </p>
                  <p className="mt-4 mb-3 text-[14px]" style={{ color: C.muted }}>{m.label}</p>
                  <Stars rating={m.rating} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-9">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic inline-flex rounded-md px-6 py-3 text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(59,130,246,0.35)] hover:brightness-110"
                style={{ background: C.blue }}
              >
                Get Your Custom Strategy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-10 pb-12">
        <Reveal>
          <div className={`${card} p-6 md:p-6 grid md:grid-cols-2 gap-8 items-center`}>
            <div className="md:pl-4">
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="font-heading mt-4 text-[28px] md:text-[34px] font-semibold leading-[1.35]" style={{ color: C.heading }}>
                We Build Digital Solutions
                <br />
                That Create Real Impact
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed max-w-[440px]" style={{ color: C.body }}>
                Our mission is simple - empower businesses with data - driven strategies, innovative designs and Flawless execution.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {PILLARS.map((p) => (
                  <div key={p.title} className="flex items-start gap-2.5">
                    <p.icon size={26} strokeWidth={1.4} className="shrink-0 mt-0.5" style={{ color: C.blue }} />
                    <div>
                      <p className="text-[14px] font-semibold" style={{ color: C.heading }}>{p.title}</p>
                      <p className="text-[12px] leading-snug" style={{ color: C.blueDark }}>{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] md:aspect-auto md:h-[300px] bg-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mask_group.png" alt="Our office workspace" className="img-zoom w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── JOURNEY + VALUES ─────────────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-10 pb-20 grid lg:grid-cols-2 gap-8 items-stretch">
        <Reveal className="h-full">
          <div ref={journey.ref} className={`${card} p-6 md:p-8 h-full`}>
            <Eyebrow>Our Journey</Eyebrow>
            <div className="relative mt-7">
              {/* line */}
              <div className="absolute left-[17px] top-3 bottom-10 w-[3px] rounded bg-blue-100 overflow-hidden">
                <div className="tl-line w-full rounded" style={{ height: journey.inView ? "100%" : "0%", background: C.blue }} />
              </div>
              <div className="space-y-6">
                {JOURNEY.map((j, i) => (
                  <div
                    key={j.year}
                    className={`tl-item ${journey.inView ? "on" : ""} grid grid-cols-[36px_1fr] sm:grid-cols-[36px_56px_1fr] gap-x-3 gap-y-1 sm:gap-3 items-start`}
                    style={{ transitionDelay: `${300 + i * 250}ms` }}
                  >
                    <span
                      className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white ring-4 ring-blue-100"
                      style={{ background: C.blue }}
                    >
                      <j.icon size={16} />
                    </span>
                    <p className="font-heading pt-1.5 text-[15px] font-semibold" style={{ color: "#1F2033" }}>{j.year}</p>
                    <div className="col-start-2 sm:col-start-auto">
                      <p className="text-[15px] font-semibold" style={{ color: "#1F2033" }}>{j.title}</p>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#2E3045]">{j.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div className={`${card} p-6 md:p-8 h-full`}>
            <Eyebrow>Our Values</Eyebrow>
            <div className="mt-7 grid sm:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <div key={v.title} className="lift rounded-xl p-5 flex gap-3 bg-[#F1F5FF]">
                  <v.icon size={26} strokeWidth={1.4} className="shrink-0" style={{ color: C.blue }} />
                  <div>
                    <p className="text-[15px] font-semibold" style={{ color: C.heading }}>{v.title}</p>
                    <p className="mt-1 text-[12.5px] leading-snug" style={{ color: C.muted }}>{VALUE_TEXT}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-10 pb-20">
        <Reveal className="text-center">
          <Eyebrow center>Meet the Team</Eyebrow>
          <h2 className="font-heading mt-3 text-[28px] md:text-[34px] font-semibold" style={{ color: C.heading }}>
            The People Behind <span style={{ color: C.blue }}>Your Growth</span>
          </h2>
        </Reveal>

        <div ref={teamRef} className="team-row mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 90} className="team-card snap-start shrink-0 w-[70%] sm:w-[42%] md:w-[30%] lg:w-[calc((100%-96px)/5)] text-center">
              <div className="team-photo mx-auto w-full max-w-[200px] aspect-square rounded-full overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-heading mt-5 text-[17px] font-semibold" style={{ color: C.heading }}>{m.name}</p>
              <p className="mt-1 text-[14px]" style={{ color: C.blue }}>{m.role}</p>
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: C.muted }}>{m.bio}</p>
              <div className="mt-4 flex justify-center gap-4">
                <SocialIcon d={ICONS.facebook} label={`${m.name} on Facebook`} />
                <SocialIcon d={ICONS.github} label={`${m.name} on GitHub`} />
                <SocialIcon d={ICONS.linkedin} label={`${m.name} on LinkedIn`} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* slider indicator */}
        <div className="relative mx-auto mt-10 h-[3px] w-[120px] rounded bg-slate-200">
          <div
            className="absolute top-0 h-full rounded transition-all duration-300"
            style={{ background: C.blue, left: `${teamProgress.left * 100}%`, width: `${Math.max(teamProgress.width, 0.2) * 100}%` }}
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-10 pb-24">
        <Reveal className="text-center">
          <h2 className="font-heading text-[28px] md:text-[34px] font-semibold" style={{ color: C.heading }}>
            Trusted by <span style={{ color: C.blue }}>Clients</span>
          </h2>
        </Reveal>

        <div key={tPage} className="mt-12 grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {TESTIMONIALS.slice(tPage * 3, tPage * 3 + 3).map((t, i) => (
            <div key={t.name} className={`t-in lift ${card} p-6 pb-8`} style={{ animationDelay: `${i * 90}ms` }}>
              <div className="flex">
                <Stars rating={5} color={C.red} off="#F5C2C3" size={14} />
              </div>
              <p className="mt-6 text-[14px] leading-relaxed" style={{ color: C.muted }}>{t.text}</p>
              <p className="mt-8 text-[13px] font-semibold text-[#1F2033]">{t.name}</p>
              <p className="text-[10px] text-slate-400">{t.city}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonials page ${i + 1}`}
              onClick={() => setTPage(i)}
              className="h-[3px] w-14 rounded transition-colors"
              style={{ background: i === tPage ? C.blue : "#D9DEEA" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
