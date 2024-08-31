import { PlaywrightTestConfig } from '@playwright/test';

export const deepMerge = (target: any, source: any): any => {
	for (const key in source) {
		if (source[key] instanceof Object) {
			Object.assign(source[key], deepMerge(target[key], source[key]));
		}
	}

	return { ...target, ...source };
};
