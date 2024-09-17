//Using only chai and mocha with parallel testing

const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("chai").assert;

describe("bringItOn2", function () {
  it("Syntax is suspended for bash", async function () {
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
    await driver
      .findElement(By.id("select2-postform-format-container"))
      .click();
    await driver
      .findElement(By.xpath('//li [contains(text(), "Bash")]'))
      .click();

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

    // Save paste
    await driver
      .findElement(By.xpath('//button [contains(text(), "Create New Paste")]'))
      .click();

    assert.equal(
      await driver
        .findElement(By.xpath('//a [contains(text(), "Bash")]'))
        .getText(),
      "Bash"
    );
  });
});
