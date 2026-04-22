import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import {
  APP_NAME,
  EMAIL_BRIEFING,
  EMAIL_HELLO,
} from "@/lib/constants";

/**
 * v2 footer: ink-dark background, inverse wordmark, 2-fr brand column,
 * three link columns, an inline briefing form on the left. No newsletter
 * CTA despite the reference design — briefing remains the single
 * call-to-action per the positioning brief.
 *
 * TODO(legal): replace "Reg. no. forthcoming" with real Liberia / UK
 * registration details once available.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto w-full max-w-content px-6 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-outer">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <BrandLogo size="lg" tone="paper" />
            <p
              className="mt-4 max-w-[34ch] font-serif text-[15px] leading-normal text-paper/70"
              style={{ textWrap: "pretty" }}
            >
              Defensible loss accounting for public electricity providers in
              West Africa. Reconciliation the regulator can trust.
            </p>
            <div className="mt-8">
              <FooterKicker>Briefings</FooterKicker>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 rounded-xs border border-paper/25 px-4 py-[10px] text-sm font-medium text-paper transition-colors duration-fast hover:border-ember hover:text-ember"
              >
                Request a structured briefing
                <span aria-hidden className="font-mono text-xs">→</span>
              </Link>
            </div>
          </div>

          <FooterColumn title="Work">
            <FooterLink href="/solutions">Programmes</FooterLink>
            <span className="inline-flex items-center gap-2 text-[13px] text-paper/82">
              Publications
              <span className="font-mono text-[10px] uppercase tracking-kicker text-paper/45">
                Forthcoming
              </span>
            </span>
            <FooterLink href="/use-cases">Methodology</FooterLink>
            <FooterLink href="/security">Information handling</FooterLink>
          </FooterColumn>

          <FooterColumn title="Firm">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <span className="text-[13px] text-paper/82">Monrovia</span>
            <FooterLink href={`mailto:${EMAIL_HELLO}`} external>
              {EMAIL_HELLO}
            </FooterLink>
            <FooterLink href={`mailto:${EMAIL_BRIEFING}`} external>
              {EMAIL_BRIEFING}
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-paper/12 pt-5 font-mono text-[11px] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {APP_NAME.toUpperCase()} LTD.</span>
          <span>Reg. no. forthcoming · Liberia / United Kingdom</span>
          <span>Reconciled quarterly</span>
        </div>
      </div>
    </footer>
  );
}

function FooterKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] font-semibold uppercase tracking-kicker text-ember">
      {children}
    </p>
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
      <FooterKicker>{title}</FooterKicker>
      <ul className="mt-4 flex flex-col gap-2">
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
    "text-[13px] text-paper/82 transition-colors duration-fast hover:text-paper focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1px_rgb(var(--color-ember-rgb))] focus-visible:rounded-xs";
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
