const
   fs       = require('fs')
 , request  = require('request')
 , cheerio  = require('cheerio')
 , tldList  = 'http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains';

/* Retrieves the valid top level TLDs and calls back an array. */
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
