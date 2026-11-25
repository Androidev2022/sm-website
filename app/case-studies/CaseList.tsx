import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Layers } from "lucide-react";
import { caseStudies } from "./data";

export default function CaseList() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
      {/* Cards */}
      <div className="space-y-6">
        {caseStudies.map((c) => (
          <article
            key={c.slug}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] transition-shadow hover:shadow-lg hover:shadow-blue-600/5"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[260px] bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-contain p-6"
              />
            </div>

            <div className="p-5 sm:p-7 flex flex-col">
              <span className={`self-start text-[11px] font-semibold px-2.5 py-1 rounded-full border ${c.tagColor}`}>
                {c.tag}
              </span>
              <h3 className="mt-3 text-lg sm:text-xl font-bold text-slate-900 leading-snug">{c.title}</h3>
              <p className="mt-2 text-[13px] sm:text-sm text-slate-500 leading-relaxed">{c.description}</p>

              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {c.metrics.slice(0, 4).map((m) => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-extrabold text-blue-600">{m.value}</div>
                    <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={14} className="text-slate-400" />
                    <span>Duration</span>
                    <span className="font-semibold text-slate-800">{c.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 min-w-0">
                    <Layers size={14} className="text-slate-400 flex-shrink-0" />
                    <span>Services</span>
                    <span className="font-semibold text-slate-800 truncate">{c.services}</span>
                  </div>
                  <Link
                    href={c.fullStoryHref ?? `/case-studies/${c.slug}`}
                    className="sm:ml-auto inline-flex items-center gap-1 text-blue-600 font-semibold text-[13px] hover:gap-2 transition-all"
                  >
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
