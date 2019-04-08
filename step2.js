function getAndPrintHTML() {

  var https = require('https')

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }


  https.get(requestOptions, function( response ) {

    response.setEncoding( 'utf8' )

    var output = ''

    //Takes in the chunks of data and prints to terminal in chunks
    response.on( 'data', function ( data ) {
      output += data
      console.log(output)
    })
  })

}

getAndPrintHTML()