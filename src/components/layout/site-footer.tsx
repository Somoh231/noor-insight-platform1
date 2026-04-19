import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import {
  APP_NAME,
  BRAND_CLOSING_TAGLINE,
  BRAND_STATEMENT,
  EMAIL_HELLO,
  EMAIL_PARTNERSHIPS,
  PRODUCT_FOR_UTILITIES,
} from "@/lib/constants";
import { primaryNav } from "@/lib/routes";

const standards = [
  "Security-first architecture reviews for sensitive operational data.",
  "Documentation suitable for procurement and technical due diligence.",
  "Delivery planning that respects staffing, training, and change control.",
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy/10 bg-navy text-lgray">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="inline-block rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-lgray/15">
              <BrandLogo href="/" heightClass="h-7 w-auto sm:h-8" />
            </div>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/90">
              {PRODUCT_FOR_UTILITIES}
            </p>
            <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-lgray/90">
              {BRAND_STATEMENT}
            </p>
            <p className="mt-4 max-w-md text-sm leading-[1.75] text-lgray/75">
              {APP_NAME} is a utility intelligence and accountability platform for electricity
              providers: loss reduction, stronger collections, theft detection, and disciplined
              modernization through governed data.
            </p>
            <div className="mt-8 rounded-2xl border border-lgray/10 bg-lgray/[0.04] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                Direct inquiries
              </p>
              <a
                className="mt-3 inline-flex text-sm font-semibold text-lgray underline decoration-lgray/25 underline-offset-4 transition hover:decoration-gold/60"
                href={`mailto:${EMAIL_HELLO}`}
              >
                {EMAIL_HELLO}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-lgray/60">
                General contact and scheduling. Briefings and demos: use the contact page or
                request form for a structured first conversation.
              </p>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/90">
                Strategic partnerships
              </p>
              <a
                className="mt-2 inline-flex text-sm font-semibold text-lgray underline decoration-lgray/25 underline-offset-4 transition hover:decoration-gold/60"
                href={`mailto:${EMAIL_PARTNERSHIPS}`}
              >
                {EMAIL_PARTNERSHIPS}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                Navigate
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-lgray/75 transition duration-200 ease-out hover:text-lgray"
                  >
                    Home
                  </Link>
                </li>
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lgray/75 transition duration-200 ease-out hover:text-lgray"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                Engagement
              </p>
              <p className="mt-5 text-sm leading-[1.75] text-lgray/70">
                For ministries, regulators, utilities, and development partners:
                we provide structured briefings, discovery workshops, and phased
                delivery aligned to procurement realities.
              </p>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                Delivery standards
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-[1.65] text-lgray/70">
                {standards.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80"
                      aria-hidden
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-lgray/10 pt-10 text-center">
          <p className="text-sm font-semibold tracking-tight text-lgray/90">
            {BRAND_CLOSING_TAGLINE}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-lgray/10 pt-10 text-xs text-lgray/55 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {year} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link
                href="/security"
                className="text-lgray/70 underline decoration-lgray/20 underline-offset-4 transition hover:text-lgray hover:decoration-gold/50"
              >
                Security
              </Link>
              <Link
                href="/privacy"
                className="text-lgray/70 underline decoration-lgray/20 underline-offset-4 transition hover:text-lgray hover:decoration-gold/50"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-lgray/70 underline decoration-lgray/20 underline-offset-4 transition hover:text-lgray hover:decoration-gold/50"
              >
                Terms
              </Link>
            </nav>
            <p className="text-lgray/45">
              Emerging markets · Electricity · Public accountability
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
