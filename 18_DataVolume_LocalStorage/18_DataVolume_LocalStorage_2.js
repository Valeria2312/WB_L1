//решение 2
function changeLocalStorage() {
  //провяем поддерживает ли браузер localStorage и не была ли уже определена максимальная емкость данных
  if (!localStorage.getItem("size")) {
    //используем для увеличения размера данных
    let i = 0;
    //Если при выполнении кода возникает исключение, то выполнение переходит в блок catch, где будет обработано это исключение.
    try {

      //увеличиваем размер данных с шагом 250 КБ
      for (i = 250; i <= 10000; i += 250) {
        localStorage.setItem("size", new Array(i * 1024).join("a"));
      }
    } catch (e) {
      console.log(i - 250);
      localStorage.removeItem("size");
      //убираем то что уже не поместилось
      localStorage.setItem("size", i - 250);
    }
  }
}
changeLocalStorage();

