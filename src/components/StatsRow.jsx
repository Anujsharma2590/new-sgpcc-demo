"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Boxes, Handshake, MapPinned } from "lucide-react";
import config from "@/content/site.config";
import { services } from "@/lib/services";
function Count({ value }) {
  const ref = useRef(null);
  const active = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setN(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 550);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
    </span>
  );
}
export default function StatsRow() {
  const stats = [
    {
      n: services.length,
      label: "Service Categories",
      detail: "Construction & Flooring",
      Icon: Boxes,
      colour: "border-[#E8D394] from-white to-[#FFF3CB]",
      accent: "#C18A00",
      iconColour: "#825600",
      iconBackground: "#FFF1B8",
    },
    {
      n: config.partners.length,
      label: "Partner Brands",
      detail: "Materials & Product Brands",
      Icon: Handshake,
      colour: "border-[#D6D0ED] from-white to-[#EFEDF9]",
      accent: "#444791",
      iconColour: "#444791",
      iconBackground: "#E9E6F7",
    },
    {
      n: config.contacts.offices.length + 1,
      label: "Office Locations",
      detail: "Head Office & Branches",
      Icon: MapPinned,
      colour: "border-[#C9E1D5] from-white to-[#E9F4EF]",
      accent: "#247B58",
      iconColour: "#17633C",
      iconBackground: "#DDF0E5",
    },
  ];
  return (
    <section
      className="bg-canvas text-ink"
      aria-label="SGPCC catalogue at a glance"
    >
      <div className="container-responsive grid grid-cols-3 gap-2.5 py-7 sm:gap-5 sm:py-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`group relative isolate overflow-hidden rounded-2xl border bg-linear-to-br px-2.5 pb-4 pt-5 shadow-[0_6px_24px_rgba(34,37,78,.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(34,37,78,.10)] sm:rounded-3xl sm:p-6 ${s.colour}`}
          >
            <div className="absolute inset-x-5 top-0 h-[3px] rounded-b-full sm:inset-x-7" style={{backgroundColor: s.accent}} aria-hidden="true"/>
            <s.Icon className="pointer-events-none absolute -right-5 -top-4 -z-10 hidden h-32 w-32 -rotate-12 opacity-[.045] sm:block" style={{color: s.iconColour}} strokeWidth={1.25} aria-hidden="true"/>
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/80 shadow-[0_3px_8px_rgba(34,37,78,.04)] sm:mt-1 sm:h-12 sm:w-12 sm:rounded-2xl" style={{backgroundColor: s.iconBackground, color: s.iconColour}}>
                <s.Icon size={24} strokeWidth={1.75} aria-hidden="true"/>
              </span>
              <div className="min-w-0">
                <p className="text-[clamp(2rem,3.6vw,3.5rem)] font-extrabold leading-none tracking-tight">
                  <Count value={s.n} />
                </p>
                <p className="mt-2 min-h-8 text-xs font-bold leading-4 text-ink sm:min-h-0 sm:text-sm sm:leading-5 lg:text-base">
                  {s.label}
                </p>
              </div>
            </div>
            <p className="relative mt-5 hidden border-t border-ink/10 pt-3 text-xs font-medium text-slate-copy sm:block">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
