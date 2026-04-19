import type { Metadata } from "next";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { aboutMegaMenuItems } from "@/lib/about-mega-menu";

export const metadata: Metadata = {
  title: "About",
  description:
    "Noor Insight is a utility intelligence and accountability platform. We partner with electricity providers and public enterprises on revenue integrity, operational command, and governance-grade reporting.",
};

const commitments = [
  {
    title: "Evidence over narrative",
    body: "Decisions should rest on reconciled signals and documented assumptions, especially where public money and political risk intersect.",
  },
  {
    title: "Delivery that respects institutions",
    body: "Software succeeds when procurement, training, and field adoption are planned as seriously as the architecture review.",
  },
  {
    title: "Reporting that survives scrutiny",
    body: "Donors, regulators, and boards ask different questions; the underlying numbers should still agree.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="border-b border-navy/10 bg-lgray">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="About"
          title="Built for institutions that cannot afford ambiguity"
          lead="Noor Insight partners with utilities and public enterprises where performance, legitimacy, and capital efficiency must move together. We combine domain seriousness with delivery discipline, because software only matters when organizations can run it."
        />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" className="px-6 py-3">
            Contact leadership
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" className="px-6 py-3">
            Return to overview
          </ButtonLink>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-dgray/50">
          At a glance
        </p>
        <ul className="mt-6 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {aboutMegaMenuItems.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-2xl border border-navy/[0.08] bg-panel/90 p-6 shadow-sm ring-1 ring-navy/[0.04] sm:p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                {item.id === "contact-briefing" ? "Next step" : "Topic"}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dgray/80">{item.description}</p>
              {item.id === "contact-briefing" ? (
                <div className="mt-5">
                  <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5 text-sm">
                    Request a structured briefing
                  </ButtonLink>
                </div>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-navy/10 pt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
            How we work
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {commitments.map((c) => (
              <li
                key={c.title}
                className="rounded-2xl border border-navy/[0.08] bg-panel/90 p-6 shadow-sm ring-1 ring-navy/[0.04]"
              >
                <h3 className="text-sm font-semibold tracking-tight text-navy">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dgray/80">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
