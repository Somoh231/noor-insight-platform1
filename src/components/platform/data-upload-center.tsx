"use client";

import { useCallback, useState } from "react";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { uploadCategories } from "@/lib/demo-commercial-wedge";
import { cn } from "@/lib/utils";

type QueuedFile = { name: string; sizeLabel: string; categoryId: string };

export function DataUploadCenter() {
  const [dragActive, setDragActive] = useState(false);
  const [queue, setQueue] = useState<QueuedFile[]>([]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files ?? []);
    if (!files.length) return;
    const next = files.map((f) => ({
      name: f.name,
      sizeLabel: f.size > 1_000_000 ? `${(f.size / 1_000_000).toFixed(1)} MB` : `${Math.round(f.size / 1024)} KB`,
      categoryId: "billing",
    }));
    setQueue((q) => [...next, ...q].slice(0, 12));
  }, []);

  const onFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    const next = files.map((f) => ({
      name: f.name,
      sizeLabel: f.size > 1_000_000 ? `${(f.size / 1_000_000).toFixed(1)} MB` : `${Math.round(f.size / 1024)} KB`,
      categoryId: "billing",
    }));
    setQueue((q) => [...next, ...q].slice(0, 12));
    e.target.value = "";
  }, []);

  const steps = [
    { step: "1", title: "Upload", body: "Drop governed billing, prepaid, registry, outage, or field extracts." },
    { step: "2", title: "Validate", body: "Schema, lineage, and reconciliation hooks run before models refresh." },
    { step: "3", title: "Activate", body: "Revenue Recovery Engine and Action Center pick up ranked opportunities." },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Upload Center"
        title="Onboard utility data with drag-and-drop CSV / Excel"
        description="Upload utility data. Identify recoverable revenue. Execute action. Staging is local in this prototype; production routes through virus scan, ACLs, and immutable audit logs."
        badges={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-xs font-semibold text-navy/80">
            Prototype · no files leave your browser
          </span>
        }
      />

      <div className="rounded-xl border border-gold/30 bg-gradient-to-r from-gold/[0.1] via-panel to-panel px-4 py-4 shadow-sm sm:px-6">
        <p className="text-center text-sm font-semibold leading-snug text-navy sm:text-base">
          <span className="text-gold">Upload utility data.</span>{" "}
          <span className="text-navy">Identify recoverable revenue.</span>{" "}
          <span className="text-navy/90">Execute action.</span>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm ring-1 ring-navy/[0.03]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-xs font-bold text-navy">
              {s.step}
            </span>
            <p className="mt-3 text-sm font-semibold text-navy">{s.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-dgray/72">{s.body}</p>
          </div>
        ))}
      </div>

      <section
        aria-label="File drop zone for CSV and Excel uploads"
        onDragEnter={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
        className={cn(
          "rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-colors sm:px-10",
          dragActive
            ? "border-gold/60 bg-gold/[0.06]"
            : "border-navy/15 bg-panel/80 hover:border-navy/25"
        )}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Drag & drop
        </p>
        <p className="mt-3 text-xl font-semibold tracking-tight text-navy sm:text-2xl">
          CSV / XLSX anywhere in this panel
        </p>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-dgray/72">
          In production, uploads route through virus scan, checksum, and tenant ACLs. This preview
          only stages filenames locally for UX validation.
        </p>
        <label className="mt-8 inline-flex cursor-pointer">
          <span className="rounded-lg border border-navy/15 bg-navy px-5 py-2.5 text-sm font-semibold text-lgray shadow-sm transition hover:bg-navy/95">
            Browse files
          </span>
          <input
            type="file"
            accept=".csv,.xlsx,.xls,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            multiple
            className="sr-only"
            onChange={onFileInput}
          />
        </label>
      </section>

      {queue.length > 0 ? (
        <DashboardPanel title="Staged files" subtitle="Assign each extract to a governed lane before publish.">
          <ul className="divide-y divide-navy/[0.06]">
            {queue.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-navy">{f.name}</p>
                  <p className="text-xs text-dgray/60">{f.sizeLabel}</p>
                </div>
                <select
                  defaultValue={f.categoryId}
                  aria-label={`Category for ${f.name}`}
                  className="max-w-xs rounded-lg border border-navy/12 bg-lgray px-3 py-2 text-sm font-medium text-navy"
                >
                  {uploadCategories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
        </DashboardPanel>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {uploadCategories.map((cat) => (
          <article
            key={cat.id}
            className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.03]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{cat.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-dgray/75">{cat.description}</p>
            <p className="mt-4 text-xs font-semibold text-dgray/50">Accepted: {cat.formats}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
