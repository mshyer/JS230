document.addEventListener('DOMContentLoaded', function() {
  let slides = document.getElementById('slides');
  const photosTemplate = document.getElementById('photos');
  const photoInfoTemplate = document.getElementById('photo_information');
  const photoCommentsTemplate = document.getElementById('photo_comments');
  const photoComment = document.getElementById('photo_comment');
  const commentsList = document.querySelector('div#comments > ul');
  const nextButton = document.querySelector('a.next');
  const previousButton = document.querySelector('a.prev');
  let currentPhoto = 0;

  const templates = {};
  let photos;
  let comments;

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
    templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
  });

  document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
    Handlebars.registerPartial(tmpl['id'], tmpl["innerHTML"]);
  });

  const renderPhotoInformation = function(idx) {
    let photo = photos.filter(function(pho) {
      return pho.id === idx;
    })[0];

    let header = document.querySelector('section > header');
    header.replaceChildren();
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
    let likeButton = document.querySelector('div.actions .like');
    let favoriteButton = document.querySelector('div.actions .favorite');
  };

  document.querySelector('section > header').addEventListener('click', (event) => {
    event.preventDefault();
    let button = event.target;
    let buttonType = button.getAttribute('data-property');
    if (buttonType) {
      let href = button.getAttribute('href');
      let text = button.textContent;
      let dataId = button.getAttribute('data-id');
      fetch(href, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: 'photo_id=' + dataId,
        //mode: 'no-cors',
        //'Content-Type': 'application/json',
      }).then(response => response.json())
        .then(json => {
          button.textContent = text.replace(/\d+/, json.total);
        });
    }
  });

  function updateComments(json) {
    commentsList.insertAdjacentHTML('beforeend', templates.photo_comment(json));
  }

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    //Get the form data
    //Send a post request in URLencoded form
    //Get the response
    //add a new comment by loading a new partial template with the response
    let formDataUrl = new URLSearchParams(new FormData(event.target));
    let url = event.target.action;
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      body: formDataUrl,
    }).then(response => response.json())
      .then(json => {
        updateComments(json);
        event.target.reset();
      });
  });

  const renderComments = function(idx) {
    fetch(`/comments?photo_id=${idx}`)
      .then(response => response.json())
      .then(json => {
        comments = json;
        commentsList.replaceChildren();
        commentsList.insertAdjacentHTML('beforeend', templates.photo_comments({comments: comments}));
      });
  };

  fetch("/photos")
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[currentPhoto].id);
      renderComments(photos[currentPhoto].id);
    });

  function renderPhotos() {
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
  }

  function cyclePhotos(reverse = false) {
    console.log(currentPhoto);
    let figs = [...slides.children];
    figs[currentPhoto].className = 'hide';
    //figs[currentPhoto].style.opacity = '0';
    if (!reverse) {
      currentPhoto += 1;
      if (currentPhoto >= figs.length) {
        currentPhoto = 0;
      }
    } else {
      currentPhoto -= 1;
      if (currentPhoto < 0) {
        currentPhoto = figs.length - 1;
      }
    }
    //figs[currentPhoto].style.opacity = '1';
    figs[currentPhoto].className = 'show';
    renderComments(photos[currentPhoto].id);
    renderPhotoInformation(photos[currentPhoto].id);

  }

  nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    cyclePhotos();
  });

  previousButton.addEventListener('click', (event) => {
    event.preventDefault();
    cyclePhotos(true);
  });



    //photos.unshift(...photos.splice(1));
    //renderPhotos();
    //renderPhotoInformation(photos[0].id);
    //renderComments(photos[0].id);


  //  function parseHTML(text) {
  //    let template = document.createElement('template');
  //    template.innerHTML = text.trim();
  //    return template.content.children;
  //  }
  //
  //
  //  async function processPhotosTemplate() {
  //    //let images;
  //    let script = Handlebars.compile(photosTemplate.innerHTML);
  //    let images = await fetch('/photos').then(response => response.json());
  //    let slidesCollection = (parseHTML(script({photos: images})));
  //    for (let idx = 0; idx < slidesCollection.length; idx += 1) {
  //      slides.append(slidesCollection[idx]);
  //    }
  //  }
  //
  //  function processInfoTemplate() {
  //  }
  //
  //  function processCommentsTemplate() {
  //  }
  //
  //  function processCommentTemplate() {
  //  }
  //
  //  processPhotosTemplate();

});
