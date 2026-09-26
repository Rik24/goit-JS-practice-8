// TODO 1 Кнопка оформлення замовлення заблокована, доки користувач не поставив галочку згоди.

// Що зробити:
// Повісити обробник change на чекбокс.
// Керувати властивістю disabled кнопки залежно від event.target.checked.
// Перевірити, що зняття галочки знову блокує кнопку.

// const refs = {
//   checkbox: document.querySelector('#agree'),
//   order: document.querySelector('#order'),
// };
// refs.checkbox.addEventListener('change', onCheckboxClick);

// function onCheckboxClick(event) {
//   refs.order.disabled = !event.target.checked;
// }

// TODO 2 Під полем відгуку показуємо, скільки символів уже введено, і попереджаємо, коли ліміт майже вичерпано.

// Що зробити:

// Слухати подію input на textarea.
// Виводити поточну довжину value в лічильник.
// Додавати клас warn, коли залишилось менше 20 символів.

// const LIMIT = 200;

// const refs = {
//   review: document.querySelector('#review'),
//   usedLetters: document.querySelector('#used'),
// };

// refs.review.addEventListener('input', onReviewInput);

// function onReviewInput(event) {
//   const letterCount = event.target.value.length;
//   refs.usedLetters.textContent = letterCount;
//   //   if (letterCount > 20) {
//   //     refs.usedLetters.classList.add('warn');
//   //   } else {
//   //     refs.usedLetters.classList.remove('warn');
//   //   }
//   // АБО
//   refs.usedLetters.classList.toggle('warn', letterCount > LIMIT - 180);
// }

// TODO 3 Поле в котором курсор должно выделятся рамкой

// const refs = {
//   formCheckout: document.querySelector('#checkout'),
//   fieldInputs: document.querySelectorAll('.field input'),
// };

// refs.fieldInputs.forEach(input => {
//   const field = input.closest('.field');
//   input.addEventListener('focus', () => field.classList.add('focused'));
//   input.addEventListener('blur', () => field.classList.remove('focused'));
// });

// TODO 4 Опис, Характеристики, Вiдгуки перемикаються вкладками. Одна показуеться iншi прихованi

// const refs = {
//   tabsBox: document.querySelector('.tabs'),
//   tabsList: document.querySelectorAll('.tab'),
//   panels: document.querySelectorAll('.panel'),
// };

// refs.tabsBox.addEventListener('click', onTabsItemClick);

// function onTabsItemClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   refs.tabsList.forEach(tab => tab.classList.remove('active'));
//   refs.panels.forEach(panel => {
//     // if (event.target.dataset.tab === panel.dataset.panel) {
//     //   panel.hidden = false;
//     // } else {
//     //   panel.hidden = true;
//     // }
//     // АБО
//     panel.hidden = panel.dataset.panel !== event.target.dataset.tab;
//   });
//   event.target.classList.add('active');
// }

// TODO 5 Аккордеон FAQ притань

// const refs = {
//   faq: document.querySelector('.faq'),
//   items: document.querySelectorAll('.item'),
//   buttons: document.querySelectorAll('.question'),
// };

// refs.faq.addEventListener('click', onFaqClick);

// function onFaqClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentItem = event.target.closest('.item');
//   const isOpened = currentItem.classList.contains('opened');
//   refs.items.forEach(item => item.classList.remove('opened'));
//   refs.buttons.forEach(button => (button.ariaExpanded = false));

//   // if (!isOpened) {
//   //     currentItem.classList.add('opened');
//   //     event.target.ariaExpanded = true;
//   // }
//   // Або
//   currentItem.classList.toggle('opened', !isOpened);
//   event.target.ariaExpanded = !isOpened;
// }

// TODO /6/ Дані рейсу зберігаються в data-атрибутах. Замість п’яти звертань до dataset розберіть його однією деструктуризацією і складіть рядок для табло.

// Що зробити:
// Отримати dataset картки рейсу.
// Однією деструктуризацією дістати code, from, to, gate, time.
// Скласти підсумковий рядок і вивести його в .summary.

// const refs = {
//   flightArticle: document.querySelector('.flight'),
//   flightSummary: document.querySelector('.summary'),
// };

// const { code, from, to, gate, time } = refs.flightArticle.dataset;

// const message = `${code}: ${from} => ${to}, Вхiд: ${gate}, Вилiт: ${time}`;

// refs.flightSummary.textContent = message;

// TODO /7/ Ключі data-атрибутів короткі й неоднозначні: name і price нічого не кажуть про контекст. Дайте змінним зрозумілі імена прямо в деструктуризації.

// Що зробити:
// Дістати dataset картки номера.
// Розібрати його з перейменуванням: name → roomName, price → pricePerNight.
// Порахувати вартість трьох ночей і вивести опис у .info.

// const refs = {
//   roomData: document.querySelector('.room'),
//   roomInfo: document.querySelector('.info'),
// };

// const { name: roomName, price: pricePerNight, beds } = refs.roomData.dataset;

// refs.roomInfo.textContent = `Цiна за три ночi в номерi ${roomName} з ${beds} лiжками буде: ${Number(pricePerNight) * 3}`;

// TODO /8/ У частини позицій прайсу немає атрибута data-discount. Код не повинен ламатись і не повинен писати NaN.

// Що зробити:
// У циклі по позиціях розібрати dataset із значенням за замовчуванням для discount.
// Порахувати кінцеву ціну з урахуванням відсотка знижки.
// Вивести результат у текст позиції.

// const refs = {
//   priceListItems: document.querySelectorAll('.price-list .item'),
// };

// refs.priceListItems.forEach(item => {
//   const { title, price, discount } = item.dataset;
//   const newPrice = discount ? price * (1 - discount / 100) : price;
//   item.textContent = `Цiна на ${title}: ${newPrice} грн`;
// });

// TODO /9/ Кнопка «прочитано» позначає сповіщення. Замість event.target у трьох місцях дістаньте target один раз деструктуризацією.

// Що зробити:
// Повісити делегований обробник на список сповіщень.
// Деструктуризацією дістати target з обʼєкта події.
// Знайти саме сповіщення і позначити його класом is-read.
// Прибрати кнопку, бо вона вже не потрібна.

// const refs = {
//   notificationList: document.querySelector('.notifications'),
// };

// refs.notificationList.addEventListener('click', onNotificationClick);

// function onNotificationClick(event) {
//   const { target } = event;
//   if (target.nodeName !== 'BUTTON') {
//     return;
//   }

//   target.closest('.notification').classList.add('is-read');
//   target.hidden = true;
// }

// TODO /10/ SMS

// const refs = {
//   SMSInput: document.querySelector('#code'),
//   SMSStatus: document.querySelector('#status'),
// };

// refs.SMSInput.addEventListener('keydown', onSMSInputType);

// function onSMSInputType(event) {
//   const { key, target } = event;
//   if (key !== 'Enter') {
//     return;
//   }

//   //   if (target.value.trim().length === 6) {
//   //     refs.SMSStatus.textContent = 'Код прийнято';
//   //   } else {
//   //     refs.SMSStatus.textContent = 'Довжина коду повинна бути 6 цифр';
//   //   }

//   refs.SMSStatus.textContent =
//     target.value.trim().length === 6
//       ? 'Код прийнято'
//       : 'Довжина коду повинна бути 6 цифр';
// }
