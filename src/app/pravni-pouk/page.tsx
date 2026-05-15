"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { motion } from "framer-motion";

export default function LegalPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "legal.title")}
        </h1>
      </motion.div>

      <section className="mt-12 space-y-6 text-muted-foreground">
        <p>{t(lang, "legal.text")}</p>
        <p>
          {lang === "si"
            ? "Vse informacije na tej spletni strani so informativne narave. Organizator si pridržuje pravico do sprememb programa in cen."
            : "All information on this website is for informational purposes only. The organizer reserves the right to change the program and prices."}
        </p>
        <p>
          {lang === "si"
            ? "Kontakt: slo.exo@gmail.com | Tel: +386 (0)40 744 882"
            : "Contact: slo.exo@gmail.com | Phone: +386 (0)40 744 882"}
        </p>
        <p className="text-sm">
          Slo-Exo.si ©2011–2026
        </p>
      </section>
    </div>
  );
}
