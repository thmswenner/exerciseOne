function getHTML (options, callback) {

  var https = require('https')

  https.get(options, function(response) {

    response.setEncoding('utf8')

    var output = ''

    response.on('data', function(data) {
      printHTML(data)
    })
  })

}


function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML)