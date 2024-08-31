"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeConfig = exports.defaultConfig = exports.ButtonPage = exports.ComponentPage = exports.LinkPage = exports.HomePageELement = exports.Home = void 0;
const Homepage_page_1 = require("./pages/Homepage.page");
const HomepageELements_element_1 = require("./elements/HomepageELements.element");
exports.Home = Homepage_page_1.default;
exports.HomePageELement = HomepageELements_element_1.default;
var Link_page_1 = require("./pages/Link.page");
Object.defineProperty(exports, "LinkPage", { enumerable: true, get: function () { return Link_page_1.LinkPage; } });
var Component_page_1 = require("./pages/Component.page");
Object.defineProperty(exports, "ComponentPage", { enumerable: true, get: function () { return Component_page_1.ComponentPage; } });
var Button_page_1 = require("./pages/Button.page");
Object.defineProperty(exports, "ButtonPage", { enumerable: true, get: function () { return Button_page_1.ButtonPage; } });
var defaultConfig_1 = require("./helpers/defaultConfig");
Object.defineProperty(exports, "defaultConfig", { enumerable: true, get: function () { return defaultConfig_1.defaultConfig; } });
var mergeConfig_1 = require("./helpers/mergeConfig");
Object.defineProperty(exports, "mergeConfig", { enumerable: true, get: function () { return mergeConfig_1.mergeConfig; } });
__exportStar(require("@playwright/test"), exports);
