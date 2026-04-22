import Link from "next/link";
import { APP_NAME, EMAIL_BRIEFING, EMAIL_HELLO } from "@/lib/constants";

const FIRM_ADDRESS = "Monrovia · London";

/**
 * Institutional footer. Deep ink background as the one deliberate inverse
 * surface on the site. Mono eyebrows, amber period on the wordmark. No
 * newsletter signup, no social icons, no trust strip.
 *
 * TODO(legal): replace FORTHCOMING registration number with the real
 * Liberia / UK registration details when available.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-page">
      <div className="mx-auto w-full max-w-content px-6 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-24 lg:px-outer">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-[28px] font-medium leading-none tracking-[-0.015em] text-page">
              Noor<span className="text-accent-hover">.</span> Insight
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-4">
              Revenue integrity · Utilities
            </p>
            <p className="mt-6 max-w-[42ch] text-small leading-[1.65] text-line">
              Noor Insight is a utility systems and advisory firm. Our work is
              delivered under counsel-approved NDAs and procurement-aligned
              engagement letters.
            </p>
          </div>

          <FooterColumn title="Firm">
            <FooterLink href="/about">Approach</FooterLink>
            <FooterLink href="/solutions">Solutions</FooterLink>
            <FooterLink href="/use-cases">Use cases</FooterLink>
          </FooterColumn>

          <FooterColumn title="Engagement">
            <FooterLink href="/contact">Request a briefing</FooterLink>
            <FooterLink href={`mailto:${EMAIL_BRIEFING}`} external>
              {EMAIL_BRIEFING}
            </FooterLink>
            <FooterLink href={`mailto:${EMAIL_HELLO}`} external>
              {EMAIL_HELLO}
            </FooterLink>
          </FooterColumn>

          <FooterColumn title="Offices">
            <p className="text-small text-line">{FIRM_ADDRESS}</p>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-3 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-4 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {APP_NAME.toUpperCase()}</span>
          <span>Reg. no. forthcoming · Liberia / United Kingdom</span>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5">
            <Link href="/privacy" className="text-ink-4 underline decoration-ink-3 underline-offset-4 hover:text-accent hover:decoration-accent">
              Privacy
            </Link>
            <Link href="/terms" className="text-ink-4 underline decoration-ink-3 underline-offset-4 hover:text-accent hover:decoration-accent">
              Terms
            </Link>
            <Link href="/security" className="text-ink-4 underline decoration-ink-3 underline-offset-4 hover:text-accent hover:decoration-accent">
              Security
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
        {title}
      </p>
      <ul className="mt-5 space-y-2.5">
        {Array.isArray(children) ? (
          children.map((c, i) => <li key={i}>{c}</li>)
        ) : (
          <li>{children}</li>
        )}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "text-small text-line no-underline transition-colors hover:text-page focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const isExternal = external ?? /^(mailto:|https?:|tel:)/i.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        rel={/^https?:/i.test(href) ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

