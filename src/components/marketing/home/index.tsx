import { HomeBrandClose } from "@/components/marketing/home/home-brand-close";
import { HomeBuild } from "@/components/marketing/home/home-build";
import { HomeCtaStrip } from "@/components/marketing/home/home-cta-strip";
import { HomeHero } from "@/components/marketing/home/home-hero";
import { HomeLiberia } from "@/components/marketing/home/home-liberia";
import { HomeMatter } from "@/components/marketing/home/home-matter";
import { HomeProblems } from "@/components/marketing/home/home-problems";

export function HomePageSections() {
  return (
    <main>
      <HomeHero />
      <HomeProblems />
      <HomeBuild />
      <HomeMatter />
      <HomeLiberia />
      <HomeCtaStrip />
      <HomeBrandClose />
    </main>
  );
}
