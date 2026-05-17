"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HelpCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

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
  {
    q: "Kakšne so cene vstopnic?",
    a: "Odrasli €8, otroci 4–12 let €6, otroci do 4 let brezplačno, družinska vstopnica (2 odrasla + 2 otroka) €25.",
  },
  {
    q: "Ali je na sejmu mogoče jesti in piti?",
    a: "V neposredni bližini Festivalne dvorane Lent so gostinski lokali. Na samem sejmu živil in pijač ni na voljo.",
  },
  {
    q: "Ali sejem ponuja tudi delavnice ali predavanja?",
    a: "Vsako leto organiziramo predavanja in delavnice o skrbi za eksotične živali. Program objavimo na spletni strani in družbenih omrežjih nekaj tednov pred sejmom.",
  },
  {
    q: "Kako postanem razstavljalec?",
    a: "Na strani Razstavljalci → Prijava lahko izpolnite prijavnico. Po prejemu prijave vas kontaktiramo z vsemi podrobnostmi.",
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
  {
    q: "What are the ticket prices?",
    a: "Adults €8, children 4–12 years €6, children under 4 free, family ticket (2 adults + 2 children) €25.",
  },
  {
    q: "Is food and drink available at the fair?",
    a: "There are restaurants near Festivalna dvorana Lent. Food and drinks are not sold at the fair itself.",
  },
  {
    q: "Does the fair offer workshops or lectures?",
    a: "Every year we organize lectures and workshops on exotic animal care. The program is published on the website and social media a few weeks before the fair.",
  },
  {
    q: "How do I become an exhibitor?",
    a: "On the Exhibitors → Registration page you can fill out the application form. After receiving your application we will contact you with all details.",
  },
];

export default function FaqPage() {
  const { lang } = useLanguage();
  const faqs = lang === "si" ? faqItems : faqItemsEn;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <HelpCircle className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "faqPage.title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{t(lang, "faqPage.subtitle")}</p>
      </motion.div>

      <Accordion className="mt-12">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
          >
            <AccordionItem value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl border border-border bg-card p-8 text-center"
      >
        <h2 className="text-xl font-bold text-foreground">{t(lang, "faqPage.moreQuestions")}</h2>
        <p className="mt-2 text-muted-foreground">
          {lang === "si"
            ? "Če niste našli odgovora, nam pišite in z veseljem vam bomo pomagali."
            : "If you didn't find an answer, write to us and we'll be happy to help."}
        </p>
        <Link href="/kontakt/">
          <Button className="mt-6 gap-2" size="lg">
            <Mail className="h-4 w-4" />
            {t(lang, "faqPage.contactUs")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
