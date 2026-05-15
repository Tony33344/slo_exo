"use client";

import { CategoryPageLayout } from "@/components/sections/CategoryPageLayout";

export default function DvozivkePage() {
  return (
    <CategoryPageLayout
      pageKey="amphibians"
      image="/hero3Green-frog-with-red-eyes-4k-ultra-HD-Wallpapers-for-computer-and-laptop.jpg"
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Dvoživke so fascinantne živali, ki živijo v vodi in na kopnem. Na sejmu boste našli različne vrste žab, od drobnih drevesnih žab do impresivnih krastač, odličnih za začetnike in izkušene vzrejevalce.
      </p>
    </CategoryPageLayout>
  );
}
