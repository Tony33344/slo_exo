"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "terarij-za-zacetnike",
    date: "2026-05-15",
    readTime: "5 min",
    titleKey: "blog.article1Title",
    excerptKey: "blog.article1Excerpt",
    image: "/terrarium.jpg",
  },
  {
    slug: "kako-izbrati-prvo-kaco",
    date: "2026-04-10",
    readTime: "6 min",
    titleKey: "blog.article2Title",
    excerptKey: "blog.article2Excerpt",
    image: "/hero7Animals-Reptilien-Ball-Pythons-Python-of-Bruma-colored-snake-with-yellow-and-white-4K-Ultra-HD-TV-Wallpaper-for-Desktop-Laptop-Tablet-And-Mobile-Phones-3840x2400.jpg",
  },
];

export default function BlogPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "blog.title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t(lang, "blog.subtitle")}
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={t(lang, article.titleKey)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="mb-3 text-xl font-semibold text-foreground">
                {t(lang, article.titleKey)}
              </h2>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(lang, article.excerptKey)}
              </p>

              <Button asChild variant="ghost" className="w-fit gap-2 px-0">
                <Link href={`/blog/${article.slug}/`}>
                  {t(lang, "blog.readMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
