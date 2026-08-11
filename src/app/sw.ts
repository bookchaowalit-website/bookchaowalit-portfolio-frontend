import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

// This declares the global variable `__SW_MANIFEST` to TypeScript.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: WorkerGlobalScope & typeof globalThis;

/** Legacy path deprecated in favor of /data/data-products/*.json envelopes. */
const LEGACY_SCRAPER_DASHBOARD = /scraper-dashboard\.json/i;

/**
 * Drop any cached copy of the deprecated scraper-dashboard JSON so offline
 * clients cannot treat it as a live data source.
 */
async function purgeLegacyScraperDashboardCaches(): Promise<void> {
  const names = await caches.keys();
  await Promise.all(
    names.map(async (name) => {
      const cache = await caches.open(name);
      const keys = await cache.keys();
      await Promise.all(
        keys
          .filter((request) => LEGACY_SCRAPER_DASHBOARD.test(request.url))
          .map((request) => cache.delete(request)),
      );
    }),
  );
}

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  disableDevLogs: process.env.NODE_ENV === "production",
});

serwist.addEventListeners();

self.addEventListener("activate", (event) => {
  const extendable = event as Event & { waitUntil?: (promise: Promise<unknown>) => void };
  extendable.waitUntil?.(purgeLegacyScraperDashboardCaches());
});
