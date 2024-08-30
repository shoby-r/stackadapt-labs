import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  timeout: 8000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
     baseURL: 'http://localhost:3001/login',
    trace: 'on-first-retry',
    viewport: { width: 1920, height: 1080 },
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless: false },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox', headless: false },
    },

    {
      name: 'webkit',
      use: { browserName: 'webkit', headless: false },
    },
  ],
});
