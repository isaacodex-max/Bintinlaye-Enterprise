import { Link } from "react-router-dom";
import { Truck, Wheat, Dumbbell, Cookie, Boxes, HandshakeIcon, ArrowRight, ShoppingBag } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const services = [
  { icon: Wheat, title: "Artisan bread supply", text: "Daily bread production for homes, hotels and supermarkets." },
  { icon: Cookie, title: "Custom bakery orders", text: "Specialty loaves and pastries tailored to your event or business." },
  { icon: Truck, title: "Wholesale ingredients", text: "Flour, sugar, yeast and more — delivered at scale." },
  { icon: Boxes, title: "Bulk distribution", text: "Reliable last-mile logistics across the region." },
  { icon: Dumbbell, title: "Fitness memberships", text: "Daily passes, monthly and annual plans for every level." },
  { icon: HandshakeIcon, title: "Corporate partnerships", text: "Bespoke programs for hotels, offices and institutions." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Quietly powerful, end-to-end."
        description="Across food, supply and fitness — every service we offer is built on the same Bintinlaye standard."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="group h-full rounded-3xl glass p-8 transition-all hover:-translate-y-1 hover:mirror-glow">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold)]/15 text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/30 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.text}</p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm text-[color:var(--gold)]"
                    >
                      Inquire <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="relative mt-20 overflow-hidden rounded-[2rem] glass p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--emerald-accent)]/15 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
              <ShoppingBag className="mx-auto h-8 w-8 text-[color:var(--gold)]" />
              <h3 className="mt-6 text-balance text-4xl leading-tight sm:text-5xl">
                Bespoke quotes for <span className="gold-text">serious buyers</span>.
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us your scale, your timing and your goals — we'll come back with a tailored proposal.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-medium text-[color:var(--charcoal)] hover:mirror-glow"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}