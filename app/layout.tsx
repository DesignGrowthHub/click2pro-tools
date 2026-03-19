import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://click2pro.com"),
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  title: {
    default: "Click2Pro Tools",
    template: "%s | Click2Pro Tools",
  },
  description:
    "Click2Pro Tools is a premium library of psychology, mental health, and self-assessment tools built for clarity, reflection, and useful next steps.",
  openGraph: {
    title: "Click2Pro Tools",
    description:
      "Explore a premium library of psychology, mental health, and self-assessment tools.",
    url: "https://click2pro.com/tools",
    siteName: "Click2Pro Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Click2Pro Tools",
    description:
      "Explore a premium library of psychology, mental health, and self-assessment tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
