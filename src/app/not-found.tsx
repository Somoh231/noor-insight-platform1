import { MarketingShell } from "@/components/layout/marketing-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { APP_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <MarketingShell>
      <section className="section-y">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-3">
            404
          </p>
          <h1 className="mt-3 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
            Page not found.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            The link may be outdated, or the page may have moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/">Return home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
          <p className="mt-10 text-xs text-ink-3">{APP_NAME}</p>
        </div>
      </section>
    </MarketingShell>
  );
}
