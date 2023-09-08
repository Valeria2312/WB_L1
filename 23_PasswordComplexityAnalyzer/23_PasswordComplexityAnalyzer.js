//23.	Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля.
// Необходимо анализировать длину пароля, использование различных символов, наличие чисел и букв в разных регистрах.
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.
const s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
const b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
const digits = "0123456789"; // Цифры
const specials = "!@#$%^&*()_-+=|/.,:;[]{}"; // Спецсимволы

const input_test = document.querySelector(".input"); //получаем поле
const block_check = document.querySelector(".hint"); //получаем блок с индикатором
input_test.addEventListener("keyup", function (evt) {
  const input_test_val = input_test.value; //получаем значение из поля
  console.log(input_test_val);
  let is_s = false; // Есть ли в пароле буквы в нижнем регистре
  let is_b = false; // Есть ли в пароле буквы в верхнем регистре
  let is_d = false; // Есть ли в пароле цифры
  let is_sp = false; // Есть ли в пароле спецсимволы

  for (let i = 0; i < input_test_val.length; i++) {
    /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
    if (!is_s && s_letters.indexOf(input_test_val[i]) !== -1) {
      is_s = true;
    } else if (!is_b && b_letters.indexOf(input_test_val[i]) !== -1) {
      is_b = true;
    } else if (!is_d && digits.indexOf(input_test_val[i]) !== -1) {
      is_d = true;
    } else if (!is_sp && specials.indexOf(input_test_val[i]) !== -1) {
      is_sp = true;
    }
  }

  var rating = 0;
  if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
  if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
  if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
  if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
  /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
  if (input_test_val.length < 6 && rating < 3) {
    block_check.style.color = "#e7140d";
    block_check.textContent =
      "Простой пароль. Пароль должен содержать хотя бы одну заглавную букву, цифру или символ";
    input_test.style.borderColor = "#e7140d";
  } else if (input_test_val.length < 6 && rating >= 3) {
    block_check.style.color = "#ffdb00";
    block_check.textContent = "Средний пароль.";
    input_test.style.borderColor = "#ffdb00";
  } else if (input_test_val.length >= 8 && rating < 3) {
    block_check.style.color = "#ffdb00";
    block_check.textContent = "Средний пароль.";
    input_test.style.borderColor = "#ffdb00";
  } else if (input_test_val.length >= 8 && rating >= 3) {
    block_check.style.color = "#61ac27";
    block_check.textContent = "Сложный пароль.";
    input_test.style.borderColor = "#61ac27";
  } else if (input_test_val.length >= 6 && rating === 1) {
    block_check.style.color = "#e7140d";
    block_check.textContent =
      "Простой пароль. Пароль должен содержать хотя бы одну заглавную букву, цифру или символ";
    input_test.style.borderColor = "#e7140d";
  } else if (input_test_val.length >= 6 && rating > 1 && rating < 4) {
    block_check.style.color = "#ffdb00";
    block_check.textContent = "Средний пароль.";
    input_test.style.borderColor = "#ffdb00";
  } else if (input_test_val.length >= 6 && rating === 4) {
    block_check.style.color = "#61ac27";
    block_check.textContent = "Сложный пароль.";
    input_test.style.borderColor = "#61ac27";
  }
});
