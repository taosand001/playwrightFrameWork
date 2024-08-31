# Playwright Framework

This project is a Playwright framework designed for end-to-end testing. It provides configurations
and utilities to help you get started with writing and running tests efficiently.

## Usage

### Configuration

You can configure your Playwright tests by modifying the `playwright.config.ts` file. This file
contains the default configuration for your tests, including settings for browsers, timeouts, and
other test parameters.

### Deep Merge Utility

The `deepMerge` utility function allows you to deeply merge two Playwright test configurations. This
is useful when you want to combine configurations from different sources or environments.

#### Example Usage

```typescript
import { deepMerge } from './utils/deepMerge';
import baseConfig from './playwright.config';

const customConfig = {
	use: {
		baseURL: 'https://example.com',
	},
};

const mergedConfig = deepMerge(baseConfig, customConfig);
```
