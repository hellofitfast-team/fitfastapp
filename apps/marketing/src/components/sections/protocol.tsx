"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@fitfast/ui/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProtocolTranslationKey =
  | "protocol1Title"
  | "protocol1Desc"
  | "protocol2Title"
  | "protocol2Desc"
  | "protocol3Title"
  | "protocol3Desc";

interface ProtocolItem {
  id: string;
  titleKey: ProtocolTranslationKey;
  descKey: ProtocolTranslationKey;
  defaultTitle: string;
  defaultDesc: string;
}

const protocols: ProtocolItem[] = [
  {
    id: "01",
    titleKey: "protocol1Title",
    descKey: "protocol1Desc",
    defaultTitle: "Assimilation",
    defaultDesc: "Ingesting core metrics, metabolic baselines, and physical architecture.",
  },
  {
    id: "02",
    titleKey: "protocol2Title",
    descKey: "protocol2Desc",
    defaultTitle: "Synthesis",
    defaultDesc: "Processing millions of permutations to forge the exact optimal trajectory.",
  },
  {
    id: "03",
    titleKey: "protocol3Title",
    descKey: "protocol3Desc",
    defaultTitle: "Execution",
    defaultDesc: "Uncompromising daily alignment. No deviation. Pure sovereign performance.",
  },
];

export function Protocol() {
  const t = useTranslations("landing");
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".protocol-card");

      cards.forEach((card, i) => {
        // Sticky Stacking Animation
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          });
        }
      });

      // SVG Animations
      // 1. Rotating Motif
      gsap.to(".anim-motif", {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "none",
      });

      // 2. Laser Line
      gsap.fromTo(
        ".anim-laser",
        { top: 0 },
        { top: "100%", repeat: -1, duration: 2.5, ease: "power1.inOut", yoyo: true },
      );

      // 3. EKG Pulse (stroke-dashoffset)
      gsap.to(".anim-ekg", {
        strokeDashoffset: 0,
        repeat: -1,
        duration: 3,
        ease: "linear",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full border-y border-[var(--color-border)] bg-white py-24"
    >
      <div className="mx-auto mb-24 max-w-6xl px-6 text-center">
        <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          {t("protocolTitle")}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-500">{t("protocolSubtitle")}</p>
      </div>

      <div className="relative flex flex-col gap-0 pb-32">
        {protocols.map((protocol, i) => (
          <div
            key={protocol.id}
            className="protocol-card sticky top-[10vh] flex h-[80vh] w-full origin-top items-center justify-center px-4 md:px-12"
          >
            <div className="relative flex h-full max-h-[600px] w-full max-w-5xl flex-col items-center gap-12 overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-8 shadow-2xl md:flex-row md:p-16">
              {/* Graphic Side */}
              <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 md:h-full md:w-1/2">
                {/* SVG 1: Rotating Motif */}
                {i === 0 && (
                  <svg
                    className="anim-motif h-48 w-48 opacity-80 sm:h-64 sm:w-64"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="var(--color-primary)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      stroke="var(--color-primary)"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M78 22 L22 78"
                      stroke="var(--color-primary)"
                      strokeWidth="0.5"
                      strokeOpacity="0.5"
                    />
                    <rect
                      x="35"
                      y="35"
                      width="30"
                      height="30"
                      stroke="var(--color-primary)"
                      strokeWidth="1"
                      transform="rotate(45 50 50)"
                    />
                  </svg>
                )}

                {/* SVG 2: Laser Grid */}
                {i === 1 && (
                  <div className="relative h-full w-full p-8">
                    {/* Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(var(--color-primary) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {/* Laser */}
                    <div className="anim-laser absolute right-0 left-0 h-[3px] bg-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary)]" />
                  </div>
                )}

                {/* SVG 3: EKG Waveform */}
                {i === 2 && (
                  <svg
                    className="h-32 w-full px-8"
                    viewBox="0 0 500 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="anim-ekg"
                      d="M0 50 H 100 L 120 20 L 150 90 L 180 50 H 320 L 340 20 L 370 90 L 400 50 H 500"
                      stroke="var(--color-primary)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      style={{ filter: "drop-shadow(0 4px 6px rgba(15, 82, 186, 0.4))" }}
                    />
                  </svg>
                )}
              </div>

              {/* Text Side */}
              <div className="flex w-full flex-col md:w-1/2">
                <span className="mb-4 w-fit rounded-full bg-[var(--color-primary)]/10 px-3 py-1 font-sans text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
                  Phase {protocol.id}
                </span>
                <h3 className="mb-6 font-sans text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  {t(protocol.titleKey) || protocol.defaultTitle}
                </h3>
                <p className="text-lg leading-relaxed font-medium text-slate-500">
                  {t(protocol.descKey) || protocol.defaultDesc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
