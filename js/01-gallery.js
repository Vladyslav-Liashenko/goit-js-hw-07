// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryElement = [];

galleryItems.forEach((item) => {
  const galleryItemElement = document.createElement("li");
  galleryItemElement.className = "gallery__item";
  const link = document.createElement("a");
  link.className = "gallery__link";
  link.setAttribute("href", item.original);
  const imageElement = document.createElement("img");
  imageElement.src = item.preview;
  imageElement.alt = item.description;
  imageElement.setAttribute("data-src", item.original);
  imageElement.className = "gallery__image";
  galleryItemElement.appendChild(link);
  link.appendChild(imageElement);
  galleryElement.push(galleryItemElement);
});
galleryContainer.append(...galleryElement);

galleryContainer.addEventListener("click", openmodal);
function openmodal(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const src = event.target.dataset.src;
    const instance = basicLightbox.create(
      `
      <div class="modal">
          <img src="${src}" alt="${event.target.alt} href="${src}">
      </div>
  `,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", keyCodeEvent);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", keyCodeEvent);
        }
      }
    );
    instance.show();
    function keyCodeEvent(event) {
      if (event.keyCode === 27) {
        instance.close();
      }
    }
  };
};
console.log(galleryItems);
