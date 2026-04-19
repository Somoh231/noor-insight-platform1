"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/brand-logo";
import { PRODUCT_PLATFORM_NAME } from "@/lib/constants";
import { navVisibleForRole, platformNav } from "@/lib/platform-nav";
import type { PlatformRole } from "@/lib/platform-roles";
import { cn } from "@/lib/utils";

export type PlatformShellUser = {
  name?: string | null;
  email?: string | null;
  role: PlatformRole;
};

export function PlatformShell({
  user,
  children,
}: {
  user: PlatformShellUser;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-dvh bg-lgray text-dgray">
      <a
        href="#platform-main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-lgray focus:shadow-card focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-navy/40"
      >
        Skip to main content
      </a>
      <div className="flex min-h-dvh">
        <aside className="hidden w-64 shrink-0 border-r border-navy/10 bg-panel lg:block">
          <div className="flex min-h-16 flex-col justify-center gap-1 border-b border-navy/10 px-4 py-3">
            <BrandLogo href="/platform/dashboard" heightClass="h-6 w-auto sm:h-7" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-dgray/50">
              {PRODUCT_PLATFORM_NAME}
            </p>
          </div>
          <nav className="space-y-1 p-3" aria-label="Operations console">
            {platformNav
              .filter((item) => navVisibleForRole(item, user.role))
              .map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium transition duration-200 ease-out motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/35",
                      active
                        ? "bg-navy text-lgray shadow-sm"
                        : "text-dgray/85 hover:bg-navy/[0.05] hover:text-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-navy/10 bg-panel/95 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <BrandLogo
                  href="/platform/dashboard"
                  className="lg:hidden"
                  heightClass="h-[1.35rem] w-auto sm:h-7"
                />
                <span className="hidden rounded-full border border-navy/10 bg-lgray px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy/80 lg:inline">
                  Console
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden text-right sm:block">
                  <p className="truncate text-sm font-semibold text-navy">
                    {user.name ?? "User"}
                  </p>
                  <p className="truncate text-xs text-dgray/65">{user.email}</p>
                </div>
                <span className="rounded-md border border-gold/35 bg-gold/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
                  {user.role}
                </span>
                <Link
                  href="/"
                  className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition duration-200 ease-out hover:border-navy/25 hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
                  aria-label="Return to public site"
                >
                  Exit to site
                </Link>
              </div>
            </div>
            <div className="border-t border-navy/10 px-2 py-2 lg:hidden">
              <div className="flex gap-1 overflow-x-auto pb-1">
                {platformNav
                  .filter((item) => navVisibleForRole(item, user.role))
                  .map((item) => {
                    const active =
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "shrink-0 rounded-md px-3 py-2 text-xs font-semibold transition duration-200 ease-out motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30",
                          active
                            ? "bg-navy text-lgray"
                            : "text-dgray/85 hover:bg-navy/[0.05] hover:text-navy"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </header>

          <main
            id="platform-main"
            tabIndex={-1}
            className="flex-1 px-4 py-8 outline-none sm:px-6 lg:px-8"
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
