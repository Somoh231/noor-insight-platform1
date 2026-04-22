import { HomeAtStake } from "./home-at-stake";
import { HomeCta } from "./home-cta";
import { HomeHero } from "./home-hero";
import { HomeOperatingPrinciples } from "./home-operating-principles";
import { HomePillars } from "./home-pillars";
import { HomePositioning } from "./home-positioning";
import { HomePrincipleQuote } from "./home-principle-quote";
import { HomeStartingMarket } from "./home-starting-market";

export function HomePageSections() {
  return (
    <main>
      <HomeHero />
      <HomePositioning />
      <HomePillars />
      <HomeAtStake />
      <HomeStartingMarket />
      <HomeOperatingPrinciples />
      <HomePrincipleQuote />
      <HomeCta />
    </main>
  );
}
