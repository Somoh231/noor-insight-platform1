"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  navVisibleForRole,
  platformNavGroups,
  readNavCollapsedIds,
  writeNavCollapsedIds,
} from "@/lib/platform-nav";
import type { PlatformNavItem } from "@/lib/platform-nav";
import type { PlatformRole } from "@/lib/platform-roles";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={cn(
        "h-4 w-4 shrink-0 text-dgray/45 transition-transform duration-200 ease-out motion-reduce:transition-none",
        expanded ? "rotate-0" : "-rotate-90"
      )}
      aria-hidden
    >
      <path fill="currentColor" d="M5.25 7.5 10 12.25 14.75 7.5z" />
    </svg>
  );
}

function renderLink(
  item: PlatformNavItem,
  pathname: string,
  density: "sidebar" | "mobile"
) {
  const active = isActive(pathname, item.href);
  const compact = density === "mobile";
  return (
    <Link
      key={item.href}
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-lg font-medium transition duration-200 ease-out motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/35",
        compact
          ? "shrink-0 px-3 py-2 text-xs font-semibold"
          : "block px-3 py-2 text-sm",
        active
          ? "bg-navy text-lgray shadow-sm"
          : "text-dgray/85 hover:bg-navy/[0.05] hover:text-navy"
      )}
    >
      {item.label}
    </Link>
  );
}

export function PlatformGroupedNav({
  pathname,
  role,
  density,
}: {
  pathname: string;
  role: PlatformRole;
  density: "sidebar" | "mobile";
}) {
  const groups = useMemo(() => {
    return platformNavGroups
      .map((g) => ({
        ...g,
        items: g.items.filter((item) => navVisibleForRole(item, role)),
      }))
      .filter((g) => g.items.length > 0);
  }, [role]);

  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCollapsed(readNavCollapsedIds());
  }, []);

  const toggleGroup = useCallback((id: string) => {
    setCollapsed((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      writeNavCollapsedIds(next);
      return next;
    });
  }, []);

  const isCollapsed = useCallback(
    (id: string) => Boolean(collapsed[id]),
    [collapsed]
  );

  if (density === "mobile") {
    return (
      <div className="flex max-h-[min(52vh,380px)] flex-col gap-4 overflow-y-auto overscroll-y-contain px-1 py-1">
        {groups.map((group) => {
          const open = !isCollapsed(group.id);
          return (
            <div key={group.id}>
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left transition hover:bg-navy/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25"
                aria-expanded={open}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-dgray/50">
                  {group.title}
                </span>
                <NavChevron expanded={open} />
              </button>
              {open ? (
                <div className="mt-2 flex flex-wrap gap-1 pl-0.5">{group.items.map((item) => renderLink(item, pathname, "mobile"))}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 pb-4">
      {groups.map((group) => {
        const open = !isCollapsed(group.id);
        return (
          <div key={group.id}>
            <button
              type="button"
              onClick={() => toggleGroup(group.id)}
              className="flex w-full items-center justify-between gap-2 rounded-md px-1 py-0.5 text-left transition hover:bg-navy/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25"
              aria-expanded={open}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-dgray/50">
                {group.title}
              </span>
              <NavChevron expanded={open} />
            </button>
            {open ? (
              <div className="mt-2 space-y-0.5">
                {group.items.map((item) => renderLink(item, pathname, "sidebar"))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
