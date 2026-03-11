"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SplitSquareHorizontal } from "lucide-react";

interface PhotoComparisonProps {
  photos: Array<{ url: string; date: string; label?: string }>;
}

export function PhotoComparison({ photos }: PhotoComparisonProps) {
  const t = useTranslations("progress");
  const [sliderValue, setSliderValue] = useState(50);

  if (photos.length < 2) {
    return (
      <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border">
        <div className="border-border bg-primary/5 flex items-center gap-2 border-b p-4">
          <SplitSquareHorizontal className="text-primary h-4 w-4" />
          <h3 className="text-sm font-semibold">{t("beforeAfter")}</h3>
        </div>
        <div className="p-8 text-center">
          <SplitSquareHorizontal className="text-muted-foreground/30 mx-auto h-10 w-10" />
          <p className="text-muted-foreground mt-3 text-sm">{t("needTwoPhotos")}</p>
        </div>
      </div>
    );
  }

  const firstPhoto = photos[0];
  const latestPhoto = photos[photos.length - 1];

  return (
    <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border">
      <div className="border-border bg-primary/5 flex items-center gap-2 border-b p-4">
        <SplitSquareHorizontal className="text-primary h-4 w-4" />
        <h3 className="text-sm font-semibold">{t("beforeAfter")}</h3>
      </div>
      <div className="p-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          {/* Before (first) — full background */}
          <Image
            src={firstPhoto.url}
            alt={`${t("before")} — ${firstPhoto.date}`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />

          {/* After (latest) — clipped by slider */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
          >
            <Image
              src={latestPhoto.url}
              alt={`${t("after")} — ${latestPhoto.date}`}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-white/50">
              <SplitSquareHorizontal className="h-4 w-4 text-neutral-600" />
            </div>
          </div>

          {/* Labels — larger text with more padding */}
          <div className="absolute bottom-3 left-3 rounded-lg bg-black/70 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
            {t("before")} — {firstPhoto.date}
          </div>
          <div className="absolute right-3 bottom-3 rounded-lg bg-black/70 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
            {t("after")} — {latestPhoto.date}
          </div>

          {/* Range input */}
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            aria-label={t("slideToCompare")}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
        <p className="text-muted-foreground mt-2 text-center text-xs">{t("slideToCompare")}</p>
      </div>
    </div>
  );
}
