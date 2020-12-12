/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '4L';
      assert.equal(convertHandler.getNum(input),4);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '4.3L';
      assert.equal(convertHandler.getNum(input),4.3)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '1/2';
      assert.equal(convertHandler.getNum(input),0.5)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '4..5';
      assert.isFalse(convertHandler.getNum(input))
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'mi';
      assert.equal(convertHandler.getNum(input),1)
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele),ele.toLowerCase())
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = 'hello';
      assert.isFalse(convertHandler.getUnit(input));
      
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      let input = [2, 'L'];
      let expected = 0.52834;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      
      let input = [3.1,'Mi'];
      let expected = 4.988955
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [4,'Km'];
      let expected = 2.48549;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [1,'Lbs'];
      let expected = 0.45359;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [1.2,'Kg'];
      let expected = 2.64555;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});
