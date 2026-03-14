import type { Metadata } from "next";
import CursorDot from "./components/cursor-dot";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://copstud3.xyz"),
  title: "Christopher Chukwuebuka | Software Developer",
  description:
    "Christopher Chukwuebuka is a software developer specializing in React, Next.js, React Native, and TypeScript — building pixel-perfect web and mobile experiences.",
  authors: [{ name: "Christopher Chukwuebuka", url: "https://copstud3.xyz" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Christopher Chukwuebuka | Software Developer",
    description:
      "Christopher Chukwuebuka is a software developer specializing in React, Next.js, React Native, and TypeScript — building pixel-perfect web and mobile experiences.",
    url: "https://copstud3.xyz",
    siteName: "Christopher Chukwuebuka",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Christopher Chukwuebuka — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Chukwuebuka | Software Developer",
    description:
      "Christopher Chukwuebuka is a software developer specializing in React, Next.js, React Native, and TypeScript — building pixel-perfect web and mobile experiences.",
    creator: "@copstud3",
    images: ["/og-image.png"],
  },
  keywords: [
    "Christopher Chukwuebuka",
    "copstud3",
    "software developer",
    "frontend developer",
    "mobile developer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "GSAP",
    "TanStack",
    "full stack developer",
    "web developer",
    "software engineer",
    "web design",
    "web development",
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
        className={`selection:bg-none selection:text-[#0f8ad8] text-foreground bg-background overflow-x-hidden w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 font-poppins`}
      >
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
