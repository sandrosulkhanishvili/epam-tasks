const Page = require("./page");

class GoogleCloudCalculatorPage extends Page {
  get pageURL() {
    return "https://cloud.google.com/products/calculator";
  }

  get numInstances() {
    // return $("#input_87");
    return $("input[name='quantity']");
  }

  get series() {
    // return $("#select_112");
    return $("md-select[name='series']");
  }
  get seriesChoice() {
    // return $("#select_option_197");
    return $("md-option[value='n1']");
  }

  get machineType() {
    // return $("#select_value_label_83");
    return $("md-select[placeholder='Instance type']");
  }
  get machineTypeChoice() {
    return $("md-option*=n1-standard-8");
  }

  get addGPU() {
    return $("md-checkbox[aria-label='Add GPUs']");
  }

  get GPUType() {
    // return $("#select_459");
    return $("md-select[placeholder='GPU type']");
  }
  get GPUTypeChoice() {
    return $("md-option[value='NVIDIA_TESLA_V100']");
  }

  get numberGPU() {
    // return $("#select_value_label_458");
    return $("md-select[placeholder='Number of GPUs']");
  }
  get numberGPUChoice() {
    return $("#select_option_470");
  }

  get localSSD() {
    // return $("#select_value_label_413");
    return $("md-select[placeholder='Local SSD']");
  }
  get localSSDChoice() {
    return $("div=2x375 GB");
  }

  get location() {
    // return $("#select_120");
    return $("md-select[placeholder='Datacenter location']");
  }
  get locationChoice() {
    return $("#select_option_224");
    // return $("md-option[value='europe-west3']");
  }

  get committedUsage() {
    // return $("#select_value_label_86");
    return $("md-select[placeholder='Committed usage']");
  }
  get committedUsageChoice() {
    return $("#select_option_125");
  }

  get btnEstimate() {
    return $("button[aria-label='Add to Estimate']");
  }

  //test
  get testProvisiningModel() {
    return $("md-list-item*=Provisioning model");
  }

  get testInstanceType() {
    return $("md-list-item*=Instance type");
  }

  get testRegion() {
    return $("md-list-item*=Region:");
  }

  get testSSD() {
    return $("md-list-item*=Local SSD");
  }

  get testCommitmentTerm() {
    return $("md-list-item*=Commitment");
  }

  get testEstimatedCost() {
    return $("b*=USD");
  }

  get btnEmail() {
    return $("#email_quote");
  }

  get emailField() {
    return $("input[type='email']");
  }

  get btnSendEmail() {
    return $("button[aria-label='Send Email'");
  }

  async chooceFildes(el, elChoice) {
    await el.click();
    await elChoice.waitForDisplayed({ timeout: 5000 });
    await elChoice.click();
  }
}

module.exports = new GoogleCloudCalculatorPage();
