import type { Metadata } from "next";
import { DesignSystemPreview } from "@/components/marketing/design-system-preview";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME} — design system preview`,
  description:
    "Deliverable 2 of the Noor Insight revamp: design tokens and primitives rendered on the live page. The full home page content lands in Deliverable 3.",
};

export default function HomePage() {
  return <DesignSystemPreview />;
}
