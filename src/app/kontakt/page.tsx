"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success(t(lang, "form.success"));
        e.currentTarget.reset();
      } else {
        toast.error(t(lang, "form.error"));
      }
    } catch {
      toast.error(t(lang, "form.error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "contact.title")}
        </h1>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{t(lang, "contact.formTitle")}</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t(lang, "contact.name")}</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t(lang, "contact.email")}</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">{t(lang, "contact.subject")}</Label>
              <Input id="subject" name="subject" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t(lang, "contact.message")}</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "..." : t(lang, "contact.send")}
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-foreground">{t(lang, "contact.title")}</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+386 (0)40 744 882</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>slo.exo@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Festivalna dvorana Lent, Maribor, Slovenia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">{t(lang, "contact.social")}</h3>
            <div className="mt-2 flex gap-3">
              <a
                href="https://www.facebook.com/sloexo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/sloexo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">{t(lang, "contact.mediaInquiries")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              <a href="mailto:slo.exo@gmail.com" className="underline hover:text-primary">
                slo.exo@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
