import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import ClientI18nProvider from "@/components/I18nProvider.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdou Aziz | Portfolio",
  description:
    "Portfolio personnel d'Abdou Aziz Camara - Développeur Full Stack",

  // Configuration des icônes (favicons)
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },

  // Couleur de thème pour les navigateurs mobiles
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  // Manifest pour PWA
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientI18nProvider>{children}</ClientI18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
