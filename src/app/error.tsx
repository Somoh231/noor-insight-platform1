"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { APP_NAME } from "@/lib/constants";

export default function RootError({
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
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-lgray px-6 py-16 text-center">
      <div className="max-w-md space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Something went wrong
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-navy">
          We could not load this page
        </h1>
        <p className="text-sm leading-relaxed text-dgray/70">
          A temporary error occurred. You can retry, or return to the marketing site
          while we recover.
        </p>
        {error.digest ? (
          <p className="text-[11px] tabular-nums text-dgray/45">Reference: {error.digest}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button type="button" variant="primary" onClick={() => reset()}>
          Try again
        </Button>
        <ButtonLink href="/" variant="secondary">
          Back to {APP_NAME}
        </ButtonLink>
      </div>
    </div>
  );
}
