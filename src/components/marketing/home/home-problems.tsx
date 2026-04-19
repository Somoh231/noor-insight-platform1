import { SectionHeading } from "@/components/marketing/section-heading";

const problems = [
  {
    title: "Commercial and technical losses hide in silos",
    body: "Billing gaps, unmetered consumption, theft, and network issues rarely present as a single dashboard. Teams defend programs without a reconciled baseline.",
  },
  {
    title: "Field reality diverges from headquarters records",
    body: "Work orders, inspections, and asset changes need disciplined capture, especially where connectivity, staffing, and training vary across districts.",
  },
  {
    title: "Decisions arrive late and leave a weak audit trail",
    body: "Donors and governments require transparent prioritization. Ad‑hoc spreadsheets and fragmented tools make it hard to show what changed, why, and when.",
  },
  {
    title: "Modernization fails when systems ignore institutional process",
    body: "Procurement, role separation, and escalation paths are not “nice to haves.” They are how utilities stay legitimate while improving performance.",
  },
] as const;

export function HomeProblems() {
  return (
    <section
      id="problems"
      aria-labelledby="home-problems-title"
      className="section-y border-b border-navy/10 bg-lgray"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Where visibility breaks, and why it is costly"
          id="home-problems-title"
          lead="We focus on the fault lines between revenue protection, network operations, and governance: the places where losses compound and public trust erodes."
        />

        <div className="mt-16 grid gap-5 sm:gap-6 lg:mt-20 lg:grid-cols-2">
          {problems.map((p, idx) => (
            <article
              key={p.title}
              className="hover:border-navy/12 group relative overflow-hidden rounded-2xl border border-navy/[0.07] bg-panel/70 p-8 shadow-sm ring-1 ring-navy/[0.03] transition duration-200 ease-out hover:-translate-y-px hover:bg-panel hover:shadow-card-hover sm:p-9"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-10 h-40 w-40 rounded-full bg-gold/[0.07] blur-2xl transition duration-300 group-hover:bg-gold/[0.11]"
                aria-hidden
              />
              <div
                className="absolute right-7 top-7 select-none text-[3.25rem] font-semibold tabular-nums leading-none text-navy/[0.055] transition duration-300 group-hover:text-navy/[0.09] sm:right-8 sm:top-8 sm:text-[3.5rem]"
                aria-hidden
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <div
                  className="h-0.5 w-14 rounded-full bg-gradient-to-r from-gold to-gold/40"
                  aria-hidden
                />
                <h3 className="mt-7 text-lg font-semibold tracking-[-0.01em] text-navy sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-dgray/80">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
