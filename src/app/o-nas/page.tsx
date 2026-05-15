"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "about.title")}
        </h1>
      </motion.div>

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
        <h2 className="text-2xl font-bold text-foreground">{lang === "si" ? "Kontakt" : "Contact"}</h2>
        <div className="mt-4 space-y-2 text-muted-foreground">
          <p>📞 +386 (0)40 744 882</p>
          <p>✉️ slo.exo@gmail.com</p>
          <p>📍 Festivalna dvorana Lent, Loška 13, Maribor</p>
        </div>
      </section>
    </div>
  );
}
