export function LoginFormSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-md space-y-4"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="rounded-2xl border border-navy/[0.08] bg-panel/90 p-8 shadow-soft ring-1 ring-navy/[0.04] sm:p-9">
        <div className="h-3 w-24 rounded-full bg-navy/[0.08] motion-safe:animate-pulse" />
        <div className="mt-6 h-8 max-w-xs rounded-lg bg-navy/[0.08] motion-safe:animate-pulse" />
        <div className="mt-3 space-y-2">
          <div className="h-3 rounded bg-navy/[0.06] motion-safe:animate-pulse" />
          <div className="h-3 max-w-[90%] rounded bg-navy/[0.06] motion-safe:animate-pulse" />
        </div>
        <div className="mt-8 space-y-4">
          <div className="h-12 rounded-lg bg-navy/[0.06] motion-safe:animate-pulse" />
          <div className="h-12 rounded-lg bg-navy/[0.06] motion-safe:animate-pulse" />
        </div>
        <div className="mt-8 h-11 rounded-lg bg-navy/[0.1] motion-safe:animate-pulse" />
      </div>
      <span className="sr-only">Loading sign-in form…</span>
    </div>
  );
}
