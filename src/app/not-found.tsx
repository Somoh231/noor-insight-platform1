import { ButtonLink } from "@/components/ds";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { APP_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <MarketingShell>
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-kicker text-ember">
            404
          </p>
          <h1 className="mt-3 font-serif text-3xl font-normal leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl">
            Page not found.
          </h1>
          <p className="mt-4 text-base leading-[1.7] text-ink-soft">
            The link may be outdated, or the page may have moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/" variant="primary">
              Return home
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
          <p className="mt-10 font-mono text-xs text-muted">{APP_NAME}</p>
        </div>
      </section>
    </MarketingShell>
  );
}
