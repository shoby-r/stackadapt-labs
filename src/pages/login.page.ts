import { Locator } from '@playwright/test';
import { Page } from 'playwright';
import BasePage from './base.page';

export class LoginPage extends BasePage {
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly submitButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.email = page.locator('//input[@id="login-email"]');
        this.password = page.locator('//input[@id="login-password"]');
        this.submitButton = page.locator('//button[@data-testid="login-button"]');
        this.errorMessage = page.locator('//p[@id="helper-label-login-password"]');
    }

    async getTitle() {
        return await this.page.title();
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSubmitButton();
    }

    async isLoggedIn() {
        return await this.page.title();
    }

    async isLoginErrorDisplayed() {
        return await this.errorMessage.isVisible();
    }

    async getLoginErrorMessage() {
        return await this.errorMessage.innerText();
    }
}

