var jsdom = require("jsdom").jsdom;

var LayerView = require('../../src/framework/layerview.js');
var LayerData = require('../../src/framework/layerdata.js');
var CommonViewTests = require('./helpers/commonviewtests.js');
var CommonGroupViewTests = require('./helpers/commongroupviewtests.js');
var DatasetReader = require('./helpers/datasetreader.js');

describe("LayerView", function() {
  var datasetReader = new DatasetReader();
  
  /*
    CommonViewTests(function() {
      return {
          data: datasetReader.readFromFile('simple_layerdata.js')[0],
          ViewType : LayerView
      };
    });
  */
  
  CommonGroupViewTests(function() {
    return {
      data: datasetReader.readFromFile('simple_layerdata.js'),
      ViewType: LayerView,
      parentId: 5
    };
  });  
  
  CommonGroupViewTests(function() {   
     return {
      data: datasetReader.readFromFile('test_data_set.js'),
      ViewType: LayerView,
      parentId: 5
    };
  });

})
