//19.	Реализовать виджет, отображающий список постов из любого паблика в VK (подойдет любой паблик, где постов очень много).
// Например, с помощью этой функции API VK. Виджет должен иметь фиксированные размеры и возможность прокрутки.
// При прокрутке содержимого виджета до конца должны подгружаться новые посты. Необходимо реализовать возможность кэширования уже загруженных данных:
// если пользователь закрыл страницу, а потом снова открыл ее, виджет должен отображать все загруженные ранее данные
// (новые данные должны подгружаться из учетом уже загруженных ранее).

const postList = document.querySelector(".post-list");
const widget = document.querySelector(".widget");
let posts = [];
const arrSave = []
// Переменная для проверки, выполняется ли запрос в данный момент
let isLoading = false;
// Смещение, необходимое для загрузки следующих постов
let offset = 0;
// Ключ для сохранения данных в localStorage
const localStorageKey = "cachedPosts";
// Максимальный размер localStorage
const sizeLocalStorage = 5 * 1024 * 1024;

function callbackFunc(result) {
  createPost(result.response.items);
  isLoading = false;
  saveData(result.response);
}

function getPosts() {
  if (!isLoading) {
    // Проверяем, не выполняется ли запрос уже
    isLoading = true;
    //Создаем скрипт
    const script = document.createElement("SCRIPT");
    //Идентификатор пользователя или сообщества, со стены которого необходимо получить записи
    const owner_id = -1;
    //Версия
    const v = 5.131;
    //Ключ доступа
    const access_token =
      "7e25ee9a7e25ee9a7e25ee9a377d30638e77e257e25ee9a1add22eaf3c7377b714aae49";
    //Количество записей, которое необходимо получить.
    const count = 20;
    //Имя функции, которая будет обрабатывать ответ сервера.
    const callback = "callbackFunc";
    script.src = `https://api.vk.com/method/wall.get?owner_id=${owner_id}&v=${v}&access_token=${access_token}&count=${count}&offset=${offset}&callback=${callback}`;
    //Добавляем скрипт в head
    document.getElementsByTagName("head")[0].appendChild(script);
    // console.log("посты загрузились 1 раз")
    offset += count;
  }
}

// Создание постов
function createPost(data) {
  // Форматирование даты в формате "дд месяц год"
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // Создаем массив постов из полученных данных
  data.map((item) => {
    const postElement = `<li class="post-list__item">
          <div class="post-list__item__text">${item.text}</div>
          <div class="post-list__item__subText">
            <div class="post-list__item__date">${new Date(
              item.date * 1000,
            ).toLocaleString("ru", options)}</div>
            <div class="post-list__item__subInfo">
              <div class="post-list__item__likes"><p>Лайки</p>${
                item.likes?.count
              }</div>
              <div class="post-list__item__reposts"><p>Репосты</p>${
                item.reposts?.count
              }</div>
              <div class="post-list__item__views"><p>Просмотры</p>${
                item.views?.count
              }</div>
              <div class="post-list__item__comments"><p>Комментарии</p>${
                item.comments?.count
              }</div>
            </div>
          </div>
        </li>`;
    posts.push(postElement);
  });

  postList.innerHTML = posts.join("");
}

// Отображение постов и проверка на кэшированные данные при загрузке виджета
function loadCachedData() {
  // Получаем данные из localStorage
  const cachedData = localStorage.getItem(localStorageKey);
  // Если данные есть, отображаем их
  if (cachedData) {
    //Парсим данные из localStorage в массив постов
    const saveData = JSON.parse(cachedData)
  // Устанавливаем смещение на количество кэшированных постов
    offset = saveData.length;
    //рендерим сохраненные данные
    createPost(saveData)
  } else {
    //если нет, запрашиваем новые данные
    getPosts()
  }
}

// Загрузка данных из кэша при загрузке виджета
loadCachedData();
// Подгрузка новых постов при прокрутке
widget.addEventListener("scroll", function () {
  //Получаем размеры виджета
  const documentRect = postList.getBoundingClientRect();
  //Проверяем, долистал ли пользователь до конца
  if (documentRect.bottom <= widget.clientHeight + 150) {
    //Подгружаем новые посты
    getPosts();
  }
});

// Кэширование данных в localStorage
function saveData(data) {
  data.items.forEach(item => {
    arrSave.push(item)
  })
  // Если количество постов в кэше превышает лимит, удаляем старые
  // Проверяем текущий размер localStorage
  let currentStorageSize = (localStorage.getItem(localStorageKey) || "").length;
  // Если новые данные не умещаются, освобождаем место
  while (JSON.stringify(posts).length + currentStorageSize > sizeLocalStorage) {
    // Удаляем самые старые данные
    const newPosts = JSON.parse(localStorage.getItem(localStorageKey));
    newPosts.shift(); // Удаляем самый старый пост
    //Пересматирваем размер localStorage после удаления поста
    currentStorageSize = (JSON.stringify(localStorage.getItem("data")) || "")
      .length;
  }
    // Обновляем localStorage с новыми данными
    localStorage.setItem(localStorageKey, JSON.stringify(arrSave));
}
