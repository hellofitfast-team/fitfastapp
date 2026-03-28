/**
 * DateProgress -- sticky date picker bar for the tracking page.
 * Stays visible on scroll so users can always switch dates.
 */

import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

interface DateProgressProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  completionPercentage: number;
}

export function DateProgress({ selectedDate, onDateChange }: DateProgressProps) {
  const { t } = useTranslation("translation", { keyPrefix: "tracking" });

  return (
    <div className="bg-card/95 border-border shadow-card sticky top-0 z-10 rounded-xl border backdrop-blur-sm">
      <div className="flex items-center gap-3 p-3">
        <Calendar className="text-routine h-4 w-4 shrink-0" />
        <label htmlFor="tracking-date-picker" className="text-sm font-medium">
          {t("selectDate")}
        </label>
        <input
          id="tracking-date-picker"
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          max={new Date().toLocaleDateString("en-CA")}
          className="border-input bg-card focus:ring-ring ms-auto h-9 rounded-lg border px-3 text-sm transition-colors focus:ring-2 focus:outline-none"
        />
      </div>
    </div>
  );
}
