import type { ReactNode } from "react";
import { Display, InlineLink, Kicker, Lede, Section } from "@/components/ds";

export function LegalPage({
  eyebrow,
  title,
  lead,
  lastUpdated,
  related,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  lastUpdated: string;
  related?: ReadonlyArray<{ href: string; label: string }>;
  children: ReactNode;
}) {
  return (
    <main>
      <Section rhythm="loose">
        <Kicker>{eyebrow}</Kicker>
        <Display as="h1" size="lg" className="mt-4">
          {title}
        </Display>
        <Lede className="mt-6">{lead}</Lede>
      </Section>

      <Section topRule rhythm="standard">
        <article className="max-w-measure-body space-y-10 text-base leading-[1.7] text-ink-soft">
          {children}
        </article>
        <p className="mt-12 font-mono text-[11px] uppercase tracking-kicker text-muted">
          Last updated · {lastUpdated}
        </p>
        {related && related.length ? (
          <nav
            aria-label="Related notices"
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            {related.map((r) => (
              <InlineLink key={r.href} href={r.href} variant="ember">
                {r.label} →
              </InlineLink>
            ))}
          </nav>
        ) : null}
      </Section>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-xl font-normal leading-[1.3] tracking-[-0.005em] text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
