import { expect, test } from '@playwright/test';
import HomePage from '../pages/Homepage.page';

test('open my page', async ({ page }) => {
	let myPage = new HomePage(page);

	myPage.openApp('https://reactnet-production.up.railway.app/');

	await expect(myPage.findElement(myPage.homepageELement.headerLogoText)).toBeVisible();
	await expect(myPage.findElement(myPage.homepageELement.signInText)).toBeVisible();
});
