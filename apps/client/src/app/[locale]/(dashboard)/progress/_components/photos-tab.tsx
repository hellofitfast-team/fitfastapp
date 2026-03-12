"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Camera, Image as ImageIcon, X } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { EmptyState } from "@fitfast/ui/empty-state";

interface PhotosTabProps {
  photos: Array<{ url: string; date: string; label?: string }>;
}

export function PhotosTab({ photos }: PhotosTabProps) {
  const t = useTranslations("progress");
  const tEmpty = useTranslations("emptyStates");
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : prev));
      }
    },
    [selectedIndex, photos.length],
  );

  // Keydown listener — re-attaches when handleKeyDown changes (arrow navigation)
  useEffect(() => {
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedIndex, handleKeyDown]);

  // Focus management — only runs on open/close transitions
  useEffect(() => {
    const isOpen = selectedIndex !== null;
    if (isOpen && !wasOpenRef.current) {
      // Modal just opened — focus close button
      closeButtonRef.current?.focus();
    } else if (!isOpen && wasOpenRef.current) {
      // Modal just closed — restore focus to trigger thumbnail
      triggerRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [selectedIndex]);

  return (
    <>
      <SectionCard
        icon={Camera}
        title={t("progressPhotos")}
        description={t("progressPhotosDescription")}
      >
        {photos.length > 0 ? (
          <div className="grid grid-cols-3 gap-2.5">
            {photos.map((photo, index) => (
              <button
                key={`${photo.url}-${index}`}
                type="button"
                className="group border-border relative cursor-pointer overflow-hidden rounded-xl border transition-transform hover:scale-[1.02]"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setSelectedIndex(index);
                }}
              >
                <div className="relative aspect-[3/4] bg-neutral-100">
                  <Image
                    src={photo.url}
                    alt={`Progress photo from ${photo.date}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                    className="object-cover"
                  />
                </div>
                {photo.label && (
                  <div className="absolute top-2 left-2 rounded bg-blue-500/90 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    {photo.label}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 backdrop-blur-sm">
                  <p className="text-xs font-medium text-white">{photo.date}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={ImageIcon}
            title={tEmpty("noPhotos.title")}
            description={tEmpty("noPhotos.description")}
            action={{
              label: tEmpty("noPhotos.action"),
              onClick: () => router.push("/check-in"),
            }}
          />
        )}
      </SectionCard>

      {/* Photo Modal */}
      {selectedIndex !== null && photos[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t("progressPhoto")}
        >
          <div
            className="bg-card relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-border flex items-center justify-between border-b p-3">
              <span className="text-sm font-semibold">
                {t("progressPhoto")} ({selectedIndex + 1}/{photos.length})
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label={t("close")}
                className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative aspect-[3/4] max-h-[70vh] w-full">
              <Image
                src={photos[selectedIndex].url}
                alt={`Progress photo from ${photos[selectedIndex].date}`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
