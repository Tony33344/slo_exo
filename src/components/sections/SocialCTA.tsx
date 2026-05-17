"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378h-.001c-.576.013-1.022.468-.99 1.044.013.576.468.99 1.044.99h.001c.576-.013 1.021-.468.99-1.044-.013-.576-.469-.99-1.045-.99zM12 8.583a3.417 3.417 0 100 6.834 3.417 3.417 0 000-6.834zm0 1.25a2.167 2.167 0 110 4.334 2.167 2.167 0 010-4.334zM12 5.838c-3.403 0-3.687.014-4.974.072-1.281.058-1.978.27-2.44.448a4.066 4.066 0 00-2.017 1.138 4.066 4.066 0 00-1.138 2.017c-.178.462-.39 1.159-.448 2.44-.058 1.287-.072 1.571-.072 4.974s.014 3.687.072 4.974c.058 1.281.27 1.978.448 2.44a4.066 4.066 0 001.138 2.017 4.066 4.066 0 002.017 1.138c.462.178 1.159.39 2.44.448 1.287.058 1.571.072 4.974.072s3.687-.014 4.974-.072c1.281-.058 1.978-.27 2.44-.448a4.066 4.066 0 002.017-1.138 4.066 4.066 0 001.138-2.017c.178-.462.39-1.159.448-2.44.058-1.287.072-1.571.072-4.974s-.014-3.687-.072-4.974c-.058-1.281-.27-1.978-.448-2.44a4.066 4.066 0 00-1.138-2.017 4.066 4.066 0 00-2.017-1.138c-.462-.178-1.159-.39-2.44-.448-1.287-.058-1.571-.072-4.974-.072z" />
    </svg>
  );
}

export function SocialCTA() {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="border-t border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Social card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-2xl border border-border bg-card p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t(lang, "social.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {lang === "si"
                ? "Pridružite se skupnosti ljubiteljev eksotičnih živali. Delite svoje izkušnje in ostanite v stiku."
                : "Join the community of exotic animal lovers. Share your experiences and stay in touch."}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/sloexo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center justify-center gap-3 rounded-xl border border-border bg-background px-5 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5 hover:text-[#1877F2]"
              >
                <FacebookIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/sloexo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center justify-center gap-3 rounded-xl border border-border bg-background px-5 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 hover:text-[#E4405F]"
              >
                <InstagramIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Newsletter card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 sm:p-10"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber/10 blur-2xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t(lang, "social.newsletter")}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {lang === "si"
                  ? "Prva obvestila o novih razstavljalcih, sejemskih novicah in posebnih ponudbah."
                  : "First notifications about new exhibitors, fair news and special offers."}
              </p>

              {!subscribed ? (
                <form
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                >
                  <Input
                    type="email"
                    placeholder={t(lang, "social.newsletterPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-background/80 backdrop-blur-sm"
                  />
                  <Button type="submit" className="gap-2">
                    {t(lang, "social.newsletterCta")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <div className="mt-8 flex items-center gap-3 rounded-xl bg-primary/10 px-5 py-4 text-primary">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">
                    {t(lang, "newsletter.success")}
                  </span>
                </div>
              )}

              <p className="mt-4 text-xs text-muted-foreground">
                {t(lang, "newsletter.privacy")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
