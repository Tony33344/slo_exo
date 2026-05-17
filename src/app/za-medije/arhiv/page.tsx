"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Tv, Radio, Globe, PlayCircle } from "lucide-react";

interface MediaItem {
  type: "tv" | "youtube" | "radio" | "web";
  outlet: string;
  titleSi: string;
  titleEn: string;
  date: string;
  url: string;
  descSi?: string;
  descEn?: string;
}

const mediaItems: MediaItem[] = [
  {
    type: "tv",
    outlet: "Nova24TV",
    titleSi: "V Mariboru sejem eksotičnih živali",
    titleEn: "Exotic animal fair in Maribor",
    date: "2024",
    url: "https://nova24tv.si/v-mariboru-sejem-eksoticnih-zivali/",
    descSi: "Televizijsko poročanje o sejmu SLO-EXO v Mariboru.",
    descEn: "TV coverage of the SLO-EXO fair in Maribor.",
  },
  {
    type: "youtube",
    outlet: "YouTube",
    titleSi: "SLO-EXO — Video reportaža",
    titleEn: "SLO-EXO — Video report",
    date: "2024",
    url: "https://www.youtube.com/watch?v=dNCv8Y8Nqqo",
    descSi: "Video posnetek z mednarodnega sejma eksotičnih živali.",
    descEn: "Video footage from the international exotic animal fair.",
  },
  {
    type: "radio",
    outlet: "Toti Radio",
    titleSi: "Intervju: Stane Močnik, STALGO exotic — pred sejmom SLO-EXO",
    titleEn: "Interview: Stane Močnik, STALGO exotic — before SLO-EXO fair",
    date: "2024",
    url: "https://totiradio.si/113246/intervju-stane-mocnik-stalgo-exotic-pred-sejmom-sloexo",
    descSi: "Radijski intervju s predsednikom društva STALGO exotic pred začetkom sejma.",
    descEn: "Radio interview with the president of STALGO exotic before the fair.",
  },
];

const typeIcon: Record<MediaItem["type"], React.ReactNode> = {
  tv: <Tv className="h-5 w-5" />,
  youtube: <PlayCircle className="h-5 w-5" />,
  radio: <Radio className="h-5 w-5" />,
  web: <Globe className="h-5 w-5" />,
};

const typeLabel: Record<MediaItem["type"], string> = {
  tv: "TV",
  youtube: "YouTube",
  radio: "Radio",
  web: "Splet",
};

export default function MediaArchivePage() {
  const { lang } = useLanguage();

  return (
    <div>
      <section className="relative h-64 sm:h-[400px] overflow-hidden border-b border-border">
        <img
          src="/hero4.jpg"
          alt="Medijski arhiv"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {lang === "si" ? "Medijski arhiv" : "Media Archive"}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {lang === "si"
                ? "Televizija, radio in spletni portali o sejmu SLO-EXO"
                : "TV, radio and online portals covering SLO-EXO fair"}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/za-medije/">
          <Button variant="ghost" className="gap-2 pl-0 mb-10">
            <ArrowLeft className="h-4 w-4" />
            {lang === "si" ? "Nazaj na medije" : "Back to media"}
          </Button>
        </Link>

        <div className="space-y-6">
          {mediaItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {typeIcon[item.type]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">{item.outlet}</span>
                  <span>·</span>
                  <span className="rounded bg-muted px-1.5 py-0.5">{typeLabel[item.type]}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
                <h2 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {lang === "si" ? item.titleSi : item.titleEn}
                </h2>
                {(item.descSi || item.descEn) && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {lang === "si" ? item.descSi : item.descEn}
                  </p>
                )}
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 self-start text-muted-foreground transition-colors group-hover:text-primary" />
            </motion.a>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">
            {lang === "si"
              ? "Ste novinar ali uredništvo? Pišite nam na "
              : "Are you a journalist or editor? Write to us at "}
            <a href="mailto:slo.exo@gmail.com" className="text-primary hover:underline">
              slo.exo@gmail.com
            </a>
            {lang === "si" ? " za akreditacijo." : " for accreditation."}
          </p>
        </div>
      </div>
    </div>
  );
}
