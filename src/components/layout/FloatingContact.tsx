"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingContact() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+38640744882"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label={t(lang, "floatingContact.call")}
        title={t(lang, "floatingContact.call")}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/38640744882"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label={t(lang, "floatingContact.whatsapp")}
        title={t(lang, "floatingContact.whatsapp")}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
