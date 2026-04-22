import type { Metadata } from "next";
import { APP_NAME, FIRM_DESCRIPTION, getMetadataBaseUrl } from "@/lib/constants";

const description = FIRM_DESCRIPTION;

export const defaultMetadata: Metadata = {
  metadataBase: getMetadataBaseUrl(),
  title: {
    default: APP_NAME,
    template: `%s · ${APP_NAME}`,
  },
  description,
  applicationName: APP_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: APP_NAME,
    title: APP_NAME,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};
