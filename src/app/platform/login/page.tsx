import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "@/components/platform/login-form";
import { LoginFormSkeleton } from "@/components/platform/login-form-skeleton";
import { BrandLogo } from "@/components/brand/brand-logo";
import { APP_NAME, PRODUCT_PLATFORM_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Platform sign-in",
  description:
    "Authorized access to the Noor Insight Platform for evaluation, pilot, and production utility tenants.",
  robots: { index: false, follow: false },
};

export default function PlatformLoginPage() {
  return (
    <div className="min-h-dvh bg-[linear-gradient(180deg,rgb(var(--color-panel-rgb))_0%,rgb(var(--color-lgray-rgb))_100%)]">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-md text-sm font-semibold tracking-tight text-navy transition hover:text-navy/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
            aria-label={`Return to ${APP_NAME} public site`}
          >
            ← {APP_NAME}
          </Link>
          <span className="rounded-full border border-navy/10 bg-lgray/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/60">
            Authorized access
          </span>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center py-12">
          <div className="mb-10 flex flex-col items-center text-center">
            <BrandLogo href="/" heightClass="h-10 w-auto sm:h-11" />
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-dgray/55">
              {PRODUCT_PLATFORM_NAME}
            </p>
          </div>
          <Suspense fallback={<LoginFormSkeleton />}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
