"use client";
import { usePathname } from "next/navigation";
import MusicPlayer from "./MusicPlayer";

export default function ConditionalMusicPlayer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <MusicPlayer />;
}
