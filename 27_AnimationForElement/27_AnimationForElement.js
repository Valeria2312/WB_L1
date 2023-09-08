//27.	Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице,
// например, плавное изменение его положения или размера.
const el = document.querySelector(".animation-element");
//базывые стили блока
el.style.background = "red";
el.style.width = "300px";
el.style.height = "300px";
el.style.position = "relative";

function animateElementRight(el, distance, duration) {
  let pos = 0; //отслеживать текущую позицию элемента.
  const interval = 10; // интервал анимации (миллисекунды)
  const steps = duration / interval; // Вычисляем количество шагов анимации.

  const step = distance / steps; //Вычисляем расстояние, которое элемент должен пройти на каждом шаге анимации
  // Создается интервал с функцией обратного вызова(коллбек)
  const timer = setInterval(function () {
    //увеличиваем позицию на шаг
    pos += step;
    //смещаем элемент вправо
    el.style.left = pos + "px";
    //Проверяеем, достигла ли текущая позиция pos заданного расстояния distance
    if (pos >= distance) {
      //останавливаем интервал и завершает анимацию
      clearInterval(timer);
    }
  }, interval);
}

animateElementRight(el, 1000, 1000); // Перемещаем элемент на 1000 пикселей вправо за 1000 миллисекунд (1 секунда)
