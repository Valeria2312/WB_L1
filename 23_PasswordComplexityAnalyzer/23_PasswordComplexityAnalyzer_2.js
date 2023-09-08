//
const regexp = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
);

const input2 = document.querySelector(".input2");
const check = document.querySelector(".hint2");
input2.addEventListener("keyup", function (evt) {
  const password = input2.value;
  console.log(password);
  // Проверяем длину пароля
  const lengthRegexp = /^.{8,}$/;
  // Проверяем наличие хотя бы одной цифры
  const digitRegexp = /\d/;
  // Проверяем наличие хотя бы одной буквы в нижнем регистре
  const lowercaseRegexp = /[a-z]/;
  // Проверяем наличие хотя бы одной буквы в верхнем регистре
  const uppercaseRegexp = /[A-Z]/;
  // Проверяем наличие хотя бы одного специального символа
  const specialCharRegexp = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  //устанавливаем изначальное значение сложности пароля
  let strength = 0;

  //тестируем пароль
  if (lengthRegexp.test(password)) {
    //добавляем к сложности пароля
    strength++;
  }
  if (digitRegexp.test(password)) {
    strength++;
  }
  if (lowercaseRegexp.test(password) && uppercaseRegexp.test(password)) {
    strength++;
  }
  if (specialCharRegexp.test(password)) {
    strength++;
  }
  //Показываем сложность пароля и подсказки, если они необходимы
  if (strength === 0) {
    check.textContent =
      "Очень слабый пароль. Пароль должен содержать хотя бы одну заглавную букву, цифру или символ";
    check.style.color = "#e7140d";
  } else if (strength === 1) {
    check.textContent =
      "Слабый пароль. Добавьте заглавную букву, цифры или символы";
    check.style.color = "#e7140d";
  } else if (strength === 2) {
    check.textContent = "Средний пароль";
    check.style.color = "#ffdb00";
  } else if (strength === 3) {
    check.textContent = "Сильный пароль";
    check.style.color = "#61ac27";
  } else {
    check.textContent = "Очень сильный пароль";
    check.style.color = "#61ac27";
  }
});
