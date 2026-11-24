import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';

const review = '.impeccable/review';

for (const theme of ['light', 'dark']) {
  test(`Studio technique — responsive et accessibilité ${theme}`, async ({ page }) => {
    await mkdir(review, { recursive: true });
    await page.addInitScript(value => localStorage.setItem('portfolio-theme', value), theme);
    for (const width of [1440, 1024, 820, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('./');
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator('#home-title')).toBeVisible();
      await expect(page.locator('#accueil .button').first()).toBeInViewport({ ratio: 1 });
      await expect(page.locator('#projets article')).toHaveCount(5);
      await expect(page.locator('#accueil img')).toHaveCount(1);
      await expect(page.locator('#accueil img')).toHaveAttribute('src', /photo_profil\.webp$/);
      await expect(page.locator('img[src$="interface-kanban.jpg"]')).toHaveCount(1);
      await expect(page.locator('#projet-05 img[src$="interface-kanban.jpg"]')).toBeVisible();
      expect(await page.evaluate(() => document.fonts.check('600 24px Manrope'))).toBe(true);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: `${review}/studio-${theme}-${width}.png`, fullPage: true });
      if (width === 1440 || width === 390) {
        await page.screenshot({ path: `${review}/studio-hero-${theme}-${width}.png` });
        if (width === 1440) {
          for (const id of ['projets', 'competences', 'experience', 'contact']) {
            await page.locator(`#${id}`).evaluate(el => window.scrollTo({ top: el.offsetTop - 104, behavior: 'instant' }));
            await page.screenshot({ path: `${review}/studio-${id}-${theme}.png` });
          }
        }
        const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
        expect(result.violations).toEqual([]);
      }
    }
  });
}

test('Projets, ancres et ressources conservées', async ({ page, request }) => {
  await page.goto('./');
  await expect(page.getByRole('group', { name: 'Filtrer les projets par technologie' })).toHaveCount(0);
  await expect(page.locator('#projets article')).toHaveCount(5);
  await page.getByRole('link', { name: 'Voir mes projets', exact: true }).click();
  await expect(page.locator('#projets article')).toHaveCount(5);
  await expect(page.locator('#projets')).toBeInViewport();
  await expect(page.locator('#projets')).toBeFocused();
  for (const path of ['CV/CV_Teikinui_DECIAN_Cloud.pdf', 'projects/candidatures/interface-complete.png', 'fonts/manrope-variable.ttf']) {
    expect((await request.get(path)).ok()).toBe(true);
  }
});

test('Menu mobile, thème persistant et ancienne route', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Activer le thème sombre' }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.locator('#menu-toggle').click();
  await expect(page.getByRole('navigation', { name: 'Navigation principale' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#menu-toggle')).toBeFocused();
  await expect(page.locator('#menu-toggle')).toHaveAttribute('aria-expanded', 'false');
  await page.locator('#menu-toggle').click();
  await page.getByRole('navigation', { name: 'Navigation principale' }).getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page.locator('#menu-toggle')).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#contact')).toBeInViewport();
  await page.goto('contact');
  await expect(page).toHaveURL(/\/#contact$/);
  await expect(page.locator('#contact')).toBeFocused();
});

test('Formulaire : validation et mailto honnête', async ({ page }) => {
  await page.goto('./#contact');
  await page.getByRole('button', { name: 'Préparer le message' }).click();
  await expect(page.locator('#contact-name')).toBeFocused();
  await page.locator('#contact-name').fill('Test local');
  await expect(page.locator('#name-error')).toHaveCount(0);
  await page.locator('#contact-email').fill('test@example.test');
  await page.locator('#contact-message').fill('Bonjour, ceci est un essai local du formulaire.');
  await page.getByRole('button', { name: 'Préparer le message' }).click();
  await expect(page.getByText('Aucun e-mail n’a encore été envoyé.', { exact: false })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ouvrir ma messagerie' })).toHaveAttribute('href', /^mailto:teikinui\.decian@gmail\.com\?subject=/);
  await page.locator('#contact-message').fill('Message modifié : le brouillon doit être invalidé.');
  await expect(page.getByRole('link', { name: 'Ouvrir ma messagerie' })).toHaveCount(0);
});

test('Focus, pression à 10 % et réduction des mouvements', async ({ page }) => {
  await page.goto('./');
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Animation.enable');
  await cdp.send('Animation.setPlaybackRate', { playbackRate: .1 });
  const button = page.locator('#accueil .button').first();
  await button.focus();
  expect(await button.evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe('none');
  await button.hover();
  await page.mouse.down();
  await expect.poll(() => button.evaluate(el => new DOMMatrix(getComputedStyle(el).transform).a)).toBeCloseTo(.96, 2);
  await page.screenshot({ path: `${review}/studio-press.png` });
  await page.mouse.move(0, 0);
  await page.mouse.up();
  await cdp.send('Animation.setPlaybackRate', { playbackRate: 1 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await button.hover();
  await page.mouse.down();
  expect(await button.evaluate(el => getComputedStyle(el).transform)).toBe('none');
  await page.mouse.move(0, 0);
  await page.mouse.up();
});
