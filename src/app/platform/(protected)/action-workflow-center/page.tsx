import type { Metadata } from "next";
import { ActionWorkflowCenterView } from "@/components/platform/action-workflow-center-view";

export const metadata: Metadata = {
  title: "Action Workflow Center",
};

export default function ActionWorkflowCenterPage() {
  return <ActionWorkflowCenterView />;
}
