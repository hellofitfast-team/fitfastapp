"use client";

import { useMemo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Camera, Upload, X } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";

interface PhotosStepProps {
  uploadedPhotos: File[];
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemovePhoto: (index: number) => void;
}

export function PhotosStep({ uploadedPhotos, onPhotoChange, onRemovePhoto }: PhotosStepProps) {
  const t = useTranslations("checkIn");

  const photoUrls = useMemo(
    () => uploadedPhotos.map((p) => URL.createObjectURL(p)),
    [uploadedPhotos],
  );
  useEffect(() => {
    return () => photoUrls.forEach((url) => URL.revokeObjectURL(url));
  }, [photoUrls]);

  return (
    <SectionCard icon={Camera} title={t("photos")} description={t("maxPhotos")}>
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        multiple
        onChange={onPhotoChange}
        className="hidden"
        disabled={uploadedPhotos.length >= 4}
      />

      {uploadedPhotos.length === 0 ? (
        <label
          htmlFor="photo-upload"
          className="border-border flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-neutral-50 transition-colors hover:bg-neutral-100"
        >
          <Upload className="text-muted-foreground/50 mb-3 h-8 w-8" />
          <p className="text-sm font-semibold">{t("uploadPhotos")}</p>
          <p className="text-muted-foreground mt-1 text-xs">{t("fileTypes")}</p>
        </label>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {uploadedPhotos.map((photo, index) => (
              <div
                key={index}
                className="border-border relative aspect-square overflow-hidden rounded-xl border"
              >
                <img
                  src={photoUrls[index]}
                  alt={`Progress photo ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => onRemovePhoto(index)}
                  className="bg-error-500 hover:bg-error-500/80 absolute end-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          {uploadedPhotos.length < 4 && (
            <label
              htmlFor="photo-upload"
              className="border-border flex h-12 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed bg-neutral-50 transition-colors hover:bg-neutral-100"
            >
              <Upload className="text-muted-foreground me-2 h-4 w-4" />
              <span className="text-sm font-medium">{t("addMorePhotos")}</span>
            </label>
          )}
        </div>
      )}
    </SectionCard>
  );
}
