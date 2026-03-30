import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  MessageSquarePlus,
  Clock,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Upload,
  Send,
  Loader2,
} from "lucide-react";
import { useTickets } from "@/hooks/use-tickets";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { toast } from "@fitfast/ui/use-toast";
import { EmptyState } from "@fitfast/ui/empty-state";
import { SkeletonTicketItem } from "@fitfast/ui/skeleton";
import { RouteErrorComponent } from "@/components/route-error";
import { Input } from "@fitfast/ui/input";
import { Textarea } from "@fitfast/ui/textarea";
import { FormField } from "@fitfast/ui/form-field";
import { MAX_UPLOAD_SIZE_BYTES } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@fitfast/ui/cn";
import { toLocalDigits, toDateLocale } from "@fitfast/ui/format";

export const Route = createFileRoute("/_dashboard/tickets/")({
  component: TicketsPage,
  errorComponent: ({ error, reset }) => <RouteErrorComponent error={error} reset={reset} />,
});

function createTicketSchema(t: (key: string) => string) {
  return z.object({
    subject: z
      .string()
      .min(3, t("tickets.subjectMinLength"))
      .max(100, t("tickets.subjectMaxLength")),
    category: z.enum(["meal_issue", "workout_issue", "technical", "bug_report", "other"]),
    description: z.string().max(3000, t("tickets.descriptionMaxLength")).optional(),
  });
}
type TicketFormData = z.infer<ReturnType<typeof createTicketSchema>>;

// Relative time helper
function getTimeAgo(timestamp: number, locale: string): string {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);

  if (minutes < 1) return locale === "ar" ? "\u0627\u0644\u0622\u0646" : "just now";
  if (minutes < 60)
    return locale === "ar" ? `${toLocalDigits(minutes, locale)}\u062F` : `${minutes}m ago`;
  if (hours < 24)
    return locale === "ar" ? `${toLocalDigits(hours, locale)}\u0633` : `${hours}h ago`;

  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === yesterday.toDateString()) {
    return locale === "ar" ? "\u0623\u0645\u0633" : "Yesterday";
  }

  return date.toLocaleDateString(toDateLocale(locale), {
    month: "short",
    day: "numeric",
  });
}

function TicketsPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { tickets, isLoading, error, createTicket, createError } = useTickets();
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);

  const ticketSchema = createTicketSchema((key) => t(key));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { subject: "", category: "meal_issue", description: "" },
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const uploadScreenshot = async (): Promise<Id<"_storage"> | undefined> => {
    if (!screenshotFile) return undefined;
    setIsUploading(true);
    try {
      const uploadUrl = await generateUploadUrl({ purpose: "ticket_screenshot" });
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": screenshotFile.type },
        body: screenshotFile,
      });
      if (!result.ok) throw new Error(`Upload failed: ${result.status}`);
      const { storageId } = await result.json();
      return storageId as Id<"_storage">;
    } catch {
      toast({
        title: t("tickets.uploadFailed"),
        description: t("tickets.uploadFailedDescription"),
        variant: "destructive",
      });
      return undefined;
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data: TicketFormData) => {
    const screenshotId = await uploadScreenshot();
    const result = await createTicket({
      subject: data.subject.trim(),
      category: data.category,
      description: data.description?.trim() || undefined,
      screenshotId,
    });
    if (result) {
      reset();
      setScreenshotFile(null);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } else {
      toast({
        title: t("tickets.submitFailed"),
        description: createError || undefined,
        variant: "destructive",
      });
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "open":
        return "bg-success-500/10 text-success-500";
      case "coach_responded":
        return "bg-warning-500/10 text-warning-500";
      case "closed":
        return "bg-neutral-100 text-muted-foreground";
      default:
        return "";
    }
  };

  const getCategoryIcon = (status: string) => {
    switch (status) {
      case "open":
        return <Clock className="h-4 w-4" />;
      case "coach_responded":
        return <MessageSquare className="h-4 w-4" />;
      case "closed":
        return <CheckCircle2 className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-4 lg:px-6 lg:py-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">{t("tickets.title")}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t("tickets.myTickets")}</p>
      </div>

      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-success-500/10 border-success-500/20 animate-slide-up rounded-lg border p-3 text-center">
          <p className="text-success-500 text-sm font-medium">{t("tickets.ticketSubmitted")}</p>
        </div>
      )}

      {/* New Ticket Form */}
      <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border">
        <div className="border-border bg-primary/5 flex items-center gap-2 border-b p-4">
          <MessageSquarePlus className="text-primary h-4 w-4" />
          <h2 className="text-sm font-semibold">{t("tickets.newTicket")}</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
          <FormField label={t("tickets.subject")} error={errors.subject?.message}>
            <Input
              {...register("subject")}
              placeholder={t("tickets.subjectPlaceholder")}
              error={!!errors.subject}
              aria-invalid={errors.subject ? "true" : "false"}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField label={t("tickets.category")}>
            <select
              {...register("category")}
              className="border-input bg-card focus:ring-ring h-11 w-full cursor-pointer appearance-none rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            >
              <option value="meal_issue">{t("tickets.categories.mealIssue")}</option>
              <option value="workout_issue">{t("tickets.categories.workoutIssue")}</option>
              <option value="technical">{t("tickets.categories.technical")}</option>
              <option value="bug_report">{t("tickets.categories.bugReport")}</option>
              <option value="other">{t("tickets.categories.other")}</option>
            </select>
          </FormField>

          <FormField
            label={t("tickets.description")}
            optional
            optionalLabel={t("tickets.optional")}
            error={errors.description?.message}
          >
            <Textarea
              {...register("description")}
              placeholder={t("tickets.descriptionPlaceholder")}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField label={t("tickets.screenshot")} optional optionalLabel={t("tickets.optional")}>
            <label className="border-border flex h-16 cursor-pointer items-center justify-center rounded-lg border border-dashed bg-neutral-50 transition-colors hover:bg-neutral-100">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && file.size <= MAX_UPLOAD_SIZE_BYTES) setScreenshotFile(file);
                }}
                disabled={isSubmitting || isUploading}
              />
              <div className="text-muted-foreground flex items-center gap-2">
                <Upload className="h-4 w-4" />
                <span className="text-xs">
                  {screenshotFile ? screenshotFile.name : t("tickets.uploadHint")}
                </span>
              </div>
            </label>
          </FormField>

          <button
            type="submit"
            disabled={isSubmitting || isUploading}
            className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("tickets.sending")}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t("tickets.submitTicket")}
              </>
            )}
          </button>
        </form>
      </div>

      {/* Existing Tickets */}
      <div>
        <h2 className="text-muted-foreground mb-3 text-sm font-semibold">
          {t("tickets.myTickets")}
        </h2>

        {isLoading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <SkeletonTicketItem key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="border-border bg-card rounded-xl border p-6 text-center">
            <p className="text-error-500 text-sm">{error}</p>
          </div>
        ) : tickets.length === 0 ? (
          <EmptyState
            icon={MessageSquare}
            title={t("emptyStates.noTickets.title")}
            description={t("emptyStates.noTickets.description")}
            action={{
              label: t("emptyStates.noTickets.action"),
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            }}
          />
        ) : (
          <div className="space-y-2">
            {tickets.map((ticket, index) => {
              const lastMessage = ticket.messages?.[ticket.messages.length - 1];

              return (
                <Link
                  key={ticket._id}
                  to="/tickets/$id"
                  params={{ id: ticket._id }}
                  className="border-border bg-card animate-slide-up block rounded-xl border p-4 transition-all hover:bg-neutral-50 active:scale-[0.97]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                        ticket.status === "open"
                          ? "bg-success-500/10 text-success-500"
                          : ticket.status === "coach_responded"
                            ? "bg-warning-500/10 text-warning-500"
                            : "text-muted-foreground bg-neutral-100",
                      )}
                    >
                      {getCategoryIcon(ticket.status)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-semibold">{ticket.subject}</p>
                        <span
                          className={cn(
                            "shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium",
                            getStatusStyle(ticket.status),
                          )}
                        >
                          {t(
                            `tickets.status.${ticket.status === "coach_responded" ? "coachResponded" : ticket.status}`,
                          )}
                        </span>
                      </div>
                      {lastMessage && (
                        <p className="text-muted-foreground mt-1 truncate text-xs">
                          {lastMessage.message}
                        </p>
                      )}
                      <p className="text-muted-foreground mt-1.5 text-[10px]">
                        {getTimeAgo(ticket._creationTime, locale)}
                      </p>
                    </div>
                    <ChevronRight className="text-muted-foreground mt-1 h-4 w-4 shrink-0 rtl:rotate-180" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
