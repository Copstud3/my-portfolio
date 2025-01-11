import type { Metadata } from "next";
import { ThemeProvider } from "./themeProvider";
import "./globals.css";
import { LanguageProvider } from './languageContext'


export const metadata: Metadata = {
  title: "Christopher Chukwuebuka",
  description: "Christopher Chukwuebuka's portfolio made with NextJS",
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
         <LanguageProvider>
            {children}
          </LanguageProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
