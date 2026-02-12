import { test, expect } from '@playwright/test';

test("Automate Compound Interest Calculator", async ({ page }) => {
  await page.goto("https://cleartax.in/s/compound-interest-calculator/");

  await expect(page.locator("h1")).toHaveText("Compound Interest Calculator");

  console.log(await page.locator("h1").textContent());
  await page.selectOption("#compoundFrequency", { value: "yearly" });
  await page.locator("#principleAmount").fill("7000");
  await page.locator("#annualrate").fill("10");
  await page.selectOption("#periodUnit", { value: "years" });
  await page.locator("#periodInDigit").fill("1");

  // This is the block that contains "₹" + value (there can be multiple, you used nth(1))
  const interestBlock: any= page.locator("div.text-s-24.font-bold.text-blue-350").nth(1);

  //Assert on the locator (auto-waits)
  await expect(interestBlock).toContainText("700");

  //Print the actual value (the number is usually in the 2nd <span>)
  const amountSpan: any= interestBlock.locator("span").nth(1);
  const amountText: any= (await amountSpan.textContent())?.trim();
  console.log("Interest amount:", amountText); // should print "700"

  // Optional: assert the exact amount
  await expect(amountSpan).toHaveText("700");
});