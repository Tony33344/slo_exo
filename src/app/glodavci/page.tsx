"use client";

import { CategoryPageLayout } from "@/components/sections/CategoryPageLayout";

export default function GlodavciPage() {
  return (
    <CategoryPageLayout
      pageKey="rodents"
      image="/hamster-sauvage.jpg"
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Glodavci so priljubljeni hišni ljubljenčki. Na sejmu boste našli različne vrste hrčkov, miši, morskih prašičkov, zajcev in šinčil. Ti prijazni živali so odlični za družine in zahtevajo ustrezno skrb in pozornost.
      </p>
    </CategoryPageLayout>
  );
}
