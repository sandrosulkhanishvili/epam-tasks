const { By, until } = require("selenium-webdriver");

const Page = require("./page");

class BringItOn extends Page {
  constructor() {
    super();
    //second page
    this.textArea = By.className("js-paste-raw");
    this.title = By.xpath("//h1");
    this.syntax = By.xpath('//a [contains(text(), "Bash")]');
    //first page
    this.pasteTextArea = By.name("PostForm[text]");
    this.syntaxForm = By.id("select2-postform-format-container");
    this.expirationForm = By.id("select2-postform-expiration-container");
    this.title = By.id("postform-name");
    this.createNewPasteButton = By.xpath(
      '//button [contains(text(), "Create New Paste")]'
    );
  }
  async open() {
    await super.open("https://pastebin.com/");
  }

  async newPaste(paste) {
    await this.driver.findElement(this.pasteTextArea).sendKeys(paste);
  }

  async chooseSyntax(choise) {
    await this.driver.findElement(this.syntaxForm).click();
    await this.driver.findElement(choise).click();
  }

  async chooseExpiration(choise) {
    await this.driver.findElement(this.expirationForm).click();
    await this.driver.findElement(choise).click();
  }
  async pasteTitle(titleName) {
    await this.driver.findElement(this.title).sendKeys(titleName);
  }

  async savePaste() {
    await this.driver.findElement(this.createNewPasteButton).click();
  }
  async getPaste() {
    await this.driver.wait(until.elementLocated(this.textArea), 30000);
    return this.driver.findElement(this.textArea).getText();
  }
  async getTitle() {
    return this.driver.findElement(this.title).getText();
  }
  async getSyntax() {
    return this.driver.findElement(this.syntax).getText();
  }
}

module.exports = BringItOn;
