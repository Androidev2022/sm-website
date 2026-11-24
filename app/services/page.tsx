"use client";
// app/services/page.tsx
import { useEffect, useRef, useState } from "react";
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
    Rocket,
    Phone,
    Mail,
    MapPin,
    ChevronDown,
    type LucideIcon,
} from "lucide-react";

// ─── Social icons (same as home page) ───────────────────────────────────────
type IconProps = { size?: number };

const LinkedinIcon = ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
);

const InstagramIcon = ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const FacebookIcon = ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
);

const YoutubeIcon = ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
);

// ─── Content ─────────────────────────────────────────────────────────────────
const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true, active: true },
    { label: "Case Studies", href: "/casedetails" },
    { label: "Insights", href: "#" },
    { label: "Contact", href: "#" },
];

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

const footerCols = [
    { title: "Services", items: ["Digital Strategy", "Web Development", "Mobile App Development", "Cloud & DevOps", "UI/UX Design", "Digital Marketing"] },
    { title: "Industries", items: ["E-Commerce", "FMCG & Consumer", "Real Estate", "Manufacturing", "SaaS & Technology", "Healthcare"] },
    { title: "Company", items: ["About Us", "Our Team", "Careers", "Partners", "Blog", "Contact Us"] },
    { title: "Resources", items: ["Case Studies", "Insights", "Whitepapers", "FAQs"] },
];

const socials = [LinkedinIcon, InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon];

const contacts = [
    { icon: Phone, text: "+91 98765 43210" },
    { icon: Mail, text: "hello@smsolutions.in" },
    { icon: MapPin, text: "Gurugram, India" },
];

export default function ServicesPage() {
    const arrowRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: -200, y: -200 });
    const [scrollY, setScrollY] = useState(0);
    const [cursorHovering, setCursorHovering] = useState(false);
    const [cursorClicking, setCursorClicking] = useState(false);

    // ─── Arrow cursor + sparkle trail ────────────────────────────────────────
    useEffect(() => {
        let lastSpawn = 0;
        const COLORS = ["#2563EB", "#6777AD", "#60a5fa", "#a78bfa", "#34d399"];

        const spawnSparkle = (x: number, y: number) => {
            const el = document.createElement("div");
            const size = 6 + Math.random() * 8;
            const angle = Math.random() * Math.PI * 2;
            const dist = 18 + Math.random() * 28;
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            const rot = Math.random() * 360;
            const dur = 500 + Math.random() * 400;
            el.style.cssText = `
        position:fixed;pointer-events:none;z-index:9997;
        width:${size}px;height:${size}px;
        left:${x - size / 2}px;top:${y - size / 2}px;
        background:${color};
        clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);
        transform:rotate(${rot}deg) scale(1);
        opacity:1;
        transition:transform ${dur}ms cubic-bezier(.22,1,.36,1), opacity ${dur}ms ease, left ${dur}ms ease, top ${dur}ms ease;
        box-shadow:0 0 6px ${color}88;
      `;
            document.body.appendChild(el);
            requestAnimationFrame(() => {
                el.style.left = `${x + Math.cos(angle) * dist - size / 2}px`;
                el.style.top = `${y + Math.sin(angle) * dist - size / 2}px`;
                el.style.transform = `rotate(${rot + 180}deg) scale(0)`;
                el.style.opacity = "0";
            });
            setTimeout(() => el.remove(), dur + 50);
        };

        const onMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (arrowRef.current) {
                arrowRef.current.style.left = `${e.clientX}px`;
                arrowRef.current.style.top = `${e.clientY}px`;
            }
            const now = Date.now();
            if (now - lastSpawn > 40) {
                lastSpawn = now;
                spawnSparkle(e.clientX, e.clientY);
            }
        };
        const onDown = () => {
            setCursorClicking(true);
            for (let i = 0; i < 8; i++) {
                setTimeout(() => spawnSparkle(mousePos.current.x, mousePos.current.y), i * 30);
            }
        };
        const onUp = () => setCursorClicking(false);

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
        };
    }, []);

    useEffect(() => {
        const interactables = document.querySelectorAll("a, button, input, [data-hover]");
        const enter = () => setCursorHovering(true);
        const leave = () => setCursorHovering(false);
        interactables.forEach((el) => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });
        return () => {
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, []);

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
        * { cursor: none !important; }
        body { background: #F7F9FC; }

        #scroll-bar {
          position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
          background: linear-gradient(90deg, #2563EB, #6777AD, #60a5fa);
          transition: width 0.05s linear;
        }
        #ab-arrow { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999; will-change: left, top; }
        #ab-arrow svg { filter: drop-shadow(0 0 6px rgba(37,99,235,0.6)); transition: transform 0.15s cubic-bezier(.22,1,.36,1); }
        #ab-arrow.hovering svg { transform: scale(1.25); filter: drop-shadow(0 0 14px rgba(37,99,235,0.9)); }
        #ab-arrow.clicking svg { transform: scale(0.85) rotate(-12deg); }

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
                id="ab-arrow"
                ref={arrowRef}
                className={`${cursorHovering ? "hovering" : ""} ${cursorClicking ? "clicking" : ""}`}
            >
                <svg width="24" height="30" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 2L2 24L8.5 18L13.5 29L16.5 27.5L11.5 16.5L20 16.5L2 2Z"
                        fill="white" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                    />
                </svg>
            </div>

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
                {/* NAVBAR (same as home) */}
                <header className="w-full bg-white/85 border-b border-slate-100 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                        <a href="/" className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg">S</div>
                            <div className="leading-tight">
                                <div className="font-bold text-lg text-slate-900 tracking-tight">SM Solutions</div>
                                <div className="text-[9px] tracking-[0.12em] text-slate-400 font-medium uppercase">Engineering Growth. Designing Impact.</div>
                            </div>
                        </a>

                        <nav className="hidden md:flex gap-9 text-[15px] font-medium text-slate-600">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`nav-link flex items-center gap-1 hover:text-blue-600 transition-colors ${link.active ? "active text-blue-600" : ""}`}
                                >
                                    {link.label}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </a>
                            ))}
                        </nav>

                        <button className="magnetic bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
                            Book a Strategy Call <ArrowRight size={15} />
                        </button>
                    </div>
                </header>

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

                {/* CTA + FOOTER (same as home) */}
                <section className="w-full">
                    <div className="reveal w-full bg-blue-600">
                        {/* CTA strip */}
                        <div className="max-w-7xl mx-auto px-6 py-7 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                                    <Rocket size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl md:text-2xl leading-tight">Have a Project in Mind?</h3>
                                    <p className="text-blue-100 text-sm mt-1">Let&apos;s create something meaningful for your business.</p>
                                </div>
                            </div>
                            <button className="magnetic bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors flex-shrink-0">
                                Book a Strategy Call <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Dark footer panel */}
                        <footer className="w-full bg-[#0B1220]">
                            <div className="max-w-7xl mx-auto px-6 pt-12 pb-5">
                                <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 pb-10 border-b border-white/10">
                                    {/* Brand */}
                                    <div className="col-span-2 md:col-span-3">
                                        <div className="flex items-end gap-2 mb-4">
                                            <span className="text-white font-black text-[40px] leading-none tracking-tight">SM</span>
                                            <div className="leading-tight pb-0.5">
                                                <div className="font-bold text-lg text-white">Solutions</div>
                                                <div className="text-[8px] tracking-[0.14em] text-slate-400 font-medium uppercase">
                                                    Engineering Growth. Designing Impact.
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[13px] text-slate-400 leading-relaxed max-w-[240px]">
                                            We build high-performance digital ecosystems that drive measurable growth for ambitious brands worldwide.
                                        </p>
                                        <div className="flex items-center gap-2.5 mt-6">
                                            {socials.map((Icon, i) => (
                                                <a
                                                    key={i}
                                                    href="#"
                                                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 transition-colors"
                                                >
                                                    <Icon size={14} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Link columns */}
                                    {footerCols.map((col) => (
                                        <div key={col.title} className="md:col-span-2">
                                            <h4 className="font-semibold text-white text-sm mb-4">{col.title}</h4>
                                            <ul className="space-y-2.5 text-[13px] text-slate-400">
                                                {col.items.map((item) => (
                                                    <li key={item}>
                                                        <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {/* Contact */}
                                    <div className="col-span-2 md:col-span-1 md:min-w-[190px]">
                                        <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
                                        <ul className="space-y-3 text-[13px] text-slate-300">
                                            {contacts.map((c) => (
                                                <li key={c.text} className="flex items-center gap-2.5 whitespace-nowrap">
                                                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                                                        <c.icon size={12} />
                                                    </span>
                                                    {c.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="magnetic mt-5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] px-4 py-2.5 rounded-md font-semibold whitespace-nowrap transition-colors">
                                            Book a Strategy Call
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom bar */}
                                <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-5 text-xs text-slate-500">
                                    <p>© 2024 SM Solutions. All Rights Reserved.</p>
                                    <div className="flex gap-6">
                                        <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                                        <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
                                        <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>
        </>
    );
}