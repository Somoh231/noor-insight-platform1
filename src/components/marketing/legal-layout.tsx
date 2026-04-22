import type { ReactNode } from "react";
import { Display, Eyebrow, InlineLink, Lede, Section } from "@/components/ds";

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
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display as="h1" size="l" className="mt-6">
          {title}
        </Display>
        <Lede className="mt-8">{lead}</Lede>
      </Section>

      <Section topRule rhythm="standard">
        <article className="max-w-measure space-y-12 text-body leading-[1.7] text-ink-2">
          {children}
        </article>
        <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          Last updated · {lastUpdated}
        </p>
        {related && related.length ? (
          <nav
            aria-label="Related notices"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small"
          >
            {related.map((r) => (
              <InlineLink key={r.href} href={r.href} variant="arrow">
                {r.label}
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
    <section className="space-y-4">
      <h2 className="font-serif text-xl font-normal leading-[1.3] tracking-[-0.005em] text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
