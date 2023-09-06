//Находим элемент куда вставим созданный
const main2 = document.querySelector("body");
function createNewElement() {
    //создаем новый элемент с заданным тегом
    const div = document.createElement('div');
    //добавляем класс
    div.className = "createNewElement";
    //Добавляем стили через свойство cssText
    div.style.cssText = "background: orange; width: 100px; height: 100px";
    //добавляем контент
    div.textContent = "Я создан с помощью JS";
    //Вставляем элемент в родительский
    main2.append(div);
}
createNewElement()
