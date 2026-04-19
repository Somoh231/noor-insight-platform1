import type { Metadata } from "next";
import { HomePageSections } from "@/components/marketing/home";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Noor Insight for Utilities",
  description: `${APP_NAME} helps electricity providers reduce losses, improve collections, detect theft, and modernize operations through governed data. Noor Insight turns operational data into clear action.`,
};

export default function HomePage() {
  return <HomePageSections />;
}
