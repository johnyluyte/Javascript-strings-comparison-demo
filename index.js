/*
In this example,

1. We load a JSON file and add its elements to a hashmap.
2. We load a CSV file and split each line using '\n', which leaves a '\r' character at the end of each line.
3. We compare the elements in step 2 and step 3.
  3a. If we prune the strings from step 2 using trim(), the 'r' is eliminated and the two strings should be identical.
  3b. Otherwise, the comparison would returns a 'false' since one of them contains '\r' and the other does not.

p.s. The CSV file should be split using '\r\n' in step 2 in this case.

*/

var JSON_FILE_NAME = "sampleJson.json";
var CSVfile = null;
var hashMap = {};

/* Initialization */
$(function() {
  loadJSON();
  $('#inputFile').change(function(event) {
    loadFromFile(event);
  });
});

/* Load @JSON_FILE_NAME and store its elements to @hashMap as keys */
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

/* Load @CSVfile from input button, split the lines by '\n' and compare them using compareStrings() */
function loadFromFile(event) {
  CSVfile = event.target.files[0];

  var fileReader = new FileReader();
  fileReader.onload = function(e) {
    var content = fileReader.result;
    /* In this example, we didn't eliminate the '\r' at the end of each line. */
    // var lines = content.split('\r\n');
    var lines = content.split('\n');
    compareStrings(lines);
  }
  fileReader.readAsText(CSVfile);
}


function compareStrings(lines) {
  console.log("-- compareStrings() starts --");
  for (var i in lines) {
    /*
      Remember that we left out the '\r' at the end of each line?
      The strings look identical to each other when printing out in console.
      However, without trim(), we cannot find matches in hashMap due to that '\r'.
    */
    var key = lines[i];

    /* After adding trim to the string, we eliminate that '\r'. */
    // var key = lines[i].trim();

    console.log("key:" + key);
    // print @key in ASCII code, the '\r' is represented as 13 in ASCII code.
    for(var k=0;k<key.length;k++){
      console.log(key[k].charCodeAt(0));
    }
    if (key in hashMap) {
      console.log(key + " is in hashMap!");
    } else {
      console.log(key + " does not match any key in hashMap.");
    }
  }
  console.log("-- compareStrings() ends --");
}


function printHashMap() {
  console.log("-- printHashMap() starts --");
  for (var key in hashMap) {
    console.log(key + "=>" + hashMap[key]);
  }
  console.log("-- printHashMap() ends --");
}
