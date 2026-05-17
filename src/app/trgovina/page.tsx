"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, MapPin, Mail, Star, Package } from "lucide-react";

const products = [
  {
    key: "shirtBlack",
    image: "/merch/merch-01.png",
    tag: null,
  },
  {
    key: "shirtGreen",
    image: "/merch/merch-02.png",
    tag: null,
  },
  {
    key: "shirtWhite",
    image: "/merch/merch-03.png",
    tag: null,
  },
  {
    key: "mug",
    image: "/merch/merch-04.png",
    tag: null,
  },
  {
    key: "bundle",
    image: "/merch/merch-05.png",
    tag: "bundle",
  },
  {
    key: "poster",
    image: "/merch/merch-06.png",
    tag: null,
  },
];

export default function ShopPage() {
  const { lang } = useLanguage();

  const mailto = (itemName: string) => {
    const subject = encodeURIComponent(`Naročilo: ${itemName}`);
    window.location.href = `mailto:slo.exo@gmail.com?subject=${subject}`;
  };

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-[center_78%] bg-no-repeat"
          style={{ backgroundImage: "url('/hero6Exotic-animals-reptiles-Chameleon-that-changes-colors-according-to-the-surroundings-which-it-surrounds-HD-Wallpaper-High-Definition-3840x2400.jpg')" }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-40 lg:px-8 lg:py-52">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ShoppingBag className="mx-auto h-12 w-12 text-white drop-shadow-lg sm:h-16 sm:w-16" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl"
          >
            {t(lang, "shop.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md sm:text-xl"
          >
            {t(lang, "shop.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 max-w-xl text-base text-white/80 drop-shadow"
          >
            {t(lang, "shop.description")}
          </motion.p>
        </div>
      </section>

      {/* Info badges */}
      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Package className="h-4 w-4 text-primary" />
            <span>{t(lang, "shop.preOrder")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-4 w-4 text-primary" />
            <span>{t(lang, "shop.shipping")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{t(lang, "shop.pickup")}</span>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => {
            const name = t(lang, `shop.products.${product.key}.name` as never);
            const desc = t(lang, `shop.products.${product.key}.desc` as never);
            const price = t(lang, `shop.products.${product.key}.price` as never);
            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {product.tag === "bundle" && (
                    <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      <Star className="h-3 w-3" />
                      {lang === "si" ? "NAJBOLJŠA CENA" : "BEST VALUE"}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground">{name}</h3>
                    <span className="shrink-0 text-lg font-bold text-primary">{price}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                  <Button
                    onClick={() => mailto(name)}
                    className="mt-5 w-full gap-2"
                    size="lg"
                  >
                    <Mail className="h-4 w-4" />
                    {t(lang, "shop.buyNow")}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Order info */}
      <section className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-muted-foreground">
              {t(lang, "shop.preOrderNote")}
            </p>
            <p className="mt-2 text-sm text-muted-foreground/70">
              {t(lang, "shop.bundleNote")}
            </p>
            <p className="mt-4 font-medium text-foreground">
              {t(lang, "shop.contactOrder")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
