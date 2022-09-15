const googleCloudMainPage = require("../pages/googleCloudMain.page");
const googleSearchPage = require("../pages/googleSearch.page");
const googleCloudCalculatorPage = require("../pages/googleCloudCalculator.page");
const temporaryEmailPage = require("../pages/temporaryEmail.page");
const testData = require("../../resources/testData");

describe("hardcore", () => {
  before(async () => {
    await googleCloudMainPage.open();
    await googleCloudMainPage.search(testData.searchText);

    await googleSearchPage.searchResult.click();

    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

    await googleCloudCalculatorPage.numInstances.setValue(testData.numberOfInstances);

    await googleCloudCalculatorPage.chooceFildes(
      googleCloudCalculatorPage.series,
      googleCloudCalculatorPage.seriesChoice
    );

    await googleCloudCalculatorPage.chooceFildes(
      googleCloudCalculatorPage.machineType,
      googleCloudCalculatorPage.machineTypeChoice
    );

    await googleCloudCalculatorPage.addGPU.click();

    await googleCloudCalculatorPage.chooceFildes(
      googleCloudCalculatorPage.GPUType,
      googleCloudCalculatorPage.GPUTypeChoice
    );

    await googleCloudCalculatorPage.chooceFildes(
      googleCloudCalculatorPage.numberGPU,
      googleCloudCalculatorPage.numberGPUChoice
    );

    await googleCloudCalculatorPage.chooceFildes(
      googleCloudCalculatorPage.localSSD,
      googleCloudCalculatorPage.localSSDChoice
    );

    await googleCloudCalculatorPage.chooceFildes(
      googleCloudCalculatorPage.location,
      googleCloudCalculatorPage.locationChoice
    );

    await googleCloudCalculatorPage.chooceFildes(
      googleCloudCalculatorPage.committedUsage,
      googleCloudCalculatorPage.committedUsageChoice
    );

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
    await expect(temporaryEmailPage.estimatedCost).toHaveTextContaining(testData.price);
  });
});
