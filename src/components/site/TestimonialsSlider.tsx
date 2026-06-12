import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Pause, Play } from "lucide-react";

export type Testimonial = { name: string; role: string; quote: string };

export default function TestimonialsSlider({
  items,
  interval = 5000,
}: {
  items: Testimonial[];
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);
  const touchX = useRef<number | null>(null);

  const go = (n: number, d: number = 1) => {
    setDir(d);
    setI(((n % items.length) + items.length) % items.length);
  };
  const next = () => go(i + 1, 1);
  const prev = () => go(i - 1, -1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setI((p) => (p + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, items.length]);

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <div className="relative overflow-hidden rounded-[2rem] glass p-8 sm:p-12">
        <Quote className="absolute right-6 top-6 h-16 w-16 text-[color:var(--gold)]/15 sm:h-24 sm:w-24" />
        <div className="relative min-h-[220px] sm:min-h-[200px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/90 sm:text-2xl">
                "{items[i].quote}"
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="font-medium text-base sm:text-lg">{items[i].name}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {items[i].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full glass transition hover:mirror-text"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, j) => (
            <button
              key={j}
              onClick={() => go(j, j > i ? 1 : -1)}
              aria-label={`Go to testimonial ${j + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                j === i ? "w-8 bg-[color:var(--gold)]" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full glass transition hover:mirror-text"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play" : "Pause"}
          className="ml-2 grid h-10 w-10 place-items-center rounded-full glass transition hover:mirror-text"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}