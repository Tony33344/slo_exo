"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function Article1Page() {
  const { lang } = useLanguage();

  const content = lang === "si" ? (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Če razmišljate o prvi eksotični živali, je pravilno urejen terrarij ključen za njeno zdravje in dobro počutje. 
        V tem vodiču bomo pregledali osnove, ki jih mora poznati vsak začetnik.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">1. Izberite primerno velikost</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Velikost terrarija je odvisna od vrste živali. Za večino začetniških kuščarjev (npr. leopard gekon) 
        zadostuje terrarij velikosti 60 × 40 × 40 cm. Kače, kot sta ball python in corn snake, potrebujejo 
        daljše terrarije — vsaj 90–120 cm v dolžino.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">2. Substrat — tla terrarija</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Substrat mora ustrezati naravnemu okolju živali. Za pustinjske vrste uporabite pesek ali mešanico 
        peska in zemlje. Za tropske vrste je primeren kokosov substrat, mah ali mešanica z zemljo. 
        Izogibajte se cedrovem snegu in borovem snegu — lahko dražita dihala.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">3. Razsvetljava in ogrevanje</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Plazilci so zunanji toplokrvniki in potrebujejo zunanji vir toplote. Uporabite grelni kamen ali 
        keramično žarnico, da ustvarite toplo cono (28–32 °C) in hladno cono (22–25 °C). 
        UVB žarnica je nujna za večino dnevno aktivnih vrst, saj omogoča sintezo vitamina D3.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">4. Skrivalnice in dekoracija</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Živali potrebujejo vsaj dve skrivalisci — eno na toplem in eno na hladnem delu terrarija. 
        Uporabite lahko naravne kamne, koščke lubja ali umetne skrivalnice. 
        Dodajte tudi veje in rastline za plezanje ter občutek varnosti.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">5. Vlaga in zračenje</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Vlago merite s higrometrom. Tropske vrste potrebujejo 60–80 % vlage, pustinjske pa 30–40 %. 
        Redno zračite terrarij, da preprečite razvoj plesni. Dnevno pršenje vode je dovolj 
        za večino tropskih vrst.
      </p>

      <div className="mt-10 rounded-xl border border-border bg-primary/5 p-6">
        <p className="font-medium text-foreground">Prihajate na SLO-EXO?</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Na sejmu boste našli vso potrebno opremo po sejemskih cenah — od terrarijev do razsvetljave in substratov.
          Pridite zgodaj za najboljši izbor!
        </p>
      </div>
    </>
  ) : (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed">
        If you are thinking about your first exotic pet, a properly set up terrarium is key to its health and well-being.
        In this guide we will cover the basics every beginner needs to know.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">1. Choose the right size</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Terrarium size depends on the species. For most beginner lizards (e.g. leopard gecko) a 60 × 40 × 40 cm 
        terrarium is sufficient. Snakes like ball python and corn snake need longer terrariums — at least 90–120 cm in length.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">2. Substrate — terrarium flooring</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Substrate should match the animal's natural habitat. For desert species use sand or a sand/soil mix. 
        For tropical species coconut substrate, moss or soil mix is suitable. Avoid cedar and pine shavings — they can irritate the respiratory system.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">3. Lighting and heating</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Reptiles are ectotherms and need an external heat source. Use a heat mat or ceramic bulb to create a basking zone (28–32 °C) 
        and a cool zone (22–25 °C). A UVB bulb is essential for most diurnal species as it enables vitamin D3 synthesis.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">4. Hides and decoration</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Animals need at least two hides — one on the warm side and one on the cool side. 
        You can use natural rocks, bark pieces or artificial hides. Add branches and plants for climbing and a sense of security.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10">5. Humidity and ventilation</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Measure humidity with a hygrometer. Tropical species need 60–80 % humidity, desert ones 30–40 %. 
        Ventilate the terrarium regularly to prevent mold growth. Daily misting is enough for most tropical species.
      </p>

      <div className="mt-10 rounded-xl border border-border bg-primary/5 p-6">
        <p className="font-medium text-foreground">Coming to SLO-EXO?</p>
        <p className="mt-2 text-sm text-muted-foreground">
          At the fair you will find all necessary equipment at fair prices — from terrariums to lighting and substrates.
          Arrive early for the best selection!
        </p>
      </div>
    </>
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
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
            2026-05-15
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            5 min
          </span>
        </div>

        <img
          src="/hero 2Reptile-iguana-herbivorous-Green-Lizzard-HD-Wallpaper-for-Mobile-phones-Tablet-and-PC.jpg"
          alt={t(lang, "blog.article1Title")}
          className="mt-8 w-full rounded-xl object-cover aspect-video"
        />
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "blog.article1Title")}
        </h1>

        <div className="mt-10 space-y-6">
          {content}
        </div>
      </motion.div>
    </article>
  );
}
