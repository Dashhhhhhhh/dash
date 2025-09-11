import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test('Projects page should have proper accessibility features', async ({ page }) => {
    await page.goto('/projects');

    // Check for h1 presence
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText('Projects');

    // Check for h2 elements
    const h2Elements = page.locator('h2');
    await expect(h2Elements).toHaveCount(await h2Elements.count()); // At least 1 h2

    // Check that images have alt attributes
    const images = page.locator('img');
    for (const img of await images.all()) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
      expect(alt).not.toBe('');
    }

    // Test keyboard navigation
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Test that filters are keyboard accessible
    const searchInput = page.locator('input[placeholder*="Search"]');
    await searchInput.focus();
    await expect(searchInput).toBeFocused();

    // Test tab navigation through filter elements
    await page.keyboard.press('Tab');
    const nextFocused = page.locator(':focus');
    await expect(nextFocused).not.toBe(searchInput);
  });

  test('Individual project page should have proper accessibility features', async ({ page }) => {
    // Navigate to first project
    await page.goto('/projects/cross-sectional-momentum');

    // Check for h1 presence
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Check for multiple h2 elements (sections)
    const h2Elements = page.locator('h2');
    await expect(h2Elements).toHaveCount(await h2Elements.count()); // At least 1 h2

    // Check that images have alt attributes
    const images = page.locator('img');
    for (const img of await images.all()) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
      expect(alt).not.toBe('');
    }

    // Test skip link
    const skipLink = page.locator('a[href="#project-content"]');
    await expect(skipLink).toBeVisible();

    // Test keyboard navigation
    await page.keyboard.press('Tab');
    let focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Navigate through focusable elements
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      focusedElement = page.locator(':focus');
      await expect(focusedElement).toBeVisible();
    }
  });

  test('Keyboard navigation cycles through interactive elements', async ({ page }) => {
    await page.goto('/projects');

    // Get all focusable elements
    const focusableElements = page.locator('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

    // Start tab navigation
    await page.keyboard.press('Tab');
    let focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Tab through several elements to ensure cycling works
    for (let i = 0; i < Math.min(10, await focusableElements.count()); i++) {
      await page.keyboard.press('Tab');
      focusedElement = page.locator(':focus');
      await expect(focusedElement).toBeVisible();
    }
  });

  test('Search and filter functionality is keyboard accessible', async ({ page }) => {
    await page.goto('/projects');

    // Focus search input
    const searchInput = page.locator('input[placeholder*="Search"]');
    await searchInput.focus();
    await expect(searchInput).toBeFocused();

    // Type in search
    await page.keyboard.type('quantitative');
    await expect(searchInput).toHaveValue('quantitative');

    // Clear search with Escape
    await page.keyboard.press('Escape');
    await expect(searchInput).toHaveValue('');

    // Test filter button interaction
    const filterButtons = page.locator('button').filter({ hasText: /^[a-zA-Z]+$/ });
    if (await filterButtons.count() > 0) {
      const firstFilter = filterButtons.first();
      await firstFilter.focus();
      await expect(firstFilter).toBeFocused();

      // Activate filter
      await page.keyboard.press('Enter');
      await expect(firstFilter).toHaveAttribute('aria-pressed', 'true');
    }
  });
});
