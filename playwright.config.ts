import { defineConfig, devices } from '@playwright/test';

// Prefer a dedicated port so local services on :3000 do not collide.
const port = process.env.PORT || process.env.PLAYWRIGHT_PORT || '4318';
const baseURL = process.env.BASE_URL || `http://127.0.0.1:${port}`;
const managedServer = !process.env.BASE_URL;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['iPhone 14'] },
    },
  ],
  // Skip auto webServer when BASE_URL points at an already-running host.
  ...(managedServer
    ? {
        webServer: {
          command: `npx next dev -H 127.0.0.1 -p ${port}`,
          url: baseURL,
          reuseExistingServer: !process.env.CI,
          timeout: 180_000,
        },
      }
    : {}),
});
