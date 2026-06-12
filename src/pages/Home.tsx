import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Truck, Dumbbell, Wheat } from "lucide-react";
import hero from "@/assets/hero.jpg";
import bread from "@/assets/bread.jpg";
import gym from "@/assets/gym.jpg";
import ventures from "@/assets/ventures.jpg";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import Counter from "@/components/site/Counter";
import TestimonialsSlider from "@/components/site/TestimonialsSlider";

const businesses = [
  { title: "Bintinlaye Special Bread", desc: "Artisan breads baked daily for homes, hotels & wholesale partners.", img: bread, to: "/businesses", icon: Wheat },
  { title: "Bintinlaye Ventures", desc: "Premium flour, sugar and baking ingredients at trusted wholesale scale.", img: ventures, to: "/businesses", icon: Truck },
  { title: "Bintinlaye Gym Center", desc: "A luxury fitness experience — coaching, programs and elite equipment.", img: gym, to: "/businesses", icon: Dumbbell },
];

const testimonials = [
  { name: "Adaeze O.", role: "Hotel Executive Chef", quote: "Bintinlaye bread is the only loaf we serve at our breakfast service. The crumb is unmatched." },
  { name: "Sani M.", role: "Distributor", quote: "Their wholesale flour pricing and reliability transformed my bakery's margins." },
  { name: "Tomi K.", role: "Gym Member", quote: "The gym feels like a five-star resort. World-class equipment with real coaching." },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative isolate h-screen min-h-[680px] w-full overflow-hidden">
        <motion.div style={{ y: yImg }} className="absolute inset-0 -z-10">
          <img src={hero} alt="Bintinlaye Enterprise" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-background" />
        </motion.div>

        <motion.div style={{ y: yText }} className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]"
          >
            <Sparkles className="h-3.5 w-3.5" /> A Premium African Enterprise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-balance text-5xl leading-[1.02] sm:text-7xl md:text-8xl"
          >
            Crafting <span className="gold-text">excellence</span>
            <br /> across industries.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-foreground/80 sm:text-lg"
          >
            From the warmth of freshly baked bread to the precision of elite training, the Bintinlaye Enterprise builds enduring brands rooted in quality, care and craft.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/businesses"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-medium text-[color:var(--charcoal)] transition-all hover:mirror-glow"
            >
              Explore our businesses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm text-foreground hover:mirror-text"
            >
              Talk to our team
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-foreground/60"
        >
          Scroll
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-[color:var(--gold)] to-transparent" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 rounded-3xl glass p-10 sm:grid-cols-2 md:grid-cols-4">
            {[
              { n: 18, s: "+", l: "Years of trust" },
              { n: 3, s: "", l: "Industry brands" },
              { n: 12000, s: "+", l: "Loaves daily" },
              { n: 850, s: "+", l: "Wholesale partners" },
            ].map((it, i) => (
              <Reveal key={i} delay={i * 0.05} className="text-center">
                <Counter to={it.n} suffix={it.s} />
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{it.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESSES */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Our Businesses"
            title="Three brands. One uncompromising standard."
            subtitle="Every venture under Bintinlaye is held to the same standard of craftsmanship, integrity and customer experience."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {businesses.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.1}>
                  <Link
                    to={b.to}
                    className="group relative block overflow-hidden rounded-3xl glass transition-transform hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={b.img}
                        alt={b.title}
                        loading="lazy"
                        className="h-full w-full scale-105 object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    </div>
                    <div className="relative -mt-16 p-7">
                      <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--gold)]/15 text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/30">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl">{b.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--gold)]">
                        Discover <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Testimonials" title="Trusted by partners across the region." />
          <div className="mt-14">
            <Reveal>
              <TestimonialsSlider items={testimonials} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] glass p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[color:var(--emerald-accent)]/15 blur-3xl" />
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">
                <ShieldCheck className="h-3.5 w-3.5" /> Partner with Bintinlaye
              </div>
              <h3 className="mt-6 text-balance text-4xl leading-tight sm:text-6xl">
                Build something <span className="gold-text">lasting</span> with us.
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Wholesale, supply, partnership or membership — let's start a conversation.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-medium text-[color:var(--charcoal)] hover:mirror-glow"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}