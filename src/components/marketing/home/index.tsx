import { HomeCta } from "./home-cta";
import { HomeFounders } from "./home-founders";
import { HomeHero } from "./home-hero";
import { HomeMethodology } from "./home-methodology";
import { HomePillars } from "./home-pillars";
import { HomeStartingMarket } from "./home-starting-market";
import { HomeStats } from "./home-stats";

export function HomePageSections() {
  return (
    <main>
      <HomeHero />
      <HomeStats />
      <HomePillars />
      <HomeStartingMarket />
      <HomeFounders />
      <HomeMethodology />
      <HomeCta />
    </main>
  );
}
