import { test as setup } from '@playwright/test';

/**
 * Generic db setup Template
 * TODO: Further implement / connect cloud services
 */
setup.use({});

setup('Populate DB', async ({ page }) => {
  console.log('Populate DB');
});
