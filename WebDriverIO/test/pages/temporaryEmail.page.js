const Page = require("./page");

class TemporaryEmailPage extends Page {
  get copyEmailAdress() {
    return $("#cprnd");
  }
  get pageURL() {
    return "https://yopmail.com/en/";
  }
  get emailAdress() {
    return $("a[href='email-generator']");
  }
  get recivedEmail() {
    return $("span*=Check Inbox");
  }
  get estimatedCost() {
    return $("h2");
  }
  openNewWindow() {
    return super.openNewWindow(this.pageURL);
  }
}

module.exports = new TemporaryEmailPage();
