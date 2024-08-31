import { Page } from '@playwright/test';

export class ComponentPage {
	page: Page;
	constructor(page: Page) {
		this.page = page;
	}

	async openApp(url: string): Promise<void> {
		await this.page.goto(url);
	}
}
