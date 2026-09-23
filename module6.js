// TODO //Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} років і в нього ${} публікацій.`

// function User(user) {
//     this.userName = user.userName,
//     this.age = user.age,
//     this.numbersOfPost = user.numbersOfPost,                        //!!!! БЕДА !!!!!

// }

// console.log(new User({ userName: 'Poly', age: 12, numbersOfPost: 416 }));

// TODO Створіть метод getInfo(), який повертає ім’я та вік користувача.

// const user = {
//   name: 'Alice',
//   age: 28,

//   getInfo() {
//     return `${this.name}, ${this.age}`;
//   },
// };

// console.log(user.getInfo());

// TODO Створіть notificationService.send() і передайте його у execute(). Збережіть контекст

// const notificationService = {
//   prefix: 'NOTIFICATION',
//   send() {
//     return this.prefix;
//   },
// };

// const execute = callback => callback();

// console.log(execute(notificationService.send.bind(notificationService)));

// TODO Створіть метод activate(), який змінює active поточного об’єкта на true.

// const user = {
//   name: 'Bob',
//   active: false,
//   activate() {
//     this.active = true;
//   },
// };

// user.activate();
// console.log(user.active);

// TODO Метод getName() має використовувати this.prefix. Передайте його в map() без втрати контексту.

// const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'John' }];

// const userService = {
//   prefix: 'user',

//   getNames(user) {
//     return {
//       name: user.name,
//       prefix: this.prefix,
//     };
//   },
// };

// const result = users.map(userService.getNames.bind(userService)); // getNames() === ()=>{}

// console.log(result);

// TODO bind вміє фіксувати не лише контекст, а й перші аргументи. Створи з універсального методу відправки повідомлень готову функцію, у якої канал уже підставлений, а текст передається під час виклику.

// const messenger = {
//   sender: 'Shop Bot',
//   send(channel, text, tetx2) {
//     return `[${channel}] ${this.sender}: ${text}`;
//   },
// };

// const sendToSms = messenger.send.bind(messenger, 'SMS');
// console.dir(sendToSms);
// const sendToEmail = messenger.send.bind(messenger, 'Email');

// console.log(sendToSms('Ваше замовлення готове'));
// // console.log(sendToEmail('Чек у вкладеннi'));

// TODO Є об'єкт співробітника. Додай йому метод getFullName(), який повертає повне ім'я, звертаючись до полів через this. Жорстко вписувати ім'я всередину методу не можна — метод має працювати для будь-якого об'єкта з такими полями.

// const employee = {
//   firstName: 'Іван',
//   lastName: 'Петренко',
//   position: 'Frontend Developer',

//   getFullName() {
//     return `${this.firstName}, ${this.lastName}`;
//   },
// };

// const employee2 = {
//   firstName: 'Петрео',
//   lastName: 'Іваненко',
//   position: 'Backend Developer',
// };

// console.log(employee.getFullName());

// console.log(employee.getFullName.call(employee2));

// TODO Напиши функцію createCounter(start), яка повертає об'єкт з методами increment(), decrement() і value(). Лічильник має зберігатись у замиканні, а не в полі об'єкта — тоді методи не втрачають працездатність навіть якщо їх передати кудись без контексту.

// function createCounter(start = 0) {
//   let count = start;
//   return {
//     increment() {
//       count += 1;
//       return count;
//     },
//     decrement() {
//       count -= 1;
//       return count;
//     },
//     value() {
//       return count;
//     },
//   };
// }

// const counter = createCounter();

// console.dir(counter);

// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value());

// const counter2 = createCounter(7);
// counter2.increment();
// console.log(counter2.value());

// ==================================================== PART 2 ============================================= //

// TODO 🟢 Розминочна — Задача 1
// Створити клас Animal з полями name та sound.
// Метод makeSound() виводить фразу в консоль.
//

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} каже ${this.sound}`);
//   }
// }

// // Вхідні дані:
// const cat = new Animal('Барсик', 'Няв');
// const dog = new Animal('Рекс', 'Гав');
// cat.makeSound(); // "Барсик каже Няв"
// dog.makeSound(); // "Рекс каже Гав"

// TODO 🟡 Середня — Задача 2
// Створити клас Rectangle з полями width та height.
// Методи getArea() та getPerimeter().
//

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
//   getPerimeter() {
//     return (this.width + this.height) * 2;
//   }
// }

// // Вхідні дані:
// const rect = new Rectangle(5, 10);
// console.log(rect.getArea()); // 50
// console.log(rect.getPerimeter()); // 30

// TODO 🔴 Складніша — Задача 5
// Клас Circle з полем radius.
// Методи getArea() та getCircumference() (округлити до 2 знаків).
//

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   getArea() {
//     return Number((this.radius ** 2 * Math.PI).toFixed(2));
//   }

//   getCircumference() {
//     return Number((this.radius * 2 * Math.PI).toFixed(2));
//   }
// }
// // Вхідні дані:
// const circle = new Circle(4);
// console.log(circle.getArea()); // 50.27
// console.log(circle.getCircumference()); // 25.13

// TODO // 🟢 Розминочна — Задача 3
// Клас Person з полями firstName та lastName.
// Метод getFullName() повертає "Ім'я Прізвище".

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // Вхідні дані:
// const user = new Person('Андрій', 'Ковальчук');
// console.log(user.getFullName()); // "Андрій Ковальчук"

// TODO 🟡 Середня — Задача 8
// Клас Product з полями name, price, quantity (за замовчуванням 1).
// Метод getTotal() повертає price * quantity.
//

// class Product {
//   constructor(name, price, quantity = 1) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   getTotal() {
//     return this.price * this.quantity;
//   }
// }

// // Вхідні дані:
// const apple = new Product('Яблуко', 20, 3);
// const bread = new Product('Хліб', 15);
// console.log(apple.getTotal()); // 60
// console.log(bread.getTotal()); // 15 (quantity за замовчуванням 1)

// TODO 🔴 Складніша — Задача 6 + // createTransaction //
// Клас BankAccount з полем balance (за замовчуванням 0).
// Метод deposit(amount) збільшує баланс.
// Метод withdraw(amount) зменшує баланс, але НЕ повинен йти в мінус —
// якщо грошей не вистачає, вивести в консоль "Недостатньо коштів"
// і не змінювати баланс.
//

// class BankAccount {
//   static createTransaction(amount, type, balance) {
//     return {
//       amount,
//       type,
//       balance,
//     };
//   }

//   constructor(balance = 0) {
//     this.balance = balance;
//     this.transactions = [];
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;

//       const transaction = BankAccount.createTransaction(
//         amount,
//         'deposit',
//         this.balance
//       );
//       this.transactions.push(transaction);
//     }
//   }

//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log('Недостатньо коштів');
//     } else {
//       this.balance -= amount;

//       const transaction = BankAccount.createTransaction(
//         amount,
//         'withdraw',
//         this.balance
//       );
//       this.transactions.push(transaction);
//     }
//   }

//   getTransactions() {
//     return this.transactions;
//   }
//   getBalance() {
//     return this.balance;
//   }
// }

// // Вхідні дані:
// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.balance); // 150

// account.withdraw(200); // "Недостатньо коштів"
// console.log(account.balance); // 150 (не змінився)

// account.withdraw(150);
// console.log(account.balance); // 0

// console.log(account.getTransactions());

// TODO // 🟢 Розминочна — Задача 4
// Клас Counter з полем count = 0.
// Методи increment(), decrement(), reset().
//

// class Counter {
//   constructor(count = 0) {
//     this.count = count;
//   }

//   increment() {
//     this.count += 1;
//   }
//   decrement() {
//     this.count -= 1;
//   }
//   reset() {
//     this.count = 0;
//   }
// }

// // Вхідні дані:
// const counter = new Counter();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.count); // 1
// counter.reset();
// console.log(counter.count); // 0

// TODO  🟡 Середня — Задача 9
// Клас TodoItem з полями text та done (за замовчуванням false).
// Метод toggle() перемикає значення done на протилежне.
//

// class TodoItem {
//   constructor(text, done = false) {
//     this.text = text;
//     this.done = done;
//   }

//   toggle() {
//     this.done = !this.done;
//   }
// }

// // Вхідні дані:
// const task = new TodoItem('Купити молоко');
// console.log(task.done); // false
// task.toggle();
// console.log(task.done); // true
// task.toggle();
// console.log(task.done); // false

// TODO  🔴 Складніша — Задача 10           //  String(Math.floor(this.seconds / 60)).padStart(2, '0')
// Клас Timer з полем seconds = 0.
// Метод tick() збільшує seconds на 1.
// Метод getFormatted() повертає рядок виду "хх:сс" (з провідними нулями).
//

// class Timer {
//   constructor(seconds = 0) {
//     this.seconds = seconds;
//   }
//   tick() {
//     this.seconds += 1;
//   }
//   getFormatted() {
//     return `${String(Math.floor(this.seconds / 60)).padStart(2, '0')}:${String(this.seconds % 60).padStart(2, '0')}`;
//   }
// }

// // Вхідні дані:
// const timer = new Timer();
// for (let i = 0; i < 120; i++) {
//   timer.tick();
// }
// console.log(timer.getFormatted()); // "01:05"

// TODO
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priority() {
//     return {
//       HIGH: 'high',
//       MEDIUM: 'medium',
//       LOW: 'low',
//     };
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     // this.items = this.items.filter(note => note.text !== text);
//     // AБО
//     const atIndex = this.items.findIndex(note => note.text === text);
//     this.items.splice(atIndex, 1);
//   }
//   updatePriority(text, newPriority) {
//     // const atIndex = this.items.findIndex(note => note.text === text);
//     // this.items[atIndex].priority = newPriority;
//     // AБО
//     const note = this.items.find(note => note.text === text);
//     note.priority = newPriority;
//   }
// }

// const notes = new Notes();

// notes.addNote({
//   text: 'Hello',
//   priority: Notes.Priority().MEDIUM,
// });

// // console.log(notes.items);
// notes.addNote({
//   text: 'Meeting',
//   priority: Notes.Priority().MEDIUM,
// });
// console.log(notes.items);

// notes.removeNote('Hello');

// console.log(notes.items);

// notes.updatePriority('Meeting', Notes.Priority().HIGH);
// console.log(notes.items);

// TODO 🟢 Розминочна — Задача 11
// Клас Playlist з полем songs = [].
// Метод addSong(song) додає пісню (рядок) в кінець масиву.
// Метод removeSong(song) видаляє вказану пісню з масиву.
// Метод getCount() повертає кількість пісень.
//

// class Playlist {
//   constructor() {
//     this.songs = [];
//   }

//   addSong(song) {
//     this.songs.push(song);
//   }

//   removeSong(searcedSong) {
//     const atIndex = this.songs.findIndex(song => song === searcedSong);
//     this.songs.splice(atIndex, 1);
//   }

//   getCount() {
//     return this.songs.length;
//   }
// }

// // Вхідні дані:
// const playlist = new Playlist();
// playlist.addSong('Shape of You');
// playlist.addSong('Believer');
// playlist.addSong('Numb');
// console.log(playlist.getCount()); // 3

// playlist.removeSong('Believer');
// console.log(playlist.songs); // ['Shape of You', 'Numb']
// console.log(playlist.getCount()); // 2

// TODO 🟡 Середня — Задача 12
// Клас Student з полями name та grades = [].
// Метод addGrade(grade) додає оцінку в масив.
// Метод getAverage() повертає середній бал (округлити до 1 знака).
//

// class Student {
//   constructor(name) {
//     this.name = name;
//     this.grades = [];
//   }

//   addGrade(grade) {
//     this.grades.push(grade);
//   }

//   getAverage() {
//     return Number(
//       (
//         this.grades.reduce((total, grade) => (total += grade)) /
//         this.grades.length
//       ).toFixed(1)
//     );
//   }
// }

// // Вхідні дані:
// const anna = new Student('Анна');
// anna.addGrade(90);
// anna.addGrade(85);
// anna.addGrade(95);
// console.log(anna.getAverage()); // 90

// const oleg = new Student('Олег');
// oleg.addGrade(70);
// oleg.addGrade(60);
// console.log(oleg.getAverage()); // 65

// Завдання: порівняти середні бали Анни та Олега
// і вивести в консоль ім'я студента з вищим середнім балом.
// Очікуваний результат: "Анна має вищий середній бал: 90"

// TODO  🔴 Складніша — Задача 13
// Клас Car з полями brand та fuel (за замовчуванням 100).
// Метод drive(distance) зменшує fuel на 1% за кожен пройдений км.
// Якщо fuel опускається до 0 або нижче — встановити fuel = 0
// і вивести в консоль "${brand}: паливо закінчилось".
//

// class Car {
//   constructor(brand, fuel = 100) {
//     this.brand = brand;
//     this.fuel = fuel;
//   }

//   drive(distance) {
//     this.fuel -= distance;
//     if (this.fuel <= 0) {
//       this.fuel = 0;
//       console.log(`${this.brand}: паливо закінчилось`);
//     }
//   }
// }

// // Вхідні дані:
// const cars = [new Car('Toyota'), new Car('BMW', 40), new Car('Lada', 15)];

// cars.forEach(car => car.drive(30));

// // Очікуваний результат у консолі:
// // (у машини Lada паливо повинно закінчитись, для решти — ні)
// // "Lada: паливо закінчилось"

// console.log(cars.map(car => `${car.brand}: ${car.fuel}%`));
// // ['Toyota: 70%', 'BMW: 10%', 'Lada: 0%']

// TODO Замовлення не може стрибнути з «нового» одразу в «завершене». Реалізуй OrderStateMachine з таблицею дозволених переходів, методами can(next), to(next) (кидає помилку при забороненому переході) і history, що зберігає весь шлях.

// class OrderStateMachine {
//   static TRANSITIONS = {
//     new: ['paid', 'canceled'],
//     paid: ['shipped', 'refund'],
//     shipped: ['arrived'],
//     canceled: [],
//     refund: [],
//     arrived: [],
//   };
//   #history;
//   #orderState;

//   constructor(initial = 'new') {
//     this.#history = [initial];
//     this.#orderState = initial;
//   }

//   get history() {
//     return [...this.#history];
//   }

//   set history(newHistory) {
//     this.#history = newHistory;
//   }

//   get orderState() {
//     return this.#orderState;
//   }

//   can(next) {
//     return OrderStateMachine.TRANSITIONS[this.#orderState].includes(next);
//   }

//   to(next) {
//     if (!this.can(next)) {
//       throw new Error(`Перехiд з ${this.#orderState} до ${next} заборонено`);
//     }
//     this.#history.push(next);
//     this.#orderState = next;
//   }
// }

// const path = ['paid', 'shipped', 'new'];

// const order = new OrderStateMachine();

// console.log(order.history);
// console.log(order.orderState);
// * НОВОЕ Обработка ошибок // Error //
// path.forEach(item => {
//   try {
//     order.to(item);
//     console.log(`Стан: ${item}`);
//     console.log(order.history);
//   } catch (err) {
//     console.log(err.message);
//   }
// });
// * Гетери i сетери
// console.log('Гетери i сетери:');
// console.log(order.history);

// order.history = ['new', 'new'];

// console.log(order.history);
