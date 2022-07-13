const { Builder } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

function initBrowser() {
  const chromeOptions = new Options().addArguments("--log-level=3");
  return new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
}

module.exports = {initBrowser};