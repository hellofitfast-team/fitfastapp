"use client";

import dynamic from "next/dynamic";

const ServiceWorkerRegistration = dynamic(
  () => import("./ServiceWorkerRegistration").then((m) => m.ServiceWorkerRegistration),
  { ssr: false },
);
const OneSignalProvider = dynamic(
  () => import("./OneSignalProvider").then((m) => m.OneSignalProvider),
  { ssr: false },
);

export function PWAProviders() {
  return (
    <>
      <ServiceWorkerRegistration />
      <OneSignalProvider />
    </>
  );
}
