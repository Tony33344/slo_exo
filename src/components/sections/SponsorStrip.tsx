"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SPONSORS = [
  { name: "PHS.si", logo: "/images/sponsors/phs.si.jpg" },
  { name: "DS Reptiles", logo: "/images/sponsors/ds_reptiles.png" },
  { name: "MrPet", logo: "/images/sponsors/LogoMrPet_moder okvir.png" },
  { name: "Tropicarium", logo: "/images/sponsors/tropicarium.png" },
  { name: "Majam", logo: "/images/sponsors/majam.jpg" },
];

export function SponsorStrip() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(lang, "sponsors.title")}
          </h2>
        </motion.div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex h-16 w-auto items-center justify-center rounded-lg border border-border bg-card/50 px-4 py-2"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/pokrovitelji/">{t(lang, "sponsors.cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
