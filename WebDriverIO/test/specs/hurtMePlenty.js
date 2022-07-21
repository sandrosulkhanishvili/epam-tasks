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

    //using findElement --> invalid argument: invalid argument: missing 'ELEMENT'
    // const iframe = await browser.findElement("xpath", "//iframe[@name='goog_1386724524']");
    // await browser.switchToFrame(iframe);

    // using num as property ---> it should work bcs its first iframe
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
    await expect(googleCloudCalculatorPage.testEstimatedCost).toHaveTextContaining(
      "Estimated Component Cost: USD 1,299.80 per 1 month"
    );
  });
});
