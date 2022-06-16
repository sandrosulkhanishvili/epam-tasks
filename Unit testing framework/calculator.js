"use strict";
module.exports = {
  add: function (a, b) {
    this.validate(a, b);
    return a + b;
  },
  multiply: function (a, b) {
    this.validate(a, b);
    return a * b;
  },
  validate: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Number is required");
    }
  },
};
