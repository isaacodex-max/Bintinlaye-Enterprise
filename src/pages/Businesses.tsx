import { Link } from "react-router-dom";
import { ArrowRight, Wheat, Truck, Dumbbell, Check } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import bread from "@/assets/bread.jpg";
import gym from "@/assets/gym.jpg";
import ventures from "@/assets/ventures.jpg";
import g1 from "@/assets/g1.jpg";
import g4 from "@/assets/g4.jpg";
import g3 from "@/assets/g3.jpg";
import g2 from "@/assets/g2.jpg";
import g5 from "@/assets/g5.jpg";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-foreground/85">
      <Check className="mt-0.5 h-4 w-4 text-[color:var(--emerald-accent)]" /> {children}
    </li>
  );
}

const businessNav = [
  { id: "bread", label: "Special Bread", Icon: Wheat },
  { id: "ventures", label: "Ventures", Icon: Truck },
  { id: "gym", label: "Gym Center", Icon: Dumbbell },
];

function BusinessBlock({
  id,
  eyebrow,
  title,
  desc,
  features,
  cta,
  img,
  gallery,
  Icon,
  reverse,
}: {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  features: string[];
  cta: string;
  img: string;
  gallery: string[];
  Icon: typeof Wheat;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] glass p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[color:var(--emerald-accent)]/10 blur-3xl" />

          <div className={`relative grid items-center gap-10 lg:gap-14 md:grid-cols-12`}>
            <Reveal className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
                <img src={img} alt={title} loading="lazy" className="aspect-[5/4] w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/25" />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-[color:var(--gold)]">
                <Icon className="h-3.5 w-3.5" /> {eyebrow}
              </div>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">{desc}</p>
              <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {features.map((f) => <Pill key={f}>{f}</Pill>)}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-[color:var(--charcoal)] hover:mirror-glow"
                >
                  {cta} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-foreground hover:mirror-text"
                >
                  View gallery
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {gallery.map((src, i) => (
                <div key={i} className="group overflow-hidden rounded-xl ring-1 ring-white/10 sm:rounded-2xl">
                  <img src={src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Businesses() {
  return (
    <>
      <PageHero
        eyebrow="Our businesses"
        title="Three brands. One promise."
        description="Bread that earns loyalty. Ingredients that power bakeries. A gym that feels like a retreat."
      />

      {/* Quick-nav tabs */}
      <div className="sticky top-20 z-30 -mt-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full glass p-1.5 ring-1 ring-white/10"
        >
          {businessNav.map((b) => (
            <a
              key={b.id}
              href={`#${b.id}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:bg-white/5 hover:mirror-text sm:text-sm"
            >
              <b.Icon className="h-4 w-4 text-[color:var(--gold)]" />
              {b.label}
            </a>
          ))}
        </motion.div>
      </div>

      <BusinessBlock
        id="bread"
        eyebrow="A. Bintinlaye Special Bread"
        title="Bread, the way it should be."
        desc="Hand-shaped, slow-fermented loaves baked fresh every morning — supplied to homes, hotels and supermarkets across the region."
        features={[
          "Daily fresh production",
          "Wholesale supply tiers",
          "Custom orders for hotels",
          "Signature soft bread, baguettes, sandwich loaves",
          "Hygienic, certified bakery",
          "Reliable last-mile delivery",
        ]}
        cta="Place an order"
        img={bread}
        gallery={[g1, g4, bread]}
        Icon={Wheat}
      />

      <BusinessBlock
        id="ventures"
        eyebrow="B. Bintinlaye Ventures"
        title="The supply backbone for serious bakers."
        desc="From flour and sugar to specialty baking ingredients — Ventures is the trusted wholesale partner for bakeries, hotels and food businesses."
        features={[
          "Premium flour at wholesale prices",
          "Pure refined sugar",
          "Yeast, butter, salt & specialty mixes",
          "Bulk pack & retail pack options",
          "Direct importer pricing",
          "Door-to-door delivery available",
        ]}
        cta="Request a price list"
        img={ventures}
        gallery={[ventures, g3, g4]}
        Icon={Truck}
        reverse
      />

      <BusinessBlock
        id="gym"
        eyebrow="C. Bintinlaye Gym Center"
        title="Train where the standard is set."
        desc="A luxury fitness destination featuring elite equipment, certified trainers and personalised programs designed to deliver real results."
        features={[
          "Strength, cardio & functional zones",
          "Certified personal trainers",
          "Group classes & bootcamps",
          "Daily, monthly & annual memberships",
          "Nutrition consultations",
          "Sauna & recovery lounge",
        ]}
        cta="Register today"
        img={gym}
        gallery={[g2, g5, gym]}
        Icon={Dumbbell}
      />
    </>
  );
}