/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
  
      let initNum = convertHandler.getNum(input);
      console.log('initNum: '+initNum);
      let initUnit = convertHandler.getUnit(input);
      console.log('initUnit: '+initUnit);
      let returnNum = convertHandler.convert(initNum, initUnit);
      console.log('returnNum'+returnNum);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log('returnUnit: '+returnUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log(toString);
      
      if(initUnit=='l')
      initUnit='L';
      if(!initNum || !initUnit) 
        res.send(toString);
      else{
      let sendJson = {initNum:initNum,initUnit:initUnit,returnNum:returnNum,returnUnit:returnUnit,"string":toString}
        res.json(sendJson)
      }
    });
    
};
