const assert =  require("assert");
const {it, describe} = require("mocha");
const calculateNumber = require("./mocktes");

describe("calculateNumber()",function (){
  it("checking Addition of numbers", function (){
    const result = calculateNumber("SUM", 1, 2);
    assert.strictEqual(result, 3);
  });
  it("Checking division of NUmbers", function(){
    const result = calculateNumber("DIVIDE", 2.2, 1.1);
    assert.strictEqual(result, 2);
  });
  it("checking substraction of numbers", function(){
    const result = calculateNumber("SUBTRACT", 3.4, 1.2);
    assert.strictEqual(result, 2);
  });
  it("checking Division with 0", function(){
    const result = calculateNumber("DIVIDE", 3,0);
    assert.equal(result, "Error");
  });

} )