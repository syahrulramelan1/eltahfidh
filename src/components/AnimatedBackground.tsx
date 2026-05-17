import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduced = useReducedMotion();

  const blob = (
    className: string,
    x: number[],
    y: number[],
    duration: number
  ) => (
    <motion.div
      style={{ willChange: "transform" }}
      className={className}
      animate={reduced ? {} : { x, y }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {blob(
        "absolute -top-32 -left-24 w-[360px] h-[360px] rounded-full blur-2xl bg-blue-200/40 dark:bg-blue-600/20",
        [0, 50, 0], [0, 40, 0], 20
      )}
      {blob(
        "absolute top-1/4 -right-24 w-[320px] h-[320px] rounded-full blur-2xl bg-sky-200/40 dark:bg-sky-600/15",
        [0, -40, 0], [0, 50, 0], 22
      )}
      {blob(
        "absolute -bottom-24 left-1/4 w-[340px] h-[340px] rounded-full blur-2xl bg-indigo-100/50 dark:bg-indigo-500/10",
        [0, 40, 0], [0, -30, 0], 24
      )}
    </div>
  );
}
