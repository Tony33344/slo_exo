"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";

const pricingSi = [
  { item: "Prodajna miza fizične osebe", price: "35 EUR" },
  { item: "Prodajna miza pravne osebe", price: "45 EUR" },
  { item: "Elektrika", price: "10 EUR" },
  { item: "Dodatna vstopnica za razstavljalca", price: "10 EUR" },
];

const pricingEn = [
  { item: "Sales table individual", price: "35 EUR" },
  { item: "Sales table company", price: "45 EUR" },
  { item: "Electricity", price: "10 EUR" },
  { item: "Additional exhibitor ticket", price: "10 EUR" },
];

export default function ExhibitorsPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "exhibitors.title")}
        </h1>
      </motion.div>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card className="border-border">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground">{lang === "si" ? "Kdo smo" : "Who we are"}</h2>
            <p className="mt-4 text-muted-foreground">
              {lang === "si"
                ? "Smo Društvo ljubiteljev eksotičnih živali »STALGO exotic«. Že veliko časa smo dejavni na področju teraristike in akvaristike. V letu 2010 se je porodila želja po organizaciji prvega mednarodnega sejma eksotičnih živali v Sloveniji. V mesecu oktobru smo uspešno izvedli prvi SLO-EXO na Gospodarskem razstavišču v Ljubljani. V zadnjih sedmih letih smo tako izvedli že 14 tovrstnih prireditev. V letu 2013 smo sejem predstavili tudi v Mariboru."
                : "We are the STALGO exotic Association of Exotic Animal Lovers. We have been active in terraristics and aquaristics for a long time. In 2010, the desire to organize the first international exotic animal fair in Slovenia was born. In October, we successfully held the first SLO-EXO at the Ljubljana Exhibition Centre. In the last seven years, we have organized 14 such events. In 2013, we also presented the fair in Maribor."}
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground">{lang === "si" ? "Kaj je SLO-EXO?" : "What is SLO-EXO?"}</h2>
            <p className="mt-4 text-muted-foreground">
              {lang === "si"
                ? "Edini mednarodni sejem eksotičnih živali in opreme za teraristiko in akvaristiko v Sloveniji. Na sejmu se predstavi do 40 razstavljavcev na 200 metrih prodajno-razstavne površine iz celotne Evrope, kateri ponujajo razne vrste eksotičnih živali, opreme za teraristiko in akvaristiko, knjige in še veliko več."
                : "The only international exotic animal and terrarium/aquarium equipment fair in Slovenia. Up to 40 exhibitors from across Europe present on 200 square meters of exhibition area, offering various exotic animals, terrarium and aquarium equipment, books and much more."}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">{t(lang, "exhibitors.pricingTitle")}</h2>
        <p className="mt-4 text-muted-foreground">
          {lang === "si"
            ? "Ob zakupu razstavnega prostora ob prijavi prejme 2 vstopnici za razstavljalce. Otroci do 14 let brezplačno."
            : "When renting exhibition space upon registration, you receive 2 exhibitor tickets. Children up to 14 years free."}
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-foreground">
                  {lang === "si" ? "Storitev" : "Service"}
                </th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">
                  {t(lang, "exhibitors.price")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {(lang === "si" ? pricingSi : pricingEn).map((row) => (
                <tr key={row.item} className="bg-card">
                  <td className="px-6 py-4 text-foreground">{row.item}</td>
                  <td className="px-6 py-4 font-semibold text-primary">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/razstavljalci/prijava/" className="gap-2">
              {t(lang, "exhibitors.registrationTitle")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/razstavljalci/seznam/" className="gap-2">
              {t(lang, "exhibitors.listTitle")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">{t(lang, "exhibitors.rulesTitle")}</h2>
        <div className="mt-6">
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="gap-2">
              <a href="/files/dpravilnik.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4" />
                {lang === "si" ? "Pravilnik prodaje živali" : "Animal sales rules"}
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="/files/transportbescheinigung.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4" />
                {lang === "si" ? "Dokument za transport" : "Transport document"}
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="/files/odgovori-furs-na_temo_davcne_blagajne.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4" />
                {lang === "si" ? "FURS — davčne blagajne" : "FURS — cash registers"}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">{t(lang, "exhibitors.legislationTitle")}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground">{t(lang, "exhibitors.markingTitle")}</h3>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <p>
                  {lang === "si"
                    ? "V skladu s Pravilnikom o označevanju živali prosto živečih vrst v ujetništvu je potrebno označiti vrste živali iz skupin sesalcev, ptičev in plazilcev, ki so navedene v:"
                    : "In accordance with the Regulation on the marking of captive wild animal species, it is necessary to mark species of mammals, birds and reptiles listed in:"}
                </p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    {lang === "si"
                      ? "Prilogi A Uredbe Sveta (ES) št. 338/97"
                      : "Annex A of Council Regulation (ES) No. 338/97"}
                  </li>
                  <li>
                    {lang === "si"
                      ? "Prilogi 1 Uredbe o zavarovanih prosto živečih živalskih vrstah"
                      : "Annex 1 of the Regulation on protected wild animal species"}
                  </li>
                  <li>
                    {lang === "si"
                      ? "Določene vrste ptic"
                      : "Certain bird species"}
                  </li>
                  <li>
                    {lang === "si"
                      ? "Osebke iz priloge B Uredbe Sveta (ES) 338/97, vključene v matično skupino pri gojitvi"
                      : "Specimens from Annex B of Council Regulation (ES) 338/97 included in the breeding group"}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground">{t(lang, "exhibitors.salesTitle")}</h3>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <p>
                  {lang === "si"
                    ? "Zakoni, ki urejajo prodajo za fizične, pravne osebe ter posebnosti za društva, si lahko preberete na straneh FURS Slovenije."
                    : "Laws governing sales for individuals, legal entities and specifics for associations can be read on the FURS Slovenia website."}
                </p>
                <p className="font-semibold text-foreground mt-3">
                  {lang === "si" ? "ZA TUJA PODJETJA:" : "FOR FOREIGN COMPANIES:"}
                </p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    {lang === "si"
                      ? "Pridobiti morate slovensko davčno št. (uredite vsaj 3 tedne pred prihodom)"
                      : "You must obtain a Slovenian tax number (arrange at least 3 weeks before arrival)"}
                  </li>
                  <li>
                    {lang === "si"
                      ? "Pridobite davčno blagajno ali knjigo vezanih računov"
                      : "Obtain a cash register or book of bound receipts"}
                  </li>
                  <li>
                    {lang === "si"
                      ? "Po sejmu prijavite dohodek oz. oddajte knjigo vezanih računov"
                      : "After the fair, report income or submit the book of bound receipts"}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://www.cites.org" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline hover:text-primary/80">
            CITES
          </a>
          <a href="http://www.pisrs.si/Pis.web/pregledPredpisa?id=DRUG536" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline hover:text-primary/80">
            {lang === "si" ? "Odredba o bivalnih razmerah" : "Housing conditions regulation"}
          </a>
        </div>
      </section>
    </div>
  );
}
