"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";

export default function PlatformProtectedError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Workspace error
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-navy">
          This view failed to render
        </h1>
        <p className="text-sm leading-relaxed text-dgray/70">
          Your session is still active. Retry the load, or open the dashboard while we
          recover this module.
        </p>
        {error.digest ? (
          <p className="text-[11px] tabular-nums text-dgray/45">Reference: {error.digest}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button type="button" variant="primary" onClick={() => reset()}>
          Retry
        </Button>
        <ButtonLink href="/platform/dashboard" variant="secondary">
          Executive dashboard
        </ButtonLink>
        <Link
          href="/platform/login"
          className="text-xs font-semibold text-navy/70 underline-offset-4 hover:text-navy hover:underline"
        >
          Sign-in help
        </Link>
      </div>
    </div>
  );
}
