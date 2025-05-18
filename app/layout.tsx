import type { Metadata } from "next";
import { ThemeProvider } from "./themeProvider";
import "./globals.css";
import { LanguageProvider } from "./languageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://chris-is-a-dev.vercel.app"),
  title: "Christopher Chukwuebuka | Web developer ",
  openGraph: {
    description:
      "I am a full stack developer building elegant web app solutions.",
    images: ['']
  },
  keywords: [
    "web developer",
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
        className={`font-monospace transition-colors duration-1000 bg-background`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
