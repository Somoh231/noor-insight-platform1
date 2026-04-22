import { Body, Eyebrow, Section } from "@/components/ds";

/**
 * Positioning paragraph. Two short paragraphs below the hero that spell
 * out what the firm is and who it works for. Serves as the plain-English
 * answer to "what is Noor Insight" before the three pillars introduce how.
 */
export function HomePositioning() {
  return (
    <Section id="firm" topRule rhythm="standard">
      <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
        <Eyebrow>The firm</Eyebrow>
        <div className="max-w-measure">
          <p
            className="font-serif text-2xl font-normal leading-[1.35] tracking-[-0.005em] text-ink sm:text-3xl"
            style={{ textWrap: "balance" }}
          >
            Noor Insight is a utility systems and advisory firm. We partner
            with public electricity providers in emerging markets to reduce
            losses, improve collections, and modernize field operations.
          </p>
          <Body className="mt-8">
            Our work is built for oversight. Systems are designed to fit
            inside the institution, not around it: every signal traceable,
            every decision defensible, every outcome measurable by a
            regulator, a board, or a donor. We do not sell a product. We
            deliver governed digital systems, disciplined reconciliation,
            and reporting that earns trust under scrutiny.
          </Body>
        </div>
      </div>
    </Section>
  );
}
