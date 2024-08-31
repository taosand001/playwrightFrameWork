import { PlaywrightTestConfig } from '@playwright/test';

export const mergeConfig = (
	userConfig: PlaywrightTestConfig,
	defaultConfig: PlaywrightTestConfig
): PlaywrightTestConfig => {
	return {
		...defaultConfig,
		...userConfig,
	};
};
