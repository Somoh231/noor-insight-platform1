import type { Metadata } from "next";
import { LossIntelligenceView } from "@/components/loss-intelligence/loss-intelligence-view";

export const metadata: Metadata = {
  title: "Loss intelligence",
};

export default function LossIntelligencePage() {
  return <LossIntelligenceView />;
}
