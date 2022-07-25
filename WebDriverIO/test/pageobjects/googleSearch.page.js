const Page = require("./page");

class GoogleSearchPage extends Page {
  get searchResult() {
    return $("b=Google Cloud Pricing Calculator");
  }
}

module.exports = new GoogleSearchPage();
