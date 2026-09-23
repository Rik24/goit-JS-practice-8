// TODO 1 Магазин змінив ціну на навушники. Картка товару вже є в розмітці — треба оновити текст у ній.

// Що зробити:
// Знайти заголовок і ціну за їхніми id через getElementById.
// Вивести в консоль поточну назву товару.
// Замінити текст ціни на «999 грн».

// const cardTitle = document.querySelector('#title');

// console.dir(cardTitle);

// const cardPrice = document.querySelector('#price');

// console.dir(cardPrice);

// cardPrice.textContent = '999 грн';

// TODO 2 PDF-інструкція має відкриватися в новій вкладці.

// Що зробити:
// Прочитати href двома способами
// Вивести обидва значення й порівняти.
// Додати атрибути target="_blank" і rel="noopener".
// Перевірити через hasAttribute, що target справді з'явився.

// const PDFLinkRef = document.querySelector('#docs');

// console.dir(PDFLinkRef.href);
// // http://127.0.0.1:5500/files/manual.pdf
// console.dir(PDFLinkRef.getAttribute('href'));
// // /files/manual.pdf

// PDFLinkRef.setAttribute('target', '_blank');
// PDFLinkRef.setAttribute('rel', 'noopener noreferrer nofollow');

// TODO 3 Компанія оновила логотип. Треба підмінити файл і текстовий опис картинки.

// Що зробити:
// Знайти зображення.
// Змінити src на /img/logo-2026.svg і alt на «Логотип компанії».
// Вивести в консоль значення атрибута width.

// const logoImgRef = document.querySelector('img');

// const refs = {
//   logoImg: document.querySelector('img'),
// };

// refs.logoImg.src = '/img/logo-2026.svg';
// refs.logoImg.alt = 'Логотип компанії';

// console.log(refs.logoImg.width);

// TODO 4 Стартує розпродаж: усі ціни треба перерахувати й показати нові, а старі зберегти в розмітці для закресленої ціни.

// Що зробити:
// Знайти всі картки .product.
// Для кожної взяти data-price, порахувати −20% і округлити.
// Записати стару ціну в data-old-price, нову — в data-price.
// Оновити текст у .price всередині картки.

// const refs = {
//   cardProducts: document.querySelectorAll('.product'),
// };

// refs.cardProducts.forEach(el => {
//   const oldPrice = Number(el.dataset.price);
//   const newPrice = Math.round(oldPrice * 0.8);
//   el.dataset.oldPrice = oldPrice;
//   el.dataset.price = newPrice;
//   el.querySelector('span').textContent = `${newPrice} грн`;
// });

// TODO 5 Склад передав нові залишки. Позиції з нульовим залишком мають зникнути з каталогу.

// Що зробити:
// Перебрати всі картки .card.
// Видалити ті, у яких data-stock дорівнює 0.
// Вивести, скільки карток лишилось.

// const refs = {
//   cards: document.querySelectorAll('.card'),
// };

// refs.cards.forEach(card => {
//   if (Number(card.dataset.stock) === 0) {
//     card.remove();
//   }
// });

// // Оновлення
// refs.cards = document.querySelectorAll('.card');

// console.log(refs.cards.length);

// TODO 6 Користувач перейшов на сторінку «Контакти», а підсвіченим лишився пункт «Головна».

// Що зробити:
// Знайти поточний активний пункт (.menu .active) і зняти з нього клас active.
// Знайти пункт з data-page="contacts" за селектором атрибута і додати йому клас active.
// Перевірити результат через classList.contains.

// const refs = {
//   activeLink: document.querySelector('.menu .active'),
//   contactLink: document.querySelector('[data-page="contacts"]'),
// };

// refs.activeLink.classList.remove('active');
// refs.contactLink.classList.add('active');

// console.log(refs.contactLink.classList.contains('active'));

// TODO 7 Аналітика має дістати з картки товару його id, ціну й наявність — усе це лежить у data-атрибутах.

// Що зробити:
// Вивести dataset.id і зверніть увагу на тип значення.
// Порахувати ціну двох таких товарів (не забудьте перетворити рядок у число).
// Прочитати data-in-stock — назва властивості в dataset зміниться.
// Додати новий атрибут data-viewed="true" через dataset.

// const refs = {
//   card: document.querySelector('.card'),
// };

// console.log(refs.card.dataset.id); /// String

// console.log(Number(refs.card.dataset.price) * 2); /// 3000

// console.log(refs.card.dataset.inStock);

// refs.card.dataset.viewed = 'true';
// Aбо
// refs.card.setAttribute('data-viewed', 'true');

// TODO 8 У таблиці замовлень перша колонка порожня — туди треба проставити порядкові номери.

// Що зробити:
// Знайти всі рядки в tbody.
// Для кожного рядка записати його порядковий номер (з 1) у перший осередок.
// Використати другий аргумент forEach — індекс.

// const refs = {
//   rows: document.querySelectorAll('#orders tbody tr'),
// };

// refs.rows.forEach((row, ind) => {
//   //   row.querySelector('td').textContent = `${ind + 1}`;
//   // AБО
//   row.firstChild.textContent = `${ind + 1}`;
// });

// TODO 9 Довгу таблицю незручно читати. Кожен парний рядок треба позначити класом striped.

// Що зробити:
// Розв'язати задачу через CSS-селектор :nth-child(even) у querySelectorAll.
// Розв'язати її ж без псевдокласу — через індекс у forEach.
// У другому варіанті використати classList.toggle із другим аргументом.

// const refs = {
//   evenRows: document.querySelectorAll('#report tbody tr:nth-child(even)'),
//   ///АБО
//   rows: document.querySelectorAll('#report tbody tr'),
// };

// console.log(refs.evenRows);

// // refs.evenRows.forEach(row => {
// //   row.classList.add('stripped');
// // });
// // АБО

// refs.rows.forEach((row, index) => {
//   row.classList.toggle('stripped', index % 2 === 0);
// });

// TODO 10 Вимога від замовника: посилання на чужі сайти мають відкриватися окремо й не «зливати» реферер.

// Що зробити:
// Знайти всі посилання з атрибутом href.
// Визначити зовнішні: у них hostname не порожній і не збігається з location.hostname.
// Додати таким посиланням target="_blank", rel="noopener noreferrer" і клас external.
// Перевірити, що mailto: і внутрішні посилання лишились без змін.

// const refs = {
//   links: document.querySelectorAll('.links a'),
// };

// console.log(refs.links);
// console.log(location);

// refs.links.forEach(link => {
//   if (link.hostname !== location.hostname) {
//     link.setAttribute('target', '_blank');
//     //АБО
//     link.rel = 'noopener noreferrer';
//     link.classList.add('external');
//   }
// });

// TODO 11 Останній елемент навігації-ланцюжка — це поточна сторінка. Він не має бути посиланням.

// Що зробити:
// Знайти контейнер .breadcrumbs і його останню дитину.
// Додати їй клас current і атрибут aria-current="page".
// Якщо всередині є посилання — прибрати в нього атрибут href.

// const refs = {
//   nav: document.querySelector('.breadcrumbs'),
// };

// const lastChild = refs.nav.lastElementChild;

// console.log(lastChild);

// lastChild.classList.add('current');
// lastChild.ariaCurrent = 'page';

// const linkEl = lastChild.querySelector('a');
// if (linkEl) {
//   linkEl.removeAttribute('href');
// }

// TODO 12 Стандартний елемент форми входу: око біля поля пароля перемикає видимість введеного тексту.

// Що зробити:
// Повісити обробник click на кнопку.
// Перемикати type поля між password і text.
// Змінювати текст кнопки на «Показати» / «Сховати».
// Оновлювати aria-pressed, щоб стан був зрозумілий і скрінрідеру.

// const refs = {
//   togleButton: document.querySelector('#toggle'),
//   input: document.querySelector('#pass'),
// };

// console.log(refs.togleButton);

// refs.togleButton.addEventListener('click', onToggleButton);

// function onToggleButton() {
//   const isTypePassword = refs.input.type === 'password';

//   refs.input.type = isTypePassword ? 'text' : 'password';
//   refs.togleButton.textContent = isTypePassword ? 'Сховати' : 'Показати';
//   refs.togleButton.ariaPressed = true;
// }

// TODO 13 Форма не має відправлятись, якщо поля заповнені неправильно. Помилки показуємо під конкретними полями.

// Що зробити:
// Повісити обробник submit на форму і скасувати стандартну відправку.
// Очистити попередні тексти помилок.
// Перевірити: імʼя мінімум 2 символи, пошта містить @, пароль від 8 символів.
// Вивести кожну помилку у відповідний span[data-error].
// Якщо помилок немає — залогувати «форма валідна».

// const refs = {
//   signupForm: document.querySelector('#signup'),
//   inputs: document.querySelectorAll('input'),
//   signupErrorFields: document.querySelectorAll('.error'),
// };

// refs.signupForm.addEventListener('submit', onSignupFormSubmit);

// function onSignupFormSubmit(event) {
//   event.preventDefault();

//   refs.signupErrorFields.forEach(errorField => {
//     errorField.textContent = '';
//   });

//   const { name, email, password } = refs.signupForm.elements; // Деструктуризация элементов формы
//   // console.log(refs.signupForm.elements.password);

//   const errors = [];

//   if (name.value.trim().length < 2) {
//     errors.push(['name', 'Invalid name']);
//   }

//   if (!email.value.trim().includes('@')) {
//     errors.push(['email', 'Invalid email']);
//   }

//   if (password.value.length < 8) {
//     errors.push(['password', 'Invalid password']);
//   }

//   errors.forEach(error => {
//     refs.signupForm.querySelector(`[data-error="${error[0]}"]`).textContent =
//       error[1];
//   });

//   if (errors.length === 0) {
//     console.log('форма валідна');
//     refs.signupForm.reset();
//   }
// }

// TODO 14 Пост у стрічці: перший клік ставить лайк і збільшує лічильник, повторний — знімає.

// Що зробити:
// Зберігати стан у змінній liked і поточне число лайків.
// На click перемикати стан і змінювати число на 1 вгору або вниз.
// Оновлювати текст лічильника і клас liked на кнопці.

// const refs = {
//   likeButton: document.querySelector('.like'),
//   likeCount: document.querySelector('.like .num'),
// };

// let isLiked = false;
// let likesAmount = Number(refs.likeCount.textContent);

// refs.likeButton.addEventListener('click', onLikeButtonClick);

// function onLikeButtonClick() {
//   isLiked = !isLiked;
//   likesAmount += isLiked ? 1 : -1;

//   refs.likeCount.textContent = likesAmount;
//   refs.likeButton.classList.toggle('liked', isLiked);
// }

// TODO 15 Довгий список співробітників фільтрується під час набору тексту, без кнопки «знайти».

// Що зробити:
// Слухати input на полі пошуку.
// Порівнювати текст кожного рядка з запитом без урахування регістру.
// Ховати рядки, що не підходять, через властивість hidden.
// Показувати кількість знайдених і повідомлення, коли нічого не знайдено.

const refs = {
  filterInput: document.querySelector('#search'),
  contactsList: document.querySelector('#contacts'),
  contacts: document.querySelectorAll('#contacts li'),
  countFind: document.querySelector('#found'),
  nothingMessage: document.querySelector('#nothing'),
};

refs.filterInput.addEventListener('input', onFilterInputSearch);

function onFilterInputSearch() {
  const inputValue = refs.filterInput.value.trim().toLowerCase();
  // console.log(inputValue);

  // * forEach
  // let visibleContacts = 0;

  // refs.contacts.forEach(contact => {
  //   const isMatch = contact.textContent
  //     .trim()
  //     .toLowerCase()
  //     .includes(inputValue);

  //   contact.hidden = !isMatch;
  //   if (isMatch) {
  //     visibleContacts += 1;
  //   }
  // });

  // refs.countFind.textContent = visibleContacts;

  // refs.nothingMessage.hidden = visibleContacts !== 0;

  //  АБО

  // * innerHTML
  const contacts = [...refs.contacts];
  const filteredContacts = contacts.filter(contact =>
    contact.textContent.toLocaleLowerCase().includes(inputValue)
  );

  refs.countFind.textContent = filteredContacts.length;
  //*
  const markup = filteredContacts
    .map(
      contact => `
    <li>${contact.textContent}</li>
    `
    )
    .join('');

  //*innerHTML
  refs.contactsList.innerHTML = markup; // innerHTML = markup
  // * insertAdjacentHTML
  // refs.contactsList.insertAdjacentHTML('beforeend', markup); // insertAdjacentHTML('beforeend', markup)
  refs.nothingMessage.hidden = filteredContacts.length !== 0;
}
