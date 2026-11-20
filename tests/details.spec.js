import { test, expect } from '@playwright/test';

test('états focus/pression et transitions à 10 %', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('./');
  const client = await page.context().newCDPSession(page);
  await client.send('Animation.enable');
  await client.send('Animation.setPlaybackRate', { playbackRate: 0.1 });
  const button = page.locator('#accueil .button').first();
  await button.scrollIntoViewIfNeeded();
  await button.focus();
  expect(await button.evaluate(element => getComputedStyle(element).outlineWidth)).toBe('3px');
  const base = await button.evaluate(element => getComputedStyle(element).backgroundColor);
  await button.hover();
  await expect.poll(() => button.evaluate(element => getComputedStyle(element).backgroundColor)).not.toBe(base);
  await page.mouse.down();
  await expect.poll(() => button.evaluate(element => new DOMMatrixReadOnly(getComputedStyle(element).transform).a)).toBeCloseTo(0.96, 2);
  await page.screenshot({ path: '.impeccable/review/press-10-percent.png' });
  await page.mouse.up();
  await expect.poll(() => button.evaluate(element => new DOMMatrixReadOnly(getComputedStyle(element).transform).a)).toBeCloseTo(1, 2);
  await client.send('Animation.setPlaybackRate', { playbackRate: 1 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await button.hover();
  await page.mouse.down();
  expect(await button.evaluate(element => getComputedStyle(element).transform)).toBe('none');
  await page.mouse.up();
  await client.detach();
});

test('toutes les pièces de la galerie restent lisibles et accessibles sur téléphone', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto('./');
  for (const name of ['Cloud sécurisé', 'NAS personnel', 'Job board', 'TripTrap', 'Candidatures']) {
    await page.getByRole('tab', { name, exact: true }).click();
    await expect(page.getByRole('tab', { name, exact: true })).toHaveAttribute('aria-selected', 'true');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    await expect(page.locator('#showcase-panel').getByRole('link', { name: 'Voir le projet', exact: true })).toBeVisible();
    if (name === 'Cloud sécurisé' || name === 'NAS personnel') {
      await page.locator('#showcase-panel').screenshot({ path: `.impeccable/review/mobile-${name === 'Cloud sécurisé' ? 'cloud' : 'nas'}.png` });
    }
  }
});
