"use client";

import { useEffect } from "react";
import { Button, ButtonLink } from "@/components/ds";
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
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-paper px-6 py-24 text-center">
      <div className="max-w-md space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-kicker text-ember">
          Something went wrong
        </p>
        <h1 className="font-serif text-3xl font-normal leading-[1.2] tracking-[-0.01em] text-ink">
          We could not load this page.
        </h1>
        <p className="text-base leading-[1.7] text-ink-soft">
          A temporary error occurred. Retry, or return to the main site.
        </p>
        {error.digest ? (
          <p className="font-mono text-[11px] uppercase tracking-kicker text-muted">
            Reference · {error.digest}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button type="button" variant="primary" onClick={() => reset()}>
          Try again
        </Button>
        <ButtonLink href="/" variant="ghost">
          Back to {APP_NAME}
        </ButtonLink>
      </div>
    </div>
  );
}
