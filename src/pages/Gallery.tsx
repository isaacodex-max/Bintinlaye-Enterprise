import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import bread from "@/assets/bread.jpg";
import gym from "@/assets/gym.jpg";
import ventures from "@/assets/ventures.jpg";
import team from "@/assets/team.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

type Cat = "All" | "Bread" | "Ventures" | "Gym";
const items: { src: string; cat: Exclude<Cat, "All">; label: string }[] = [
  { src: bread, cat: "Bread", label: "Signature loaves" },
  { src: g1, cat: "Bread", label: "Pastries" },
  { src: g4, cat: "Bread", label: "Baguettes" },
  { src: ventures, cat: "Ventures", label: "Premium flour" },
  { src: g3, cat: "Ventures", label: "Wholesale stock" },
  { src: gym, cat: "Gym", label: "Gym interior" },
  { src: g2, cat: "Gym", label: "Training" },
  { src: g5, cat: "Gym", label: "Equipment" },
  { src: team, cat: "Ventures", label: "Our people" },
];

export default function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [active, setActive] = useState<number | null>(null);
  const filtered = useMemo(() => items.filter((i) => cat === "All" || i.cat === cat), [cat]);

  return (
    <>
      <PageHero eyebrow="Gallery" title="A look inside Bintinlaye." description="Moments from our bakeries, warehouses and gym floor." />

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {(["All", "Bread", "Ventures", "Gym"] as Cat[]).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm transition-all ${
                  cat === c
                    ? "bg-[color:var(--gold)] text-[color:var(--charcoal)] gold-glow"
                    : "glass text-foreground/80 hover:mirror-text"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            <AnimatePresence>
              {filtered.map((it, i) => (
                <motion.button
                  key={it.src}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  onClick={() => setActive(items.indexOf(it))}
                  className="group block w-full overflow-hidden rounded-2xl glass"
                >
                  <img src={it.src} alt={it.label} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="flex items-center justify-between p-4 text-sm">
                    <span>{it.label}</span>
                    <span className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{it.cat}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-6 backdrop-blur"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={items[active].src}
              alt={items[active].label}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}