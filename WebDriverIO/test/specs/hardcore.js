const googleCloudMainPage = require("../pageobjects/googleCloudMain.page");
const googleSearchPage = require("../pageobjects/googleSearch.page");
const googleCloudCalculatorPage = require("../pageobjects/googleCloudCalculator.page");
const temporaryEmailPage = require("../pageobjects/temporaryEmail.page");

describe("hardcore", () => {
  const SEARCHTEXT = "Google Cloud Platform Pricing Calculator";

  before(async () => {
    await googleCloudMainPage.open();
    await browser.maximizeWindow();
    await googleCloudMainPage.search(SEARCHTEXT);

    await googleSearchPage.searchResult.click();

    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

    await googleCloudCalculatorPage.numInstances.setValue("4");

    await googleCloudCalculatorPage.series.click();
    await browser.pause(1000);
    await googleCloudCalculatorPage.seriesChoiceN1.click();

    await googleCloudCalculatorPage.machineType.click();
    await browser.pause(1000);
    await googleCloudCalculatorPage.machineTypeChoice.click();

    await googleCloudCalculatorPage.addGPU.click();

    await googleCloudCalculatorPage.GPUType.click();
    await browser.pause(1000);
    await googleCloudCalculatorPage.GPUTypeChoice.click();

    await googleCloudCalculatorPage.numberGPU.click();
    await browser.pause(1000);
    await googleCloudCalculatorPage.numberGPUChoice.click();

    await googleCloudCalculatorPage.localSSD.click();
    await browser.pause(1000);
    await googleCloudCalculatorPage.localSSDChoice.click();

    await googleCloudCalculatorPage.location.click();
    await browser.pause(1000);
    await googleCloudCalculatorPage.locationChoice.click();

    await googleCloudCalculatorPage.committedUsage.click();
    await browser.pause(1000);
    await googleCloudCalculatorPage.committedUsageCoice.click();

    await googleCloudCalculatorPage.btnEstimate.click();
    await googleCloudCalculatorPage.btnEmail.click();

    await temporaryEmailPage.openNewWindow();
    await temporaryEmailPage.emailAdress.click();
    await temporaryEmailPage.copyEmailAdress.click();

    await browser.switchWindow(googleCloudCalculatorPage.pageURL);
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await googleCloudCalculatorPage.emailField.click();
    await browser.keys(["Shift", "Insert"]);
    await googleCloudCalculatorPage.btnSendEmail.click();

    await browser.switchWindow(temporaryEmailPage.pageURL);
    await browser.pause(3000);
    await temporaryEmailPage.recivedEmail.click();
  });

  it("should have correct estimated cost", async () => {
    await browser.switchToFrame(2);
    await expect(temporaryEmailPage.estimatedCost).toHaveTextContaining("USD 1,081.20");
  });
});
