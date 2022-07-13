const { By, until } = require("selenium-webdriver");

const Page = require("./page");

class BringItOn extends Page {
  constructor(driver) {
    super(driver);

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
}

module.exports = BringItOn;
