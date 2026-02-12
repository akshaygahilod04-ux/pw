// @ts-check
import { test, expect } from '@playwright/test';

//scenario 1
test("Automate the process of logging in SWAGLABS,adding two items in the cart,checking out and verifying the message displayed on the webpage.", async ({
  page,
}) => {
  tag: "@BeforeMethod";
  await page.goto("https://www.saucedemo.com/v1/index.html"); //goto webiste
  await page.getByPlaceholder("Username").fill("standard_user"); // fill username
  await page.getByPlaceholder("Password").fill("secret_sauce"); // fill password

  page.on("dialog", (dialog) => dialog.accept()); // handle alert
  await page.locator("#login-button").click(); // login
  await page.waitForTimeout(300);
  tag: "@Test";
  
  await page.getByText("ADD TO CART").nth(0).click(); // add item to cart
  await page.getByText("ADD TO CART").nth(1).click(); // second item to cart
  await page.locator("#shopping_cart_container").click(); // click on cart
  await page.getByText("CHECKOUT").click(); // click on checkout
  await page.getByPlaceholder("First Name").fill("Chayan"); // enter first name
  await page.getByPlaceholder("Last Name").fill("Roy"); // enter last name
  await page.getByPlaceholder("Zip/Postal Code").fill("128799"); // enter zip code
  await page.getByText("CONTINUE").click(); // enter continue
  await page.getByText("FINISH").click(); // enter finish
  expect(await page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  ); // check the message
  let msg :string|null = await page.locator(".complete-header").textContent(); // printing the message
  console.log(msg);
  await page.locator(".bm-burger-button").click(); // click on hambruger nav icon
  await page.getByText("Logout").click(); // click logout
  // await page.waitForTimeout(20000);
  // await browser.close();
});
