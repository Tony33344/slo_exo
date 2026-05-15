import { HeroSection } from "@/components/sections/HeroSection";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { AnimalCategoryGrid } from "@/components/sections/AnimalCategoryGrid";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { SponsorStrip } from "@/components/sections/SponsorStrip";
import { SocialCTA } from "@/components/sections/SocialCTA";

export default function HomePage() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "SLO-EXO 2026",
    description:
      "International Exotic Animal Fair & Terrarium/Aquarium Equipment Expo",
    startDate: "2026-10-10T09:00:00+02:00",
    endDate: "2026-10-10T17:00:00+02:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Festivalna dvorana Lent",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lent",
        addressLocality: "Maribor",
        addressCountry: "SI",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "STALGO exotic",
      url: "https://www.slo-exo.si",
    },
    offers: {
      "@type": "Offer",
      price: "8",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01T00:00:00+02:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <HeroSection />
      <CountdownTimer />
      <AnimalCategoryGrid />
      <AboutStrip />
      <SponsorStrip />
      <SocialCTA />
    </>
  );
}
