import { Locator } from '@playwright/test';
import { Page } from 'playwright';
import BasePage from './base.page';

export class GetStartedPage extends BasePage {
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly businessEmail: Locator;
    private readonly phoneNumber: Locator;
    private readonly companyName: Locator;
    private readonly jobTitle: Locator;
    private readonly companyType: Locator;
    private readonly companySize: Locator;
    private readonly country: Locator;
    private readonly province: Locator;
    private readonly annualProgrammaticBudget: Locator;
    private readonly howCanWeHelp: Locator;
    private readonly termsAndConditions: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.firstName = page.locator('//input[@id="first_name"]');
        this.lastName = page.locator('//input[@id="last_name"]');
        this.businessEmail = page.locator('//input[@id="email"]');
        this.phoneNumber = page.locator('//input[@id="phone"]');
        this.companyName = page.locator('//input[@id="company_name"]');
        this.jobTitle = page.locator('//input[@id="job_title"]');
        this.companyType = page.locator('//select[@id="company_type"]');
        this.companySize = page.locator('//select[@id="company_size"]');
        this.country = page.locator('//select[@id="country"]');
        this.province = page.locator('//select[@id="province"]');
        this.annualProgrammaticBudget = page.locator('//select[@id="budget"]');
        this.howCanWeHelp = page.locator('//select[@id="intention"]');
        this.termsAndConditions = page.locator('//input[@id="gdpr_consent"]');
        this.submitButton = page.locator('//button[@type="submit"]');
    }

    async navigateTo() {
        await this.page.goto('https://www.stackadapt.com/get-started');
    }

    async getTitle() {
        return await this.page.title();
    }

    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async enterBusinessEmail(businessEmail: string) {
        await this.businessEmail.fill(businessEmail);
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.phoneNumber.fill(phoneNumber);
    }

    async enterCompanyName(companyName: string) {
        await this.companyName.fill(companyName);
    }

    async enterJobTitle(jobTitle: string) {
        await this.jobTitle.fill(jobTitle);
    }

    async selectCompanyType(companyType: string) {
        await this.companyType.selectOption({ label: companyType });
    }

    async selectCompanySize(companySize: string) {
        await this.companySize.selectOption({ label: companySize });
    }

    async selectCountry(country: string) {
        await this.country.selectOption({ label: country });
    }

    async selectProvince(province: string) {
        await this.province.selectOption({ label: province });
    }

    async selectAnnualProgrammaticBudget(annualProgrammaticBudget: string) {
        await this.annualProgrammaticBudget.selectOption({ label: annualProgrammaticBudget });
    }

    async selectHowCanWeHelp(howCanWeHelp: string) {
        await this.howCanWeHelp.selectOption({ label: howCanWeHelp });
    }

    async checkTermsAndConditions() {
        await this.termsAndConditions.check();
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async getErrorMessage(): Promise<string | null>{
        return await this.page.locator('p[@class="mb-0 sa-error"]').textContent();
    }
}

