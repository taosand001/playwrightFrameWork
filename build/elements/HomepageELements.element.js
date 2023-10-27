"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomepageELement {
    constructor(page) {
        this.page = page;
        this.headerLogoText = this.page.locator('.navbar-brand').last();
        this.signInText = this.page.locator('a', { hasText: 'sign in' });
        this.listOfProductText = this.page.getByText('List of our products', { exact: true });
    }
}
exports.default = HomepageELement;
