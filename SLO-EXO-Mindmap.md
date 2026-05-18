# SLO-EXO — Complete Platform Mindmap

> Open this file in any Mermaid viewer (VS Code, GitHub, Obsidian, Mermaid Live Editor) to see the interactive mindmap.
> **Current features** ✅ | **Phase 2** 🔐 | **Phase 3** ⚙️ | **Bonus ideas** 💡

```mermaid
mindmap
  root((SLO-EXO<br/>Platform))
    🟢 Phase 1 — LIVE
      🏠 Marketing
        Domovska stran
        Hero z animacijo
        Odštevalnik do sejma
        Kategorije živali
        O nas
        Kontakt
        Pravni pouk
        Pogosta vprašanja
      👥 Obiskovalci
        Cenik vstopnic
        Vstopnice — izbira + seštevek
        Rezervacija brez plačila
        Pregledni cenik za otroke
        Začetniški vodič
        Lokacija + parkiranje
        FAQ
      🦎 Razstavljalci
        Cenik stojnic
        Pravila prodaje
        CITES navodila
        FURS / davčne blagajne
        Transportna dokumentacija
        Povezave na zakonodajo
        Prijava na sejem
        Seznam razstavljavcev
      📝 Blog
        Terarij za začetnike
        Kako izbrati prvo kačo
        Hero banneri s slikami
      🖼 Galerija
        Filtriranje po letih
        Dialog predogled
      🎫 Vstopnice
        Izbor vrste + količina
        Seštevek v realnem času
        Rezervacija
        Opomba: plačilo na sejmu
      🛒 Trgovina
        Kategorije izdelkov
        Proizvodi s slikami
      📰 Za medije
        Press kit download
        Sporočila za javnost
        Medijski arhiv
          Nova24TV
          YouTube video
          Toti Radio intervju
      🌐 i18n + SEO
        Slovensko / Angleško
        Sitemap
        Meta opisi
      🎨 Design
        Dark/Light tema
        Tailwind CSS
        Framer Motion animacije
        Responsive
        Shadcn/ui komponente
        Lucide ikone
    🔵 Phase 2 — Portal Razstavljalcev
      🔑 Auth
        Registracija
        Prijava z geslom
        Magic link
        OAuth Google
        2FA
      📊 Dashboard
        Status prijave na sejem
        Zgodovina nastopov
        Pretekli računi 2010–2025
        PDF download
        Profil podjetja
      🏢 Booth Booking
        Izbira prodajne mize
        Elektrika
        Dodatne vstopnice
        Kalendar razpoložljivosti
        Checkout wizard
      💳 Stripe Payments
        Kartično plačilo
        Apple Pay / Google Pay
        SEPA direktna bremenitev
        Samodejni PDF račun
        Email potrdilo
        Stripe Customer Portal
      📨 Notifications
        Email potrdila
        Opomniki pred sejmom
        Status plačila
        Newsletter segmentacija
      📁 Document Vault
        CITES certifikati
        Transportna dokumentacija
        FURS navodila
        Zgodovina računov
    🟡 Phase 3 — Admin CMS
      📝 Page Builder
        Drag-drop bloki
        Hero, tekst, galerija, CTA, FAQ, cenik
        Predogled v realnem času
        Publish / Draft / Schedule
      🖼 Media Library
        Upload slik in videov
        Avtomatska optimizacija WebP/AVIF
        Obrezovanje in resize
        Alt text in SEO metadata
        Mapa struktura
      🛍 Shop Manager
        Dodaj/Uredi izdelek
        Zaloge in cene
        Kategorije in oznake
        Popusti in promo kode
        Status: na zalogi/razprodano
      🎫 Ticket Manager
        Vrste vstopnic
        Cene in kapaciteta
        Število prodanih
        Promo kode
        Bundle paketi
        QR koda generacija
      📰 Blog Manager
        Ustvari/uredi objavo
        Kategorije in oznake
        SEO naslov in opis
        Nacrtovana objava
      🤝 Sponsor Manager
        Logotipi in povezave
        Nivoji sponzorstva
        Trajanje pogodbe
      🦎 Category Manager
        Urejanje vsebine po kategorijah
        Dodajanje slik in opisov
      🌍 i18n Editor
        Side-by-side SI/EN
        Masovni prevod
        Napredovalni prikaz
      👤 User & Roles
        Admin, Editor, Viewer
        RBAC pravice
      ⚙️ Site Settings
        SEO defaults
        Kontaktni podatki
        Hero nastavitve
        Tema privzete barve
      📊 Analytics & Audit
        Prodaja vstopnic
        Obiskanost strani
        Popularnost izdelkov
        Audit log — kdo je kaj spremenil
    💡 Bonus — Hitre Zmage
      📱 QR koda za vstopnice
      📅 Dodaj v koledar
      💬 WhatsApp / Live chat
      🔍 Structured data JSON-LD
      📡 Web push obvestila
      🎟 Loyalty program
      ⭐ Testimonials / Ocene
    💡 Bonus — Srednji Projekti
      🗺 Interaktivni tloris sejma
      🏢 Profili razstavljavcev
      📸 Fotografski natečaj
      📧 Segmentirane e-novice
      🔗 Affiliate program
      📋 Volunteer signup
    💡 Bonus — Velike Vizije
      🥽 AR / 3D predogled živali
      👑 Exotic Club naročnina
      🎓 Veterinarski vsebinski center
      🌐 Partnerstvo s sejmi CEE
      📹 Original video vsebina
      🤝 Skupnost — Discord/Telegram forum
```

---

## Kako uporabljati

1. **VS Code** — Namestite razširitev *"Markdown Preview Mermaid Support"*, odprite ta file, pritisnite `Ctrl+Shift+V` (ali `Cmd+Shift+V` na Macu).
2. **GitHub** — Naložite na GitHub. Mermaid diagram se avtomatsko renderira.
3. **Obsidian** — Vključite Mermaid plugin, diagram se prikaže avtomatsko.
4. **Mermaid Live Editor** — Kopirajte samo vsebino med 
```mermaid in 
``` na https://mermaid.live

## Legenda

- 🟢 **Phase 1** — Že implementirano in objavljeno
- 🔵 **Phase 2** — Junij 2026 — B2B portal za razstavljalce
- 🟡 **Phase 3** — Q3 2026 — Admin CMS za samostojno upravljanje
- 💡 **Bonus** — Ideje za hitro ali dolgoročno implementacijo
