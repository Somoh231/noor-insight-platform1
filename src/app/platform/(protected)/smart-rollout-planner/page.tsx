import type { Metadata } from "next";
import { SmartRolloutPlannerView } from "@/components/platform/smart-rollout-planner-view";

export const metadata: Metadata = {
  title: "Smart Rollout Planner",
};

export default function SmartRolloutPlannerPage() {
  return <SmartRolloutPlannerView />;
}
