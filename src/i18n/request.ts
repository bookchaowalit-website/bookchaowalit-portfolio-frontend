import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Helper to load messages for a given locale - can be used directly from layouts
export async function loadMessages(locale: string) {
  if (!routing.locales.includes(locale as 'en' | 'th')) {
    locale = routing.defaultLocale;
  }
  return (await import(`../../messages/${locale}.json`)).default;
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as 'en' | 'th')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await loadMessages(locale)
  };
});