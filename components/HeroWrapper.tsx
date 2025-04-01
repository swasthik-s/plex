"use client"; // Mark this file as a client component

import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection";

export default function HeroWrapper() {
  const pathname = usePathname();

  return pathname === "/" ? <HeroSection /> : null;
}
