import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanier Peguero | Software Developer",
  description: "Portfolio of Hanier Peguero, Software Developer specializing in .NET, C#, and Next.js.",
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
