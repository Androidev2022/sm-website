"use client";
// app/clients/page.tsx
import { useEffect, useMemo, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

// ─── Content ─────────────────────────────────────────────────────────────────
type Industry =
    | "Consumer & FMCG"
    | "Real Estate"
    | "Healthcare"
    | "Manufacturing"
    | "Education"
    | "Technology"
    | "Other Industries";

const filters: ("All Clients" | Industry)[] = [
    "All Clients",
    "Consumer & FMCG",
    "Real Estate",
    "Healthcare",
    "Manufacturing",
    "Education",
    "Technology",
    "Other Industries",
];

type Client = { name: string; logo: string; industry: Industry; tall?: boolean };

// Logos live in /public/clients/logos/
const L = (file: string) => `/clients/logos/${file}.png`;

const clients: Client[] = [
    { name: "Groupe SEB", logo: L("groupe-seb"), industry: "Consumer & FMCG", tall: true },
    { name: "Tefal", logo: L("tefal"), industry: "Consumer & FMCG" },
    { name: "IGCC", logo: L("igcc"), industry: "Other Industries" },
    { name: "Maharaja Whiteline", logo: L("maharaja"), industry: "Consumer & FMCG" },
    { name: "Del Monte", logo: L("delmonte"), industry: "Consumer & FMCG", tall: true },
    { name: "Ayana Properties", logo: L("ayana"), industry: "Real Estate" },
    { name: "Airtel", logo: L("airtel"), industry: "Technology" },
    { name: "Medhavi Skills University", logo: L("medhavi"), industry: "Education" },
    { name: "Nitya Bajaj", logo: L("nitya-bajaj"), industry: "Other Industries", tall: true },
    { name: "IEM Robotics", logo: L("iem-robotics"), industry: "Manufacturing" },
    { name: "HYT Engineering", logo: L("hyt"), industry: "Manufacturing", tall: true },
    { name: "Bellavita", logo: L("bellavita"), industry: "Consumer & FMCG" },
    { name: "Centre for Responsible Business", logo: L("crb"), industry: "Other Industries", tall: true },
    { name: "Learner Circles", logo: L("learner-circles"), industry: "Education" },
    { name: "Osmosis", logo: L("osmosis"), industry: "Technology" },
    { name: "Tata Innoverse", logo: L("tata-innoverse"), industry: "Technology" },
    { name: "Breathe Easy", logo: L("breathe-easy"), industry: "Healthcare", tall: true },
    { name: "HyLyt", logo: L("hylyt"), industry: "Technology", tall: true },
    { name: "Mockiwiki", logo: L("mockiwiki"), industry: "Technology", tall: true },
    { name: "The Pink Collar", logo: L("pink-collar"), industry: "Consumer & FMCG", tall: true },
    { name: "Protean", logo: L("protean"), industry: "Technology", tall: true },
    { name: "Buoyant Performing Arts Studio", logo: L("buoyant"), industry: "Education", tall: true },
    { name: "Good Health Store", logo: L("good-health"), industry: "Healthcare", tall: true },
    { name: "You n Me Travel", logo: L("you-n-me-travel"), industry: "Other Industries", tall: true },
    { name: "Hi Tech Audio System", logo: L("hitech-audio"), industry: "Manufacturing" },
    { name: "Poshan Mantra", logo: L("poshan-mantra"), industry: "Healthcare" },
    { name: "Centum Learning", logo: L("centum-learning"), industry: "Education" },
    { name: "E-Tex", logo: L("etex"), industry: "Manufacturing" },
    { name: "Batras Mart", logo: L("batras-mart"), industry: "Consumer & FMCG" },
    { name: "Fashion Gallery", logo: L("fashion-gallery"), industry: "Consumer & FMCG" },
    { name: "Hari Darshan", logo: L("hari-darshan"), industry: "Consumer & FMCG" },
    { name: "Elite Global", logo: L("elite-global"), industry: "Real Estate" },
    // ── New in your logo pack (not in the design) ──
    { name: "Omkara Guruji", logo: L("omkara-guruji"), industry: "Other Industries" },
    { name: "Chitravali", logo: L("chitravali"), industry: "Other Industries" },
    { name: "Zavers", logo: L("zevers"), industry: "Consumer & FMCG" },
];

// Logos in the strip under the hero (heights tuned for visual balance)
const featured = [
    { name: "Groupe SEB", logo: L("groupe-seb"), size: "h-12 md:h-14" },
    { name: "Tefal", logo: L("tefal"), size: "h-7 md:h-8" },
    { name: "Del Monte", logo: L("delmonte"), size: "h-12 md:h-14" },
    { name: "Ayana Properties", logo: L("ayana"), size: "h-9 md:h-10" },
    { name: "Airtel", logo: L("airtel"), size: "h-8 md:h-9" },
    { name: "Maharaja Whiteline", logo: L("maharaja"), size: "h-9 md:h-10" },
];

// Image that hides itself if the file is missing
function SafeImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    const [failed, setFailed] = useState(false);
    if (failed) return null;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} onError={() => setFailed(true)} />;
}

export default function ClientsPage() {
    const [scrollY, setScrollY] = useState(0);
    const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All Clients");

    const visibleClients = useMemo(
        () => (activeFilter === "All Clients" ? clients : clients.filter((c) => c.industry === activeFilter)),
        [activeFilter]
    );

    // ─── Magnetic buttons ─────────────────────────────────────────────────────
    useEffect(() => {
        const magneticEls = document.querySelectorAll(".magnetic");
        const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const btn = mouseEvent.currentTarget as HTMLElement;
            const rect = btn.getBoundingClientRect();
            const distX = mouseEvent.clientX - (rect.left + rect.width / 2);
            const distY = mouseEvent.clientY - (rect.top + rect.height / 2);
            btn.style.transform = `translate(${distX * 0.3}px, ${distY * 0.3}px) scale(1.04)`;
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

        .magnetic { display: inline-flex; align-items: center; white-space: nowrap; transition: transform .45s cubic-bezier(.22,1,.36,1); }

        .logo-card { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease, border-color .35s ease; }
        .logo-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(37,99,235,0.12); border-color: #bfdbfe; }
        .logo-card:hover img { transform: scale(1.06); }
        .logo-card img { transition: transform .5s cubic-bezier(.22,1,.36,1); }

        @keyframes card-in { from { opacity:0; transform: translateY(14px) scale(.98);} to { opacity:1; transform: none;} }
        .card-in { animation: card-in .45s cubic-bezier(.22,1,.36,1) both; }

        @keyframes float-up-down { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-10px);} }
        .float-card { animation: float-up-down 5s ease-in-out infinite; }
      `}</style>

            <div id="scroll-bar" style={{ width: `${scrollProgress * 100}%` }} />


            <main
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
                            <span className="text-slate-900">Our Clients</span>
                        </nav>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 pt-10 pb-10 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="hero-eyebrow inline-block bg-blue-100 text-blue-700 font-bold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full mb-5">
                                Our Clients
                            </span>
                            <h1 className="hero-title text-4xl md:text-[3.2rem] font-extrabold tracking-tight leading-[1.1] text-slate-900">
                                Built on <span className="text-blue-600">Partnerships.</span>
                                <br />
                                Proven Across Industries.
                            </h1>
                            <p className="hero-sub mt-6 text-slate-500 text-lg leading-relaxed max-w-lg">
                                From established global brands to ambitious growing businesses, we work alongside teams to design, build and
                                grow digital experiences that move businesses forward.
                            </p>
                            <div className="hero-btns mt-8 flex flex-wrap gap-4">
                                <a
                                    href="/case-studies"
                                    className="magnetic bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                                >
                                    Explore Case Studies <ArrowRight size={16} />
                                </a>
                                <a
                                    href="/contact"
                                    className="magnetic border border-blue-600 text-blue-700 hover:bg-blue-50 px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                                >
                                    Discuss a Project <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="hero-visual relative flex justify-center items-center min-h-[400px]">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-[-10%]"
                                style={{
                                    background:
                                        "radial-gradient(closest-side, rgba(147,197,253,0.55), rgba(191,219,254,0.35) 45%, rgba(247,249,252,0) 100%)",
                                    filter: "blur(30px)",
                                }}
                            />
                            {/* Globe with floating client logos (PNG with transparent, feathered edges) */}
                            <SafeImg
                                src="/clients/hero-globe.png"
                                alt="Globe with client logos – Tefal, Ayana, Del Monte and Airtel"
                                className="float-card relative z-10 w-full md:w-[112%] max-w-none h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* FEATURED LOGO STRIP */}
                    <div className="max-w-7xl mx-auto px-6 pb-7">
                        <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.06)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center py-2">
                            {featured.map((b, i) => (
                                <div
                                    key={b.name}
                                    className={`h-20 flex items-center justify-center px-6 ${i < featured.length - 1 ? "md:border-r md:border-slate-200" : ""
                                        }`}
                                >
                                    <SafeImg
                                        src={b.logo}
                                        alt={b.name}
                                        title={b.name}
                                        className={`${b.size} w-auto max-w-[150px] object-contain transition duration-300 hover:scale-105`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CLIENT PORTFOLIO */}
                <section className="max-w-7xl mx-auto px-6 py-14">
                    <div className="reveal text-center mb-8">
                        <h2 className="text-3xl md:text-[2.5rem] font-extrabold tracking-tight text-slate-900">A Diverse Client Portfolio</h2>
                        <p className="text-slate-600 mt-3">
                            Different industries. Different challenges. A shared focus on meaningful digital progress.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
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

                    {/* Logo grid */}
                    <div key={activeFilter} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {visibleClients.map((c, i) => (
                            <div
                                key={c.name}
                                className="card-in logo-card bg-white rounded-xl border border-slate-100 shadow-sm px-4 pt-5 pb-4 flex flex-col items-center justify-between text-center"
                                style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}
                            >
                                <div className="h-16 md:h-[72px] w-full flex items-center justify-center">
                                    <SafeImg
                                        src={c.logo}
                                        alt={`${c.name} logo`}
                                        className={`${c.tall ? "h-14 md:h-16" : "h-10 md:h-11"} w-auto max-w-[80%] object-contain`}
                                    />
                                </div>
                                <p className="mt-3 text-[13px] font-medium text-slate-700">{c.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

        </>
    );
}
