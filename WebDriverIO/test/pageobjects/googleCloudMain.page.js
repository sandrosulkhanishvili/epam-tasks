const Page = require("./page");

class googleCloudMainPage extends Page {
  get searchIcon() {
    return $(".devsite-searchbox");
  }

  get searchInput() {
    return $(".devsite-search-field");
  }

  async search(text) {
    await this.searchIcon.click();
    await this.searchInput.setValue(text);
    await browser.keys("Enter");
  }

  open() {
    return super.open("https://cloud.google.com/");
  }
}

module.exports = new googleCloudMainPage();
