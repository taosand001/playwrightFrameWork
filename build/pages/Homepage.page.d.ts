import { Page, Locator } from '@playwright/test';
import HomepageELement from '../elements/HomepageELements.element';
export default class HomePage {
    page: Page;
    homepageELement: HomepageELement;
    constructor(page: Page);
    openApp(url: string): Promise<void>;
    clickElement(element: Locator): Promise<void>;
    checkElement(element: Locator): Promise<void>;
    findElement(element: Locator): Locator;
    findELements(element: Locator): Promise<Locator[]>;
}
//# sourceMappingURL=Homepage.page.d.ts.map