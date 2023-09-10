//26.	Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, начиная с указанного элемента, и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).

function traverseDOM(node) {
  // Выполняйте действия с текущим узлом здесь, например, выведите его в консоль
  console.log(node);

  // Получаем дочерние элементы текущего узла
  const children = node.childNodes;

  // Рекурсивно вызываем функцию для каждого дочернего элемента
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    //проверяем
    if (child.nodeType === Node.ELEMENT_NODE) {
      traverseDOM(child);
    }
  }
}

// Начнем обход с корневого элемента, например, с <body>
const rootNode = document.body;
traverseDOM(rootNode);
