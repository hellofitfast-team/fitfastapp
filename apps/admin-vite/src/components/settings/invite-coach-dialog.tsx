import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAction } from "convex/react";
import { api } from "@convex/_generated/api";
import { UserPlus, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function InviteCoachDialog() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const inviteAdmin = useAction(api.adminInviteActions.inviteAdmin);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !fullName.trim()) return;

    setStatus("loading");
    setMessage("");
    try {
      const result = await inviteAdmin({ email: email.trim(), fullName: fullName.trim() });
      setStatus("success");
      setMessage(result);
      setEmail("");
      setFullName("");
      // Auto-close after 3 seconds on success
      setTimeout(() => {
        setOpen(false);
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to invite admin");
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-colors"
      >
        <UserPlus className="h-4 w-4" />
        {t("inviteCoach")}
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
          <UserPlus className="h-4 w-4" />
        </div>
        <h2 className="text-sm font-semibold text-stone-900">{t("inviteCoach")}</h2>
      </div>

      <p className="mb-4 text-xs text-stone-500">{t("inviteCoachDesc")}</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="invite-name" className="mb-1 block text-xs font-medium text-stone-600">
            {t("inviteFullName")}
          </label>
          <input
            id="invite-name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={t("inviteFullNamePlaceholder")}
            required
            disabled={status === "loading"}
            className="focus:border-primary focus:ring-primary/20 h-10 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm transition-all focus:ring-2 focus:outline-none disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="invite-email" className="mb-1 block text-xs font-medium text-stone-600">
            {t("inviteEmail")}
          </label>
          <input
            id="invite-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("inviteEmailPlaceholder")}
            required
            disabled={status === "loading"}
            className="focus:border-primary focus:ring-primary/20 h-10 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm transition-all focus:ring-2 focus:outline-none disabled:opacity-50"
          />
        </div>

        {/* Status messages */}
        {status === "success" && (
          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>{message}</span>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{message}</span>
          </div>
        )}

        <div className="flex items-center gap-2 pt-1">
          <button
            type="submit"
            disabled={status === "loading" || !email.trim() || !fullName.trim()}
            className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors disabled:opacity-50"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <UserPlus className="h-4 w-4" />
            )}
            {status === "loading" ? t("inviteSending") : t("inviteSendButton")}
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setStatus("idle");
              setMessage("");
            }}
            className="rounded-lg px-4 py-2 text-sm font-medium text-stone-500 transition-colors hover:bg-stone-100"
          >
            {t("inviteCancel")}
          </button>
        </div>
      </form>
    </div>
  );
}
