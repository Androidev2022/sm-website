import Image from "next/image";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "#" },
    { label: "Case Studies", href: "/casedetails" },
    { label: "Contact", href: "#" },
];

const stats = [
    { value: "+156%", label: "Traffic Growth", sub: "Organic Traffic" },
    { value: "+142%", label: "Revenue Growth", sub: "E-commerce Revenue" },
    { value: "+87%", label: "Conversion Lift", sub: "Transaction Count" },
    { value: "+65%", label: "Search Performance", sub: "Keyword Rankings" },
    { value: "4.9/5", label: "Client Happiness", sub: "Feedback Rating" },
];

const scope = [
    {
        icon: "🎯",
        title: "Strategy",
        items: ["UX Audit", "Competitor Research", "Information Architecture"],
    },
    {
        icon: "✏️",
        title: "Design",
        items: ["Wireframes", "UI/UX Design", "Design System", "Prototypes"],
    },
    {
        icon: "</>",
        title: "Development",
        items: [
            "Frontend Development",
            "Backend Development",
            "API Integrations",
        ],
    },
    {
        icon: "📈",
        title: "Growth",
        items: [
            "SEO Optimization",
            "Analytics Setup (GA4, GTM)",
            "Performance Marketing",
        ],
    },
];

const techArchitecture = [
    { title: "Frontend", items: ["Next.js", "React", "TypeScript"], icon: "/images/tech-icons/frontend.png", iconBg: "#DCE7FE", boxBg: "#F4F8FF" },
    { title: "Backend", items: ["Laravel", "Node.js", "REST APIs"], icon: "/images/tech-icons/backend.png", iconBg: "#FBDEE3", boxBg: "#FEF5F7" },
    { title: "Infrastructure", items: ["AWS", "Cloudflare", "CDN"], icon: "/images/tech-icons/infrastructure.png", iconBg: "#DCE7FE", boxBg: "#F4F8FF" },
    { title: "Security", items: ["SSL Encryption", "WAF", "Monitoring"], icon: "/images/tech-icons/security.png", iconBg: "#FBDEE3", boxBg: "#FEF5F7" },
];

const aboutStats = [
    { label: "Countries Reached", value: "120+", icon: "globe" },
    { label: "Products Sold Annually", value: "150M+", icon: "basket" },
    { label: "Years of Innovation", value: "70+", icon: "clock" },
    { label: "Trusted By Millions of Families", value: "", icon: "star" },
];

const challenges = [
    {
        title: "Product Discovery Friction",
        desc: "Users struggled to find the right products across complex catalog layers.",
        icon: "search",
    },
    {
        title: "Recipe to Product Journey Gaps",
        desc: "No seamless connection between recipe content and relevant product discovery.",
        icon: "book",
    },
    {
        title: "Mobile Experience Inefficiencies",
        desc: "Slow load times, small CTAs and poor navigation resulted in high bounce rates.",
        icon: "mobile",
    },
];

const engineeringChallenges = [
    { n: "01", text: "Managing 10,000+ SKUs without affecting performance" },
    { n: "02", text: "Delivering lightning-fast experience for 80%+ mobile users" },
    { n: "03", text: "Building recipe to product integration with smooth checkout flow" },
];

const roadmap = [
    {
        n: "01",
        title: "Discover",
        desc: "Deep audit & stakeholder alignment",
        bg: "bg-rose-50",
        text: "text-rose-500",
    },
    {
        n: "02",
        title: "Research",
        desc: "Heatmap audit, analytics & competitor analysis",
        bg: "bg-violet-50",
        text: "text-violet-500",
    },
    {
        n: "03",
        title: "Architecture",
        desc: "Restructured navigation, search & categories",
        bg: "bg-blue-50",
        text: "text-blue-500",
    },
    {
        n: "04",
        title: "Wireframing",
        desc: "Interactive prototypes for key journeys",
        bg: "bg-orange-50",
        text: "text-orange-500",
    },
    {
        n: "05",
        title: "UI Exploration",
        desc: "Premium UI system with Tefal brand language",
        bg: "bg-emerald-50",
        text: "text-emerald-500",
    },
    {
        n: "06",
        title: "Optimization",
        desc: "Post-launch checks & continuous optimize",
        bg: "bg-sky-50",
        text: "text-sky-500",
    },
];

const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Node.js",
    "MySQL",
    "AWS",
    "Cloudflare",
    "Redis",
    "GitHub",
    "GA4",
    "GTM",
    "Hotjar",
    "Looker Studio",
    "Vercel",
];

const infraSecurity = [
    "AWS Cloud Hosting",
    "Cloudflare CDN & DDoS Protection",
    "SSL Certificate & HTTPS Enforcement",
    "Automated Daily Backups",
    "24/7 Monitoring & Alerts",
    "Performance Optimization",
    "Disaster Recovery Plan",
];

const beforeAfter = {
    before: ["Cluttered Layout", "Poor Navigation", "Low Conversions", "No Recipe Integration"],
    after: ["Clean & Modern UI", "Easy Navigation", "Higher Conversions", "Recipe to Product Flow"],
};

const resultsDashboard = [
    { label: "Organic Traffic", value: "+156%", beforePct: 14, afterPct: 62 },
    { label: "E-commerce Revenue", value: "+142%", beforePct: 10, afterPct: 52 },
    { label: "Transaction Count", value: "+87%", beforePct: 10, afterPct: 38 },
    { label: "Keyword Rankings", value: "+65%", beforePct: 8, afterPct: 24 },
    { label: "Mobile Bounce Rate", value: "-42%", beforePct: 46, afterPct: 16 },
];

const businessImpact = [
    { before: "Fragmented Navigation", after: "Category-driven discovery" },
    { before: "Recipe Traffic Siloed", after: "Recipe-to-purchase funnel" },
    { before: "Low engagement", after: "Higher user engagement" },
    { before: "High bounce rate", after: "Optimized mobile UX" },
    { before: "Manual marketing tracking", after: "Data-driven growth engine" },
];

const projectTeam = [
    { role: "UX Lead", subtitle: "User Journey Mapping", photo: "/images/team/ux-lead.png" },
    { role: "UI Designer", subtitle: "Interface Design", photo: "/images/team/ui-designer.png" },
    { role: "Frontend Engineer", subtitle: "React Development", photo: "https://i.pravatar.cc/72?img=13" },
    { role: "Backend Developer", subtitle: "API & Integrations", photo: "https://i.pravatar.cc/72?img=14" },
    { role: "DevOps Engineer", subtitle: "Cloud & Infrastructure", photo: "https://i.pravatar.cc/72?img=15" },
    { role: "SEO Specialist", subtitle: "Search Optimization", photo: "https://i.pravatar.cc/72?img=17" },
];

function Check() {
    return (
        <svg
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 111.415-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function Cross() {
    return (
        <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function RoseCheck() {
    return (
        <svg
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-500"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 111.415-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function SectionLabel({ children, large }: { children: React.ReactNode; large?: boolean }) {
    return (
        <p className={`eyebrow-dark mb-4 ${large ? "!text-base tracking-normal" : ""}`}>
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

/* ---- About Tefal stat icons (line style, sit in a soft lavender square) ---- */
function IconGlobe() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
        </svg>
    );
}

function IconBasket() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10h16l-1.4 8.4a2 2 0 01-2 1.6H7.4a2 2 0 01-2-1.6L4 10z" />
            <path d="M8 10V8a4 4 0 018 0v2" />
            <path d="M9.5 13.5v3" />
            <path d="M14.5 13.5v3" />
        </svg>
    );
}

function IconClock() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.5 2" />
        </svg>
    );
}

function IconStar() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
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

const aboutIconMap: Record<string, () => JSX.Element> = {
    globe: IconGlobe,
    basket: IconBasket,
    clock: IconClock,
    star: IconStar,
};

/* ---- Challenge icons (line style, sit in a soft rose circle) ---- */
function IconSearch() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
        </svg>
    );
}

function IconBook() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5.5A2.5 2.5 0 016.5 3H12v18H6.5A2.5 2.5 0 014 18.5v-13z" />
            <path d="M20 5.5A2.5 2.5 0 0017.5 3H12v18h5.5a2.5 2.5 0 002.5-2.5v-13z" />
        </svg>
    );
}

function IconMobile() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="2.5" width="10" height="19" rx="2" />
            <path d="M11 18.5h2" />
        </svg>
    );
}

const challengeIconMap: Record<string, () => JSX.Element> = {
    search: IconSearch,
    book: IconBook,
    mobile: IconMobile,
};

function IconLinkedIn() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M20.45 20.45h-3.56v-5.6c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.69H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
    );
}

function IconTwitter() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M22 5.9c-.67.3-1.4.5-2.15.6a3.7 3.7 0 001.64-2.05 7.3 7.3 0 01-2.34.9 3.68 3.68 0 00-6.27 3.36A10.45 10.45 0 013.16 4.9a3.7 3.7 0 001.14 4.92 3.6 3.6 0 01-1.67-.46v.05a3.68 3.68 0 002.95 3.61 3.7 3.7 0 01-1.66.06 3.68 3.68 0 003.44 2.56A7.4 7.4 0 012 17.03a10.4 10.4 0 005.64 1.65c6.77 0 10.47-5.6 10.47-10.47l-.01-.48A7.5 7.5 0 0022 5.9z" />
        </svg>
    );
}

function IconInstagram() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.9 5.9 0 00.63 4.14c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.33 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.66 1.07-1.33 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 00-1.38-2.13A5.9 5.9 0 0019.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1012 18.15 6.16 6.16 0 0012 5.84zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
        </svg>
    );
}

function IconPhone() {
    return (
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4.5h3.5l1.5 4.5-2 1.5a11 11 0 005.5 5.5l1.5-2 4.5 1.5V19a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 013 6.1 1.5 1.5 0 014.5 4.5z" />
        </svg>
    );
}

function IconMail() {
    return (
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3.5 6.5L12 13l8.5-6.5" />
        </svg>
    );
}

function IconPin() {
    return (
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.3" />
        </svg>
    );
}

function IconSkype() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M12.5 17.6c-3.6 0-5.2-1.77-5.2-3.06 0-.67.48-1.14 1.14-1.14 1.5 0 1.14 2.16 4.06 2.16 1.44 0 2.24-.78 2.24-1.58 0-.48-.24-1.02-1.2-1.26l-3.16-.8c-2.54-.64-3-2.02-3-3.32 0-2.7 2.54-3.72 4.92-3.72 2.2 0 4.8.9 4.8 2.5 0 .69-.6 1.1-1.26 1.1-1.28 0-1.04-1.78-3.72-1.78-1.28 0-2 .58-2 1.36 0 .78.96 1.02 1.8 1.22l2.34.56c2.56.62 3.34 2.12 3.34 3.56 0 2.2-1.7 3.98-4.94 3.98a1.44 1.44 0 01-.16-.02c-.06 0-.06.01 0 0zM21.66 14.94a9.68 9.68 0 00.2-1.94A9.7 9.7 0 0012.16 3.3c-.65 0-1.29.05-1.92.15A5.4 5.4 0 007.6 2.5a5.44 5.44 0 00-4.85 7.9c-.1.63-.15 1.27-.15 1.92a9.7 9.7 0 009.7 9.7c.65 0 1.3-.06 1.93-.16a5.42 5.42 0 007.9-4.87c0-.68-.16-1.34-.47-1.95z" />
        </svg>
    );
}

export default function Page() {
    return (
        <main
            className="min-h-screen bg-[#F7F6FD] bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/bg.png')", backgroundSize: "100% auto" }}
        >
            {/* NAV */}
            <header
                className="h-25 w-full backdrop-blur-md border-b border-blue-100/50 sticky top-0 z-50"
                style={{
                    background:
                        "linear-gradient(to right, rgba(200,210,240,0.95),rgba(220,230,248,0.90),rgba(235,242,255,0.95))",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <img src="/logo.svg" alt="SM Solutions Logo" className="w-27 h-20 object-contain" />
                    </div>

                    <nav className="hidden md:flex gap-8 text-base font-medium">
                        {navLinks.map((link) => {
                            const isActive = link.label === "Case Studies";
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="relative group"
                                    style={{
                                        color: isActive ? "#2563EB" : "#404359",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: isActive ? 700 : 500,
                                    }}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </a>
                            );
                        })}
                    </nav>

                    <button
                        className="text-white px-6 py-2 rounded-lg font-semibold shadow relative overflow-hidden tracking-wide"
                        style={{
                            backgroundImage: "url('/btn_bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "15px",
                            fontWeight: "600",
                            letterSpacing: "0.3px",
                        }}
                    >
                        Book a Strategy Call
                    </button>
                </div>
            </header>

            {/* HERO */}
            <section className="mx-auto max-w-[1800px] px-1 pt-10">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-xs font-bold tracking-widest text-[#E11D48]">
                            E-COMMERCE CASE STUDY
                        </p>
                        <h1 className="text-[#16151A] mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                            Tefal India
                            <br />
                            Digital Experience
                            <br />
                            <span className="text-[#E11D48]">Optimization</span>
                        </h1>
                        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6E7180]">
                            How SM Solutions enhanced the digital commerce experience for
                            Tefal India by improving user journeys, product discoverability,
                            and driving double-digit conversion growth.
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
                                <p className="font-semibold text-[#16151A]">6 Months</p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="rounded-full bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#c81b40]">
                                View Live Site ↗
                            </button>
                            <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#33353F] hover:bg-gray-50">
                                Read Methodology ⧉
                            </button>
                        </div>
                    </div>

                    {/* Browser mockup */}
                    <div className="section-card overflow-hidden">
                        <div className="relative w-full" style={{ aspectRatio: "659 / 512" }}>
                            <Image
                                src="/images/tefal-hero-mockup.png"
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
            <section className="mx-auto max-w-[1800px] px-1 pt-14">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {stats.map((s) => (
                        <div key={s.label} className="section-card p-5">
                            <p className="eyebrow mb-3">{s.label}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-extrabold text-[#16151A]">{s.value}</p>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                                    <TrendUp />
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-[#9297A3]">{s.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SCOPE + TECH ARCHITECTURE */}
            <section className="mx-auto max-w-[1800px] px-1 pt-8">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="section-card p-7">
                        <SectionLabel>Scope of Engagement</SectionLabel>
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                            {scope.map((s) => {
                                const iconBg: Record<string, string> = {
                                    Strategy: "bg-rose-50",
                                    Design: "bg-blue-50",
                                    Development: "bg-emerald-50",
                                    Growth: "bg-orange-50",
                                };
                                return (
                                    <div key={s.title}>
                                        <div
                                            className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full text-base ${iconBg[s.title] ?? "bg-gray-50"
                                                }`}
                                        >
                                            {s.icon}
                                        </div>
                                        <p className="mb-2 text-sm font-bold text-[#16151A]">{s.title}</p>
                                        <ul className="space-y-1.5 text-[12px] text-[#6E7180]">
                                            {s.items.map((i) => (
                                                <li key={i} className="flex gap-1.5">
                                                    <span className="text-emerald-500">✓</span>
                                                    <span>{i}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="section-card p-7">
                        <SectionLabel large>Technical Architecture</SectionLabel>
                        <div className="grid grid-cols-2 gap-4">
                            {techArchitecture.map((t) => (
                                <div
                                    key={t.title}
                                    className="rounded-xl border border-gray-100 p-4"
                                    style={{ backgroundColor: t.boxBg }}
                                >
                                    <p className="mb-3 flex items-center gap-2 text-xs font-bold text-[#33353F]">
                                        <img src={t.icon} alt={`${t.title} icon`} className="h-10 w-10 object-contain" />
                                        {t.title.toUpperCase()}
                                    </p>
                                    <ul className="space-y-1.5 text-[12px] text-[#6E7180]">
                                        {t.items.map((i) => (
                                            <li key={i} className="flex gap-1.5">
                                                <span className="text-[#D3D4DA]">□</span>
                                                <span>{i}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT / CHALLENGE / ENGINEERING */}
            <section className="mx-auto max-w-[1800px] px-1 pt-8">
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="section-card p-7">
                        <SectionLabel>About Tefal</SectionLabel>
                        <p className="mb-6 text-[13px] leading-relaxed text-[#6E7180]">
                            Global leader in cookware and small appliances with a legacy of
                            innovation spanning 70+ years and presence in 120+ countries.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {aboutStats.map((a) => {
                                const AboutIcon = aboutIconMap[a.icon];
                                return (
                                    <div key={a.label} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ECEAFB] text-[#33353F]">
                                            <AboutIcon />
                                        </span>
                                        <div>
                                            {a.value && <p className="text-sm font-extrabold text-[#16151A]">{a.value}</p>}
                                            <p className="text-[11px] text-[#9297A3]">{a.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="section-card p-7">
                        <SectionLabel>The Challenge</SectionLabel>
                        <div className="space-y-5">
                            {challenges.map((c) => {
                                const ChallengeIcon = challengeIconMap[c.icon];
                                return (
                                    <div key={c.title} className="flex gap-3">
                                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-400">
                                            <ChallengeIcon />
                                        </span>
                                        <div>
                                            <p className="text-sm font-bold text-[#16151A]">{c.title}</p>
                                            <p className="mt-0.5 text-[12px] leading-relaxed text-[#6E7180]">
                                                {c.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="section-card p-7">
                        <SectionLabel>Engineering Challenges</SectionLabel>
                        <div className="space-y-3">
                            {engineeringChallenges.map((e) => (
                                <div
                                    key={e.n}
                                    className="flex items-center gap-4 rounded-xl border border-gray-100 px-4 py-3"
                                >
                                    <span className="text-lg font-extrabold text-rose-200">{e.n}</span>
                                    <p className="text-[12px] font-medium text-[#4C4F5B]">{e.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* RESEARCH / ROADMAP / SHOWCASE */}
            <section className="mx-auto max-w-[1800px] px-1 pt-8">
                <div className="grid items-stretch gap-6 lg:grid-cols-3">
                    <div className="section-card flex h-full flex-col p-7">
                        <SectionLabel>Research &amp; Audit</SectionLabel>
                        <p className="mb-5 text-[12px] leading-relaxed text-[#6E7180]">
                            We conducted heatmap analysis, user testing and competitor
                            benchmarking.
                        </p>
                        <div className="relative mb-5 aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-black p-6">
                            <Image
                                src="/images/heatmap.png"
                                alt="Mobile screen heatmap showing where users tapped most"
                                fill
                                className="object-contain"
                                sizes="(min-width: 1024px) 33vw, 100vw"
                            />
                        </div>
                        <ul className="mt-auto space-y-2 text-[12px] text-[#6E7180]">
                            <li className="flex gap-2">
                                <RoseCheck />
                                85% of users missed important menus
                            </li>
                            <li className="flex gap-2">
                                <RoseCheck />
                                Filters hidden behind multiple clicks
                            </li>
                            <li className="flex gap-2">
                                <RoseCheck />
                                High drop-offs on mobile checkout
                            </li>
                        </ul>
                    </div>

                    <div className="section-card flex h-full flex-col p-7">
                        <SectionLabel>Our Strategy &amp; Roadmap</SectionLabel>
                        <p className="mb-6 text-[12px] leading-relaxed text-[#6E7180]">
                            Deep audit &amp; stakeholder alignment, followed by structured
                            navigation, search &amp; categories.
                        </p>
                        <div className="mx-auto grid max-w-[340px] grid-cols-3 place-items-center gap-x-4 gap-y-6">
                            {roadmap.map((r) => (
                                <div key={r.n} className="flex flex-col items-center text-center">
                                    <div
                                        className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${r.bg} ${r.text}`}
                                    >
                                        {r.n}
                                    </div>
                                    <div className="flex min-h-[76px] flex-col items-center">
                                        <p className="text-xs font-semibold text-[#16151A]">{r.title}</p>
                                        <p className="mt-1 text-[10px] leading-relaxed text-[#9297A3]">
                                            {r.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-card flex h-full flex-col p-7">
                        <SectionLabel>Solution Showcase</SectionLabel>
                        <p className="mb-5 text-[12px] leading-relaxed text-[#6E7180]">
                            Rebuilt key touchpoints for a delightful and conversion-friendly
                            experience.
                        </p>
                        <div className="relative mb-5 aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-slate-900 p-6">
                            <Image
                                src="/images/interface-showcase.png"
                                alt="Redesigned desktop and mobile interface showcase"
                                fill
                                className="object-contain"
                                sizes="(min-width: 1024px) 33vw, 100vw"
                            />
                        </div>
                        <div className="mt-auto">
                            <p className="text-3xl font-extrabold text-[#16151A]">+32%</p>
                            <p className="eyebrow">Increase in Category CTR</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECH STACK / INFRA / BEFORE-AFTER */}
            <section className="mx-auto max-w-[1800px] px-1 pt-8">
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="section-card p-7">
                        <SectionLabel>Technology Stack</SectionLabel>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((t) => {
                                const styleMap: Record<string, string> = {
                                    React: "border border-blue-300 bg-white text-blue-600",
                                    AWS: "border border-orange-300 bg-white text-orange-500",
                                    Cloudflare: "border border-rose-300 bg-white text-rose-500",
                                    Redis: "border border-rose-300 bg-white text-rose-500",
                                    Hotjar: "border border-orange-300 bg-white text-orange-500",
                                };
                                const style =
                                    styleMap[t] ?? "border border-gray-200 bg-white text-[#33353F]";
                                return (
                                    <span
                                        key={t}
                                        className={`rounded-md px-3 py-1.5 text-[11px] font-medium ${style}`}
                                    >
                                        {t}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div className="section-card p-7">
                        <SectionLabel>Infrastructure &amp; Security</SectionLabel>
                        <ul className="space-y-2.5 text-[12px] text-[#6E7180]">
                            {infraSecurity.map((i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Check />
                                    {i}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="section-card p-7">
                        <div className="mb-4 flex items-center justify-between">
                            <SectionLabel>Before vs After</SectionLabel>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="relative mb-3 h-20 w-full overflow-hidden rounded-lg bg-gray-500">
                                    <Image
                                        src="/images/before-thumb.png"
                                        alt="Before: cluttered dashboard layout"
                                        fill
                                        className="object-cover"
                                        sizes="200px"
                                    />
                                </div>
                                <p className="mb-2 text-[11px] font-bold text-[#9297A3]">BEFORE</p>
                                <ul className="space-y-1 text-[11px] text-[#6E7180]">
                                    {beforeAfter.before.map((b) => (
                                        <li key={b} className="flex gap-1">
                                            <Cross />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="relative mb-3 h-20 w-full overflow-hidden rounded-lg bg-slate-900">
                                    <Image
                                        src="/images/after-thumb.png"
                                        alt="After: clean modern UI with teal accent"
                                        fill
                                        className="object-cover"
                                        sizes="200px"
                                    />
                                </div>
                                <p className="mb-2 text-[11px] font-bold text-[#9297A3]">AFTER</p>
                                <ul className="space-y-1 text-[11px] text-[#6E7180]">
                                    {beforeAfter.after.map((a) => (
                                        <li key={a} className="flex gap-1">
                                            <Check />
                                            {a}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS DASHBOARD / BUSINESS IMPACT / DESIGN SYSTEM / TEAM */}
            <section className="mx-auto max-w-[1800px] px-1 pt-8">
                <div className="grid gap-6 lg:grid-cols-4">
                    <div className="section-card p-6">
                        <div className="mb-5 flex items-center justify-between">
                            <SectionLabel>Results Dashboard</SectionLabel>
                            <div className="flex items-center gap-3 text-[10px] font-medium text-[#6E7180]">
                                <span className="flex items-center gap-1">
                                    <span className="h-2.5 w-2.5 rounded-sm bg-gray-300" />
                                    Before
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="h-2.5 w-2.5 rounded-sm bg-[#E11D48]" />
                                    After
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {resultsDashboard.map((r) => {
                                const isNegative = r.value.startsWith("-");
                                return (
                                    <div key={r.label}>
                                        <p className="mb-1.5 text-[11px] text-[#6E7180]">{r.label}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                                                {isNegative ? (
                                                    <>
                                                        <div
                                                            className="h-full rounded-l-full bg-[#E11D48]"
                                                            style={{ width: `${r.afterPct}%` }}
                                                        />
                                                        <div
                                                            className="h-full bg-gray-300"
                                                            style={{ width: `${r.beforePct}%` }}
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <div
                                                            className="h-full rounded-l-full bg-gray-300"
                                                            style={{ width: `${r.beforePct}%` }}
                                                        />
                                                        <div
                                                            className="h-full bg-[#E11D48]"
                                                            style={{ width: `${r.afterPct}%` }}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                            <span className="w-12 text-right text-[11px] font-bold text-[#16151A]">
                                                {r.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="section-card p-6">
                        <SectionLabel>Business Impact</SectionLabel>
                        <div className="overflow-hidden rounded-lg border border-gray-100 text-[11px]">
                            <div className="grid grid-cols-2">
                                <span className="bg-rose-50 py-2 text-center font-bold text-rose-500">
                                    BEFORE
                                </span>
                                <span className="bg-emerald-50 py-2 text-center font-bold text-emerald-500">
                                    AFTER
                                </span>
                            </div>
                            {businessImpact.map((b, idx) => (
                                <div
                                    key={b.before}
                                    className={`grid grid-cols-2 ${idx !== businessImpact.length - 1 ? "border-b border-gray-100" : ""
                                        }`}
                                >
                                    <span className="px-2 py-3 text-center text-[#33353F]">{b.before}</span>
                                    <span className="px-2 py-3 text-center text-[#33353F]">{b.after}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-card p-6">
                        <SectionLabel>Design System</SectionLabel>
                        <p className="mb-2 text-[10px] font-bold text-[#9297A3]">COLOR PALETTE</p>
                        <div className="mb-4 flex gap-2">
                            <span className="h-6 w-6 rounded-full bg-[#E11D48]" />
                            <span className="h-6 w-6 rounded-full bg-gray-900" />
                            <span className="h-6 w-6 rounded-full bg-gray-300" />
                            <span className="h-6 w-6 rounded-full border border-gray-200 bg-white" />
                        </div>
                        <p className="mb-2 text-[10px] font-bold text-[#9297A3]">TYPOGRAPHY</p>
                        <div className="mb-4 flex items-center gap-3">
                            <p className="text-3xl font-extrabold text-[#16151A]">Aa</p>
                            <div>
                                <p className="text-xs font-bold text-[#16151A]">Din Pro</p>
                                <p className="text-[10px] leading-relaxed text-[#9297A3]">
                                    Clean, modern &amp; highly legible type system.
                                </p>
                            </div>
                        </div>
                        <p className="mb-2 text-[10px] font-bold text-[#9297A3]">COMPONENTS</p>
                        <div className="flex flex-col gap-2">
                            <button className="rounded-md bg-[#E11D48] py-1.5 text-center text-[11px] font-semibold text-white">
                                Primary Button
                            </button>
                            <button className="rounded-md border border-gray-200 py-1.5 text-center text-[11px] font-semibold text-[#4C4F5B]">
                                Secondary Button
                            </button>
                            <div className="mt-1 flex gap-3 text-[#9297A3]">
                                <IconHeartOutline />
                                <IconBagOutline />
                                <IconSearch />
                                <IconHomeOutline />
                                <IconUserOutline />
                            </div>
                        </div>
                    </div>

                    <div className="section-card p-6">
                        <SectionLabel>Project Team</SectionLabel>
                        <ul className="space-y-3">
                            {projectTeam.map((member) => (
                                <li key={member.role} className="flex items-center gap-3">
                                    <img
                                        src={member.photo}
                                        alt={member.role}
                                        className="h-9 w-9 shrink-0 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-[12px] font-bold text-[#16151A]">{member.role}</p>
                                        <p className="text-[10px] text-[#9297A3]">{member.subtitle}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL + CTA */}
            {/* TESTIMONIAL + CTA */}
            <section className="mx-auto max-w-[1800px] px-1 pt-8">
                <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.6fr]">
                    <div className="section-card flex h-full flex-col justify-between bg-white p-7">
                        <div>
                            <SectionLabel>Client Testimonial</SectionLabel>
                            <p className="mb-2 text-3xl font-serif leading-none text-rose-500">&ldquo;</p>
                            <p className="text-[15px] leading-relaxed text-[#4C4F5B]">
                                SM Solutions truly understood our brand and our customers. The
                                new experience is beautiful, fast, and delivering outstanding
                                business results.
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
                    </div>

                    <div className="relative flex h-full min-h-[280px] items-center justify-between gap-6 overflow-hidden rounded-2xl bg-[#0A0E1A] px-8 py-10 sm:px-12">
                        <div className="max-w-sm">
                            <h3 className="text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                                Ready to achieve similar results?
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-[15px]">
                                Let&apos;s build a digital experience that drives growth.
                            </p>
                            <button className="mt-6 flex items-center gap-2 rounded-full bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#c81b40]">
                                Book a Strategy Call
                                <span aria-hidden="true">→</span>
                            </button>
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
                    </div>
                </div>
            </section>
            {/* SUCCESS STORY BANNER */}
            <section className="mx-auto max-w-[1800px] px-1 pt-6">
                <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#4C5FEA] px-8 py-8 sm:flex-row sm:items-center">
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
                    <button className="shrink-0 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4C5FEA] hover:bg-gray-50">
                        Book a Free Strategy Call →
                    </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="mx-auto max-w-[1800px] px-1 pb-10 pt-16">
                <div className="rounded-3xl border border-white/60 bg-white/20 px-10 pt-10 backdrop-blur-sm">
                    <div className="grid divide-y divide-gray-200/70 pb-8 md:grid-cols-4 md:divide-x md:divide-y-0">
                        <div className="pb-6 md:pb-0 md:pr-8">
                            <img
                                src="/logo.svg"
                                alt="SM Solutions Logo"
                                className="mb-3 h-10 w-auto object-contain"
                            />
                            <p className="max-w-xs text-[12px] leading-relaxed text-[#4C4F5B]">
                                We build high-performance digital ecosystems that drive
                                measurable growth for global brands.
                            </p>
                        </div>
                        <div className="py-6 md:py-0 md:px-8">
                            <p className="mb-3 text-sm font-bold text-[#16151A]">Services</p>
                            <ul className="space-y-2 text-[12px] text-[#4C4F5B]">
                                <li>Performance Marketing</li>
                                <li>Conversion Optimization</li>
                                <li>Web Development</li>
                                <li>Branding</li>
                                <li>Graphic Design</li>
                                <li>UI Ux Strategy</li>
                            </ul>
                        </div>
                        <div className="py-6 md:py-0 md:px-8">
                            <p className="mb-3 text-sm font-bold text-[#16151A]">Company</p>
                            <ul className="space-y-2 text-[12px] text-[#4C4F5B]">
                                <li>About Us</li>
                                <li>Case Studies</li>
                                <li>Careers</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="pt-6 md:pt-0 md:pl-8">
                            <p className="mb-3 text-sm font-bold text-[#16151A]">Contact</p>
                            <ul className="space-y-3 text-[12px] text-[#4C4F5B]">
                                <li className="flex items-center gap-2 text-[#9297A3]">
                                    <IconPhone />
                                    <span className="text-[#4C4F5B]">+91 86301 80711</span>
                                </li>
                                <li className="flex items-center gap-2 text-[#9297A3]">
                                    <IconMail />
                                    <span className="text-[#4C4F5B]">contact@smsolutions.in</span>
                                </li>
                                <li className="flex items-center gap-2 text-[#9297A3]">
                                    <IconPin />
                                    <span className="text-[#4C4F5B]">Kolkata, West Bengal 700132</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-between gap-4 border-t border-gray-200/70 py-6 md:flex-row md:items-center">
                        <div>
                            <p className="text-sm font-bold text-[#16151A]">Stay in the loop</p>
                            <p className="text-[12px] text-[#4C4F5B]">
                                Get updates about new features and opportunities
                            </p>
                        </div>
                        <div className="flex w-full max-w-xs items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full bg-transparent text-[12px] outline-none placeholder:text-[#9297A3]"
                            />
                            <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5593FF] text-white">
                                →
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-between gap-3 border-t border-gray-200/70 py-6 text-[11px] md:flex-row md:items-center">
                        <div className="space-y-1">
                            <p className="font-bold text-[#2E5C8A]">
                                © 2026 SMSolutions. Copyright and rights reserved
                            </p>
                            <div className="flex flex-wrap gap-x-2 text-[#6E7180]">
                                <span>Terms and Condtions</span>
                                <span>•</span>
                                <span>Privacy Policy</span>
                                <span>•</span>
                                <span>Cookie Policy</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7C8194] text-white">
                                <IconLinkedIn />
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7C8194] text-white">
                                <IconTwitter />
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7C8194] text-white">
                                <IconInstagram />
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7C8194] text-white">
                                <IconSkype />
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}