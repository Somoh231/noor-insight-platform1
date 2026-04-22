import type { Metadata } from "next";
import { HomePageSections } from "@/components/marketing/home";
import { APP_NAME, FIRM_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME} — revenue integrity for West African utilities`,
  description: FIRM_DESCRIPTION,
};

export default function HomePage() {
  return <HomePageSections />;
}
