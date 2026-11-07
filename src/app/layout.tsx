import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLAIM READY | Consumer Warranty Guide & Checklist",
  description:
    "A free checklist for anyone about to file a warranty claim. A warranty claim is decided on records. Keep your documents, collect evidence, and ask for everything in writing.",
  keywords: [
    "warranty claim",
    "consumer warranty guide",
    "claim ready",
    "warranty checklist",
    "consumer rights",
    "repair claim",
  ],
  authors: [{ name: "Claim Ready" }],
  openGraph: {
    title: "CLAIM READY | Consumer Warranty Guide & Checklist",
    description: "A free checklist for anyone about to file a warranty claim.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-on-surface antialiased selection:bg-[#DCF3EA] selection:text-[#065F43]">
        {children}
      </body>
    </html>
  );
}
