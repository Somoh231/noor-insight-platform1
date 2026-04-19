export default function RootLoading() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-lgray px-6 text-dgray"
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className="h-10 w-10 rounded-full border-2 border-navy/15 border-t-navy motion-safe:animate-spin motion-reduce:animate-none"
        aria-hidden
      />
      <p className="text-sm font-semibold text-navy/80">Loading…</p>
      <span className="sr-only">Loading page content</span>
    </div>
  );
}
