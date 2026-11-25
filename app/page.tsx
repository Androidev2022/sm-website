"use client";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Search,
  Compass,
  Hammer,
  Rocket,
  LineChart,
  Palette,
  Code2,
  Cloud,
  Megaphone,
  BarChart3,
  ShoppingCart,
  Utensils,
  Building2,
  Factory,
  Layers,
  HeartPulse,
  Star,
} from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // ─── Number counter animation ─────────────────────────────────────────────
  useEffect(() => {
    const parseValue = (raw: string) => {
      const match = raw.match(/^([^0-9]*)([0-9]+\.?[0-9]*)([^0-9]*)$/);
      if (!match) return null;
      return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
    };

    const animateCounter = (el: HTMLElement) => {
      const raw = el.getAttribute("data-target") || "";
      const parsed = parseValue(raw);
      if (!parsed) return;
      const { prefix, number, suffix } = parsed;
      const duration = 1600;
      const startTime = performance.now();
      const isDecimal = number % 1 !== 0;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * number;
        el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = raw;
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (el.getAttribute("data-counted") === "false") {
              el.setAttribute("data-counted", "true");
              animateCounter(el);
            }
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("[data-target]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ─── Content ───────────────────────────────────────────────────────────────
  const stats = [
    { icon: LineChart, value: "$75M+", label: "Revenue Influenced" },
    { icon: BarChart3, value: "350+", label: "Successful Projects" },
    { icon: Layers, value: "100+", label: "Clients Worldwide" },
    { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
    { icon: Rocket, value: "10+", label: "Years of Experience" },
  ];

  const brands = [
    { name: "Tefal", logo: "/logos/tefal.png" },
    { name: "Del Monte", logo: "/logos/delmonte.png" },
    { name: "Maharaja Whiteline", logo: "/logos/maharaja.png" },
    { name: "Ayana Properties", logo: "/logos/ayana.png" },
    { name: "LMHI", logo: "/logos/lmhi.webp" },
    { name: "CRB", logo: "/logos/crb.png" },
    { name: "Tata Innoverse", logo: "/logos/tata-innoverse.png" },
    { name: "Indo-German Chamber of Commerce", logo: "/logos/igcc.png" },
  ];

  const caseStudies = [
    {
      tag: "E-COMMERCE",
      tagColor: "#1E293B",
      name: "Tefal India",
      desc: "Reimagining the digital commerce experience with seamless journeys and double-digit conversion growth.",
      gradient: "linear-gradient(135deg,#1f2937,#0f172a)",
    },
    {
      tag: "FMCG",
      tagColor: "#166534",
      name: "Del Monte Foods",
      desc: "Unified digital platform improving engagement and driving consistent business growth.",
      gradient: "linear-gradient(135deg,#166534,#14532d)",
    },
    {
      tag: "REAL ESTATE",
      tagColor: "#1D4ED8",
      name: "Ayana Properties",
      desc: "High-performance website that generates quality leads and strengthens brand presence.",
      gradient: "linear-gradient(135deg,#1e3a8a,#0c4a6e)",
    },
  ];

  const services = [
    { icon: Compass, title: "Digital Strategy", desc: "Market intelligence and roadmaps that align with business goals." },
    { icon: Palette, title: "Experience Design", desc: "User-centric design that creates meaningful and engaging experiences." },
    { icon: Code2, title: "Web & App Development", desc: "Scalable, secure and performance-driven digital platforms." },
    { icon: Cloud, title: "Cloud & Infrastructure", desc: "Reliable cloud solutions that scale with your business." },
    { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven marketing that drives traffic, leads and revenue." },
    { icon: BarChart3, title: "Analytics & Growth", desc: "Insights and optimization to continuously improve performance." },
  ];

  const techStack = [
    { title: "Experience", items: ["React", "Next.js", "WordPress", "Shopify", "WooCommerce"] },
    { title: "Engineering", items: ["Node.js", "Laravel", "APIs & Integrations", "Mobile Development", "Headless CMS"] },
    { title: "Cloud & Infrastructure", items: ["AWS", "Linode", "Cloudflare", "DevOps", "Security & Backup"] },
    { title: "Data & Growth", items: ["GA4", "GTM", "SEO", "CRO", "Analytics"] },
  ];

  const processSteps = [
    { num: "01", icon: Search, title: "Diagnose", desc: "We study your business, audience and market to find growth gaps." },
    { num: "02", icon: Compass, title: "Architect", desc: "We design the right strategy, user experience and technology stack." },
    { num: "03", icon: Hammer, title: "Build", desc: "We develop, test and launch high-performance digital solutions." },
    { num: "04", icon: Rocket, title: "Scale", desc: "We optimize, automate and scale for continuous growth." },
  ];

  const industries = [
    { icon: ShoppingCart, title: "E-Commerce", desc: "Digital commerce platforms that convert and scale." },
    { icon: Utensils, title: "FMCG & Consumer", desc: "Building strong brands with digital experiences." },
    { icon: Building2, title: "Real Estate", desc: "Lead generation platforms that drive sales." },
    { icon: Factory, title: "Manufacturing", desc: "Industrial solutions with IoT & process integration." },
    { icon: Layers, title: "SaaS & Technology", desc: "Scalable platforms for modern SaaS businesses." },
    { icon: HeartPulse, title: "Healthcare", desc: "Secure, compliant and patient-centric digital solutions." },
  ];

  const testimonials = [
    {
      name: "Pierre Da Silva",
      role: "Digital Director, Tefal",
      company: "Tefal",
      avatar: "/avatars/pierre.jpg",
      logo: "/logos/tefal.png",
      text: "SM Solutions transformed our digital ecosystem completely. Their strategic approach and execution excellence helped us scale our business globally.",
    },
    {
      name: "Vikram K.",
      role: "Head of Marketing, Maharaja Whiteline",
      company: "Maharaja Whiteline",
      avatar: "/avatars/vikram.jpg",
      logo: "/logos/maharaja.png",
      text: "Their team is proactive, reliable and results-driven. They truly care about our growth as much as we do.",
    },
    {
      name: "Anita R.",
      role: "Marketing Head, Del Monte",
      company: "Del Monte",
      avatar: "/avatars/anita.jpg",
      logo: "/logos/delmonte.png",
      text: "A dependable partner that delivered a unified platform on time and kept improving engagement quarter after quarter.",
    },
  ];

  useEffect(() => {
    const magneticEls = document.querySelectorAll(".magnetic");
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const btn = mouseEvent.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const distX = mouseEvent.clientX - btnCenterX;
      const distY = mouseEvent.clientY - btnCenterY;
      const strength = 0.3;
      btn.style.transform = `translate(${distX * strength}px, ${distY * strength}px) scale(1.04)`;
      btn.style.transition = "transform 0.15s cubic-bezier(.22,1,.36,1)";
    };
    const handleMouseLeave = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      btn.style.transform = "translate(0px, 0px) scale(1)";
      btn.style.transition = "transform 0.45s cubic-bezier(.22,1,.36,1)";
    };
    magneticEls.forEach((el) => {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      magneticEls.forEach((el) => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const scrollProgress =
    typeof window !== "undefined"
      ? Math.min(scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1)
      : 0;

  return (
    <>
      <style>{`
        body { background: #F7F9FC; }

        #scroll-bar {
          position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
          background: linear-gradient(90deg, #2563EB, #6777AD, #60a5fa);
          transition: width 0.05s linear;
        }

        .ripple {
          position: fixed; border-radius: 50%; pointer-events: none; z-index: 9996;
          border: 2px solid rgba(37,99,235,0.5); animation: ripple-out 0.6s ease-out forwards;
        }
        @keyframes ripple-out { 0% { width:8px;height:8px;opacity:1;margin:-4px;} 100% { width:60px;height:60px;opacity:0;margin:-30px;} }

        .reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal.delay-1 { transition-delay: .08s; } .reveal.delay-2 { transition-delay: .16s; }
        .reveal.delay-3 { transition-delay: .24s; } .reveal.delay-4 { transition-delay: .32s; }
        .reveal.delay-5 { transition-delay: .4s; } .reveal.delay-6 { transition-delay: .48s; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        @keyframes fadeSlideUp { from { opacity:0; transform: translateY(24px);} to { opacity:1; transform: translateY(0);} }
        .hero-eyebrow { animation: fadeSlideUp .7s cubic-bezier(.22,1,.36,1) 0s both; }
        .hero-title   { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .1s both; }
        .hero-sub     { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .22s both; }
        .hero-btns    { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .34s both; }
        .hero-tags    { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .44s both; }
        .hero-engine  { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .54s both; }
        .hero-visual  { animation: fadeSlideUp .9s cubic-bezier(.22,1,.36,1) .2s both; }

        .magnetic { display: inline-flex; align-items: center; white-space: nowrap; transition: transform .45s cubic-bezier(.22,1,.36,1); }

        .card-hover { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 18px 36px rgba(37,99,235,0.14); }

        @keyframes float-up-down { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-10px);} }
        .float-card { animation: float-up-down 4s ease-in-out infinite; }
        .float-card.d2 { animation-delay: .8s; }
        .float-card.d3 { animation-delay: 1.6s; }

        @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .globe-spin { animation: spin-slow 60s linear infinite; }

        header { backdrop-filter: blur(10px); }
        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -6px; left: 0; width: 0; height: 2px; background: #2563EB;
          transition: width .3s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover::after { width: 100%; }

        .dot { transition: all .3s ease; }

        @keyframes testimonial-in { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
        .testimonial-card { animation: testimonial-in .5s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      <div id="scroll-bar" style={{ width: `${scrollProgress * 100}%` }} />

      <div
        className="min-h-screen bg-[#F7F9FC]"
        onClick={(e) => {
          const ripple = document.createElement("div");
          ripple.className = "ripple";
          ripple.style.left = `${e.clientX}px`;
          ripple.style.top = `${e.clientY}px`;
          document.body.appendChild(ripple);
          setTimeout(() => ripple.remove(), 700);
        }}
      >

        {/* HERO */}
        <section className="w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="hero-eyebrow text-blue-600 font-semibold text-sm mb-4">Digital Growth Partner</p>
              <h1 className="hero-title text-5xl md:text-[3.4rem] font-bold leading-[1.08] text-slate-900">
                We Engineer Digital Systems That
                <br />
                <span className="text-blue-600">Drive Business Growth.</span>
              </h1>
              <p className="hero-sub mt-6 text-slate-500 text-lg leading-relaxed max-w-lg">
                Strategy, experience, technology and growth — integrated to build digital ecosystems that perform, scale and create measurable business impact.
              </p>
              <div className="hero-btns mt-8 flex flex-wrap gap-4">
                <button className="magnetic bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Explore Our Work <ArrowRight size={16} />
                </button>
                <button className="magnetic border border-slate-300 hover:border-blue-400 text-slate-700 px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Book a Strategy Call <ArrowRight size={16} />
                </button>
              </div>
              <div className="hero-tags mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-900 text-sm font-bold">
                {["Strategy", "Experience", "Engineering", "Growth"].map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {t}
                    {i < 3 && <span className="w-1 h-1 rounded-full bg-slate-300" />}
                  </span>
                ))}
              </div>
              <div className="hero-engine mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-400 tracking-wide mb-3">POWERED BY THE SM GROWTH ENGINE™</p>
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
                  {[
                    { icon: Search, label: "Diagnose" },
                    { icon: Compass, label: "Architect" },
                    { icon: Hammer, label: "Build" },
                    { icon: Rocket, label: "Scale" },
                  ].map((s, i) => (
                    <span key={s.label} className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5">
                        <s.icon size={15} className="text-blue-600" /> {s.label}
                      </span>
                      {i < 3 && <ArrowRight size={13} className="text-slate-300" />}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-visual relative flex justify-center items-center min-h-[420px]">
              <img
                src="/earth.png"
                alt="Global reach"
                className="globe-spin absolute w-96 h-96 object-contain"
                style={{ filter: "drop-shadow(0 30px 50px rgba(37,99,235,0.35))" }}
              />
              <div className="float-card absolute top-2 left-0 bg-white rounded-xl shadow-xl p-4 w-48 border border-slate-100">
                <p className="text-[11px] text-slate-400 font-medium flex justify-between">Performance Overview <ArrowRight size={12} /></p>
                <p className="text-[11px] text-slate-400 mt-1">Revenue Influenced</p>
                <p className="text-2xl font-bold text-slate-800 mt-0.5">$75M+</p>
                <p className="text-[11px] text-emerald-500 font-semibold mt-1">▲ 26.4% vs last year</p>
              </div>
              <div className="float-card d2 absolute top-24 right-0 bg-white rounded-xl shadow-xl p-4 w-48 border border-slate-100">
                <p className="text-[11px] text-slate-400 font-medium flex justify-between">Project Delivery <ArrowRight size={12} /></p>
                <p className="text-2xl font-bold text-slate-800 mt-2">350+</p>
                <p className="text-[11px] text-slate-400">Successful Projects</p>
                <p className="text-[11px] text-emerald-500 font-semibold mt-1">▲ 18.2%</p>
              </div>
              <div className="float-card d3 absolute bottom-2 left-6 bg-white rounded-xl shadow-xl p-4 w-44 border border-slate-100">
                <p className="text-[11px] text-slate-400 font-medium">Client Satisfaction</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">4.9/5</p>
                <div className="flex gap-0.5 mt-1 text-blue-500">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="max-w-7xl mx-auto px-6 pb-7">
            <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-wrap md:flex-nowrap items-center justify-between">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 min-w-[45%] md:min-w-0 flex items-center justify-center gap-3 px-5 py-6 border-slate-100 ${i < stats.length - 1 ? "md:border-r" : ""
                    } ${i < stats.length - 1 ? "border-b md:border-b-0" : ""}`}
                >
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <s.icon size={17} />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight" data-target={s.value} data-counted="false">{s.value}</h2>
                    <p className="text-slate-500 text-xs whitespace-nowrap">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="max-w-7xl mx-auto px-6 pb-7">
          <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-sm px-8 py-6 text-center">
            <p className="text-blue-600 font-semibold text-xs tracking-wide mb-5">TRUSTED BY AMBITIOUS BRANDS</p>
            <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
              {brands.map((b) => (
                <img
                  key={b.name}
                  src={b.logo}
                  alt={b.name}
                  title={b.name}
                  className="h-16 md:h-20 w-auto max-w-[180px] object-contain"
                />
              ))}
            </div>
            <a href="/case-studies" className="mt-5 inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
              View All Case Studies <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="max-w-7xl mx-auto px-0 py-0">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
            <div className="reveal">
              <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">FEATURED SUCCESS STORIES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Real Results. Real Impact.</h2>
              <p className="text-slate-500 mt-2 max-w-md">Explore how we've helped global brands accelerate growth through strategy, design and technology.</p>
            </div>
            <a href="/case-studies" className="reveal magnetic border border-slate-300 hover:border-blue-400 text-slate-700 px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors flex-shrink-0">
              View All Case Studies <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <div key={i} className={`reveal card-hover delay-${i + 1} bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden`}>
                <div className="h-44 relative flex items-center justify-center" style={{ background: c.gradient }}>
                  <span className="absolute top-4 left-4 text-[11px] font-bold text-white px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}>
                    {c.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg">{c.name}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{c.desc}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                    View Case Study <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="reveal mb-10">
            <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Digital Systems. Built for Growth.</h2>
            <p className="text-slate-500 mt-2 max-w-lg">End-to-end capabilities to build, optimize and grow your digital ecosystem.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((s, i) => (
              <div key={i} className={`reveal card-hover delay-${(i % 6) + 1} bg-white rounded-2xl border border-slate-100 shadow-sm p-5`}>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <s.icon size={18} />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="max-w-7xl mx-auto px-0 py-0">
          <p className="reveal text-blue-600 font-semibold text-xs tracking-wide mb-8">TECHNOLOGY THAT POWERS THE EXPERIENCE</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((col, i) => (
              <div key={col.title} className={`reveal delay-${i + 1} bg-white rounded-2xl border border-slate-100 shadow-sm p-6`}>
                <h3 className="font-bold text-slate-900 mb-4">{col.title}</h3>
                <ul className="space-y-2.5 text-sm text-slate-500">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-7xl mx-auto px-6 py-2">
          <div className="reveal mb-10">
            <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">OUR APPROACH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Proven Process. Predictable Results.</h2>
            <p className="text-slate-500 mt-2 max-w-lg">A systematic approach to deliver digital solutions that create measurable business impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
            {processSteps.map((s, i) => (
              <div key={s.num} className={`reveal delay-${i + 1} relative`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">{s.num}</div>
                  {i < processSteps.length - 1 && <ArrowRight size={16} className="hidden md:block text-slate-300 ml-2" />}
                </div>
                <div className="text-blue-600 mb-2"><s.icon size={20} /></div>
                <h3 className="font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="reveal">
              <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">INDUSTRIES WE SERVE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Serving Clients Across 8+ Countries</h2>
              <p className="text-slate-500 mt-3 max-w-sm">From startups to enterprises, we help businesses unlock digital growth across industries.</p>
              <div className="mt-6 w-full max-w-md">
                <img
                  src="/world-map.png"
                  alt="SM Solutions clients across 8+ countries"
                  className="w-full h-auto object-contain opacity-90"
                  draggable={false}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <div key={ind.title} className={`reveal card-hover delay-${(i % 6) + 1} bg-white rounded-2xl border border-slate-100 shadow-sm p-5`}>
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                    <ind.icon size={17} />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{ind.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
            {/* Left: heading */}
            <div className="reveal">
              <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">WHAT OUR CLIENTS SAY</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Partnerships Built on Trust.
                <br />
                Results That Speak.
              </h2>
            </div>

            {/* Right: testimonial cards */}
            <div>
              <div className="grid sm:grid-cols-2 gap-5">
                {[0, 1].map((offset) => {
                  const t = testimonials[(activeTestimonial + offset) % testimonials.length];
                  return (
                    <div
                      key={t.name}
                      className="testimonial-card card-hover bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 text-[44px] font-black leading-none -mt-2 select-none flex-shrink-0">&ldquo;</span>
                        <p className="text-slate-600 text-sm leading-relaxed">{t.text}</p>
                      </div>
                      <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-blue-100 flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 text-sm truncate">{t.name}</p>
                            <p className="text-xs text-slate-500 truncate">{t.role}</p>
                          </div>
                        </div>
                        <img src={t.logo} alt={t.company} className="h-6 md:h-7 w-auto max-w-[96px] object-contain flex-shrink-0" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setActiveTestimonial(i)}
                    className={`dot h-2 rounded-full ${i === activeTestimonial ? "bg-blue-600 w-6" : "bg-slate-300 w-2 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}