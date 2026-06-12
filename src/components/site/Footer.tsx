import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl gold-text">Bintinlaye Enterprise</div>
            <p className="mt-3 text-sm text-muted-foreground">
              A premium African enterprise — artisan bread, wholesale ingredients, and a luxury fitness experience.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full glass transition-transform hover:scale-110 hover:mirror-text"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-[color:var(--gold)]">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Businesses", "/businesses"],
                ["Gallery", "/gallery"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link to={h} className="text-foreground/75 transition-colors hover:mirror-text">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-[color:var(--gold)]">Businesses</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/75">
              <li>Bintinlaye Special Bread</li>
              <li>Bintinlaye Ventures</li>
              <li>Bintinlaye Gym Center</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-[color:var(--gold)]">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/75">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[color:var(--gold)]" /> +234 800 000 0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[color:var(--gold)]" /> hello@bintinlaye.com</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Headquarters · West Africa</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Bintinlaye Enterprise. All rights reserved.</span>
          <span>Crafted with care · Premium standard.</span>
        </div>
      </div>
    </footer>
  );
}