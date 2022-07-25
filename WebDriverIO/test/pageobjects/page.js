class Page {
  async open(url) {
    return browser.url(url);
  }
  async openNewWindow(url) {
    return browser.newWindow(url);
  }
}

module.exports = Page;
