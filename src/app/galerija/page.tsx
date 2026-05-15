"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { t } from "@/lib/i18n/translations";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const years = ["2022"];

const galleryImages = [
  "IMG_0002.jpg", "IMG_0003.jpg", "IMG_0004.jpg", "IMG_0005.jpg", "IMG_0006.jpg",
  "IMG_0007.jpg", "IMG_0008.jpg", "IMG_0009.jpg", "IMG_0010.jpg", "IMG_0011.jpg",
  "IMG_0012.jpg", "IMG_0013.jpg", "IMG_0014.jpg", "IMG_0015.jpg", "IMG_0016.jpg",
  "IMG_0017.jpg", "IMG_0018.jpg", "IMG_0019.jpg", "IMG_0020.jpg", "IMG_0021.jpg",
  "IMG_0022.jpg", "IMG_0023.jpg", "IMG_0024.jpg", "IMG_0025.jpg", "IMG_0026.jpg",
  "IMG_0027.jpg", "IMG_0028.jpg", "IMG_0029.jpg", "IMG_0030.jpg", "IMG_0031.jpg",
  "IMG_0032.jpg", "IMG_0033.jpg", "IMG_0034.jpg", "IMG_0035.jpg",
];

const galleryItems = galleryImages.map((file, i) => ({
  id: i,
  year: "2022",
  src: `/images/gallery/${file}`,
  alt: `SLO-EXO 2022 — ${file}`,
}));

export default function GalleryPage() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.year === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lang, "gallery.title")}
        </h1>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        {years.map((year) => (
          <Button
            key={year}
            variant={filter === year ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(year)}
          >
            {year}
          </Button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group mb-4 cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:scale-[1.03] hover:border-primary/30 hover:shadow-xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl border-border bg-card">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full rounded-lg object-contain"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
