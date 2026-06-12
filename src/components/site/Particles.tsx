import { useMemo } from "react";

export default function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 12,
        duration: 18 + Math.random() * 22,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute bottom-[-10vh] rounded-full bg-[color:var(--gold)]"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            filter: "blur(0.5px)",
            boxShadow: "0 0 8px rgba(212,175,55,0.6)",
            animation: `float-up ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}