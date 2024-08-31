import { PlaywrightTestConfig } from '@playwright/test';
import * as _ from 'lodash';

export const deepMerge = (
	target: PlaywrightTestConfig,
	source: PlaywrightTestConfig
): PlaywrightTestConfig => {
	return _.merge(target, source);
};
