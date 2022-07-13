const { expect } = require("chai");
const { By } = require("selenium-webdriver");

const PastebinHomePage = require("../../pages/PastebinHomePage");
const PastebinSavedPastePage = require("../../pages/PastebinSavedPastePage");
const { initBrowser } = require("../../pages/helpers/initBrowser");
describe("WebDriver", () => {
  const PASTE =
    'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force';
  const TITLE = "how to gain dominance among developers";

  const driver = initBrowser();

  let bringItOn;
  let bringItOnSaved;
  before(async () => {
    bringItOn = new PastebinHomePage(driver);
    bringItOnSaved = new PastebinSavedPastePage(driver);
    await bringItOn.open();
    await bringItOn.newPaste(PASTE);
    await bringItOn.chooseSyntax(bringItOn.syntaxFormBash);
    await bringItOn.chooseExpiration(bringItOn.expirationForm10Min);
    await bringItOn.pasteTitle(TITLE);
    await bringItOn.savePaste();
    await bringItOnSaved.waitSavedPage();
  });

  it("should have correct paste", async () => {
    const pasteText = await bringItOnSaved.getPaste();
    expect(pasteText).to.be.equal(PASTE);
  });

  it("should have correct title", async () => {
    const title = await bringItOnSaved.getTitle();
    except(title).to.be.equal(TITLE);
  });

  it("should have bash as syntax", async () => {
    const syntax = await bringItOnSaved.getSyntax();
    expect(syntax).to.be.equal("Bash");
  });

  after(async () => {
    await bringItOn.close();
  });
});
