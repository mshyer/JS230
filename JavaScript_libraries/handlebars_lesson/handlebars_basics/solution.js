let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.<br><p>Hello This is not latin</p>',
  tags: ['news', 'gossip', 'celebrity', 'funny'],
};

let post2 = {
  title: 'a better post than the last one',
  published: 'May 21, 2027',
  body: 'a whole new world!',
  tags: [],
};

let post3 = {
  title: 'Is this a post?',
  published: 'April, 201BC',
  body: 'a whole new world!',
  tags: ['historical'],
};

$(document).ready(function() {
  let posts = [];
  //let postTemplate = Handlebars.compile($('#posts').innerHTML);//html());
  let postsTemplate = Handlebars.compile(document.getElementById('posts').innerHTML);
  Handlebars.registerPartial(
    'tagWrapper',
    '<p><strong>{{id}}: {{element}} </strong></p>'
  );
  //let templateScript = Handlebars.compile(template);
  //let html = template(post);
  //$(document.body).append(postTemplate(post));
  posts.push(post, post2, post3);
  //posts.forEach(post => {
   // $(document.body).append(postTemplate(post));

  //$(document.body).append(postTemplate(posts[0]));
  $('body').append(postsTemplate({ posts: posts }));
  //});
});
