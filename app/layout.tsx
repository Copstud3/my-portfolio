import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chris-is-a-dev.vercel.app"),
  title: "Christopher Chukwuebuka | Software developer ",
  openGraph: {
    description:
      "I am a full stack developer building elegant web app solutions.",
    images: ['']
  },
  keywords: [
    "web developer",
    "Rust",
    "Rustacean",
    "full stack developer",
    "software engineer",
    "website",
    "web design",
    "web development",
    "react",
    "nextjs",
    "tailwindcss",
    "typescript",
    "javascript",
    "html",
    "css",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background overflow-x-hidden`}
      >
         {children}
      </body>
    </html>
  );
}
