"use client";

import { useMemo, useState } from "react";
import { CompletionMetricsCard } from "@/components/field-operations/completion-metrics-card";
import { FieldFilters } from "@/components/field-operations/field-filters";
import { FieldKpiRow } from "@/components/field-operations/field-kpi-row";
import { NewWorkOrderSheet } from "@/components/field-operations/new-work-order-sheet";
import { TechnicianMap } from "@/components/field-operations/technician-map";
import { TechnicianStatusPanel } from "@/components/field-operations/technician-status-panel";
import { WorkOrderList } from "@/components/field-operations/work-order-list";
import { Button } from "@/components/ui/button";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import {
  initialWorkOrders,
  technicians,
  type WorkOrder,
  type WorkOrderStatus,
} from "@/lib/demo-field-operations-data";

function applyWorkOrderFilters(
  rows: readonly WorkOrder[],
  status: WorkOrderStatus | "ALL",
  query: string
) {
  const q = query.trim().toLowerCase();
  return rows.filter((wo) => {
    if (status !== "ALL" && wo.status !== status) return false;
    if (!q) return true;
    return (
      wo.number.toLowerCase().includes(q) ||
      wo.title.toLowerCase().includes(q) ||
      wo.site.toLowerCase().includes(q) ||
      wo.district.toLowerCase().includes(q)
    );
  });
}

export function FieldOperationsView() {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>(() => [
    ...initialWorkOrders,
  ]);
  const [status, setStatus] = useState<WorkOrderStatus | "ALL">("ALL");
  const [query, setQuery] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);

  const techById = useMemo(() => {
    const m: Record<string, string> = {};
    for (const t of technicians) m[t.id] = t.name;
    return m;
  }, []);

  const filtered = useMemo(
    () => applyWorkOrderFilters(workOrders, status, query),
    [workOrders, status, query]
  );

  return (
    <div className="mx-auto w-full max-w-[1560px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Field command"
        title="Field operations"
        description="Dispatch, crew posture, and work-order throughput in one operational pane, built for utility-scale field organizations where density of concurrent work is the norm."
        actions={
          <Button type="button" variant="primary" onClick={() => setSheetOpen(true)}>
            New work order
          </Button>
        }
      />

      <FieldKpiRow workOrders={workOrders} />

      <FieldFilters
        status={status}
        onStatus={setStatus}
        query={query}
        onQuery={setQuery}
      />

      <div className="grid items-start gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <TechnicianMap technicians={technicians} />
        </div>
        <div className="space-y-6 xl:col-span-4">
          <TechnicianStatusPanel technicians={technicians} />
          <CompletionMetricsCard />
        </div>
      </div>

      <WorkOrderList rows={filtered} techById={techById} />

      <NewWorkOrderSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        existing={workOrders}
        onCreate={(wo) => setWorkOrders((prev) => [wo, ...prev])}
      />
    </div>
  );
}
