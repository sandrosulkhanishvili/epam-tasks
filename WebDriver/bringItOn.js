//Using only chai

const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("chai").assert;

async function bringItOn() {
  //1. Open https://pastebin.com or a similar service in any browser
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://pastebin.com/");

  //2Create a New Paste with the following details
  await driver
    .findElement(By.name("PostForm[text]"))
    .sendKeys(
      'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
    );

  //Syntax Highlighting: "Bash"
  await driver.findElement(By.id("select2-postform-format-container")).click();
  await driver.findElement(By.xpath('//li [contains(text(), "Bash")]')).click();

  // Paste Expiration: "10 Minutes"
  await driver
    .findElement(By.id("select2-postform-expiration-container"))
    .click();
  await driver
    .findElement(By.xpath('//li [contains(text(), "10 Minutes")]'))
    .click();

  //Paste Name / Title: "how to gain dominance among developers"
  await driver
    .findElement(By.id("postform-name"))
    .sendKeys("how to gain dominance among developers");

  //Save paste
  await driver
    .findElement(By.xpath('//button [contains(text(), "Create New Paste")]'))
    .click();
  await driver.manage().setTimeouts({ implicit: 10000 });
  assert.equal(
    await driver.findElement(By.xpath("//h1")).getText(),
    "how to gain dominance among developers"
  );
  assert.equal(
    await driver
      .findElement(By.xpath('//a [contains(text(), "Bash")]'))
      .getText(),
    "Bash"
  );
  assert.equal(
    await driver.findElement(By.xpath("//textarea")).getText(),
    'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
  );
}
bringItOn();
