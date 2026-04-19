const items = [
  {
    title: "Oversight-ready reporting",
    body: "Board- and donor-grade narratives with defensible metrics and exports.",
  },
  {
    title: "Controls by design",
    body: "Role separation, approvals, and traceability embedded in workflows.",
  },
  {
    title: "Operational lineage",
    body: "From signal to decision to action, structured for audit review.",
  },
  {
    title: "Utility-scale delivery",
    body: "Phased rollout aligned to procurement, training, and field realities.",
  },
] as const;

export function HeroTrustStrip() {
  return (
    <div className="mt-14 border-t border-navy/10 pt-10 sm:mt-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-dgray/50">
        Operating principles
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="hover:border-navy/12 group rounded-2xl border border-navy/[0.07] bg-panel/55 p-5 shadow-sm transition duration-200 ease-out motion-safe:hover:-translate-y-px hover:bg-panel hover:shadow-card motion-reduce:transition-colors sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-1 h-2 w-2 shrink-0 rounded-sm bg-gold/80 ring-4 ring-gold/10 transition duration-200 ease-out group-hover:bg-gold"
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold tracking-tight text-navy">
                  {item.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-dgray/75">
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
