"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

/** "On this page" list that highlights the section currently in view. */
export default function LegalToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // Treat a section as "current" once it reaches the upper part of the screen
      { rootMargin: "-100px 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <ol className="space-y-0.5">
      {items.map((it, i) => {
        const on = active === it.id;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={() => setActive(it.id)}
              className={`flex gap-2 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                on
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className={`w-5 flex-shrink-0 ${on ? "text-blue-600" : "text-slate-400"}`}>{i + 1}.</span>
              {it.title}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
