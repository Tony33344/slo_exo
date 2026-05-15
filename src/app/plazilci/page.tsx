"use client";

import { CategoryPageLayout } from "@/components/sections/CategoryPageLayout";

export default function PlazilciPage() {
  return (
    <CategoryPageLayout
      pageKey="reptiles"
      image="/hero2Reptile-iguana-herbivorous-Green-Lizzard-HD-Wallpaper-for-Mobile-phones-Tablet-and-PC.jpg"
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Na sejmu si boste lahko ogledali široko raznolikost plazilcev, od čudovitih kač in kuščarjev do barvitih kameleonov in želv. Razstavljavci so strokovnjaki, ki vam bodo z veseljem svetovali o skrbi za te neverjetne živali.
      </p>
    </CategoryPageLayout>
  );
}
