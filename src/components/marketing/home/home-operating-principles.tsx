import { Display, Eyebrow, Section } from "@/components/ds";

const principles = [
  {
    title: "Oversight-ready reporting",
    body: "Each figure published to a board, regulator, or donor carries its source, its method, and the date it was produced. The history is never overwritten.",
  },
  {
    title: "Controls by design",
    body: "Role separation, change logs, and evidence requirements are built into the system from day one — not added after an audit finding.",
  },
  {
    title: "Operational lineage",
    body: "A claim in a report can be traced back to the meter read, the crew visit, and the ledger entry it came from. No number stands alone.",
  },
  {
    title: "Utility-scale delivery",
    body: "Engagements are phased, procurement-aligned, and paced for the institution. Training, change control, and acceptance criteria are scope items, not afterthoughts.",
  },
];

export function HomeOperatingPrinciples() {
  return (
    <Section id="principles" topRule rhythm="standard">
      <Eyebrow>Operating principles</Eyebrow>
      <Display as="h2" size="l" className="mt-6 max-w-[24ch]">
        Controls, lineage, and delivery discipline.
      </Display>
      <ol className="mt-14 grid grid-cols-1 gap-0 border-t border-line sm:grid-cols-2">
        {principles.map((p, i) => (
          <li
            key={p.title}
            className={`flex gap-5 py-8 pr-4 sm:gap-6 sm:py-10 ${
              i % 2 === 0 ? "sm:pr-10" : "sm:pl-10"
            } ${i < 2 ? "border-b border-line-soft" : ""} ${
              i % 2 === 0 ? "sm:border-r sm:border-line-soft" : ""
            }`}
          >
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
              0{i + 1}
            </span>
            <div>
              <h3 className="font-serif text-xl font-normal leading-[1.25] tracking-[-0.005em] text-ink sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-[44ch] text-small leading-[1.65] text-ink-2">
                {p.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
