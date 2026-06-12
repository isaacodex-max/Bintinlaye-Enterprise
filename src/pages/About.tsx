import { Compass, Eye, Heart, Award, Users } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import team from "@/assets/team.jpg";

const values = [
  { icon: Heart, title: "Craft", text: "Every loaf, every program, every delivery shows the care of a maker who refuses shortcuts." },
  { icon: Award, title: "Excellence", text: "We pursue the highest standard in every category we enter." },
  { icon: Users, title: "Community", text: "Our businesses exist to serve the neighborhoods and partners that grew with us." },
];

const timeline = [
  { year: "2008", title: "Bintinlaye Special Bread", text: "A single oven, a family recipe, and the loaf that started it all." },
  { year: "2014", title: "Bintinlaye Ventures", text: "Wholesale flour and ingredient supply launches to power bakeries across the region." },
  { year: "2019", title: "Bintinlaye Gym Center", text: "Bringing world-class fitness facilities to our community." },
  { year: "Today", title: "The Bintinlaye Group", text: "Three flagship brands operating under one uncompromising standard." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A family of brands built on craft."
        description="The Bintinlaye Group is the result of two decades of quiet, careful work — refining what excellence means in every category we touch."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass">
              <img src={team} alt="Leadership team" loading="lazy" className="aspect-[5/4] w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/30" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">Our story</div>
              <h2 className="mt-3 text-4xl sm:text-5xl">From one oven to a portfolio of premium brands.</h2>
              <p className="mt-5 text-muted-foreground">
                Bintinlaye began as a single bakery committed to one idea: that what you make every day should be unmistakably yours. That obsession with craft is now the foundation of every business we operate.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="rounded-2xl glass p-5">
                  <Compass className="h-5 w-5 text-[color:var(--gold)]" />
                  <div className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">Mission</div>
                  <p className="mt-1">To enrich every community we serve through products and experiences worthy of our family name.</p>
                </div>
                <div className="rounded-2xl glass p-5">
                  <Eye className="h-5 w-5 text-[color:var(--gold)]" />
                  <div className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">Vision</div>
                  <p className="mt-1">To be Africa's most respected family of premium consumer brands.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Core values" title="The standards we refuse to compromise." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="h-full rounded-3xl glass p-8 transition-transform hover:-translate-y-1">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold)]/15 text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl">{v.title}</h3>
                    <p className="mt-2 text-muted-foreground">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="Our journey" title="Two decades of quiet work." />
          <div className="relative mt-16 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[color:var(--gold)] before:via-[color:var(--gold)]/30 before:to-transparent sm:before:left-1/2">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className={`relative grid items-center gap-6 sm:grid-cols-2 ${i % 2 ? "sm:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className="pl-10 sm:pl-0 sm:pr-10 sm:text-right">
                    <div className="text-sm uppercase tracking-[0.3em] text-[color:var(--gold)]">{t.year}</div>
                    <h4 className="mt-1 text-2xl">{t.title}</h4>
                    <p className="mt-2 text-muted-foreground">{t.text}</p>
                  </div>
                  <span className="absolute left-2 top-2 h-3 w-3 rounded-full bg-[color:var(--gold)] gold-glow sm:left-1/2 sm:-translate-x-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}