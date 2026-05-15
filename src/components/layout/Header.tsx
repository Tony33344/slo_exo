"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage, type Lang } from "@/lib/i18n/language-context";
import { useTheme } from "@/lib/theme/theme-context";
import { t } from "@/lib/i18n/translations";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Globe, Sun, Moon } from "lucide-react";

export function Header() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleLang = () => {
    const next: Lang = lang === "si" ? "en" : "si";
    setLang(next);
  };

  const navLinks = [
    { href: "/", label: t(lang, "nav.home") },
    { href: "/obiskovalci/", label: t(lang, "nav.visitors") },
    { href: "/razstavljalci/", label: t(lang, "nav.exhibitors") },
    { href: "/galerija/", label: t(lang, "nav.gallery") },
    { href: "/o-nas/", label: t(lang, "nav.about") },
    { href: "/pokrovitelji/", label: t(lang, "nav.sponsors") },
    { href: "/kontakt/", label: t(lang, "nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo slo exo 2.png"
            alt="SLO-EXO"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLang}
            className="gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "si" ? "EN" : "SI"}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <div className="md:hidden">
              <SheetTrigger
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
            </div>
            <SheetContent side="right" className="w-72 bg-background">
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
