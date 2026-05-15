"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function AboutStrip() {
  const { lang } = useLanguage();

  return (
    <section className="border-y border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(lang, "aboutStrip.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t(lang, "aboutStrip.text")}
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/o-nas/">
                {t(lang, "aboutStrip.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
