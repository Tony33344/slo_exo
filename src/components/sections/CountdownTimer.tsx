"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-10-10T09:00:00+02:00");

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = EVENT_DATE.getTime() - now;
  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export function CountdownTimer() {
  const { lang } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: t(lang, "countdown.days") },
    { value: timeLeft.hours, label: t(lang, "countdown.hours") },
    { value: timeLeft.minutes, label: t(lang, "countdown.minutes") },
    { value: timeLeft.seconds, label: t(lang, "countdown.seconds") },
  ];

  return (
    <section className="border-b border-border bg-muted/20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {t(lang, "countdown.until")}
        </p>
        <div className="flex justify-center gap-4 sm:gap-6">
          {units.map((unit) => (
            <motion.div
              key={unit.label}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="flex flex-col items-center rounded-lg bg-card px-4 py-3 sm:px-6 sm:py-4"
            >
              <span className="text-2xl font-bold text-primary sm:text-4xl">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
