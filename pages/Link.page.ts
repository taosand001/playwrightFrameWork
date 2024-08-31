import { Page } from '@playwright/test';

export class LinkPage {
	page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async clickLink(): Promise<void> {
		await this.page.locator('a').click();
	}
}
