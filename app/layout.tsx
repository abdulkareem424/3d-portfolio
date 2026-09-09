import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Abdulkareem Alhallak — Full Stack Developer",
  description:
    "Thoughtfully built software for the real world. Explore Abdulkareem Alhallak’s web and mobile projects with React, Laravel, Node.js, and Flutter. عبد الكريم الحلاق — مطوّر ويب وتطبيقات.",
  icons: { icon: `${basePath}/favicon.svg` },
};
export const viewport: Viewport = {
  themeColor: "#111214",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
