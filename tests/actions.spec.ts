import{test, expect, Locator} from "@playwright/test";

test('Text Input Actions',async({page})=>{
page.goto("https://testautomationpractice.blogspot.com/");

const textbox: Locator = page.locator('#name');
await expect(textbox).toBeVisible();
await expect(textbox).toBeEnabled();
const maxLength:String|null= await textbox.getAttribute("maxlength");//returns value of maxlength attribute
expect(maxLength).toBe(15);
});
