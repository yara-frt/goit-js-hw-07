import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}"data-source="${original}" alt="${description}"/></a></div>`).join('')
gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains('gallery')) {
        const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`)
        instance.show();

        gallery.addEventListener('keydown', onClickKeyEsc);
        function onClickKeyEsc(evt) {
            if (evt.code === `Escape`) {
                instance.close();
            }
        }
    }
};
