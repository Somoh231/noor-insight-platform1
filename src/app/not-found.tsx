import Link from "next/link";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { APP_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <MarketingShell>
      <section className="section-y">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
            404
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-dgray/75">
            The link may be outdated, or the page may have moved. Choose a destination
            below to continue.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/">Return home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
            <Link
              href="/platform/login"
              className="text-sm font-semibold text-navy/75 underline-offset-4 hover:text-navy hover:underline"
            >
              Platform sign-in
            </Link>
          </div>
          <p className="mt-10 text-xs text-dgray/50">{APP_NAME}</p>
        </div>
      </section>
    </MarketingShell>
  );
}
