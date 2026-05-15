"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { motion } from "framer-motion";

const categories = [
  {
    key: "reptiles",
    image: "/hero9Green-Snake-Bothriechis-marchi-National-Park-Cusuco-Sierra-del-Merendón-Honduras-Central-America-HD-Wallpapers-for-mobile-phones-2560x1600.jpg",
  },
  {
    key: "amphibians",
    image: "/hero3Green-frog-with-red-eyes-4k-ultra-HD-Wallpapers-for-computer-and-laptop.jpg",
  },
  {
    key: "arachnids",
    image: "/aranchid animals_tarantulla_blue.jpg",
  },
  {
    key: "insects",
    image: "/insect.jpg",
  },
  {
    key: "rodents",
    image: "/hamster-sauvage.jpg",
  },
  {
    key: "fish",
    image: "/hero Mandarinfish-Fish-is-a-small-exotic-colorful-fish-of-the-dragonet-aquarium-fish-family-3840x2400.jpg",
  },
  {
    key: "liveFood",
    image: "/eardrums-legs-Crickets-sides-bodies-breathing-holes.webp",
  },
  {
    key: "equipment",
    image: "/aquarium.jpg",
  },
  {
    key: "plants",
    image: "/hero5Reptiles-Green-iguana-predominantly-herbivore-green-lizard-of-the-genus-Iguana-Length-30-to-42-cm-Head-to-base-of-tail.jpg",
  },
  {
    key: "pets",
    image: "/top_dog_foods_for_small_dogs.jpg",
  },
] as const;

export function AnimalCategoryGrid() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t(lang, "animalCategories.title")}
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map(({ key, image }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:scale-[1.03] hover:border-primary/30 hover:shadow-xl"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={image}
                  alt={t(lang, `animalCategories.${key}` as never)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">
                  {t(lang, `animalCategories.${key}` as never)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(lang, `animalCategories.${key}Desc` as never)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
