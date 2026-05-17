"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Newspaper, ArrowRight } from "lucide-react";

export default function MediaPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <section className="relative h-64 sm:h-[400px] overflow-hidden border-b border-border">
        <img src="/hero4.jpg" alt={t(lang, "media.title")} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">{t(lang, "media.title")}</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {lang === "si" ? "Informacije za medije, novinarska gradiva in arhiv objav" : "Media information, press materials and coverage archive"}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Download className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">{t(lang, "media.pressKit")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {lang === "si" ? "Logotipi, fotografije in uradna sporočila za javnost." : "Logos, photos and official press releases."}
            </p>
            <Button asChild variant="outline" className="mt-4 gap-2">
              <a href="/press-kit.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                {lang === "si" ? "Prenesi press kit" : "Download press kit"}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-primary/5 p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Newspaper className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">
              {lang === "si" ? "Arhiv medijskih objav" : "Media Coverage Archive"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {lang === "si" ? "TV, radio in spletni portali o SLO-EXO sejmu." : "TV, radio and online portals covering SLO-EXO."}
            </p>
            <Button asChild className="mt-4 gap-2">
              <Link href="/za-medije/arhiv/">
                {lang === "si" ? "Oglej si arhiv" : "View archive"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">{t(lang, "media.pressReleases")}</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">2026</p>
              <p className="mt-1 font-medium text-foreground">
                {lang === "si" ? "SLO-EXO 2026 — 27. mednarodni sejem eksotičnih živali" : "SLO-EXO 2026 — 27th International Exotic Animal Fair"}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">2024</p>
              <p className="mt-1 font-medium text-foreground">
                {lang === "si" ? "Zapisi s prejšnjih sejmov in dosežki" : "Records from previous fairs and achievements"}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
