import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEarthAsia,
} from "react-icons/fa6";
import type { SocialChannel, SocialChannelId } from "../models/SocialChannel";

interface IconProps {
  id: SocialChannelId;
  size?: number;
}

function ChannelIcon({ id, size = 20 }: IconProps) {
  switch (id) {
    case "tiktok":    return <FaTiktok    size={size} />;
    case "instagram": return <FaInstagram size={size} />;
    case "facebook":  return <FaFacebookF size={size} />;
    case "youtube":   return <FaYoutube   size={size} />;
    case "website":   return <FaEarthAsia size={size} />;
  }
}

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
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -3 }}
      style={{ touchAction: "pan-y" }}
      className="relative flex items-center gap-4 w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl
                 bg-white/60 dark:bg-white/[0.04]
                 backdrop-blur-xl
                 border border-white/80 dark:border-white/[0.07]
                 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.10)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]
                 hover:bg-white/90 dark:hover:bg-white/[0.07]
                 hover:border-blue-200/60 dark:hover:border-blue-500/20
                 hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.20)] dark:hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.15)]
                 transition-all duration-300 group overflow-hidden"
    >
      {/* shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-in-out bg-gradient-to-r from-transparent via-white/30 dark:via-white/[0.03] to-transparent pointer-events-none" />

      {/* gradient icon box with brand glow */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0
                   transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{
          background: channel.brandGradient,
          boxShadow: `0 6px 20px -4px ${channel.brandGlow}`,
        }}
      >
        {/* top gloss */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/25 via-transparent to-black/10 pointer-events-none" />
        <span className="relative z-10 drop-shadow-sm">
          <ChannelIcon id={channel.id} />
        </span>
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

      <div className="relative shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      bg-zinc-100/80 dark:bg-white/[0.06]
                      group-hover:bg-blue-500 dark:group-hover:bg-blue-500
                      transition-all duration-300">
        <ArrowUpRight
          size={15}
          className="text-zinc-400 dark:text-zinc-500
                     group-hover:text-white
                     group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                     transition-all duration-200"
        />
      </div>
    </motion.a>
  );
}
