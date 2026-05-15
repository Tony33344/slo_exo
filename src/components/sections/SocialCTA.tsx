"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function SocialCTA() {
  const { lang } = useLanguage();

  return (
    <section className="border-t border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t(lang, "social.title")}
            </h2>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/sloexo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card/80 border border-border"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/sloexo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card/80 border border-border"
              >
                Instagram
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground">
              {t(lang, "social.newsletter")}
            </h3>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                type="email"
                placeholder={t(lang, "social.newsletterPlaceholder")}
                className="flex-1"
              />
              <Button type="submit">{t(lang, "social.newsletterCta")}</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
