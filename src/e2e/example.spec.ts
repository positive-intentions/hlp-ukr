import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:1234");
});

test.describe("yak shop", () => {
  test("can make an order", async ({ page }) => {
    await page.pause();
    // Click [data-testid="nav-order-button"] div
    await page.click('[data-testid="nav-order-button"] div');
    // assert.equal(page.url(), 'http://localhost:1234/order');
    // Click [placeholder="mm\/dd\/yyyy"]
    await page.click('[placeholder="mm\\/dd\\/yyyy"]');
    // Click text=8
    await page.click("text=8");
    // Click text=26
    await page.click("text=26");
    // Click text=Set amount of milk to order (litres)litres​ >> span span
    await page.click(
      "text=Set amount of milk to order (litres)litres​ >> span span"
    );
    // Click text=Set amount of skinsskins​ >> span span
    await page.click("text=Set amount of skinsskins​ >> span span");
    // Click text=Set customer name​ >> input[type="text"]
    await page.click('text=Set customer name​ >> input[type="text"]');
    // Fill text=Set customer name​ >> input[type="text"]
    await page.fill('text=Set customer name​ >> input[type="text"]', "farmer");
    // Click button:has-text("Order")
    await page.click('button:has-text("Order")');
  });
});
