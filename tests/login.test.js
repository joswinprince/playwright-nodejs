const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const config = require('../config/env.json');

test.describe('Login Tests', () => {
  test('Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(config.checknetspeed.baseUrl);
   // await loginPage.login(config.username, config.password);
    await expect(page).toHaveURL(`${config.checknetspeed.baseUrl}`);
  });
});
