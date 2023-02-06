function colorToHex(color) {
  switch (color) {
    case 'white':
      return 'FFFFFF';
    case 'black':
      return 'OOOOOO';
    case 'red':
      return 'FF0000';
    case 'green':
      return '008000';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = $('figure img')
  const thumbnails = $('ul li img');

  thumbnails.on('click', function(event) {
    let color = $(this).data().color;
    thumbnails.removeClass('active');
    $(this).addClass('active');
    mainImage.stop();
    mainImage.fadeOut(200, function() {
      mainImage.attr('src', function() {
        return 'https://via.placeholder.com/1200x900/' + colorToHex(color);
      });
    });
    mainImage.fadeIn(100);
  });
});
