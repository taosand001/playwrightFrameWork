import { Locator, Page } from '@playwright/test';

export default class HomepageELement {
	page: Page;
	headerLogoText: Locator;
	signInText: Locator;
	listOfProductText: Locator;

	constructor(page: Page) {
		this.page = page;
		this.headerLogoText = this.page.locator('.navbar-brand').last();
		this.signInText = this.page.locator('a', { hasText: 'sign in' });
		this.listOfProductText = this.page.getByText('List of our products', { exact: true });
	}
}
