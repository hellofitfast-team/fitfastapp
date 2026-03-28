import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Search, ChevronDown, MessageSquarePlus } from "lucide-react";
import { toLocalDigits } from "@fitfast/ui/format";
import { Skeleton } from "@fitfast/ui/skeleton";
import { cn } from "@fitfast/ui/cn";
import { DEFAULT_CHECK_IN_FREQUENCY_DAYS } from "@/lib/constants";

export const Route = createFileRoute("/_dashboard/faq")({
  component: FAQPage,
});

const faqKeys = [
  "checkInFrequency",
  "changeMeals",
  "missWorkout",
  "trackProgress",
  "newPlanTiming",
  "contactCoach",
  "paymentMethods",
  "changeLanguage",
] as const;

function FAQPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const dbFaqs = useQuery(api.faqs.getFAQs, { language: locale as "en" | "ar" });
  // check_in_frequency_days is in PUBLIC_CONFIG_KEYS -- no auth required
  const freqConfig = useQuery(api.systemConfig.getConfig, { key: "check_in_frequency_days" });
  const frequencyDays = Number(freqConfig?.value) || DEFAULT_CHECK_IN_FREQUENCY_DAYS;
  const isLoading = dbFaqs === undefined;

  const faqs =
    dbFaqs && dbFaqs.length > 0
      ? dbFaqs.map((faq) => ({ key: faq._id, question: faq.question, answer: faq.answer }))
      : !isLoading
        ? faqKeys.map((key) => ({
            key,
            question: t(`faq.questions.${key}.q`),
            answer: t(`faq.questions.${key}.a`, { days: frequencyDays }),
          }))
        : [];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-3xl space-y-5 py-4 lg:px-6 lg:py-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">{t("faq.title")}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t("faq.subtitle")}</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="text-muted-foreground absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2" />
        <input
          type="text"
          placeholder={t("faq.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full max-w-md rounded-xl border ps-10 pe-4 text-sm transition-colors focus:ring-2 focus:outline-none"
        />
      </div>

      {/* FAQ List */}
      {isLoading ? (
        <div className="space-y-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-border bg-card rounded-xl border p-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.key}
              className="border-border bg-card animate-slide-up overflow-hidden rounded-xl border"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-3 p-4 text-start transition-colors hover:bg-neutral-50"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
                      expandedIndex === index
                        ? "bg-primary text-white"
                        : "text-muted-foreground bg-neutral-100",
                    )}
                  >
                    {toLocalDigits(String(index + 1).padStart(2, "0"), locale)}
                  </div>
                  <span className="pt-1 text-sm font-medium">{faq.question}</span>
                </div>
                <ChevronDown
                  className={cn(
                    "text-muted-foreground mt-1 h-4 w-4 shrink-0 transition-transform duration-200",
                    expandedIndex === index && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  expandedIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="px-4 pt-0 pb-4">
                  <div className="ms-11 rounded-lg bg-neutral-50 p-3.5">
                    <p className="text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && filteredFaqs.length === 0 && (
        <div className="border-border bg-card rounded-xl border p-10 text-center">
          <Search className="text-muted-foreground/30 mx-auto h-10 w-10" />
          <p className="mt-3 font-medium">{t("faq.noResults")}</p>
          <p className="text-muted-foreground mt-1 text-sm">{t("faq.noResultsHint")}</p>
        </div>
      )}

      {/* Still Need Help */}
      <div className="border-primary/20 bg-primary/5 rounded-xl border p-6 text-center">
        <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
          <MessageSquarePlus className="text-primary h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold">{t("faq.stillNeedHelp")}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{t("faq.stillNeedHelpHint")}</p>
        <Link to="/tickets">
          <button className="bg-primary hover:bg-primary/90 mt-4 inline-flex h-11 items-center gap-2 rounded-lg px-6 text-sm font-semibold text-white transition-all active:scale-[0.97]">
            {t("faq.contactSupport")}
          </button>
        </Link>
      </div>
    </div>
  );
}
