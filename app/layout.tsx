import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const lobsterTwo = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: ["normal"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/all`
  : "http://localhost:8888/all";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Anson Wu",
  description: "Anson Wu's website",
  icons: {
    icon: "/app_images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lobsterTwo.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
