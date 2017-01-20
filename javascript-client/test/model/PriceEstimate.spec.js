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
    instance = new VidaApi.PriceEstimate();
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

  describe('PriceEstimate', function() {
    it('should create an instance of PriceEstimate', function() {
      // uncomment below and update the code to test PriceEstimate
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be.a(VidaApi.PriceEstimate);
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be();
    });

    it('should have the property estimate (base name: "estimate")', function() {
      // uncomment below and update the code to test the property estimate
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be();
    });

    it('should have the property lowEstimate (base name: "low_estimate")', function() {
      // uncomment below and update the code to test the property lowEstimate
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be();
    });

    it('should have the property highEstimate (base name: "high_estimate")', function() {
      // uncomment below and update the code to test the property highEstimate
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be();
    });

    it('should have the property surgeMultiplier (base name: "surge_multiplier")', function() {
      // uncomment below and update the code to test the property surgeMultiplier
      //var instane = new VidaApi.PriceEstimate();
      //expect(instance).to.be();
    });

  });

}));
