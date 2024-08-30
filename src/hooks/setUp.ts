import {test,  Page } from "@playwright/test";

let page:Page

test.beforeAll(async({browser})=> {
    console.log('beforeAll hook');
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('/');
});

export { page };