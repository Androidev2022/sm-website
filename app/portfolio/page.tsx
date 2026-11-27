"use client";
// app/portfolio/page.tsx
// Header & footer come from your shared layout (same as the Home page).
import { useEffect, useMemo, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight, Search, X } from "lucide-react";

// Same geometric sans as the design. Move this to app/layout.tsx to use it site-wide.
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

// ─── Content ─────────────────────────────────────────────────────────────────
type Category = "Web & Digital" | "Mobile Apps" | "Branding & Identity" | "Social & Campaigns" | "Print & Creative";

type Project = {
    title: string;
    category: Category;
    image: string;
    gradient: string; // shown behind / instead of the image if it's missing
    href: string;
};

const filters: ("All Work" | Category)[] = [
    "All Work",
    "Web & Digital",
    "Mobile Apps",
    "Branding & Identity",
    "Social & Campaigns",
    "Print & Creative",
];

// Project images live in /public/portfolio/ (cropped from the design)
const projects: Project[] = [
    { title: "Desire Entertainment", category: "Branding & Identity", image: "/portfolio/desire.jpg", gradient: "linear-gradient(135deg,#e5e7eb,#9ca3af)", href: "#" },
    { title: "World of Foods", category: "Web & Digital", image: "/portfolio/world-of-foods.jpg", gradient: "linear-gradient(135deg,#f5f5f4,#d6d3d1)", href: "#" },
    { title: "Omkara Guruji", category: "Mobile Apps", image: "/portfolio/omkara.jpg", gradient: "linear-gradient(135deg,#fafaf9,#e7e5e4)", href: "#" },
    { title: "Batra's", category: "Social & Campaigns", image: "/portfolio/batras.jpg", gradient: "linear-gradient(135deg,#7dd3fc,#2563eb)", href: "#" },
    { title: "India and Sustainability Standards", category: "Web & Digital", image: "/portfolio/iss.jpg", gradient: "linear-gradient(135deg,#f1f5f9,#cbd5e1)", href: "#" },
    { title: "Certificate & Event Collateral", category: "Print & Creative", image: "/portfolio/certificate.jpg", gradient: "linear-gradient(135deg,#bbf7d0,#4ade80)", href: "#" },
    { title: "Nitya Bajaj", category: "Branding & Identity", image: "/portfolio/nitya-bajaj.jpg", gradient: "linear-gradient(135deg,#e7d8c3,#a8896a)", href: "#" },
    { title: "IEM Robotics", category: "Branding & Identity", image: "/portfolio/iem-robotics.jpg", gradient: "linear-gradient(135deg,#1e3a8a,#0f172a)", href: "#" },
    { title: "HYT Engineering", category: "Branding & Identity", image: "/portfolio/hyt.jpg", gradient: "linear-gradient(135deg,#f1f5f9,#94a3b8)", href: "#" },
    { title: "Learner Circles", category: "Web & Digital", image: "/portfolio/learner-circles.jpg", gradient: "linear-gradient(135deg,#e7e5e4,#a8a29e)", href: "#" },
    { title: "Osmosis", category: "Web & Digital", image: "/portfolio/osmosis.jpg", gradient: "linear-gradient(135deg,#bfdbfe,#3b82f6)", href: "#" },
    { title: "Good Health Store", category: "Web & Digital", image: "/portfolio/good-health.jpg", gradient: "linear-gradient(135deg,#ecfccb,#a3e635)", href: "#" },
];

// Logos are trimmed & transparent; heights are tuned so they look visually balanced
const brands = [
    { name: "Tefal", logo: "/portfolio/brands/tefal.png", size: "h-7 md:h-8" },
    { name: "Del Monte", logo: "/portfolio/brands/delmonte.png", size: "h-12 md:h-14" },
    { name: "Ayana Properties", logo: "/portfolio/brands/ayana.png", size: "h-9 md:h-10" },
    { name: "LMHI", logo: "/logos/lmhi.webp", size: "h-8 md:h-9" },
    { name: "Maharaja Whiteline", logo: "/portfolio/brands/maharaja.png", size: "h-9 md:h-11" },
];

// Image that simply hides itself if the file is missing (gradient shows instead)
function SafeImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    const [failed, setFailed] = useState(false);
    if (failed) return null;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} onError={() => setFailed(true)} />;
}

export default function PortfolioPage() {
    const [scrollY, setScrollY] = useState(0);
    const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All Work");
    const [query, setQuery] = useState("");

    const visibleProjects = useMemo(() => {
        const q = query.trim().toLowerCase();
        return projects.filter(
            (p) =>
                (activeFilter === "All Work" || p.category === activeFilter) &&
                (q === "" || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
        );
    }, [activeFilter, query]);

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
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        @keyframes fadeSlideUp { from { opacity:0; transform: translateY(24px);} to { opacity:1; transform: translateY(0);} }
        .hero-eyebrow { animation: fadeSlideUp .7s cubic-bezier(.22,1,.36,1) 0s both; }
        .hero-title   { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .1s both; }
        .hero-sub     { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .22s both; }
        .hero-btns    { animation: fadeSlideUp .8s cubic-bezier(.22,1,.36,1) .34s both; }
        .hero-visual  { animation: fadeSlideUp .9s cubic-bezier(.22,1,.36,1) .2s both; }

        .magnetic { white-space: nowrap; transition: transform .45s cubic-bezier(.22,1,.36,1); }

        .card-hover { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 18px 36px rgba(37,99,235,0.14); }
        .card-hover:hover .card-img { transform: scale(1.06); }
        .card-img { transition: transform .6s cubic-bezier(.22,1,.36,1); }

        /* grid cards animate in on every filter/search change */
        @keyframes card-in { from { opacity:0; transform: translateY(18px) scale(.98);} to { opacity:1; transform: none;} }
        .card-in { animation: card-in .5s cubic-bezier(.22,1,.36,1) both; }

        @keyframes float-up-down { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-10px);} }
        .float-card { animation: float-up-down 4s ease-in-out infinite; }
        .float-card.d2 { animation-delay: .8s; }
        .float-card.d3 { animation-delay: 1.6s; }

        @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .globe-spin { animation: spin-slow 60s linear infinite; }
      `}</style>

            <div id="scroll-bar" style={{ width: `${scrollProgress * 100}%` }} />

            <div
                className={`${jakarta.className} min-h-screen bg-[#F7F9FC] text-slate-900 antialiased`}
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
                    <div className="max-w-7xl mx-auto px-6 pt-6">
                        <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-500">
                            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                            <span className="mx-2 text-slate-300">/</span>
                            <span className="text-slate-900">Portfolio</span>
                        </nav>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-10 pb-10 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="hero-eyebrow inline-block bg-blue-100 text-blue-700 font-bold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full mb-5">
                                Our Portfolio
                            </span>
                            <h1 className="hero-title text-5xl md:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] text-slate-900">
                                A Closer Look at{" "}
                                <br />
                                <span className="text-blue-600">What We Create.</span>
                            </h1>
                            <p className="hero-sub mt-6 text-slate-500 text-lg leading-relaxed max-w-lg">
                                Explore a selection of digital experiences, brand work and solutions created for businesses across industries.
                            </p>
                            <div className="hero-btns mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#selected-work"
                                    className="magnetic bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                                >
                                    Explore Our Work <ArrowRight size={16} />
                                </a>
                                <a
                                    href="/contact"
                                    className="magnetic border border-slate-300 hover:border-blue-400 text-slate-700 px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                                >
                                    Discuss a Project <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="hero-visual relative flex justify-center items-center min-h-[420px]">
                            {/* Soft blue glow so the image melts into the page */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-[-10%] -z-0"
                                style={{
                                    background:
                                        "radial-gradient(closest-side, rgba(147,197,253,0.55), rgba(191,219,254,0.35) 45%, rgba(247,249,252,0) 100%)",
                                    filter: "blur(30px)",
                                }}
                            />
                            {/* Globe + laptop/phone/browser mockups (PNG with transparent, feathered edges) */}
                            <SafeImg
                                src="/portfolio/hero-mockups.png"
                                alt="Selected project mockups – real estate website, mobile app and Tefal e-commerce"
                                className="float-card relative z-10 w-full md:w-[112%] max-w-none h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* BRANDS STRIP */}
                    <div className="max-w-7xl mx-auto px-6 pb-7">
                        <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.06)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center py-2">
                            {brands.map((b, i) => (
                                <div
                                    key={b.name}
                                    className={`h-20 flex items-center justify-center px-6 ${i < brands.length - 1 ? "md:border-r md:border-slate-200" : ""
                                        } ${i === brands.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
                                >
                                    <SafeImg
                                        src={b.logo}
                                        alt={b.name}
                                        title={b.name}
                                        className={`${b.size} w-auto max-w-[160px] object-contain transition duration-300 hover:scale-105`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SELECTED WORK */}
                <section id="selected-work" className="max-w-7xl mx-auto px-6 py-14 scroll-mt-24">
                    <div className="reveal flex flex-wrap justify-between items-end gap-6 mb-8">
                        <div>
                            <h2 className="text-3xl md:text-[2.5rem] font-extrabold tracking-tight text-slate-900">Selected Work</h2>
                            <p className="text-slate-600 mt-2 max-w-md">A mix of digital products, brand experiences and creative work.</p>
                        </div>
                        <label className="relative w-full sm:w-72">
                            <span className="sr-only">Search projects</span>
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects..."
                                className="w-full bg-white border border-slate-200 rounded-full pl-10 pr-10 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                            />
                            {query && (
                                <button
                                    type="button"
                                    aria-label="Clear search"
                                    onClick={() => setQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    <X size={15} />
                                </button>
                            )}
                        </label>
                    </div>

                    {/* Filters */}
                    <div className="reveal flex flex-wrap gap-3 mb-8">
                        {filters.map((f) => {
                            const active = f === activeFilter;
                            return (
                                <button
                                    key={f}
                                    type="button"
                                    onClick={() => setActiveFilter(f)}
                                    className={`px-5 py-2 rounded-full text-[13px] font-medium border transition-colors ${active
                                        ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                                        }`}
                                >
                                    {f}
                                </button>
                            );
                        })}
                    </div>

                    {/* Grid */}
                    {visibleProjects.length > 0 ? (
                        <div key={`${activeFilter}-${query}`} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleProjects.map((p, i) => (
                                <a
                                    key={p.title}
                                    href={p.href}
                                    className="card-in card-hover group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col"
                                    style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
                                >
                                    <div className="relative h-52 overflow-hidden" style={{ background: p.gradient }}>
                                        <SafeImg src={p.image} alt={p.title} className="card-img absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                    <div className="p-5 flex items-center justify-between gap-4">
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase">{p.category}</p>
                                            <h3 className="font-bold text-[15px] tracking-tight text-slate-900 mt-1 truncate">{p.title}</h3>
                                        </div>
                                        <span className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                            <ArrowRight size={15} />
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm py-16 text-center">
                            <p className="font-semibold text-slate-900">No projects found</p>
                            <p className="text-sm text-slate-500 mt-1">Try a different search or filter.</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setQuery("");
                                    setActiveFilter("All Work");
                                }}
                                className="mt-5 inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all"
                            >
                                Show all work <ArrowRight size={14} />
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}