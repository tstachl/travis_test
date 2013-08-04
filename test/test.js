var assert = require("assert")
  , travisTest = require('../');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('TravisTest', function() {
  describe('#addition()', function() {
    it('should return the sum of value 1 and value 2', function() {
      assert.equal(2, travisTest.addition(1, 1));
      assert.equal(3, travisTest.addition(1, 2));
      assert.equal(4, travisTest.addition(2, 2));
    })
  })
})