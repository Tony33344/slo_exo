"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const articles = [
  { slug: "terarij-za-zacetnike", date: "2026-05-15", image: "/hero 2Reptile-iguana-herbivorous-Green-Lizzard-HD-Wallpaper-for-Mobile-phones-Tablet-and-PC.jpg" },
  { slug: "kako-izbrati-prvo-kaco", date: "2026-04-10", image: "/hero9Green-Snake-Bothriechis-marchi-National-Park-Cusuco-Sierra-del-Merendón-Honduras-Central-America-HD-Wallpapers-for-mobile-phones-2560x1600.jpg" },
];

export default function BlogPage() {
  const { lang } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <BookOpen className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t(lang, "blog.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t(lang, "blog.subtitle")}</p>
      </motion.div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {articles.map((a, i) => (
          <motion.div key={a.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="border-border overflow-hidden group h-full">
              <div className="aspect-video overflow-hidden">
                <img src={a.image} alt={t(lang, `blog.article${i + 1}Title` as never)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /><span>{a.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{t(lang, `blog.article${i + 1}Title` as never)}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{t(lang, `blog.article${i + 1}Excerpt` as never)}</p>
                <Link href={`/blog/${a.slug}/`}><Button variant="link" className="mt-4 h-auto p-0 gap-1 text-primary">{t(lang, "blog.readMore")}<ArrowRight className="h-4 w-4" /></Button></Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}