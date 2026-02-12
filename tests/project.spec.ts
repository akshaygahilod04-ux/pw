import { test, expect, Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hdfc.bank.in/');
  await page.getByRole('link', { name: 'Discover Products ' }).click();
  await page.locator('#desktop-header').getByText('Calculator', { exact: true }).click();
  await page.getByRole('link', { name: 'Home Loan EMI Calculator' }).first().click();
  await page.getByRole('textbox', { name: 'Loan Amount' }).click();
  await page.getByRole('textbox', { name: 'Loan Amount' }).fill('5000000');
  await page.getByRole('textbox', { name: 'Laon Tenure' }).fill('20');
  await page.getByRole('textbox', { name: 'Interest Rate' }).fill('9');

  const emi = page.locator('#homeLoanEmiResult');
  const totalAmount = page.locator('#homeLoanFixedTotalAmount');
  const fixedEmi = page.locator('#homeLoanFixedEmiResult');
  const principalAmt = page.locator('#homeLoanFixedPrincipalAmt');

  await expect(emi).toHaveText('44,986');
  await expect(totalAmount).toHaveText('1,07,96,711');
  await expect(fixedEmi).toHaveText('57,96,711');
  await expect(principalAmt).toHaveText('50,00,000');


})

test('test2', async ({ page }) => {
await page.goto('https://www.hdfc.bank.in/');
  await page.getByRole('link', { name: 'Discover Products ' }).click();
  await page.locator('#desktop-header').getByText('Calculator', { exact: true }).click();
  await page.getByRole('link', { name: 'Home Loan EMI Calculator' }).first().click();
  await page.getByRole('textbox', { name: 'Loan Amount' }).click();
 const lo:Locator = page.getByRole('textbox', { name: 'Loan Amount' });
   await lo.fill('0');
   await expect(page.locator('.tooltip').first()).toHaveText(' Please enter a value between 1,00,000 and 10,00,00,000.');

   await page.getByRole('textbox', { name: 'Laon Tenure' }).fill('0');
   await expect(page.locator('.tooltip').nth(1)).toHaveText('Please enter a value between 1 and 50.');

   await page.getByRole('textbox', { name: 'Interest Rate' }).fill('0');
  await expect(page.locator('.tooltip').last()).toHaveText('Please enter a value between 0.5 and 15.');
   
})