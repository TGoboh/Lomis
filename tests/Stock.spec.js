const { test, expect } = require("@playwright/test");


test("Super Admin Successful login", async ({ page }) => {
    //Navigate to page URL
    await page.goto("https://lomis-suite-dev.eha.im/admin");

    //Print page title
    console.log(await page.title());

    //Verify Page title
    await expect(page).toHaveTitle("[DEV] LoMIS Suite");

    //Enter Super Admin Username
    await page.locator("#id_username").fill("admin");

    //Enter Super Admin Password
    await page.locator("[type='password']").fill("ZdhgY0m5CW2Q2OTKvHqvB6et");

    //Click submit button
    await page.locator("#submit-id-submit").click();

})


test("Super Admin Successful Sign out", async ({ page }) => {
    //Navigate to page URL
    await page.goto("https://lomis-suite-dev.eha.im/admin");

    //Print page title
    console.log(await page.title());

    //Verify Page title
    await expect(page).toHaveTitle("[DEV] LoMIS Suite");

    //Enter Super Admin Username
    await page.locator("#id_username").fill("admin");

    //Enter Super Admin Password
    await page.locator("[type='password']").fill("ZdhgY0m5CW2Q2OTKvHqvB6et");

    //Click submit button
    await page.locator("#submit-id-submit").click();

    //Click Sign out button
    await page.locator("[type='submit']").click();

})

test("Tenant User login", async ({ page }) => {
    //Navigate to page URL
    await page.goto("https://lomis-suite-dev.eha.im");

    //Print page title
    console.log(await page.title());

    //Verify Page title
    await expect(page).toHaveTitle("[DEV] LoMIS Suite");

    //Select Sokoto Tenant
    await page.locator("text=Sokoto").click();

    //Click Sign in Button
    await page.locator("[class='btn btn-primary p-3']").click();

    //Enter Super Admin Username
    await page.locator("#id_username").fill("thankgod.oboh");

    //Enter Super Admin Password
    await page.locator("[type='password']").fill("Kingsley$27");

    //Click submit button
    await page.locator("#submit-id-submit").click();

})


test("Tenant User Sign out", async ({ page }) => {
    //Navigate to page URL
    await page.goto("https://lomis-suite-dev.eha.im");

    //Print page title
    console.log(await page.title());

    //Verify Page title
    await expect(page).toHaveTitle("[DEV] LoMIS Suite");

    //Select Sokoto Tenant
    await page.locator("text=Sokoto").click();

    //Click Sign in Button
    await page.locator("[class='btn btn-primary p-3']").click();

    //Enter Super Admin Username
    await page.locator("#id_username").fill("thankgod.oboh");

    //Enter Super Admin Password
    await page.locator("[type='password']").fill("Kingsley$27");

    //Click submit button
    await page.locator("#submit-id-submit").click();

    //Open Profile options
    await page.locator("[id='logged-in-user-info']").click();

    //Click Sign out button
    await page.locator("text=Sign Out").click();


})