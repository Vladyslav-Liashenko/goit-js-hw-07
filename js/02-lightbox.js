import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryElement = [];

galleryItems.forEach(item => {
  const galleryItemElement = document.createElement('li');
  galleryItemElement.className = 'gallery__item';
  const link = document.createElement('a');
  link.className = 'gallery__link';
  link.setAttribute("href", item.original);
  const imageElement = document.createElement('img');
  imageElement.src = item.preview;
  imageElement.alt = item.description;
  imageElement.setAttribute("data-src", item.original);
  imageElement.className = 'gallery__image';
  galleryItemElement.appendChild(link);
  link.appendChild(imageElement);
  galleryElement.push(galleryItemElement);
});
  galleryContainer.append(...galleryElement);

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
// gallery.on('show.simplelightbox', function () {
//     // setTimeout(function () {
//     // },250);
// });

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e);
// });

console.log(galleryItems);
