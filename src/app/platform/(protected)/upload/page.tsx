import type { Metadata } from "next";
import { DataUploadCenter } from "@/components/platform/data-upload-center";

export const metadata: Metadata = {
  title: "Upload Center",
};

export default function UploadPage() {
  return <DataUploadCenter />;
}
