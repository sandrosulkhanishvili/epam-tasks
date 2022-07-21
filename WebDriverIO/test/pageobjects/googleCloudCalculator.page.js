const Page = require("./page");

class googleCloudCalculatorPage extends Page {
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
    return $("#select_option_419");
  }

  get addGPU() {
    return $("md-checkbox[aria-label='Add GPUs']");
  }

  get GPUType() {
    return $("#select_457");
  }
  get GPUTypeChoice() {
    return $("#select_option_465"); // coise is NVIDIA tesla p100 bcs tesla v100 is unavilable. tesla v100 is 494
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
    return $("#select_option_440");
  }

  //add location
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
}

module.exports = new googleCloudCalculatorPage();
