import { expect } from '@playwright/test';
import { test } from '@base/fixtures';
import { Product } from '@pages/product.page';

test('product page 1', async ({ page }) => {
    const ProductPage = new Product(page);
    await page.goto('https://www.softwareadvice.com/crm/hubspot-profile/');
    const h1 = await ProductPage.header;
    await expect(h1).toContainText('Salesforce Sales Cloud'); // fail case
});

test('product page 2', async ({ page }) => {
    const ProductPage = new Product(page);
    await page.goto('https://www.softwareadvice.com/crm/hubspot-profile/');
    const h1 = await ProductPage.header;
    await expect(h1).toContainText('HubSpot CRM');
    await expect(page).toHaveURL(/.*hubspot/);
});
