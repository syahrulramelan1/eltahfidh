import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label={isDark ? "Mode terang" : "Mode gelap"}
      style={{ touchAction: "manipulation" }}
      className="fixed top-5 right-5 sm:top-7 sm:right-7 z-30 p-3 rounded-full
                 bg-white/90 dark:bg-zinc-900/90
                 border border-blue-100/80 dark:border-white/10
                 shadow-[0_4px_20px_-8px_rgba(59,130,246,0.15)]
                 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.25)]
                 transition-shadow"
    >
      {isDark ? (
        <Sun size={18} className="text-sky-300" />
      ) : (
        <Moon size={18} className="text-blue-700" />
      )}
    </motion.button>
  );
}
