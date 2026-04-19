import type { Metadata } from "next";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { useCasesMegaMenuItems } from "@/lib/use-cases-mega-menu";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "Noor Insight reference patterns for revenue protection, network operations, field digitization, and governance-ready reporting in emerging-market electricity utilities.",
};

const patterns = [
  {
    title: "Commercial loss containment",
    body: "When non-technical losses dominate the narrative, leadership needs a reconciled story that connects metering posture, billing integrity, and field verification, so capital can flow to interventions that move the curve.",
  },
  {
    title: "Service continuity under stress",
    body: "Outages and constrained capacity erode legitimacy as fast as they erode revenue. Operations teams need a single operational picture that links incidents, crews, and customer impact for rapid coordination.",
  },
  {
    title: "Donor- and regulator-grade reporting",
    body: "Development finance and regulatory oversight both punish inconsistency. Reporting packs should carry definitions, sources, and change history, so the same numbers survive scrutiny across audiences.",
  },
] as const;

export default function UseCasesPage() {
  return (
    <main className="border-b border-navy/10 bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Use cases"
          title="Outcomes-first narratives for partners and funders"
          lead="These patterns reflect how utilities and public enterprises typically engage us: not as software shopping, but as programs where accountability, controls, and measurable outcomes are explicit from day one."
        />

        <p className="mx-auto mt-10 max-w-3xl text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-dgray/50">
          Audiences & contexts
        </p>
        <ul className="mt-6 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {useCasesMegaMenuItems.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-2xl border border-navy/[0.08] bg-lgray/50 p-6 shadow-sm ring-1 ring-navy/[0.03] sm:p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Audience</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dgray/80">{item.description}</p>
            </li>
          ))}
        </ul>

        <div id="reference-patterns" className="scroll-mt-24 pt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
            Reference patterns
          </p>
          <ol className="mt-8 space-y-6">
            {patterns.map((p, idx) => (
              <li
                key={p.title}
                className="rounded-2xl border border-navy/[0.08] bg-lgray/50 p-7 shadow-sm ring-1 ring-navy/[0.03] sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-panel text-sm font-bold tabular-nums text-navy">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-navy">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-dgray/82">{p.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" className="px-6 py-3">
            Schedule a walkthrough
          </ButtonLink>
          <ButtonLink href="/solutions" variant="secondary" className="px-6 py-3">
            Solution areas
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
