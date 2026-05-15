"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const order = [
  { k: "reptiles", h: "/plazilci" },
  { k: "amphibians", h: "/dvozivke" },
  { k: "arachnids", h: "/pajkovci" },
  { k: "insects", h: "/zuzelke" },
  { k: "rodents", h: "/glodavci" },
  { k: "fish", h: "/ribe-in-rastline" },
  { k: "liveFood", h: "/ziva-hrana" },
  { k: "equipment", h: "/oprema" },
  { k: "plants", h: "/egzoticne-rastline" },
  { k: "pets", h: "/dodatno" },
];

export function CategoryPageLayout({ pageKey, image, children }: { pageKey: string; image: string; children: React.ReactNode }) {
  const { lang } = useLanguage();
  const i = order.findIndex((c) => c.k === pageKey);
  const p = i > 0 ? order[i - 1] : order[order.length - 1];
  const n = i < order.length - 1 ? order[i + 1] : order[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        {/* Full-width background image */}
        <div
          className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {/* Dark gradient overlay for readability */}
        <div className="hero-overlay absolute inset-0" />
        {/* Bottom fade to content */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center sm:px-6 sm:py-44 lg:px-8 lg:py-60">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl"
          >
            {t(lang, `animalCategories.${pageKey}` as never)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md sm:text-xl"
          >
            {t(lang, `animalCategories.${pageKey}Desc` as never)}
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {children}
        </motion.div>
      </div>

      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <Link href={p.h} className="group flex items-center gap-2 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">{t(lang, `animalCategories.${p.k}` as never)}</span>
            <span className="sm:hidden">{lang === "si" ? "Nazaj" : "Back"}</span>
          </Link>
          <Link href={n.h} className="group flex items-center gap-2 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground">
            <span className="hidden sm:inline">{t(lang, `animalCategories.${n.k}` as never)}</span>
            <span className="sm:hidden">{lang === "si" ? "Naprej" : "Next"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
