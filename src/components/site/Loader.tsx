import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative h-20 w-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-[color:var(--gold)]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-[color:var(--gold)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          />
          <span className="absolute inset-0 grid place-items-center font-display text-2xl gold-text">B</span>
        </motion.div>
        <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Bintinlaye Group</div>
      </div>
    </div>
  );
}