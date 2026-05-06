import { test, expect } from '../fixtures/testDataFixture';
import { FormPage } from '../pages/formPage';

test('DemoQA Practice Form Submission', async ({ page, testData }) => {

  const formPage = new FormPage(page);

  await formPage.navigate();

  await formPage.fillForm(testData);

  await formPage.submitForm();

  const modal = await formPage.getSuccessModal();

  await expect(modal).toBeVisible();

  await expect(modal).toContainText(testData.firstName);
  await expect(modal).toContainText(testData.lastName);
  await expect(modal).toContainText(testData.email);
  await expect(modal).toContainText(testData.mobile);
});