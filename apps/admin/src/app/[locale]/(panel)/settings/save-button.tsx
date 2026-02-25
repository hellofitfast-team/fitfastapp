"use client";

import { useState } from "react";
import { Save, Check } from "lucide-react";

type SaveState = "idle" | "saving" | "saved" | "error";

interface SaveButtonProps {
  onSave: () => Promise<void>;
  label?: string;
  savingLabel?: string;
  savedLabel?: string;
  errorLabel?: string;
}

export function SaveButton({
  onSave,
  label = "Save",
  savingLabel = "Saving...",
  savedLabel = "Saved!",
  errorLabel = "Error — try again",
}: SaveButtonProps) {
  const [state, setState] = useState<SaveState>("idle");

  const handleClick = async () => {
    if (state === "saving" || state === "saved") return;
    setState("saving");
    try {
      await onSave();
      setState("saved");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 2500);
    }
  };

  const isSuccess = state === "saved";
  const isError = state === "error";

  return (
    <button
      onClick={handleClick}
      disabled={state === "saving"}
      className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 disabled:opacity-70 shadow-md ${
        isSuccess
          ? "bg-emerald-500 text-white shadow-emerald-200"
          : isError
            ? "bg-red-500 text-white shadow-red-200"
            : "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
      }`}
    >
      {isSuccess ? (
        <Check className="h-4 w-4" />
      ) : (
        <Save className="h-4 w-4" />
      )}
      {state === "saving"
        ? savingLabel
        : isSuccess
          ? savedLabel
          : isError
            ? errorLabel
            : label}
    </button>
  );
}
