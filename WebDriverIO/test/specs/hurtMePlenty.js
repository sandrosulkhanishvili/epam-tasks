const googleCloudMainPage = require("../pages/googleCloudMain.page");
const googleSearchPage = require("../pages/googleSearch.page");
const googleCloudCalculatorPage = require("../pages/googleCloudCalculator.page");
const testData = require("../../resources/testData");

describe("hurtMePlenty", () => {
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
  });

  it("should have correct provisioning model", async () => {
    await expect(googleCloudCalculatorPage.testProvisiningModel).toHaveTextContaining(testData.provisioningModel);
  });
  it("should have correct instance type", async () => {
    await expect(googleCloudCalculatorPage.testInstanceType).toHaveTextContaining(testData.instanceType);
  });
  it("should have correct region", async () => {
    await expect(googleCloudCalculatorPage.testRegion).toHaveTextContaining(testData.region);
  });
  it("should have correct SSD", async () => {
    await expect(googleCloudCalculatorPage.testSSD).toHaveTextContaining(testData.ssd);
  });
  it("should have correct commitment term", async () => {
    await expect(googleCloudCalculatorPage.testCommitmentTerm).toHaveTextContaining(testData.commitmentTerm);
  });
  it("should have correct estimated cost", async () => {
    await expect(googleCloudCalculatorPage.testEstimatedCost).toHaveTextContaining(testData.price);
  });
});
