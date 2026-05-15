"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MapPin, Ticket, CheckCircle } from "lucide-react";

const tickets = [
  { key: "adult", price: "€8" },
  { key: "child", price: "€6" },
  { key: "under4", price: "free" },
  { key: "family", price: "€25" },
  { key: "combo", price: "€15" },
];

const faqItems = [
  {
    q: "Kdaj in kje poteka sejem?",
    a: "Sejem SLO-EXO 2026 bo potekal 10. oktobra 2026 v Festivalni dvorani Lent v Mariboru.",
  },
  {
    q: "Ali je sejem primeren za otroke?",
    a: "Da, sejem je primeren za otroke starejše od 3 let. Pod starostjo 4 let je vstop brezplačen.",
  },
  {
    q: "Ali lahko na sejmu kupim živali?",
    a: "Da, razstavljalci prodajajo različne eksotične živali, vendar bodite pozorni na zakonodajo o nakupu in prenosu živali.",
  },
  {
    q: "Ali je na voljo parkirišče?",
    a: "V bližini Festivalne dvorane Lent so na voljo javna parkirišča.",
  },
];

const faqItemsEn = [
  {
    q: "When and where is the fair held?",
    a: "SLO-EXO 2026 will take place on October 10, 2026 at Festivalna dvorana Lent in Maribor.",
  },
  {
    q: "Is the fair suitable for children?",
    a: "Yes, the fair is suitable for children over the age of 3. Entry is free for children under 4.",
  },
  {
    q: "Can I buy animals at the fair?",
    a: "Yes, exhibitors sell various exotic animals, but please be aware of legislation regarding purchase and transport of animals.",
  },
  {
    q: "Is parking available?",
    a: "Public parking is available near Festivalna dvorana Lent.",
  },
];

export default function VisitorsPage() {
  const { lang } = useLanguage();
  const faqs = lang === "si" ? faqItems : faqItemsEn;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "visitors.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {t(lang, "visitors.intro")}
        </p>
      </motion.div>

      <section className="mt-16 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {lang === "si" ? "Kdo smo?" : "Who we are"}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {lang === "si"
              ? "Smo Društvo ljubiteljev eksotičnih živali »STALGO exotic« iz Maribora. Že veliko časa smo dejavni na področju teraristike in akvaristike. V letu 2010 se je porodila želja po organizaciji prvega mednarodnega sejma eksotičnih živali v Sloveniji. V mesecu oktobru 2010 smo uspešno izvedli prvi SLO-EXO na Gospodarskem razstavišču v Ljubljani. V zadnjih letih smo tako izvedli več kot 20 tovrstnih prireditev."
              : "We are the STALGO exotic Association of Exotic Animal Lovers from Maribor. We have been active in the field of terraristics and aquaristics for a long time. In 2010, the desire to organize the first international exotic animal fair in Slovenia was born. In October 2010, we successfully held the first SLO-EXO at the Ljubljana Exhibition Centre. In recent years, we have organized more than 20 such events."}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {lang === "si" ? "Kaj je SLO-EXO?" : "What is SLO-EXO?"}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {lang === "si"
              ? "Edini mednarodni sejem eksotičnih živali in opreme za teraristiko in akvaristiko v Sloveniji. Na sejmu se predstavi do 40 razstavljavcev na do 200 metrih prodajne površine iz celotne Evrope, kateri ponujajo razne vrste eksotičnih živali, opreme za teraristiko in akvaristiko, knjige in še veliko več."
              : "The only international exotic animal and terrarium/aquarium equipment fair in Slovenia. Up to 40 exhibitors from across Europe present on up to 200 square meters of sales area, offering various exotic animals, terrarium and aquarium equipment, books and much more."}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {lang === "si" ? "Zakaj obiskati SLO-EXO?" : "Why visit SLO-EXO?"}
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {(lang === "si" ? [
              "Živali so iz primernih in kvalitetnih rej.",
              "Pridobili boste primerne informacije od rejcev živali.",
              "Pridobili boste vse potrebno dokumentacijo za žival.",
              "Na sejmu lahko kupite vso potrebno opremo po sejemskih cenah.",
              "Velika izbira žive hrane za razne plazilce po zelo nizkih cenah.",
              "Velika izbira in možnost primerjanja cen in kakovosti.",
              "Imeli boste veliko izbiro živali, katerih v redni prodaji ni moč kupiti.",
              "Pridobili boste informacije o pravni ureditvi za vaše eksotične hišne ljubljenčke.",
              "Možnost spoznati različna društva in se v njih včlaniti.",
              "Kupili boste lahko literaturo o živali, ki vas zanima.",
            ] : [
              "Animals come from proper and quality breeders.",
              "You will get proper information from the breeders.",
              "You will receive all necessary documentation for the animal.",
              "You can buy all necessary equipment at fair prices.",
              "Large selection of live food for reptiles at very low prices.",
              "Large selection with the ability to compare prices and quality.",
              "You will have a wide selection of animals not available in regular retail.",
              "You will get information on legal requirements for your exotic pets.",
              "Opportunity to meet various associations and join them.",
              "You can buy literature about the animal that interests you.",
            ]).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {lang === "si" ? "Je SLO-EXO zanimiv tudi nepoznavalcem?" : "Is SLO-EXO interesting for non-experts?"}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {lang === "si"
              ? "Seveda. Sejem je primeren za vsakogar, ki ga navdušujejo tovrstne živali, si jih želi ogledati, ali celo premagati strah pred njimi. Sejem je primeren za otroke nad 3 letom starosti."
              : "Of course. The fair is suitable for anyone fascinated by these animals, who wants to see them, or even overcome their fear of them. The fair is suitable for children over 3 years of age."}
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">{t(lang, "visitors.ticketsTitle")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tickets.map((ticket) => (
            <Card key={ticket.key} className="border-border">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <Ticket className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{t(lang, `visitors.${ticket.key}` as never)}</span>
                </div>
                <span className="text-xl font-bold text-primary">
                  {ticket.price === "free" ? t(lang, "visitors.free") : ticket.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t(lang, "visitors.floorPlanTitle")}</h2>
          <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden">
            <img
              src="/images/slo-exo-parking-atm.png"
              alt={lang === "si" ? "Parkirišča in bankomati v bližini" : "Parking and ATMs nearby"}
              className="w-full object-contain"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t(lang, "visitors.directionsTitle")}</h2>
          <div className="mt-6 aspect-video rounded-xl border border-border bg-card overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.8!2d15.6466!3d46.5594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f77d1d0427753%3A0x6a!2sFestivalna%20dvorana%20Lent!5e0!3m2!1sen!2ssi!4v1715779200000!5m2!1sen!2ssi"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {t(lang, "visitors.address")}
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-border bg-card p-8">
        <h2 className="text-2xl font-bold text-foreground">{t(lang, "visitors.suitableTitle")}</h2>
        <p className="mt-4 flex items-start gap-3 text-muted-foreground">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          {t(lang, "visitors.suitableText")}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">{t(lang, "visitors.faqTitle")}</h2>
        <Accordion className="mt-6">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
