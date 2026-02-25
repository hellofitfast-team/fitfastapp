"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "@fitfast/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useConvexAuth, useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import {
  User,
  Calendar,
  TrendingUp,
  ArrowLeft,
  Loader2,
  Check,
  X,
  XCircle,
  Zap,
  CreditCard,
} from "lucide-react";
import { Link } from "@fitfast/i18n/navigation";
import { formatDate } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const tierOptions = [
  { value: "monthly" as const, label: "Monthly", months: 1 },
  { value: "quarterly" as const, label: "Quarterly", months: 3 },
];

function PaymentScreenshot({ storageId }: { storageId: Id<"_storage"> }) {
  const url = useQuery(api.storage.getFileUrl, { storageId });
  const [showLightbox, setShowLightbox] = useState(false);

  if (url === undefined) {
    return <div className="h-40 w-full animate-pulse rounded-lg bg-stone-100" />;
  }
  if (!url) {
    return <p className="text-xs text-stone-400">Unable to load image</p>;
  }

  return (
    <>
      <img
        src={url}
        alt="Payment screenshot"
        className="h-40 w-full rounded-lg border border-stone-200 object-cover cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => setShowLightbox(true)}
      />
      {showLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowLightbox(false)}
        >
          <img
            src={url}
            alt="Payment screenshot"
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

const statusBadge: Record<string, string> = {
  pending: "bg-primary/10 text-primary border-primary/20",
  approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rejected: "bg-red-50 text-red-700 border-red-200",
};

function SignupPaymentCard({ signup }: { signup: any }) {
  const ocr = signup.ocrExtractedData as any;

  return (
    <div className="rounded-lg border border-stone-100 bg-stone-50/50 p-4">
      {/* Header row: status + date */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${
            statusBadge[signup.status] ?? statusBadge.pending
          }`}
        >
          {signup.status}
        </span>
        <span className="text-xs text-stone-400">
          {new Date(signup._creationTime).toLocaleDateString()}
        </span>
      </div>

      <div className="flex gap-4">
        {/* Screenshot */}
        {signup.paymentScreenshotId ? (
          <div className="shrink-0 w-36">
            <PaymentScreenshot
              storageId={signup.paymentScreenshotId as Id<"_storage">}
            />
          </div>
        ) : (
          <div className="shrink-0 w-36">
            <div className="h-32 w-full rounded-lg border border-dashed border-stone-200 bg-white flex items-center justify-center">
              <p className="text-xs text-stone-400">No screenshot</p>
            </div>
          </div>
        )}

        {/* Details */}
        <dl className="flex-1 min-w-0 space-y-1.5 text-sm">
          {signup.planTier && (
            <div className="flex justify-between">
              <dt className="text-stone-500">Plan</dt>
              <dd className="font-medium text-primary">{signup.planTier.replace("_", " ")}</dd>
            </div>
          )}
          {ocr?.reference_number && (
            <div className="flex justify-between">
              <dt className="text-stone-500">Reference #</dt>
              <dd className="font-mono font-medium text-stone-900">{ocr.reference_number}</dd>
            </div>
          )}
          {ocr?.amount && (
            <div className="flex justify-between">
              <dt className="text-stone-500">Amount</dt>
              <dd className="font-medium text-stone-900">{ocr.amount}</dd>
            </div>
          )}
          {ocr?.sender_name && (
            <div className="flex justify-between">
              <dt className="text-stone-500">Sender</dt>
              <dd className="text-stone-900">{ocr.sender_name}</dd>
            </div>
          )}
          {ocr?.bank && (
            <div className="flex justify-between">
              <dt className="text-stone-500">Bank</dt>
              <dd className="text-stone-900">{ocr.bank}</dd>
            </div>
          )}
          {!ocr && !signup.paymentScreenshotId && (
            <p className="text-xs text-stone-400">No payment details submitted.</p>
          )}
        </dl>
      </div>
    </div>
  );
}

export default function ClientDetailPage() {
  const params = useParams();
  const userId = params.id as string;
  const t = useTranslations("admin");
  const locale = useLocale();
  const { isAuthenticated } = useConvexAuth();

  const profile = useQuery(api.profiles.getProfileByUserId, isAuthenticated ? {
    userId: userId,
  } : "skip");
  const assessment = useQuery(api.assessments.getAssessmentByUserId, isAuthenticated ? {
    userId: userId,
  } : "skip");

  // Fetch all signup records (payment history) by email
  const signups = useQuery(
    api.pendingSignups.getSignupsByEmail,
    isAuthenticated && profile?.email ? { email: profile.email } : "skip",
  );
  // Latest signup (for pre-selecting plan tier)
  const latestSignup = signups?.[0] ?? null;

  const router = useRouter();
  const updateStatus = useMutation(api.profiles.updateClientStatus);
  const rejectClient = useMutation(api.profiles.rejectClient);

  const [selectedTier, setSelectedTier] = useState<"monthly" | "quarterly">("monthly");
  const [isActing, setIsActing] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  // Pre-select the plan tier from the latest signup if available (coach can override)
  const [tierInitialized, setTierInitialized] = useState(false);
  useEffect(() => {
    if (latestSignup?.planTier && !tierInitialized) {
      setSelectedTier(latestSignup.planTier as "monthly" | "quarterly");
      setTierInitialized(true);
    }
  }, [latestSignup?.planTier, tierInitialized]);

  const isLoading = profile === undefined || assessment === undefined;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="space-y-6">
        <Link
          href="/clients"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:border-primary/30 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        </Link>
        <p className="text-sm text-stone-500">Client not found.</p>
      </div>
    );
  }

  const handleActivate = async () => {
    setIsActing(true);
    try {
      const tier = tierOptions.find((t) => t.value === selectedTier)!;
      const startDate = new Date().toISOString().split("T")[0];
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + tier.months);

      await updateStatus({
        profileId: profile._id as Id<"profiles">,
        status: "active",
        planTier: selectedTier,
        planStartDate: startDate,
        planEndDate: endDate.toISOString().split("T")[0],
      });

      toast({ title: "Client activated", description: `${profile.fullName} is now active with a ${tier.label} plan.`, variant: "success" });
    } catch (err) {
      console.error("Activate failed:", err);
      toast({ title: "Error", description: err instanceof Error ? err.message : "Failed to activate client", variant: "destructive" });
    }
    setIsActing(false);
  };

  const handleDeactivate = async () => {
    setIsActing(true);
    try {
      await updateStatus({
        profileId: profile._id as Id<"profiles">,
        status: "inactive",
      });
      toast({ title: "Client deactivated", description: `${profile.fullName} is now inactive.`, variant: "success" });
    } catch (err) {
      console.error("Deactivate failed:", err);
      toast({ title: "Error", description: err instanceof Error ? err.message : "Failed to deactivate", variant: "destructive" });
    }
    setIsActing(false);
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) return;
    setIsActing(true);
    try {
      await rejectClient({
        profileId: profile._id as Id<"profiles">,
        rejectionReason: rejectionReason.trim(),
      });
      toast({ title: "Client rejected", description: `${profile.fullName} has been rejected and removed. A rejection email has been sent.`, variant: "success" });
      router.replace("/clients");
    } catch (err) {
      console.error("Reject failed:", err);
      toast({ title: "Error", description: err instanceof Error ? err.message : "Failed to reject client", variant: "destructive" });
    }
    setIsActing(false);
  };

  const statusColor =
    profile.status === "active"
      ? "text-emerald-600"
      : profile.status === "pending_approval"
        ? "text-primary"
        : profile.status === "expired"
          ? "text-red-600"
          : "text-stone-500";

  return (
    <div className="space-y-6">
      {/* Back button + name */}
      <div className="flex items-center gap-4">
        <Link
          href="/clients"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:border-primary/30 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">
            {profile.fullName ?? "Client"}
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            ID: {userId.slice(0, 8)}...
          </p>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Profile */}
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <User className="h-4 w-4" />
            </div>
            <h2 className="font-semibold text-sm text-stone-900">
              Profile
            </h2>
          </div>
          <dl className="space-y-2.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone-500">Status</dt>
              <dd className={`font-medium ${statusColor}`}>
                {profile.status?.replace("_", " ")}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-500">Plan</dt>
              <dd className="font-medium text-stone-900">{profile.planTier ?? "---"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-500">Phone</dt>
              <dd className="text-stone-900">{profile.phone ?? "---"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-500">Language</dt>
              <dd className="text-stone-900 uppercase">{profile.language ?? "en"}</dd>
            </div>
          </dl>
        </div>

        {/* Plan dates */}
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Calendar className="h-4 w-4" />
            </div>
            <h2 className="font-semibold text-sm text-stone-900">
              Plan Period
            </h2>
          </div>
          <dl className="space-y-2.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone-500">Start</dt>
              <dd className="text-stone-900">
                {profile.planStartDate
                  ? formatDate(profile.planStartDate, locale)
                  : "---"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-500">End</dt>
              <dd className="text-stone-900">
                {profile.planEndDate
                  ? formatDate(profile.planEndDate, locale)
                  : "---"}
              </dd>
            </div>
            {profile.planEndDate && (
              <div className="flex justify-between">
                <dt className="text-stone-500">Remaining</dt>
                <dd className="font-medium text-primary">
                  {Math.max(
                    0,
                    Math.ceil(
                      (new Date(profile.planEndDate).getTime() -
                        Date.now()) /
                        (1000 * 60 * 60 * 24)
                    )
                  )}{" "}
                  days
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Assessment summary */}
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <TrendingUp className="h-4 w-4" />
            </div>
            <h2 className="font-semibold text-sm text-stone-900">
              Assessment
            </h2>
          </div>
          {assessment ? (
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone-500">Weight</dt>
                <dd className="text-stone-900">{assessment.currentWeight ?? "---"} kg</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-500">Height</dt>
                <dd className="text-stone-900">{assessment.height ?? "---"} cm</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-500">Level</dt>
                <dd className="text-stone-900 capitalize">
                  {assessment.experienceLevel ?? "---"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-500">Goals</dt>
                <dd className="truncate max-w-[120px] text-stone-900">
                  {assessment.goals ?? "---"}
                </dd>
              </div>
            </dl>
          ) : (
            <p className="text-sm text-stone-400">
              No assessment submitted
            </p>
          )}
        </div>

        {/* Payment history — shown for all clients */}
        <div className="rounded-xl border border-stone-200 bg-white p-5 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CreditCard className="h-4 w-4" />
            </div>
            <h2 className="font-semibold text-sm text-stone-900">
              Payment History
            </h2>
          </div>

          {!profile.email && (
            <p className="text-sm text-stone-400">
              Profile has no email — cannot look up payment records.
            </p>
          )}

          {profile.email && signups === undefined && (
            <div className="flex items-center gap-2 text-sm text-stone-400">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading payment history...
            </div>
          )}

          {profile.email && signups && signups.length === 0 && (
            <p className="text-sm text-stone-400">
              No payment records found for {profile.email}.
            </p>
          )}

          {signups && signups.length > 0 && (
            <div className="space-y-4">
              {signups.map((s) => (
                <SignupPaymentCard key={s._id} signup={s} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Actions card */}
      {profile.status === "pending_approval" && (
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Zap className="h-4 w-4" />
            </div>
            <h2 className="font-semibold text-sm text-stone-900">
              Activate Client
            </h2>
          </div>

          <p className="text-sm text-stone-600 mb-4">
            This client is pending approval. Select a plan tier and activate to grant access.
            {latestSignup?.planTier && (
              <span className="text-xs text-stone-400 block mt-1">
                Client requested: {latestSignup.planTier.replace("_", " ")} — you can override below.
              </span>
            )}
          </p>

          <div className="flex flex-wrap items-end gap-3">
            {/* Plan tier selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-500">Plan Tier</label>
              <div className="flex gap-2">
                {tierOptions.map((tier) => (
                  <button
                    key={tier.value}
                    type="button"
                    onClick={() => setSelectedTier(tier.value)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedTier === tier.value
                        ? "border-primary bg-primary text-white"
                        : "border-stone-200 bg-white text-stone-700 hover:border-primary/40"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Activate button */}
            <button
              onClick={handleActivate}
              disabled={isActing}
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors disabled:opacity-50"
            >
              {isActing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Check className="h-4 w-4" />
              )}
              Activate
            </button>

            {/* Reject toggle */}
            {!isRejecting && (
              <button
                onClick={() => setIsRejecting(true)}
                disabled={isActing}
                className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100 transition-colors disabled:opacity-50"
              >
                <X className="h-4 w-4" />
                Reject
              </button>
            )}
          </div>

          {/* Rejection reason input */}
          {isRejecting && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50/50 p-4">
              <p className="text-xs font-medium text-stone-600 mb-2">
                Rejection Reason
              </p>
              <div className="flex items-start gap-3">
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Explain why this client is being rejected..."
                  rows={2}
                  className="flex-1 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all resize-none"
                  autoFocus
                />
                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    onClick={handleReject}
                    disabled={isActing || !rejectionReason.trim()}
                    className="flex items-center gap-1.5 rounded-lg border border-red-300 bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    {isActing ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <X className="h-3.5 w-3.5" />
                    )}
                    Confirm Reject
                  </button>
                  <button
                    onClick={() => { setIsRejecting(false); setRejectionReason(""); }}
                    disabled={isActing}
                    className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-50 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Deactivate for active/expired clients */}
      {(profile.status === "active" || profile.status === "expired") && (
        <div className="flex justify-end">
          <button
            onClick={handleDeactivate}
            disabled={isActing}
            className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100 transition-colors disabled:opacity-50"
          >
            {isActing ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <XCircle className="h-3.5 w-3.5" />
            )}
            Deactivate Client
          </button>
        </div>
      )}
    </div>
  );
}
