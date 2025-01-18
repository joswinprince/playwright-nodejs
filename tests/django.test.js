const {test, expect}    = require('@playwright/test');
const DjangoLogin = require('../pages/djangoLogin');
const config = require('../config/env.json');
const { allure } = require('allure-playwright');

test.describe('Django Login Test', () => {
  test('Login to Django', async ({page}) => {
    const djangoLogin = new DjangoLogin(page);
    await djangoLogin.navigate(config.django.url);
    await djangoLogin.login(config.django.username, config.django.password);
    await expect(page).toHaveURL(`${config.django.url}`);
    await expect(page).toHaveTitle(`${config.django.title}`);
  });
  
});