"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

type NavLink = { label: string; href: string; hasDropdown?: boolean; match?: string[] };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies", match: ["/casedetails"] },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Clientele", href: "/our-clients" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = ({ href, match = [] }: NavLink) =>
    href !== "#" &&
    (href === "/" ? pathname === "/" : [href, ...match].some((p) => pathname.startsWith(p)));

  return (
    <header className="site-header w-full bg-white/85 backdrop-blur-[10px] border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex justify-between items-center gap-4">
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="SM Solutions home">
          <Image src="/logo.png" alt="SM Solutions" width={135} height={84} priority className="h-10 sm:h-11 md:h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex gap-6 xl:gap-9 text-[15px] font-medium text-slate-600">
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

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="magnetic hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors items-center gap-2">
          Connect With Us <ArrowRight size={15} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden ml-auto w-10 h-10 rounded-lg border border-slate-200 text-slate-700 flex items-center justify-center"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-slate-200 shadow-lg px-4 sm:px-6 py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-2 border-b border-slate-100 last:border-b-0 font-medium ${active ? "text-blue-600" : "text-slate-700"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
            >
              Connect With Us <ArrowRight size={15} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
