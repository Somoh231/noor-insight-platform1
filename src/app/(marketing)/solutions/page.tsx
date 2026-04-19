import type { Metadata } from "next";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { PRODUCT_PLATFORM_NAME } from "@/lib/constants";
import { solutionsMegaMenuItems } from "@/lib/solutions-mega-menu";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Noor Insight Platform capabilities: loss intelligence, operational command, and governance-grade reporting for electricity utilities and their oversight bodies.",
};

export default function SolutionsPage() {
  return (
    <main className="border-b border-navy/10 bg-lgray">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Solutions"
          title="Program areas for accountable modernization"
          lead={`The ${PRODUCT_PLATFORM_NAME} delivers integrated capability, not isolated dashboards, so utilities can strengthen revenue integrity, service continuity, and external reporting without multiplying systems of record.`}
        />

        <p className="mx-auto mt-10 max-w-3xl text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-dgray/50">
          Capability modules
        </p>

        <ul className="mt-6 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {solutionsMegaMenuItems.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-2xl border border-navy/[0.08] bg-panel/90 p-6 shadow-sm ring-1 ring-navy/[0.04] motion-safe:transition-shadow motion-safe:duration-300 motion-safe:hover:shadow-card sm:p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Module
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dgray/80">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-navy/[0.08] bg-panel/70 p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-navy">How engagements typically start</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-dgray/80">
            A structured briefing aligns scope to your procurement posture, data readiness, and
            political calendar. From there, we propose phased delivery with explicit controls,
            training, and acceptance criteria, so adoption is measurable and oversight-friendly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary" className="px-6 py-3">
              Request a briefing
            </ButtonLink>
            <ButtonLink href="/use-cases" variant="secondary" className="px-6 py-3">
              Review use cases
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
