import { test as base } from '@playwright/test';
import { getTestData } from './excelUtil';

type TestData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

export const test = base.extend<{
  testData: TestData;
}>({
  testData: async ({}, use) => {

    const data = getTestData();

    await use(data);
  },
});

export { expect } from '@playwright/test';