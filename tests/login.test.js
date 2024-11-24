const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const config = require('../config/env.json');
const { allure } = require('allure-playwright');


async function navigateToLoginPage(page) {
  allure.step('Navigate to login page', async () => {
    await page.goto('https://example.com/login',{ waitUntil: 'networkidle' });
  });
}

test.describe('Fast.com Test', () => {
  test('Navigate in to Fast.com application', async ({ page }) => {
    allure.feature('Login Feature');
    const loginPage = new LoginPage(page);
    await loginPage.navigate(config.checknetspeed.baseUrl);
   // await loginPage.login(config.username, config.password);
   
   await expect(page).toHaveURL(`${config.checknetspeed.baseUrl}`);
   await expect(page).toHaveTitle(`${config.checknetspeed.title}`);
   await page.waitForSelector(`${config.checknetspeed.speed_check}`, { state: 'visible' });
   await page.waitForSelector(`${config.checknetspeed.speed_check}`, { timeout: 40000 },{ state: 'hidden' });
   await page.waitForSelector(`${config.checknetspeed.speedresults}`, { timeout: 40000 }, { state: 'visible' });
   const inputValue = await page.locator('xpath='+`${config.checknetspeed.speedresults}`).evaluate(el => el.innerText.trim());
console.log('Input Value:', inputValue);
allure.attachment('Input Value', inputValue, 'text/plain');

   
   
  });

 // test('Failed Login ', async ({page}) => {});

});

// test('Test Login', async ({ page }) => {
//   loginPage = new LoginPage(page);
//   await navigateToLoginPage(loginPage);
//   // Add further steps here
// });
 