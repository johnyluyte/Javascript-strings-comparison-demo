var JSON_FILE_NAME = "test.json";
var CSVfile = null;
var hashMap = {};

$(function() {
  loadJSON();
  $('#inputFile').change(function(event) {
    loadFromFile(event);
  });
});


function loadJSON() {
  $.getJSON(JSON_FILE_NAME, function(data) {
      var list = data.myData;
      for (var i in list) {
        var value = list[i].myValue;
        for (var k in list[i].myKeys) {
          var key = list[i].myKeys[k].key;
          // add to map
          hashMap[key] = value;
        }
      }
      printHashMap();
    })
    .error(function() {
      alert("Error loading JSON_FILE_NAME:" + JSON_FILE_NAME);
    });
}


function loadFromFile(event) {
  CSVfile = event.target.files[0];

  var fileReader = new FileReader();
  fileReader.onload = function(e) {
    var content = fileReader.result;
    var lines = content.split('\n');
    compareStrings(lines);
  }
  fileReader.readAsText(CSVfile);
}

function compareStrings(lines) {
  console.log("-- compareStrings() starts --");
  for (var i in lines) {
    // Without trim(), we cannot find matches in hashMap even though the string looks the same.
    // var key = lines[i];

    // After adding trim to the string, BANG! Suddenly it works like a charm!
    var key = lines[i].trim();

    console.log("key:" + key);
    if (key in hashMap) {
      console.log(key + " is in hashMap !!!");
    } else {
      console.log(key + " does not match any key in hashMap");
    }
  }
  console.log("-- compareStrings() ends --");
}


function printHashMap() {
  console.log("-- printHashMap() starts --");
  for (var key in hashMap) {
    console.log(key + "=>" + hashMap[key]); // print key:value
  }
  console.log("-- printHashMap() ends --");
}
