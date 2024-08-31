import { PlaywrightTestConfig } from '@playwright/test';
import { deepMerge } from '../utils/deepMerge';

export const mergeConfig = (
	userConfig: PlaywrightTestConfig,
	defaultConfig: PlaywrightTestConfig
): PlaywrightTestConfig => {
	return deepMerge(defaultConfig, userConfig);
};
