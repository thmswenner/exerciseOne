function getAndPrintHTMLChuncks() {

  var https = require('https')

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }


  https.get(requestOptions, function( response ) {

    response.setEncoding( 'utf8' )

    //Takes in the chunks of data and prints to terminal in chunks
    response.on( 'data', function ( data ) {
      console.log( data + '\n' )
    })
  })

}

getAndPrintHTMLChuncks()