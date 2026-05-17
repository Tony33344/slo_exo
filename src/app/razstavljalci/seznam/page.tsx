"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, Store, MapPin } from "lucide-react";

const exhibitors = [
  { name: "Reptilia d.o.o.", country: "Slovenia", category: "Reptiles", descSi: "Specialisti za kuščarje in kameleone.", descEn: "Specialists in lizards and chameleons." },
  { name: "Terrarium World", country: "Croatia", category: "Equipment", descSi: "Terariji, razsvetljava in oprema.", descEn: "Terrariums, lighting and equipment." },
  { name: "Exotic Breeders HU", country: "Hungary", category: "Reptiles", descSi: "Kvalitetne kače in strupenke.", descEn: "Quality snakes and venomous species." },
  { name: "AquaLife", country: "Slovenia", category: "Fish & Plants", descSi: "Tropske ribe in akvarijska oprema.", descEn: "Tropical fish and aquarium equipment." },
  { name: "SpiderShop", country: "Austria", category: "Arachnids", descSi: "Tarantule in škorpioni.", descEn: "Tarantulas and scorpions." },
  { name: "Green Jungle", country: "Italy", category: "Exotic Plants", descSi: "Eksotične rastline za terarije.", descEn: "Exotic plants for terrariums." },
  { name: "Rodent Ranch", country: "Slovenia", category: "Rodents", descSi: "Hrčki, miši in morski prašički.", descEn: "Hamsters, mice and guinea pigs." },
  { name: "LiveFood Pro", country: "Czech Republic", category: "Live Food", descSi: "Živa hrana za plazilce.", descEn: "Live food for reptiles." },
  { name: "Amphibia Center", country: "Germany", category: "Amphibians", descSi: "Žabe in drevesne žabe.", descEn: "Frogs and tree frogs." },
  { name: "BugWorld", country: "Slovenia", category: "Insects", descSi: "Hrošči, bogomolke in stonoge.", descEn: "Beetles, mantises and centipedes." },
  { name: "PetGear", country: "Slovakia", category: "Equipment", descSi: "Oprema za akvaristiko.", descEn: "Aquarium equipment." },
  { name: "Tropicalis", country: "Slovenia", category: "Fish & Plants", descSi: "Akvarijske rastline in ribe.", descEn: "Aquarium plants and fish." },
  { name: "Venom Labs", country: "Serbia", category: "Reptiles", descSi: "Strupenke in specializirana oprema.", descEn: "Venomous species and specialized equipment." },
  { name: "Feather & Scale", country: "Poland", category: "Reptiles", descSi: "Ball python in corn snake vzreja.", descEn: "Ball python and corn snake breeding." },
  { name: "Eco Terra", country: "Slovenia", category: "Equipment", descSi: "Bioaktivni substrati in dekoracije.", descEn: "Bioactive substrates and decorations." },
];

const categories = ["All", "Reptiles", "Amphibians", "Arachnids", "Insects", "Rodents", "Fish & Plants", "Exotic Plants", "Live Food", "Equipment"];

const categoriesSi: Record<string, string> = {
  All: "Vsi",
  Reptiles: "Plazilci",
  Amphibians: "Dvoživke",
  Arachnids: "Pajkovci",
  Insects: "Žuželke",
  Rodents: "Glodavci",
  "Fish & Plants": "Ribe in rastline",
  "Exotic Plants": "Eksotične rastline",
  "Live Food": "Živa hrana",
  Equipment: "Oprema",
};

export default function ExhibitorListPage() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return exhibitors.filter((ex) => {
      const matchesSearch =
        ex.name.toLowerCase().includes(search.toLowerCase()) ||
        (lang === "si" ? ex.descSi : ex.descEn).toLowerCase().includes(search.toLowerCase()) ||
        ex.country.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || ex.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, lang]);

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

      {/* Search */}
      <div className="mt-8 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={t(lang, "exhibitors.searchPlaceholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
          >
            {lang === "si" ? categoriesSi[cat] || cat : cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <p className="col-span-full text-center text-muted-foreground py-12">
            {t(lang, "exhibitors.noResults")}
          </p>
        ) : (
          filtered.map((ex, i) => (
            <motion.div
              key={ex.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Card className="border-border h-full">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{ex.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {lang === "si" ? ex.descSi : ex.descEn}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Store className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {ex.country}
                    </span>
                  </div>
                  <Badge variant="secondary" className="mt-3">
                    {lang === "si" ? categoriesSi[ex.category] || ex.category : ex.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
