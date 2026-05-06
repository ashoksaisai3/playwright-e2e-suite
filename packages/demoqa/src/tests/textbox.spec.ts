import { test, expect } from '@playwright/test';

test('DemoQA Text Box Validation', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');

  await page.fill('#userName', 'Ashok');
  await page.fill('#userEmail', 'ashoksai3@gmail.com');
  await page.fill('#currentAddress', 'Bangalore');
  await page.fill('#permanentAddress', 'Hyderabad');

  await page.locator('#submit').scrollIntoViewIfNeeded();
  await page.click('#submit');

  const output = page.locator('#output');

  await expect(output).toContainText('Ashok');
  await expect(output).toContainText('ashoksai3@gmail.com');
});