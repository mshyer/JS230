$.ajax({
  url: 'post.php',
  data: {
    id: 123,
  },

  type: 'GET',

  dataType: 'json',
})
  .done(function(json) {
    $( '<h1>').text(json.title).appendTo('body');
    $("<div class=\"content\">").html(json.html).appendTo( 'body' );
  })

  .fail(function( xhr, status, errorThrown ) {
    alert( 'sorry, there was un problem');
    console.log('ErrorL ' + errorThrown );
    console.log( 'Status: ' + status );
    console.dir( xhr );
  })

  .always(function( xhr, status ) {
    alert( 'the request is complete' );
  });
