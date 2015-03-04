const
   fs       = require('fs')
 , request  = require('request')
 , cheerio  = require('cheerio')
 , tldList  = 'http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains';

/* Retrieves the valid top level TLDs and inserts them into an array.
   Calls back the array of TLDs. */
function getTLDs(callback) {

  request(tldList, function(err, response, body) {
    var TLDs = [];

    if(!err && response.statusCode === 200) {
      var $ = cheerio.load(body);

      /* Gets TLDs */
      $('tr', 'table').each(function() {
        var foundTLD = $(this).children().first().text().toString();
        if (foundTLD.indexOf('.') == 0) {
          TLDs.push(foundTLD);
        };
      });
    };
    callback(null, TLDs);
  });

};

/* Write the given content in its original representation to a file. */
function writeArrayToFile(writeArray) {
  fs.writeFile('../TLDs.txt',
    JSON.stringify(writeArray),
    function(err) {
      if (err) throw err;
    }
  );
};

/* Get the TLDs and write them to a file. */
(function main() {
  getTLDs(function(err, TLDs) {
    console.log("Retrieving TLDs...");
    writeArrayToFile(TLDs);
    console.log("TLDs.txt created successfully.");
  });
})();
