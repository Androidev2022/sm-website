"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

type NavLink = { label: string; href: string; hasDropdown?: boolean; match?: string[] };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies", match: ["/casedetails"] },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Clintele", href: "/our-clients" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = ({ href, match = [] }: NavLink) =>
    href !== "#" &&
    (href === "/" ? pathname === "/" : [href, ...match].some((p) => pathname.startsWith(p)));

  return (
    <header className="site-header w-full bg-white/85 backdrop-blur-[10px] border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg">
            S
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg text-slate-900 tracking-tight">SM Solutions</div>
            <div className="text-[9px] tracking-[0.12em] text-slate-400 font-medium uppercase">
              Engineering Growth. Designing Impact.
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-9 text-[15px] font-medium text-slate-600">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link flex items-center gap-1 hover:text-blue-600 transition-colors ${active ? "active text-blue-600" : ""
                  }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            );
          })}
        </nav>

        <button className="magnetic bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
          Connect With Us <ArrowRight size={15} />
        </button>
      </div>
    </header>
  );
}
