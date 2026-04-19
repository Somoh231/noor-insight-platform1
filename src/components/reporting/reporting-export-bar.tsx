"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ExportKind = "PDF" | "Excel" | "Word";

export function ReportingExportBar({ reportLabel }: { reportLabel: string }) {
  const [busy, setBusy] = useState<ExportKind | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function run(kind: ExportKind) {
    setNotice(null);
    setBusy(kind);
    await new Promise((r) => setTimeout(r, 650));
    setBusy(null);
    setNotice(
      `${kind} export queued for “${reportLabel}”. In production this hands off to your document pipeline with approvals and retention policy applied.`
    );
  }

  return (
    <div className="rounded-2xl border border-navy/10 bg-gradient-to-b from-panel to-lgray/35 p-5 shadow-sm ring-1 ring-navy/[0.04] sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
            Exports
          </p>
          <h2 className="mt-2 text-sm font-semibold tracking-tight text-navy">
            Pack generation
          </h2>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-dgray/65">
            Institutional outputs with embedded metric lineage, ready for donor
            diligence, regulator packets, and internal governance reviews.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(["PDF", "Excel", "Word"] as const).map((kind) => (
            <Button
              key={kind}
              type="button"
              variant="secondary"
              className={cn(
                "min-w-[7.5rem] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em]",
                busy === kind && "pointer-events-none opacity-70"
              )}
              disabled={busy !== null && busy !== kind}
              onClick={() => run(kind)}
            >
              {busy === kind ? "Preparing…" : kind}
            </Button>
          ))}
        </div>
      </div>

      {notice ? (
        <div className="mt-4 rounded-xl border border-navy/10 bg-lgray/60 px-4 py-3 text-sm font-semibold text-navy">
          {notice}
        </div>
      ) : null}
    </div>
  );
}
