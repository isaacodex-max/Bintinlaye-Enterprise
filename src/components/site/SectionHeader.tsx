import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">
          <span className="h-px w-8 bg-[color:var(--gold)]/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl leading-tight sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}