import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        style={{ willChange: "transform" }}
        className="absolute -top-32 -left-24 w-[380px] h-[380px] rounded-full blur-2xl bg-blue-200/40 dark:bg-blue-600/20"
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ willChange: "transform" }}
        className="absolute top-1/4 -right-24 w-[340px] h-[340px] rounded-full blur-2xl bg-sky-200/40 dark:bg-sky-600/15"
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ willChange: "transform" }}
        className="absolute -bottom-24 left-1/4 w-[360px] h-[360px] rounded-full blur-2xl bg-indigo-100/50 dark:bg-indigo-500/10"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
