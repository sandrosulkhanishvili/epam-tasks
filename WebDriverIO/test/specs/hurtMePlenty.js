const googleCloudMainPage = require("../pageobjects/googleCloudMain.page");
const googleSearchPage = require("../pageobjects/googleSearch.page");
const googleCloudCalculatorPage = require("../pageobjects/googleCloudCalculator.page");

describe("hurtMePlenty", () => {
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
  });

  it("should have correct provisioning model", async () => {
    await expect(googleCloudCalculatorPage.testProvisiningModel).toHaveTextContaining("Provisioning model: Regular");
  });
  it("should have correct instance type", async () => {
    await expect(googleCloudCalculatorPage.testInstanceType).toHaveTextContaining("Instance type: n1-standard-8");
  });
  it("should have correct region", async () => {
    await expect(googleCloudCalculatorPage.testRegion).toHaveTextContaining("Region: Frankfurt");
  });
  it("should have correct SSD", async () => {
    await expect(googleCloudCalculatorPage.testSSD).toHaveTextContaining("Local SSD: 2x375 GiB");
  });
  it("should have correct commitment term", async () => {
    await expect(googleCloudCalculatorPage.testCommitmentTerm).toHaveTextContaining("Commitment term: 1 Year");
  });
  it("should have correct estimated cost", async () => {
    await expect(googleCloudCalculatorPage.testEstimatedCost).toHaveTextContaining("USD 1,081.20");
  });
});
