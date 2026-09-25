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
}
