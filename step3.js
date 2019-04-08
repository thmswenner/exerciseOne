function getAndPrintHTML(options) {

  var https = require('https')


  https.get(options, function(response) {

    response.setEncoding('utf8')

    var output = ''

    response.on('data', function (data) {
      output += data
      console.log(output)
    })
  })

}


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }

  getAndPrintHTML(requestOptions)
