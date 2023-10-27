import { Page, Locator } from '@playwright/test';
import HomepageELement from '../elements/HomepageELements.element';

export default class HomePage {
	page: Page;
	homepageELement: HomepageELement;

	constructor(page: Page) {
		this.page = page;
		this.homepageELement = new HomepageELement(this.page);
	}

	async openApp(url: string): Promise<void> {
		await this.page.goto(url);
	}

	async clickElement(element: Locator): Promise<void> {
		await element.click();
	}

	async checkElement(element: Locator): Promise<void> {
		await element.check();
	}

	findElement(element: Locator): Locator {
		return element;
	}

	async findELements(element: Locator): Promise<Locator[]> {
		return element.all();
	}
}
