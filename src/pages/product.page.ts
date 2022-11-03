// playwright-dev-page.ts
import { Page } from '@playwright/test';

export class Product {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get header()            { return this.page.locator('[aria-current="location"]'); }

}
