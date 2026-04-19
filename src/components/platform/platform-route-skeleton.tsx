/** Skeleton shown while App Router `loading.tsx` resolves for platform routes. */
export function PlatformRouteSkeleton() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-6 pb-10" aria-busy="true" aria-live="polite">
      <div className="space-y-3">
        <div className="h-3 w-28 rounded-full bg-navy/[0.08] motion-safe:animate-pulse motion-reduce:animate-none" />
        <div className="h-9 max-w-md rounded-lg bg-navy/[0.08] motion-safe:animate-pulse motion-reduce:animate-none sm:h-10" />
        <div className="h-4 max-w-2xl rounded bg-navy/[0.06] motion-safe:animate-pulse motion-reduce:animate-none" />
        <div className="h-4 max-w-xl rounded bg-navy/[0.06] motion-safe:animate-pulse motion-reduce:animate-none" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-24 rounded-2xl border border-navy/[0.06] bg-panel/80 motion-safe:animate-pulse motion-reduce:animate-none"
          />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="h-[380px] rounded-2xl border border-navy/[0.06] bg-panel/80 motion-safe:animate-pulse motion-reduce:animate-none lg:col-span-8" />
        <div className="h-[380px] rounded-2xl border border-navy/[0.06] bg-panel/80 motion-safe:animate-pulse motion-reduce:animate-none lg:col-span-4" />
      </div>
      <span className="sr-only">Loading workspace…</span>
    </div>
  );
}
