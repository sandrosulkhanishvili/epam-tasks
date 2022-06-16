const { Builder, By, Key } = require("selenium-webdriver");

async function iCanWin() {
  //1. Open https://pastebin.com or a similar service in any browser
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://pastebin.com/");

  //2. Create a New Paste with the following details:

  //code: Hello from WebDriver
  await driver
    .findElement(By.name("PostForm[text]"))
    .sendKeys("Hello from WebDriver");

  // Paste Expiration: "10 Minutes"
  await driver
    .findElement(By.id("select2-postform-expiration-container"))
    .click();
  await driver
    .findElement(By.id("select2-postform-expiration-container"))
    .sendKeys(Key.ARROW_DOWN);
  //Paste Name / Title: "helloweb"
  await driver.findElement(By.id("postform-name")).sendKeys("helloweb");
}
iCanWin();
