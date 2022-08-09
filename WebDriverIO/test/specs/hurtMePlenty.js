const googleCloudMainPage = require("../pages/googleCloudMain.page");
const googleSearchPage = require("../pages/googleSearch.page");
const googleCloudCalculatorPage = require("../pages/googleCloudCalculator.page");

describe("hurtMePlenty", () => {
  const SEARCHTEXT = "Google Cloud Platform Pricing Calculator";

  before(async () => {
    await googleCloudMainPage.open();
    await googleCloudMainPage.search(SEARCHTEXT);

    await googleSearchPage.searchResult.click();

    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

    await googleCloudCalculatorPage.numInstances.setValue("4");

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
