//28.	Задача: Создать и добавить элемент с использованием шаблонов: Напишите функцию, которая создает новый элемент
// с использованием шаблонов (например, с помощью тега <template>) и добавляет его в DOM.
//массив книг для использования шаблона


const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        price: 12.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "The story of young Scout Finch, her brother Jem, and their father Atticus, who defends a black man accused of raping a white woman.",
        price: 10.99
    },
    {
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel that explores themes of totalitarianism, censorship, and the loss of individuality.",
        price: 14.99
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "The story of Elizabeth Bennet and her complex relationship with the wealthy and aloof Mr. Darcy.",
        price: 9.99
    }
];
const bookTemplate = document.querySelector('#bookTemplate');
const bookTitle = bookTemplate.content.querySelector(".book-title");
const bookAuthor = bookTemplate.content.querySelector(".book-author");
const bookDescription = bookTemplate.content.querySelector(".book-description");
const bookPrice = bookTemplate.content.querySelector(".book-price");

const bookList = document.querySelector("#bookList");

books.forEach(book => {
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookDescription.textContent = book.description;
    bookPrice.textContent = book.price;
    let div = bookTemplate.content.cloneNode(true)
    bookList.append(div);
})
