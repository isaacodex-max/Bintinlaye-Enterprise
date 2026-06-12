import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-6 text-center">
      <div>
        <div className="font-display text-7xl gold-text sm:text-9xl">404</div>
        <p className="mt-4 text-lg text-muted-foreground">This page wandered off the menu.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-[color:var(--charcoal)] hover:mirror-glow"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}