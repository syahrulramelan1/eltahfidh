import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { SOCIAL_CHANNELS } from "../data/channels";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { LinkCard } from "../components/LinkCard";

export function LinkTreePage() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#06090F]">
      <AnimatedBackground />
      <ThemeToggle isDark={isDark} onToggle={toggle} />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:py-20">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-blue-50 dark:bg-blue-950/40
                         border border-blue-100 dark:border-blue-900/50
                         text-xs text-blue-700 dark:text-blue-300 font-medium mb-6"
            >
              <BookOpen size={12} />
              Menuju Pribadi dan Masyarakat Qur&apos;ani
            </motion.div>

            {/* Logo / Brand */}
            <div className="flex justify-center mb-5">
              <img
                src="/logo-eltahfidh.png"
                alt="elTahfidh Indonesia"
                loading="eager"
                decoding="async"
                className="w-auto block h-20 sm:h-28"
                style={{ maxWidth: 340 }}
              />
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Ikuti kami di platform pilihanmu
            </p>
          </motion.header>

          {/* Link list */}
          <nav aria-label="Tautan media sosial" className="space-y-2.5">
            {SOCIAL_CHANNELS.map((channel, i) => (
              <LinkCard key={channel.id} channel={channel} index={i} />
            ))}
          </nav>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center text-xs text-zinc-400 dark:text-zinc-600 mt-10"
          >
            © {new Date().getFullYear()} elTahfidh — Pesantren Quran Indonesia
          </motion.footer>
        </div>
      </main>
    </div>
  );
}
