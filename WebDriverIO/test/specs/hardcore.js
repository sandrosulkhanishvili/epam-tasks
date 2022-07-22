const googleCloudMainPage = require("../pageobjects/googleCloudMain.page");
const googleSearchPage = require("../pageobjects/googleSearch.page");
const googleCloudCalculatorPage = require("../pageobjects/googleCloudCalculator.page");

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
    await googleCloudCalculatorPage.seriesChoiceN1.click();

    await googleCloudCalculatorPage.machineType.click();
    await googleCloudCalculatorPage.machineTypeChoice.click();

    await googleCloudCalculatorPage.addGPU.click();

    await googleCloudCalculatorPage.GPUType.click();
    await googleCloudCalculatorPage.GPUTypeChoice.click();

    await googleCloudCalculatorPage.numberGPU.click();
    await googleCloudCalculatorPage.numberGPUChoice.click();

    await googleCloudCalculatorPage.localSSD.click();
    await googleCloudCalculatorPage.localSSDChoice.click();

    await googleCloudCalculatorPage.location.click();
    await googleCloudCalculatorPage.locationChoice.click();

    await googleCloudCalculatorPage.committedUsage.click();
    await googleCloudCalculatorPage.committedUsageCoice.click();

    await googleCloudCalculatorPage.btnEstimate.click();
  });
});
