"use client";

import { useTranslations } from "next-intl";
import { Button } from "@fitfast/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@fitfast/ui/card";
import { FileQuestion } from "lucide-react";
import { Link } from "@fitfast/i18n/navigation";

export default function NotFound() {
  const tErrors = useTranslations("errors");

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
            <FileQuestion className="h-8 w-8 text-neutral-500" />
          </div>
          <CardTitle className="text-xl text-neutral-900">{tErrors("pageNotFound")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-neutral-600">{tErrors("pageNotFoundDescription")}</p>
          <Button asChild className="w-full">
            <Link href="/">{tErrors("goHome")}</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
