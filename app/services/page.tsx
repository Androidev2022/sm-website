"use client";
// app/services/page.tsx
import { useEffect, useState } from "react";
import {
    ArrowRight,
    Check,
    Target,
    PenTool,
    Monitor,
    Smartphone,
    Cloud,
    Database,
    Megaphone,
    Cpu,
    Code2,
    BarChart3,
    Layers,
    Users,
    Settings,
    type LucideIcon,
} from "lucide-react";

// ─── Content ─────────────────────────────────────────────────────────────────
type Service = { no: string; title: string; desc: string; points: string[]; icon: LucideIcon };

const services: Service[] = [
    {
        no: "01",
        title: "Digital Strategy & Consulting",
        desc: "Define the right digital roadmap to unlock business growth.",
        points: ["Business & user research", "Digital roadmap & use cases", "Product & platform strategy", "Technology & execution planning"],
        icon: Target,
    },
    {
        no: "02",
        title: "Experience Design & UI/UX",
        desc: "Create intuitive, engaging and accessible user experiences.",
        points: ["User research & journey mapping", "UX strategy & information architecture", "UI design & design systems", "Usability & accessibility design"],
        icon: PenTool,
    },
    {
        no: "03",
        title: "Web & Commerce Engineering",
        desc: "Build high-performance, scalable web and commerce solutions.",
        points: ["Custom web application development", "E-commerce & D2C platforms", "CMS-based solutions", "Integrations & performance optimization"],
        icon: Monitor,
    },
    {
        no: "04",
        title: "Mobile App Development",
        desc: "Design and build secure, high-quality mobile applications for growth.",
        points: ["iOS and Android development", "Cross-platform (React Native / Flutter)", "App modernization & enhancements", "Deployment & app store release"],
        icon: Smartphone,
    },
    {
        no: "05",
        title: "Cloud, DevOps & Infrastructure",
        desc: "Build a reliable, secure and scalable technology foundation.",
        points: ["Cloud architecture & migration", "DevOps, CI/CD & automation", "Infrastructure management", "Security, monitoring & cost optimization"],
        icon: Cloud,
    },
    {
        no: "06",
        title: "Data, Analytics & AI",
        desc: "Turn data into insights and business impact with modern AI.",
        points: ["Data strategy & architecture", "Analytics & business intelligence", "AI/ML solutions & integration", "Reporting, dashboards & insights"],
        icon: Database,
    },
    {
        no: "07",
        title: "Digital Marketing & Growth",
        desc: "Build visibility, engagement and measurable business growth.",
        points: ["Growth strategy & campaign planning", "SEO, content & performance marketing", "Social media & engagement", "Marketing analytics & optimization"],
        icon: Megaphone,
    },
    {
        no: "08",
        title: "Emerging Technology Solutions",
        desc: "Explore and apply new technologies to solve real business challenges.",
        points: ["IoT & connected solutions", "AI-powered applications", "Automation & intelligent workflows", "PoC, prototyping & pilot deployments"],
        icon: Cpu,
    },
];

const journey: { label: string; icon: LucideIcon }[] = [
    { label: "Strategy", icon: Target },
    { label: "Design", icon: PenTool },
    { label: "Engineering", icon: Code2 },
    { label: "Infrastructure", icon: Cloud },
    { label: "Growth", icon: BarChart3 },
];

const techStack: { title: string; icon: LucideIcon; items: string[] }[] = [
    { title: "Frontend", icon: Monitor, items: ["Next.js", "React", "Angular", "TypeScript"] },
    { title: "Backend", icon: Layers, items: ["Laravel", "Node.js", "Python", "PHP"] },
    { title: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"] },
    { title: "Cloud & DevOps", icon: Cloud, items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes"] },
    { title: "Data & Database", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    { title: "AI & Emerging Tech", icon: Cpu, items: ["OpenAI", "TensorFlow", "PyTorch", "IoT (Connected Devices)"] },
    { title: "CMS & Platforms", icon: Layers, items: ["WordPress", "Shopify", "Adobe Experience Manager", "Headless CMS"] },
];

const engagements: { title: string; desc: string; icon: LucideIcon }[] = [
    { title: "Advisory", desc: "Get expert guidance, validation and a clear plan before you build.", icon: Users },
    { title: "Build", desc: "Design and develop digital products and platforms from the ground up.", icon: Code2 },
    { title: "Transform", desc: "Modernize, scale and enhance your existing digital ecosystem.", icon: Layers },
    { title: "Operate", desc: "Keep your platforms secure, reliable and performing at their best.", icon: Settings },
];

const brands = [
    { name: "Tefal", logo: "/logos/tefal.png" },
    { name: "Del Monte", logo: "/logos/delmonte.png" },
    { name: "Maharaja Whiteline", logo: "/logos/maharaja.png" },
    { name: "LMHI", logo: "/logos/lmhi.webp" },
    { name: "Berger", logo: "/logos/berger.png" },
];

export default function ServicesPage() {
    const [scrollY, setScrollY] = useState(0);

    // ─── Magnetic buttons ─────────────────────────────────────────────────────
    useEffect(() => {
        const magneticEls = document.querySelectorAll(".magnetic");
        const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const btn = mouseEvent.currentTarget as HTMLElement;
            const rect = btn.getBoundingClientRect();
            const distX = mouseEvent.clientX - (rect.left + rect.width / 2);
            const distY = mouseEvent.clientY - (rect.top + rect.height / 2);
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

    // ─── Scroll progress ──────────────────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ─── Reveal on scroll ─────────────────────────────────────────────────────
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
        .reveal.delay-7 { transition-delay: .56s; } .reveal.delay-8 { transition-delay: .64s; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        @keyframes fadeSlideUp { from { opacity:0; transform: translateY(24px);} to { opacity:1; transform: translateY(0);} }
        .hero-eyebrow { animation: fadeSlideUp .7s cubic-bezier(.22,1,.36,1) 0s both; }
        .hero-title   { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .1s both; }
        .hero-sub     { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .22s both; }
        .hero-btns    { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .34s both; }
        .hero-visual  { animation: fadeSlideUp .9s cubic-bezier(.22,1,.36,1) .2s both; }

        .magnetic { display: inline-flex; align-items: center; white-space: nowrap; transition: transform .45s cubic-bezier(.22,1,.36,1); }

        .card-hover { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 18px 36px rgba(37,99,235,0.14); }

        @keyframes float-up-down { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-10px);} }
        .float-card { animation: float-up-down 4s ease-in-out infinite; }
        .float-card.d2 { animation-delay: .8s; }
        .float-card.d3 { animation-delay: 1.6s; }
        .float-card.d4 { animation-delay: 2.4s; }

        @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .globe-spin { animation: spin-slow 60s linear infinite; }

        header { backdrop-filter: blur(10px); }
        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -6px; left: 0; width: 0; height: 2px; background: #2563EB;
          transition: width .3s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        @keyframes dash-flow { to { background-position: 16px 0; } }
        .flow-line {
          background-image: radial-gradient(circle, #3B82F6 1.2px, transparent 1.6px);
          background-size: 8px 4px; background-repeat: repeat-x; background-position: 0 center;
          animation: dash-flow 0.8s linear infinite;
        }
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
                            <p className="hero-eyebrow text-blue-600 font-semibold text-sm mb-4">Our Services</p>
                            <h1 className="hero-title text-5xl md:text-[3.4rem] font-bold leading-[1.08] text-slate-900">
                                Digital Capabilities Built Around
                                <br />
                                <span className="text-blue-600">Your Business.</span>
                            </h1>
                            <p className="hero-sub mt-6 text-slate-500 text-lg leading-relaxed max-w-lg">
                                Strategy, experience, engineering and growth — integrated to design, build and scale digital ecosystems that perform.
                            </p>
                            <div className="hero-btns mt-8 flex flex-wrap gap-4">
                                <button className="magnetic bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                                    Discuss Your Project <ArrowRight size={16} />
                                </button>
                                <a
                                    href="/casedetails"
                                    className="magnetic border border-slate-300 hover:border-blue-400 text-slate-700 px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                                >
                                    View Our Work <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="hero-visual relative flex justify-center items-center min-h-[420px]">
                            <img
                                src="/earth.png"
                                alt="Global reach"
                                className="globe-spin absolute w-96 h-96 object-contain"
                                style={{ filter: "drop-shadow(0 30px 50px rgba(37,99,235,0.35))" }}
                            />
                            {[
                                { icon: Layers, label: "Strategy", pos: "top-8 left-6", d: "" },
                                { icon: Monitor, label: "Experience", pos: "top-14 right-0", d: "d2" },
                                { icon: Code2, label: "Engineering", pos: "bottom-28 left-0", d: "d3" },
                                { icon: BarChart3, label: "Growth", pos: "bottom-20 right-6", d: "d4" },
                            ].map((t) => (
                                <div
                                    key={t.label}
                                    className={`float-card ${t.d} absolute ${t.pos} bg-white rounded-xl shadow-xl px-4 py-3 border border-slate-100 flex items-center gap-2.5`}
                                >
                                    <t.icon size={18} className="text-blue-600" />
                                    <span className="text-sm font-semibold text-slate-800">{t.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CORE SERVICES */}
                <section className="max-w-7xl mx-auto px-6 py-10">
                    <div className="reveal mb-10">
                        <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">OUR CORE SERVICE AREAS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">End-to-End Digital Capabilities.</h2>
                        <p className="text-slate-500 mt-2 max-w-lg">Everything you need to plan, build, run and grow your digital business — under one roof.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((s, i) => (
                            <div
                                key={s.no}
                                className={`reveal card-hover delay-${(i % 4) + 1} bg-white rounded-2xl border border-slate-100 shadow-sm p-6`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                        <s.icon size={18} />
                                    </div>
                                    <span className="text-xs font-bold text-blue-600">{s.no}</span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-base leading-snug">{s.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed mt-2">{s.desc}</p>
                                <ul className="mt-4 space-y-2">
                                    {s.points.map((p) => (
                                        <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                                            <Check size={14} className="mt-0.5 flex-shrink-0 text-blue-600" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ONE PARTNER */}
                <section className="max-w-7xl mx-auto px-6 py-6">
                    <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-12 text-center">
                        <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">HOW WE CONNECT IT ALL</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            One Partner. <span className="text-blue-600">Multiple Capabilities.</span>
                        </h2>
                        <p className="text-slate-500 mt-2">A connected approach that takes you from strategy to sustained growth.</p>
                        <div className="mt-10 flex flex-wrap items-start justify-center gap-y-8">
                            {journey.map((j, i) => (
                                <div key={j.label} className="flex items-start">
                                    <div className="flex w-32 flex-col items-center gap-3">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                                            <j.icon size={26} />
                                        </div>
                                        <span className="font-bold text-slate-900 text-sm">{j.label}</span>
                                    </div>
                                    {i < journey.length - 1 && (
                                        <div className="hidden md:flex items-center h-16 text-blue-500">
                                            <span className="flow-line w-14 h-1" />
                                            <ArrowRight size={14} className="-ml-1" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TECH STACK */}
                <section className="max-w-7xl mx-auto px-6 py-14">
                    <div className="reveal mb-8">
                        <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">OUR TECHNOLOGY EXPERTISE</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Technology That Powers the Experience.</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
                        {techStack.map((col, i) => (
                            <div key={col.title} className={`reveal delay-${i + 1} bg-white rounded-2xl border border-slate-100 shadow-sm p-5`}>
                                <div className="flex items-center gap-2 mb-4">
                                    <col.icon size={16} className="text-blue-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">{col.title}</h3>
                                </div>
                                <ul className="space-y-2.5 text-xs text-slate-500">
                                    {col.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ENGAGEMENT MODELS */}
                <section className="max-w-7xl mx-auto px-6 py-2">
                    <div className="reveal mb-10">
                        <p className="text-blue-600 font-semibold text-xs tracking-wide mb-2">HOW WE WORK WITH YOU</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Flexible Engagement Models.</h2>
                        <p className="text-slate-500 mt-2 max-w-lg">Work with us in the way that best fits your goals, timeline and team structure.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {engagements.map((e, i) => (
                            <div key={e.title} className={`reveal card-hover delay-${i + 1} bg-white rounded-2xl border border-slate-100 shadow-sm p-5`}>
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                                    <e.icon size={18} />
                                </div>
                                <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{e.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BRANDS (same style as home) */}
                <section className="max-w-7xl mx-auto px-6 py-14">
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
                        <a href="/casedetails" className="mt-5 inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                            View All Case Studies <ArrowRight size={14} />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
}