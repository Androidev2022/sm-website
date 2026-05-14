"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTrailsRef = useRef<HTMLDivElement[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [cursorHovering, setCursorHovering] = useState(false);
  const [cursorClicking, setCursorClicking] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array(8).fill({ x: 0, y: 0 })
  );
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
      const duration = 1800;
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

  const brands: string[] = ["HCL", "Panasonic", "Hindware", "Scania", "Hafele", "Google", "Partner"];

  const stats = [
    { value: "$75M+", label: "Revenue Generated", stars: "★★★★★☆" },
    { value: "350+", label: "Successful Projects", stars: "★★★★★☆" },
    { value: "100+", label: "Clients Worldwide", stars: "★☆☆☆☆☆" },
    { value: "4.9/5", label: "Client Satisfaction", stars: "★★★★★☆" },
  ];

  const caseStudies = [
    { title: "E-Commerce Growth Boost", desc: "350% growth in online revenue with performance marketing strategy." },
    { title: "E-Commerce Growth Boost", desc: "Boosted conversions with CRO + funnel optimization." },
    { title: "E-Commerce Growth Boost", desc: "Improved paid ads ROI with advanced targeting strategies." },
  ];

  const industryBgs = ["/bg_1.png", "/bg_2.png", "/bg_3.png", "/bg_4.png"];

  const industries = [
    {
      icon: "/image_5__1_.png", title: "D2C Brands", subtitle: "Sorarthune Ceonfamed",
      desc: "Exre eerura woft the Si, Gomma atndh pered cops Tras conc unn gtiult aterty proar ot corocturs.",
      points: ["Potsmuned coenctues, ond", "Roerradtugiulerms cef coarn shien", "Somutve of Domserccd T0", "Roerradtugiulerms cef coarn shien", "Encamwted rercsiter cetzaek", "Somutve of Domserccd T0", "Grarcliletd presIher"],
    },
    {
      icon: "/image_4.png", title: "Manufacturing", subtitle: "Carrier",
      desc: "Gtin cemc wourao ia Ctrtb goe aeno strestips Arireamet and igrstBothacconhaeceges.",
      points: ["Potsmuned coenctues, ond", "Roerradtugiulerms cef coarn shien", "Somutve of Domserccd T0", "Roerradtugiulerms cef coarn shien", "Encamwted rercsiter cetzaek", "Somutve of Domserccd T0", "Grarcliletd presIher"],
    },
    {
      icon: "/image_3__1_.png", title: "SaaS", subtitle: "Eeculn Dartan",
      desc: "ODR behe coesortzort lin Side With heamene pthts,Ood remabitn amas",
      points: ["Potsmuned coenctues, ond", "Roerradtugiulerms cef coarn shien", "Somutve of Domserccd T0", "Roerradtugiulerms cef coarn shien", "Encamwted rercsiter cetzaek", "Somutve of Domserccd T0", "Grarcliletd presIher"],
    },
    {
      icon: "/image_5.png", title: "D2C Brands", subtitle: "Sorarthune Ceonfamed",
      desc: "Exre eerura woft the Si, Gomma atndh pered cops Tras conc unn gtiult aterty proar ot corocturs.",
      points: ["Potsmuned coenctues, ond", "Roerradtugiulerms cef coarn shien", "Somutve of Domserccd T0", "Roerradtugiulerms cef coarn shien", "Encamwted rercsiter cetzaek", "Somutve of Domserccd T0", "Grarcliletd presIher"],
    },
  ];

  const testimonials = [
    { name: "Aakash Gupta", role: "CER Retail Brand", image: "/akash.png", text: "Scn Cacbuihuem Deliogint at crcally our mom te otelen chvon omeesramy" },
    { name: "Priya Sharma", role: "Borfanrss Drentor", image: "/priya.png", text: 'Thor Cepfrcer nersen froeg Oeshowted amoetaffter gratenh tor and conohetts."' },
    { name: "John Matthews", role: "COO, Sestuon Partner", image: "/john.png", text: "Rsezatrurimypten ateots and a hearn theft molly caten ehomet:numments." },
    { name: "John Matthews", role: "COO, Sestuon Partner", image: "/john_2.png", text: "Rsezatrurimypten ateots and a hearn theft molly caten ehomet:numments." },
  ];

  // ─── Nav links config — only About has a real href ───────────────────────
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Contact", href: "#" },
  ];

  // ─── Cursor animation RAF loop ───────────────────────────────────────────────
  useEffect(() => {
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => setCursorClicking(true);
    const onUp = () => setCursorClicking(false);

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.1);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;
      }

      trailPositions.current = trailPositions.current.map((pos, i) => {
        const target = i === 0 ? mousePos.current : trailPositions.current[i - 1];
        const speed = 0.35 - i * 0.03;
        const newPos = { x: lerp(pos.x, target.x, speed), y: lerp(pos.y, target.y, speed) };
        const el = cursorTrailsRef.current[i];
        if (el) {
          const size = 6 - i * 0.5;
          const opacity = 0.5 - i * 0.055;
          el.style.transform = `translate(${newPos.x - size / 2}px, ${newPos.y - size / 2}px)`;
          el.style.opacity = String(Math.max(0, opacity));
        }
        return newPos;
      });

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // ─── Hover + Magnetic cursor detection ───────────────────────────────────────
  useEffect(() => {
    const interactables = document.querySelectorAll("a, button, input, [data-hover]");
    const magneticBtns = document.querySelectorAll(".magnetic");

    const enter = () => setCursorHovering(true);
    const leave = () => setCursorHovering(false);

    const enterMagnetic = () => {
      setCursorHovering(true);
      cursorRef.current?.classList.add("near-magnetic");
    };
    const leaveMagnetic = () => {
      setCursorHovering(false);
      cursorRef.current?.classList.remove("near-magnetic");
    };

    interactables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    magneticBtns.forEach((el) => {
      el.addEventListener("mouseenter", enterMagnetic);
      el.addEventListener("mouseleave", leaveMagnetic);
    });

    return () => {
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      magneticBtns.forEach((el) => {
        el.removeEventListener("mouseenter", enterMagnetic);
        el.removeEventListener("mouseleave", leaveMagnetic);
      });
    };
  }, []);

  // ─── Magnetic button pull effect ─────────────────────────────────────────────
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
      const strength = 0.35;
      btn.style.transform = `translate(${distX * strength}px, ${distY * strength}px) scale(1.06)`;
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

  // ─── Scroll progress ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ─── IntersectionObserver for scroll-reveal ───────────────────────────────────
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

  const scrollProgress = Math.min(scrollY / (document.body?.scrollHeight - window.innerHeight || 1000), 1);

  return (
    <>
      {/* ─── Global styles ────────────────────────────────────────────────── */}
      <style>{`
        * { cursor: none !important; }

        #scroll-bar {
          position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
          background: linear-gradient(90deg, #6777AD, #a78bfa, #60a5fa);
          transition: width 0.05s linear;
          box-shadow: 0 0 10px rgba(103,119,173,0.7);
        }

        #cursor-blob {
          position: fixed; top: 0; left: 0; width: 40px; height: 40px;
          border-radius: 50%; pointer-events: none; z-index: 9998;
          background: rgba(103, 119, 173, 0.18);
          border: 1.5px solid rgba(103, 119, 173, 0.5);
          transition: width 0.25s, height 0.25s, background 0.25s, border-color 0.25s;
          will-change: transform;
          backdrop-filter: blur(2px);
        }
        #cursor-blob.hovering {
          width: 60px; height: 60px;
          background: rgba(103, 119, 173, 0.28);
          border-color: rgba(103, 119, 173, 0.8);
          mix-blend-mode: multiply;
        }
        #cursor-blob.clicking {
          width: 28px; height: 28px;
          background: rgba(103, 119, 173, 0.45);
        }
        #cursor-blob.near-magnetic {
          width: 70px; height: 70px;
          background: rgba(103, 119, 173, 0.12);
          border-color: rgba(103, 119, 173, 0.6);
          mix-blend-mode: multiply;
          transition: width 0.2s, height 0.2s;
        }

        #cursor-dot {
          position: fixed; top: 0; left: 0; width: 8px; height: 8px;
          border-radius: 50%; pointer-events: none; z-index: 9999;
          background: #6777AD;
          box-shadow: 0 0 8px rgba(103,119,173,0.9);
          will-change: transform;
        }

        .cursor-trail {
          position: fixed; top: 0; left: 0; border-radius: 50%;
          pointer-events: none; z-index: 9997;
          background: rgba(103, 119, 173, 0.55);
          will-change: transform, opacity;
        }

        .ripple {
          position: fixed; border-radius: 50%;
          pointer-events: none; z-index: 9996;
          background: transparent;
          border: 2px solid rgba(103,119,173,0.6);
          animation: ripple-out 0.6s ease-out forwards;
        }
        @keyframes ripple-out {
          0%   { width: 8px; height: 8px; opacity: 1; margin: -4px; }
          100% { width: 60px; height: 60px; opacity: 0; margin: -30px; }
        }

        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .reveal.delay-1 { transition-delay: 0.1s; }
        .reveal.delay-2 { transition-delay: 0.2s; }
        .reveal.delay-3 { transition-delay: 0.3s; }
        .reveal.delay-4 { transition-delay: 0.4s; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        .reveal-left {
          opacity: 0; transform: translateX(-40px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .reveal-left.revealed { opacity: 1; transform: translateX(0); }

        .reveal-right {
          opacity: 0; transform: translateX(40px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .reveal-right.revealed { opacity: 1; transform: translateX(0); }

        .reveal-scale {
          opacity: 0; transform: scale(0.88);
          transition: opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1);
        }
        .reveal-scale.revealed { opacity: 1; transform: scale(1); }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .hero-title  { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .hero-sub    { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.3s both; }
        .hero-btns   { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.5s both; }
        .hero-img    { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.2s both; }
        .hero-brands { animation: fadeIn 1s ease 0.7s both; }

        .card-hover {
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(103,119,173,0.22);
        }

        .magnetic {
          transition: transform 0.45s cubic-bezier(.22,1,.36,1);
          display: inline-block;
        }

        @keyframes pop {
          0%   { transform: scale(0.7); opacity: 0; }
          60%  { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
        .stat-pop { animation: pop 0.6s cubic-bezier(.22,1,.36,1) both; }

        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .float-brand:hover { animation: float-y 1.2s ease-in-out infinite; }

        @keyframes navSlide {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        header { animation: navSlide 0.6s cubic-bezier(.22,1,.36,1) both; }

        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative; overflow: hidden;
        }
        .testimonial-card::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }
        .testimonial-card:hover::before { left: 160%; }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(103,119,173,0.18);
        }

        .industry-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          transform-style: preserve-3d;
        }
        .industry-card:hover {
          transform: perspective(600px) rotateX(-3deg) rotateY(3deg) translateY(-6px);
          box-shadow: 0 20px 40px rgba(103,119,173,0.2);
        }

        @keyframes bounce-arrow {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(8px); opacity: 1; }
        }
        #scroll-indicator { animation: bounce-arrow 1.6s ease-in-out infinite; }

        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        .star-animated { display: inline-block; animation: twinkle 1.8s ease-in-out infinite; }
        .star-animated:nth-child(2) { animation-delay: 0.2s; }
        .star-animated:nth-child(3) { animation-delay: 0.4s; }
        .star-animated:nth-child(4) { animation-delay: 0.6s; }
        .star-animated:nth-child(5) { animation-delay: 0.8s; }

        .heading-line {
          position: relative; display: inline-block;
        }
        .heading-line::after {
          content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
          background: #6777AD;
          transition: width 0.6s cubic-bezier(.22,1,.36,1);
        }
        .reveal.revealed .heading-line::after { width: 100%; }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(103,119,173,0.3); }
          50%       { box-shadow: 0 0 35px rgba(103,119,173,0.6); }
        }
        .cta-section .inner { animation: glow-pulse 3s ease-in-out infinite; }

        /* ── Active nav link style ── */
        .nav-link-about {
          color: #2563EB !important;
          font-weight: 700;
          border-bottom: 2px solid #2563EB;
          padding-bottom: 2px;
        }
      `}</style>

      {/* ─── Scroll progress bar ──────────────────────────────────────── */}
      <div id="scroll-bar" style={{ width: `${scrollProgress * 100}%` }} />

      {/* ─── Custom cursor ────────────────────────────────────────────── */}
      <div
        id="cursor-blob"
        ref={cursorRef}
        className={`${cursorHovering ? "hovering" : ""} ${cursorClicking ? "clicking" : ""}`}
      />
      <div id="cursor-dot" ref={cursorDotRef} />
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="cursor-trail"
          ref={(el) => { if (el) cursorTrailsRef.current[i] = el; }}
          style={{ width: `${6 - i * 0.5}px`, height: `${6 - i * 0.5}px` }}
        />
      ))}

      <div
        className="min-h-screen"
        onClick={(e) => {
          const ripple = document.createElement("div");
          ripple.className = "ripple";
          ripple.style.left = `${e.clientX}px`;
          ripple.style.top = `${e.clientY}px`;
          document.body.appendChild(ripple);
          setTimeout(() => ripple.remove(), 700);
        }}
      >
        {/* NAVBAR */}
        <header
          className="h-25 w-full backdrop-blur-md border-b border-blue-100/50 sticky top-0 z-50"
          style={{ background: "linear-gradient(to right, rgba(200,210,240,0.95),rgba(220,230,248,0.90),rgba(235,242,255,0.95))" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-lg">
              <img src="/logo.svg" alt="SM Solutions Logo" className="w-27 h-20 object-contain" />
            </div>

            <nav className="hidden md:flex gap-8 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-blue-600 relative group"
                  style={{ color: "#404359", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <button
              className="magnetic text-white px-6 py-2 rounded-lg font-semibold shadow relative overflow-hidden tracking-wide"
              style={{
                backgroundImage: "url('/btn_bg.png')", backgroundSize: "cover",
                backgroundPosition: "center", backgroundRepeat: "no-repeat",
                fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
                fontWeight: "600", letterSpacing: "0.3px",
              }}
            >
              Book a Strategy Call
            </button>
          </div>
        </header>

        {/* HERO */}
        <section
          className="w-full"
          style={{
            backgroundImage: "url('/header_background.png')",
            backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-5 items-center">
            <div>
              {/* ── Hero title: text-5xl md:text-6xl (up from text-4xl md:text-5xl) ── */}
              <h1 className="hero-title text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                Building Digital{" "}
                <span className="text-blue-600">Success</span> <br />
                for Global Brands
              </h1>
              {/* ── Hero subtitle: text-lg (up from text-base) ── */}
              <p className="hero-sub mt-5 text-slate-500 text-lg leading-relaxed">
                We create high-performance digital ecosystems that drive measurable growth.
              </p>
              <div className="hero-btns mt-7 flex gap-4">
                {/* ── Image buttons — increased h-12/h-20 (up from h-10/h-18) ── */}
                <button className="magnetic rounded-lg overflow-hidden transition-all">
                  <img src="/view_cases.png" alt="View Case Studies" className="h-12 w-auto object-contain block" />
                </button>
                <button className="magnetic rounded-lg overflow-hidden transition-all mt-2">
                  <img src="/book_call.png" alt="book call" className="h-20 w-auto object-contain block" />
                </button>
              </div>
            </div>
            <div className="hero-img relative flex justify-center items-center">
              <img src="/cards.png" alt="Dashboard Cards" className="w-full max-w-full object-contain relative z-20" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div id="scroll-indicator" className="flex justify-center pb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6777AD" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          {/* BRANDS — increased text-base (up from text-sm) */}
          <div className="hero-brands w-full pb-10">
            <div className="flex flex-wrap justify-center items-center text-slate-700 text-base font-semibold bg-white/30 backdrop-blur-md">
              {brands.map((brand, i) => (
                <span key={i} className="flex items-center float-brand">
                  <span className="px-6 py-4">{brand}</span>
                  {i < brands.length - 1 && <span className="h-5 w-px bg-gray-300" />}
                </span>
              ))}
            </div>
          </div>

          {/* STATS — increased stat number to text-5xl (up from text-4xl), label text-base (up from text-sm) */}
          <div className="flex flex-wrap justify-center items-start gap-0 py-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`reveal stat-pop px-10 text-center delay-${i + 1} ${i < stats.length - 1 ? "border-r border-gray-300" : ""}`}
              >
                <h2
                  className="text-5xl font-bold text-slate-800"
                  data-target={s.value}
                  data-counted="false"
                >
                  {s.value}
                </h2>
                <p className="text-slate-500 text-base mt-2">{s.label}</p>
                <div className="mt-2 text-yellow-400 text-lg">
                  {s.stars.split("").map((ch, j) => (
                    <span key={j} className={ch === "★" ? "star-animated" : ""}>{ch}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Strategy button image — increased h-14 (up from h-12) ── */}
          <div className="flex justify-center">
            <button className="magnetic mt-4 mb-10 rounded-lg overflow-hidden transition-all hover:opacity-90">
              <img src="/button_three.png" alt="Get Your Custom Strategy" className="h-14 w-auto object-contain block" />
            </button>
          </div>
        </section>

        {/* CASE STUDIES → FOOTER — shared background */}
        <div
          className="relative"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/40 -z-0" />
          <div className="relative z-10">

            {/* CASE STUDIES */}
            <section className="max-w-[1500px] mx-auto px-2 py-14">
              <div className="text-center reveal">
                <div className="flex items-center justify-center gap-4">
                  <img src="/line_left.png" alt="" className="flex-1 h-auto object-fill" />
                  {/* ── Section headings: text-3xl (up from text-2xl) ── */}
                  <h2 className="text-3xl font-normal text-slate-900 whitespace-nowrap heading-line">
                    In-Depth Success <span style={{ color: "#6777AD" }} className="font-bold">Stories</span>
                  </h2>
                  <img src="/line_right.png" alt="" className="flex-1 h-auto object-fill" />
                </div>
                {/* ── Section subtitle: text-base (up from text-sm) ── */}
                <p className="text-slate-500 mt-2 text-base">Curating partners, ideas & marketing experiences</p>
              </div>

              <div className="mt-10 grid md:grid-cols-4 gap-6">
                {caseStudies.map((c, i) => (
                  <div
                    key={i}
                    className={`reveal card-hover delay-${i + 1} bg-[#e6e6f8] border border-blue-200 rounded-2xl shadow-[0_8px_20px_rgba(59,130,246,0.3)] p-6 flex flex-col gap-3`}
                  >
                    <div className="rounded-xl overflow-hidden">
                      <img src="/e_commarce_image.png" alt={c.title} className="w-full object-contain" />
                    </div>
                    <div className="mt-4">
                      {/* ── Card title: text-lg (up from text-base) ── */}
                      <h3 className="font-semibold text-slate-900 text-lg">{c.title}</h3>
                      <img src="/line_middle.png" alt="" className="w-full my-2" />
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-orange-400 font-bold text-base">350%</span>
                        <span className="text-slate-400 text-base">Growth in Online Revenue</span>
                      </div>
                      {/* ── Card body: text-base (up from text-sm) ── */}
                      <p className="text-base text-slate-500 mt-2 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="reveal reveal-scale card-hover bg-white border-2 border-blue-200 rounded-2xl shadow-sm p-6 flex flex-col gap-3">
                  {/* ── Audit card title: text-xl (up from text-lg) ── */}
                  <h3 className="font-bold text-xl text-slate-900">
                    Get Your FREE <span className="font-extrabold text-slate-900">Marketing Audit</span>
                  </h3>
                  {/* ── Audit card body: text-sm (up from text-xs) ── */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Gale Be: pnupuptart condammogsarfth COaeaetLamnt and irun sunuinpxtneZincpe ctviataetk Pon hi pretoltoes
                  </p>
                  <ul className="space-y-1">
                    {["In Grepth Webesite beoarors.", "Actunedible Gronten plain", "Dalietatro eoe 5 heurs."].map((pt, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-yellow-400">◆</span> {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-0">
                    <img src="/groups_img.svg" alt="Get Audit and Partners" className="w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* ── Section CTA button: increased px/py ── */}
              <div className="text-center mt-10 reveal">
                <button
                  className="magnetic text-white px-10 py-4 rounded-lg font-semibold shadow text-lg"
                  style={{
                    backgroundImage: "url('/btn_bg.png')", backgroundSize: "cover",
                    backgroundPosition: "center", backgroundRepeat: "no-repeat",
                  }}
                >
                  Explore All Case Studies
                </button>
              </div>
            </section>

            {/* INDUSTRIES */}
            <section className="max-w-[1500px] mx-auto px-2 py-14">
              <div className="reveal flex items-center justify-center gap-2">
                <img src="/line_left.png" alt="" className="flex-1 h-auto object-fill" />
                <h2 className="text-3xl font-normal text-slate-900 whitespace-nowrap">
                  Industries <span style={{ color: "#6777AD" }} className="font-bold">We Serve</span>
                </h2>
                <img src="/line_right.png" alt="" className="flex-1 h-auto object-fill" />
              </div>

              <div className="mt-10 grid md:grid-cols-5 gap-6">
                {industries.map((ind, i) => (
                  <div
                    key={i}
                    className={`reveal industry-card delay-${i + 1} rounded-2xl shadow-sm p-5`}
                    style={{
                      backgroundImage: `url('${industryBgs[i]}')`,
                      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img src={ind.icon} alt={ind.title} className="w-12 h-12 object-contain" />
                      <div>
                        {/* ── Industry card title: text-lg (up from text-base) ── */}
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">{ind.title}</h3>
                        <p className="text-sm text-slate-400">{ind.subtitle}</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-gray-200 mb-3" />
                    {/* ── Industry desc: text-sm (up from text-xs) ── */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{ind.desc}</p>
                    <ul className="space-y-1">
                      {ind.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="text-green-400 text-sm">✓</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="reveal reveal-right bg-white/55 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm p-6 card-hover">
                  <h3 className="font-bold text-xl text-slate-900">
                    Get Your FREE <span className="text-blue-600">Marketing Audit</span>
                  </h3>
                  <p className="text-base text-slate-500 mt-2">Improve your marketing performance with expert insights.</p>
                  {/* ── Audit button: py-4 text-lg (up from py-3) ── */}
                  <button className="magnetic mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 w-full rounded-lg font-semibold text-lg">
                    Get Audit
                  </button>
                  <div className="mt-4 flex gap-3 text-sm text-slate-500 font-semibold justify-center">
                    <span>Google</span><span>Meta</span><span>Partner</span>
                  </div>
                </div>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="max-w-[1500px] mx-auto px-2 py-14">
              <div className="text-center">
                <div className="reveal flex items-center justify-center gap-2 mb-10">
                  <img src="/line_left.png" alt="" className="flex-1 h-auto object-fill" />
                  <h2 className="text-3xl font-normal text-slate-900 whitespace-nowrap">
                    Proven Results, Trusted by <span style={{ color: "#6777AD" }} className="font-bold">Clients</span>
                  </h2>
                  <img src="/line_right.png" alt="" className="flex-1 h-auto object-fill" />
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`reveal testimonial-card delay-${i + 1} rounded-2xl p-5 flex flex-col gap-3 border border-blue-200`}
                    style={{
                      backgroundImage: "url('/bg_peple.png')",
                      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <img src={t.image} alt={t.name} className="w-14 h-10 object-cover flex-shrink-0" />
                      <div>
                        {/* ── Testimonial name: text-base (up from text-sm) ── */}
                        <h3 className="font-bold text-slate-900 text-base leading-tight">{t.name}</h3>
                        <p className="text-sm text-slate-400 mt-0">{t.role}</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-blue-100 my-1" />
                    {/* ── Testimonial text: text-sm (up from text-xs) ── */}
                    <p className="text-sm text-slate-500 leading-relaxed">{t.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FREELANCE TALENTS */}
            <section className="max-w-[1500px] mx-auto px-2 py-4">
              <div className="reveal reveal-scale bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-12 text-center" style={{ border: "2px solid #d6d1e7" }}>
                <div className="absolute left-8 top-1/2 -translate-y-1/2">
                  <img src="/people_left.png" alt="people left" className="w-52 h-auto object-contain" />
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-end">
                  <img src="/people_right.png" alt="people right" className="w-52 h-auto object-contain" />
                </div>
                <div className="relative z-10 max-w-xl mx-auto">
                  <div className="flex justify-center mb-4">
                    <img src="/lebel.png" alt="Start Now!" className="h-12 w-auto object-contain" />
                  </div>
                  {/* ── Freelance section heading: text-3xl md:text-4xl (up from text-2xl md:text-3xl) ── */}
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Find Freelance Talents <br />
                    <span style={{ color: "#6777AD" }}>For Your Business Today!</span>
                  </h2>
                  {/* ── Freelance section body: text-base (up from text-sm) ── */}
                  <p className="text-slate-500 mt-3 text-base max-w-lg mx-auto leading-relaxed">
                    From tech experts to creative professionals, we've got you covered for all your
                    business needs connecting you with top freelance talents quickly, reliably, and hassle-free.
                  </p>
                  <div className="mt-7 flex justify-center items-center gap-4">
                    <button
                      className="magnetic text-white px-12 py-4 rounded-lg font-semibold text-lg"
                      style={{
                        background: "linear-gradient(135deg, #6777AD 0%, #a78bfa 50%, #60a5fa 100%)",
                        boxShadow: "0 4px 20px rgba(103,119,173,0.45)",
                        transition: "opacity 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 28px rgba(103,119,173,0.65)";
                        (e.currentTarget as HTMLButtonElement).style.opacity = "0.92";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(103,119,173,0.45)";
                        (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                      }}
                    >
                      Meet Us
                    </button>
                    <a href="#" className="magnetic text-base font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1">
                      Click to Join Us →
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="cta-section max-w-[1500px] mx-auto px-2 py-6">
              <div className="reveal reveal-scale inner bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-12 text-center" style={{ border: "2px solid #d6d1e7" }}>
                {/* ── CTA heading: text-4xl (up from text-3xl) ── */}
                <h2 className="text-4xl font-bold text-slate-900">
                  Ready to Scale <span style={{ color: "#6777AD" }}>Your Digital Growth?</span>
                </h2>
                {/* ── CTA subtext: text-base (up from text-sm) ── */}
                <p className="text-slate-500 mt-3 text-base">Get a custom strategy tailored for your business goals.</p>
                {/* ── CTA button: px-10 py-4 text-lg (up from px-8 py-3) ── */}
                <button
                  className="magnetic text-white px-10 py-4 rounded-lg font-semibold shadow mt-8 text-lg"
                  style={{
                    backgroundImage: "url('/btn_bg.png')", backgroundSize: "cover",
                    backgroundPosition: "center", backgroundRepeat: "no-repeat",
                  }}
                >
                  Book a Free Strategy Call
                </button>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-transparent mt-10">
              <div className="max-w-[1500px] mx-auto px-2 pb-10">
                <div className="reveal bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-12 text-center" style={{ border: "2px solid #d6d1e7" }}>
                  <div className="px-6 py-14 grid md:grid-cols-4 gap-0">
                    <div className="pr-10 text-left">
                      <div className="flex items-center gap-2 font-bold text-lg">
                        <img src="/logo.svg" alt="SM Solutions Logo" className="w-27 h-20 object-contain" />
                      </div>
                      {/* ── Footer tagline: text-base (up from text-sm) ── */}
                      <span className="text-base mt-4 leading-relaxed block" style={{ color: "#505268" }}>
                        We build high-performance digital ecosystems that drive measurable growth for global brands.
                      </span>
                    </div>
                    {[
                      { title: "Services", items: ["Performance Marketing", "Conversion Optimization", "Web Development", "Branding", "Graphic Design", "UI/UX Strategy"] },
                      { title: "Company", items: ["About Us", "Case Studies", "Careers", "Services", "Graphic Design", "Contact"] },
                    ].map((col) => (
                      <div key={col.title} className="flex gap-6">
                        <img src="/vertial_line.png" alt="" className="h-auto w-px object-fill" />
                        <div className="text-left flex-1 pl-4">
                          {/* ── Footer column heading: text-xl (up from text-lg) ── */}
                          <h3 className="font-extrabold text-xl" style={{ color: "#3b3e47" }}>{col.title}</h3>
                          {/* ── Footer links: text-base (up from text-sm) ── */}
                          <ul className="mt-4 space-y-2 text-base" style={{ color: "#505268" }}>
                            {col.items.map((item) => (
                              <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-6">
                      <img src="/vertial_line.png" alt="" className="h-auto w-px object-fill" />
                      <div className="text-left flex-1 pl-2">
                        <h3 className="font-extrabold text-xl" style={{ color: "#3b3e47" }}>Contact</h3>
                        <ul className="mt-4 space-y-2 text-base" style={{ color: "#505268" }}>
                          <li className="flex items-center gap-3"><img src="/phonee.png" alt="phone" className="w-5 h-5 object-contain" />+1 (555) 123-4567</li>
                          <li className="flex items-center gap-3"><img src="/mail.png" alt="mail" className="w-5 h-5 object-contain" />Info@example.com</li>
                          <li className="flex items-start gap-3"><img src="/location_marker.png" alt="location" className="w-5 h-5 object-contain mt-0.5" />544 honey creek rd. West des moines, ia 50265</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-gray-200 pt-8">
                    <div className="text-left">
                      {/* ── Newsletter heading: text-xl (up from text-lg) ── */}
                      <h4 className="font-extrabold text-xl" style={{ color: "#3b3e47" }}>Stay in the loop</h4>
                      <p className="text-base text-slate-500 mt-1">Get updates about new features and opportunities</p>
                    </div>
                    <div className="relative w-full md:w-auto">
                      <img src="/input_box.png" alt="" className="h-15 w-full md:w-96 object-fill rounded-full" />
                      {/* ── Email input: text-base (up from text-sm) ── */}
                      <input type="email" placeholder="Enter Your Email" className="absolute inset-0 bg-transparent outline-none text-base px-6 py-2 text-slate-700 placeholder-slate-400 w-full" />
                      <button className="absolute right-1 top-1/2 -translate-y-1/2 magnetic">
                        <img src="/circle_next.png" alt="Submit" className="w-13 h-13 object-contain mr-.5" />
                      </button>
                    </div>
                  </div>

                  <div className="px-6 pb-8 flex flex-col md:flex-row justify-between items-center text-base gap-4 border-t border-gray-200 pt-6">
                    <div className="text-left">
                      <p className="font-semibold" style={{ color: "#6777AD" }}>© 2026 SMSolutions. Copyright and rights reserved</p>
                      <div className="flex gap-3 mt-1" style={{ color: "#505268" }}>
                        <a href="#" className="hover:text-blue-600">Terms and Conditions</a>
                        <span>•</span>
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                        <span>•</span>
                        <a href="#" className="hover:text-blue-600">Cookie Policy</a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {[
                        { src: "/linkin.png", alt: "LinkedIn" },
                        { src: "/twetter.png", alt: "Twitter" },
                        { src: "/instragram.png", alt: "Instagram" },
                        { src: "/git.png", alt: "GitHub" },
                      ].map((s) => (
                        <a key={s.alt} href="#" className="magnetic hover:scale-110 transition-transform block">
                          <img src={s.src} alt={s.alt} className="w-10 h-10 object-contain" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}