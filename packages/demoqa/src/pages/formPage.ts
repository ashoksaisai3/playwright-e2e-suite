import { Page } from '@playwright/test';

export class FormPage {
  constructor(private page: Page) {}

  // Navigate to DemoQA form
  async navigate() {
    await this.page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded' });
  }

  // Fill form using CSV data
  async fillForm(data: any) {
    await this.page.locator('#firstName').fill(data.firstName);
    await this.page.locator('#lastName').fill(data.lastName);
    await this.page.locator('#userEmail').fill(data.email);

    // ✅ Gender is mandatory
    await this.page.locator('label[for="gender-radio-1"]').click();

    await this.page.locator('#userNumber').fill(data.mobile);
  }

  // Submit form
  async submitForm() {
    await this.page.locator('#submit').click();
  }

  // Get success modal
  async getSuccessModal() {
    return this.page.locator('.modal-content');
  }
}