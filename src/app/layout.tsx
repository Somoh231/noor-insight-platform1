import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { defaultMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "@/styles/tokens.css";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: true,
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#F6F2EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(sans.variable, serif.variable, mono.variable)}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
