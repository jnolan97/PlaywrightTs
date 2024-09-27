import { test as setup } from '@playwright/test';

// Generic Tests Setup - Playwright
setup.use({});

setup('do setup', async ({ page }) => {
  console.log('Setup');
});
