# elTahfidh Linktree — CLAUDE.md

## Project Overview
Halaman linktree statis untuk **elTahfidh (Pesantren Quran Indonesia)**.  
Bukan e-commerce. Fungsinya hanya menampilkan 5 link ke platform sosial media.

## Stack
- **React 18** + **TypeScript** + **Vite** (static site)
- **Tailwind CSS v3** — dark mode via `class` strategy
- **Framer Motion v11** — animasi blob background & card entrance
- **Lucide React** — Globe icon untuk website channel

## Folder Structure (OOP / SRP)
```
src/
  models/SocialChannel.ts     ← interface + SocialChannelId union type
  data/channels.ts            ← array SOCIAL_CHANNELS (data layer)
  hooks/useTheme.ts           ← dark/light mode, localStorage key: eltahfidh-theme
  components/
    AnimatedBackground.tsx    ← 3 blob animasi (respects prefers-reduced-motion)
    ThemeToggle.tsx           ← tombol Sun/Moon (fixed top-right)
    LinkCard.tsx              ← satu kartu link reusable (IconBox + text + arrow)
  pages/LinkTreePage.tsx      ← halaman utama, merakit semua komponen
  App.tsx                     ← wrapper minimal
public/
  logo-eltahfidh.png          ← logo utama (favicon + header)
  icons/
    tiktok.webp               ← icon 3D TikTok
    instagram.png             ← icon 3D Instagram
    facebook.jpg              ← icon 3D Facebook
    youtube.png               ← icon 3D YouTube
    website.png               ← tidak dipakai (website pakai Globe icon)
logo-icon/                    ← folder sumber icon asli dari user (jangan hapus)
```

## Commands
```bash
npm run dev      # dev server di localhost:5173
npm run build    # tsc + vite build → dist/
npm run preview  # preview build hasil
```

## Cara Menambah Channel Baru
1. Tambah `id` baru ke union `SocialChannelId` di `src/models/SocialChannel.ts`
2. Tambah entry baru di array `SOCIAL_CHANNELS` di `src/data/channels.ts`
   - `iconImg`: path ke file di `public/icons/` (atau `null` untuk pakai Globe)
   - `iconBg`: warna/gradient background icon (penting untuk icon transparan)
3. Taruh file icon di `public/icons/`

## Icon Rules
- Format: `.webp` (diutamakan) → `.png` → `.jpg`
- Ukuran render: `64px` mobile, `72px` desktop (`w-16 h-16 sm:w-[72px] sm:h-[72px]`)
- CSS: `object-contain` — icon tidak terpotong
- **Icon transparan**: wajib isi `iconBg` dengan warna solid/gradient yang sesuai brand  
  agar background transparan tidak terlihat abu-abu

## Warna Tema
- Utama: biru tua `blue-700` / biru muda `blue-400` / `sky-300`
- Background light: `white`
- Background dark: `#06090F` (hitam biru tua)
- Blob animasi: `blue-200`, `sky-200`, `indigo-100`

## Performance Notes
- Blob animasi **dinonaktifkan otomatis** jika user aktifkan `prefers-reduced-motion`
- Card pakai `backdrop-blur-md` (bukan `xl`) untuk performa lebih baik
- Semua icon `loading="eager"` karena above-the-fold
- Tidak ada lazy load yang dibutuhkan (single page, semua konten terlihat)
- Bundle JS ~270KB gzip 88KB — didominasi Framer Motion; acceptable untuk UX ini

## Deployment
- **GitHub**: `https://github.com/syahrulramelan1/eltahfidh`
- **Hosting**: Render (static site)
- **Build command**: `npm run build`
- **Publish dir**: `dist`
- Setiap `git push` ke `main` → Render auto-redeploy
