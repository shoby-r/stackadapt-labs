/**
 * This file contains the login tests for the application.
 * The tests verify the login functionality with valid and invalid credentials.
 *
 * @module loginTest
 */

/**
 * Represents a login test suite.
 *
 * @class
 * @name LoginTests
 */
import { expect, Page, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import '../hooks/setUp';
import { page } from '../hooks/setUp';

test.describe('Login Tests @login', () => {
    let loginPage:any;

    test.beforeEach(async ({}) => {
        loginPage = new LoginPage(page);
    });

    test('Verify login with valid credentials @smoke', async ({}) => {
        await loginPage.login('yang+admin@test-stackadapt.com', 'test12345678')
        await page.waitForLoadState('networkidle')
        const title = await loginPage.isLoggedIn();
        expect(title).toBe('StackAdapt - Native Advertising Platform');   
    });

    test('Verify login with invalid credentials display error message @smoke', async () => {
        await loginPage.login('yang+admin@test-stackadapt', 'test12345678')
        await page.waitForLoadState('networkidle')
        const errorMessageDisplayed = await loginPage.isLoginErrorDisplayed();
        expect(errorMessageDisplayed).toBe(true);
        const errorMessage = await loginPage.getLoginErrorMessage();
        expect(errorMessage).toBe('Invalid email or password.');
    });
});