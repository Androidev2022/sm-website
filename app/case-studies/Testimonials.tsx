"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "./data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Our Clients Say</h2>
        <p className="text-sm text-slate-500 mt-2">Real feedback from the brands we&apos;ve helped grow.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            onMouseEnter={() => setActive(i)}
            className={`bg-white rounded-2xl border p-6 flex flex-col transition-all ${
              active === i ? "border-blue-200 shadow-lg shadow-blue-600/5" : "border-slate-100 shadow-sm"
            } ${active === i ? "" : "hidden md:flex"}`}
          >
            <Quote size={22} className="text-blue-600/70" />
            <blockquote className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{t.quote}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <Image src={t.avatar} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover bg-slate-100" />
              <div>
                <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${active === i ? "w-6 bg-blue-600" : "w-2 bg-slate-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
