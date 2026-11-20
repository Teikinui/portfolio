import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import AxeBuilder from '@axe-core/playwright';

const shots = '.impeccable/review';

for (const theme of ['dark', 'light']) {
  test(`galerie responsive — ${theme}`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(value => localStorage.setItem('portfolio-theme', value), theme);
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width > 1000 ? 900 : 844 });
      await page.goto('./');
      await page.evaluate(() => document.fonts.ready);
      await page.locator('img').evaluateAll(images => images.forEach(image => { image.loading = 'eager'; }));
      await page.waitForFunction(() => [...document.images].every(image => image.complete && image.naturalWidth > 0));
      await expect(page.locator('#showcase-panel img')).toBeVisible();
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
      const layout = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth,
        overflow: [...document.querySelectorAll('body *')].filter(element => { const r = element.getBoundingClientRect(); return r.width > 0 && r.right > innerWidth + 1; }).slice(0, 8).map(element => ({ tag: element.tagName, class: element.className, right: element.getBoundingClientRect().right })) }));
      if (layout.scroll > layout.width + 1) console.log(theme, width, JSON.stringify(layout));
      expect.soft(layout.scroll).toBeLessThanOrEqual(layout.width + 1);
      expect(await page.evaluate(() => document.fonts.check('550 24px Onest') && document.fonts.check('400 16px "Public Sans"'))).toBeTruthy();
      await expect(page.locator('#projet-05')).toBeAttached();
      await expect(page.getByRole('tab', { name: 'Candidatures', exact: true })).toHaveAttribute('aria-selected', 'true');
      fs.mkdirSync(shots, { recursive: true });
      await page.screenshot({ path: `${shots}/gallery-${theme}-${width}.png`, fullPage: true, animations: 'disabled' });
      if (width === 1440 || width === 390) {
        await page.screenshot({ path: `${shots}/hero-${theme}-${width}.png`, animations: 'disabled' });
        const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
        expect.soft(accessibility.violations).toEqual([]);
      }
      if (width === 1440) {
        await page.locator('#projets').screenshot({ path: `${shots}/projects-${theme}.png`, animations: 'disabled' });
        await page.locator('#contact').screenshot({ path: `${shots}/contact-${theme}.png`, animations: 'disabled' });
      }
    }
    expect(errors).toEqual([]);
  });
}

test('galerie au clavier, dossiers, filtres et liens', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('./');
  const tabs = page.getByRole('tab');
  await tabs.last().focus();
  await page.keyboard.press('Home');
  await expect(tabs.first()).toBeFocused();
  await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab', { name: 'Cloud sécurisé' })).toBeFocused();
  await expect(page.locator('#showcase-panel')).toContainText('Sites et applications web sécurisés');
  await page.getByRole('tab', { name: 'TripTrap', exact: true }).click();
  expect(await page.evaluate(() => { const ids = [...document.querySelectorAll('[id]')].map(e => e.id); return ids.length === new Set(ids).size; })).toBeTruthy();
  await page.getByRole('tab', { name: 'Candidatures', exact: true }).click();
  const capture = page.locator('#showcase-panel a[href$="interface-complete.png"]');
  expect((await page.request.get(await capture.getAttribute('href'))).ok()).toBeTruthy();
  await expect(capture).toHaveAttribute('target', '_blank');
  await page.getByRole('button', { name: 'Java', exact: true }).click();
  await expect(page.locator('#projets article')).toHaveCount(1);
  await expect(page.locator('#projet-04')).toBeVisible();
  await page.locator('#showcase-panel').getByRole('link', { name: 'Voir le projet', exact: true }).click();
  await expect(page.locator('#projets article')).toHaveCount(5);
  await expect(page).toHaveURL(/#projet-05$/);
  await expect(page.locator('#projet-05')).toBeInViewport();
  const cv = await page.request.get('/portfolio/CV/CV_Teikinui_DECIAN_Cloud.pdf');
  expect(cv.ok()).toBeTruthy();
  expect(cv.headers()['content-type']).toContain('pdf');
});

test('menu mobile, thèmes persistants, ancienne route et mouvement réduit', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  const menu = page.locator('#menu-toggle');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('navigation', { name: 'Navigation principale' }).getByRole('link', { name: 'Accueil' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await page.getByRole('button', { name: 'Activer le thème clair' }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.goto('contact');
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator('#contact')).toBeInViewport();
});

test('formulaire : erreurs corrigées et mailto honnête', async ({ page }) => {
  await page.goto('./');
  const form = page.getByRole('form', { name: 'Préparer un e-mail de contact' });
  await form.getByRole('button', { name: 'Préparer le message' }).click();
  await expect(page.locator('#contact-name')).toBeFocused();
  await expect(page.locator('#name-error')).toBeVisible();
  await page.locator('#contact-name').fill('Teikinui');
  await expect(page.locator('#name-error')).toHaveCount(0);
  await page.locator('#contact-email').fill('recrutement@example.com');
  await page.locator('#contact-message').fill('Bonjour, échangeons au sujet de votre candidature en alternance.');
  await form.getByRole('button', { name: 'Préparer le message' }).click();
  await expect(form).toContainText('Aucun e-mail n’a encore été envoyé.');
  await expect(form.getByRole('link', { name: 'Ouvrir ma messagerie' })).toHaveAttribute('href', /^mailto:teikinui\.decian@gmail\.com\?/);
  await page.locator('#contact-message').fill('Un nouveau message suffisamment long pour rester valide.');
  await expect(form.getByRole('link', { name: 'Ouvrir ma messagerie' })).toHaveCount(0);
});
