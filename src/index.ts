import './style.scss';
import titleBg from './img/title-bg.jpg';
import { images } from './data';
import { ImageItem } from './interfaces';

const title = document.querySelector('.title');
const galleryContent = document.querySelector('.gallery__content');

title.setAttribute('style', `background-image: url(${titleBg})`);

images.forEach((image) => {
  galleryContent.insertAdjacentHTML('beforeend', createTemplateImage(image));
});

function createTemplateImage(image: ImageItem): string {
  return `<div class="gallery__item image">
    <img src="${image.src}" alt="${image.name}" />
  </div>`;
}
