import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };

  return (
    <button
      onClick={toggle}
      className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
      aria-label={i18n.language === "en" ? "Switch language" : "تبديل اللغة"}
    >
      <Globe className="h-4 w-4" />
      <span>{i18n.language === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
