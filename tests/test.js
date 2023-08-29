import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Random Name Picker');
});

test('has heading title on page', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Random Name Picker' })).toBeVisible();
});
