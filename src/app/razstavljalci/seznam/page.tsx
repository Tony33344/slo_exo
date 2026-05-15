"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const exhibitors = [
  { name: "Reptilia d.o.o.", country: "Slovenia", category: "Reptiles" },
  { name: "Terrarium World", country: "Croatia", category: "Equipment" },
  { name: "Exotic Breeders HU", country: "Hungary", category: "Reptiles" },
  { name: "AquaLife", country: "Slovenia", category: "Fish & Plants" },
  { name: "SpiderShop", country: "Austria", category: "Arachnids" },
  { name: "Green Jungle", country: "Italy", category: "Exotic Plants" },
  { name: "Rodent Ranch", country: "Slovenia", category: "Rodents" },
  { name: "LiveFood Pro", country: "Czech Republic", category: "Live Food" },
  { name: "Amphibia Center", country: "Germany", category: "Amphibians" },
  { name: "BugWorld", country: "Slovenia", category: "Insects" },
  { name: "PetGear", country: "Slovakia", category: "Equipment" },
  { name: "Tropicalis", country: "Slovenia", category: "Fish & Plants" },
];

export default function ExhibitorListPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "exhibitors.listTitle")}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {lang === "si"
            ? `Trenutno prijavljenih razstavljalcev: ${exhibitors.length}`
            : `Currently registered exhibitors: ${exhibitors.length}`}
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exhibitors.map((ex, i) => (
          <motion.div
            key={ex.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
          >
            <Card className="border-border">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground">{ex.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{ex.country}</span>
                </div>
                <Badge variant="secondary" className="mt-3">
                  {ex.category}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
