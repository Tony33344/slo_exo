"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";

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

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/logo slo exo 2.png"
              alt="SLO-EXO"
              className="h-auto w-28"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              {lang === "si"
                ? "Edini mednarodni sejem eksotičnih živali v Sloveniji"
                : "The only international exotic animal fair in Slovenia"}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(lang, "nav.visitors")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/obiskovalci/" className="text-muted-foreground hover:text-foreground">
                  {t(lang, "nav.visitors")}
                </Link>
              </li>
              <li>
                <Link href="/galerija/" className="text-muted-foreground hover:text-foreground">
                  {t(lang, "nav.gallery")}
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(lang, "nav.exhibitors")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/razstavljalci/" className="text-muted-foreground hover:text-foreground">
                  {t(lang, "nav.exhibitors")}
                </Link>
              </li>
              <li>
                <Link href="/razstavljalci/prijava/" className="text-muted-foreground hover:text-foreground">
                  {t(lang, "exhibitors.registrationTitle")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(lang, "contact.title")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+386 (0)40 744 882</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>slo.exo@gmail.com</span>
              </li>
              <li className="flex gap-3 pt-1">
                <a
                  href="https://www.facebook.com/sloexo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/sloexo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {t(lang, "footer.copyright")}
          </p>
          <nav className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">{t(lang, "footer.links.home")}</Link>
            <Link href="/za-medije/" className="hover:text-foreground">{t(lang, "footer.links.media")}</Link>
            <Link href="/pravni-pouk/" className="hover:text-foreground">{t(lang, "footer.links.legal")}</Link>
            <Link href="/kontakt/" className="hover:text-foreground">{t(lang, "footer.links.contact")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
