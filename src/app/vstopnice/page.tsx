"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Baby, Shirt, Check, Minus, Plus } from "lucide-react";

interface TicketOption {
  key: string;
  price: number;
  icon: React.ReactNode;
  badge?: string;
  popular?: boolean;
}

const tickets: TicketOption[] = [
  { key: "adult", price: 8, icon: <Users className="h-6 w-6" /> },
  { key: "child", price: 6, icon: <Users className="h-6 w-6" /> },
  { key: "under4", price: 0, icon: <Baby className="h-6 w-6" />, badge: "free" },
  { key: "family", price: 25, icon: <Users className="h-6 w-6" />, popular: true },
  { key: "combo", price: 15, icon: <Shirt className="h-6 w-6" />, badge: "bundle" },
];

export default function TicketsPage() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQty = (key: string, delta: number) => {
    setQuantities((prev) => {
      const next = { ...prev, [key]: Math.max(0, (prev[key] || 0) + delta) };
      if (next[key] === 0) delete next[key];
      return next;
    });
  };

  const total = Object.entries(quantities).reduce((sum, [key, qty]) => {
    const ticket = tickets.find((t) => t.key === key);
    return sum + (ticket ? ticket.price * qty : 0);
  }, 0);

  const selectedCount = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div>
      {/* Hero banner */}
      <section className="relative h-72 sm:h-96 overflow-hidden border-b border-border">
        <img
          src="/hero1exotic-pets-that-are-inexpensive-or-cheap.jpg"
          alt="SLO-EXO"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {lang === "si" ? "Vstopnice" : "Tickets"}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">
              {lang === "si"
                ? "Rezervirajte vstopnice za SLO-EXO 2026 — edini mednarodni sejem eksotičnih živali v Sloveniji."
                : "Reserve tickets for SLO-EXO 2026 — the only international exotic animal fair in Slovenia."}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                {t(lang, "hero.date")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                09:00 – 17:00
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {t(lang, "hero.location")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Ticket cards */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground">
                {lang === "si" ? "Izberite vstopnice" : "Choose your tickets"}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {lang === "si"
                  ? "Vstopnice boste plačali na sejmu. Izberite željene vstopnice in rezervirajte."
                  : "Tickets will be paid at the fair. Select your desired tickets and reserve."}
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {tickets.map((ticket, i) => (
                <motion.div
                  key={ticket.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelected(ticket.key)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                    selected === ticket.key
                      ? "border-primary bg-primary/5 shadow-lg ring-1 ring-primary/20"
                      : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  {ticket.popular && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {lang === "si" ? "Priljubljeno" : "Popular"}
                    </div>
                  )}
                  {ticket.badge === "free" && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-forest px-3 py-1 text-xs font-semibold text-white">
                      {t(lang, "visitors.free")}
                    </div>
                  )}
                  {ticket.badge === "bundle" && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-amber px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {lang === "si" ? "Paket" : "Bundle"}
                    </div>
                  )}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${selected === ticket.key ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                        {ticket.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {t(lang, `visitors.${ticket.key}` as never)}
                        </h3>
                        {ticket.key === "family" && (
                          <p className="text-xs text-muted-foreground">2 odrasla + 2 otroka</p>
                        )}
                        {ticket.key === "combo" && (
                          <p className="text-xs text-muted-foreground">{t(lang, "shop.bundleNote")}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      {ticket.price === 0 ? t(lang, "visitors.free") : `€${ticket.price}`}
                    </span>
                  </div>

                  {ticket.price > 0 && (
                    <div className="mt-5 flex items-center gap-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); updateQty(ticket.key, -1); }}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center font-medium tabular-nums">
                        {quantities[ticket.key] || 0}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); updateQty(ticket.key, 1); }}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {selected === ticket.key && (
                    <div className="absolute bottom-4 right-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24 rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {lang === "si" ? "Povzetek naročila" : "Order summary"}
              </h3>

              {selectedCount === 0 ? (
                <p className="mt-4 text-sm text-muted-foreground">
                  {lang === "si"
                    ? "Izberite vstopnice za prikaz povzetka."
                    : "Select tickets to see summary."}
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {Object.entries(quantities).map(([key, qty]) => {
                    const ticket = tickets.find((t) => t.key === key);
                    if (!ticket || qty === 0) return null;
                    return (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {t(lang, `visitors.${key}` as never)} × {qty}
                        </span>
                        <span className="font-medium text-foreground">
                          €{ticket.price * qty}
                        </span>
                      </div>
                    );
                  })}
                  <div className="border-t border-border pt-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">
                        {lang === "si" ? "Skupaj" : "Total"}
                      </span>
                      <span className="text-2xl font-bold text-primary">€{total}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-3">
                <Button
                  size="lg"
                  className="w-full"
                  disabled={selectedCount === 0}
                  onClick={() => {
                    // Placeholder — no real checkout yet
                  }}
                >
                  {lang === "si" ? "Rezerviraj vstopnice" : "Reserve tickets"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  {lang === "si"
                    ? "Plačilo na sejmu ob prihodu. Brez stroškov rezervacije."
                    : "Payment at the fair upon arrival. No reservation fees."}
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-muted/50 p-4">
                <h4 className="text-sm font-medium text-foreground">
                  {lang === "si" ? "Pomembno" : "Important"}
                </h4>
                <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {lang === "si" ? "Otroci do 4 let brezplačno." : "Children under 4 free."}
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {lang === "si" ? "Družinska vstopnica velja za 2 odrasla + 2 otroka." : "Family ticket valid for 2 adults + 2 children."}
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {lang === "si" ? "Paket vključuje majico + vstopnico." : "Bundle includes t-shirt + ticket."}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
