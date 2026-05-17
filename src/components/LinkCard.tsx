import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import type { SocialChannel, SocialChannelId } from "../models/SocialChannel";

interface IconProps {
  id: SocialChannelId;
  size?: number;
}

function ChannelIcon({ id, size = 22 }: IconProps) {
  switch (id) {
    case "tiktok":    return <FaTiktok    size={size} />;
    case "instagram": return <FaInstagram size={size} />;
    case "facebook":  return <FaFacebook  size={size} />;
    case "youtube":   return <FaYoutube   size={size} />;
    case "website":   return <FaGlobe     size={size} />;
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -2 }}
      style={{ touchAction: "pan-y" }}
      className="relative flex items-center gap-4 w-full px-5 py-4 sm:py-5 rounded-2xl
                 bg-gradient-to-br from-white via-white to-blue-50/40
                 dark:from-zinc-900/60 dark:via-zinc-900/60 dark:to-blue-950/20
                 ring-1 ring-inset ring-black/[0.05] dark:ring-white/[0.05]
                 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)]
                 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.25)]
                 hover:ring-blue-200 dark:hover:ring-blue-700/50
                 transition-all duration-300 group overflow-hidden"
    >
      {/* shimmer */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out bg-gradient-to-r from-transparent via-blue-100/40 dark:via-white/5 to-transparent pointer-events-none" />

      {/* icon */}
      <div
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-105 ring-1 ring-inset ring-white/20"
        style={{ backgroundColor: channel.brandHex }}
      >
        <ChannelIcon id={channel.id} />
      </div>

      {/* text */}
      <div className="relative flex-1 min-w-0 text-left">
        <p className="font-semibold text-[15px] sm:text-base text-zinc-900 dark:text-zinc-100">
          {channel.label}
        </p>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
          {channel.handle}
        </p>
      </div>

      <ArrowUpRight
        size={18}
        className="relative text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
      />
    </motion.a>
  );
}
