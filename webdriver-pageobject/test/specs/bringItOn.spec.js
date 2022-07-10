const { expect } = require("chai");
const { By } = require("selenium-webdriver");

const BringItOn = require("../../pages/bringItOn");
const BringItOnSaved = require("../../pages/bringItOnSaved");
describe("WebDriver", () => {
  const PASTE =
    'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force';
  const TITLE = "how to gain dominance among developers";
  const syntaxFormBash = By.xpath('//li [contains(text(), "Bash")]');
  const expirationForm10Min = By.xpath('//li [contains(text(), "10 Minutes")]');

  let bringItOn;
  let bringItOnSaved;
  before(async () => {
    bringItOn = new BringItOn();
    bringItOnSaved = new BringItOnSaved();
    await bringItOn.open();
    await bringItOn.newPaste(PASTE);
    await bringItOn.chooseSyntax(syntaxFormBash);
    await bringItOn.chooseExpiration(expirationForm10Min);
    await bringItOn.pasteTitle(TITLE);
    await bringItOn.savePaste();
  });

  it("should have paste", async () => {
    const pasteText = await bringItOn.getPaste();
    expect(pasteText).to.be.equal(PASTE);
  });

  it("should have title", async () => {
    const title = await bringItOn.getTitle();
    except(title).to.be.equal(TITLE);
  });

  it("should have bash as syntax", async () => {
    const syntax = await bringItOn.getSyntax();
    expect(syntax).to.be.equal("Bash");
  });

  after(async () => {
    await textInputPage.close();
  });
});
