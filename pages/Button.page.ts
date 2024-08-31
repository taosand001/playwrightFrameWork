import {Page, Locator} from '@playwright/test';

export class ButtonPage {
    page: Page;
    buttonElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonElement = this.page.locator('button');
    }

    async clickButton(): Promise<void> {
        await this.buttonElement.click();
    }
}

