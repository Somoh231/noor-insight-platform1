"use client";

import { useEffect, useMemo, useRef, useState, type ElementRef } from "react";
import { Button } from "@/components/ui/button";
import type { WorkOrder, WorkPriority } from "@/lib/demo-field-operations-data";
import { nextWorkOrderNumber } from "@/lib/demo-field-operations-data";
import { inputFieldClassName } from "@/lib/input-classes";
import { cn } from "@/lib/utils";

export function NewWorkOrderSheet({
  open,
  onClose,
  onCreate,
  existing,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (wo: WorkOrder) => void;
  existing: readonly WorkOrder[];
}) {
  const [title, setTitle] = useState("");
  const [site, setSite] = useState("");
  const [district, setDistrict] = useState("Monrovia");
  const [priority, setPriority] = useState<WorkPriority>("P2");
  const panelRef = useRef<ElementRef<"aside">>(null);

  const number = useMemo(() => nextWorkOrderNumber(existing), [existing]);
  const canSubmit = title.trim().length > 0 && site.trim().length > 0;

  useEffect(() => {
    if (!open) return;
    const el = panelRef.current;
    const t = window.setTimeout(() => el?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  function reset() {
    setTitle("");
    setSite("");
    setDistrict("Monrovia");
    setPriority("P2");
  }

  function submit() {
    const trimmed = title.trim();
    if (!trimmed || !site.trim()) return;
    const now = Date.now();
    const wo: WorkOrder = {
      id: `wo-${crypto.randomUUID()}`,
      number,
      title: trimmed,
      site: site.trim(),
      district,
      priority,
      status: "OPEN",
      techId: null,
      createdAt: new Date(now).toISOString(),
      dueAt: new Date(now + 1000 * 60 * 60 * 48).toISOString(),
      completedAt: null,
    };
    onCreate(wo);
    reset();
    onClose();
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={cn(
          "absolute inset-0 bg-navy/45 backdrop-blur-[2px] transition-opacity motion-reduce:transition-none",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-label="Close new work order"
      />

      <aside
        ref={panelRef}
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-md border-l border-navy/10 bg-panel shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset] transition-transform duration-300 ease-out motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wo-sheet-title"
        tabIndex={-1}
      >
        <div className="flex h-16 items-center justify-between border-b border-navy/[0.06] px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
              Dispatch
            </p>
            <h2
              id="wo-sheet-title"
              className="text-base font-semibold tracking-tight text-navy"
            >
              New work order
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:border-navy/25 hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
          >
            Close
          </button>
        </div>

        <div className="space-y-4 px-6 py-6">
          <div className="rounded-xl border border-navy/[0.06] bg-lgray/45 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Assigned number
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">
              {number}
            </p>
          </div>

          <label className="block" htmlFor="wo-title">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Title
            </span>
            <input
              id="wo-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputFieldClassName("mt-2")}
              placeholder="Describe the job…"
            />
          </label>

          <label className="block" htmlFor="wo-site">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Site / asset
            </span>
            <input
              id="wo-site"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className={inputFieldClassName("mt-2")}
              placeholder="SS-12, span id, service address…"
            />
          </label>

          <label className="block" htmlFor="wo-district">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              District
            </span>
            <input
              id="wo-district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className={inputFieldClassName("mt-2")}
            />
          </label>

          <label className="block" htmlFor="wo-priority">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Priority
            </span>
            <select
              id="wo-priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as WorkPriority)}
              className={inputFieldClassName("mt-2 font-semibold")}
            >
              <option value="P1">P1: safety / revenue critical</option>
              <option value="P2">P2: standard SLA</option>
              <option value="P3">P3: best effort</option>
            </select>
          </label>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="primary"
              className="flex-1"
              onClick={submit}
              disabled={!canSubmit}
            >
              Create work order
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>

          <p className="text-[11px] leading-relaxed text-dgray/55">
            In this evaluation build, new work orders persist in the browser session only. Production
            deployments post to your work-management API, notify assigned crews, and record audit
            metadata.
          </p>
        </div>
      </aside>
    </div>
  );
}
