import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useConvexAuth, useQuery, useAction } from "convex/react";
import { api } from "@convex/_generated/api";
import { Bell, Send, Loader2, BellOff, FlaskConical } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "@tanstack/react-router";
import { formatDateTime } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@fitfast/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@fitfast/ui/select";

const typeBadgeColors: Record<string, string> = {
  plan_ready: "bg-blue-50 text-blue-700 border-blue-200",
  reminder: "bg-amber-50 text-amber-700 border-amber-200",
  broadcast: "bg-purple-50 text-purple-700 border-purple-200",
  individual: "bg-teal-50 text-teal-700 border-teal-200",
};

const statusBadgeColors: Record<string, string> = {
  sent: "bg-emerald-50 text-emerald-700 border-emerald-200",
  failed: "bg-red-50 text-red-700 border-red-200",
  partial: "bg-amber-50 text-amber-700 border-amber-200",
};

const PAGE_SIZE = 10;
type TestNotificationType = "plan_ready" | "reminder" | "individual";

export const Route = createFileRoute("/_panel/notifications")({
  component: NotificationsPage,
});

function NotificationsPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { isAuthenticated } = useConvexAuth();

  const notifConfig = useQuery(
    api.systemConfig.getConfig,
    isAuthenticated ? { key: "notifications_enabled" } : "skip",
  );
  const isNotifEnabled = notifConfig === undefined ? undefined : notifConfig?.value !== false;

  const logs = useQuery(api.notificationLog.getNotificationLogs, isAuthenticated ? {} : "skip");
  const clients = useQuery(api.profiles.getAllClients, isAuthenticated ? {} : "skip");

  const broadcastAction = useAction(api.adminNotifications.broadcastToAllActive);
  const sendTestPlanReady = useAction(api.notifications.sendTestPlanReady);
  const sendTestReminder = useAction(api.notifications.sendTestReminder);
  const sendIndividual = useAction(api.adminNotifications.sendToIndividual);

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  const [showTestDialog, setShowTestDialog] = useState(false);
  const [testType, setTestType] = useState<TestNotificationType | "">("");
  const [testUserId, setTestUserId] = useState("");
  const [testTitle, setTestTitle] = useState("");
  const [testBody, setTestBody] = useState("");
  const [isTestSending, setIsTestSending] = useState(false);

  useEffect(() => {
    if (showConfirm) confirmBtnRef.current?.focus();
  }, [showConfirm]);

  const prevLogsLengthRef = useRef(logs?.length);
  if (logs?.length !== prevLogsLengthRef.current) {
    prevLogsLengthRef.current = logs?.length;
    if (page !== 1) setPage(1);
  }

  const totalPages = Math.ceil((logs?.length ?? 0) / PAGE_SIZE);
  const paginatedLogs = logs?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleBroadcast = async () => {
    if (!title.trim() || !body.trim()) return;
    setIsSending(true);
    setShowConfirm(false);
    try {
      const result = await broadcastAction({ title: title.trim(), body: body.trim() });
      toast({
        title: t("notifications.broadcastSent"),
        description: t("notifications.broadcastSentDesc", {
          sent: result.sent,
          failed: result.failed,
        }),
        variant: "success",
      });
      setTitle("");
      setBody("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      toast({
        title: t("notifications.sendFailed"),
        description: message.includes("disabled")
          ? t("notifications.notificationsDisabled")
          : t("notifications.sendFailedDesc"),
        variant: "destructive",
      });
    }
    setIsSending(false);
  };

  const isTestSendDisabled =
    !testType ||
    !testUserId ||
    isTestSending ||
    (testType === "individual" && (!testTitle.trim() || !testBody.trim()));

  const handleTestSend = async () => {
    if (isTestSendDisabled) return;
    setIsTestSending(true);
    try {
      if (testType === "plan_ready") await sendTestPlanReady({ userId: testUserId });
      else if (testType === "reminder") await sendTestReminder({ userId: testUserId });
      else if (testType === "individual")
        await sendIndividual({
          userId: testUserId,
          title: testTitle.trim(),
          body: testBody.trim(),
        });
      toast({
        title: t("notifications.testSent"),
        description: t("notifications.testSentDesc"),
        variant: "success",
      });
      setShowTestDialog(false);
      resetTestDialog();
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      toast({
        title: t("notifications.testFailed"),
        description: message.includes("disabled")
          ? t("notifications.notificationsDisabled")
          : message.includes("rate")
            ? message
            : t("notifications.testFailedDesc"),
        variant: "destructive",
      });
    }
    setIsTestSending(false);
  };

  const resetTestDialog = () => {
    setTestType("");
    setTestUserId("");
    setTestTitle("");
    setTestBody("");
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          {t("notifications.title")}
        </h1>
        <button
          type="button"
          onClick={() => setShowTestDialog(true)}
          className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
        >
          <FlaskConical className="h-4 w-4" />
          {t("notifications.sendTestNotification")}
        </button>
      </div>

      <div className="max-w-3xl space-y-8">
        {isNotifEnabled === false && (
          <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <BellOff className="h-5 w-5 shrink-0 text-amber-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-stone-900">
                {t("notifications.notificationsDisabled")}
              </p>
            </div>
            <Link
              to="/settings"
              className="shrink-0 rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-50"
            >
              {t("settings.pushNotifications")}
            </Link>
          </div>
        )}

        {/* Broadcast card */}
        <div
          className={`rounded-xl border border-stone-200 bg-white p-6 ${isNotifEnabled === false ? "pointer-events-none opacity-50" : ""}`}
          aria-disabled={isNotifEnabled === false}
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Send className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900">
                {t("notifications.broadcast")}
              </h2>
              <p className="mt-0.5 text-xs text-stone-400">{t("notifications.broadcastDesc")}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="broadcast-title"
                className="mb-1 block text-xs font-medium text-stone-500"
              >
                {t("notifications.notificationTitle")}
              </label>
              <input
                id="broadcast-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t("notifications.titlePlaceholder")}
                maxLength={50}
                disabled={isNotifEnabled === false}
                className="focus:ring-primary/20 focus:border-primary h-10 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
              />
              <span className="mt-1 block text-end text-xs text-stone-400">{title.length}/50</span>
            </div>
            <div>
              <label
                htmlFor="broadcast-body"
                className="mb-1 block text-xs font-medium text-stone-500"
              >
                {t("notifications.notificationBody")}
              </label>
              <textarea
                id="broadcast-body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder={t("notifications.bodyPlaceholder")}
                rows={3}
                maxLength={150}
                disabled={isNotifEnabled === false}
                className="focus:ring-primary/20 focus:border-primary w-full resize-none rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
              />
              <span className="mt-1 block text-end text-xs text-stone-400">{body.length}/150</span>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowConfirm(true)}
                disabled={isNotifEnabled === false || isSending || !title.trim() || !body.trim()}
                className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors disabled:opacity-50"
              >
                {isSending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {isSending ? t("notifications.sending") : t("notifications.sendToAll")}
              </button>
            </div>
          </div>
          {showConfirm && (
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
              <p className="mb-1 text-sm font-medium text-stone-900">
                {t("notifications.confirmBroadcast")}
              </p>
              <p className="mb-3 text-xs text-stone-500">
                {t("notifications.confirmBroadcastDesc")}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  ref={confirmBtnRef}
                  onClick={handleBroadcast}
                  className="bg-primary hover:bg-primary/90 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-colors"
                >
                  {t("notifications.confirmSend")}
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-50"
                >
                  {t("notifications.cancelSend")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* History */}
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Bell className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-stone-900">{t("notifications.history")}</h2>
            {logs && logs.length >= 200 && (
              <span className="ms-auto text-xs text-stone-400">
                {t("notifications.showingLast200")}
              </span>
            )}
          </div>

          {logs === undefined && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="text-primary h-6 w-6 animate-spin" />
            </div>
          )}
          {logs && logs.length === 0 && (
            <p className="py-4 text-center text-sm text-stone-400">
              {t("notifications.historyEmpty")}
            </p>
          )}

          {logs && logs.length > 0 && (
            <>
              <div className="space-y-3 sm:hidden">
                {paginatedLogs?.map((log) => (
                  <div
                    key={log._id}
                    className="space-y-2 rounded-lg border border-stone-100 bg-stone-50/50 p-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${typeBadgeColors[log.type] ?? "border-stone-200 bg-stone-50 text-stone-600"}`}
                      >
                        {t(`notifications.typeLabels.${log.type}`)}
                      </span>
                      <span className="shrink-0 text-xs text-stone-400">
                        {formatDateTime(new Date(log.sentAt), locale)}
                      </span>
                    </div>
                    <p className="truncate text-xs font-medium text-stone-700">{log.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-500">
                        {t("notifications.recipients")}: {log.recipientCount}
                        {log.failedCount ? (
                          <span className="text-red-500">
                            {" "}
                            (+{log.failedCount} {t("notifications.failedSuffix")})
                          </span>
                        ) : null}
                      </span>
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${statusBadgeColors[log.status] ?? "border-stone-200 bg-stone-50 text-stone-600"}`}
                      >
                        {t(`notifications.statusLabels.${log.status}`)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden overflow-x-auto sm:block">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-100 text-start text-xs font-medium text-stone-400">
                      <th scope="col" className="pe-4 pb-2 text-start font-medium">
                        {t("notifications.date")}
                      </th>
                      <th scope="col" className="pe-4 pb-2 text-start font-medium">
                        {t("notifications.type")}
                      </th>
                      <th scope="col" className="pe-4 pb-2 text-start font-medium">
                        {t("notifications.notificationTitle")}
                      </th>
                      <th scope="col" className="pe-4 pb-2 text-start font-medium">
                        {t("notifications.recipients")}
                      </th>
                      <th scope="col" className="pb-2 text-start font-medium">
                        {t("notifications.statusLabel")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    {paginatedLogs?.map((log) => (
                      <tr key={log._id} className="text-stone-700">
                        <td className="py-2.5 pe-4 text-xs text-stone-500">
                          {formatDateTime(new Date(log.sentAt), locale)}
                        </td>
                        <td className="py-2.5 pe-4">
                          <span
                            className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${typeBadgeColors[log.type] ?? "border-stone-200 bg-stone-50 text-stone-600"}`}
                          >
                            {t(`notifications.typeLabels.${log.type}`)}
                          </span>
                        </td>
                        <td className="max-w-[200px] truncate py-2.5 pe-4 text-xs">{log.title}</td>
                        <td className="py-2.5 pe-4 text-xs">
                          {log.recipientCount}
                          {log.failedCount ? (
                            <span className="text-red-500">
                              {" "}
                              (+{log.failedCount} {t("notifications.failedSuffix")})
                            </span>
                          ) : null}
                        </td>
                        <td className="py-2.5">
                          <span
                            className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${statusBadgeColors[log.status] ?? "border-stone-200 bg-stone-50 text-stone-600"}`}
                          >
                            {t(`notifications.statusLabels.${log.status}`)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {logs && logs.length > 0 && totalPages > 1 && (
            <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
              <p className="text-xs text-stone-400">
                {t("admin.showing")} {(page - 1) * PAGE_SIZE + 1}–
                {Math.min(page * PAGE_SIZE, logs.length)} {t("admin.of")} {logs.length}
              </p>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-40"
                >
                  {t("admin.previous")}
                </button>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-40"
                >
                  {t("admin.next")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Test Notification Dialog */}
      <Dialog
        open={showTestDialog}
        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(false);
            resetTestDialog();
          }
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <FlaskConical className="h-5 w-5 text-blue-600" />
            </div>
            <DialogTitle>{t("notifications.sendTestNotification")}</DialogTitle>
            <DialogDescription>{t("notifications.testNotificationDesc")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-stone-500">
                {t("notifications.selectType")}
              </label>
              <Select
                value={testType}
                onValueChange={(v) => {
                  setTestType(v as TestNotificationType);
                  setTestTitle("");
                  setTestBody("");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("notifications.selectTypePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plan_ready">{t("notifications.typePlanReady")}</SelectItem>
                  <SelectItem value="reminder">{t("notifications.typeReminder")}</SelectItem>
                  <SelectItem value="individual">{t("notifications.typeIndividual")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-stone-500">
                {t("notifications.selectClient")}
              </label>
              {clients && clients.length === 0 ? (
                <p className="text-xs text-stone-400">{t("notifications.noActiveClients")}</p>
              ) : (
                <Select value={testUserId} onValueChange={setTestUserId}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("notifications.selectClientPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {clients?.map((client) => (
                      <SelectItem key={client._id} value={client.userId}>
                        {client.fullName ?? client.email ?? "—"}
                        {client.email && client.fullName ? (
                          <span className="ms-2 text-stone-400">{client.email}</span>
                        ) : null}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            {testType === "individual" && (
              <>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-stone-500">
                    {t("notifications.notificationTitle")}
                  </label>
                  <input
                    type="text"
                    value={testTitle}
                    onChange={(e) => setTestTitle(e.target.value)}
                    placeholder={t("notifications.titlePlaceholder")}
                    maxLength={50}
                    autoFocus
                    className="focus:ring-primary/20 focus:border-primary h-10 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
                  />
                  <span className="mt-1 block text-end text-xs text-stone-400">
                    {testTitle.length}/50
                  </span>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-stone-500">
                    {t("notifications.notificationBody")}
                  </label>
                  <textarea
                    value={testBody}
                    onChange={(e) => setTestBody(e.target.value)}
                    placeholder={t("notifications.bodyPlaceholder")}
                    rows={3}
                    maxLength={150}
                    className="focus:ring-primary/20 focus:border-primary w-full resize-none rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
                  />
                  <span className="mt-1 block text-end text-xs text-stone-400">
                    {testBody.length}/150
                  </span>
                </div>
              </>
            )}
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <button
              type="button"
              onClick={() => {
                setShowTestDialog(false);
                resetTestDialog();
              }}
              className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50"
            >
              {t("notifications.cancelSend")}
            </button>
            <button
              type="button"
              onClick={handleTestSend}
              disabled={isTestSendDisabled}
              className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors disabled:opacity-50"
            >
              {isTestSending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {isTestSending ? t("notifications.sending") : t("notifications.sendTest")}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
