'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let slides = document.getElementById('slides');
  const photosTemplate = document.getElementById('photos');
  const photoInfoTemplate = document.getElementById('photo_information');
  const photoCommentsTemplate = document.getElementById('photo_comments');
  const photoComment = document.getElementById('photo_comment');
  const photoList = document.querySelector('div#comments > ul');

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
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
  };

  const renderComments = function(idx) {
    fetch(`/comments?photo_id=${idx}`)
      .then(response => response.json())
      .then(json => {
        comments = json;
        photoList.insertAdjacentHTML('beforeend', templates.photo_comments({comments: comments}));
      });
  };

  fetch("/photos")
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      renderComments(photos[0].id);
    });

  function renderPhotos() {
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
  }


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
