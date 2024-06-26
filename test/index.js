// Writing tests for console output: https://stackoverflow.com/questions/30625404/how-to-unit-test-console-output-with-mocha-on-nodejs

const expect = require("chai").expect;
require("mocha-sinon");
require("sinon-chai");

const {
  prompt1,
  prompt2,
  prompt3,
  prompt4,
  prompt5,
  prompt6,
  prompt7,
  someNumber,
  prompt8,
  prompt9,
  prompt10,
  prompt11,
  prompt12,
  prompt13,
} = require("../lib/challenge");

describe("prompt1", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    // run the prompt1 function before each test
    prompt1();
  });

  it("should console.log more than once", function () {
    expect(console.log.calledOnce).to.be.false;
  });

  it("should log numbers 0-10 (inclusive)", function () {
    expect(console.log.calledWith(0)).to.be.true;
    expect(console.log.calledWith(1)).to.be.true;
    expect(console.log.calledWith(2)).to.be.true;
    expect(console.log.calledWith(3)).to.be.true;
    expect(console.log.calledWith(4)).to.be.true;
    expect(console.log.calledWith(5)).to.be.true;
    expect(console.log.calledWith(6)).to.be.true;
    expect(console.log.calledWith(7)).to.be.true;
    expect(console.log.calledWith(8)).to.be.true;
    expect(console.log.calledWith(9)).to.be.true;
    expect(console.log.calledWith(10)).to.be.true;
  });

  it("should not log 11", function () {
    expect(console.log.calledWith(11)).to.be.false;
  });
});

describe("prompt2", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt2();
  });

  it("should log even numbers", function () {
    expect(console.log.calledWith(1)).to.be.false;
    expect(console.log.calledWith(2)).to.be.true;
    expect(console.log.calledWith(50)).to.be.true;
    expect(console.log.calledWith(51)).to.be.false;
    expect(console.log.calledWith(98)).to.be.true;
  });
});

describe("prompt3", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt3();
  });

  it("should log numbers -5 though 5", function () {
    expect(console.log.calledWith(-6)).to.be.false;
    expect(console.log.calledWith(-5)).to.be.true;
    expect(console.log.calledWith(-4)).to.be.true;
    expect(console.log.calledWith(-3)).to.be.true;
    expect(console.log.calledWith(-2)).to.be.true;
    expect(console.log.calledWith(-1)).to.be.true;
    expect(console.log.calledWith(0)).to.be.true;
    expect(console.log.calledWith(1)).to.be.true;
    expect(console.log.calledWith(2)).to.be.true;
    expect(console.log.calledWith(3)).to.be.true;
    expect(console.log.calledWith(4)).to.be.true;
    expect(console.log.calledWith(5)).to.be.true;
    expect(console.log.calledWith(6)).to.be.false;
  });
});

describe("prompt4", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt4();
  });

  it("should log numbers 10 thorough 0", function () {
    expect(console.log.calledWith(-1)).to.be.false;
    expect(console.log.calledWith(10)).to.be.true;
    expect(console.log.calledWith(6)).to.be.true;
    expect(console.log.calledWith(5)).to.be.true;
    expect(console.log.calledWith(0)).to.be.true;
    expect(console.log.calledWith(11)).to.be.false;
  });
});

describe("prompt5", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt5();
  });

  it("should log numbers 5 thorough -5", function () {
    expect(console.log.calledWith(-6)).to.be.false;
    expect(console.log.calledWith(-5)).to.be.true;
    expect(console.log.calledWith(-4)).to.be.true;
    expect(console.log.calledWith(-3)).to.be.true;
    expect(console.log.calledWith(-2)).to.be.true;
    expect(console.log.calledWith(-1)).to.be.true;
    expect(console.log.calledWith(0)).to.be.true;
    expect(console.log.calledWith(1)).to.be.true;
    expect(console.log.calledWith(2)).to.be.true;
    expect(console.log.calledWith(3)).to.be.true;
    expect(console.log.calledWith(4)).to.be.true;
    expect(console.log.calledWith(5)).to.be.true;
    expect(console.log.calledWith(6)).to.be.false;
  });
});

describe("prompt6", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt6();
  });

  it("should log even numbers 0-50 inclusive", function () {
    expect(console.log.calledWith(0)).to.be.true;
    expect(console.log.calledWith(24)).to.be.true;
    expect(console.log.calledWith(48)).to.be.true;
    expect(console.log.calledWith(1)).to.be.false;
    expect(console.log.calledWith(49)).to.be.false;
    expect(console.log.calledWith(50)).to.be.true;
    expect(console.log.calledWith(51)).to.be.false;
  });
});

describe("prompt7", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt7();
  });

  it("should log multiples of 5", function () {
    expect(console.log.calledWith("I found a 5. High five!")).to.be.true;
    expect(console.log.calledWith("I found a 10. High five!")).to.be.true;
    expect(console.log.calledWith("I found a 25. High five!")).to.be.true;
    expect(console.log.calledWith("I found a 51. High five!")).to.be.false;
    expect(console.log.calledWith("I found a 90. High five!")).to.be.true;
    expect(console.log.calledWith("I found a 100. High five!")).to.be.true;
  });
});

describe("prompt8", function () {
  //  revisit this test
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt8();
  });

  it("should generate a number between 0 and 100", function () {
    expect(someNumber).to.be.a("number");
    expect(someNumber).to.be.below(100);
    expect(someNumber).to.be.above(0);
  });

  it(`should console.log twice`, function () {
    expect(console.log.calledTwice).to.be.true;
  });
});

describe("prompt9", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt9();
  });

  it("should log characters from the starWarsArray", function () {
    expect(console.log.calledWith("0. Han")).to.be.true;
    expect(console.log.calledWith("1. C3PO")).to.be.true;
    expect(console.log.calledWith("2. R2D2")).to.be.true;
    expect(console.log.calledWith("3. Luke")).to.be.true;
    expect(console.log.calledWith("4. Leia")).to.be.true;
    expect(console.log.calledWith("5. Anakin")).to.be.true;
  });
});

describe("prompt10", function () {
  it("should log an array with the even numbers between 0 and 100 (non-inclusive)", function () {
    const array = prompt10();
    expect(array).to.deep.equal([
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      30,
      32,
      34,
      36,
      38,
      40,
      42,
      44,
      46,
      48,
      50,
      52,
      54,
      56,
      58,
      60,
      62,
      64,
      66,
      68,
      70,
      72,
      74,
      76,
      78,
      80,
      82,
      84,
      86,
      88,
      90,
      92,
      94,
      96,
      98,
    ]);
  });
});

describe("prompt11", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt11();
  });

  it("should log the median number of the nums array", function () {
    expect(console.log.calledWith(15)).to.be.true;
  });
});

describe("prompt12", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt12();
  });

  it("should log the value of the outer array and the inner array", function () {
    expect(console.log.calledWith("i: 1 / j: 11")).to.be.true;
    expect(console.log.calledWith("i: 1 / j: 12")).to.be.true;
    expect(console.log.calledWith("i: 1 / j: 13")).to.be.true;
    expect(console.log.calledWith("i: 10 / j: 18")).to.be.true;
    expect(console.log.calledWith("i: 10 / j: 19")).to.be.true;
    expect(console.log.calledWith("i: 10 / j: 20")).to.be.true;
  });
});

describe("prompt13", function () {
  beforeEach(function () {
    this.sinon.stub(console, "log");
    prompt13();
  });

  it("should log the values of the nested arrays", function () {
    expect(console.log.calledWith("a")).to.be.true;
    expect(console.log.calledWith("b")).to.be.true;
    expect(console.log.calledWith("c")).to.be.true;
    expect(console.log.calledWith("d")).to.be.true;
    expect(console.log.calledWith("e")).to.be.true;
    expect(console.log.calledWith("f")).to.be.true;
    expect(console.log.calledWith("g")).to.be.true;
    expect(console.log.calledWith("h")).to.be.true;
    expect(console.log.calledWith("i")).to.be.true;
  });
});
