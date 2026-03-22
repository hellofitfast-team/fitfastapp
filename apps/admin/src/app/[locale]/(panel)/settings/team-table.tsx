"use client";

import { useTranslations } from "next-intl";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Shield, User, Clock, CheckCircle2 } from "lucide-react";

export function TeamTable() {
  const t = useTranslations("settings");
  const { isAuthenticated } = useConvexAuth();
  const members = useQuery(api.profiles.getTeamMembers, isAuthenticated ? {} : "skip");

  if (!members) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-100 bg-stone-50">
            <th className="px-4 py-3 text-start text-xs font-semibold text-stone-500 uppercase">
              {t("teamName")}
            </th>
            <th className="px-4 py-3 text-start text-xs font-semibold text-stone-500 uppercase">
              {t("teamEmail")}
            </th>
            <th className="px-4 py-3 text-start text-xs font-semibold text-stone-500 uppercase">
              {t("teamRole")}
            </th>
            <th className="px-4 py-3 text-start text-xs font-semibold text-stone-500 uppercase">
              {t("teamStatus")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {members.map((member) => (
            <tr key={member.email} className="transition-colors hover:bg-stone-50">
              <td className="px-4 py-3 font-medium text-stone-900">{member.fullName}</td>
              <td className="px-4 py-3 text-stone-600">{member.email}</td>
              <td className="px-4 py-3">
                {member.role === "owner" ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    <Shield className="h-3 w-3" />
                    {t("roleOwner")}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                    <User className="h-3 w-3" />
                    {t("roleCoach")}
                  </span>
                )}
              </td>
              <td className="px-4 py-3">
                {member.status === "active" ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="h-3 w-3" />
                    {t("statusActive")}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-semibold text-stone-600">
                    <Clock className="h-3 w-3" />
                    {t("statusPending")}
                  </span>
                )}
              </td>
            </tr>
          ))}
          {members.length === 0 && (
            <tr>
              <td colSpan={4} className="px-4 py-8 text-center text-stone-400">
                {t("noTeamMembers")}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
