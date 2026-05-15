"use client";

import { CategoryPageLayout } from "@/components/sections/CategoryPageLayout";

export default function DodatnoPage() {
  return (
    <CategoryPageLayout
      pageKey="pets"
      image="/top_dog_foods_for_small_dogs.jpg"
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Poleg eksotičnih živali imamo tudi ponudbo za vaše pse in mačke. Na voljo so kakovostna hrana, igrače in razni dodatki za najboljše prijatelje človeka. Vse, kar potrebujete za srečne in zdrave hišne ljubljenčke.
      </p>
    </CategoryPageLayout>
  );
}
