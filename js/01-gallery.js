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

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach(item => {
    const galleryItemElement = document.createElement('div');
    galleryItemElement.className = 'gallery__item';

    const imageElement = document.createElement('img');
    imageElement.src = item.preview;
    imageElement.alt = item.description;

    const linkElement = document.createElement('a');
    linkElement.href = item.original;

    linkElement.appendChild(imageElement);
    galleryItemElement.appendChild(linkElement);

    galleryContainer.appendChild(galleryItemElement);
});

const bigImageContainer = document.createElement('div');
bigImageContainer.className = 'big-image';

const bigImage = document.createElement('img');
bigImageContainer.appendChild(bigImage);

galleryContainer.appendChild(bigImageContainer);

// Отримуємо всі елементи зображень
const imageElements = galleryContainer.querySelectorAll('.gallery-item img');

// Додаємо обробник події для кожного зображення
imageElements.forEach(image => {
  image.addEventListener('mouseenter', () => {
      bigImage.src = image.src.replace('__480', '_1280');
    // Замінюємо мініатюру на велике зображення
    bigImage.alt = image.alt;
      bigImageContainer.style.display = 'block';
    // Показуємо велике зображення
  });

  image.addEventListener('mouseleave', () => {
    bigImageContainer.style.display = 'none'; // Приховуємо велике зображення
  });
});

console.log(galleryItems);


