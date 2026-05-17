import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import type { SocialChannel } from "../models/SocialChannel";

interface LinkCardProps {
  channel: SocialChannel;
  index: number;
}

function IconBox({ channel }: { channel: SocialChannel }) {
  const boxClass =
    "relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shrink-0 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2";

  if (channel.iconImg) {
    return (
      <div
        className={boxClass}
        style={{ boxShadow: `0 6px 20px -4px ${channel.brandGlow}` }}
      >
        <img
          src={channel.iconImg}
          alt={channel.label}
          width={64}
          height={64}
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain p-1"
        />
      </div>
    );
  }

  return (
    <div
      className={`${boxClass} text-white`}
      style={{
        background: channel.brandGradient,
        boxShadow: `0 6px 20px -4px ${channel.brandGlow}`,
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />
      <Globe size={28} className="relative z-10 drop-shadow-sm" />
    </div>
  );
}

export function LinkCard({ channel, index }: LinkCardProps) {
  return (
    <motion.a
      href={channel.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${channel.label} — ${channel.handle}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -3 }}
      style={{ touchAction: "pan-y" }}
      className="relative flex items-center gap-4 w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl
                 bg-white/60 dark:bg-white/[0.04]
                 backdrop-blur-xl
                 border border-white/80 dark:border-white/[0.07]
                 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.10)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]
                 hover:bg-white/90 dark:hover:bg-white/[0.07]
                 hover:border-blue-200/60 dark:hover:border-blue-500/20
                 hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.20)]
                 transition-all duration-300 group overflow-hidden"
    >
      {/* shimmer */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-in-out bg-gradient-to-r from-transparent via-white/30 dark:via-white/[0.03] to-transparent pointer-events-none" />

      <IconBox channel={channel} />

      <div className="relative flex-1 min-w-0 text-left">
        <p className="font-semibold text-[15px] sm:text-base text-zinc-800 dark:text-zinc-100 leading-tight">
          {channel.label}
        </p>
        <p className="text-xs sm:text-[13px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
          {channel.handle}
        </p>
      </div>

      <div className="relative shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      bg-zinc-100/80 dark:bg-white/[0.06]
                      group-hover:bg-blue-500
                      transition-all duration-300">
        <ArrowUpRight
          size={15}
          className="text-zinc-400 dark:text-zinc-500 group-hover:text-white
                     group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                     transition-all duration-200"
        />
      </div>
    </motion.a>
  );
}
