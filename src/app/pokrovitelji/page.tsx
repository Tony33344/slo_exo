"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Crown, Medal, Award } from "lucide-react";

const tiers = [
  {
    key: "gold",
    icon: Crown,
    sponsors: [
      { name: "PHS.si", logo: "/images/sponsors/phs.si.jpg" },
      { name: "DS Reptiles", logo: "/images/sponsors/ds_reptiles.png" },
    ],
  },
  {
    key: "silver",
    icon: Medal,
    sponsors: [
      { name: "MrPet", logo: "/images/sponsors/LogoMrPet_moder okvir.png" },
      { name: "Tropicarium", logo: "/images/sponsors/tropicarium.png" },
      { name: "Majam", logo: "/images/sponsors/majam.jpg" },
    ],
  },
  {
    key: "bronze",
    icon: Award,
    sponsors: [],
  },
];

export default function SponsorsPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "sponsorsPage.title")}
        </h1>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <Card key={tier.key} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">
                    {t(lang, `sponsorsPage.tiers.${tier.key}` as never)}
                  </h2>
                </div>
                <ul className="mt-4 space-y-4">
                  {tier.sponsors.map((sponsor) => (
                    <li
                      key={sponsor.name}
                      className="flex items-center justify-center rounded-lg border border-border bg-muted/30 p-4"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-12 w-auto object-contain"
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">{t(lang, "sponsorsPage.cta")}</Button>
      </div>
    </div>
  );
}
