const assert = require("chai").assert;
const calculator = require("../calculator");

describe("calculator", function () {
  describe("add", function () {
    it("type of the addition should be number", function () {
      assert.typeOf(calculator.add(5, 6), "Number");
    });
    it("addition happens in case of 1 and 3", function () {
      assert.equal(calculator.add(1, 3), 4);
    });
    it("addition happens in case of 1 and -3", function () {
      assert.equal(calculator.add(1, -3), -2);
    });
  });
  describe("multiply", function () {
    it("type of the multiplication should be number", function () {
      assert.typeOf(calculator.multiply(5, 6), "Number");
    });
    it("multiplication happens in case of 1 and 3", function () {
      assert.equal(calculator.multiply(12, 12), 144);
    });
    it("multiplication happens in case of 1 and -3", function () {
      assert.equal(calculator.multiply(12, -3), -36);
    });
  });
});
