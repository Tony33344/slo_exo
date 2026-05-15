"use client";

import { CategoryPageLayout } from "@/components/sections/CategoryPageLayout";

export default function PajkovciPage() {
  return (
    <CategoryPageLayout
      pageKey="arachnids"
      image="/aranchid animals_tarantulla_blue.jpg"
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Pajkovci so med najbolj nenavadnimi in zanimivimi eksotičnimi živalmi. Na sejmu si boste lahko ogledali impresivne tarantule, škorpione in druge vrste pajkovcev. Razstavljavci vam bodo razložili vse o njihovih navadah in potrebah.
      </p>
    </CategoryPageLayout>
  );
}
