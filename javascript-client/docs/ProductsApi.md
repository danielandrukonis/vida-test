# VidaApi.ProductsApi

All URIs are relative to *https://api.vida.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGet**](ProductsApi.md#productsGet) | **GET** /products | Product Types


<a name="productsGet"></a>
# **productsGet**
> [Product] productsGet(latitude, longitude)

Product Types

The Products endpoint returns information about the *Vida* products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order. 

### Example
```javascript
var VidaApi = require('vida_api');

var apiInstance = new VidaApi.ProductsApi();

var latitude = 1.2; // Number | Latitude component of location.

var longitude = 1.2; // Number | Longitude component of location.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsGet(latitude, longitude, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **Number**| Latitude component of location. | 
 **longitude** | **Number**| Longitude component of location. | 

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

