"use client";

import React, { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

// ── Types ────────────────────────────────────────────────────────────────────
interface StatItem { value: string; label: string; }
interface MissionPillar { icon: React.ReactNode; title: string; description: string; }
interface JourneyItem { year: string; title: string; description: string; }
interface ValueItem { icon: React.ReactNode; title: string; description: string; }

// ── SVG Icons ────────────────────────────────────────────────────────────────
const DataDrivenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" stroke="#4A90D9" strokeWidth="1.5" />
    <path d="M8 22l5-6 4 3 5-8" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InnovationIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" fill="#EEF4FF" stroke="#4A90D9" strokeWidth="1" />
    <path d="M20 10v3M20 27v3M10 20h3M27 20h3" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="20" r="5" fill="#4A90D9" opacity="0.3" />
    <circle cx="20" cy="20" r="2.5" fill="#4A90D9" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const HERO_STATS: StatItem[] = [
  { value: "10+", label: "Years of Experience" },
  { value: "475+", label: "Projects Delivered" },
];

const METRICS: StatItem[] = [
  { value: "$75M+", label: "Revenue Generated" },
  { value: "350+", label: "Successful Projects" },
  { value: "100+", label: "Clients Worldwide" },
  { value: "4.9", label: "Client Satisfaction" },
];

const MISSION_PILLARS: MissionPillar[] = [
  { icon: <DataDrivenIcon />, title: "Data-Driven", description: "Decisions backed by real insights" },
  { icon: <DataDrivenIcon />, title: "Creative", description: "Design that converts and captivates" },
  { icon: <DataDrivenIcon />, title: "Scalable", description: "Growth systems built to last" },
];

const JOURNEY: JourneyItem[] = [
  { year: "2005", title: "Founded", description: "Lorem ipsum dolor sit amet consectetur. Fermentum sapien ac bibendum ac semper a. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus." },
  { year: "2010", title: "Growth Phase", description: "Lorem ipsum dolor sit amet consectetur. Quis nec sapien vestibulum molestie quam ac. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus." },
  { year: "2015", title: "Global Reach", description: "Lorem ipsum dolor sit amet consectetur. Quis nec sapien vestibulum molestie quam ac. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus." },
  { year: "2026", title: "Continued Innovation", description: "Lorem ipsum dolor sit amet consectetur. Quis nec sapien vestibulum molestie quam ac. Rutrum netus odio blandit erat facilisi. Adipiscing vivamus." },
];

const VALUES: ValueItem[] = [
  { icon: <InnovationIcon />, title: "Innovation", description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." },
  { icon: <InnovationIcon />, title: "Integrity", description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." },
  { icon: <InnovationIcon />, title: "Impact", description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." },
  { icon: <InnovationIcon />, title: "Excellence", description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." },
];

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return count;
}

// ── Star row ─────────────────────────────────────────────────────────────────
const StarRow = ({ filled = 4 }: { filled?: number }) => (
  <div style={{ display: "flex", gap: 2, justifyContent: "center", marginTop: 6 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < filled ? "#4A90D9" : "#C5D8F0"}>
        <path d="M7 1l1.5 4h4l-3.3 2.4 1.3 4L7 9 3.5 11.4l1.3-4L1.5 5h4z" />
      </svg>
    ))}
  </div>
);

// ── Metric card with animated counter ────────────────────────────────────────
function MetricCard({ m, delay }: { m: StatItem; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isDecimal = m.value.includes(".");
  const raw = parseFloat(m.value.replace(/[^0-9.]/g, ""));
  const prefix = m.value.startsWith("$") ? "$" : "";
  const suffix = m.value.endsWith("+") ? "+" : m.value.endsWith("/5") ? "/5" : "";
  const counted = useCounter(isDecimal ? Math.floor(raw * 10) : raw, 1800, visible);
  const display = isDecimal ? (counted / 10).toFixed(1) : counted;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="metric-card" style={{ textAlign: "center", animationDelay: `${delay}ms` }}>
      <div style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: "#1e293b", lineHeight: 1 }}>
        {prefix}{display}{suffix}
      </div>
      <div style={{ fontSize: 12, color: "#64748b", margin: "6px 0 4px" }}>{m.label}</div>
      <StarRow filled={4} />
    </div>
  );
}

// ── Tilt card ─────────────────────────────────────────────────────────────────
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -14;
    el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    el.style.boxShadow = `${-x * 1.5}px ${y * 1.5}px 40px rgba(103,119,173,0.18)`;
  };
  const handleLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateY(0)";
    el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
  };
  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease", ...style }}>
      {children}
    </div>
  );
}

// ── Reveal wrapper ────────────────────────────────────────────────────────────
function Reveal({ children, dir = "up", delay = 0 }: { children: React.ReactNode; dir?: "up" | "left" | "right" | "scale"; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const initial: Record<string, string> = {
    up: "translateY(32px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
    scale: "scale(0.88)",
  };

  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : initial[dir],
      transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const journeyRef = useRef<HTMLDivElement>(null);
  const [activeJourney, setActiveJourney] = useState(-1);

  // Magnetic buttons
  useEffect(() => {
    const magneticEls = document.querySelectorAll(".magnetic");
    const onMove = (e: Event) => {
      const me = e as MouseEvent;
      const btn = me.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const dx = me.clientX - (rect.left + rect.width / 2);
      const dy = me.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate(${dx * 0.35}px,${dy * 0.35}px) scale(1.06)`;
    };
    const onLeave = (e: Event) => {
      (e.currentTarget as HTMLElement).style.transform = "translate(0,0) scale(1)";
    };
    magneticEls.forEach(el => { el.addEventListener("mousemove", onMove); el.addEventListener("mouseleave", onLeave); });
    return () => magneticEls.forEach(el => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); });
  }, []);

  // Scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Journey timeline entrance
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setJourneyVisible(true); }, { threshold: 0.1 });
    if (journeyRef.current) obs.observe(journeyRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!journeyVisible) return;
    JOURNEY.forEach((_, i) => setTimeout(() => setActiveJourney(i), i * 350 + 200));
  }, [journeyVisible]);

  const scrollProgress = typeof window !== "undefined"
    ? Math.min(scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1) : 0;

  const parallaxY = scrollY * 0.28;

  return (
    <>
      <style>{`

        #ab-scroll-bar{position:fixed;top:0;left:0;height:3px;z-index:9999;background:linear-gradient(90deg,#6777AD,#a78bfa,#60a5fa);transition:width .05s linear;box-shadow:0 0 10px rgba(103,119,173,0.7);}
        .ab-ripple{position:fixed;border-radius:50%;pointer-events:none;z-index:9996;background:transparent;border:2px solid rgba(103,119,173,0.6);animation:ab-rout .6s ease-out forwards;}
        @keyframes ab-rout{0%{width:8px;height:8px;opacity:1;margin:-4px;}100%{width:60px;height:60px;opacity:0;margin:-30px;}}

        /* Header */
        @keyframes navSlide{from{transform:translateY(-100%);opacity:0;}to{transform:translateY(0);opacity:1;}}
        .ab-header{animation:navSlide .6s cubic-bezier(.22,1,.36,1) both;}
        .ab-nav-link{color:#404359;font-family:'DM Sans',sans-serif;text-decoration:none;position:relative;font-size:15px;font-weight:500;}
        .ab-nav-link::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:#3b82f6;transition:width .3s ease;}
        .ab-nav-link:hover{color:#2563eb;}.ab-nav-link:hover::after{width:100%;}
        .ab-nav-link.active{color:#2563EB!important;font-weight:700;}.ab-nav-link.active::after{width:100%;background:#2563EB;}
        .ab-cta-btn{background-image:url('/btn_bg.png');background-size:cover;background-position:center;background-repeat:no-repeat;color:#fff;border:none;border-radius:8px;padding:10px 24px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;letter-spacing:.3px;cursor:pointer;white-space:nowrap;}

        /* Hero */
        @keyframes heroUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:translateY(0);}}
        .hero-h1{animation:heroUp .9s cubic-bezier(.22,1,.36,1) .1s both;}
        .hero-p{animation:heroUp .9s cubic-bezier(.22,1,.36,1) .28s both;}
        .hero-btns{animation:heroUp .9s cubic-bezier(.22,1,.36,1) .44s both;}
        .hero-stat{animation:heroUp .9s cubic-bezier(.22,1,.36,1) .2s both;}

        /* Particles */
        @keyframes float-p{0%,100%{transform:translateY(0) translateX(0) scale(1);opacity:.6;}33%{transform:translateY(-20px) translateX(10px) scale(1.1);opacity:.9;}66%{transform:translateY(-10px) translateX(-8px) scale(.95);opacity:.7;}}
        .particle{position:absolute;border-radius:50%;pointer-events:none;animation:float-p linear infinite;}

        /* Mesh blobs */
        @keyframes mesh-pulse{0%,100%{opacity:.4;transform:scale(1);}50%{opacity:.65;transform:scale(1.05);}}
        .mesh-blob{animation:mesh-pulse ease-in-out infinite;position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;}

        /* Metric cards */
        @keyframes metricPop{0%{opacity:0;transform:scale(.7) translateY(20px);}60%{transform:scale(1.06) translateY(-4px);}100%{opacity:1;transform:scale(1) translateY(0);}}
        .metric-card{animation:metricPop .6s cubic-bezier(.22,1,.36,1) both;}

        /* Timeline */
        .timeline-fill{transition:height 1.4s cubic-bezier(.22,1,.36,1);}
        .tl-item{opacity:0;transform:translateX(-24px);transition:opacity .5s ease,transform .5s cubic-bezier(.22,1,.36,1);}
        .tl-item.active{opacity:1;transform:translateX(0);}
        .tl-dot{width:18px;height:18px;border-radius:50%;background:#C5D8F0;border:3px solid #fff;box-shadow:0 0 0 2px #4A90D9;flex-shrink:0;transition:background .4s,box-shadow .4s,transform .4s;}
        .tl-dot.active{background:#4A90D9!important;box-shadow:0 0 0 6px rgba(74,144,217,.22)!important;transform:scale(1.3);}

        /* Year glow */
        @keyframes yearGlow{0%,100%{text-shadow:0 0 0 transparent;}50%{text-shadow:0 0 14px rgba(37,99,235,.55);}}
        .year-active{animation:yearGlow 2s ease-in-out infinite;}

        /* Value cards */
        .value-card{transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s ease,background .3s;}
        .value-card:hover{transform:translateY(-8px) scale(1.03)!important;box-shadow:0 20px 40px rgba(103,119,173,.22)!important;background:#EEF4FF!important;}

        /* Shimmer */
        .shimmer-btn{position:relative;overflow:hidden;}
        .shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer 2.8s ease-in-out infinite;}
        @keyframes shimmer{0%{left:-100%}60%,100%{left:160%}}

        /* Magnetic */
        .magnetic{transition:transform .45s cubic-bezier(.22,1,.36,1);display:inline-block;}

        /* Pulse dot */
        @keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(37,99,235,.5);}50%{box-shadow:0 0 0 6px rgba(37,99,235,0);}}
        .pulse-dot{animation:pulse-dot 1.8s ease-in-out infinite;}

        /* Image hover zoom */
        .img-zoom{transition:transform .6s ease;}
        .img-zoom:hover{transform:scale(1.05);}

        /* Hover lift buttons */
        .lift-btn{transition:transform .2s,box-shadow .2s;}
        .lift-btn:hover{transform:translateY(-3px) scale(1.04);}

        /* CTA gradient card */
        @keyframes glassIn{from{opacity:0;transform:translateY(40px) scale(.96);}to{opacity:1;transform:translateY(0) scale(1);}}
        .glass-in{animation:glassIn .8s cubic-bezier(.22,1,.36,1) both;}

        /* Heading reveal line */
        .h-line{display:inline-block;position:relative;}
        .h-line::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:#6777AD;transition:width .7s cubic-bezier(.22,1,.36,1) .3s;}
        .h-line-vis::after{width:100%;}
      `}</style>

      {/* Scroll progress */}
      <div id="ab-scroll-bar" style={{ width: `${scrollProgress * 100}%` }} />

      <div
        style={{
          fontFamily: "'Segoe UI',system-ui,sans-serif",
          minHeight: "100vh",
          color: "#1e293b",
          backgroundImage: "url('/background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
        onClick={e => {
          const r = document.createElement("div");
          r.className = "ab-ripple";
          r.style.left = `${e.clientX}px`; r.style.top = `${e.clientY}px`;
          document.body.appendChild(r);
          setTimeout(() => r.remove(), 700);
        }}
      >

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", minHeight: 360, paddingTop: 60, paddingBottom: 40, overflow: "hidden" }}>
          {/* Background image — full clarity, no parallax shift */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/about_header_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            imageRendering: "auto",
            zIndex: 0,
          }} />
          {/* Minimal overlay — only a thin fade on far-left so text stays readable */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(240,245,255,0.45) 0%, rgba(235,242,255,0.18) 35%, rgba(220,232,255,0.0) 65%)",
            zIndex: 1,
          }} />

          {/* Animated mesh blobs */}
          <div className="mesh-blob" style={{ width: 320, height: 320, background: "rgba(103,119,173,0.11)", top: -90, right: "8%", animationDuration: "7s" }} />
          <div className="mesh-blob" style={{ width: 200, height: 200, background: "rgba(96,165,250,0.09)", top: 50, right: "26%", animationDuration: "9s", animationDelay: "2s" }} />
          <div className="mesh-blob" style={{ width: 150, height: 150, background: "rgba(167,139,250,0.08)", bottom: 20, left: "10%", animationDuration: "11s", animationDelay: "1s" }} />

          {/* Floating particles */}
          {[...Array(14)].map((_, i) => (
            <div key={i} className="particle" style={{
              width: `${4 + (i % 4) * 2}px`, height: `${4 + (i % 4) * 2}px`,
              background: `rgba(103,119,173,${0.12 + (i % 5) * 0.07})`,
              top: `${8 + (i * 7) % 82}%`, left: `${4 + (i * 11) % 92}%`,
              animationDuration: `${5 + (i % 4) * 2}s`, animationDelay: `${i * 0.35}s`,
            }} />
          ))}

          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 32 }}>
            <div style={{ maxWidth: 520 }}>
              <h1 className="hero-h1" style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.15, color: "#1e293b", margin: "0 0 8px" }}>
                More Than a Team.<br />
                We&apos;re Your <span style={{ color: "#2563EB" }}>Growth Partner.</span>
              </h1>
              <p className="hero-p" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: "0 0 24px", maxWidth: 400 }}>
                We blend strategy, creativity and technology to build digital ecosystems that drive measurable growth for global brands.
              </p>
              <div className="hero-btns" style={{ display: "flex", gap: 12 }}>
                <a href="/case-studies" className="magnetic shimmer-btn lift-btn" style={{ background: "#2563EB", color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>
                  View Case Studies
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="magnetic lift-btn" style={{ background: "transparent", color: "#2563EB", border: "2px solid #2563EB", borderRadius: 8, padding: "11px 24px", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "background .2s,color .2s,transform .2s,box-shadow .2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#2563EB"; el.style.color = "#fff"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "#2563EB"; }}>
                  Connect With Us
                </a>
              </div>
            </div>
            <div className="hero-stat" style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 140 }}>
              {HERO_STATS.map((s, i) => (
                <div key={s.value} style={{ textAlign: "right", animationDelay: `${i * 0.15}s` }}>
                  <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1, background: "linear-gradient(135deg,#1e293b,#4A90D9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.4, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METRICS CARD ─────────────────────────────────────────────────── */}
        <section style={{ padding: "0 40px 40px", maxWidth: 1200, margin: "0 auto" }}>
          <TiltCard style={{ background: "#fff", borderRadius: 20, padding: "40px 48px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginBottom: 32 }}>
              {METRICS.map((m, i) => <MetricCard key={m.label} m={m} delay={i * 120} />)}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="magnetic shimmer-btn lift-btn" style={{ background: "linear-gradient(135deg,#4A90D9,#2563EB)", color: "#fff", border: "none", borderRadius: 10, padding: "14px 36px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 6px 18px rgba(74,144,217,0.35)" }}>
                Get Your Custom Strategy
              </button>
            </div>
          </TiltCard>
        </section>

        {/* ── MISSION ──────────────────────────────────────────────────────── */}
        <section style={{ padding: "0 40px 40px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <Reveal dir="left">
              <TiltCard style={{ background: "#fff", borderRadius: 20, padding: "48px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                  <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563EB" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: 1.5, textTransform: "uppercase" as const }}>OUR MISSION</span>
                </div>
                <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 800, lineHeight: 1.2, color: "#1e293b", margin: "0 0 16px" }}>
                  We Build Digital Solutions<br />That Create Real Impact
                </h2>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75, marginBottom: 28 }}>
                  Our mission is simple – empower businesses with data-driven strategies, innovative designs and flawless execution.
                </p>
                <div style={{ display: "flex", gap: 16 }}>
                  {MISSION_PILLARS.map((p, i) => (
                    <div key={i} className="value-card" style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 10px", borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0", flex: 1 }}>
                      {p.icon}
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#1e293b" }}>{p.title}</div>
                        <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>{p.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </Reveal>

            <Reveal dir="right" delay={120}>
              <div style={{ borderRadius: 20, overflow: "hidden", height: "100%", minHeight: 300, background: "#e2e8f0", position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mask_group.png" alt="Our office workspace" className="img-zoom"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                {/* Floating badge */}
                <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 14, padding: "12px 18px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", animation: "heroUp .9s cubic-bezier(.22,1,.36,1) .6s both" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#2563EB", lineHeight: 1 }}>10+</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>Years of Excellence</div>
                </div>
                <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 14, padding: "12px 18px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", animation: "heroUp .9s cubic-bezier(.22,1,.36,1) .75s both" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#10b981", lineHeight: 1 }}>100+</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>Clients Worldwide</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── JOURNEY + VALUES ─────────────────────────────────────────────── */}
        <section style={{ padding: "0 40px 60px", maxWidth: 1200, margin: "0 auto" }}>
          <TiltCard style={{ background: "#fff", borderRadius: 20, padding: "48px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

              {/* Journey */}
              <div ref={journeyRef}>
                <Reveal>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 28 }}>
                    <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563EB" }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: 1.5, textTransform: "uppercase" as const }}>OUR JOURNEY</span>
                  </div>
                </Reveal>
                <div style={{ position: "relative" }}>
                  {/* Animated filling line */}
                  <div style={{ position: "absolute", left: 8, top: 18, bottom: 18, width: 2, background: "#E2EAF4", overflow: "hidden" }}>
                    <div className="timeline-fill" style={{
                      width: "100%", background: "linear-gradient(180deg,#4A90D9,#a78bfa,#60a5fa)",
                      height: journeyVisible ? "100%" : "0%",
                    }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    {JOURNEY.map((item, i) => (
                      <div key={item.year} className={`tl-item${activeJourney >= i ? " active" : ""}`}
                        style={{ display: "flex", gap: 20, alignItems: "flex-start", transitionDelay: `${i * 0.1}s` }}>
                        <div style={{ minWidth: 18, marginTop: 2 }}>
                          <div className={`tl-dot${activeJourney >= i ? " active" : ""}`} />
                        </div>
                        <div>
                          <div className={activeJourney >= i ? "year-active" : ""} style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", marginBottom: 2 }}>{item.year}</div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>{item.title}</div>
                          <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Values */}
              <div>
                <Reveal delay={100}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 28 }}>
                    <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563EB" }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: 1.5, textTransform: "uppercase" as const }}>OUR VALUES</span>
                  </div>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {VALUES.map((v, i) => (
                    <Reveal key={i} delay={i * 100}>
                      <div className="value-card" style={{ padding: "20px 16px", borderRadius: 14, background: "#f8fafc", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", height: "100%" }}>
                        <div style={{ marginBottom: 10 }}>{v.icon}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 6 }}>{v.title}</div>
                        <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{v.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

            </div>
          </TiltCard>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
        <section style={{ padding: "0 40px 70px", maxWidth: 1200, margin: "0 auto" }}>
          <Reveal dir="scale">
            <div className="glass-in" style={{
              position: "relative", overflow: "hidden",
              background: "linear-gradient(135deg,#1e293b 0%,#2563EB 55%,#4A90D9 100%)",
              borderRadius: 24, padding: "64px 48px", textAlign: "center",
            }}>
              {/* Animated blobs */}
              <div className="mesh-blob" style={{ width: 300, height: 300, background: "rgba(255,255,255,0.07)", top: -90, right: -60, animationDuration: "8s" }} />
              <div className="mesh-blob" style={{ width: 200, height: 200, background: "rgba(255,255,255,0.05)", bottom: -60, left: -40, animationDuration: "10s", animationDelay: "3s" }} />
              <div className="mesh-blob" style={{ width: 120, height: 120, background: "rgba(167,139,250,0.1)", top: "30%", left: "20%", animationDuration: "6s", animationDelay: "1s" }} />
              {/* Mini particles */}
              {[...Array(10)].map((_, i) => (
                <div key={i} className="particle" style={{ width: `${3 + i % 3}px`, height: `${3 + i % 3}px`, background: "rgba(255,255,255,0.35)", top: `${15 + (i * 9) % 70}%`, left: `${6 + (i * 13) % 86}%`, animationDuration: `${4 + i % 3}s`, animationDelay: `${i * 0.4}s` }} />
              ))}
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>
                  Ready to Scale Your<br />Digital Growth?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.7 }}>
                  Get a custom strategy tailored for your business goals.
                </p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="magnetic shimmer-btn lift-btn" style={{ background: "#fff", color: "#2563EB", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}>
                    Connect With Us
                  </a>
                  <a href="/case-studies" className="magnetic lift-btn" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.55)", borderRadius: 10, padding: "14px 32px", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "border-color .2s,transform .2s,box-shadow .2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.55)"; }}>
                    View Case Studies →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}