import type { Metadata } from "next";
import { GridIntelligenceView } from "@/components/platform/grid-intelligence-view";

export const metadata: Metadata = {
  title: "Grid Intelligence",
};

export default function GridIntelligencePage() {
  return <GridIntelligenceView />;
}
