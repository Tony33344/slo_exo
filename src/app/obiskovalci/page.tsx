"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Ticket, CheckCircle, Footprints, Wallet, MessageCircle, Search, Sunrise, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    a: "Sejem SLO-EXO 2026 bo potekal 10. oktobra 2026 v Festivalni dvorani Lent v Mariboru. Odprt je od 9:00 do 17:00.",
  },
  {
    q: "Ali je sejem primeren za otroke?",
    a: "Da, sejem je primeren za otroke starejše od 3 let. Pod starostjo 4 let je vstop brezplačen. Priporočamo, da otroke spremljajo odrasli, saj so na voljo žive živali.",
  },
  {
    q: "Ali lahko na sejmu kupim živali?",
    a: "Da, razstavljalci prodajajo različne eksotične živali, vendar bodite pozorni na zakonodajo o nakupu in prenosu živali. Za nekatere vrste je potrebno dovoljenje.",
  },
  {
    q: "Ali je na voljo parkirišče?",
    a: "V bližini Festivalne dvorane Lent so na voljo javna parkirišča. Priporočamo, da pridete zgodaj, saj so mesta omejena.",
  },
  {
    q: "Ali lahko prinesem svojo žival na sejem?",
    a: "Osebne živali na sejem niso dovoljene, razen če ste registriran razstavljalec. To je za varnost vseh prisotnih živali.",
  },
  {
    q: "Ali je na sejmu možno plačati s kartico?",
    a: "Večina razstavljalcev sprejema gotovino. Nekateri sprejemajo tudi kartice, vendar priporočamo, da imate pri sebi tudi gotovino.",
  },
  {
    q: "Ali so na sejmu na voljo žive hrane in oprema?",
    a: "Da, poleg živali boste našli tudi živo hrano (cvrčki, miši), terarije, akvarije, razsvetljavo, substrat in literaturo.",
  },
  {
    q: "Ali sejem poteka tudi ob dežju?",
    a: "Da, sejem poteka v zaprtih prostorih Festivalne dvorane Lent, zato vreme ne vpliva na potek dogodka.",
  },
];

const faqItemsEn = [
  {
    q: "When and where is the fair held?",
    a: "SLO-EXO 2026 will take place on October 10, 2026 at Festivalna dvorana Lent in Maribor. Open from 9:00 AM to 5:00 PM.",
  },
  {
    q: "Is the fair suitable for children?",
    a: "Yes, the fair is suitable for children over the age of 3. Entry is free for children under 4. We recommend adult supervision as live animals are present.",
  },
  {
    q: "Can I buy animals at the fair?",
    a: "Yes, exhibitors sell various exotic animals, but please be aware of legislation regarding purchase and transport of animals. Some species require permits.",
  },
  {
    q: "Is parking available?",
    a: "Public parking is available near Festivalna dvorana Lent. We recommend arriving early as spaces are limited.",
  },
  {
    q: "Can I bring my own pet to the fair?",
    a: "Personal pets are not allowed at the fair unless you are a registered exhibitor. This is for the safety of all animals present.",
  },
  {
    q: "Can I pay by card at the fair?",
    a: "Most exhibitors accept cash. Some also accept cards, but we recommend bringing cash as well.",
  },
  {
    q: "Is live food and equipment available?",
    a: "Yes, besides animals you will also find live food (crickets, mice), terrariums, aquariums, lighting, substrate and literature.",
  },
  {
    q: "Does the fair happen in bad weather?",
    a: "Yes, the fair takes place indoors at Festivalna dvorana Lent, so weather does not affect the event.",
  },
];

const tipIcons = [Footprints, Wallet, MessageCircle, Search, Sunrise];

export default function VisitorsPage() {
  const { lang } = useLanguage();
  const faqs = lang === "si" ? faqItems : faqItemsEn;

  return (
    <div>
      {/* Hero banner */}
      <section className="relative h-64 sm:h-[500px] overflow-hidden border-b border-border">
        <img
          src="/hero4Reptiles-Green-iguanas-lizard-charming-creatures-in-the-gardens-of-Florida-Desktop-HD-Wallpaper-for-mobile-phones-Tablet-and-PC.jpg"
          alt={t(lang, "visitors.title")}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t(lang, "visitors.title")}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">
              {t(lang, "visitors.intro")}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t(lang, "firstTimer.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {t(lang, "firstTimer.subtitle")}
          </p>
        </motion.div>

      {/* First-Timer Guide Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 p-8 sm:p-10"
      >
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t(lang, "firstTimer.title")}</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">{t(lang, "firstTimer.subtitle")}</p>
          </div>
          <Link href="/pogosta-vprasanja/">
            <Button variant="default" size="lg" className="gap-2">
              {t(lang, "firstTimer.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((i) => {
            const Icon = tipIcons[i - 1];
            return (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t(lang, `firstTimer.tip${i}Title` as never)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(lang, `firstTimer.tip${i}Desc` as never)}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

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
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{t(lang, "visitors.faqTitle")}</h2>
          <Link
            href="/pogosta-vprasanja/"
            className="text-sm font-medium text-primary hover:underline"
          >
            {lang === "si" ? "Vsa vprašanja →" : "All questions →"}
          </Link>
        </div>
        <Accordion className="mt-6">
          {faqs.slice(0, 5).map((item, i) => (
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
    </div>
  );
}
