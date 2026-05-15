"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("slo-exo-cookies");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("slo-exo-cookies", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card px-4 py-3 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{t(lang, "cookie.text")}</p>
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={accept}>
            {t(lang, "cookie.accept")}
          </Button>
          <Button size="icon" variant="ghost" onClick={() => setVisible(false)} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
