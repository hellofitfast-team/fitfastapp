import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("landing");

  return (
    <footer className="relative mt-12 overflow-hidden rounded-t-[4rem] bg-slate-900 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="mb-2 flex items-center gap-4">
            <img
              src="/logo.png"
              alt="FitFast Icon"
              className="h-14 w-14 rounded-3xl object-contain opacity-90 shadow-lg"
            />
            <span className="text-4xl font-black tracking-tighter text-white uppercase italic">
              Fit<span className="text-[var(--color-primary-light)]">Fast</span>
            </span>
          </div>
          <p className="max-w-xs text-center text-sm text-slate-400 md:text-left">
            {t("footerRights")}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 shadow-inner">
          <div className="h-2.5 w-2.5 animate-ping rounded-full bg-[var(--color-success-500)] shadow-[0_0_10px_var(--color-success-500)]" />
          <span className="font-mono text-xs tracking-widest text-white/80 uppercase">
            {t("systemOperational")}
          </span>
        </div>
      </div>
    </footer>
  );
}
