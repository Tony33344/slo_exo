"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ExhibitorRegistrationPage() {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!gdprAccepted) {
      toast.error(t(lang, "form.gdpr"));
      return;
    }
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.gdpr = "true";

    try {
      const res = await fetch("/api/exhibitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success(t(lang, "form.success"));
        e.currentTarget.reset();
        setGdprAccepted(false);
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
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "exhibitors.registrationTitle")}
        </h1>
      </motion.div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">{t(lang, "contact.name")}</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">{t(lang, "form.company")}</Label>
            <Input id="company" name="company" required />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">{t(lang, "contact.email")}</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t(lang, "contact.phone")}</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="country">{t(lang, "form.country")}</Label>
            <Input id="country" name="country" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">{t(lang, "form.category")}</Label>
            <Input id="category" name="category" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="spaceSize">{t(lang, "form.spaceSize")}</Label>
          <Input id="spaceSize" name="spaceSize" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialRequests">{t(lang, "form.specialRequests")}</Label>
          <Textarea id="specialRequests" name="specialRequests" rows={4} />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="gdpr"
            checked={gdprAccepted}
            onCheckedChange={(checked: boolean | "indeterminate") => setGdprAccepted(checked === true)}
            className="mt-1"
          />
          <Label htmlFor="gdpr" className="text-sm font-normal text-muted-foreground">
            {t(lang, "form.gdpr")}
          </Label>
        </div>

        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? "..." : t(lang, "form.submit")}
        </Button>
      </form>
    </div>
  );
}
