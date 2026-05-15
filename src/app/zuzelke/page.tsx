"use client";

import { CategoryPageLayout } from "@/components/sections/CategoryPageLayout";

export default function ZuzelkePage() {
  return (
    <CategoryPageLayout
      pageKey="insects"
      image="/insect.jpg"
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Svet žuželk je ogromen in raznolik. Na sejmu boste našli barvite hrošče, fascinantne bogomolke in druge zanimive žuželke. Mnoge vrste so primerne za začetnike in zahtevajo malo prostora.
      </p>
    </CategoryPageLayout>
  );
}
