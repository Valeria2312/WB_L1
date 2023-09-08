//5.	Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON,
// содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

//создаем тестовый JSON
const jsonData = [
  {
    title: "Pride and Prejudice",
    publicationYear: 1813,
    authors: [
      {
        firstName: "Jane",
        lastName: "Austen",
        birthYear: 1775,
        nationality: "British",
      },
    ],
    genres: ["Novel", "Romance", "Classic"],
    publisher: {
      name: "T. Egerton, Whitehall",
      location: "London",
    },
  },
  {
    title: "1984",
    publicationYear: 1949,
    authors: [
      {
        firstName: "George",
        lastName: "Orwell",
        birthYear: 1903,
        nationality: "British",
      },
    ],
    genres: ["Novel", "Dystopian", "Science Fiction"],
    publisher: {
      name: "Secker & Warburg",
      location: "London",
    },
  },
  {
    title: "To Kill a Mockingbird",
    publicationYear: 1960,
    authors: [
      {
        firstName: "Harper",
        lastName: "Lee",
        birthYear: 1926,
        nationality: "American",
      },
    ],
    genres: ["Novel", "Fiction", "Classic"],
    publisher: {
      name: "J. B. Lippincott & Co.",
      location: "Philadelphia",
    },
  },
];

//Определяем класс для создания узла. Он принимает значение и устанавливает следующее свойство равным null.
class Book {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//функция записи JSON в linkedList
function jsonToLinckedList() {
  const nodes = jsonData.map((item) => new Book(item));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes;
}
const linkedList = jsonToLinckedList(jsonData);

// console.log(linkedList.data.title); // "Pride and Prejudice"
// console.log(linkedList.next.data.title); // "1984"
// console.log(linkedList.next.next.data.authors); // [{firstName: 'Harper',lastName: 'Lee',birthYear: 1926,nationality: 'American'}]
