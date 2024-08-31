"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const Homepage_page_1 = require("../pages/Homepage.page");
(0, test_1.test)('open my page', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    let myPage = new Homepage_page_1.default(page);
    myPage.openApp('/');
    yield (0, test_1.expect)(myPage.findElement(myPage.homepageELement.headerLogoText)).toBeVisible();
    yield (0, test_1.expect)(myPage.findElement(myPage.homepageELement.signInText)).toBeVisible();
}));
