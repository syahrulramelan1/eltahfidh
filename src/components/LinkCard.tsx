import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { SocialChannel } from "../models/SocialChannel";

interface LinkCardProps {
  channel: SocialChannel;
  index: number;
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
      transition={{ duration: 0.45, delay: 0.12 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -2 }}
      style={{ touchAction: "pan-y" }}
      className="relative flex items-center gap-4 w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl
                 bg-white/70 dark:bg-white/[0.04]
                 backdrop-blur-md
                 border border-white/80 dark:border-white/[0.07]
                 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_16px_-6px_rgba(0,0,0,0.4)]
                 hover:bg-white/95 dark:hover:bg-white/[0.07]
                 hover:border-blue-200/60 dark:hover:border-blue-500/20
                 hover:shadow-[0_10px_36px_-8px_rgba(59,130,246,0.18)]
                 transition-all duration-300 group overflow-hidden"
    >
      {/* shimmer */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 dark:via-white/[0.03] to-transparent pointer-events-none" />

      {/* icon box — putih + border hitam, sama di light & dark */}
      <div
        className="relative w-11 h-11 rounded-xl shrink-0 overflow-hidden
                   bg-white border-2 border-zinc-900
                   flex items-center justify-center
                   transition-transform duration-300 group-hover:scale-105"
        style={{ boxShadow: `0 4px 16px -4px ${channel.brandGlow}` }}
      >
        <img
          src={channel.iconImg}
          alt={channel.label}
          width={44}
          height={44}
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain p-1"
        />
      </div>

      {/* text */}
      <div className="relative flex-1 min-w-0 text-left">
        <p className="font-semibold text-[15px] sm:text-base text-zinc-800 dark:text-zinc-100 leading-tight">
          {channel.label}
        </p>
        <p className="text-xs sm:text-[13px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
          {channel.handle}
        </p>
      </div>

      {/* arrow */}
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
