import type { SocialChannel } from "../models/SocialChannel";

export const WEBSITE_URL = "https://eltahfidh.or.id";

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@pesantrenquraneltahfidh",
    url: "https://www.tiktok.com/@pesantrenquraneltahfidh",
    iconImg: "/icons/tiktok.jpg",
    brandGradient: "linear-gradient(135deg, #010101 0%, #69C9D0 100%)",
    brandGlow: "rgba(105, 201, 208, 0.45)",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@ibs.eltahfidh",
    url: "https://www.instagram.com/ibs.eltahfidh/",
    iconImg: "/icons/instagram.jpg",
    brandGradient: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)",
    brandGlow: "rgba(253, 29, 29, 0.40)",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "elTAHFIDH Indonesia",
    url: "https://www.facebook.com/elTAHFIDHIndonesia",
    iconImg: "/icons/facebook.jpg",
    brandGradient: "linear-gradient(135deg, #1877F2 0%, #0C5FD3 100%)",
    brandGlow: "rgba(24, 119, 242, 0.45)",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@pesantrenquraneltahfidh5626",
    url: "https://www.youtube.com/@pesantrenquraneltahfidh5626",
    iconImg: "/icons/youtube.png",
    brandGradient: "linear-gradient(135deg, #FF4444 0%, #AA0000 100%)",
    brandGlow: "rgba(255, 0, 0, 0.45)",
  },
  {
    id: "website",
    label: "Website Resmi",
    handle: "eltahfidh.or.id",
    url: "https://eltahfidh.or.id/",
    iconImg: null,
    brandGradient: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #60A5FA 100%)",
    brandGlow: "rgba(59, 130, 246, 0.45)",
  },
];
