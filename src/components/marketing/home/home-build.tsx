import { SectionHeading } from "@/components/marketing/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const pillars = [
  {
    title: "Loss intelligence & controls",
    body: "Revenue protection workflows, exception monitoring, and reconciled views that connect metering, billing, and investigations, without bypassing approvals.",
  },
  {
    title: "Operations command & field execution",
    body: "Dispatch, work management, and asset changes designed for intermittent connectivity, so supervisors can see backlog, SLA risk, and crew performance clearly.",
  },
  {
    title: "Executive reporting with lineage",
    body: "Board-ready narratives backed by queryable metrics: what moved, where, and which interventions were executed, exportable and defensible for oversight bodies.",
  },
] as const;

function MicroSeries() {
  const heights = [40, 62, 48, 74, 55, 68, 44, 58, 36, 52, 66, 42];
  return (
    <div
      className="flex h-[5.25rem] w-full max-w-[8.5rem] items-end justify-end gap-1 sm:h-24"
      aria-hidden
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-sm bg-gradient-to-t from-navy/25 to-navy/10 transition duration-200 ease-out group-hover:from-navy/35 group-hover:to-navy/15"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function HomeBuild() {
  return (
    <section
      id="capabilities"
      aria-labelledby="home-build-title"
      className="section-y border-b border-navy/10 bg-panel"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-14">
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <SectionHeading
              eyebrow="What we build"
              title="Systems that make performance governable"
              id="home-build-title"
              lead="We implement integrated digital platforms, not slide decks. The objective is durable operational change: clearer accountability, tighter controls, and faster coordination."
            />
            <div className="mt-10 hidden lg:block">
              <ButtonLink href="/contact" variant="primary">
                Discuss delivery models
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14 space-y-5 lg:col-span-7 lg:mt-0">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="hover:border-navy/12 group rounded-2xl border border-navy/[0.07] bg-lgray/55 p-8 shadow-sm ring-1 ring-navy/[0.03] transition duration-200 ease-out hover:-translate-y-px hover:bg-lgray/80 hover:shadow-card sm:p-9"
              >
                <div className="flex flex-col gap-8 sm:flex-row sm:items-stretch sm:justify-between sm:gap-10">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-navy sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.7] text-dgray/80">
                      {item.body}
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-6 border-t border-navy/[0.06] pt-6 sm:flex-col sm:items-end sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                    <MicroSeries />
                    <p className="max-w-[10rem] text-right text-[11px] font-medium uppercase tracking-[0.18em] text-dgray/45 sm:max-w-[9rem]">
                      Signal density
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 lg:col-span-12 lg:hidden">
            <ButtonLink href="/contact" variant="primary" className="w-full">
              Discuss delivery models
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
