// TODO З масиву товарів { id, title, price } треба отримати простий масив назв, щоб підставити його в підказку пошуку. Напиши стрілочну функцію getTitles, яка використовує map.

// const getTitles = products => {
//   const titleArr = products.map((el, id, arr) => {
//     return el.title;
//   });
//   return titleArr;
// };

// * Скорочено
// const getTitles = products => products.map(el => el.title);

// console.log(
//   getTitles([
//     { id: 1, title: 'Миша' },
//     { id: 2, title: 'Монітор' },
//   ])
// );

// TODO Кожна стаття має масив тегів. Для хмари тегів потрібен один плоский список (повтори поки що залишаємо). Напиши функцію collectTags(articles)

// const collectTags = articles => {
//   const tagsArr = articles.flatMap((el, id, arr) => {
//     return el.tags;
//   });
//   return tagsArr;
// };

// * Скорочено
// const collectTags = articles => articles.flatMap(article => article.tags);

// console.log(collectTags([{ tags: ['js', 'css'] }, { tags: ['html'] }]));

// TODO Постачальник підняв ціни на певний відсоток. Напиши функцію applyMarkup(prices, percent), яка повертає новий масив цін із націнкою, округлених до 2 знаків. Вихідний масив не змінюється.

// const applyMarkup = (prices, percent) => {
//   const newPrices = prices.map((el, id, Arr) => {
//     return Number((el * (1 + percent / 100)).toFixed(2));
//   });
//   return newPrices;
// };

// * Скорочено
// const applyMarkup = (prices, percent) =>
//   prices.map(el => Number((el * (1 + percent / 100)).toFixed(2)));

// console.log(applyMarkup([100, 250], 10));

// TODO ***** Для звіту треба зібрати всі товарні позиції з масиву замовлень в один масив, додавши до кожної позиції номер замовлення. Напиши функцію collectOrderItems(orders), де замовлення — { id, items: [{ title, qty }] }.

// const collectOrderItems = orders => {
//   const orderItems = orders.flatMap(order => {
//     return order.items.map(item => {
//       return { ...item, orderId: order.id };
//     });
//   });
//   return orderItems;
// };

// * Скорочено

// const collectOrderItems = orders =>
//   orders.flatMap(order =>
//     order.items.map(item => ({ ...item, orderId: order.id }))
//   );

// ///

// console.log(
//   collectOrderItems([
//     {
//       id: 10,
//       items: [
//         { title: 'Миша', qty: 3 },
//         { title: 'Монiтор', qty: 1 },
//       ],
//     },
//     { id: 11, items: [{ title: 'Клава', qty: 3 }] },
//   ])
// );

// TODO flatMap вміє відкидати елементи: якщо колбек повертає порожній масив, елемент зникає. Напиши функцію getDeliveredCities(orders), яка повертає міста лише доставлених замовлень (status === 'delivered'), використавши один flatMap.

// const getDeliveredCities = orders =>
//   orders.flatMap(order => (order.status === 'delivered' ? order.city : []));

// * Лучше использовать filter
// const getDeliveredCities = orders =>
//   orders.filter(order => order.status === 'delivered').map(order => order.city);

// //

// console.log(
//   getDeliveredCities([
//     { city: 'Київ', status: 'delivered' },
//     { city: 'Львів', status: 'new' },
//   ])
// );

// TODO Користувачі вводять телефон як завгодно: з пробілами, дужками й дефісами. Напиши функцію normalizePhones(phones), яка залишає лише цифри і приводить номер до вигляду +380XXXXXXXXX. Номери, у яких після очищення не 12 цифр, познач як null.

// const onlyDigits = phone =>
//   phone
//     .split('')
//     .filter(symbol => symbol >= '0' && symbol <= '9')
//     .join('');

// const normalizePhones = (phones, callback) =>
//   phones.map(phone => {
//     const digits = callback(phone);

//     return digits.length === 12 ? '+' + digits : null;
//   });

// console.log(normalizePhones(['(067) 123-45-67', '380671234567'], onlyDigits));

// ========================================== PART 2 ==========================================//

// TODO Є масив цін: Створи новий масив, у якому кожна ціна буде зменшена на 10%.
// const prices = [100, 250, 80, 500, 120];

// const newPrices = (prices, discount) =>
//   prices.reduce((acc, price) => {
//     acc.push(price * (1 - discount / 100));
//     return acc;
//   }, []);

// console.log(newPrices(prices, 10));

// TODO Є масив користувачів. Отримай масив, який містить тільки імена користувачів.

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 },
// ];

// const usersNames = users => {
//   return users.reduce((names, user) => {
//     names.push(user.name);
//     return names;
//   }, []);
// };

// console.log(usersNames(users));

// TODO Використовуючи масив користувачів із попередньої задачі, отримай тільки користувачів віком 18 років і старше.

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 },
// ];
// * filter
// const adultUsers = users => users.filter(user => user.age >= 18);

// * reduce
// const adultUsers = users => {
//   return users.reduce((acc, user) => {
//     if (user.age >= 18) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);
// };

// console.log(adultUsers(users));

// TODO Є:  Створи новий масив, де кожен елемент має name і finalPrice. finalPrice — ціна після знижки.
// const products = [
//   { name: 'Phone', price: 1000, discount: 10 },
//   { name: 'Mouse', price: 100, discount: 20 },
//   { name: 'Keyboard', price: 200, discount: 0 },
// ];

// * map
// const getProductsWithDiscount = products => {
//   return products.map(product => {
//     return {
//       name: product.name,
//       finalPrice: product.price * (1 - product.discount / 100),
//     };
//   });
// };

// * Деструктуризация
// const { name, price, discount } = { name: 'Phone', price: 1000, discount: 10 };

// * Деструктуризация
// const getProductsWithDiscount = products => {
//   return products.map(({ name, price, discount }) => {
//     return {
//       name,
//       finalPrice: price * (1 - discount / 100),
//     };
//   });
// };

// * reduce
// const getProductsWithDiscount = products => {
//   return products.reduce((acc, product) => {
//     acc.push({
//       name: product.name,
//       finalPrice: product.price * (1 - product.discount / 100),
//     });
//     return acc;
//   }, []);
// };

// console.log(getProductsWithDiscount(products));

// TODOЄ: Порахуй суму всіх замовлень користувача з userId === 1.
// const orders = [
//   { userId: 1, total: 100 },
//   { userId: 2, total: 200 },
//   { userId: 1, total: 300 },
//   { userId: 3, total: 150 },
// ];

// const getTotalPrice = (orders, userId) =>
//   orders
//     .filter(order => order.userId === userId)
//     .reduce((total, order) => total + order.total, 0);

// console.log(getTotalPrice(orders, 1));

// TODO Умова Отримай email тільки активних користувачів.

// const users = [
//   { name: 'Alice', email: 'alice@gmail.com', active: true },
//   { name: 'Bob', email: 'bob@gmail.com', active: false },
//   { name: 'John', email: 'john@gmail.com', active: true },
// ];

// const getActiveUsers = users =>
//   users.filter(user => user.active).map(user => user.email);

// console.log(getActiveUsers(users));

// TODOЄ: Порахуй загальну суму всіх замовлень.
// const orders = [
//   {
//     id: 1,
//     customer: 'Alice',
//     items: [
//       { name: 'Phone', price: 800, quantity: 1 },
//       { name: 'Mouse', price: 50, quantity: 2 },
//     ],
//   },
//   {
//     id: 2,
//     customer: 'Bob',
//     items: [{ name: 'Laptop', price: 1200, quantity: 1 }],
//   },
// ];
// // * flatMap + reduce
// // const totalPrice = orders =>
// //   orders
// //     .flatMap(order => order.items)
// //     .reduce((total, item) => total + item.price * item.quantity, 0);

// // * reduce
// const totalPrice = orders =>
//   orders.reduce(
//     (ordersSum, order) =>
//       ordersSum +
//       order.items.reduce(
//         (itemsSum, item) => itemsSum + item.price * item.quantity,
//         0
//       ),
//     0
//   );

// console.log(totalPrice(orders));

// TODO Порахуй середній вік усіх користувачів.

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'John', age: 30 },
//   { name: 'Maria', age: 28 },
// ];

// const getAvaregeAge = users =>
//   users.reduce((totalAge, user) => totalAge + user.age, 0) / users.length;

// console.log(getAvaregeAge(users));

// TODO Знайди найдорожчий товар категорії "laptop".

// const products = [
//   { name: 'iPhone', category: 'phone', price: 900 },
//   { name: 'Samsung', category: 'phone', price: 700 },
//   { name: 'MacBook Air', category: 'laptop', price: 1200 },
//   { name: 'Dell XPS', category: 'laptop', price: 1500 },
// ];

// const getMostExpensiveProduct = (products, category) => {
//   const filteredProducts = products.filter(
//     product => product.category === category
//   );
//   if (filteredProducts.length > 0) {
//     return filteredProducts.reduce((mostExpensiveProduct, product) =>
//       product.price > mostExpensiveProduct.price ? product : highestPrice
//     ).name;
//   }
//   return `Product not found`;
// };

// console.log(getMostExpensiveProduct(products, 'laptop'));
