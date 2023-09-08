//12.	Задача на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publicationYear: 1925,
};

//методы для получения свойств книги
//получить значение, обратившись к ключу объекта
console.log(book.author); //F. Scott Fitzgerald
//или

//С использованием квадратных скобок
console.log(book["title"]); //The Great Gatsby
//или
//динамическое обращение
const propertyName = "title";
console.log(book[propertyName]); //The Great Gatsby
//или

//через деструктуризацию
const { publicationYear } = book;
console.log(publicationYear); //1925

//методы для изменения свойств книги

//присвоить новое значение, обратившись к ключу объекта
book.title = "1984";
console.log(book.title); //Not the Great Gatsby
//или

//динамическое обращение
const key = "author";
book[key] = "George Orwell";
console.log(book); //{ title: '1984', author: 'George Orwell', publicationYear: 1925 }
//или

//использование метода Object.defineProperty.
Object.defineProperty(book, "title", {
  value: "The Great Gatsby",
});
console.log(book); //{title: 'The Great Gatsby',author: 'George Orwell',publicationYear: 1925}
