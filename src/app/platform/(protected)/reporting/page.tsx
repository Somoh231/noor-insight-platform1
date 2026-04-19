import type { Metadata } from "next";
import { ReportingView } from "@/components/reporting/reporting-view";

export const metadata: Metadata = {
  title: "Reporting",
};

export default function ReportingPage() {
  return <ReportingView />;
}
