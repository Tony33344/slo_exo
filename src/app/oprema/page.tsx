"use client";

import { CategoryPageLayout } from "@/components/sections/CategoryPageLayout";

export default function OpremaPage() {
  return (
    <CategoryPageLayout
      pageKey="equipment"
      image="/aquarium.jpg"
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Zaustavljena boste pri široki izbiri opreme za teraristiko in akvaristiko. Ponudba vključuje steklene terarije in akvarije po meri, vso potrebno opremo, substrati, razsvetljava in ogrevanje. Strokovnjaki vam bodo svetovali pri izbiri.
      </p>
    </CategoryPageLayout>
  );
}
