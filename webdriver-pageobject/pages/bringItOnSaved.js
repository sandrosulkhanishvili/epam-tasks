//tried adding seccodn page where all the testing should take place but didn't work
const { By, until } = require("selenium-webdriver");
const Page = require("./page");

class BringItOnSaved extends Page {
  constructor(driver) {
    super(driver);
    //second page
    this.usernameIcon = By.css(".username");
    this.textArea = By.className("js-paste-raw");
    this.title = By.xpath("//h1");
    this.syntax = By.xpath('//a [contains(text(), "Bash")]');
  }

  async waitSavedPage() {
    await this.driver.wait(until.elementLocated(this.usernameIcon), 30000);
  }

  async getPaste() {
    return this.driver.findElement(this.textArea).getText();
  }
  async getTitle() {
    return this.driver.findElement(this.title).getText();
  }
  async getSyntax() {
    return this.driver.findElement(this.syntax).getText();
  }
}

module.exports = BringItOnSaved;
