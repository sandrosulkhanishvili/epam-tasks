class Page {
  constructor(driver) {
    this.driver = driver;
  }

  async open(url) {
    await this.driver.get(url);
  }

  async close() {
    await this.driver.quit();
  }
}

module.exports = Page;
