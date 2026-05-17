export type SocialChannelId =
  | "tiktok"
  | "instagram"
  | "facebook"
  | "youtube"
  | "website";

export interface SocialChannel {
  id: SocialChannelId;
  label: string;
  handle: string;
  url: string;
  iconImg: string | null;
  brandGradient: string;
  brandGlow: string;
}
