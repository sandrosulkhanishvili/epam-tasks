const Page = require("./page");

class GoogleCloudCalculatorPage extends Page {
  get pageURL() {
    return "https://cloud.google.com/products/calculator";
  }

  get numInstances() {
    return $("#input_86");
  }

  get series() {
    return $("#select_111");
  }
  get seriesChoiceN1() {
    return $("#select_option_196");
  }

  get machineType() {
    return $("#select_value_label_82");
  }
  get machineTypeChoice() {
    return $("md-option*=n1-standard-8");
  }

  get addGPU() {
    return $("md-checkbox[aria-label='Add GPUs']");
  }

  get GPUType() {
    return $("#select_457");
  }
  get GPUTypeChoice() {
    return $("md-option[value='NVIDIA_TESLA_V100']");
  }

  get numberGPU() {
    return $("#select_value_label_456");
  }
  get numberGPUChoice() {
    return $("#select_option_468");
  }

  get localSSD() {
    return $("#select_value_label_413");
  }
  get localSSDChoice() {
    return $("div=2x375 GB");
  }

  get location() {
    return $("#select_119");
  }
  get locationChoice() {
    return $("#select_option_222");
  }

  get committedUsage() {
    return $("#select_value_label_85");
  }
  get committedUsageCoice() {
    return $("#select_option_124");
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
}

module.exports = new GoogleCloudCalculatorPage();
