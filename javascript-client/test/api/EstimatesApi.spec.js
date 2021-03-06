/**
 * Vida API
 * Move your app forward with the Vida API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VidaApi);
  }
}(this, function(expect, VidaApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VidaApi.EstimatesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EstimatesApi', function() {
    describe('estimatesPriceGet', function() {
      it('should call estimatesPriceGet successfully', function(done) {
        //uncomment below and update the code to test estimatesPriceGet
        //instance.estimatesPriceGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('estimatesTimeGet', function() {
      it('should call estimatesTimeGet successfully', function(done) {
        //uncomment below and update the code to test estimatesTimeGet
        //instance.estimatesTimeGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
