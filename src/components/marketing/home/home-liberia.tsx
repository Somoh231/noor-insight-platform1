import { ButtonLink } from "@/components/ui/button-link";

const outcomes = [
  "A phased roadmap aligned to procurement, staffing, and network realities, not a one-size-fits-all “platform dump.”",
  "Controls-first workflows that strengthen revenue protection and operational visibility without bypassing institutional roles.",
  "Reporting artifacts designed for oversight: clear metrics, clear owners, and clear timelines.",
] as const;

export function HomeLiberia() {
  return (
    <section
      id="liberia"
      aria-labelledby="home-liberia-title"
      className="section-y relative overflow-hidden bg-navy text-lgray"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(980px_circle_at_18%_0%,rgb(196_154_42/0.2),transparent_56%),radial-gradient(760px_circle_at_92%_35%,rgb(245_245_245/0.07),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold/70" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Starting market
          </p>
        </div>

        <div className="mt-7 max-w-3xl">
          <h2
            id="home-liberia-title"
            className="text-balance text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[2rem] lg:text-[2.25rem] lg:leading-[1.1]"
          >
            Beginning with Liberia Electricity Corporation (LEC)
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-[1.75] text-lgray/85 sm:text-lg sm:leading-[1.75]">
            Liberia is a proving ground for disciplined modernization:
            constrained infrastructure, urgent loss-reduction pressure, and a
            public mandate to improve reliability. Noor Insight is designed to
            partner with utilities like LEC, meeting them where they are, and
            building systems that can earn trust inside the organization first.
          </p>
          <ul className="mt-8 max-w-2xl list-inside list-disc space-y-2.5 text-sm leading-relaxed text-lgray/80 sm:text-[15px]">
            <li>
              Commercial loss, power theft, and non-technical leakage anchored in transformer and
              network intelligence, not guesswork.
            </li>
            <li>
              Collections modernization: prepaid rollout readiness, customer mapping, and reconciled
              revenue views leadership can defend.
            </li>
            <li>
              Identity and customer integrity: National ID integration paths where policy allows,
              with controls that respect privacy and procurement.
            </li>
            <li>
              Field operations digitization: work orders, crews, and assets visible in one posture
              for dispatch and executive review.
            </li>
            <li>
              Donor- and regulator-ready reporting: dashboards and export discipline for recovery,
              reliability, and long-term modernization narratives.
            </li>
          </ul>
        </div>

        <ul className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {outcomes.map((text) => (
            <li
              key={text}
              className="border-lgray/12 hover:border-lgray/18 group rounded-2xl border bg-lgray/[0.04] p-7 shadow-[0_1px_0_rgb(255_255_255/0.06)_inset] backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-px hover:bg-lgray/[0.07] sm:p-8"
            >
              <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-gold to-gold/35 transition duration-200 group-hover:w-16" />
              <p className="mt-6 text-[15px] leading-[1.7] text-lgray/85">
                {text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-3 sm:mt-14 sm:flex-row sm:items-center">
          <ButtonLink href="/contact" variant="inverse">
            Explore a utility partnership
          </ButtonLink>
          <ButtonLink href="/use-cases" variant="ghostOnDark">
            Read use-case outlines
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
