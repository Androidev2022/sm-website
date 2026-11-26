"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

const stats = [
    { value: "+156%", label: "Traffic Growth", sub: "Organic Traffic" },
    { value: "+142%", label: "Revenue Growth", sub: "E-commerce Revenue" },
    { value: "+87%", label: "Conversion Lift", sub: "Transaction Count" },
    { value: "+65%", label: "Search Performance", sub: "Keyword Rankings" },
    { value: "4.9/5", label: "Client Happiness", sub: "Feedback Rating" },
];

/* ---- 01 Executive Summary ---- */
const execSummary = {
    heading: "Elevating Tefal's Indian Presence Through User-Centric UX",
    body: "Tefal, a household global brand under Groupe SEB, faced major discovery and conversion bottlenecks on their Indian direct-to-consumer store. Although they possess class-leading cooking appliances like Tefal Easy Fryers and premium cookware, local audiences had difficulty navigating catalog layers and understanding product versatility.",
    body2:
        "Our mandate was to execute a deep UX diagnostic and rewrite the product interaction flow, bringing clean premium aesthetics, seamless recipe integrations, and frictionless conversion pathways designed for the Indian consumer.",
    meta: [
        { label: "Timeline", value: "6 Months" },
        { label: "Deliverables", value: "Audit, UI System, Prototypes" },
        { label: "Team", value: "3 Designers, 1 Researcher" },
        { label: "Success Metric", value: "D2C Revenue Boost", accent: true },
    ],
};

/* ---- 02 About Tefal / product ecosystem ---- */
const productEcosystem = [
    { title: "Air Fryers", desc: "Premium oil-free hot air fryers and grills", image: "/images/products/air-fryers.png" },
    { title: "Cookware", desc: "Patented Thermo-Spot cookware ranges", image: "/images/products/cookware.png" },
    { title: "Pressure Cookers", desc: "Ultra-safe smart pressure cookers", image: "/images/products/pressure-cookers.png" },
    { title: "Linen Care Irons", desc: "High precision vertical & steam irons", image: "/images/products/linen-irons.png" },
    { title: "Kitchen Appliances", desc: "Express blenders & food processors", image: "/images/products/kitchen-appliances.png" },
];

const brandStats = [
    { value: "120+", label: "Countries Reached" },
    { value: "150M+", label: "Products Sold Annually" },
    { value: "70 Years", label: "Of Innovation" },
    { value: "Trusted", label: "By Millions of Families" },
];

/* ---- 03 Problem Statement ---- */
const problemStatement = [
    {
        title: "Product Discovery Friction",
        desc: "Users had trouble isolating categories of cookware vs premium high-ticket electric appliances on homepages.",
    },
    {
        title: "Recipe-to-Product Journey Gaps",
        desc: "Indian consumers lookup airfryer recipes online first. The site failed to link tasty local recipes to corresponding cooker purchases.",
    },
    {
        title: "Mobile Experience Inefficiencies",
        desc: "Over 82% of current traffic originated from smartphones, yet slow image carousels and tiny buy buttons resulted in high drop-offs.",
    },
];

/* ---- 04 Research & Audit ---- */
const heatmapInsight = {
    tag: "High Attention Loss",
    stat: "85% Missed Product Sub-menus",
    note: "Our visual heatmaps identified that users looking for specific cookware size options repeatedly abandoned because filters were hidden inside heavy sidebars.",
};

/* ---- Strategy & Roadmap ---- */
const roadmap = [
    { n: "01", title: "Discover", desc: "Deep audit & stakeholder alignment" },
    { n: "02", title: "Research", desc: "Heatmap audit, analytics & competitor analysis" },
    { n: "03", title: "Architecture", desc: "Restructured navigation, search & categories" },
    { n: "04", title: "Wireframing", desc: "Interactive mockups testing key flows" },
    { n: "05", title: "UI Exploration", desc: "Drafting premium cards, modern text and highlights & clean grids" },
    { n: "06", title: "Optimization", desc: "Post-launch checks and direct interface review" },
];

/* ---- 06 Solution Showcase ---- */
const redesignCards = [
    {
        title: "Homepage Redesign",
        desc: "We reorganized the homepage layout from a cluttered promo block to an editorial experience. Visitors now meet premium appliance categories first with clean white space & high-fidelity renders.",
        badge: "+32% CTR on Categories",
        badgeColor: "text-emerald-600 bg-emerald-50",
    },
    {
        title: "Integrated Recipe Ecosystem",
        desc: "Users reading delicious recipes like the Air Fryer Samosas can now purchase the exact appliance model instantly using standard quick checkout widgets nested on the recipe card.",
        badge: "Frictionless Add-To-Cart",
        badgeColor: "text-rose-600 bg-rose-50",
    },
];

const recipeCard = {
    title: "Crispy Tandoori Paneer",
    time: "15 Mins",
    kicker: "HEALTHY MEALS MADE SIMPLE",
    urlPath: "tefal.in/recipes/airfryer-paneer",
    applianceLabel: "RECOMMENDED APPLIANCE",
    product: "Tefal Easy Fry & Grill",
    price: "₹11,999",
    originalPrice: "₹14,999",
    cta: "BUY NOW & COOK THIS",
};

function IconLock() {
    return (
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
    );
}

function IconClock() {
    return (
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    );
}
/* ---- 07 Before vs After ---- */
const visualCompare = {
    before: {
        label: "BEFORE (OLD DESIGN)",
        items: ["Iron", "Grill", "Pot", "Mixer"],
        note: "No contextual recipes or visual product categorization. Users were instantly confused.",
    },
    after: {
        label: "AFTER (NEW DESIGN)",
        heading: "Browse Cookware Ecosystem",
        tag: "SMART FILTERS ACTIVE",
        items: [
            { name: "Non-Stick Pans", sub: "Thermo-Spot Tech", image: "/images/products/non-stick-pan.png" },
            { name: "Smart Cookers", sub: "Ultra Safety Lock", image: "/images/products/smart-cooker.png" },
        ],
        note: "Clear categories, instant tags, and gorgeous appliance-first photography.",
    },
};

/* ---- 08 Results Dashboard ---- */
const resultsMetrics = [
    { label: "Direct Transaction Lift", value: "+87% Transactions", positive: true },
    { label: "Mobile Bounce Rate", value: "-42% Drop", positive: true },
    { label: "Average Order Value", value: "+18% Increase", positive: true },
];

const trafficChart = [
    { label: "MON 1", before: 22, after: 40 },
    { label: "MON 2", before: 26, after: 58 },
    { label: "MON 3", before: 24, after: 74 },
    { label: "MON 4", before: 28, after: 92 },
];

/* ---- Design System ---- */
const colorPalette = [
    { hex: "#E21124", name: "Tefal Red" },
    { hex: "#0F172A", name: "Rich Slate" },
    { hex: "#FFFFFF", name: "Clean White", bordered: true },
];

const componentChips = [
    { label: "TEFAL RED", color: "text-rose-600 bg-rose-50" },
    { label: "+87% CONVERSION", color: "text-emerald-600 bg-emerald-50" },
    { label: "PREMIUM SPEC", color: "text-[#4C4F5B] bg-gray-100" },
];

/* ---- Testimonial ---- */
const testimonial = {
    quote:
        "SM Solutions completely turned around our e-commerce performance. They bridged the gap between our high-quality kitchen products and Indian consumers looking for easy-to-learn cooking recipes. An absolute pleasure to work with!",
    name: "Sandeep Sharma",
    role: "Digital Head, Tefal India",
    photo: "/images/testimonial/sandeep-sharma.png",
};

function Check() {
    return (
        <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 111.415-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function IconTargetDot() {
    return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="10" cy="10" r="7" />
            <circle cx="10" cy="10" r="2.2" fill="currentColor" stroke="none" />
        </svg>
    );
}

function IconCrossCircle() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.03-11.03a.75.75 0 00-1.06 1.06L8.94 10l-2.03 2.03a.75.75 0 101.06 1.06L10 11.06l2.03 2.03a.75.75 0 101.06-1.06L11.06 10l2.03-2.03a.75.75 0 10-1.06-1.06L10 8.94 7.97 6.97z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function NumberedEyebrow({ n, children }: { n: string; children: React.ReactNode }) {
    return (
        <p className="flex items-center gap-2">
            <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-[11px] font-extrabold text-rose-600">{n}</span>
            <span className="text-[11px] font-bold tracking-wide text-[#9297A3]">{children}</span>
        </p>
    );
}

function SectionEyebrow({ n, children }: { n?: string; children: React.ReactNode }) {
    return (
        <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#E11D48]">
            {n && <span className="text-[#9297A3]">{n}</span>}
            {children}
        </p>
    );
}

function TrendUp() {
    return (
        <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none">
            <path
                d="M3 15L9 9L13 13L21 5M21 5H15M21 5V11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconStar({ filled = true }: { filled?: boolean }) {
    return (
        <svg className={`h-3.5 w-3.5 ${filled ? "text-amber-400" : "text-gray-300"}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.5l2.9 6 6.6.6-5 4.4 1.5 6.5-6-3.5-6 3.5 1.5-6.5-5-4.4 6.6-.6z" />
        </svg>
    );
}

function IconHeartOutline() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20.5s-7.5-4.6-10-9.3C.5 8 2 4.5 5.5 4c2-.3 3.8.6 5 2.3C11.7 4.6 13.5 3.7 15.5 4c3.5.5 5 4 3.5 7.2-2.5 4.7-10 9.3-10 9.3z" />
        </svg>
    );
}

function IconBagOutline() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8h12l-1 12.5a1.5 1.5 0 01-1.5 1.5h-7a1.5 1.5 0 01-1.5-1.5L6 8z" />
            <path d="M9 8V6a3 3 0 016 0v2" />
        </svg>
    );
}

function IconSearch() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
        </svg>
    );
}

function IconHomeOutline() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 11.5L12 4l8 7.5" />
            <path d="M6 10v9.5a1 1 0 001 1h10a1 1 0 001-1V10" />
        </svg>
    );
}

function IconUserOutline() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M4.5 20c1.4-3.5 4.3-5.5 7.5-5.5s6.1 2 7.5 5.5" />
        </svg>
    );
}

/* ---------------------------------------------------------------------- */
/* Scroll-reveal: a single shared IntersectionObserver drives every       */
/* `.reveal` element instead of spinning one up per card, so a page with  */
/* dozens of reveals still costs one observer.                           */
/* ---------------------------------------------------------------------- */
function Reveal({
    children,
    className = "",
    delay = 0,
    as: Tag = "div",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    as?: keyof JSX.IntrinsicElements;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const Comp = Tag as any;
    return (
        <Comp
            ref={ref}
            className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
            style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
        >
            {children}
        </Comp>
    );
}

export default function Page() {
    const maxBar = Math.max(...trafficChart.map((m) => Math.max(m.before, m.after)));

    const chartRef = useRef<HTMLDivElement>(null);
    const [chartInView, setChartInView] = useState(false);

    useEffect(() => {
        const el = chartRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setChartInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    /* Cursor-reactive tilt + spotlight glow on every .section-card.
       Delegated via one listener per card instead of React state so the
       page stays smooth even with many cards on screen at once. */
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (window.matchMedia("(hover: none)").matches) return; // skip touch devices

        const cards = Array.from(document.querySelectorAll<HTMLElement>(".section-card"));

        const handleMove = (e: MouseEvent) => {
            const card = e.currentTarget as HTMLElement;
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;
            card.style.setProperty("--mx", `${px * 100}%`);
            card.style.setProperty("--my", `${py * 100}%`);
            card.style.setProperty("--rx", `${(0.5 - py) * 5}deg`);
            card.style.setProperty("--ry", `${(px - 0.5) * 5}deg`);
        };
        const handleEnter = (e: MouseEvent) => {
            (e.currentTarget as HTMLElement).style.setProperty("--glow-opacity", "1");
        };
        const handleLeave = (e: MouseEvent) => {
            const card = e.currentTarget as HTMLElement;
            card.style.setProperty("--rx", `0deg`);
            card.style.setProperty("--ry", `0deg`);
            card.style.setProperty("--glow-opacity", "0");
        };

        cards.forEach((c) => {
            c.addEventListener("mousemove", handleMove);
            c.addEventListener("mouseenter", handleEnter);
            c.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            cards.forEach((c) => {
                c.removeEventListener("mousemove", handleMove);
                c.removeEventListener("mouseenter", handleEnter);
                c.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);

    /* Ambient cursor glow that trails the pointer across the whole page. */
    const glowRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (window.matchMedia("(hover: none)").matches) return;

        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 3;
        let currentX = targetX;
        let currentY = targetY;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const tick = () => {
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY - currentY) * 0.12;
            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
            raf = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove);
        raf = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <main
            className="min-h-screen bg-[#F7F6FD] bg-top bg-no-repeat pb-14 md:pb-20"
            style={{ backgroundImage: "url('/bg.png')", backgroundSize: "100% auto" }}
        >
            {/* Ambient cursor glow — sits behind everything, ignores pointer events */}
            <div ref={glowRef} className="cursor-glow" aria-hidden="true" />

            <style>{`
                @keyframes barGrow {
                    from { transform: scaleY(0); }
                    to { transform: scaleY(1); }
                }
                .chart-bar {
                    transform-origin: bottom;
                    transform: scaleY(0);
                }
                .chart-bar.in-view {
                    animation: barGrow 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .chart-bar-label {
                    opacity: 0;
                    transform: translateY(4px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }
                .chart-bar-label.in-view {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* ---- Scroll reveal ---- */
                .reveal {
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
                    will-change: opacity, transform;
                }
                .reveal-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* ---- Hero entrance (plays once on load, no scroll needed) ---- */
                @keyframes heroFadeUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-in {
                    animation: heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                /* ---- Cursor tilt + spotlight on cards ---- */
                .section-card {
                    --rx: 0deg;
                    --ry: 0deg;
                    --mx: 50%;
                    --my: 50%;
                    --glow-opacity: 0;
                    position: relative;
                    transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry));
                    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
                }
                .section-card::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: radial-gradient(360px circle at var(--mx) var(--my), rgba(225, 29, 72, 0.10), transparent 62%);
                    opacity: var(--glow-opacity);
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                    z-index: 1;
                }

                /* ---- Ambient cursor-follow glow ---- */
                .cursor-glow {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 480px;
                    height: 480px;
                    margin-left: -240px;
                    margin-top: -240px;
                    border-radius: 9999px;
                    background: radial-gradient(circle, rgba(76, 95, 234, 0.10) 0%, rgba(225, 29, 72, 0.06) 45%, transparent 72%);
                    pointer-events: none;
                    z-index: 0;
                    will-change: transform;
                }

                @media (prefers-reduced-motion: reduce) {
                    .reveal, .hero-in {
                        opacity: 1 !important;
                        transform: none !important;
                        animation: none !important;
                        transition: none !important;
                    }
                    .section-card {
                        transform: none !important;
                    }
                    .chart-bar {
                        transform: scaleY(1) !important;
                        animation: none !important;
                    }
                    .cursor-glow {
                        display: none;
                    }
                }
            `}</style>

            {/* HERO */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-10">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div className="hero-in">
                        <p className="text-xs font-bold tracking-widest text-[#E11D48]">E-COMMERCE CASE STUDY</p>
                        <h1 className="text-[#16151A] mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                            Tefal India
                            <br />
                            Digital Experience
                            <br />
                            <span className="text-[#E11D48]">Optimization</span>
                        </h1>
                        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6E7180]">
                            How SM Solutions enhanced the digital commerce experience for Tefal India by improving
                            user journeys, product discoverability, and driving double-digit conversion growth.
                        </p>

                        <div className="mt-8 flex gap-10 text-sm">
                            <div>
                                <p className="eyebrow mb-1">Client</p>
                                <p className="font-semibold text-[#16151A]">Tefal India</p>
                            </div>
                            <div>
                                <p className="eyebrow mb-1">Industry</p>
                                <p className="font-semibold text-[#16151A]">Home &amp; Kitchen</p>
                            </div>
                            <div>
                                <p className="eyebrow mb-1">Duration</p>
                                <p className="font-semibold text-[#16151A]">6 Months Audit &amp; Redesign</p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="rounded-full bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c81b40] active:translate-y-0">
                                View Live Site ↗
                            </button>
                            <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#33353F] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-50 active:translate-y-0">
                                Read Methodology ⧉
                            </button>
                        </div>
                    </div>

                    {/* Browser mockup */}
                    <div className="hero-in overflow-hidden" style={{ animationDelay: "0.12s" }}>
                        <div className="relative w-full" style={{ aspectRatio: "2488 / 1500" }}>
                            <Image
                                src="/tefal-hero-mockup.png"
                                alt="Tefal India website showing the airfryer hero banner, product showcase and recipe discovery cards"
                                fill
                                className="object-contain"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {stats.map((s, i) => (
                        <Reveal key={s.label} delay={i * 70} className="section-card p-5">
                            <p className="eyebrow mb-3">{s.label}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-extrabold text-[#16151A]">{s.value}</p>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                                    <TrendUp />
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-[#9297A3]">{s.sub}</p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* 01 EXECUTIVE SUMMARY */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr] lg:items-start">
                    <Reveal>
                        <SectionEyebrow n="01">PROJECT OVERVIEW</SectionEyebrow>
                        <h2 className="text-2xl font-extrabold text-[#16151A]">Executive Summary</h2>
                        <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[#6E7180]">
                            An overview of the digital landscape for home appliances and the strategic design steps
                            we followed.
                        </p>
                    </Reveal>

                    <Reveal delay={100} className="section-card p-8">
                        <h3 className="text-lg font-bold text-[#16151A]">{execSummary.heading}</h3>
                        <p className="mt-3 text-[13px] leading-relaxed text-[#6E7180]">{execSummary.body}</p>
                        <p className="mt-3 text-[13px] leading-relaxed text-[#6E7180]">{execSummary.body2}</p>

                        <div className="mt-7 grid grid-cols-2 gap-6 border-t border-gray-100 pt-6 sm:grid-cols-4">
                            {execSummary.meta.map((m) => (
                                <div key={m.label}>
                                    <p className="eyebrow mb-1">{m.label}</p>
                                    <p className={`text-sm font-bold ${m.accent ? "text-[#E11D48]" : "text-[#16151A]"}`}>
                                        {m.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 02 ABOUT TEFAL / PRODUCT ECOSYSTEM */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <Reveal>
                    <SectionEyebrow n="02">ABOUT TEFAL</SectionEyebrow>
                    <h2 className="text-2xl font-extrabold text-[#16151A]">The Brand &amp; Product Ecosystem</h2>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-[#6E7180]">
                        Highlighting high-quality appliance categories that form Tefal&rsquo;s outstanding kitchen
                        ecosystem.
                    </p>
                </Reveal>

                <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {productEcosystem.map((p, i) => (
                        <Reveal key={p.title} delay={i * 60} className="section-card overflow-hidden">
                            <div className="relative aspect-square w-full bg-[#F4F4F8] transition-transform duration-500 ease-out hover:scale-[1.04]">
                                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="200px" />
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-bold text-[#16151A]">{p.title}</p>
                                <p className="mt-1 text-[11px] leading-relaxed text-[#9297A3]">{p.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {brandStats.map((b, i) => (
                        <Reveal
                            key={b.label}
                            delay={i * 60}
                            className="rounded-2xl bg-[#EEEDF6] px-6 py-6 text-center transition-colors duration-300 hover:bg-[#E4E2F5]"
                        >
                            <p className="text-xl font-extrabold text-[#16151A]">{b.value}</p>
                            <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-[#9297A3]">
                                {b.label}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* 03 CHALLENGE / 04 RESEARCH */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <NumberedEyebrow n="03">THE CHALLENGE</NumberedEyebrow>
                            <h2 className="mt-3 text-2xl font-extrabold text-[#16151A]">The Problem Statement</h2>
                            <p className="mt-2 mb-6 max-w-md text-[13px] leading-relaxed text-[#6E7180]">
                                Despite a strong brand presence, Tefal India&rsquo;s digital experience had several
                                critical gaps.
                            </p>
                        </Reveal>

                        <Reveal delay={100} className="section-card p-7">
                            <div className="space-y-6">
                                {problemStatement.map((c) => (
                                    <div key={c.title} className="flex gap-3">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                                            <IconCrossCircle />
                                        </span>
                                        <div>
                                            <p className="text-[15px] font-bold text-[#16151A]">{c.title}</p>
                                            <p className="mt-0.5 max-w-sm text-[13px] leading-relaxed text-[#6E7180]">
                                                {c.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <div>
                        <Reveal delay={80}>
                            <NumberedEyebrow n="04">RESEARCH &amp; AUDIT</NumberedEyebrow>
                            <h2 className="mt-3 text-2xl font-extrabold text-[#16151A]">Data-Driven Insights</h2>
                            <p className="mt-2 mb-6 max-w-md text-[13px] leading-relaxed text-[#6E7180]">
                                We performed live user testing, navigation audits, and visual heatmap analyses.
                            </p>
                        </Reveal>

                        <Reveal delay={180} className="section-card p-7">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-[#16151A]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
                                    HOME HEATMAP ANALYSIS
                                </p>
                                <span className="text-[11px] font-bold text-amber-500">{heatmapInsight.tag}</span>
                            </div>
                            <div
                                className="relative mb-4 w-full overflow-hidden rounded-xl"
                                style={{ aspectRatio: "1596 / 390" }}
                            >
                                <Image
                                    src="/heatmap.png"
                                    alt="Heatmap overlay on the Tefal India storefront showing where user attention concentrated"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 33vw, 100vw"
                                />
                                <div className="absolute inset-x-0 bottom-3 flex justify-center">
                                    <div className="rounded-full bg-black/70 px-4 py-1.5">
                                        <p className="text-xs font-bold text-white">{heatmapInsight.stat}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[12px] leading-relaxed text-[#6E7180]">{heatmapInsight.note}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* STRATEGY & ROADMAP (dark banner) */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <Reveal className="rounded-2xl bg-[#0A0E1A] px-8 py-10 sm:px-12">
                    <p className="mb-3 text-[11px] font-bold tracking-widest text-[#E11D48]">
                        OUR STRATEGY &amp; ROADMAP
                    </p>
                    <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                        The 6-Step Implementation Cycle
                    </h2>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-white/50">
                        How SM Solutions streamlined Tefal&rsquo;s design transition from basic e-commerce to highly
                        customized user journeys.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
                        {roadmap.map((r, i) => (
                            <Reveal key={r.n} delay={i * 80} className="pr-4">
                                <p className="text-2xl font-extrabold text-[#E11D48]">{r.n}</p>
                                <p className="mt-3 text-sm font-bold text-white">{r.title}</p>
                                <p className="mt-1 text-[11px] leading-relaxed text-white/45">{r.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* 06 SOLUTION SHOWCASE */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <Reveal>
                    <SectionEyebrow n="06">SOLUTION SHOWCASE</SectionEyebrow>
                    <h2 className="text-2xl font-extrabold text-[#16151A]">The Redesigned Experience</h2>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-[#6E7180]">
                        We rebuilt essential touchpoints to present beautiful product renders and smooth e-commerce
                        steps.
                    </p>
                </Reveal>

                <div className="mt-7 grid gap-6 items-stretch lg:grid-cols-[1.2fr_1fr]">
                    <div className="flex flex-col gap-6">
                        {redesignCards.map((c, i) => (
                            <Reveal key={c.title} delay={i * 100} className="section-card p-6">
                                <p className="text-xl font-bold text-[#16151A]">{c.title}</p>
                                <p className="mt-2 text-[15px] leading-relaxed text-[#6E7180]">{c.desc}</p>
                                <span
                                    className={`mt-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold ${c.badgeColor}`}
                                >
                                    {c.badge}
                                </span>
                            </Reveal>
                        ))}
                    </div>

                    {/* Right card: stretches to match the combined height of the two left cards */}
                    <Reveal delay={120} className="section-card overflow-hidden flex h-full flex-col">
                        <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            <div className="mx-auto flex items-center gap-1.5 rounded-md bg-[#F1F1F5] px-4 py-1 text-[10px] text-[#9297A3]">
                                <IconLock />
                                {recipeCard.urlPath}
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-1 flex items-center justify-between">
                                <p className="text-[10px] font-bold tracking-widest text-[#E11D48]">
                                    {recipeCard.kicker}
                                </p>
                                <span className="flex items-center gap-1 rounded-full bg-[#F1F1F5] px-3 py-1 text-[11px] font-medium text-[#6E7180]">
                                    <IconClock /> {recipeCard.time}
                                </span>
                            </div>

                            <p className="mb-0 text-lg font-extrabold text-[#16151A]">{recipeCard.title}</p>

                            <div className="grid flex-1 grid-cols-[1.3fr_1fr] items-stretch gap-4">
                                <div
                                    className="relative w-full overflow-hidden rounded-xl"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, transparent 75%, #eee 75%)",
                                        backgroundSize: "20px 20px",
                                        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                                        backgroundColor: "#fafafa",
                                    }}
                                >
                                    <Image
                                        src="/images/recipes/tandoori-paneer.png"
                                        alt="Crispy Tandoori Paneer recipe with linked Tefal Easy Fry & Grill product"
                                        fill
                                        className="object-contain p-4"
                                        sizes="300px"
                                    />
                                </div>

                                <div className="overflow-y-auto rounded-xl bg-[#F7F7FA] p-4">
                                    <p className="mb-2 text-[9px] font-bold tracking-widest text-[#9297A3]">
                                        {recipeCard.applianceLabel}
                                    </p>
                                    <p className="mb-3 text-[13px] font-bold leading-tight text-[#16151A]">
                                        {recipeCard.product}
                                    </p>
                                    <div className="relative mb-3 h-16 w-full overflow-hidden rounded-md bg-white">
                                        <Image
                                            src="/images/products/easy-fry-grill.png"
                                            alt={recipeCard.product}
                                            fill
                                            className="object-contain p-2"
                                            sizes="150px"
                                        />
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-[13px] font-extrabold text-[#16151A]">{recipeCard.price}</p>
                                        <p className="text-[11px] text-[#9297A3] line-through">
                                            {recipeCard.originalPrice}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-4 w-full rounded-lg bg-[#E11D48] py-2.5 text-[11px] font-bold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0">
                                {recipeCard.cta}
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 07 BEFORE VS AFTER */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <Reveal>
                    <SectionEyebrow n="07">BEFORE VS AFTER</SectionEyebrow>
                    <h2 className="text-2xl font-extrabold text-[#16151A]">Visual Improvement Analysis</h2>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-[#6E7180]">
                        Direct comparison of the older interface patterns vs the newly designed experiences.
                    </p>
                </Reveal>

                <div className="mt-7 grid gap-6 lg:grid-cols-2">
                    {/* BEFORE */}
                    <Reveal className="section-card p-6">
                        <p className="mb-4 text-[11px] font-bold tracking-widest text-[#9297A3]">
                            {visualCompare.before.label}
                        </p>
                        <div className="mb-4 space-y-2 rounded-xl border border-gray-100 bg-white p-5">
                            <div className="h-3 w-2/3 rounded bg-gray-200" />
                            <div className="h-3 w-1/2 rounded bg-gray-200" />
                            <div className="mt-3 grid grid-cols-4 gap-2">
                                {visualCompare.before.items.map((item) => (
                                    <div
                                        key={item}
                                        className="flex h-14 items-center justify-center rounded-lg bg-gray-100"
                                    >
                                        <span className="text-[11px] font-medium text-gray-400">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-start gap-2 rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-[12px] leading-relaxed text-rose-500">
                            <span>⚠️</span>
                            {visualCompare.before.note}
                        </div>
                    </Reveal>

                    {/* AFTER */}
                    <Reveal delay={120} className="section-card p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-[11px] font-bold tracking-widest text-[#9297A3]">
                                {visualCompare.after.label}
                            </p>
                            <span className="text-[11px] font-bold tracking-wide text-[#E11D48]">
                                {visualCompare.after.tag}
                            </span>
                        </div>
                        <div className="mb-4 rounded-xl border border-gray-100 p-5">
                            <p className="mb-3 text-sm font-bold text-[#16151A]">{visualCompare.after.heading}</p>
                            <div className="grid grid-cols-2 gap-3">
                                {visualCompare.after.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-2.5 rounded-lg bg-[#F7F7FA] p-2.5 transition-colors duration-300 hover:bg-[#EFEFF7]"
                                    >
                                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-[#EFEFF4]">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                                sizes="40px"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold leading-tight text-[#16151A]">
                                                {item.name}
                                            </p>
                                            <p className="text-[10px] text-[#9297A3]">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-start gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-[12px] leading-relaxed text-emerald-600">
                            <span>✅</span>
                            {visualCompare.after.note}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 08 RESULTS DASHBOARD */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <Reveal className="section-card p-8">
                    <SectionEyebrow n="08">RESULTS DASHBOARD</SectionEyebrow>
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
                        <div>
                            <h2 className="text-2xl font-extrabold leading-tight text-[#16151A]">
                                Unprecedented
                                <br />
                                Commercial Growth
                            </h2>
                            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[#6E7180]">
                                In the 6 months following deployment, digital store transactions and engagement
                                metrics reached record highs.
                            </p>

                            <div className="mt-7 space-y-4">
                                {resultsMetrics.map((m, i) => (
                                    <div
                                        key={m.label}
                                        className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-sm"
                                        style={{ transitionDelay: `${i * 40}ms` }}
                                    >
                                        <p className="text-[12px] font-medium text-[#4C4F5B]">{m.label}</p>
                                        <p className="text-[12px] font-extrabold text-emerald-600">{m.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="mb-5 flex items-center justify-between">
                                <p className="text-[12px] font-bold text-[#16151A]">
                                    Monthly Organic Traffic (Before vs After)
                                </p>
                                <div className="flex items-center gap-4 text-[11px] font-semibold">
                                    <span className="flex items-center gap-1.5 text-[#6E7180]">
                                        <span className="h-2 w-2 rounded-full bg-gray-300" />
                                        Before
                                    </span>
                                    <span className="flex items-center gap-1.5 text-[#E11D48]">
                                        <span className="h-2 w-2 rounded-full bg-[#E11D48]" />
                                        After
                                    </span>
                                </div>
                            </div>
                            <div ref={chartRef} className="rounded-2xl bg-[#F7F7FA] px-6 pb-4 pt-6">
                                <div className="flex h-40 items-end justify-between gap-6">
                                    {trafficChart.map((m, idx) => (
                                        <div key={m.label} className="flex flex-1 flex-col items-center gap-2">
                                            <div className="flex h-40 items-end gap-1.5">
                                                <div
                                                    className={`chart-bar w-4 rounded-t-sm bg-gray-300 ${chartInView ? "in-view" : ""}`}
                                                    style={{
                                                        height: `${(m.before / maxBar) * 100}%`,
                                                        animationDelay: `${idx * 0.12}s`,
                                                    }}
                                                />
                                                <div
                                                    className={`chart-bar w-4 rounded-t-sm bg-[#E11D48] ${chartInView ? "in-view" : ""}`}
                                                    style={{
                                                        height: `${(m.after / maxBar) * 100}%`,
                                                        animationDelay: `${idx * 0.12 + 0.08}s`,
                                                    }}
                                                />
                                            </div>
                                            <p
                                                className={`chart-bar-label text-[10px] font-bold text-[#9297A3] ${chartInView ? "in-view" : ""}`}
                                                style={{ transitionDelay: `${idx * 0.12 + 0.5}s` }}
                                            >
                                                {m.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* DESIGN SYSTEM */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <Reveal>
                    <p className="mb-3 text-[11px] font-bold tracking-widest text-[#E11D48]">DESIGN SYSTEM</p>
                    <h2 className="text-2xl font-extrabold text-[#16151A]">Components &amp; Guidelines</h2>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-[#6E7180]">
                        We developed a cohesive UI toolkit to allow Tefal India&rsquo;s local marketing teams to launch
                        new sub-pages effortlessly.
                    </p>
                </Reveal>

                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Reveal delay={0} className="section-card p-6">
                        <p className="mb-4 border-b border-gray-100 pb-3 text-sm font-bold tracking-wide text-[#16151A]">
                            COLOR PALETTE
                        </p>
                        <div className="space-y-3">
                            {colorPalette.map((c) => (
                                <div key={c.name} className="flex items-center gap-2.5">
                                    <span
                                        className={`h-5 w-5 rounded-md transition-transform duration-200 hover:scale-125 ${c.bordered ? "border border-gray-200" : ""}`}
                                        style={{ backgroundColor: c.hex }}
                                    />
                                    <p className="text-[12px] font-semibold text-[#16151A]">
                                        {c.hex}{" "}
                                        <span className="font-normal text-[#9297A3]">({c.name})</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={70} className="section-card p-6">
                        <p className="mb-4 border-b border-gray-100 pb-3 text-sm font-bold tracking-wide text-[#16151A]">
                            TYPOGRAPHY
                        </p>
                        <p className="text-4xl font-extrabold text-[#16151A]">Aa</p>
                        <p className="mt-2 text-xs font-bold text-[#16151A]">Inter Font Family</p>
                        <p className="mt-1 text-[10px] leading-relaxed text-[#9297A3]">
                            Highly legible workhorse font optimized for screens.
                        </p>
                    </Reveal>

                    <Reveal delay={140} className="section-card p-6">
                        <p className="mb-4 border-b border-gray-100 pb-3 text-sm font-bold tracking-wide text-[#16151A]">
                            BUTTONS
                        </p>
                        <div className="flex flex-col gap-2">
                            <button className="rounded-md bg-[#E11D48] py-2 text-center text-[11px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5">
                                Primary CTA
                            </button>
                            <button className="rounded-md border border-gray-200 py-2 text-center text-[11px] font-semibold text-[#4C4F5B] transition-transform duration-200 hover:-translate-y-0.5">
                                Secondary Button
                            </button>
                        </div>
                    </Reveal>

                    <Reveal delay={210} className="section-card p-6">
                        <p className="mb-4 border-b border-gray-100 pb-3 text-sm font-bold tracking-wide text-[#16151A]">
                            COMPONENTS
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {componentChips.map((chip) => (
                                <span
                                    key={chip.label}
                                    className={`rounded-full px-3 py-1.5 text-[10px] font-bold transition-transform duration-200 hover:scale-105 ${chip.color}`}
                                >
                                    {chip.label}
                                </span>
                            ))}
                        </div>
                        <div className="mt-3 flex gap-3 text-[#9297A3]">
                            <IconHeartOutline />
                            <IconBagOutline />
                            <IconSearch />
                            <IconHomeOutline />
                            <IconUserOutline />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* TESTIMONIAL + RATING */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-14">
                <div className="grid items-stretch gap-6 lg:grid-cols-[1.6fr_1fr]">
                    <Reveal className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-[#0A0E1A] px-8 py-8 sm:px-10">
                        <p className="text-3xl font-serif leading-none text-[#E11D48]">&ldquo;</p>
                        <p className="text-[15px] leading-relaxed text-white/80">{testimonial.quote}</p>
                        <div className="mt-6 flex items-center gap-3">
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="h-9 w-9 shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm font-bold text-white">{testimonial.name}</p>
                                <p className="text-xs text-white/50">{testimonial.role}</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={120} className="section-card flex h-full flex-col items-center justify-center bg-[#0A0E1A] p-8 text-center">
                        <p className="text-4xl font-extrabold text-white">4.9/5</p>
                        <p className="mt-2 text-[11px] font-bold tracking-widest text-white/50">CLIENT RATING</p>
                        <div className="mt-3 flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <IconStar key={i} />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* TESTIMONIAL CARD (secondary) + CTA */}
            <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-8">
                <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.6fr]">
                    <Reveal className="section-card flex h-full flex-col justify-between bg-white p-7">
                        <div>
                            <p className="mb-4 text-[11px] font-bold tracking-widest text-[#E11D48]">
                                CLIENT TESTIMONIAL
                            </p>
                            <p className="mb-2 text-3xl font-serif leading-none text-rose-500">&ldquo;</p>
                            <p className="text-[15px] leading-relaxed text-[#4C4F5B]">
                                SM Solutions truly understood our brand and our customers. The new experience is
                                beautiful, fast, and delivering outstanding business results.
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-3">
                            <img
                                src="/images/testimonial/anil-sharma.png"
                                alt="Anil Sharma"
                                className="h-9 w-9 shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm font-bold text-[#16151A]">Anil Sharma</p>
                                <p className="text-xs text-[#9297A3]">Head of Digital, Tefal India</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={120} className="relative flex h-full min-h-[280px] items-center justify-between gap-6 overflow-hidden rounded-2xl bg-[#0A0E1A] px-8 py-10 sm:px-12">
                        <div className="max-w-sm">
                            <h3 className="text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                                Ready to achieve similar results?
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-[15px]">
                                Let&apos;s build a digital experience that drives growth.
                            </p>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c81b40] active:translate-y-0">
                                Connect With Us
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>

                        <div className="relative hidden h-40 w-40 shrink-0 sm:block sm:h-48 sm:w-48">
                            <Image
                                src="/images/rocket-growth.png"
                                alt="Rocket launching from an ascending growth chart"
                                fill
                                className="object-contain"
                                sizes="192px"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* SUCCESS STORY BANNER */}
            {/* <section className="relative z-[1] mx-auto max-w-[1800px] px-1 pt-6">
                <Reveal className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#4C5FEA] px-8 py-8 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
                            <img src="/images/icons/rocket.png" alt="" className="h-7 w-7" />
                        </span>
                        <div>
                            <p className="text-xl font-bold text-white sm:text-2xl">
                                Ready to Be Our Next Success Story?
                            </p>
                            <p className="mt-1 text-sm text-white/80">
                                Let&apos;s discuss how we can help you achieve measurable growth.
                            </p>
                        </div>
                    </div>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4C5FEA] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-50 active:translate-y-0">
                        Connect With Us →
                    </a>
                </Reveal>
            </section> */}

        </main>
    );
}