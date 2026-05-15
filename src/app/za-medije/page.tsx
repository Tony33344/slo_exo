"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function MediaPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "media.title")}
        </h1>
      </motion.div>

      <section className="mt-12">
        <Button asChild variant="outline" className="gap-2">
          <a href="/press-kit.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
            {t(lang, "media.pressKit")}
          </a>
        </Button>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">{t(lang, "media.pressReleases")}</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">2026</p>
            <p className="mt-1 font-medium text-foreground">
              {lang === "si"
                ? "SLO-EXO 2026 — 27. mednarodni sejem eksotičnih živali"
                : "SLO-EXO 2026 — 27th International Exotic Animal Fair"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">2025</p>
            <p className="mt-1 font-medium text-foreground">
              {lang === "si"
                ? "Zapisi s prejšnjih sejmov in dosežki"
                : "Records from previous fairs and achievements"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
