// $(document).ready(function() {
//   $('a').on('click', function(eve) {
//     //console.log($(this).attr('data-block'));
//     let dataVal = this.getAttribute('data-block');
//     let articles = document.querySelectorAll('article');
// 
//     for (let idx = 0; idx < articles.length; idx += 1) {
//       if (articles[idx].getAttribute('data-block') === dataVal) {
//         articles[idx].style = 'visibility: visible';
//       } else {
//         articles[idx].style = 'visibility: hidden';
//       }
//     }
//   });
// });

$(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  });
});
