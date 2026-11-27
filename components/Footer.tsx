import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Rocket, Phone, Mail, MapPin } from "lucide-react";
import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./SocialIcons";
import { WHATSAPP_URL } from "@/lib/contact";

const footerCols = [
  { title: "Services", items: ["Digital Strategy", "Web Development", "Mobile App Development", "Cloud & DevOps", "UI/UX Design", "Digital Marketing"] },
  { title: "Industries", items: ["E-Commerce", "FMCG & Consumer", "Real Estate", "Manufacturing", "SaaS & Technology", "Healthcare"] },
  { title: "Company", items: ["About Us", "Careers", "Partners", "Blog", "Policies"] },
  { title: "Resources", items: ["Case Studies", "Insights", "Whitepapers", "FAQs"] },
];

const footerLinks: Record<string, string> = {
  "About Us": "/about",
  "Case Studies": "/case-studies",
  "Contact Us": "/contact",
  FAQs: "/faq",
  Policies: "/terms",
};

const socials = [LinkedinIcon, InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon];

const contacts = [
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "hello@smsolutions.in" },
  { icon: MapPin, text: "Gurugram, India" },
];

export default function Footer() {
  return (
    <section className="w-full">
      <div className="w-full bg-blue-600">
        {/* CTA strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7 md:py-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-white text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
              <Rocket size={20} />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl leading-tight">Ready to Build Something Impactful?</h3>
              <p className="text-blue-100 text-sm mt-1">Let&apos;s discuss how we can help you achieve measurable growth.</p>
            </div>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="magnetic w-full sm:w-auto justify-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors flex-shrink-0">
            Connect With Us <ArrowRight size={16} />
          </a>
        </div>

        {/* Dark footer panel */}
        <footer className="w-full bg-[#0B1220]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-12 pb-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))_minmax(0,1.4fr)] gap-x-6 gap-y-8 md:gap-y-10 pb-10 border-b border-white/10">
              {/* Brand */}
              <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                <Link
                  href="/"
                  aria-label="SM Solutions home"
                  className="inline-flex mb-4"
                >
                  <Image src="/logo.png" alt="SM Solutions" width={135} height={84} className="h-14 w-auto" />
                </Link>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-sm lg:max-w-[240px]">
                  We build high-performance digital ecosystems that drive measurable growth for ambitious brands worldwide.
                </p>
                <div className="flex flex-wrap items-center gap-2.5 mt-6">
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
                <div key={col.title} className="min-w-0">
                  <h4 className="font-semibold text-white text-sm mb-4">{col.title}</h4>
                  <ul className="space-y-2.5 text-[13px] text-slate-400">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a href={footerLinks[item] ?? "#"} className="hover:text-blue-400 transition-colors">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact */}
              <div className="col-span-2 sm:col-span-2 lg:col-span-1 min-w-0">
                <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
                <ul className="space-y-3 text-[13px] text-slate-300">
                  {contacts.map((c) => (
                    <li key={c.text} className="flex items-center gap-2.5 break-all sm:break-normal">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                        <c.icon size={12} />
                      </span>
                      {c.text}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="magnetic mt-5 flex sm:inline-flex items-center w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white text-[13px] px-4 py-2.5 rounded-md font-semibold whitespace-nowrap transition-colors">
                  Connect With Us
                </a>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-5 text-xs text-slate-500 text-center md:text-left">
              <p>© {new Date().getFullYear()} SM Solutions. All Rights Reserved.</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
                <a href="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
