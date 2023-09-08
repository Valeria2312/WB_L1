//29.	Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и выполняет
// определенные действия с этими данными, например, отправляет их на сервер или отображает всплывающее окно с результатами.

//находим форму
const form = document.querySelector("form");
//вешаем обработчик
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //находим модалку и поля формы
  const overlay = document.querySelector("#overlay-modal"),
    modal = overlay.querySelector(".modal"),
    content = modal.querySelector(".modal__text"),
    name = form.querySelector('[name="name"]'),
    email = form.querySelector('[name="email"]'),
    password = form.querySelector('[name="password"]');
  //Собираем данные с формы
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  //Проверяем, что все поля собраны
  function hasEmptyFields(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key]) {
          return true; // Если найдено пустое поле, возвращаем true
        }
      }
    }
    return false; // Если пустых полей не найдено, возвращаем false
  }
  //открваем модальное окно
  overlay.classList.add("active");
  modal.classList.add("active");
  //показываем контент или подсказку
  if (!hasEmptyFields(data)) {
    content.textContent = JSON.stringify(data);
  } else {
    content.textContent = "У вас есть незаполненные поля";
  }
  //логика закрытия модального окна
  const close = document.querySelector(".modal__cross");
  //навешиваем обработчик
  close.addEventListener("click", function (e) {
    let parentModal = this.closest(".modal");
    //закрываем модальное окно
    parentModal.classList.remove("active");
    overlay.classList.remove("active");
  });
});
