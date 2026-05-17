"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <section className="relative h-64 sm:h-[500px] overflow-hidden border-b border-border">
        <img src="/hero4.jpg" alt={t(lang, "about.title")} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">{t(lang, "about.title")}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{lang === "si" ? "Društvo ljubiteljev eksotičnih živali iz Maribora" : "Association of Exotic Animal Lovers from Maribor"}</p>
          </motion.div>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{lang === "si" ? "O društvu STALGO exotic" : "About STALGO exotic"}</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {lang === "si"
            ? "Smo Društvo ljubiteljev eksotičnih živali »STALGO exotic« iz Maribora. Že veliko časa smo dejavni na področju teraristike in akvaristike. V letu 2010 se je porodila želja po organizaciji prvega mednarodnega sejma eksotičnih živali v Sloveniji. V mesecu oktobru 2010 smo uspešno izvedli prvi SLO-EXO na Gospodarskem razstavišču v Ljubljani."
            : "We are the STALGO exotic Association of Exotic Animal Lovers from Maribor. We have been active in the field of terraristics and aquaristics for a long time. In 2010, the desire to organize the first international exotic animal fair in Slovenia was born. In October 2010, we successfully held the first SLO-EXO at the Ljubljana Exhibition Centre."}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{lang === "si" ? "Zgodovina SLO-EXO" : "History of SLO-EXO"}</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {lang === "si"
            ? "V mesecu oktobru 2010 smo uspešno izvedli prvi SLO-EXO na Gospodarskem razstavišču v Ljubljani. V zadnjih petih letih smo tako izvedli več kot 20 tovrstnih prireditev. V letu 2013 smo sejem predstavili tudi v Mariboru in dosegli celo boljši rezultat, kot na prvem sejmu 2010 v Ljubljani."
            : "In October 2010, we successfully held the first SLO-EXO at the Ljubljana Exhibition Centre. In the last few years, we have organized more than 20 such events. In 2013, we also presented the fair in Maribor and achieved even better results than at the first fair in 2010 in Ljubljana."}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{lang === "si" ? "STALGO exotic — Naš namen" : "STALGO exotic — Our Mission"}</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {lang === "si"
            ? "V zadnjih letih se je v Sloveniji razširil trend eksotičnih hišnih ljubljenčkov. Skrbi nas, da novi zakoni ne bi temeljili na napačnih predpostavkah — primer slabe prakse je Avstrija, ki je dobila prepoved prodaje plazilcev, ker so akterji prepozno ukrepali. Skupaj z anketo o popisu eksotičnih živali v Sloveniji prispevamo k razumevanju realnega obsega tega hobija."
            : "In recent years, the trend of exotic pets has grown in Slovenia. We are concerned that new laws may be based on incorrect assumptions — a poor example is Austria, which ended up with a ban on reptile sales because stakeholders acted too late. Together with the exotic animal census survey, we contribute to understanding the real scale of this hobby."}
        </p>
        <a
          href="https://stalgo-exotic.si/popis-eksoticnih-zivali"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
        >
          {lang === "si" ? "Izpolni anketo o eksotičnih živalih →" : "Fill in the exotic animal survey →"}
        </a>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{lang === "si" ? "Kontakt" : "Contact"}</h2>
        <div className="mt-4 space-y-2 text-muted-foreground">
          <p>📞 +386 (0)40 744 882</p>
          <p>✉️ slo.exo@gmail.com</p>
          <p>✉️ info@stalgo-exotic.si</p>
          <p>📍 Preradovičeva ulica 4, 2000 Maribor</p>
          <p>📍 {lang === "si" ? "Sejem: Festivalna dvorana Lent, Loška 13, Maribor" : "Fair venue: Festivalna dvorana Lent, Loška 13, Maribor"}</p>
        </div>
      </section>
    </div>
    </div>
  );
}
