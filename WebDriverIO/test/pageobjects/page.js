class Page {
  async open(url) {
    return browser.url(url);
  }
}

module.exports = Page;
