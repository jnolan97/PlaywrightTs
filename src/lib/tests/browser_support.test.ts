import { test, chromium, webkit, firefox } from '@playwright/test';

test('Browser support demo', async () => {
  // For now using chromium to get basic config working
  const browserType = chromium;
  console.log('Running... ', browserType.name());
  const browser = await browserType.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3001/');
  await page.screenshot({ path: `./screenshots-${browserType.name()}.png` });
  //     const page = await browser.newPage();
  // for (const browserType of [chromium, webkit, firefox]) {

  //     console.log('Running: ', browserType.name());

  //     const browser = await browserType.launch();
  //     const page = await browser.newPage();

  //     await page.goto('http://localhost:process.env.PORT);
  //     await page.screenshot({ path: `pw-${browserType.name()}.png` });

  //     await page.close();
  //     await browser.close();

  // }
});
