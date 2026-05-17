"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function Article2Page() {
  const { lang } = useLanguage();

  const content = lang === "si" ? (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Kače so med najbolj priljubljenimi eksotičnimi hišnimi ljubljenčki. So tihe, ne potrebujejo 
        sprehodov in so primerne za majhne stanovanja. Toda katero vrsto izbrati za prvo kačo?
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">Ball Python (Python regius)</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Ball python je kraljica med začetniškimi kačami. Mirne narave, redko grize in doseže dolžino 120–150 cm. 
        Potrebuje 90–120 cm terrarij z grelnim kamnom in skrivalisci. Hrani se z mrzlimi miši enkrat na teden. 
        Življenjska doba je 20–30 let, zato je to dolgoročna zaveza.
      </p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Temperament: zelo mirna</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Težavnost: lahko</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Cena: 80–200 €</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-10">Corn Snake (Pantherophis guttatus)</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Corn snake je aktivna, radovedna in zelo odporna kača. Doseže 120–180 cm in je odličen plezalec. 
        Hrani se z mrzlimi miši. Je aktivna čez dan, zato je zanimiva za opazovanje. 
        Na voljo je v številnih barvnih različicah (morphs).
      </p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Temperament: aktivna, radovedna</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Težavnost: zelo lahka</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Cena: 50–150 €</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-10">Milk Snake (Lampropeltis triangulum)</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Milk snake je znana po čudovitih rdečih, črnih in rumenih vzorcih. Je manjša (90–120 cm) in 
        potrebuje manjši terrarij. Je nekoliko bolj aktivna in hitrejša od corn snake, zato zahteva 
        malo več pozornosti pri rokovanju.
      </p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Temperament: aktivna, hitra</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Težavnost: srednja</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Cena: 60–180 €</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-10">Naš nasvet</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Za popolnega začetnika priporočamo corn snake — je odporna, aktivna in cenovno dostopna. 
        Če želite mirnejšo kačo za opazovanje, izberite ball python. Pred nakupom se pogovorite z rejcem 
        na SLO-EXO sejmu, kjer vam bodo svetovali o skrbi za izbrano vrsto.
      </p>

      <div className="mt-10 rounded-xl border border-border bg-primary/5 p-6">
        <p className="font-medium text-foreground">Pridite na SLO-EXO in se pogovorite z rejci!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Našim rejcem zaupajte svoje želje in izkušnje — pomagali vam bodo izbrati pravo kačo za vaš dom.
        </p>
      </div>
    </>
  ) : (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Snakes are among the most popular exotic pets. They are quiet, don't need walks, and are suitable for small apartments.
        But which species to choose for your first snake?
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">Ball Python (Python regius)</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Ball python is the queen of beginner snakes. Calm nature, rarely bites, reaches 120–150 cm in length.
        Needs a 90–120 cm terrarium with a heat mat and hides. Fed frozen mice once a week.
        Lifespan is 20–30 years, so this is a long-term commitment.
      </p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Temperament: very calm</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Difficulty: easy</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Price: €80–200</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-10">Corn Snake (Pantherophis guttatus)</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Corn snake is active, curious and very hardy. Reaches 120–180 cm and is an excellent climber.
        Fed frozen mice. Active during the day, making it interesting to observe.
        Available in many color variations (morphs).
      </p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Temperament: active, curious</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Difficulty: very easy</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Price: €50–150</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-10">Milk Snake (Lampropeltis triangulum)</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Milk snake is known for beautiful red, black and yellow patterns. Smaller (90–120 cm) and 
        needs a smaller terrarium. Somewhat more active and faster than corn snake, requiring 
        slightly more attention during handling.
      </p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Temperament: active, fast</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Difficulty: medium</li>
        <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Price: €60–180</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-10">Our recommendation</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        For absolute beginners we recommend corn snake — it is hardy, active and affordable.
        If you want a calmer snake for observation, choose ball python. Before buying, talk to a breeder 
        at the SLO-EXO fair, who will advise you on caring for your chosen species.
      </p>

      <div className="mt-10 rounded-xl border border-border bg-primary/5 p-6">
        <p className="font-medium text-foreground">Come to SLO-EXO and talk to breeders!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Trust our breeders with your wishes and experience — they will help you choose the right snake for your home.
        </p>
      </div>
    </>
  );

  return (
    <article>
      <div className="relative h-64 sm:h-[600px] overflow-hidden border-b border-border">
        <img
          src="/hero7Animals-Reptilien-Ball-Pythons-Python-of-Bruma-colored-snake-with-yellow-and-white-4K-Ultra-HD-TV-Wallpaper-for-Desktop-Laptop-Tablet-And-Mobile-Phones-3840x2400.jpg"
          alt={t(lang, "blog.article2Title")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/blog/">
            <Button variant="ghost" className="gap-2 pl-0">
              <ArrowLeft className="h-4 w-4" />
              {t(lang, "blog.backToBlog")}
            </Button>
          </Link>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              2026-04-10
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              6 min
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(lang, "blog.article2Title")}
          </h1>

          <div className="mt-10 space-y-6">
            {content}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
