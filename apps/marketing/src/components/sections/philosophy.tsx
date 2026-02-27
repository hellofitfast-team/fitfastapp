"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Philosophy() {
  const t = useTranslations("landing");
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Image Parallax
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Split text reveal simulation (using lines instead of actual SplitText to avoid paid plugins)
      gsap.fromTo(
        ".phil-line",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-slate-50 px-6 py-24"
    >
      {/* Background Parallax Texture - High Key / Light */}
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop"
        alt="Clean architectural texture"
        className="pointer-events-none absolute inset-0 -top-[10%] h-[120%] w-full object-cover object-center opacity-10 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/50 to-slate-50 opacity-90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-12 text-center">
        <div className="overflow-hidden">
          <p className="phil-line font-sans text-lg font-medium tracking-wide text-slate-500 sm:text-2xl">
            {t("philosophyCommon") || "Most fitness apps focus on generic templates."}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="-my-4 overflow-hidden py-4">
            <h2 className="phil-line font-sans text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl md:leading-tight">
              {t("philosophyWeFocus1") || "We focus on:"}
            </h2>
          </div>
          <div className="-my-4 overflow-hidden py-4">
            <span className="phil-line font-drama mt-4 block text-5xl leading-tight text-[var(--color-primary)] uppercase italic sm:text-8xl md:text-9xl md:leading-[1.1]">
              {t("philosophyWeFocus2") || "SOVEREIGN PERFORMANCE."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
