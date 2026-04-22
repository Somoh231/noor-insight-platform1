import type { ReactNode } from "react";
import { Display, Eyebrow, Lede } from "@/components/ds";

/**
 * Marketing page heading. Composes the DS eyebrow + display heading + lede.
 * Existing marketing pages consume this; full route rewrites land in D4.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <header className="max-w-measure">
      {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
      <Display size="l" as="h1">
        {title}
      </Display>
      {lead ? <Lede className="mt-6">{lead}</Lede> : null}
    </header>
  );
}
