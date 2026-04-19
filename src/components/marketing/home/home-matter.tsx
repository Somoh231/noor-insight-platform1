import { SectionHeading } from "@/components/marketing/section-heading";

const points = [
  {
    stat: "Losses",
    text: "Unexplained losses are not only financial; they are political. They corrode legitimacy when citizens pay more for less reliability.",
  },
  {
    stat: "Controls",
    text: "Strong controls are not bureaucracy for its own sake. They are how institutions protect scarce capital and prove stewardship.",
  },
  {
    stat: "Evidence",
    text: "When decisions are evidence-led, utilities can prioritize interventions honestly and show progress to donors and regulators without spin.",
  },
] as const;

export function HomeMatter() {
  return (
    <section
      id="why"
      aria-labelledby="home-matter-title"
      className="section-y border-b border-navy/10 bg-lgray"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why it matters"
          title="Electricity is foundational, and fragile without discipline"
          id="home-matter-title"
          lead="In emerging markets, utilities sit at the intersection of economic development, fiscal stress, and public expectation. The right digital systems do not replace leadership; they make leadership possible under scrutiny."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-16 max-w-4xl lg:mt-20">
          <figure className="relative overflow-hidden rounded-2xl border border-navy/[0.07] bg-panel/80 p-9 shadow-card ring-1 ring-navy/[0.03] sm:p-11">
            <div
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent"
              aria-hidden
            />
            <blockquote className="text-center">
              <p className="text-balance text-xl font-semibold leading-snug tracking-[-0.015em] text-navy sm:text-2xl sm:leading-snug">
                “Accountability is not a report. It is the ability to show the
                chain from signal to decision to action, again and again.”
              </p>
            </blockquote>
            <figcaption className="mt-8 text-center text-sm font-medium text-dgray/60">
              Noor Insight operating principle
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {points.map((p) => (
            <div
              key={p.stat}
              className="hover:border-navy/12 group rounded-2xl border border-navy/[0.07] bg-panel/60 p-7 shadow-sm ring-1 ring-navy/[0.03] transition duration-200 ease-out hover:-translate-y-px hover:bg-panel hover:shadow-card sm:p-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                {p.stat}
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] text-dgray/80">
                {p.text}
              </p>
              <span
                className="mt-6 block h-px w-12 bg-gradient-to-r from-gold/70 to-transparent transition duration-200 group-hover:w-16"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
