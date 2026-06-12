import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter, Check } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Wholesale, partnership, membership or press — our team responds within one business day."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl glass p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Full name</span>
                  <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-[color:var(--gold)]" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</span>
                  <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-[color:var(--gold)]" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Phone</span>
                  <input name="phone" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-[color:var(--gold)]" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Subject</span>
                  <select name="subject" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-[color:var(--gold)]">
                    <option className="bg-background">Wholesale order</option>
                    <option className="bg-background">Bakery partnership</option>
                    <option className="bg-background">Gym membership</option>
                    <option className="bg-background">General inquiry</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</span>
                  <textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-[color:var(--gold)]" />
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-medium text-[color:var(--charcoal)] transition hover:mirror-glow"
              >
                {sent ? <><Check className="h-4 w-4" /> Sent — we'll be in touch</> : <>Send message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div className="rounded-3xl glass p-7">
                <h3 className="text-2xl">Reach us directly</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-[color:var(--gold)]" />
                    <div>
                      <div className="text-foreground">+234 800 000 0000</div>
                      <div className="text-xs text-muted-foreground">Mon–Sat · 8:00 – 19:00</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-[color:var(--gold)]" />
                    <div>
                      <div>hello@bintinlaye.com</div>
                      <div className="text-xs text-muted-foreground">Replies within one business day</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-[color:var(--gold)]" />
                    <div>Headquarters · West Africa</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-[color:var(--gold)]" />
                    <div>
                      <div>Bakery & Gym: 6:00 – 22:00 daily</div>
                      <div className="text-xs text-muted-foreground">Ventures (wholesale): Mon–Sat</div>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex gap-2">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full glass hover:mirror-text" aria-label="social">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl glass">
                <iframe
                  title="Bintinlaye Enterprise location"
                  src="https://www.google.com/maps?q=Lagos%2C+Nigeria&output=embed"
                  className="block h-72 w-full grayscale-[20%] [filter:invert(0.85)_hue-rotate(180deg)]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}