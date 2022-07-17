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
    return $("div=Add GPUs.");
  }

  get GPUType() {
    return $("#select_487");
  }
  get GPUTypeChoice() {
    return $("#select_option_492"); // coise is NVIDIA tesla p100 bcs tesla v100 is unavilable. tesla v100 is 494
  }

  get numberGPU() {
    return $("#select_value_label_456");
  }
  get numberGPUChoice() {
    return $("#select_option_498");
  }

  get localSSD() {
    return $("#select_value_label_413");
  }
  get localSSDChoice() {
    return $("#select_option_440");
  }

  get committedUsage() {
    return $("#select_value_label_85");
  }
  get committedUsageCoice() {
    return $("#select_option_124");
  }

  get btnEstimate() {
    return $("button=Add to Estimate");
  }

  //test
  get testProvisiningModel() {
    return $("div=Provisioning model: Regular");
  }

  get testInstanceType() {
    return $("div*=Instance type: n1-standard-8");
  }

  get testRegion() {
    return $("div=Region: Frankfurt");
  }

  get testSSD() {
    return $("div*=Local SSD: 2x375 GiB");
  }

  get testCommitmentTerm() {
    return $("div=Commitment term: 1 Year");
  }

  get testEstimatedCost() {
    return $("b*=USD 4,024.56");
  }
}

module.exports = new googleCloudCalculatorPage();
