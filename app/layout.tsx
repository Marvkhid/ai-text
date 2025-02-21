import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Marvel Text",
description: "An AI-Powered Generating Text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
