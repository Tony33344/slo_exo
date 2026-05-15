import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { ThemeProvider } from "@/lib/theme/theme-context";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { FloatingContact } from "@/components/layout/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SLO-EXO | Mednarodni sejem eksotičnih živali",
  description:
    "SLO-EXO je edini mednarodni sejem eksotičnih živali in opreme za teraristiko ter akvaristiko v Sloveniji. Organizator: STALGO exotic.",
  openGraph: {
    title: "SLO-EXO | International Exotic Animal Fair",
    description:
      "The only international exotic animal and terrarium/aquarium equipment fair in Slovenia.",
    type: "website",
    locale: "sl_SI",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLO-EXO",
    description: "International Exotic Animal Fair & Terrarium/Aquarium Equipment Expo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
            <FloatingContact />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
