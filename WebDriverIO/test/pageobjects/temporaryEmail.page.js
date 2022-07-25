const Page = require("./page");

class TemporaryEmailPage extends Page {
  get copyEmailAdress() {
    return $("#click-to-copy");
  }
  get pageURL() {
    return "https://temp-mail.org/";
  }
  get recivedEmail() {
    return $("a*=Google Cloud Price Estimate");
  }
  get estimatedCost() {
    return $("h2*=USD");
  }
  openNewWindow() {
    return super.openNewWindow(this.pageURL);
  }
}

module.exports = new TemporaryEmailPage();
