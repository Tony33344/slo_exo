"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero1exotic-pets-that-are-inexpensive-or-cheap.jpg')" }}
      />
      {/* Dark gradient overlay for readability */}
      <div className="hero-overlay absolute inset-0" />
      {/* Bottom fade to content */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        {/* Logo */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <img
            src="/logo slo exo 2.png"
            alt="SLO-EXO"
            className="mx-auto h-auto w-48 sm:w-56 lg:w-72"
            style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.6))" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white drop-shadow-md sm:text-xl"
        >
          {t(lang, "hero.tagline")}
        </motion.p>

        {/* Event meta */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-white"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-sm">
            <Calendar className="h-4 w-4 text-[#a0d641]" />
            {t(lang, "hero.date")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-[#a0d641]" />
            {t(lang, "hero.location")}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Button asChild size="lg" className="gap-2">
            <Link href="/obiskovalci/">
              {t(lang, "hero.ctaTickets")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-background/60 backdrop-blur-sm">
            <Link href="/razstavljalci/prijava/">
              {t(lang, "hero.ctaExhibitor")}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
