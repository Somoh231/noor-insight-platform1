import type { Metadata } from "next";
import { FieldOperationsView } from "@/components/field-operations/field-operations-view";

export const metadata: Metadata = {
  title: "Field operations",
};

export default function FieldOperationsPage() {
  return <FieldOperationsView />;
}
